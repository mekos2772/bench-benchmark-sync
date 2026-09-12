#!/usr/bin/env python3
from __future__ import annotations

import argparse
import json
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime
from pathlib import Path
from typing import Any

ROOT = Path(__file__).resolve().parents[1]
if str(ROOT) not in sys.path:
    sys.path.insert(0, str(ROOT))

from collector.models import FetchContext  # noqa: E402
from collector.registry import CollectorRegistry  # noqa: E402
from exporter.registry_map import load_families  # noqa: E402
from today_activity import (  # noqa: E402
    TodayFetchError,
    build_document,
    iso,
    load_config,
    stable_hash,
    utc_now,
)

SOURCES = ROOT / "config" / "sources.yaml"
HIERARCHY = ROOT / "config" / "benchmark_hierarchy.yaml"
TODAY_CONFIG = ROOT / "config" / "today_sources.yaml"


def read_json(path: Path, fallback: Any) -> Any:
    try:
        return json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return fallback


def score_unit(records: list[dict[str, Any]]) -> str:
    values = []
    for record in records:
        value = record.get("score")
        try:
            number = float(value)
        except (TypeError, ValueError):
            continue
        if number == number and abs(number) != float("inf"):
            values.append(number)
    if not values:
        return "score"
    top = max(values)
    if top <= 1:
        return "ratio"
    if top > 100:
        return "raw"
    return "score"


def record_key(record: dict[str, Any]) -> str:
    return "|".join(
        str(value or "")
        for value in (
            record.get("model"),
            record.get("comparisonKey"),
            record.get("variant"),
        )
    )


def normalized_record(record: Any) -> dict[str, Any]:
    value = record.to_dict() if hasattr(record, "to_dict") else dict(record)
    return {
        "model": value.get("model"),
        "score": value.get("score"),
        "rank": value.get("rank"),
        "comparisonKey": value.get("comparison_key"),
        "variant": (value.get("extra") or {}).get("reasoning_effort") or value.get("version"),
    }


def derived_ranks(records: dict[str, dict[str, Any]]) -> dict[str, int | None]:
    ranked = [
        (key, item.get("score"))
        for key, item in records.items()
        if isinstance(item.get("score"), (int, float))
    ]
    ranked.sort(key=lambda item: item[1], reverse=True)
    return {key: index + 1 for index, (key, _) in enumerate(ranked)}


def make_benchmark_event(
    *,
    event_type: str,
    title: str,
    summary: str,
    board: Any,
    model_id: str | None,
    observed_at: datetime,
    extra: dict[str, Any] | None = None,
) -> dict[str, Any]:
    from today_activity import make_event

    source = board.source or {}
    url = str(source.get("official_url") or source.get("endpoint") or "")
    event_extra = {
        "benchmarkId": board.runtime_id,
        "benchmarkTitle": board.title,
        "release": None,
        **(extra or {}),
    }
    if model_id:
        event_extra["modelIdentity"] = f"{board.runtime_id}:{model_id}"
    return make_event(
        family="benchmark",
        event_type=event_type,
        title=title,
        summary=summary,
        url=url,
        observed_at=observed_at,
        source=source.get("source_name") or board.title,
        repo_id=None,
        model_id=model_id,
        severity="important"
        if event_type in {"benchmark_updated", "significant_score_change"}
        else "normal",
        extra=event_extra,
    )


def collect_one_benchmark(board: Any) -> tuple[Any, dict[str, Any] | None, str | None]:
    try:
        registry = CollectorRegistry(SOURCES)
        collector = registry.create(board.benchmark_id)
        result = collector.fetch(FetchContext(timeout_seconds=30))
        if result.status != "success" or result.payload is None or not result.content_hash:
            return board, None, f"{board.benchmark_id}:{result.error_message or result.status}"
        parsed = collector.parse(result.payload)
        records = collector.validate(collector.normalize(parsed))
        normalized_items = [normalized_record(item) for item in records]
        normalized = {record_key(item): item for item in normalized_items}
        ranks = derived_ranks(normalized)
        for key, value in normalized.items():
            value["displayRank"] = ranks.get(key)
        return (
            board,
            {
                "runtimeId": board.runtime_id,
                "familyId": board.family_id,
                "title": board.title,
                "release": result.release_id,
                "contentHash": result.content_hash,
                "source": board.source,
                "records": normalized,
            },
            None,
        )
    except Exception as exc:  # one source must not invalidate other source observations
        return board, None, f"{board.benchmark_id}:{type(exc).__name__}"


