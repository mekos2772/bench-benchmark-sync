#!/usr/bin/env python3
"""Build one daily usage document from OpenRouter and OpenCode.

OpenRouter uses the official Data API. OpenCode has no documented public API, so
its daily token series is read from the server-rendered public stats page. Both
boards are token volume for one UTC/page day, never request counts or quality.
"""

from __future__ import annotations

import argparse
import json
import os
import re
import time
from datetime import date, datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import requests

OPENROUTER_URL = "https://openrouter.ai/api/v1/datasets/rankings-daily"
OPENCODE_URL = "https://opencode.ai/data"
OPENROUTER_SOURCE = "https://openrouter.ai/rankings"
OPENCODE_SOURCE = "https://opencode.ai/data"
SCHEMA_VERSION = 1
DATA_SOURCE = "usage-rankings"
MAX_ROWS = 30
OPENCODE_PARTIAL_RATIO = 0.25

MONTHS = {
    "JAN": 1, "FEB": 2, "MAR": 3, "APR": 4, "MAY": 5, "JUN": 6,
    "JUL": 7, "AUG": 8, "SEP": 9, "OCT": 10, "NOV": 11, "DEC": 12,
}


def utc_now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def log(message: str) -> None:
    print(f"[usage-rankings] {message}")


def request_json(
    url: str,
    headers: dict[str, str],
    params: dict[str, str],
    attempts: int = 3,
) -> dict[str, Any]:
    """Fetch JSON, retrying transient failures; a rejected key fails immediately."""
    last_error: Exception | None = None
    for attempt in range(1, attempts + 1):
        try:
            response = requests.get(url, headers=headers, params=params, timeout=30)
        except requests.RequestException as error:
            last_error = error
            log(f"openrouter attempt {attempt}/{attempts}: {type(error).__name__}: {error}")
            if attempt < attempts:
                time.sleep(2 * attempt)
            continue
        if response.status_code == 401:
            raise RuntimeError("OpenRouter rejected the API key (HTTP 401)")
        if response.status_code >= 500 and attempt < attempts:
            log(f"openrouter attempt {attempt}/{attempts}: HTTP {response.status_code}")
            time.sleep(2 * attempt)
            continue
        response.raise_for_status()
        payload = response.json()
        if not isinstance(payload, dict):
            raise ValueError("OpenRouter response must be an object")
        return payload
    raise RuntimeError(f"OpenRouter request failed after {attempts} attempts: {last_error}")


def fetch_openrouter(api_key: str, day: date) -> dict[str, Any]:
    payload = request_json(
        OPENROUTER_URL,
        {"Authorization": f"Bearer {api_key}", "Accept": "application/json"},
        {"start_date": day.isoformat(), "end_date": day.isoformat()},
    )
    rows = payload.get("data")
    if not isinstance(rows, list):
        raise ValueError("OpenRouter data must be a list")
    entries = []
    for row in rows:
        if not isinstance(row, dict):
            continue
        model = str(row.get("model_permaslug") or "").strip()
        if not model or model == "other":
            continue
        try:
            tokens = int(str(row.get("total_tokens")))
        except (TypeError, ValueError):
            continue
        if tokens < 0:
            continue
        entries.append({"model": model, "tokens": tokens})
    entries.sort(key=lambda item: (-item["tokens"], item["model"]))
    if not entries:
        raise ValueError(f"OpenRouter returned no model rows for {day.isoformat()}")
    meta = payload.get("meta") if isinstance(payload.get("meta"), dict) else {}
    return {
        "status": "ok",
        "source": "OpenRouter",
        "sourceUrl": OPENROUTER_SOURCE,
        "license": "CC BY 4.0",
        "attribution": (
            "Source: OpenRouter (openrouter.ai/rankings), as of "
            f"{meta.get('as_of') or day.isoformat()}. Licensed under CC BY 4.0."
        ),
        "date": day.isoformat(),
        "metric": "daily_tokens",
        "unit": "tokens",
        "asOf": meta.get("as_of"),
        "note": "官方日榜 token 量，不含 other，不是调用次数，也不代表模型能力。",
        "entries": rank_entries(entries[:MAX_ROWS]),
    }


def fetch_text(url: str) -> str:
    response = requests.get(
        url,
        headers={"Accept": "text/html", "User-Agent": "benchmark-sync-usage/1.0"},
        timeout=40,
    )
    response.raise_for_status()
    response.encoding = "utf-8"
    return response.text


def parse_opencode_usage(html: str) -> tuple[str | None, list[tuple[str, list[tuple[str, float]]]]]:
    updated = re.search(r'updatedAt:"([^"]+)"', html)
    usage_at = html.find("usage:", updated.start() if updated else 0)
    if usage_at < 0:
        raise ValueError("OpenCode page has no usage series")
    end = html.find(",users:", usage_at)
    if end < 0:
        raise ValueError("OpenCode page has no boundary after the usage series")
    days = []
    for part in re.split(r'date:"', html[usage_at:end])[1:]:
        label = part.split('"', 1)[0]
        rows = []
        for model, raw in re.findall(r'model:"([^"]+)",value:([0-9.]+|null)', part):
            if raw == "null":
                continue
            rows.append((model, float(raw)))
        days.append((label, rows))
    if not days:
        raise ValueError("OpenCode usage series is empty")
    return (updated.group(1) if updated else None), days


