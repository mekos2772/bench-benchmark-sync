from __future__ import annotations

import json
import urllib.request
from datetime import datetime, timezone
from typing import Any

from collector.base import BenchmarkCollector
from collector.models import FetchContext, FetchResult, ModelScore, SourceRef, utc_now
from persistence.hash import sha256_bytes


class SWEbenchCollector(BenchmarkCollector):
    """Collect one named board from the official SWE-bench JSON file."""

    def __init__(self, source: dict[str, Any], board_name: str):
        self.source = source
        self.board_name = board_name
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
                error_message=type(exc).__name__,
            )
            self._last_fetch = result
            return result
        result = FetchResult(
            status="success",
            payload=payload,
            fetch_time=context.fetch_time,
            content_hash=sha256_bytes(payload),
        )
        self._last_fetch = result
        return result

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        if isinstance(raw_payload, bytes):
            raw_payload = raw_payload.decode("utf-8")
        payload = json.loads(raw_payload) if isinstance(raw_payload, str) else raw_payload
        if not isinstance(payload, dict) or not isinstance(payload.get("leaderboards"), list):
            raise ValueError("SWE-bench payload must contain leaderboards[]")
        records: list[dict[str, Any]] = []
        for board in payload["leaderboards"]:
            if not isinstance(board, dict) or board.get("name") != self.board_name:
                continue
            results = board.get("results", [])
            if not isinstance(results, list):
                raise ValueError(f"{self.board_name} results must be a list")
            for result in results:
                if not isinstance(result, dict):
                    raise ValueError("SWE-bench result must be an object")
                records.append({"board": board["name"], **result})
        return records

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        if self._last_fetch is None or self._last_fetch.content_hash is None:
            raise ValueError("normalize requires a successful fetch")
        source_hash = self._last_fetch.content_hash
        fetch_time = self._last_fetch.fetch_time
        source_ref = SourceRef(
            source_name=self.source["source_name"],
            source_type=self.source["source_type"],
            endpoint=self.source["endpoint"],
            release_id=self.board_name,
            content_hash=source_hash,
        )
        normalized: list[ModelScore] = []
        for record in records:
            raw_date = record.get("date")
            timestamp = _date_to_timestamp(raw_date) if raw_date else fetch_time
            model = record.get("model_display") or record.get("name") or record.get("agent")
            provider = record.get("model_org") or record.get("agent_org")
            if not model:
                raise ValueError("SWE-bench result has no model name")
            normalized.append(
                ModelScore(
                    benchmark=self.benchmark_id,
                    release=self.board_name,
                    metric="resolved_rate",
                    comparison_key=self.board_name,
                    model=str(model),
                    provider=str(provider) if provider is not None else None,
                    score=record.get("resolved"),
                    rank=record.get("rank"),
                    timestamp=timestamp,
                    source_hash=source_hash,
                    category=self.board_name,
                    version=record.get("folder"),
                    source=source_ref,
                    last_verified=fetch_time,
                    extra={
                        "agent": record.get("agent"),
                        "agent_org": record.get("agent_org"),
                        "evaluation_date": raw_date,
                    },
                )
            )
        return normalized


def _date_to_timestamp(value: Any) -> str:
    if isinstance(value, str):
        try:
            return (
                datetime.fromisoformat(value)
                .replace(tzinfo=timezone.utc)
                .isoformat()
                .replace("+00:00", "Z")
            )
        except ValueError:
            return value
    return utc_now()
