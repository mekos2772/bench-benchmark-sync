from __future__ import annotations

from dataclasses import dataclass, field
from datetime import datetime, timezone
from typing import Any


def utc_now() -> str:
    return datetime.now(timezone.utc).replace(microsecond=0).isoformat().replace("+00:00", "Z")


@dataclass(frozen=True)
class SourceRef:
    source_name: str
    source_type: str
    endpoint: str | None
    release_id: str | None = None
    commit_sha: str | None = None
    content_hash: str | None = None

    def to_dict(self) -> dict[str, Any]:
        return {
            "source_name": self.source_name,
            "source_type": self.source_type,
            "endpoint": self.endpoint,
            "release_id": self.release_id,
            "commit_sha": self.commit_sha,
            "content_hash": self.content_hash,
        }


@dataclass
class ModelScore:
    benchmark: str
    release: str | None
    metric: str
    comparison_key: str
    model: str
    provider: str | None
    score: float | int | str | None
    rank: int | None
    timestamp: str
    source_hash: str | None
    category: str | None = None
    version: str | None = None
    source: SourceRef | None = None
    benchmark_weight: float | None = None
    confidence_score: float | None = None
    source_reliability: float | None = None
    last_verified: str | None = None
    extra: dict[str, Any] = field(default_factory=dict)

    def to_dict(self) -> dict[str, Any]:
        result: dict[str, Any] = {
            "benchmark": self.benchmark,
            "release": self.release,
            "metric": self.metric,
            "comparison_key": self.comparison_key,
            "model": self.model,
            "provider": self.provider,
            "score": self.score,
            "rank": self.rank,
            "timestamp": self.timestamp,
            "source_hash": self.source_hash,
            "category": self.category,
            "version": self.version,
            "source": self.source.to_dict() if self.source else None,
            "benchmark_weight": self.benchmark_weight,
            "confidence_score": self.confidence_score,
            "source_reliability": self.source_reliability,
            "last_verified": self.last_verified,
        }
        result.update(self.extra)
        return result


@dataclass(frozen=True)
class FetchContext:
    timeout_seconds: int = 30
    user_agent: str = "bench-benchmark-sync/0.1"
    fetch_time: str = field(default_factory=utc_now)


@dataclass
class FetchResult:
    status: str
    payload: bytes | None
    fetch_time: str
    content_hash: str | None
    release_id: str | None = None
    commit_sha: str | None = None
    error_message: str | None = None


class CollectorError(RuntimeError):
    """A source or payload failed a collector contract."""
