from __future__ import annotations

from typing import Any

from .base import BenchmarkCollector
from .models import FetchContext, FetchResult, ModelScore


class ManualReviewCollector(BenchmarkCollector):
    """Safe no-network stub for sources without verified structured data."""

    def __init__(self, source: dict[str, Any]):
        self.source = source
        self.benchmark_id = source["benchmark_id"]

    def describe_source(self) -> dict[str, Any]:
        return dict(self.source)

    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        now = context.fetch_time if context else ""
        return FetchResult(
            status=self.source["status"],
            payload=None,
            fetch_time=now,
            content_hash=None,
            error_message=self.source.get("notes"),
        )

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        return []

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        return []
