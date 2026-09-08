from __future__ import annotations

import argparse
import json
from pathlib import Path

from collector.hierarchy import load_hierarchy, validate_hierarchy
from collector.registry import CollectorRegistry

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCES = ROOT / "config" / "sources.yaml"
DEFAULT_HIERARCHY = ROOT / "config" / "benchmark_hierarchy.yaml"


def matrix_ids(kind: str, benchmark: str | None, sources: Path, hierarchy: Path) -> list[str]:
    registry = CollectorRegistry(sources)
    if kind == "enabled":
        allowed = registry.enabled_ids()
    elif kind == "hierarchy":
        nodes = load_hierarchy(hierarchy)
        validate_hierarchy(nodes, set(registry.source_ids()))
        allowed = [node["benchmark_id"] for node in nodes]
    else:
        raise ValueError(f"unknown matrix kind: {kind}")
    if benchmark:
        requested = benchmark.strip()
        if requested not in allowed:
            raise ValueError(f"benchmark is not valid for {kind} matrix: {requested}")
        return [requested]
    return allowed


def main() -> int:
    parser = argparse.ArgumentParser(description="Generate a GitHub Actions benchmark matrix")
    parser.add_argument("--kind", choices=["enabled", "hierarchy"], required=True)
    parser.add_argument("--benchmark", default="")
    parser.add_argument("--sources", type=Path, default=DEFAULT_SOURCES)
    parser.add_argument("--hierarchy", type=Path, default=DEFAULT_HIERARCHY)
    args = parser.parse_args()
    ids = matrix_ids(args.kind, args.benchmark, args.sources, args.hierarchy)
    print(json.dumps(ids, separators=(",", ":")))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
