from __future__ import annotations

import re
from typing import Any

_HASH_RE = re.compile(r'^[0-9a-fA-F]{64}$')
_BOARD_REQUIRED = (
    'rankingId',
    'benchmarkId',
    'familyId',
    'title',
    'category',
    'release',
    'releaseId',
    'metric',
    'unit',
    'snapshotId',
    'contentHash',
    'generatedAt',
    'taskCount',
    'source',
    'entries',
)
_UNITS = {'score', 'ratio', 'raw'}


class ExportContractError(ValueError):
    pass


def _require(value: Any, field: str) -> None:
    if value is None or value == '':
        raise ExportContractError(f'missing required export field: {field}')


def _decimals_ok(value: Any, unit: str) -> bool:
    number = float(value)
    digits = 4 if unit == 'ratio' else 2
    factor = 10 ** digits
    return abs(number * factor - round(number * factor)) < 1e-6


def _validate_entry(entry: Any, board_id: str, unit: str) -> str:
    if not isinstance(entry, list) or len(entry) != 5:
        raise ExportContractError(
            f'entry must be [id, name, score, rank, variant] in {board_id}'
        )
    entry_id, name, score, rank, variant = entry
    if not isinstance(entry_id, str) or not entry_id:
        raise ExportContractError(f'entry id must be a non-empty string in {board_id}')
    if not isinstance(name, str) or not name:
        raise ExportContractError(f'entry name must be a non-empty string in {board_id}')
    if score is not None and not _decimals_ok(score, unit):
        raise ExportContractError(f'entry score precision is invalid in {board_id}: {score}')
    if rank is not None and (not isinstance(rank, int) or isinstance(rank, bool) or rank < 1):
        raise ExportContractError(f'entry rank must be a positive integer or null in {board_id}')
    if variant is not None and (not isinstance(variant, str) or not variant):
        raise ExportContractError(f'entry variant must be a non-empty string or null in {board_id}')
    return entry_id


def validate_export(export: dict[str, Any], *, exporter_version: str) -> dict[str, Any]:
    if export.get('dataSource') != 'benchmark-sync-static':
        raise ExportContractError('dataSource must be benchmark-sync-static')
    _require(export.get('schemaVersion'), 'schemaVersion')
    _require(export.get('generatedAt'), 'generatedAt')
    families = export.get('families')
    if not isinstance(families, list) or not families:
        raise ExportContractError('families must be a non-empty list')
    rankings = export.get('rankings')
    if not isinstance(rankings, dict) or not rankings:
        raise ExportContractError('rankings must be a non-empty object')

    family_ids: set[str] = set()
    board_family: dict[str, str] = {}
    for family in families:
        for field in ('familyId', 'title', 'overall', 'boards'):
            _require(family.get(field), f'family.{field}')
        family_id = family['familyId']
        if family_id in family_ids:
            raise ExportContractError(f'duplicate family: {family_id}')
        family_ids.add(family_id)
        boards = family['boards']
        if not isinstance(boards, list) or not boards:
            raise ExportContractError(f'family {family_id} has no boards')
        board_ids = [board.get('id') for board in boards]
        if any(not board_id for board_id in board_ids):
            raise ExportContractError(f'family {family_id} has a board without id')
        if len(board_ids) != len(set(board_ids)):
            raise ExportContractError(f'family {family_id} has duplicate boards')
        if family['overall'] not in board_ids:
            raise ExportContractError(f'family {family_id} overall board is missing')
        overall_flags = [bool(board.get('isOverall')) for board in boards]
        if sum(overall_flags) != 1 or not overall_flags[board_ids.index(family['overall'])]:
            raise ExportContractError(f'family {family_id} must mark exactly its overall board')
        for board_id in board_ids:
            if board_id in board_family:
                raise ExportContractError(f'duplicate board id: {board_id}')
            board_family[board_id] = family_id

    if set(rankings) != set(board_family):
        missing = sorted(set(board_family) - set(rankings))
        extra = sorted(set(rankings) - set(board_family))
        raise ExportContractError(
            f'rankings do not match family boards: missing={missing} extra={extra}'
        )

    for board_id, family_id in board_family.items():
        board = rankings[board_id]
        for field in _BOARD_REQUIRED:
            if field == 'taskCount':
                if field not in board:
                    raise ExportContractError(f'missing required export field: {board_id}.{field}')
            else:
                _require(board.get(field), f'{board_id}.{field}')
        if board['rankingId'] != board_id:
            raise ExportContractError(f'rankingId mismatch for {board_id}')
        if board['familyId'] != family_id:
            raise ExportContractError(f'familyId mismatch for {board_id}')
        if board['unit'] not in _UNITS:
            raise ExportContractError(f'unknown unit for {board_id}: {board["unit"]}')
        if not isinstance(board['source'], dict) or not board['source'].get('name'):
            raise ExportContractError(f'source.name is required for {board_id}')
        if not _HASH_RE.match(str(board['contentHash'])):
            raise ExportContractError(f'contentHash must be 64 hex chars for {board_id}')
        if board['snapshotId'] != board['contentHash']:
            raise ExportContractError(f'snapshotId must equal contentHash for {board_id}')
        task_count = board['taskCount']
        if task_count is not None and (
            isinstance(task_count, bool)
            or not isinstance(task_count, int)
            or task_count < 1
        ):
            raise ExportContractError(
                f'taskCount must be a positive integer or null for {board_id}'
            )
        if not isinstance(board['entries'], list) or not board['entries']:
            raise ExportContractError(f'empty board: {board_id}')
        seen_ids: set[str] = set()
        for entry in board['entries']:
            entry_id = _validate_entry(entry, board_id, board['unit'])
            if entry_id in seen_ids:
                raise ExportContractError(f'duplicate entry in {board_id}: {entry_id}')
            seen_ids.add(entry_id)
    return export
