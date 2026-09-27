#!/usr/bin/env python3
"""Publish recent, verified private intelligence to todayEvents/intelligence.

The existing collector owns todayEvents/latest. Keeping the two writers on
different document IDs prevents either schedule from erasing the other's data.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from datetime import datetime, timedelta, timezone
from pathlib import Path
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import Request, urlopen
from zoneinfo import ZoneInfo


COLLECTION = "todayEvents"
DOCUMENT_ID = "intelligence"
DATA_SOURCE = "private-intelligence-jsonl"
MAX_QUERY_BYTES = 1_000_000
BEIJING = ZoneInfo("Asia/Shanghai")
STABLE_TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/stable_token"
TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token"
DATABASE_UPDATE_URL = "https://api.weixin.qq.com/tcb/databaseupdate"


def iso_utc(value: datetime) -> str:
    return value.astimezone(timezone.utc).isoformat(timespec="seconds").replace("+00:00", "Z")


def request_json(url: str, body: dict | None = None, attempts: int = 3) -> dict:
    data = json.dumps(body, ensure_ascii=False).encode("utf-8") if body is not None else None
    last_error: Exception | None = None
    for attempt in range(attempts):
        try:
            request = Request(url, data=data, headers={"Content-Type": "application/json"})
            with urlopen(request, timeout=30) as response:
                payload = json.load(response)
            if not isinstance(payload, dict):
                raise ValueError("WeChat API response must be an object")
            return payload
        except (HTTPError, URLError, TimeoutError, ValueError) as error:
            last_error = error
            if attempt + 1 < attempts:
                time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"WeChat API request failed: {type(last_error).__name__}")


def access_token(appid: str, secret: str) -> str:
    payload = request_json(STABLE_TOKEN_URL, {
        "grant_type": "client_credential",
        "appid": appid,
        "secret": secret,
        "force_refresh": False,
    })
    if payload.get("access_token"):
        return payload["access_token"]
    payload = request_json(f"{TOKEN_URL}?{urlencode({'grant_type': 'client_credential', 'appid': appid, 'secret': secret})}")
    if not payload.get("access_token"):
        raise RuntimeError(f"WeChat access token unavailable: {payload.get('errcode')}")
    return payload["access_token"]


def parse_datetime(value: object, field: str) -> datetime:
    if not isinstance(value, str) or not value:
        raise ValueError(f"{field} must be a timestamp")
    parsed = datetime.fromisoformat(value.replace("Z", "+00:00"))
    if parsed.tzinfo is None:
        raise ValueError(f"{field} must include a timezone")
    return parsed.astimezone(timezone.utc)


def read_recent_events(data_dir: Path, now: datetime, window_hours: int = 24) -> tuple[list[dict], str]:
    index_path = data_dir / "dedup-index.json"
    index = json.loads(index_path.read_text(encoding="utf-8"))
    if index.get("schema_version") != 1 or not isinstance(index.get("events"), list):
        raise ValueError("unsupported intelligence dedup index")
    indexed_ids = {item.get("event_id") for item in index["events"] if isinstance(item, dict)}
    cutoff = now - timedelta(hours=window_hours)
    events: dict[str, dict] = {}
    for path in sorted(data_dir.glob("????-??-??.jsonl")):
        try:
            file_day = datetime.strptime(path.stem, "%Y-%m-%d").date()
        except ValueError as error:
            raise ValueError(f"invalid intelligence filename: {path.name}") from error
        if file_day < cutoff.astimezone(BEIJING).date() - timedelta(days=1):
            continue
        for line_number, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
            if not line.strip():
                continue
            try:
                event = json.loads(line)
            except json.JSONDecodeError as error:
                raise ValueError(f"{path}:{line_number}: invalid JSON") from error
            event_id = event.get("event_id") if isinstance(event, dict) else None
            if not isinstance(event_id, str) or not event_id or event_id not in indexed_ids:
                raise ValueError(f"{path}:{line_number}: event_id missing from dedup index")
            if not all(isinstance(event.get(key), str) and event[key] for key in ("event_type", "title", "summary", "canonical_url")):
                raise ValueError(f"{path}:{line_number}: required intelligence fields missing")
            if not isinstance(event.get("sources"), list) or not isinstance(event.get("evidence"), list):
                raise ValueError(f"{path}:{line_number}: sources and evidence must be arrays")
            collected = parse_datetime(event.get("collected_at"), "collected_at")
            if cutoff <= collected <= now + timedelta(minutes=5):
                events[event_id] = event
    ordered = sorted(events.values(), key=lambda item: item["collected_at"], reverse=True)
    return ordered, iso_utc(cutoff)


def build_document(data_dir: Path, now: datetime, commit: str, window_hours: int = 24) -> dict:
    events, window_start = read_recent_events(data_dir, now, window_hours)
    return {
        "schemaVersion": 1,
        "dataSource": DATA_SOURCE,
        "generatedAt": iso_utc(now),
        "lastCheckedAt": iso_utc(now),
        "windowStart": window_start,
        "windowHours": window_hours,
        "sourceCommit": commit,
        "events": events,
        "eventCount": len(events),
    }


def push_document(document: dict, appid: str, secret: str, env: str) -> None:
    data = json.dumps(document, ensure_ascii=False, separators=(",", ":"))
    query = f'db.collection("{COLLECTION}").doc("{DOCUMENT_ID}").set({{data:{data}}})'
    if len(query.encode("utf-8")) > MAX_QUERY_BYTES:
        raise ValueError("intelligence document exceeds CloudBase query size limit")
    token = access_token(appid, secret)
    payload = request_json(
        f"{DATABASE_UPDATE_URL}?{urlencode({'access_token': token})}",
        {"env": env, "query": query},
    )
    if payload.get("errcode") != 0:
        raise RuntimeError(f"CloudBase write failed: errcode={payload.get('errcode')} errmsg={payload.get('errmsg')}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dry-run", action="store_true")
    parser.add_argument("--data-dir", type=Path, default=Path("data/intelligence"))
    parser.add_argument("--window-hours", type=int, default=24)
    args = parser.parse_args()
    if not 1 <= args.window_hours <= 72:
        parser.error("window-hours must be between 1 and 72")
    now = datetime.now(timezone.utc)
    document = build_document(args.data_dir, now, os.environ.get("INTELLIGENCE_SOURCE_SHA", "local"), args.window_hours)
    print(f"[intelligence] recent events={document['eventCount']} windowStart={document['windowStart']}")
    if args.dry_run:
        return 0
    names = ("WX_APPID", "WX_APP_SECRET", "WX_CLOUD_ENV")
    missing = [name for name in names if not os.environ.get(name)]
    if missing:
        raise RuntimeError(f"missing GitHub Actions secrets: {', '.join(missing)}")
    push_document(document, os.environ["WX_APPID"], os.environ["WX_APP_SECRET"], os.environ["WX_CLOUD_ENV"])
    print(f"[intelligence] wrote {COLLECTION}/{DOCUMENT_ID}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError, RuntimeError) as error:
        print(f"[intelligence] {error}", file=sys.stderr)
        sys.exit(1)
