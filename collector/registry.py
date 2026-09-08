from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

from .base import BenchmarkCollector
from .manual_review import ManualReviewCollector
from .swebench.collector import SWEbenchCollector


class CollectorRegistry:
    def __init__(self, source_config: Path):
        self.source_config = source_config
        self.sources = self._load_sources(source_config)

    @staticmethod
    def _load_sources(path: Path) -> dict[str, dict[str, Any]]:
        data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
        entries = data.get("sources", [])
        return {entry["benchmark_id"]: entry for entry in entries}

    def source_ids(self) -> list[str]:
        return sorted(self.sources)

    def enabled_ids(self) -> list[str]:
        return sorted(k for k, v in self.sources.items() if v.get("status") == "enabled")

    def create(self, benchmark_id: str) -> BenchmarkCollector:
        source = self.sources.get(benchmark_id)
        if source is None:
            raise KeyError(f"unknown benchmark: {benchmark_id}")
        if benchmark_id == "swebench":
            return SWEbenchCollector(source, board_name="Test")
        if benchmark_id == "swebench_verified":
            return SWEbenchCollector(source, board_name="Verified")
        return ManualReviewCollector(source)
