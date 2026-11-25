import json
import subprocess
import sys
from pathlib import Path

import pytest
import yaml

from collector.ci_matrix import DEFAULT_HIERARCHY, DEFAULT_SOURCES, matrix_ids

ROOT = Path(__file__).resolve().parents[1]
LIVEBENCH_IDS = [
    "livebench_browser",
    "livebench_coding",
    "livebench_data_analysis",
    "livebench_design",
    "livebench_long_horizon",
    "livebench_overall",
    "livebench_reasoning",
    "livebench_research",
]


@pytest.mark.parametrize("kind", ["enabled", "hierarchy"])
def test_matrix_accepts_multiple_ids_and_preserves_order(kind):
    selected = "  livebench_overall\t livebench_coding\nlivebench_overall  "
    assert matrix_ids(kind, selected, DEFAULT_SOURCES, DEFAULT_HIERARCHY) == [
        "livebench_overall",
        "livebench_coding",
    ]


@pytest.mark.parametrize("invalid", ["not-a-benchmark", "webdev_arena", "livebench"])
def test_matrix_rejects_entire_selection_if_any_id_is_not_enabled(invalid):
    with pytest.raises(ValueError, match=invalid):
        matrix_ids("enabled", f"livebench_overall {invalid}", DEFAULT_SOURCES, DEFAULT_HIERARCHY)


def test_whitespace_selection_does_not_expand_to_all_collectors():
    assert matrix_ids("enabled", " \t\n ", DEFAULT_SOURCES, DEFAULT_HIERARCHY) == []


def test_cli_accepts_the_eight_failed_livebench_collectors():
    result = subprocess.run(
        [
            sys.executable,
            "-m",
            "collector.ci_matrix",
            "--kind",
            "enabled",
            "--benchmark",
            " ".join(LIVEBENCH_IDS),
        ],
        cwd=ROOT,
        capture_output=True,
        text=True,
        check=True,
    )
    assert json.loads(result.stdout) == LIVEBENCH_IDS


def test_retry_workflow_is_manual_and_uses_bounded_runner():
    workflow = yaml.safe_load((ROOT / ".github/workflows/benchmark-retry.yml").read_text())
    triggers = workflow.get("on", workflow.get(True))
    assert set(triggers) == {"workflow_dispatch"}
    script = next(
        step["run"] for step in workflow["jobs"]["retry"]["steps"]
        if step.get("name") == "Retry selected collectors"
    )
    assert '--attempts "$attempts"' in script