def collect_benchmark_state(
    now: datetime,
) -> tuple[dict[str, Any], list[dict[str, Any]], list[str]]:
    families = load_families(SOURCES, HIERARCHY)
    boards = [board for family in families for board in family.boards]
    state: dict[str, Any] = {}
    failures: list[str] = []
    with ThreadPoolExecutor(max_workers=min(6, max(1, len(boards)))) as executor:
        futures = [executor.submit(collect_one_benchmark, board) for board in boards]
        for future in as_completed(futures):
            board, value, failure = future.result()
            if failure:
                failures.append(failure)
            elif value:
                state[board.benchmark_id] = value
    return state, [], failures


def format_score(value: Any, unit: str) -> str:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return str(value)
    if unit == "ratio":
        return f"{number * 100:.1f}%"
    if unit == "score":
        return f"{number:.2f}"
    return f"{number:g}"


def board_top_models(board: dict[str, Any], unit: str, count: int = 3) -> list[str]:
    records = [
        item
        for item in (board.get("records") or {}).values()
        if isinstance(item.get("score"), (int, float))
    ]
    records.sort(key=lambda item: item["score"], reverse=True)
    return [
        f"{item.get('model')}（{format_score(item['score'], unit)}）" for item in records[:count]
    ]


def board_summary_parts(board: dict[str, Any], unit: str) -> str:
    parts = [f"共 {len(board.get('records') or {})} 个模型"]
    # Exporter placeholder for "no release known"; never surface it to users.
    release = board.get("release")
    if release and release not in {"unknown", "page_jsonld", "not_provided", "none"}:
        parts.append(f"数据版本 {release}")
    top = board_top_models(board, unit)
    if top:
        parts.append(f"当前前列：{'、'.join(top)}")
    return " · ".join(parts)


