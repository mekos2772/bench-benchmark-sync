from __future__ import annotations

import json
import urllib.request
from typing import Any

from collector.base import BenchmarkCollector
from collector.models import FetchContext, FetchResult, ModelScore, SourceRef
from persistence.hash import sha256_bytes


class DeepSWECollector(BenchmarkCollector):
    """Collect the official DeepSWE v1.1 aggregate leaderboard JSON."""

    def __init__(self, source: dict[str, Any]):
        self.source = source
        self.benchmark_id = source["benchmark_id"]
        self._last_fetch: FetchResult | None = None

    def describe_source(self) -> dict[str, Any]:
        return dict(self.source)

    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        context = context or FetchContext()
        request = urllib.request.Request(
            self.source["endpoint"],
            headers={"Accept": "application/json", "User-Agent": context.user_agent},
            method="GET",
        )
        try:
            with urllib.request.urlopen(request, timeout=context.timeout_seconds) as response:
                payload = response.read()
        except Exception as exc:  # pragma: no cover - network failure is integration behavior
            result = FetchResult(
                status="failed",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                release_id="v1.1",
                error_message=type(exc).__name__,
            )
            self._last_fetch = result
            return result
        result = FetchResult(
            status="success",
            payload=payload,
            fetch_time=context.fetch_time,
            content_hash=sha256_bytes(payload),
            release_id="v1.1",
        )
        self._last_fetch = result
        return result

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        if isinstance(raw_payload, bytes):
            raw_payload = raw_payload.decode("utf-8")
        payload = json.loads(raw_payload) if isinstance(raw_payload, str) else raw_payload
        if not isinstance(payload, dict) or not isinstance(payload.get("rows"), list):
            raise ValueError("DeepSWE payload must contain rows[]")
        return [row for row in payload["rows"] if isinstance(row, dict)]

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        if self._last_fetch is None or self._last_fetch.content_hash is None:
            raise ValueError("normalize requires a successful fetch")
        source_hash = self._last_fetch.content_hash
        fetch_time = self._last_fetch.fetch_time
        source_ref = SourceRef(
            source_name=self.source["source_name"],
            source_type=self.source["source_type"],
            endpoint=self.source["endpoint"],
            release_id="v1.1",
            content_hash=source_hash,
        )
        normalized: list[ModelScore] = []
        for record in records:
            model = record.get("model")
            config = record.get("config")
            if not model or not config:
                raise ValueError("DeepSWE row requires model and config")
            comparison_key = str(config)
            normalized.append(
                ModelScore(
                    benchmark=self.benchmark_id,
                    release="v1.1",
                    metric="pass_rate",
                    comparison_key=comparison_key,
                    model=str(model),
                    provider=_optional_string(record.get("provider")),
                    score=record.get("pass_rate"),
                    rank=record.get("rank"),
                    timestamp=fetch_time,
                    source_hash=source_hash,
                    category="software_engineering_agent",
                    version="v1.1",
                    source=source_ref,
                    last_verified=fetch_time,
                    extra={
                        "harness": record.get("harness"),
                        "reasoning_effort": record.get("reasoning_effort"),
                        "config": config,
                        "pass_at_1": record.get("pass_at_1"),
                        "pass_at_4": record.get("pass_at_4"),
                        "n_tasks_attempted": record.get("n_tasks_attempted"),
                        "n_tasks_passed_any": record.get("n_tasks_passed_any"),
                        "n_runs": record.get("n_runs"),
                    },
                )
            )
        return normalized


def _optional_string(value: Any) -> str | None:
    return str(value) if value is not None else None
