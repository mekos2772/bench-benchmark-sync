import json
import shutil
import subprocess
from pathlib import Path

import jsonschema
import pytest
import yaml

from exporter.cli import _aa_model_variant, build_export, display_score, unit_for
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


def _write_snapshot(root: Path, benchmark="livebench_overall", records=None, release=None):
    store = SnapshotStore(root)
    actual_records = [_record(benchmark)] if records is None else records
    sources = yaml.safe_load(SOURCES.read_text())["sources"]
    source = next(item for item in sources if item["benchmark_id"] == benchmark)
    release = release or source.get("release_id") or (
        "v5.0.2" if benchmark == "artificial_analysis_intelligence_index" else "2026-06-25"
    )
    actual_records = [{**record, "release": release} for record in actual_records]
    payload = json.dumps(
        {"benchmark": benchmark, "records": actual_records},
        sort_keys=True,
    ).encode()
    return store.save(
        benchmark,
        {
            "source_name": f"{benchmark} official source",
            "official_url": "https://example.invalid/",
            "evidence_url": "https://example.invalid/evidence",
        },
        FETCH_TIME,
        sha256_bytes(payload),
        payload,
        actual_records,
        release_id=release,
    )


def _write_all_boards(root: Path):
    for family in load_families(SOURCES, HIERARCHY):
        for board in family.boards:
            _write_snapshot(root, board.benchmark_id)


def test_export_builds_family_structure(tmp_path):
    _write_all_boards(tmp_path / "store")
    export = build_export(tmp_path / "store", SOURCES, HIERARCHY)
    assert export["schemaVersion"] == 3
    assert [family["familyId"] for family in export["families"]] == ["livebench", "aa", "deepswe"]
    livebench = export["families"][0]
    assert livebench["overall"] == "livebench_overall"
    assert len(livebench["boards"]) == 8
    board = export["rankings"]["livebench_overall"]
    entry = board["entries"][0]
    assert entry == ["model-a", "model-a", 80.12, None, None]
    assert board["familyId"] == "livebench"
    assert board["unit"] == "score"
    aa = export["families"][1]
    assert aa["overall"] == "aa_intelligence_index"
    assert len(aa["boards"]) == 22
    assert len(export["rankings"]) == 31
    assert "aa_intelligence_index_v4_3" not in export["rankings"]
    assert "aa_intelligence_index_v5_0_1" not in export["rankings"]
    assert "aa_omniscience_index" not in export["rankings"]
    assert export["rankings"][aa["overall"]]["release"] == "v5.0.2"


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


def test_aa_reasoning_variants_keep_the_original_model_id(tmp_path):
    benchmark = 'artificial_analysis_intelligence_index'
    names = [
        'Claude Opus 5.5 (Adaptive Reasoning, Max Effort, Default Fallback)',
        'Claude Opus 5.5 (Adaptive Reasoning, Xhigh Effort, Default Fallback)',
        'Claude Opus 5.5 (Adaptive Reasoning, High Effort, Default Fallback)',
        'GPT-6 Astra (max)',
        'Qwen3.8 Max (0902)',
    ]
    records = [
        _record(benchmark, model=name, score=57.62-index) for index, name in enumerate(names)
    ]
    _write_snapshot(tmp_path / 'store', benchmark, records)
    export = build_export(tmp_path / 'store', SOURCES, HIERARCHY, [benchmark])
    entries = export['rankings']['aa_intelligence_index']['entries']
    by_id = {entry[0]: entry for entry in entries}
    assert by_id[names[0]][:2] == [names[0], 'Claude Opus 5.5']
    assert [by_id[name][4] for name in names[:3]] == [
        'max with fallback', 'xhigh with fallback', 'high with fallback',
    ]
    assert by_id[names[3]][1] == 'GPT-6 Astra'
    assert by_id[names[3]][4] == 'max'
    assert by_id[names[4]][1] == names[4]
    assert by_id[names[4]][4] is None
    assert export['families'][0]['boards'][0]['modelCount'] == 5


def test_aa_effort_mapping_is_narrow_and_does_not_rewrite_edition_names():
    assert _aa_model_variant('DeepSeek V4.1 (Reasoning, Max Effort)') == ('DeepSeek V4.1', 'max')
    assert _aa_model_variant('Muse Spark (medium)') == ('Muse Spark', 'medium')
    assert _aa_model_variant('Nemotron 3 (Reasoning)') == ('Nemotron 3 (Reasoning)', None)
    assert _aa_model_variant('Qwen3.8 Max (0902)') == ('Qwen3.8 Max (0902)', None)


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


