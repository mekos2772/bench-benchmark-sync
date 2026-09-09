from __future__ import annotations

import argparse
import json
import math
import sys
from decimal import ROUND_HALF_UP, Decimal
from pathlib import Path
from typing import Any

from .contract import ExportContractError, validate_export
from .registry_map import BoardMapping, select_families
from .snapshot_loader import SnapshotLoadError, load_snapshot
from .writers import write_static_export

EXPORTER_VERSION = '0.4.0'
ROOT = Path(__file__).resolve().parents[1]


def _finite_score(value: Any) -> float | None:
    if value is None or isinstance(value, bool):
        return None
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    return number if math.isfinite(number) else None


def unit_for(values: list[float | None]) -> str:
    """ratio: 0-1 rates; score: 0-100 index; raw: other scales (e.g. Elo)."""
    scored = [value for value in values if value is not None]
    if not scored:
        return 'score'
    top = max(scored)
    if top <= 1:
        return 'ratio'
    if top > 100:
        return 'raw'
    return 'score'


def display_score(value: Any, unit: str) -> float | None:
    """Round to the display precision used by the owning source."""
    number = _finite_score(value)
    if number is None:
        return None
    quantum = Decimal('0.0001') if unit == 'ratio' else Decimal('0.01')
    return float(Decimal(number).quantize(quantum, rounding=ROUND_HALF_UP))


def _single_value(values: set[Any], field: str) -> str:
    values.discard(None)
    if len(values) != 1 or not next(iter(values), None):
        raise ExportContractError(
            f'{field} must be one non-empty value: {", ".join(sorted(map(str, values)))}'
        )
    return str(next(iter(values)))


def _release_for(snapshot: dict[str, Any], records: list[dict[str, Any]]) -> str:
    values = {record.get('release') for record in records}
    values.add(snapshot.get('release_id'))
    return _single_value(values, 'snapshot release')


def _source_block(mapping: BoardMapping, snapshot: dict[str, Any]) -> dict[str, Any]:
    registry = mapping.source
    urls: dict[str, Any] = {}
    for record in snapshot.get('records') or []:
        urls = record.get('release_urls') or urls
    return {
        'name': registry.get('source_name') or mapping.title,
        'type': registry.get('source_type') or 'official_public_snapshot',
        'url': registry.get('official_url') or registry.get('endpoint') or None,
        'evidenceUrl': registry.get('evidence_url'),
        'tableUrl': urls.get('table_url'),
        'categoriesUrl': urls.get('categories_url'),
    }


def _entry(mapping: BoardMapping, record: dict[str, Any], unit: str) -> list[Any]:
    model = record.get('model')
    if not isinstance(model, str) or not model:
        raise ExportContractError('record model must be a non-empty string')
    comparison_key = record.get('comparison_key')
    if not isinstance(comparison_key, str) or not comparison_key:
        raise ExportContractError('record comparison_key is required')
    variant = None
    if mapping.family_id == 'deepswe':
        entry_id = comparison_key
        variant = record.get('reasoning_effort')
    else:
        entry_id = model
    return [entry_id, model, display_score(record.get('score'), unit), record.get('rank'), variant]


def build_ranking(mapping: BoardMapping, snapshot: dict[str, Any]) -> dict[str, Any]:
    records = snapshot.get('records') or []
    if not records:
        raise ExportContractError(f'empty snapshot for {mapping.benchmark_id}')
    release = _release_for(snapshot, records)
    metric = _single_value({record.get('metric') for record in records}, 'snapshot metric')
    category = _single_value({record.get('category') for record in records}, 'snapshot category')
    task_counts = {len(record.get('task_scores') or {}) for record in records}
    task_count = next(iter(task_counts)) if len(task_counts) == 1 else None
    if not task_count:
        task_count = None
    fetched_at = str(snapshot['fetch_time'])
    unit = unit_for([_finite_score(record.get('score')) for record in records])

    entries: list[list[Any]] = []
    seen_ids: set[str] = set()
    for record in records:
        if record.get('benchmark') != mapping.benchmark_id:
            raise ExportContractError(
                f"record benchmark {record.get('benchmark')!r} does not match "
                f'{mapping.benchmark_id!r}'
            )
        if record.get('release') not in {None, release}:
            raise ExportContractError('record release crosses board release')
        if record.get('metric') != metric:
            raise ExportContractError('record metric crosses board metric')
        entry = _entry(mapping, record, unit)
        if entry[0] in seen_ids:
            raise ExportContractError(f'duplicate entry id in {mapping.runtime_id}: {entry[0]}')
        seen_ids.add(entry[0])
        entries.append(entry)
    entries.sort(key=lambda item: (item[2] is None, -(item[2] or 0)))

    return {
        'rankingId': mapping.runtime_id,
        'benchmarkId': mapping.benchmark_id,
        'familyId': mapping.family_id,
        'title': mapping.title,
        'category': category,
        'release': release,
        'releaseId': snapshot.get('release_id') or release,
        'metric': metric,
        'unit': unit,
        'comparisonKey': mapping.comparison_key,
        'snapshotId': snapshot['content_hash'],
        'contentHash': snapshot['content_hash'],
        'generatedAt': fetched_at,
        'taskCount': task_count,
        'source': _source_block(mapping, snapshot),
        'entries': entries,
    }