def parse_page_date(label: str, updated_at: str | None) -> date:
    match = re.fullmatch(r"([A-Z]{3}) (\d{1,2})", label.strip())
    if not match or match.group(1) not in MONTHS:
        raise ValueError(f"unrecognized OpenCode date: {label!r}")
    anchor = datetime.now(timezone.utc).date()
    if updated_at:
        anchor = datetime.fromisoformat(updated_at.replace("Z", "+00:00")).date()
    year = anchor.year
    parsed = date(year, MONTHS[match.group(1)], int(match.group(2)))
    if parsed > anchor + timedelta(days=2):
        parsed = parsed.replace(year=year - 1)
    return parsed


def select_complete_day(
    days: list[tuple[str, list[tuple[str, float]]]],
) -> tuple[int, str]:
    totals = [sum(value for _, value in rows) for _, rows in days]
    complete_indexes = [
        index
        for index in range(len(days) - 1)
        if totals[index] > 0 and totals[index + 1] < totals[index] * OPENCODE_PARTIAL_RATIO
    ]
    if complete_indexes:
        index = complete_indexes[-1]
        return index, "latest_complete_day"
    positive = [index for index, total in enumerate(totals) if total > 0]
    if not positive:
        raise ValueError("OpenCode usage series has no positive day")
    return positive[-1], "latest_positive_day"


def fetch_opencode() -> dict[str, Any]:
    updated_at, days = parse_opencode_usage(fetch_text(OPENCODE_URL))
    index, selection = select_complete_day(days)
    label, rows = days[index]
    day = parse_page_date(label, updated_at)
    previous = dict(days[index - 1][1]) if index else {}
    entries = []
    for model, value in rows:
        if model == "Other" or value <= 0:
            continue
        prior = previous.get(model)
        change = None if prior in (None, 0) else round((value - prior) / prior * 100, 1)
        entries.append({
            "model": model,
            "tokens": round(value * 1_000_000_000_000),
            "changePercent": change,
        })
    entries.sort(key=lambda item: (-item["tokens"], item["model"]))
    if not entries:
        raise ValueError(f"OpenCode returned no model rows for {label}")
    return {
        "status": "ok",
        "source": "OpenCode",
        "sourceUrl": OPENCODE_SOURCE,
        "license": None,
        "attribution": "数据来自 OpenCode 公开统计页 opencode.ai/data。",
        "date": day.isoformat(),
        "metric": "daily_tokens",
        "unit": "tokens",
        "asOf": updated_at,
        "selection": selection,
        "note": "公开页每日 token 量，按页面单位换算为 tokens；不是调用次数，也不代表模型能力。",
        "entries": rank_entries(entries[:MAX_ROWS]),
    }


def rank_entries(entries: list[dict[str, Any]]) -> list[dict[str, Any]]:
    ranked = []
    for index, entry in enumerate(entries, start=1):
        ranked.append({**entry, "rank": index})
    return ranked


def unavailable(source: str, source_url: str, reason: str) -> dict[str, Any]:
    return {
        "status": "unavailable",
        "source": source,
        "sourceUrl": source_url,
        "license": "CC BY 4.0" if source == "OpenRouter" else None,
        "attribution": None,
        "date": None,
        "metric": "daily_tokens",
        "unit": "tokens",
        "asOf": None,
        "note": reason,
        "entries": [],
    }


def build_document(api_key: str | None) -> dict[str, Any]:
    errors = []
    if api_key:
        # The official daily dataset can lag a few hours after UTC midnight.
        candidates = [
            datetime.now(timezone.utc).date() - timedelta(days=offset)
            for offset in (1, 2)
        ]
        openrouter = None
        for day in candidates:
            try:
                openrouter = fetch_openrouter(api_key, day)
                break
            except (requests.RequestException, RuntimeError, ValueError) as error:
                errors.append(f"openrouter {day.isoformat()}: {error}")
        if openrouter is None:
            openrouter = unavailable("OpenRouter", OPENROUTER_SOURCE, "OpenRouter 日榜暂不可用。")
    else:
        errors.append("openrouter: OPENROUTER_API_KEY is not configured")
        openrouter = unavailable("OpenRouter", OPENROUTER_SOURCE, "尚未配置 OpenRouter API Key。")

    try:
        opencode = fetch_opencode()
    except (requests.RequestException, ValueError) as error:
        errors.append(f"opencode: {error}")
        opencode = unavailable("OpenCode", OPENCODE_SOURCE, "OpenCode 日榜暂不可用。")

    statuses = {openrouter["status"], opencode["status"]}
    if statuses == {"ok"}:
        collector_status = "ok"
    elif "ok" in statuses:
        collector_status = "partial"
    else:
        collector_status = "unavailable"
    return {
        "schemaVersion": SCHEMA_VERSION,
        "dataSource": DATA_SOURCE,
        "generatedAt": utc_now(),
        "collectorStatus": collector_status,
        "errors": errors,
        "openrouter": openrouter,
        "opencode": opencode,
    }


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Collect daily OpenRouter and OpenCode usage rankings"
    )
    parser.add_argument("--output", required=True)
    parser.add_argument("--api-key", default=os.environ.get("OPENROUTER_API_KEY", ""))
    args = parser.parse_args(argv)

    document = build_document(args.api_key or None)
    for error in document["errors"]:
        log(f"collector error: {error}")
    output = Path(args.output)
    output.parent.mkdir(parents=True, exist_ok=True)
    output.write_text(json.dumps(document, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    log(
        f"wrote {output} status={document['collectorStatus']} "
        f"openrouter={document['openrouter']['date']} opencode={document['opencode']['date']}"
    )
    return 0 if document["collectorStatus"] != "unavailable" else 1


if __name__ == "__main__":
    raise SystemExit(main())
