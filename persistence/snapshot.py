from __future__ import annotations

import json
from pathlib import Path
from typing import Any

from persistence.hash import sha256_bytes


class SnapshotStore:
    """Local append-only development store; production retention belongs to SCF/COS."""

    def __init__(self, root: Path):
        self.root = root
        self.raw_root = root / "raw"
        self.snapshot_root = root / "snapshots"
        self.raw_root.mkdir(parents=True, exist_ok=True)
        self.snapshot_root.mkdir(parents=True, exist_ok=True)

    def save(
        self,
        benchmark_id: str,
        source: dict[str, Any],
        fetch_time: str,
        content_hash: str | None,
        raw_payload: bytes,
        records: list[dict[str, Any]],
        status: str = "success",
        error_message: str | None = None,
        release_id: str | None = None,
        commit_sha: str | None = None,
    ) -> dict[str, Any]:
        if not content_hash:
            raise ValueError("content_hash is required")
        benchmark_dir = self.snapshot_root / benchmark_id
        raw_dir = self.raw_root / benchmark_id
        benchmark_dir.mkdir(parents=True, exist_ok=True)
        raw_dir.mkdir(parents=True, exist_ok=True)
        snapshot_path = benchmark_dir / f"{content_hash}.json"
        raw_path = raw_dir / f"{content_hash}.payload"
        if snapshot_path.exists():
            return {
                "status": "no_change",
                "benchmark_id": benchmark_id,
                "content_hash": content_hash,
                "snapshot_path": str(snapshot_path),
                "records": records,
            }
        if sha256_bytes(raw_payload) != content_hash:
            raise ValueError("raw payload hash mismatch")
        raw_path.write_bytes(raw_payload)
        snapshot = {
            "schema_version": "1.0",
            "status": status,
            "benchmark_id": benchmark_id,
            "source": source,
            "fetch_time": fetch_time,
            "release_id": release_id,
            "commit_sha": commit_sha,
            "content_hash": content_hash,
            "error_message": error_message,
            "raw_payload_ref": str(raw_path.relative_to(self.root)),
            "records": records,
        }
        snapshot_path.write_text(
            json.dumps(snapshot, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
        )
        pointer = benchmark_dir / "last_successful.json"
        pointer.write_text(
            json.dumps({"snapshot": snapshot_path.name, "content_hash": content_hash}) + "\n",
            encoding="utf-8",
        )
        return {
            "status": "success",
            "benchmark_id": benchmark_id,
            "content_hash": content_hash,
            "snapshot_path": str(snapshot_path),
            "records": records,
        }

    def last_successful_snapshot(self, benchmark_id: str) -> dict[str, Any] | None:
        pointer = self.snapshot_root / benchmark_id / "last_successful.json"
        if not pointer.exists():
            return None
        data = json.loads(pointer.read_text(encoding="utf-8"))
        snapshot = self.snapshot_root / benchmark_id / data["snapshot"]
        return json.loads(snapshot.read_text(encoding="utf-8")) if snapshot.exists() else None
