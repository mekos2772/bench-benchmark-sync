from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path
from typing import Any

import yaml


@dataclass(frozen=True)
class BoardMapping:
    benchmark_id: str
    runtime_id: str
    family_id: str
    title: str
    comparison_key: str
    source: dict[str, Any]


@dataclass(frozen=True)
class FamilyMapping:
    family_id: str
    title: str
    overall: str
    boards: list[BoardMapping]


# Explicit source-registry id -> (runtime board id, family). Never derived by string surgery.
FAMILY_DEFS: list[dict[str, Any]] = [
    {
        'family_id': 'livebench',
        'title': 'LiveBench',
        'overall': 'livebench_overall',
        'boards': [
            ('livebench_overall', 'livebench_overall'),
            ('livebench_coding', 'livebench_coding'),
            ('livebench_reasoning', 'livebench_reasoning'),
            ('livebench_math', 'livebench_math'),
            ('livebench_data_analysis', 'livebench_data_analysis'),
            ('livebench_language', 'livebench_language'),
            ('livebench_instruction_following', 'livebench_instruction_following'),
            ('livebench_agentic_coding', 'livebench_agentic_coding'),
        ],
    },
    {
        'family_id': 'aa',
        'title': 'Artificial Analysis',
        'overall': 'aa_intelligence_index_v4_3',
        'boards': [
            ('artificial_analysis_intelligence_index_v4_3', 'aa_intelligence_index_v4_3'),
            ('terminal_bench_v4_0', 'aa_terminal_bench_v4_0'),
            ('humanitys_last_exam', 'aa_humanitys_last_exam'),
            ('gpqa_diamond', 'aa_gpqa_diamond'),
            ('scicode', 'aa_scicode'),
            ('aa_lcr', 'aa_lcr'),
            ('aa_omniscience_index', 'aa_omniscience_index'),
            ('critpt', 'aa_critpt'),
            ('gdpval_aa_elo', 'aa_gdpval_elo'),
            ('terminalbench_hard', 'aa_terminalbench_hard'),
            ('terminalbench_v2_1', 'aa_terminalbench_v2_1'),
            ('ifbench', 'aa_ifbench'),
            ('mmmu_pro', 'aa_mmmu_pro'),
            ('artificial_analysis_openness_index', 'aa_openness_index'),
            ('mlcr_overall', 'aa_mlcr_overall'),
        ],
    },
    {
        'family_id': 'deepswe',
        'title': 'DeepSWE',
        'overall': 'deepswe_v1_1',
        'boards': [('deepswe_v1_1', 'deepswe_v1_1')],
    },
]

DEFAULT_BOARD_IDS = [
    runtime_id
    for definition in FAMILY_DEFS
    for _, runtime_id in definition['boards']
]


def load_families(source_config: Path, hierarchy_config: Path) -> list[FamilyMapping]:
    sources_data = yaml.safe_load(source_config.read_text(encoding='utf-8')) or {}
    hierarchy_data = yaml.safe_load(hierarchy_config.read_text(encoding='utf-8')) or {}
    sources = {item['benchmark_id']: item for item in sources_data.get('sources', [])}
    nodes = {node['benchmark_id']: node for node in hierarchy_data.get('benchmarks', [])}
    families: list[FamilyMapping] = []
    for definition in FAMILY_DEFS:
        boards: list[BoardMapping] = []
        for source_id, runtime_id in definition['boards']:
            source = sources.get(source_id)
            node = nodes.get(source_id)
            if not source or source.get('status') != 'enabled' or not node:
                continue
            boards.append(
                BoardMapping(
                    benchmark_id=source_id,
                    runtime_id=runtime_id,
                    family_id=definition['family_id'],
                    title=node.get('display_name') or source_id,
                    comparison_key=node.get('comparison_key') or '',
                    source=dict(source),
                )
            )
        if not boards:
            continue
        overall = definition['overall']
        if not any(board.runtime_id == overall for board in boards):
            raise ValueError(f"family {definition['family_id']} is missing its overall board")
        families.append(
            FamilyMapping(
                family_id=definition['family_id'],
                title=definition['title'],
                overall=overall,
                boards=boards,
            )
        )
    return families


def select_families(
    source_config: Path,
    hierarchy_config: Path,
    benchmark_ids: list[str] | None = None,
) -> list[FamilyMapping]:
    families = load_families(source_config, hierarchy_config)
    if not benchmark_ids:
        return families
    wanted = set(benchmark_ids)
    known = {board.benchmark_id for family in families for board in family.boards}
    unknown = wanted - known
    if unknown:
        raise ValueError(f'unknown or non-exportable benchmark ids: {", ".join(sorted(unknown))}')
    selected: list[FamilyMapping] = []
    for family in families:
        boards = [board for board in family.boards if board.benchmark_id in wanted]
        if not boards:
            continue
        overall = family.overall
        if not any(board.runtime_id == overall for board in boards):
            overall = boards[0].runtime_id
        selected.append(
            FamilyMapping(
                family_id=family.family_id,
                title=family.title,
                overall=overall,
                boards=boards,
            )
        )
    return selected