def compare_benchmarks(
    previous: dict[str, Any], current: dict[str, Any], now: datetime
) -> list[dict[str, Any]]:
    events: list[dict[str, Any]] = []
    for benchmark_id, board in current.items():
        old = (previous.get("benchmarks") or {}).get(benchmark_id)
        if not old:
            continue
        if board.get("contentHash") != old.get("contentHash") or board.get("release") != old.get(
            "release"
        ):
            unit = score_unit(list((board.get("records") or {}).values()))
            events.append(
                make_benchmark_event(
                    event_type="benchmark_updated",
                    title=f"{board['title']} 官方数据更新",
                    summary=(
                        f"{board['title']} 官方数据发生变化；"
                        f"{board_summary_parts(board, unit)}。"
                    ),
                    board=type(
                        "Board",
                        (),
                        {
                            "source": board.get("source"),
                            "runtime_id": board.get("runtimeId"),
                            "title": board.get("title"),
                        },
                    )(),
                    model_id=None,
                    observed_at=now,
                    extra={
                        "release": board.get("release"),
                        "contentHash": board.get("contentHash"),
                        "unit": unit,
                        "modelCount": len(board.get("records") or {}),
                        "topModels": board_top_models(board, unit),
                    },
                )
            )
        old_records = old.get("records") or {}
        new_records = board.get("records") or {}
        unit = score_unit(list(new_records.values()))
        for key in sorted(set(new_records) - set(old_records)):
            item = new_records[key]
            events.append(
                make_benchmark_event(
                    event_type="model_added_to_benchmark",
                    title=f"{item.get('model')} 新上榜",
                    summary=(
                        f"{item.get('model')} 进入 {board['title']}，"
                        f"当前分数 {format_score(item.get('score'), unit)}"
                        f"（第 {item.get('displayRank')} 位）。"
                    ),
                    board=type(
                        "Board",
                        (),
                        {
                            "source": board.get("source"),
                            "runtime_id": board.get("runtimeId"),
                            "title": board.get("title"),
                        },
                    )(),
                    model_id=item.get("model"),
                    observed_at=now,
                    extra={
                        "score": item.get("score"),
                        "rank": item.get("rank"),
                        "displayRank": item.get("displayRank"),
                        "release": board.get("release"),
                        "unit": unit,
                    },
                )
            )
        for key in sorted(set(old_records) - set(new_records)):
            item = old_records[key]
            events.append(
                make_benchmark_event(
                    event_type="model_removed_from_benchmark",
                    title=f"{item.get('model')} 移出榜单",
                    summary=(
                        f"{item.get('model')} 不再出现在 {board['title']} 当前官方数据中"
                        f"（此前分数 {format_score(item.get('score'), unit)}）。"
                    ),
                    board=type(
                        "Board",
                        (),
                        {
                            "source": board.get("source"),
                            "runtime_id": board.get("runtimeId"),
                            "title": board.get("title"),
                        },
                    )(),
                    model_id=item.get("model"),
                    observed_at=now,
                    extra={
                        "previousScore": item.get("score"),
                        "previousRank": item.get("rank"),
                        "release": old.get("release"),
                        "unit": unit,
                    },
                )
            )
        threshold = {"ratio": 0.01, "score": 1.0, "raw": 25.0}.get(unit, 1.0)
        for key in sorted(set(new_records) & set(old_records)):
            before = old_records[key]
            after = new_records[key]
            old_score = before.get("score")
            new_score = after.get("score")
            if (
                isinstance(old_score, (int, float))
                and isinstance(new_score, (int, float))
                and old_score != new_score
            ):
                delta = new_score - old_score
                event_type = (
                    "significant_score_change" if abs(delta) >= threshold else "score_changed"
                )
                events.append(
                    make_benchmark_event(
                        event_type=event_type,
                        title=f"{after.get('model')} 分数变化",
                        summary=(
                            f"{board['title']} 分数从 {format_score(old_score, unit)} "
                            f"变为 {format_score(new_score, unit)}"
                            f"（{'+' if delta > 0 else ''}{format_score(delta, unit)}）。"
                        ),
                        board=type(
                            "Board",
                            (),
                            {
                                "source": board.get("source"),
                                "runtime_id": board.get("runtimeId"),
                                "title": board.get("title"),
                            },
                        )(),
                        model_id=after.get("model"),
                        observed_at=now,
                        extra={
                            "previousScore": old_score,
                            "score": new_score,
                            "delta": delta,
                            "unit": unit,
                            "release": board.get("release"),
                        },
                    )
                )
            before_rank = before.get("rank")
            after_rank = after.get("rank")
            if before_rank is not None and after_rank is not None and before_rank != after_rank:
                rank_type = "rank_changed"
                summary = f"{board['title']} 官方排名从 {before_rank} 变为 {after_rank}。"
            elif before.get("displayRank") != after.get("displayRank"):
                rank_type = "derived_rank_changed"
                summary = (
                    f"{board['title']} 按当前分数推导的列表位置从 {before.get('displayRank')} "
                    f"变为 {after.get('displayRank')}；官方 rank 未提供。"
                )
            else:
                continue
            events.append(
                make_benchmark_event(
                    event_type=rank_type,
                    title=f"{after.get('model')} 排名位置变化",
                    summary=summary,
                    board=type(
                        "Board",
                        (),
                        {
                            "source": board.get("source"),
                            "runtime_id": board.get("runtimeId"),
                            "title": board.get("title"),
                        },
                    )(),
                    model_id=after.get("model"),
                    observed_at=now,
                    extra={
                        "previousRank": before_rank,
                        "rank": after_rank,
                        "previousDisplayRank": before.get("displayRank"),
                        "displayRank": after.get("displayRank"),
                        "rankSource": (
                            "derived" if rank_type == "derived_rank_changed" else "official"
                        ),
                        "release": board.get("release"),
                    },
                )
            )
    return events


