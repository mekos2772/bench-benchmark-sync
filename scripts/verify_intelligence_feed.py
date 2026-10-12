#!/usr/bin/env python3
"""Verify the private intelligence ledger before it is published to CloudBase.

Guards the publish step against the failure mode that broke runs 37194810919 and
38044015312: a daily JSONL carrying an event whose ``event_id`` was never
registered in ``dedup-index.json``.  The publisher aborts on the first such line,
which hides how much else drifted, so this script walks the whole ledger and
reports every problem at once.

Blocking versus advisory
------------------------
Strictness mirrors ``push_intelligence_feed.py`` exactly, so this never fails a
run the publisher would have accepted:

Fatal: a day file inside the publisher's scan window carries an event whose id is
missing from the index, or a line in such a file is malformed.  These are the
errors that drop events, so they stop the run.

Advisory: the same drift in day files the publisher skips as too old, plus index
entries with no JSONL event behind them.  The index declares ``retention_days``,
so pruning an old day file legitimately orphans its entries; treating that as
fatal would turn routine housekeeping into an outage.  Advisories are printed so
drift stays visible without blocking the feed.

Read-only by design: the dedup index doubles as the removal ledger (commits
"remove political content" / "remove security commercial product events" delete
from both files), and the publisher only ships an event whose id is indexed, so
dropping an id is a working kill switch.  Rewriting the index here would
silently resurrect suppressed events, so drift is reported, never repaired.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from zoneinfo import ZoneInfo

SCHEMA_VERSION = 1
BEIJING = ZoneInfo("Asia/Shanghai")
REQUIRED_TEXT_FIELDS = ("event_type", "title", "summary")
REQUIRED_LIST_FIELDS = ("sources", "evidence")
# The publisher selects day files with glob "????-??-??.jsonl", where "?" matches
# any single character.  Mirror that exactly rather than assuming digits: a file
# such as "abcd-ef-gh.jsonl" matches the glob, so the publisher tries to parse it
# as a date and raises.
GLOB_MATCH = re.compile(r".{4}-.{2}-.{2}\.jsonl\Z")


def _load_json(path: Path) -> object:
    # Strict utf-8, deliberately mirroring push_intelligence_feed.py: a BOM must
    # be reported here, because the publisher rejects it.  Being laxer than the
    # publisher would green-light a run that then fails.
    return json.loads(path.read_text(encoding="utf-8"))


def read_index(data_dir: Path, fatal: list[str], advisory: list[str]) -> dict[str, dict]:
    index_path = data_dir / "dedup-index.json"
    if not index_path.is_file():
        fatal.append(f"{index_path.name}: file is missing")
        return {}
    try:
        index = _load_json(index_path)
    except OSError as error:
        fatal.append(f"{index_path.name}: unreadable ({error})")
        return {}
    except ValueError as error:
        # The publisher fails here too (bad JSON, or a BOM it will not decode).
        fatal.append(f"{index_path.name}: unreadable ({error})")
        return {}
    if not isinstance(index, dict):
        fatal.append(f"{index_path.name}: top level must be an object")
        return {}
    if index.get("schema_version") != SCHEMA_VERSION:
        # The publisher rejects any other schema outright.
        found = index.get("schema_version")
        fatal.append(
            f"{index_path.name}: schema_version={found!r}, expected {SCHEMA_VERSION}"
        )
    entries = index.get("events")
    if not isinstance(entries, list):
        # The publisher would find no ids at all, so every event fails its check.
        fatal.append(f"{index_path.name}: events must be an array")
        return {}

    # The publisher skips non-object entries, tolerates a missing event_id, and
    # collapses duplicates through a set.  None of that changes what gets
    # published, so these are advisory rather than blocking.
    by_id: dict[str, dict] = {}
    for position, entry in enumerate(entries, 1):
        if not isinstance(entry, dict):
            advisory.append(
                f"{index_path.name}: events[{position}] is not an object; publisher skips it"
            )
            continue
        event_id = entry.get("event_id")
        if not isinstance(event_id, str) or not event_id:
            advisory.append(f"{index_path.name}: events[{position}] has no usable event_id")
            continue
        if event_id in by_id:
            advisory.append(f"{index_path.name}: duplicate event_id {event_id}")
            continue
        by_id[event_id] = entry
    return by_id


def check_datetime(value: object) -> str | None:
    if not isinstance(value, str) or not value:
        return "collected_at must be a non-empty timestamp"
    try:
        parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    except ValueError:
        return f"collected_at is not ISO 8601: {value!r}"
    if parsed.tzinfo is None:
        return f"collected_at must carry a timezone: {value!r}"
    return None


def scan_jsonl(
    data_dir: Path,
    indexed: dict[str, dict],
    scan_floor: date,
    fatal: list[str],
    advisory: list[str],
) -> tuple[int, list[tuple[str, str, datetime | None]]]:
    """Walk the ledger, grading drift by whether the publisher would read the file.

    ``scan_floor`` is the oldest day the publisher still reads.  Problems in
    newer files are fatal; the same problems in older files are advisory, because
    the publisher skips those files entirely.
    """
    located: list[tuple[str, str, datetime | None]] = []
    total = 0
    for path in sorted(data_dir.glob("*.jsonl")):
        day = None
        try:
            day = datetime.strptime(path.stem, "%Y-%m-%d").date()
        except ValueError:
            if GLOB_MATCH.fullmatch(path.name):
                # Matches the publisher's glob but is not a real date, so the
                # publisher raises on it.
                fatal.append(f"{path.name}: filename is not a valid YYYY-MM-DD date")
            else:
                # The publisher's glob never selects this file; report only.
                advisory.append(
                    f"{path.name}: filename is not YYYY-MM-DD.jsonl, publisher ignores it"
                )
        in_window = day is not None and day >= scan_floor
        bucket = fatal if in_window else advisory
        try:
            # Strict utf-8, matching the publisher.  A BOM is a fatal, silent
            # data defect (the whole file decodes to one bad line), so surface it
            # here rather than letting the publish step discover it.
            lines = path.read_text(encoding="utf-8").splitlines()
        except UnicodeDecodeError as error:
            bucket.append(f"{path.name}: not valid UTF-8 without BOM ({error.reason})")
            continue
        except OSError as error:
            bucket.append(f"{path.name}: unreadable ({error})")
            continue
        for line_number, line in enumerate(lines, 1):
            if not line.strip():
                continue
            total += 1
            where = f"{path.name}:{line_number}"
            try:
                event = json.loads(line)
            except json.JSONDecodeError as error:
                bucket.append(f"{where}: invalid JSON ({error.msg})")
                continue
            if not isinstance(event, dict):
                bucket.append(f"{where}: line must be a JSON object")
                continue
            event_id = event.get("event_id")
            if not isinstance(event_id, str) or not event_id:
                bucket.append(f"{where}: missing event_id")
                continue
            entry = indexed.get(event_id)
            if entry is None:
                # The failure that actually dropped events in production.
                bucket.append(f"{where}: event_id missing from dedup index -> {event_id}")
            elif entry.get("file") not in (None, f"data/intelligence/{path.name}"):
                bucket.append(f"{where}: dedup index points {event_id} at {entry.get('file')!r}")
            for field in REQUIRED_TEXT_FIELDS:
                if not isinstance(event.get(field), str) or not event[field]:
                    bucket.append(f"{where}: {field} must be a non-empty string")
            for field in REQUIRED_LIST_FIELDS:
                if not isinstance(event.get(field), list):
                    bucket.append(f"{where}: {field} must be an array")
            canonical = event.get("canonical_url")
            if canonical is not None and not isinstance(canonical, str):
                bucket.append(f"{where}: canonical_url must be a string when present")
            stamp_problem = check_datetime(event.get("collected_at"))
            collected = None
            if stamp_problem:
                bucket.append(f"{where}: {stamp_problem}")
            else:
                collected = datetime.fromisoformat(
                    str(event["collected_at"]).replace("Z", "+00:00")
                )
            located.append((event_id, f"data/intelligence/{path.name}", collected))
    return total, located


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--data-dir", type=Path, default=Path("data/intelligence"))
    parser.add_argument(
        "--window-hours",
        type=int,
        default=24,
        help="also report how many events the publisher would ship right now (1-72)",
    )
    args = parser.parse_args()
    if not 1 <= args.window_hours <= 72:
        parser.error("window-hours must be between 1 and 72")
    if not args.data_dir.is_dir():
        print(f"[verify-intelligence] data directory not found: {args.data_dir}", file=sys.stderr)
        return 1

    fatal: list[str] = []
    advisory: list[str] = []
    indexed = read_index(args.data_dir, fatal, advisory)

    now = datetime.now(timezone.utc)
    # Same floor the publisher applies: it skips a day file older than
    # (cutoff in Beijing) - 1 day.  Mirroring it keeps this check from failing a
    # run the publisher would have accepted.
    scan_floor: date = (
        (now - timedelta(hours=args.window_hours)).astimezone(BEIJING).date()
        - timedelta(days=1)
    )
    total, located = scan_jsonl(args.data_dir, indexed, scan_floor, fatal, advisory)

    seen = {event_id for event_id, _, _ in located}
    for event_id in sorted(set(indexed) - seen):
        advisory.append(f"dedup-index.json: {event_id} is indexed but no JSONL event carries it")

    cutoff = now.timestamp() - args.window_hours * 3600
    publishable = sum(
        1
        for _, _, collected in located
        if collected is not None and cutoff <= collected.timestamp() <= now.timestamp() + 300
    )

    print(
        f"[verify-intelligence] index={len(indexed)} events={total} "
        f"publishable({args.window_hours}h)={publishable} "
        f"scanFloor={scan_floor.isoformat()} "
        f"fatal={len(fatal)} advisory={len(advisory)}"
    )
    for problem in advisory:
        print(f"  ~ {problem}")
    for problem in fatal:
        print(f"  ! {problem}", file=sys.stderr)
    if fatal:
        print(
            "[verify-intelligence] ledger drift detected; the dedup index and the daily "
            "JSONL must be committed together. Index repair is deliberate (the index is "
            "also the removal ledger), so fix the data before publishing.",
            file=sys.stderr,
        )
        return 1
    print("[verify-intelligence] ledger is consistent")
    return 0


if __name__ == "__main__":
    sys.exit(main())
