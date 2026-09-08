from __future__ import annotations

from abc import ABC, abstractmethod
from typing import Any

from .models import FetchContext, FetchResult, ModelScore


class BenchmarkCollector(ABC):
    """Common interface for all official benchmark sources."""

    benchmark_id: str

    @abstractmethod
    def describe_source(self) -> dict[str, Any]:
        raise NotImplementedError

    @abstractmethod
    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        raise NotImplementedError

    @abstractmethod
    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        raise NotImplementedError

    @abstractmethod
    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        raise NotImplementedError

    def validate(self, records: list[ModelScore]) -> list[ModelScore]:
        for record in records:
            if not record.benchmark:
                raise ValueError("benchmark is required")
            if not record.metric:
                raise ValueError("metric is required")
            if not record.comparison_key:
                raise ValueError("comparison_key is required")
            if not record.model:
                raise ValueError("model is required")
            if record.score is not None and not isinstance(record.score, (int, float, str)):
                raise ValueError("score must be scalar or null")
            if record.rank is not None and (not isinstance(record.rank, int) or record.rank < 1):
                raise ValueError("rank must be a positive integer or null")
            if record.source_hash is None:
                raise ValueError("source_hash is required")
        return records