def write_commonjs(path: Path, value: dict[str, Any]) -> None:
    path.write_text(
        "module.exports = " + json.dumps(value, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )


def enrich_benchmark_events(
    events: list[dict[str, Any]], state: dict[str, Any]
) -> list[dict[str, Any]]:
    """Refresh board-update summaries so carried-over events describe the current data.

    Events reused from the previous document keep the summary they were built with;
    board-level facts (model count, top models) are re-derivable from the fresh
    state, so they are rewritten here instead of aging into a bare "content changed".
    """
    boards_by_runtime = {value.get("runtimeId"): value for value in state.values()}
    for event in events:
        if event.get("eventType") != "benchmark_updated":
            continue
        board = boards_by_runtime.get(event.get("benchmarkId"))
        if not board:
            continue
        unit = score_unit(list((board.get("records") or {}).values()))
        event["summary"] = (
            f"{board.get('title')} 官方数据发生变化；{board_summary_parts(board, unit)}。"
        )
        event["unit"] = unit
        event["modelCount"] = len(board.get("records") or {})
        event["topModels"] = board_top_models(board, unit)
        event["release"] = board.get("release")
    return events


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Build the Today activity feed")
    parser.add_argument("--output-dir", type=Path, default=ROOT / "generated" / "static-events")
    parser.add_argument("--state-file", type=Path, default=None)
    parser.add_argument("--workflow-run-id", default=None)
    parser.add_argument("--main-commit", default=None)
    args = parser.parse_args(argv)
    output_dir = args.output_dir
    output_dir.mkdir(parents=True, exist_ok=True)
    events_path = output_dir / "today-events.json"
    state_path = args.state_file or (output_dir / "today-state.json")
    previous_document = read_json(events_path, {})
    previous_state = read_json(state_path, {})
    now = utc_now()
    config = load_config(TODAY_CONFIG)
    try:
        benchmark_state, _, failures = collect_benchmark_state(now)
        benchmark_events = compare_benchmarks(previous_state, benchmark_state, now)
        previous_benchmark_events = [
            item
            for item in previous_document.get("events", [])
            if isinstance(item, dict) and item.get("family") == "benchmark"
        ]
        benchmark_events = previous_benchmark_events + benchmark_events
        benchmark_events = enrich_benchmark_events(benchmark_events, benchmark_state)
        document = build_document(
            config,
            now=now,
            benchmark_events=benchmark_events,
            previous_models=previous_document.get("models")
            if isinstance(previous_document, dict)
            else None,
        )
    except TodayFetchError as exc:
        print(json.dumps({"ok": False, "error": str(exc)}, ensure_ascii=False), file=sys.stderr)
        return 2
    if failures:
        document["collectorStatus"] = "partial"
        document["collectorFailures"] = failures[:40]
    document["provenance"] = {
        "workflowRunId": args.workflow_run_id,
        "mainCommit": args.main_commit,
    }
    event_hash = stable_hash(
        {
            "events": document.get("events", []),
            "models": document.get("models", {}),
        }
    )
    previous_hash = (
        stable_hash(
            {
                "events": previous_document.get("events", []),
                "models": previous_document.get("models", {}),
            }
        )
        if isinstance(previous_document, dict)
        else ""
    )
    if event_hash == previous_hash and previous_document.get("generatedAt"):
        document["generatedAt"] = previous_document["generatedAt"]
        document["provenance"] = previous_document.get("provenance", document["provenance"])
    state = {
        "schemaVersion": 1,
        "generatedAt": iso(now),
        "models": {
            key: {
                "version": value.get("version"),
                "contentHash": stable_hash(value),
                "lastSeenAt": iso(now),
            }
            for key, value in (document.get("models") or {}).items()
            if isinstance(value, dict)
        },
        "benchmarks": benchmark_state,
    }
    if event_hash == previous_hash and state_path.exists():
        state["generatedAt"] = previous_state.get("generatedAt", state["generatedAt"])
    events_path.write_text(
        json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    write_commonjs(output_dir / "today-events.js", document)
    state_path.write_text(json.dumps(state, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(
        json.dumps(
            {
                "ok": True,
                "events": len(document["events"]),
                "status": document["collectorStatus"],
                "failures": len(failures),
            },
            ensure_ascii=False,
        )
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
