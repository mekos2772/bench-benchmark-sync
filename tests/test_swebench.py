import json

from collector.swebench.collector import SWEbenchCollector
from persistence.hash import sha256_bytes

SOURCE = {
    "benchmark_id": "swebench",
    "status": "enabled",
    "source_name": "official",
    "source_type": "official_github_raw",
    "endpoint": "https://example.invalid/leaderboards.json",
}


def test_swebench_parser_keeps_board_isolation_and_null_rank():
    collector = SWEbenchCollector(SOURCE, board_name="Test")
    payload = json.dumps(
        {
            "leaderboards": [
                {"name": "Verified", "results": [{"model_display": "other", "resolved": 99}]},
                {
                    "name": "Test",
                    "results": [
                        {
                            "model_display": "unit-test-model",
                            "model_org": "unit",
                            "resolved": None,
                            "date": "2026-01-01",
                            "folder": "release-x",
                        }
                    ],
                },
            ]
        }
    ).encode()
    collector._last_fetch = type(
        "Fetch", (), {"content_hash": sha256_bytes(payload), "fetch_time": "2026-01-02T00:00:00Z"}
    )()
    records = collector.normalize(collector.parse(payload))
    assert len(records) == 1
    assert records[0].benchmark == "swebench"
    assert records[0].comparison_key == "Test"
    assert records[0].score is None
    assert records[0].rank is None


def test_verified_collector_is_separate():
    collector = SWEbenchCollector(
        {**SOURCE, "benchmark_id": "swebench_verified"}, board_name="Verified"
    )
    payload = b'{"leaderboards":[{"name":"Test","results":[]},{"name":"Verified","results":[]}]}'
    collector._last_fetch = type(
        "Fetch", (), {"content_hash": sha256_bytes(payload), "fetch_time": "2026-01-02T00:00:00Z"}
    )()
    assert collector.parse(payload) == []
