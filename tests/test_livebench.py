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
    "endpoint": "https://api.github.com/repos/LiveBench/new-livebench/contents?ref=gh-pages",
    "raw_base_url": "https://livebench.ai",
    "category_selector": "coding",
    "fallback_release_id": "2026-09-02",
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
    assert result.release_id == "2026-09-02"
    parsed = json.loads(result.payload)
    assert parsed["discovery_mode"] == "verified_fallback"
    assert parsed["discovery_error"] == "http_403_rate_limit"
    assert calls == [
        SOURCE["endpoint"],
        "https://livebench.ai/table_2026_09_02.csv",
        "https://livebench.ai/categories_2026_09_02.json",
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


def test_livebench_discovers_current_site_layout_and_long_agentic(monkeypatch):
    source = {**SOURCE, 'endpoint': 'https://livebench.ai/',
              'asset_layout': 'release_directory', 'category_selector': 'long_horizon'}
    source.pop('fallback_release_id')
    calls = []

    def fake_read(url, context):
        calls.append(url)
        if url == source['endpoint']:
            return b'<script src="./static/js/main.abc.js"></script>'
        if url.endswith('main.abc.js'):
            return b'const releases=["20260902","20261014"];'
        if url.endswith('table.csv'):
            return b'model,long_agentic\nbeam-1.0,17.3\nclaude-fable-5.1,80.8\n'
        if url.endswith('categories.json'):
            return b'{"Long Agentic":["long_agentic"]}'
        raise AssertionError(url)

    monkeypatch.setattr('collector.livebench.collector._read_url', fake_read)
    collector = LiveBenchCollector(source)
    result = collector.fetch()
    assert result.status == 'success'
    assert result.release_id == '2026-10-14'
    records = collector.normalize(collector.parse(result.payload))
    assert [r.score for r in records] == [17.3, 80.8]
    assert records[0].category == 'Long Agentic'
    assert calls[-2:] == ['https://livebench.ai/data/20261014/table.csv',
                          'https://livebench.ai/data/20261014/categories.json']


def test_livebench_site_discovery_does_not_guess_when_bundle_changes(monkeypatch):
    source = {**SOURCE, 'endpoint': 'https://livebench.ai/',
              'asset_layout': 'release_directory'}
    monkeypatch.setattr('collector.livebench.collector._read_url', lambda *args: b'no releases')
    result = LiveBenchCollector(source).fetch()
    assert result.status == 'failed'
    assert result.error_message.startswith('ValueError: no LiveBench release date')


def test_livebench_finds_new_release_in_module_bundle_without_array(monkeypatch):
    source = {
        **SOURCE,
        "endpoint": "https://livebench.ai/",
        "asset_layout": "release_directory",
        "category_selector": "long_horizon",
    }
    source.pop("fallback_release_id")
    calls = []

    def fake_read(url, context):
        calls.append(url)
        if url == source["endpoint"]:
            return (
                b'<script src="https://analytics.example/tracker.js"></script>'
                b'<script type="module" src="/assets/index.abcd.js"></script>'
            )
        if url.endswith("index.abcd.js"):
            return b'const releases = [{id:"2026-10-14"},{id:"2026-10-25"}];'
        if url.endswith("table.csv"):
            return b'model,long_agentic\nalpha,70\n'
        if url.endswith("categories.json"):
            return b'{"Long Agentic":["long_agentic"]}'
        raise AssertionError(url)

    monkeypatch.setattr("collector.livebench.collector._read_url", fake_read)
    collector = LiveBenchCollector(source)
    result = collector.fetch()
    assert result.status == "success"
    assert result.release_id == "2026-10-25"
    assert collector.normalize(collector.parse(result.payload))[0].score == 70.0
    assert not any("analytics.example" in url for url in calls)
    assert calls[-2:] == [
        "https://livebench.ai/data/20261025/table.csv",
        "https://livebench.ai/data/20261025/categories.json",
    ]


def test_livebench_v2_weighted_overall_ignores_metadata_as_category():
    source = {**SOURCE, "benchmark_id": "livebench_overall", "category_selector": "overall"}
    collector = LiveBenchCollector(source)
    raw = json.dumps({
        "release": "2026-10-25",
        "csv": "model,code,design,agent\nalpha,60,80,50\n",
        "categories": {
            "Coding": ["code"],
            "Design": ["design"],
            "Long Agentic": ["agent"],
            "_overall_weights": {"Coding": 1.5, "Design": 1.5, "Long Agentic": 2.0},
        },
    }).encode()
    collector._last_fetch = type(
        "Fetch",
        (),
        {"content_hash": sha256_bytes(raw), "fetch_time": "2026-10-27T00:00:00Z"},
    )()
    records = collector.normalize(collector.parse(raw))
    assert records[0].metric == "weighted_category_average"
    assert records[0].score == 62.0
    assert "_overall_weights" not in records[0].extra["category_scores"]
    assert records[0].extra["category_weights"]["Long Agentic"] == 2.0


def test_livebench_v2_long_horizon_uses_long_agentic_not_overall_weight():
    source = {**SOURCE, "benchmark_id": "livebench_long_horizon", "category_selector": "long_horizon"}
    collector = LiveBenchCollector(source)
    raw = json.dumps({
        "release": "2026-10-25",
        "csv": "model,code,agent\nalpha,60,50\n",
        "categories": {
            "Coding": ["code"],
            "Long Agentic": ["agent"],
            "_overall_weights": {"Coding": 1.5, "Long Agentic": 2.0},
        },
    }).encode()
    collector._last_fetch = type(
        "Fetch",
        (),
        {"content_hash": sha256_bytes(raw), "fetch_time": "2026-10-27T00:00:00Z"},
    )()
    records = collector.normalize(collector.parse(raw))
    assert records[0].score == 50.0
    assert records[0].category == "Long Agentic"