def build_export(
    snapshot_root: Path,
    source_config: Path,
    hierarchy_config: Path,
    benchmark_ids: list[str] | None = None,
    *,
    workflow_run_id: str | None = None,
    main_commit: str | None = None,
) -> dict[str, Any]:
    families = select_families(source_config, hierarchy_config, benchmark_ids)
    rankings: dict[str, Any] = {}
    family_payloads: list[dict[str, Any]] = []
    generated_at = None
    for family in families:
        board_summaries = []
        for mapping in family.boards:
            snapshot = load_snapshot(snapshot_root, mapping.benchmark_id)
            ranking = build_ranking(mapping, snapshot)
            rankings[mapping.runtime_id] = ranking
            board_summaries.append(
                {
                    'id': mapping.runtime_id,
                    'title': mapping.title,
                    'isOverall': mapping.runtime_id == family.overall,
                    'modelCount': len(ranking['entries']),
                }
            )
            fetched_at = str(snapshot['fetch_time'])
            if generated_at is None or fetched_at > generated_at:
                generated_at = fetched_at
        family_payloads.append(
            {
                'familyId': family.family_id,
                'title': family.title,
                'overall': family.overall,
                'boards': board_summaries,
            }
        )
    export = {
        'schemaVersion': 3,
        'dataSource': 'benchmark-sync-static',
        'exporterVersion': EXPORTER_VERSION,
        'workflowRunId': workflow_run_id,
        'mainCommit': main_commit,
        'generatedAt': generated_at,
        'families': family_payloads,
        'rankings': rankings,
    }
    return validate_export(export, exporter_version=EXPORTER_VERSION)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description='Build a fail-closed Mini Program static export')
    parser.add_argument('--snapshot-root', type=Path, required=True)
    parser.add_argument('--source-config', type=Path, default=ROOT / 'config' / 'sources.yaml')
    parser.add_argument(
        '--hierarchy-config',
        type=Path,
        default=ROOT / 'config' / 'benchmark_hierarchy.yaml',
    )
    parser.add_argument('--benchmark', action='append', dest='benchmarks')
    parser.add_argument('--output-dir', type=Path, default=ROOT / 'artifacts' / 'static-export')
    parser.add_argument('--workflow-run-id', default=None)
    parser.add_argument('--main-commit', default=None)
    parser.add_argument('--check', action='store_true', help='validate without writing output')
    return parser


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    try:
        export = build_export(
            args.snapshot_root,
            args.source_config,
            args.hierarchy_config,
            args.benchmarks,
            workflow_run_id=args.workflow_run_id,
            main_commit=args.main_commit,
        )
    except (SnapshotLoadError, ExportContractError, ValueError, OSError) as exc:
        print(json.dumps({'ok': False, 'error': str(exc)}, ensure_ascii=False), file=sys.stderr)
        return 2
    if not args.check:
        write_static_export(
            export,
            args.output_dir / 'livebench-ranking.json',
            args.output_dir / 'livebench-ranking.js',
        )
    print(
        json.dumps(
            {
                'ok': True,
                'check': args.check,
                'families': [family['familyId'] for family in export['families']],
                'boards': len(export['rankings']),
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
