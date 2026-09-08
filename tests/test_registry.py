from pathlib import Path

from collector.artificial_analysis.collector import ArtificialAnalysisCollector
from collector.ci_matrix import matrix_ids
from collector.deepswe.collector import DeepSWECollector
from collector.hierarchy import load_hierarchy, validate_hierarchy
from collector.livebench.collector import LiveBenchCollector
from collector.manual_review import ManualReviewCollector
from collector.registry import CollectorRegistry
from collector.swebench.collector import SWEbenchCollector

ROOT = Path(__file__).resolve().parents[1]
SOURCES = ROOT / "config/sources.yaml"
HIERARCHY = ROOT / "config/benchmark_hierarchy.yaml"


def test_registry_has_explicit_statuses():
    registry = CollectorRegistry(SOURCES)
    assert registry.sources["swebench"]["status"] == "enabled"
    assert registry.sources["webdev_arena"]["status"] == "disabled"
    assert registry.sources["livebench"]["status"] == "manual_review"
    assert registry.sources["deepswe_v1_1"]["status"] == "enabled"
    assert registry.enabled_ids() == [
        "aa_lcr",
        "aa_omniscience_index",
        "artificial_analysis_intelligence_index_v4_3",
        "artificial_analysis_openness_index",
        "critpt",
        "deepswe_v1_1",
        "gdpval_aa_elo",
        "gpqa_diamond",
        "humanitys_last_exam",
        "ifbench",
        "livebench_agentic_coding",
        "livebench_coding",
        "livebench_data_analysis",
        "livebench_instruction_following",
        "livebench_language",
        "livebench_math",
        "livebench_overall",
        "livebench_reasoning",
        "mlcr_overall",
        "mmmu_pro",
        "scicode",
        "swebench",
        "swebench_verified",
        "terminal_bench_v4_0",
        "terminalbench_hard",
        "terminalbench_v2_1",
    ]


def test_factory_maps_enabled_and_manual_review_nodes():
    registry = CollectorRegistry(SOURCES)
    assert isinstance(registry.create("swebench"), SWEbenchCollector)
    assert isinstance(registry.create("swebench_verified"), SWEbenchCollector)
    assert isinstance(registry.create("deepswe_v1_1"), DeepSWECollector)
    assert isinstance(registry.create("livebench_coding"), LiveBenchCollector)
    assert isinstance(registry.create("terminal_bench_v4_0"), ArtificialAnalysisCollector)
    assert isinstance(registry.create("software_engineering_agent"), ManualReviewCollector)


def test_hierarchy_is_complete_and_acyclic():
    registry = CollectorRegistry(SOURCES)
    nodes = load_hierarchy(HIERARCHY)
    validate_hierarchy(nodes, set(registry.source_ids()))
    ids = {node["benchmark_id"] for node in nodes}
    required = {
        "artificial_analysis_intelligence_index_v4_3",
        "artificial_analysis_coding",
        "artificial_analysis_agents",
        "artificial_analysis_reasoning",
        "artificial_analysis_knowledge",
        "artificial_analysis_individual_evaluations",
        "terminal_bench_v4_0",
        "humanitys_last_exam",
        "gpqa_diamond",
        "scicode",
        "livebench_overall",
        "livebench_coding",
        "livebench_math",
        "livebench_reasoning",
        "livebench_data_analysis",
        "livebench_language",
        "livebench_instruction_following",
        "deepswe_v1_1",
        "deepswe_v1_1_tasks",
        "software_engineering_agent",
    }
    assert required <= ids


def test_matrix_generation_rejects_unknown_ids():
    assert "deepswe_v1_1" in matrix_ids("enabled", None, SOURCES, HIERARCHY)
    assert matrix_ids("hierarchy", "livebench_math", SOURCES, HIERARCHY) == ["livebench_math"]
    try:
        matrix_ids("hierarchy", "not-a-benchmark", SOURCES, HIERARCHY)
    except ValueError as exc:
        assert "not-a-benchmark" in str(exc)
    else:
        raise AssertionError("unknown benchmark must be rejected")
