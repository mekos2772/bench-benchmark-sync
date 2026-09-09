import json
import shutil
import subprocess
from pathlib import Path

import jsonschema
import pytest

from exporter.cli import build_export, display_score, unit_for
from exporter.contract import ExportContractError, validate_export
from exporter.registry_map import DEFAULT_BOARD_IDS as BOARDS
from exporter.registry_map import load_families
from exporter.snapshot_loader import SnapshotLoadError, load_snapshot
from exporter.writers import write_static_export
from persistence.hash import sha256_bytes
from persistence.snapshot import SnapshotStore

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / 'config' / 'sources.yaml'
HIERARCHY = ROOT / 'config' / 'benchmark_hierarchy.yaml'
FETCH_TIME = '2026-09-09T00:00:00Z'


def _record(benchmark='livebench_overall', model='model-a', score=80.12, rank=None, effort=None):
    record = {
        'benchmark': benchmark,
        'release': '2026-06-25',
        'metric': 'global_average' if benchmark == 'livebench_overall' else 'score',
        'comparison_key': f'{benchmark}:{model}',
        'model': model,
        'provider': None,
        'score': score,
        'rank': rank,
        'timestamp': FETCH_TIME,
        'source_hash': 'a' * 64,
        'category': benchmark,
        'task_scores': {'task': score},
    }
    if effort:
        record['reasoning_effort'] = effort
    return record


def _write_snapshot(root: Path, benchmark='livebench_overall', records=None):
    store = SnapshotStore(root)
    actual_records = [_record(benchmark)] if records is None else records
    payload = json.dumps(
        {'benchmark': benchmark, 'records': actual_records},
        sort_keys=True,
    ).encode()
    return store.save(
        benchmark,
        {
            'source_name': f'{benchmark} official source',
            'official_url': 'https://example.invalid/',
            'evidence_url': 'https://example.invalid/evidence',
        },
        FETCH_TIME,
        sha256_bytes(payload),
        payload,
        actual_records,
        release_id='2026-06-25',
    )


def _write_all_boards(root: Path):
    for family in load_families(SOURCES, HIERARCHY):
        for board in family.boards:
            _write_snapshot(root, board.benchmark_id)


def test_export_builds_family_structure(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    assert export['schemaVersion'] == 3
    assert [family['familyId'] for family in export['families']] == ['livebench', 'aa', 'deepswe']
    livebench = export['families'][0]
    assert livebench['overall'] == 'livebench_overall'
    assert len(livebench['boards']) == 8
    board = export['rankings']['livebench_overall']
    entry = board['entries'][0]
    assert entry == ['model-a', 'model-a', 80.12, None, None]
    assert board['familyId'] == 'livebench'
    assert board['unit'] == 'score'


def test_task_count_without_task_scores_is_null(tmp_path):
    record = _record()
    record['task_scores'] = {}
    _write_snapshot(tmp_path / 'store', records=[record])
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY, ['livebench_overall'])
    assert export['rankings']['livebench_overall']['taskCount'] is None


def test_contract_rejects_zero_task_count(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    export['rankings']['livebench_overall']['taskCount'] = 0
    with pytest.raises(ExportContractError):
        validate_export(export, exporter_version='test')


    _write_snapshot(tmp_path / 'store', 'deepswe_v1_1', [
        _record('deepswe_v1_1', model='gpt-x', score=0.7411504424778761, effort='xhigh'),
    ])
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY, ['deepswe_v1_1'])
    board = export['rankings']['deepswe_v1_1']
    assert board['unit'] == 'ratio'
    entry = board['entries'][0]
    assert entry[0] == 'deepswe_v1_1:gpt-x'
    assert entry[1] == 'gpt-x'
    assert entry[2] == 0.7412
    assert entry[4] == 'xhigh'


def test_score_helpers():
    assert unit_for([0.5, 0.75]) == 'ratio'
    assert unit_for([80.0, 62.0]) == 'score'
    assert unit_for([1763.64, 1463.81]) == 'raw'
    assert display_score(72.58216666666667, 'score') == 72.58
    assert display_score(0.7411504424778761, 'ratio') == 0.7412
    assert display_score(1763.644, 'raw') == 1763.64
    assert display_score(None, 'score') is None


def test_no_change_loads_existing_complete_snapshot(tmp_path):
    root = tmp_path / 'store'
    _write_snapshot(root)
    snapshot = load_snapshot(root, 'livebench_overall')
    assert snapshot['source']['source_name'].startswith('livebench_overall')
    assert snapshot['records']


def test_failed_or_partial_snapshot_is_rejected(tmp_path):
    root = tmp_path / 'store'
    _write_snapshot(root)
    pointer = json.loads(
        (root / 'snapshots' / 'livebench_overall' / 'last_successful.json').read_text()
    )
    good = json.loads(
        (root / 'snapshots' / 'livebench_overall' / pointer['snapshot']).read_text()
    )
    good['status'] = 'partial'
    (root / 'snapshots' / 'livebench_overall' / 'bad.json').write_text(json.dumps(good))
    with pytest.raises(SnapshotLoadError):
        load_snapshot(root, 'livebench_overall', 'bad')


def test_empty_board_fails_closed(tmp_path):
    _write_snapshot(tmp_path / 'store', records=[])
    with pytest.raises(SnapshotLoadError):
        load_snapshot(tmp_path / 'store', 'livebench_overall')


def test_cross_board_record_fails_closed(tmp_path):
    root = tmp_path / 'store'
    _write_snapshot(root, records=[_record('livebench_coding')])
    with pytest.raises(ExportContractError):
        build_export(root, SOURCES, HIERARCHY, ['livebench_overall'])


def test_contract_rejects_invalid_structure(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    export['families'][0]['boards'][0]['isOverall'] = False
    with pytest.raises(ExportContractError):
        validate_export(export, exporter_version='test')


def test_contract_rejects_unrounded_score(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    export['rankings']['livebench_overall']['entries'][0][2] = 72.58216666666667
    with pytest.raises(ExportContractError):
        validate_export(export, exporter_version='test')


def test_contract_rejects_bad_variant(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    export['rankings']['deepswe_v1_1']['entries'][0][4] = 7
    with pytest.raises(ExportContractError):
        validate_export(export, exporter_version='test')


def test_writer_emits_json_and_commonjs(tmp_path):
    export = {'schemaVersion': 3, 'dataSource': 'benchmark-sync-static'}
    json_path = tmp_path / 'out.json'
    js_path = tmp_path / 'out.js'
    write_static_export(export, json_path, js_path)
    assert json.loads(json_path.read_text()) == export
    assert js_path.read_text().startswith('module.exports = {')
    node = shutil.which('node')
    if node:
        script = (
            'const fs=require("node:fs");'
            'const a=JSON.parse(fs.readFileSync(process.argv[1],"utf8"));'
            'const b=require(process.argv[2]);'
            'if(JSON.stringify(a)!==JSON.stringify(b)) process.exit(1);'
        )
        subprocess.run([node, '-e', script, str(json_path), str(js_path)], check=True)


def test_export_schema_accepts_generated_export(tmp_path):
    _write_all_boards(tmp_path / 'store')
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY)
    schema = json.loads((ROOT / 'schemas' / 'export.schema.json').read_text())
    jsonschema.validate(export, schema)
    assert len(export['rankings']) == len(BOARDS)
