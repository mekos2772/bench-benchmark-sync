
from collector.deepswe.collector import DeepSWECollector
from persistence.hash import sha256_bytes

SOURCE = {
    "benchmark_id": "deepswe_v1_1",
    "status": "enabled",
    "source_name": "DeepSWE v1.1 official leaderboard JSON",
    "source_type": "official_json",
    "endpoint": "https://example.invalid/leaderboard-live.json",
}


def test_deepswe_normalizes_rows_without_inventing_rank():
    collector = DeepSWECollector(SOURCE)
    payload = (
        b'{"scope":"unit","generated_at":"2026-01-01T00:00:00Z",'
        b'"rows":[{"model":"unit-model","harness":"unit-harness",'
        b'"provider":"unit","reasoning_effort":"high",'
        b'"config":"unit-config","pass_rate":0.5,"pass_at_1":0.5,'
        b'"pass_at_4":0.75,"n_tasks_attempted":2}]}'
    )
    collector._last_fetch = type(
        "Fetch",
        (),
        {"content_hash": sha256_bytes(payload), "fetch_time": "2026-01-02T00:00:00Z"},
    )()
    records = collector.normalize(collector.parse(payload))
    assert len(records) == 1
    assert records[0].benchmark == "deepswe_v1_1"
    assert records[0].comparison_key == "unit-config"
    assert records[0].score == 0.5
    assert records[0].rank is None
    assert records[0].extra["harness"] == "unit-harness"


def test_deepswe_payload_requires_rows():
    collector = DeepSWECollector(SOURCE)
    try:
        collector.parse(b'{"items":[]}')
    except ValueError as exc:
        assert "rows" in str(exc)
    else:
        raise AssertionError("payload without rows must fail")
