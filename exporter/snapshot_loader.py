from __future__ import annotations

import json
from pathlib import Path
from typing import Any


class SnapshotLoadError(ValueError):
    pass


_ALLOWED_STATUSES = {'success', 'no_change'}


def _read_json(path: Path) -> dict[str, Any]:
    try:
        value = json.loads(path.read_text(encoding='utf-8'))
    except (OSError, json.JSONDecodeError) as exc:
        raise SnapshotLoadError(f'cannot read snapshot: {path}') from exc
    if not isinstance(value, dict):
        raise SnapshotLoadError('snapshot must be a JSON object')
    return value


def validate_snapshot(
    snapshot: dict[str, Any],
    *,
    expected_benchmark_id: str | None = None,
) -> dict[str, Any]:
    status = snapshot.get('status')
    if status not in _ALLOWED_STATUSES:
        raise SnapshotLoadError(f'export requires success/no_change snapshot, got {status!r}')
    required = ('schema_version', 'benchmark_id', 'source', 'fetch_time', 'content_hash', 'records')
    missing = [key for key in required if key not in snapshot]
    if missing:
        raise SnapshotLoadError(f'snapshot missing required fields: {", ".join(missing)}')
    benchmark_id = snapshot['benchmark_id']
    if not isinstance(benchmark_id, str) or not benchmark_id:
        raise SnapshotLoadError('benchmark_id must be a non-empty string')
    if expected_benchmark_id and benchmark_id != expected_benchmark_id:
        raise SnapshotLoadError(
            f'benchmark mismatch: expected {expected_benchmark_id}, received {benchmark_id}'
        )
    if not isinstance(snapshot['source'], dict):
        raise SnapshotLoadError('source must be an object')
    if not isinstance(snapshot['records'], list):
        raise SnapshotLoadError('records must be an array')
    content_hash = snapshot['content_hash']
    if not isinstance(content_hash, str) or len(content_hash) != 64:
        raise SnapshotLoadError('content_hash must be a 64-character string')
    if not snapshot['records']:
        raise SnapshotLoadError('empty snapshot cannot be exported')
    return snapshot


def load_snapshot_path(path: Path, *, expected_benchmark_id: str | None = None) -> dict[str, Any]:
    return validate_snapshot(_read_json(path), expected_benchmark_id=expected_benchmark_id)


def load_snapshot(root: Path, benchmark_id: str, content_hash: str | None = None) -> dict[str, Any]:
    snapshot_dir = root / 'snapshots' / benchmark_id
    if content_hash:
        path = snapshot_dir / f'{content_hash}.json'
    else:
        pointer = snapshot_dir / 'last_successful.json'
        if not pointer.exists():
            raise SnapshotLoadError(f'no last_successful pointer for {benchmark_id}')
        pointer_data = _read_json(pointer)
        filename = pointer_data.get('snapshot')
        if not isinstance(filename, str) or not filename:
            raise SnapshotLoadError(f'invalid last_successful pointer for {benchmark_id}')
        path = snapshot_dir / filename
    if not path.exists():
        raise SnapshotLoadError(f'snapshot file does not exist: {path}')
    return load_snapshot_path(path, expected_benchmark_id=benchmark_id)
