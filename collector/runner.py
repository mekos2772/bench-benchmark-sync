from __future__ import annotations

import argparse
import json
import re
import sys
import time
from pathlib import Path
from typing import Any

from collector.models import FetchContext, utc_now
from collector.registry import CollectorRegistry
from persistence.scf_adapter import SCFAdapter
from persistence.snapshot import SnapshotStore

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_CONFIG = ROOT / "config" / "sources.yaml"


def run_one(collector, store: SnapshotStore, ingest: bool = False) -> dict[str, Any]:
    descriptor = collector.describe_source()
    context = FetchContext()
    if descriptor.get("status") != "enabled":
        result = collector.fetch(context)
        return {
            "benchmark_id": collector.benchmark_id,
            "status": result.status,
            "records": 0,
            "error_message": result.error_message,
        }
    fetched = collector.fetch(context)
    if fetched.status != "success" or fetched.payload is None:
        return {
            "benchmark_id": collector.benchmark_id,
            "status": "failed",
            "records": 0,
            "error_message": fetched.error_message,
        }
    try:
        parsed = collector.parse(fetched.payload)
        normalized = collector.normalize(parsed)
        validated = collector.validate(normalized)
        if not validated:
            raise ValueError("collector returned no validated records")
        expected_release = descriptor.get("release_id")
        if expected_release and (
            fetched.release_id != expected_release
            or any(row.release != expected_release for row in validated)
        ):
            raise ValueError(f"collector release differs from configured release {expected_release}")
    except Exception as exc:
        return {
            "benchmark_id": collector.benchmark_id,
            "status": "failed",
            "records": 0,
            "error_message": f"{type(exc).__name__}: {exc}"[:500],
        }
    snapshot = store.save(
        benchmark_id=collector.benchmark_id,
        source=descriptor,
        fetch_time=fetched.fetch_time,
        content_hash=fetched.content_hash,
        raw_payload=fetched.payload,
        records=[record.to_dict() for record in validated],
        release_id=fetched.release_id,
        commit_sha=fetched.commit_sha,
    )
    if ingest and snapshot["status"] in {"success", "no_change"}:
        adapter = SCFAdapter.from_environment()
        if adapter.enabled:
            adapter.send(snapshot)
    return {
        "benchmark_id": collector.benchmark_id,
        "status": snapshot["status"],
        "records": len(validated),
        "content_hash": fetched.content_hash,
        "error_message": None,
    }


def is_retryable(error: str | None) -> bool:
    message = error or ""
    if "CERTIFICATE_VERIFY_FAILED" in message or "certificate verify failed" in message.lower():
        return False
    return bool(
        re.match(r"^http_(408|429|5\d\d)(?:$|_)", message)
        or re.match(
            r"^(TimeoutError|URLError|ConnectionError|ConnectionResetError|"
            r"ConnectionAbortedError|ConnectionRefusedError|RemoteDisconnected|"
            r"ReadTimeout|ConnectTimeout)(?::|$)", message
        )
    )


def run_with_retry(collector, store: SnapshotStore, ingest: bool, attempts: int) -> dict[str, Any]:
    for attempt in range(1, attempts + 1):
        result = run_one(collector, store, ingest=ingest)
        if (
            result["status"] != "failed" or attempt == attempts
            or not is_retryable(result.get("error_message"))
        ):
            return result
        print(f"Transient collector failure; retrying attempt {attempt + 1}", file=sys.stderr)
        time.sleep(attempt * 5)
    raise AssertionError("attempts must be positive")


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Fetch verified public benchmark sources")
    parser.add_argument("--benchmark", help="one benchmark id; default runs all enabled sources")
    parser.add_argument("--config", type=Path, default=DEFAULT_CONFIG)
    parser.add_argument("--output-dir", type=Path, default=ROOT / "artifacts")
    parser.add_argument("--attempts", type=int, choices=[1, 2, 3], default=1)
    parser.add_argument("--ingest", action="store_true", help="use the optional SCF adapter")
    args = parser.parse_args(argv)

    registry = CollectorRegistry(args.config)
    ids = [args.benchmark] if args.benchmark else registry.enabled_ids()
    store = SnapshotStore(args.output_dir)
    summaries = []
    for benchmark_id in ids:
        try:
            collector = registry.create(benchmark_id)
            summaries.append(run_with_retry(collector, store, args.ingest, args.attempts))
        except KeyError as exc:
            summaries.append(
                {
                    "benchmark_id": benchmark_id,
                    "status": "failed",
                    "records": 0,
                    "error_message": str(exc),
                }
            )
    print(json.dumps({"fetch_time": utc_now(), "results": summaries}, ensure_ascii=False, indent=2))
    return 1 if any(row["status"] == "failed" for row in summaries) else 0


if __name__ == "__main__":
    sys.exit(main())
