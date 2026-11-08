#!/usr/bin/env python3
"""Build the public, deterministic data hub from verified upstream exports.

Never copy the private intelligence repository wholesale. Only explicitly
allowlisted event fields may be written into a public repository.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import re
import shutil
from datetime import datetime
from pathlib import Path

EVENT_FIELDS = (
    "event_id", "event_type", "title", "org", "model", "summary",
    "key_points", "importance", "confidence", "research_level",
    "sources", "evidence", "published_at", "collected_at",
)
SOURCE_FIELDS = ("name", "type", "url")
SECRET_PATTERNS = (
    re.compile(r"gh[pousr]_[A-Za-z0-9]{20,}"),
    re.compile(r"github_pat_[A-Za-z0-9_]{32,}"),
    re.compile(r"\bsk-[A-Za-z0-9_-]{20,}"),
    re.compile(r"\bAKIA[A-Z0-9]{16}\b"),
    re.compile(r"-----BEGIN (?:RSA |OPENSSH |EC |DSA )?PRIVATE KEY-----"),
    re.compile(r"\bBearer\s+[A-Za-z0-9._-]{24,}", re.I),
)
DAY_RE = re.compile(r"^\d{4}-\d{2}-\d{2}\.jsonl$")


def read_json(path: Path) -> dict:
    data = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(data, dict):
        raise ValueError(f"{path.name}: expected a JSON object")
    return data


def save_json(path: Path, data: object) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")


def sha256(path: Path) -> str:
    return hashlib.sha256(path.read_bytes()).hexdigest()


def check_secret(record: dict, filename: str, line_number: int) -> None:
    value = json.dumps(record, ensure_ascii=False)
    if any(pattern.search(value) for pattern in SECRET_PATTERNS):
        raise ValueError(f"possible credential in {filename}, line {line_number}; refusing public export")


def public_event(record: dict, filename: str, number: int) -> dict:
    if not isinstance(record, dict) or not isinstance(record.get("title"), str):
        raise ValueError(f"{filename}, line {number}: invalid event")
    safe = {field: record[field] for field in EVENT_FIELDS if field in record}
    sources = record.get("sources", [])
    if not isinstance(sources, list):
        raise ValueError(f"{filename}, line {number}: invalid sources")
    safe["sources"] = [
        {field: source[field] for field in SOURCE_FIELDS if field in source}
        for source in sources if isinstance(source, dict)
    ]
    if "key_points" in safe and not isinstance(safe["key_points"], list):
        raise ValueError(f"{filename}, line {number}: invalid key points")
    if "evidence" in safe and not isinstance(safe["evidence"], list):
        raise ValueError(f"{filename}, line {number}: invalid evidence")
    check_secret(safe, filename, number)
    return safe


def build(args: argparse.Namespace) -> dict:
    benchmark_path = Path(args.benchmark)
    today_path = Path(args.today)
    today_state_path = Path(args.today_state)
    usage_path = Path(args.usage)
    private_dir = Path(args.intelligence_dir)
    output_root = Path(args.output)

    benchmark = read_json(benchmark_path)
    today = read_json(today_path)
    today_state = read_json(today_state_path)
    usage = read_json(usage_path)

    if (benchmark.get("schemaVersion") != 3
            or benchmark.get("dataSource") != "benchmark-sync-static"
            or not isinstance(benchmark.get("rankings"), dict)
            or not isinstance(benchmark.get("families"), list)
            or len(benchmark["rankings"]) < 1):
        raise ValueError("benchmark: invalid or incomplete static export")
    if (today.get("schemaVersion") != 1
            or not isinstance(today.get("events"), list)):
        raise ValueError("today: invalid or incomplete static export")
    if (today_state.get("schemaVersion") != 1
            or "models" not in today_state
            or "benchmarks" not in today_state):
        raise ValueError("today-state: invalid incremental collector state")
    if (usage.get("schemaVersion") != 1
            or "openrouter" not in usage
            or "opencode" not in usage):
        raise ValueError("usage: invalid or incomplete export")
    if not private_dir.is_dir():
        raise ValueError("intelligence: missing private archive directory")

    private_files = sorted(path for path in private_dir.iterdir() if DAY_RE.fullmatch(path.name))
    if not private_files:
        raise ValueError("intelligence: no dated JSONL files found")

    # Validate the entire private source before replacing any existing public data.
    days = []
    latest_events = {}
    normalized_by_day = {}
    for path in private_files:
        records = []
        for number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if not line.strip():
                continue
            try:
                raw_record = json.loads(line)
            except json.JSONDecodeError as exc:
                raise ValueError(f"{path.name}, line {number}: bad JSON") from exc
            record = public_event(raw_record, path.name, number)
            records.append(record)
        normalized_by_day[path.name] = records
        day = path.stem
        days.append({"date": day, "path": f"intelligence/{path.name}", "count": len(records)})
        if len(private_files) - private_files.index(path) <= 14:
            for record in records:
                event_id = record.get("event_id")
                if isinstance(event_id, str) and event_id:
                    latest_events[event_id] = record

    if output_root.exists():
        shutil.rmtree(output_root)
    output_root.mkdir(parents=True)

    for origin, relative in (
        (benchmark_path, "benchmark/livebench-ranking.json"),
        (today_path, "today/today-events.json"),
        (today_state_path, "today/today-state.json"),
        (usage_path, "usage/usage-rankings.json"),
    ):
        destination = output_root / relative
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(origin, destination)

    for name, records in normalized_by_day.items():
        dest = output_root / "intelligence" / name
        dest.parent.mkdir(parents=True, exist_ok=True)
        dest.write_text(
            "".join(json.dumps(record, ensure_ascii=False, separators=(",", ":")) + "\n" for record in records),
            encoding="utf-8",
        )

    latest = list(latest_events.values())
    latest.sort(key=lambda r: (str(r.get("published_at") or ""), str(r.get("event_id") or "")), reverse=True)
    save_json(output_root / "intelligence/latest.json", {
        "schemaVersion": 1,
        "latestArchiveDate": days[-1]["date"],
        "eventCount": len(latest),
        "events": latest,
    })
    save_json(output_root / "intelligence/index.json", {
        "schemaVersion": 1,
        "latestArchiveDate": days[-1]["date"],
        "archiveDays": len(days),
        "totalRecords": sum(day["count"] for day in days),
        "days": days,
    })

    manifest = {
        "schemaVersion": 1,
        "description": "Public AI benchmark, Today, usage and intelligence data exports",
        "datasets": {
            "benchmark": {
                "path": "benchmark/livebench-ranking.json",
                "generatedAt": benchmark.get("generatedAt"),
                "sourceCommit": benchmark.get("mainCommit"),
                "sourceRunId": benchmark.get("workflowRunId"),
                "families": len(benchmark["families"]),
                "boards": len(benchmark["rankings"]),
            },
            "today": {
                "path": "today/today-events.json",
                "collectorStatePath": "today/today-state.json",
                "generatedAt": today.get("generatedAt"),
                "collectorStatus": today.get("collectorStatus"),
                "eventCount": len(today["events"]),
            },
            "usage": {
                "path": "usage/usage-rankings.json",
                "generatedAt": usage.get("generatedAt"),
                "collectorStatus": usage.get("collectorStatus"),
            },
            "intelligence": {
                "indexPath": "intelligence/index.json",
                "latestPath": "intelligence/latest.json",
                "latestArchiveDate": days[-1]["date"],
                "archiveDays": len(days),
                "totalRecords": sum(day["count"] for day in days),
            },
        },
    }
    save_json(output_root / "manifest.json", manifest)
    print(json.dumps({
        "ok": True, "benchmarkBoards": manifest["datasets"]["benchmark"]["boards"],
        "todayEvents": len(today["events"]), "intelligenceDays": len(days),
        "intelligenceRecords": manifest["datasets"]["intelligence"]["totalRecords"],
        "latestIntelligenceDate": days[-1]["date"],
    }, ensure_ascii=False))
    return manifest


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--benchmark", required=True)
    parser.add_argument("--today", required=True)
    parser.add_argument("--today-state", required=True)
    parser.add_argument("--usage", required=True)
    parser.add_argument("--intelligence-dir", required=True)
    parser.add_argument("--output", default="public-data")
    build(parser.parse_args())


if __name__ == "__main__":
    main()
