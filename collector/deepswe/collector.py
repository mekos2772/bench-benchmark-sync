from __future__ import annotations

import json
import urllib.request
from typing import Any

from collector.base import BenchmarkCollector
from collector.models import FetchContext, FetchResult, ModelScore, SourceRef
from persistence.hash import sha256_bytes


class DeepSWECollector(BenchmarkCollector):
    """Collect an official versioned DeepSWE aggregate leaderboard JSON."""

    def __init__(self, source: dict[str, Any]):
        self.source = source
        self.benchmark_id = source["benchmark_id"]
        self._last_fetch: FetchResult | None = None
        self._payload: dict[str, Any] | None = None

    def describe_source(self) -> dict[str, Any]:
        return dict(self.source)

    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        context = context or FetchContext()
        request = urllib.request.Request(
            self.source["endpoint"],
            headers={"Accept": "application/json", "User-Agent": context.user_agent},
            method="GET",
        )
        release = str(self.source.get("release_id") or self.source.get("version") or "unknown")
        try:
            with urllib.request.urlopen(request, timeout=context.timeout_seconds) as response:
                payload = response.read()
        except Exception as exc:  # pragma: no cover - network failure is integration behavior
            result = FetchResult(
                status="failed",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                release_id=release,
                error_message=type(exc).__name__,
            )
            self._last_fetch = result
            return result
        try:
            parsed = json.loads(payload.decode("utf-8"))
            if not isinstance(parsed, dict):
                raise ValueError("DeepSWE payload must be an object")
            payload_release = parsed.get("release") or parsed.get("version")
            if payload_release:
                release = str(payload_release)
        except (UnicodeDecodeError, json.JSONDecodeError, ValueError):
            parsed = None
        result = FetchResult(
            status="success",
            payload=payload,
            fetch_time=context.fetch_time,
            content_hash=sha256_bytes(payload),
            release_id=release,
        )
        self._payload = parsed
        self._last_fetch = result
        return result

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        if isinstance(raw_payload, bytes):
            raw_payload = raw_payload.decode("utf-8")
        payload = json.loads(raw_payload) if isinstance(raw_payload, str) else raw_payload
        if not isinstance(payload, dict) or not isinstance(payload.get("rows"), list):
            raise ValueError("DeepSWE payload must contain rows[]")
        self._payload = payload
        return [row for row in payload["rows"] if isinstance(row, dict)]

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        if self._last_fetch is None or self._last_fetch.content_hash is None:
            raise ValueError("normalize requires a successful fetch")
        release = self._release_id()
        source_hash = self._last_fetch.content_hash
        fetch_time = self._last_fetch.fetch_time
        source_ref = SourceRef(
            source_name=self.source["source_name"],
            source_type=self.source["source_type"],
            endpoint=self.source["endpoint"],
            release_id=release,
            content_hash=source_hash,
        )
        payload_metadata = {}
        if self._payload:
            payload_metadata = {
                "generated_at": self._payload.get("generated_at"),
                "latest_job": self._payload.get("latest_job"),
                "n_tasks_in_set": self._payload.get("n_tasks_in_set"),
                "scope": self._payload.get("scope"),
                "unit": self._payload.get("unit"),
            }
        normalized: list[ModelScore] = []
        for record in records:
            model = record.get("model")
            config = record.get("config")
            if not model or not config:
                raise ValueError("DeepSWE row requires model and config")
            known = {
                "model",
                "harness",
                "provider",
                "reasoning_effort",
                "config",
                "pass_rate",
                "rank",
                "source",
                "cost_basis",
            }
            extra = {key: value for key, value in record.items() if key not in known}
            extra.update(
                {
                    "harness": record.get("harness"),
                    "reasoning_effort": record.get("reasoning_effort"),
                    "config": config,
                    **payload_metadata,
                }
            )
            normalized.append(
                ModelScore(
                    benchmark=self.benchmark_id,
                    release=release,
                    metric="pass_rate",
                    comparison_key=str(config),
                    model=str(model),
                    provider=_optional_string(record.get("provider")),
                    score=record.get("pass_rate"),
                    rank=record.get("rank"),
                    timestamp=fetch_time,
                    source_hash=source_hash,
                    category="software_engineering_agent",
                    version=release,
                    source=source_ref,
                    last_verified=fetch_time,
                    extra=extra,
                )
            )
        return normalized

    def _release_id(self) -> str:
        if self._payload:
            value = self._payload.get("release") or self._payload.get("version")
            if value:
                return str(value)
        return str(getattr(self._last_fetch, "release_id", None) or "unknown")


def _optional_string(value: Any) -> str | None:
    return str(value) if value is not None else None
