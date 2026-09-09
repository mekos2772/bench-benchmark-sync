from __future__ import annotations

import csv
import io
import json
import re
import urllib.error
import urllib.request
from typing import Any

from collector.base import BenchmarkCollector
from collector.models import FetchContext, FetchResult, ModelScore, SourceRef
from persistence.hash import sha256_bytes

_DATE_FILE = re.compile(r"^(?:table|categories)_(\d{4}_\d{2}_\d{2})\.(?:csv|json)$")

CATEGORY_ALIASES = {
    "overall": "overall",
    "coding": "Coding",
    "math": "Mathematics",
    "mathematics": "Mathematics",
    "reasoning": "Reasoning",
    "data_analysis": "Data Analysis",
    "data analysis": "Data Analysis",
    "language": "Language",
    "instruction_following": "IF",
    "instruction following": "IF",
    "if": "IF",
    "agentic_coding": "Agentic Coding",
    "agentic coding": "Agentic Coding",
}


class LiveBenchCollector(BenchmarkCollector):
    """Collect one independent LiveBench board from dated official assets."""

    def __init__(self, source: dict[str, Any]):
        self.source = source
        self.benchmark_id = source["benchmark_id"]
        self._last_fetch: FetchResult | None = None
        self._parsed_categories: dict[str, list[str]] = {}
        self._parsed_release: str | None = None
        self._parsed_urls: dict[str, str] = {}

    def describe_source(self) -> dict[str, Any]:
        return dict(self.source)

    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        context = context or FetchContext()
        directory_url = self.source["endpoint"]
        raw_base = self.source.get(
            "raw_base_url",
            "https://livebench.ai",
        ).rstrip("/")
        discovery_mode = "directory"
        discovery_error: str | None = None
        try:
            directory_payload = _read_url(directory_url, context)
            directory = json.loads(directory_payload)
            release = self._select_release(directory)
        except urllib.error.HTTPError as exc:
            if exc.code not in {403, 429}:
                return self._failed_result(context, f"http_{exc.code}")
            fallback = self.source.get("fallback_release_id")
            if not fallback:
                return self._failed_result(context, f"http_{exc.code}_rate_limit")
            release = str(fallback)
            discovery_mode = "verified_fallback"
            discovery_error = f"http_{exc.code}_rate_limit"
        except (json.JSONDecodeError, ValueError) as exc:
            return self._failed_result(context, type(exc).__name__)
        except Exception as exc:  # pragma: no cover - network failure is integration behavior
            return self._failed_result(context, type(exc).__name__)

        table_url = f"{raw_base}/table_{release.replace('-', '_')}.csv"
        categories_url = f"{raw_base}/categories_{release.replace('-', '_')}.json"
        try:
            csv_payload = _read_url(table_url, context)
            categories_payload = _read_url(categories_url, context)
            categories = json.loads(categories_payload)
            if not isinstance(categories, dict):
                raise ValueError("LiveBench categories payload must be an object")
            envelope = json.dumps(
                {
                    "release": release,
                    "csv": csv_payload.decode("utf-8"),
                    "categories": categories,
                    "table_url": table_url,
                    "categories_url": categories_url,
                    "directory_url": directory_url,
                    "discovery_mode": discovery_mode,
                    "discovery_error": discovery_error,
                },
                ensure_ascii=False,
                sort_keys=True,
                separators=(",", ":"),
            ).encode("utf-8")
        except Exception as exc:  # pragma: no cover - network failure is integration behavior
            return self._failed_result(context, _error_message(exc))
        result = FetchResult(
            status="success",
            payload=envelope,
            fetch_time=context.fetch_time,
            content_hash=sha256_bytes(envelope),
            release_id=release,
        )
        self._last_fetch = result
        return result

    def _failed_result(self, context: FetchContext, error_message: str) -> FetchResult:
        result = FetchResult(
            status="failed",
            payload=None,
            fetch_time=context.fetch_time,
            content_hash=None,
            release_id=None,
            error_message=error_message,
        )
        self._last_fetch = result
        return result

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        if isinstance(raw_payload, bytes):
            raw_payload = raw_payload.decode("utf-8")
        payload = json.loads(raw_payload) if isinstance(raw_payload, str) else raw_payload
        if not isinstance(payload, dict):
            raise ValueError("LiveBench payload must be an object")
        csv_text = payload.get("csv")
        categories = payload.get("categories")
        release = payload.get("release")
        if not isinstance(csv_text, str) or not isinstance(categories, dict) or not release:
            raise ValueError("LiveBench payload requires release, csv, and categories")
        parsed_categories: dict[str, list[str]] = {}
        for name, tasks in categories.items():
            if not isinstance(name, str) or not isinstance(tasks, list):
                raise ValueError("LiveBench category taxonomy must map names to task lists")
            parsed_categories[name] = [str(task) for task in tasks]
        rows = list(csv.DictReader(io.StringIO(csv_text)))
        if not rows or not rows[0].get("model"):
            raise ValueError("LiveBench CSV must contain model rows")
        self._parsed_categories = parsed_categories
        self._parsed_release = str(release)
        self._parsed_urls = {
            "table_url": str(payload.get("table_url")),
            "categories_url": str(payload.get("categories_url")),
            "directory_url": str(payload.get("directory_url", self.source["endpoint"])),
            "discovery_mode": str(payload.get("discovery_mode", "directory")),
        }
        if payload.get("discovery_error"):
            self._parsed_urls["discovery_error"] = str(payload["discovery_error"])
        return rows

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        if self._last_fetch is None or self._last_fetch.content_hash is None:
            raise ValueError("normalize requires a successful fetch")
        if not self._parsed_release or not self._parsed_categories:
            raise ValueError("normalize requires parsed LiveBench metadata")
        selector = str(self.source.get("category_selector", "overall"))
        category_name = CATEGORY_ALIASES.get(selector.lower(), selector)
        if category_name != "overall" and category_name not in self._parsed_categories:
            raise ValueError(f"LiveBench category not present in release: {category_name}")
        if category_name == "overall":
            category_tasks = list(self._parsed_categories)
            metric = "global_average"
        else:
            category_tasks = [category_name]
            metric = "category_average"
        source_hash = self._last_fetch.content_hash
        source_ref = SourceRef(
            source_name=self.source["source_name"],
            source_type=self.source["source_type"],
            endpoint=self.source["endpoint"],
            release_id=self._parsed_release,
            content_hash=source_hash,
        )
        normalized: list[ModelScore] = []
        for row in records:
            model = str(row.get("model") or "").strip()
            if not model:
                raise ValueError("LiveBench row requires model")
            category_scores: dict[str, float | None] = {}
            for category in category_tasks:
                task_scores = [
                    _number(row.get(task))
                    for task in self._parsed_categories[category]
                    if task in row
                ]
                values = [score for score in task_scores if score is not None]
                category_scores[category] = _mean(values) if values else None
            values = [score for score in category_scores.values() if score is not None]
            score = _mean(values) if values else None
            normalized.append(
                ModelScore(
                    benchmark=self.benchmark_id,
                    release=self._parsed_release,
                    metric=metric,
                    comparison_key=(f"{self._parsed_release}:{category_name}:{metric}:{model}"),
                    model=model,
                    provider=None,
                    score=score,
                    rank=None,
                    timestamp=self._last_fetch.fetch_time,
                    source_hash=source_hash,
                    category=category_name,
                    version=self._parsed_release,
                    source=source_ref,
                    last_verified=self._last_fetch.fetch_time,
                    extra={
                        "official_category": category_name,
                        "category_scores": category_scores,
                        "task_scores": {
                            task: _number(row.get(task))
                            for category in category_tasks
                            for task in self._parsed_categories[category]
                            if task in row
                        },
                        "release_urls": self._parsed_urls,
                        "calculation": (
                            "mean of category means"
                            if category_name == "overall"
                            else "mean of available task scores"
                        ),
                    },
                )
            )
        return normalized

    def _select_release(self, directory: Any) -> str:
        if not isinstance(directory, list):
            raise ValueError("LiveBench directory payload must be a list")
        requested = self.source.get("release_id")
        tables: set[str] = set()
        categories: set[str] = set()
        for entry in directory:
            if not isinstance(entry, dict):
                continue
            name = entry.get("name")
            if not isinstance(name, str):
                continue
            match = _DATE_FILE.match(name)
            if not match:
                continue
            date = match.group(1).replace("_", "-")
            if name.startswith("table_"):
                tables.add(date)
            else:
                categories.add(date)
        paired = tables & categories
        if requested:
            requested = str(requested)
            if requested not in paired:
                raise ValueError(f"requested LiveBench release is unavailable: {requested}")
            return requested
        if not paired:
            raise ValueError("no paired LiveBench table/categories release found")
        return max(paired)


def _read_url(url: str, context: FetchContext) -> bytes:
    request = urllib.request.Request(
        url,
        headers={"Accept": "application/json, text/csv", "User-Agent": context.user_agent},
        method="GET",
    )
    with urllib.request.urlopen(request, timeout=context.timeout_seconds) as response:
        return response.read()


def _error_message(exc: Exception) -> str:
    if isinstance(exc, urllib.error.HTTPError):
        return f"http_{exc.code}"
    return type(exc).__name__


def _number(value: Any) -> float | None:
    if value in (None, ""):
        return None
    try:
        return float(value)
    except (TypeError, ValueError):
        return None


def _mean(values: list[float]) -> float:
    """Naive left-to-right sum, matching the official frontend's reduce-based mean."""
    return sum(values) / len(values)