def test_export_rejects_mixed_index_releases(tmp_path):
    benchmark = "artificial_analysis_intelligence_index"
    root = tmp_path / "store"
    result = _write_snapshot(root, benchmark)
    path = Path(result["snapshot_path"])
    snapshot = json.loads(path.read_text())
    snapshot["records"][0]["release"] = "v5.0.1"
    path.write_text(json.dumps(snapshot))
    with pytest.raises(ExportContractError, match="snapshot release"):
        build_export(root, SOURCES, HIERARCHY, [benchmark])


def test_dynamic_release_keeps_stable_id_but_separates_comparisons(tmp_path):
    benchmark = "artificial_analysis_intelligence_index"
    root = tmp_path / "store"
    _write_snapshot(root, benchmark, release="v5.0.2")
    old = build_export(root, SOURCES, HIERARCHY, [benchmark])
    _write_snapshot(root, benchmark, release="v5.0.3")
    new = build_export(root, SOURCES, HIERARCHY, [benchmark])
    a, b = (export["rankings"]["aa_intelligence_index"] for export in (old, new))
    assert a["rankingId"] == b["rankingId"]
    assert a["comparisonKey"] != b["comparisonKey"]
    assert a["snapshotId"] != b["snapshotId"]
    assert b["release"] == "v5.0.3"


def test_failed_board_keeps_old_release_and_other_boards_update(tmp_path):
    old_root, new_root = tmp_path / "old", tmp_path / "new"
    _write_all_boards(old_root)
    previous = build_export(old_root, SOURCES, HIERARCHY)
    _write_all_boards(new_root)
    (new_root / "snapshots" / "artificial_analysis_intelligence_index" / "last_successful.json").unlink()
    _write_snapshot(new_root, "livebench_overall", [_record(score=99)])
    result = build_export(new_root, SOURCES, HIERARCHY, previous_export=previous)
    old_board = previous["rankings"]["aa_intelligence_index"]
    stale = result["rankings"]["aa_intelligence_index"]
    assert stale["stale"] is True
    for key in ("release", "contentHash", "generatedAt", "entries", "comparisonKey"):
        assert stale[key] == old_board[key]
    assert result["staleBoards"] == ["aa_intelligence_index"]
    assert result["rankings"]["livebench_overall"]["entries"][0][2] == 99
    assert len(result["rankings"]) == 31


def test_legacy_index_fallback_preserves_original_benchmark(tmp_path):
    root = tmp_path / "store"
    benchmark = "artificial_analysis_intelligence_index"
    _write_snapshot(root, benchmark)
    previous = build_export(root, SOURCES, HIERARCHY, [benchmark])
    board = previous["rankings"].pop("aa_intelligence_index")
    board.update(rankingId="aa_intelligence_index_v5_0_2", benchmarkId="artificial_analysis_intelligence_index_v5_0_2")
    previous["rankings"]["aa_intelligence_index_v5_0_2"] = board
    family = previous["families"][0]
    family["overall"] = family["boards"][0]["id"] = "aa_intelligence_index_v5_0_2"
    result = build_export(tmp_path / "missing", SOURCES, HIERARCHY, [benchmark],
                          previous_export=previous)
    stale = result["rankings"]["aa_intelligence_index"]
    assert stale["benchmarkId"] == "artificial_analysis_intelligence_index_v5_0_2"
    assert stale["release"] == "v5.0.2" and stale["stale"]
    again = build_export(tmp_path / "missing", SOURCES, HIERARCHY, [benchmark],
                         previous_export=result)
    assert again["rankings"]["aa_intelligence_index"] == stale


def test_export_preserves_public_page_coverage(tmp_path):
    benchmark = "artificial_analysis_intelligence_index"
    coverage = {"collectedModels": 28, "totalModels": 77, "isComplete": False}
    record = {**_record(benchmark), "coverage": coverage}
    _write_snapshot(tmp_path / "store", benchmark, [record])
    export = build_export(tmp_path / "store", SOURCES, HIERARCHY, [benchmark])
    assert export["rankings"]["aa_intelligence_index"]["coverage"] == coverage


def test_invalid_board_entry_is_isolated(tmp_path):
    root = tmp_path / "store"
    _write_snapshot(root, "livebench_overall")
    previous = build_export(root, SOURCES, HIERARCHY, ["livebench_overall"])
    _write_snapshot(root, "livebench_overall", [_record(score=99, rank=-1)])
    result = build_export(root, SOURCES, HIERARCHY, ["livebench_overall"],
                          previous_export=previous)
    assert result["rankings"]["livebench_overall"]["stale"]
    assert result["rankings"]["livebench_overall"]["entries"][0][2] == 80.12
