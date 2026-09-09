from __future__ import annotations

import json
import urllib.error

from collector.livebench.collector import LiveBenchCollector
from collector.models import FetchContext
from persistence.hash import sha256_bytes

SOURCE = {
    "benchmark_id": "livebench_coding",
    "status": "enabled",
    "source_name": "LiveBench coding",
    "source_type": "official_site_dated_csv",
    "endpoint": "https://api.github.com/repos/LiveBench/livebench.github.io/contents/public?ref=main",
    "raw_base_url": "https://livebench.ai",
    "category_selector": "coding",
    "fallback_release_id": "2026-06-25",
}


def payload() -> bytes:
    return json.dumps(
        {
            "release": "2026-06-25",
            "directory_url": SOURCE["endpoint"],
            "table_url": "https://example.invalid/table.csv",
            "categories_url": "https://example.invalid/categories.json",
            "categories": {
                "Coding": ["code_generation", "code_completion"],
                "Mathematics": ["math_comp"],
            },
            "csv": (
                "model,code_generation,code_completion,math_comp\n"
                "alpha,0.5,1.0,0.2\n"
                'beta,"",0.8,0.4\n'
            ),
        },
        separators=(",", ":"),
    ).encode()


def test_livebench_normalizes_category_and_preserves_missing_values():
    collector = LiveBenchCollector(SOURCE)
    raw = payload()
    collector._last_fetch = type(
        "Fetch",
        (),
        {
            "content_hash": sha256_bytes(raw),
            "fetch_time": "2026-09-08T00:00:00Z",
            "release_id": "2026-06-25",
        },
    )()
    records = collector.normalize(collector.parse(raw))
    assert len(records) == 2
    assert records[0].score == 0.75
    assert records[0].rank is None
    assert records[0].category == "Coding"
    assert records[1].score == 0.8
    assert records[1].extra["task_scores"]["code_generation"] is None


def test_livebench_overall_averages_category_means_not_all_tasks():
    source = {**SOURCE, "benchmark_id": "livebench_overall", "category_selector": "overall"}
    collector = LiveBenchCollector(source)
    raw = payload()
    collector._last_fetch = type(
        "Fetch",
        (),
        {
            "content_hash": sha256_bytes(raw),
            "fetch_time": "2026-09-08T00:00:00Z",
            "release_id": "2026-06-25",
        },
    )()
    records = collector.normalize(collector.parse(raw))
    assert records[0].score == 0.475
    assert records[0].metric == "global_average"


def test_livebench_release_selection_uses_paired_dated_files():
    collector = LiveBenchCollector(SOURCE)
    directory = [
        {"name": "table_2025_11_25.csv"},
        {"name": "categories_2025_11_25.json"},
        {"name": "table_2026_06_25.csv"},
        {"name": "categories_2026_06_25.json"},
    ]
    assert collector._select_release(directory) == "2026-06-25"


def test_livebench_fetch_uses_verified_fallback_after_directory_rate_limit(monkeypatch):
    collector = LiveBenchCollector(SOURCE)
    raw = payload()
    calls: list[str] = []

    def fake_read(url: str, context: FetchContext) -> bytes:
        calls.append(url)
        if url == SOURCE["endpoint"]:
            raise urllib.error.HTTPError(url, 403, "rate limit", {}, None)
        if url.endswith(".csv"):
            return json.loads(raw)["csv"].encode()
        return json.dumps(json.loads(raw)["categories"]).encode()

    monkeypatch.setattr("collector.livebench.collector._read_url", fake_read)
    result = collector.fetch(FetchContext(fetch_time="2026-09-08T00:00:00Z"))
    assert result.status == "success"
    assert result.release_id == "2026-06-25"
    parsed = json.loads(result.payload)
    assert parsed["discovery_mode"] == "verified_fallback"
    assert parsed["discovery_error"] == "http_403_rate_limit"
    assert calls == [
        SOURCE["endpoint"],
        "https://livebench.ai/table_2026_06_25.csv",
        "https://livebench.ai/categories_2026_06_25.json",
    ]


def test_livebench_rate_limit_without_verified_fallback_fails(monkeypatch):
    source = {key: value for key, value in SOURCE.items() if key != "fallback_release_id"}
    collector = LiveBenchCollector(source)

    def fake_read(url: str, context: FetchContext) -> bytes:
        raise urllib.error.HTTPError(url, 429, "rate limit", {}, None)

    monkeypatch.setattr("collector.livebench.collector._read_url", fake_read)
    result = collector.fetch(FetchContext(fetch_time="2026-09-08T00:00:00Z"))
    assert result.status == "failed"
    assert result.error_message == "http_429_rate_limit"


def test_livebench_fetch_uses_directory_and_paired_raw_assets(monkeypatch):
    collector = LiveBenchCollector(SOURCE)
    raw = payload()
    calls: list[str] = []

    def fake_read(url: str, context: FetchContext) -> bytes:
        calls.append(url)
        if url == SOURCE["endpoint"]:
            return json.dumps(
                [
                    {"name": "table_2026_06_25.csv"},
                    {"name": "categories_2026_06_25.json"},
                ]
            ).encode()
        if url.endswith(".csv"):
            return json.loads(raw)["csv"].encode()
        return json.dumps(json.loads(raw)["categories"]).encode()

    monkeypatch.setattr("collector.livebench.collector._read_url", fake_read)
    result = collector.fetch(FetchContext(fetch_time="2026-09-08T00:00:00Z"))
    assert result.status == "success"
    assert result.release_id == "2026-06-25"
    assert len(calls) == 3
