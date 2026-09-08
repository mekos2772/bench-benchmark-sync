from persistence.hash import sha256_bytes
from persistence.snapshot import SnapshotStore


def test_hash_deduplication_and_no_change(tmp_path):
    store = SnapshotStore(tmp_path / "artifacts")
    payload = b'{"leaderboards":[]}'
    source = {"source_name": "unit", "endpoint": "https://example.invalid"}
    first = store.save("unit", source, "2026-01-01T00:00:00Z", sha256_bytes(payload), payload, [])
    second = store.save("unit", source, "2026-01-02T00:00:00Z", sha256_bytes(payload), payload, [])
    assert first["status"] == "success"
    assert second["status"] == "no_change"
    assert len(list((tmp_path / "artifacts" / "snapshots" / "unit").glob("*.json"))) == 2


def test_last_successful_snapshot_is_preserved(tmp_path):
    store = SnapshotStore(tmp_path / "artifacts")
    payload = b"{}"
    source = {"source_name": "unit", "endpoint": "https://example.invalid"}
    digest = sha256_bytes(payload)
    store.save("unit", source, "2026-01-01T00:00:00Z", digest, payload, [])
    snapshot = store.last_successful_snapshot("unit")
    assert snapshot is not None
    assert snapshot["content_hash"] == digest
