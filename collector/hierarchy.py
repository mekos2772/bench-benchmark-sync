"""Hierarchy registry validation for benchmark families and child boards."""

from __future__ import annotations

from pathlib import Path
from typing import Any

import yaml

VALID_LEVELS = {"family", "overall", "category", "evaluation", "artifact"}
VALID_STATUSES = {"enabled", "manual_review", "disabled"}


def load_hierarchy(path: Path) -> list[dict[str, Any]]:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    nodes = data.get("benchmarks", [])
    if not isinstance(nodes, list):
        raise ValueError("hierarchy benchmarks must be a list")
    return nodes


def validate_hierarchy(nodes: list[dict[str, Any]], source_ids: set[str]) -> None:
    ids = [node.get("benchmark_id") for node in nodes]
    if any(not node_id for node_id in ids):
        raise ValueError("every hierarchy node needs benchmark_id")
    if len(ids) != len(set(ids)):
        raise ValueError("hierarchy benchmark_id values must be unique")
    node_ids = set(ids)
    for node in nodes:
        if node.get("level") not in VALID_LEVELS:
            raise ValueError(f"invalid hierarchy level: {node.get('level')}")
        if node.get("status") not in VALID_STATUSES:
            raise ValueError(f"invalid hierarchy status: {node.get('status')}")
        source_id = node.get("source_registry_id")
        if source_id not in source_ids:
            raise ValueError(f"missing source registry entry: {source_id}")
        parent = node.get("parent_benchmark_id")
        if parent is not None and parent not in node_ids:
            raise ValueError(f"missing hierarchy parent: {parent}")
        if node.get("is_leaderboard") and node.get("level") == "artifact":
            raise ValueError("artifact nodes cannot be leaderboards")

    for node_id in node_ids:
        seen: set[str] = set()
        current = node_id
        while current is not None:
            if current in seen:
                raise ValueError(f"hierarchy cycle detected at {current}")
            seen.add(current)
            current = next(
                node.get("parent_benchmark_id")
                for node in nodes
                if node.get("benchmark_id") == current
            )


def hierarchy_ids(path: Path) -> list[str]:
    return [node["benchmark_id"] for node in load_hierarchy(path)]
