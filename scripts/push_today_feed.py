#!/usr/bin/env python3
"""Push the verified Today feed into the WeChat CloudBase database.

The mini program cannot request the GitHub-hosted feed on a real device: WeChat
only allows ICP-filed HTTPS domains in ``wx.request``. Instead the collector
stores the feed as a single document (``todayEvents/latest``) through the
CloudBase HTTP API, and ``aiRankingApi.getToday`` reads it back for the app.

Credentials come from the environment (GitHub secrets, never logged):
``WX_APPID``, ``WX_APP_SECRET``, ``WX_CLOUD_ENV``.
"""

from __future__ import annotations

import argparse
import json
import os
import sys
import time
from datetime import datetime, timezone
from pathlib import Path

import requests

STABLE_TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/stable_token"
TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token"
DATABASE_UPDATE_URL = "https://api.weixin.qq.com/tcb/databaseupdate"
COLLECTION_ADD_URL = "https://api.weixin.qq.com/tcb/databasecollectionadd"

EXPECTED_DATA_SOURCE = "today-activity-aggregator"
REQUIRED_FAMILIES = ("model", "benchmark")
EXPECTED_BUNDLE_SOURCE = "benchmark-sync-static"
EXPECTED_USAGE_SOURCE = "usage-rankings"
MAX_DOCUMENT_BYTES = 1_000_000
MISSING_COLLECTION_MARKERS = (
    "collection not exist",
    "collection not exists",
    "集合不存在",
    "db or table not exist",
)
ATTEMPTS = 3


def log(message: str) -> None:
    print(f"[push-today-feed] {message}")


def utc_now() -> str:
    return datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


def load_feed(path: Path) -> dict:
    document = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(document, dict):
        raise ValueError("feed root must be an object")
    if document.get("schemaVersion") != 1:
        raise ValueError(f"unsupported schemaVersion: {document.get('schemaVersion')!r}")
    if document.get("dataSource") != EXPECTED_DATA_SOURCE:
        raise ValueError(f"unexpected dataSource: {document.get('dataSource')!r}")
    if not isinstance(document.get("events"), list):
        raise ValueError("feed events must be a list")
    families = document.get("families")
    covers_required = isinstance(families, list) and all(
        family in families for family in REQUIRED_FAMILIES
    )
    if not covers_required:
        raise ValueError(
            f"feed families must include {list(REQUIRED_FAMILIES)}: {families!r}"
        )
    if not isinstance(document.get("models"), dict):
        raise ValueError("feed models must be an object")
    return document


def load_usage_rankings(path: Path) -> dict:
    """Daily token rankings for OpenRouter and OpenCode, stored as one document."""
    document = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(document, dict):
        raise ValueError("usage root must be an object")
    if document.get("schemaVersion") != 1:
        raise ValueError(f"unsupported usage schemaVersion: {document.get('schemaVersion')!r}")
    if document.get("dataSource") != EXPECTED_USAGE_SOURCE:
        raise ValueError(f"unexpected dataSource: {document.get('dataSource')!r}")
    if document.get("collectorStatus") not in ("ok", "partial", "unavailable"):
        raise ValueError(f"unexpected collectorStatus: {document.get('collectorStatus')!r}")
    for key in ("openrouter", "opencode"):
        board = document.get(key)
        if not isinstance(board, dict) or not isinstance(board.get("entries"), list):
            raise ValueError(f"usage board {key} must contain an entries list")
        if board.get("metric") != "daily_tokens" or board.get("unit") != "tokens":
            raise ValueError(f"usage board {key} must be daily token volume")
    return document


def load_ranking_bundle(path: Path) -> dict:
    """The 24-board static export the mini program bundles; pushed as one document."""
    document = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(document, dict):
        raise ValueError("bundle root must be an object")
    if document.get("schemaVersion") != 3:
        raise ValueError(f"unsupported bundle schemaVersion: {document.get('schemaVersion')!r}")
    if document.get("dataSource") != EXPECTED_BUNDLE_SOURCE:
        raise ValueError(f"unexpected dataSource: {document.get('dataSource')!r}")
    families = document.get("families")
    rankings = document.get("rankings")
    if not isinstance(families, list) or len(families) != 3:
        raise ValueError(f"bundle families must list 3 families: {families!r}")
    if not isinstance(rankings, dict) or len(rankings) != 24:
        count = len(rankings) if isinstance(rankings, dict) else "n/a"
        raise ValueError(f"bundle rankings must contain 24 boards: {count}")
    return document


def fetch_access_token(appid: str, secret: str) -> str:
    try:
        response = requests.post(
            STABLE_TOKEN_URL,
            json={
                "grant_type": "client_credential",
                "appid": appid,
                "secret": secret,
                "force_refresh": False,
            },
            timeout=20,
        )
        payload = response.json()
    except (requests.RequestException, ValueError) as error:
        # Request exceptions may include the request URL or body. Do not log them.
        raise RuntimeError(f"stable_token request failed: {type(error).__name__}") from None
    token = payload.get("access_token")
    if token:
        return token
    # Older accounts may not expose stable_token; fall back to the classic endpoint.
    try:
        response = requests.get(
            TOKEN_URL,
            params={"grant_type": "client_credential", "appid": appid, "secret": secret},
            timeout=20,
        )
        payload = response.json()
    except (requests.RequestException, ValueError) as error:
        raise RuntimeError(f"token request failed: {type(error).__name__}") from None
    token = payload.get("access_token")
    if not token:
        errcode = payload.get("errcode")
        raise RuntimeError(f"access_token unavailable: errcode={errcode}")
    return token


def build_set_query(collection: str, doc_id: str, document: dict) -> str:
    data = json.dumps(document, ensure_ascii=False, separators=(",", ":"))
    return f'db.collection("{collection}").doc("{doc_id}").set({{data: {data}}})'


def call_api(url: str, token: str, body: dict, attempts: int = ATTEMPTS) -> dict:
    last_error: Exception | None = None
    endpoint = url.rsplit("/", 1)[-1]
    for attempt in range(1, attempts + 1):
        try:
            response = requests.post(url, params={"access_token": token}, json=body, timeout=60)
            return response.json()
        except (requests.RequestException, ValueError) as error:
            last_error = type(error).__name__
            log(f"{endpoint} attempt {attempt}/{attempts} failed: {last_error}")
            if attempt < attempts:
                time.sleep(2 * attempt)
    raise RuntimeError(f"request to {endpoint} failed after {attempts} attempts: {last_error}")


def is_missing_collection(payload: dict) -> bool:
    errmsg = str(payload.get("errmsg", "")).lower()
    return any(marker in errmsg for marker in MISSING_COLLECTION_MARKERS)


def ensure_collection(env: str, collection: str, token: str) -> None:
    payload = call_api(COLLECTION_ADD_URL, token, {"env": env, "collection_name": collection})
    errcode = payload.get("errcode")
    if errcode == 0:
        log(f"created collection {collection}")
        return
    # Already-present is fine; anything else stays visible in the workflow log.
    log(f"collection create returned errcode={errcode}")


def feed_payload(document: dict) -> dict:
    """Strip database-managed fields before the document is written."""
    return {key: value for key, value in document.items() if not key.startswith("_")}


def cloud_document(document: dict, synced_at: str) -> dict:
    """Add the push timestamp so readers can tell a quiet window from a dead pipeline."""
    payload = feed_payload(document)
    payload["cloudSyncedAt"] = synced_at
    return payload


def ranking_documents(document: dict, synced_at: str) -> list[tuple[str, dict]]:
    """Split one export into a catalog plus one document per board.

    A board is 1-6KB. The whole export is ~170KB and takes ~18s to read, so the
    mini program loads the catalog first and fetches only the boards a page needs.
    """
    payload = cloud_document(document, synced_at)
    rankings = payload.pop("rankings")
    catalog = {
        "schemaVersion": payload.get("schemaVersion"),
        "dataSource": payload.get("dataSource"),
        "exporterVersion": payload.get("exporterVersion"),
        "generatedAt": payload.get("generatedAt"),
        "workflowRunId": payload.get("workflowRunId"),
        "mainCommit": payload.get("mainCommit"),
        "cloudSyncedAt": payload["cloudSyncedAt"],
        "kind": "catalog",
        "boardCount": len(rankings),
        "families": payload.get("families"),
    }
    documents = []
    for board_id, ranking in rankings.items():
        board = feed_payload(ranking)
        board["kind"] = "board"
        board["boardId"] = board_id
        board["cloudSyncedAt"] = payload["cloudSyncedAt"]
        board["bundleGeneratedAt"] = payload.get("generatedAt")
        documents.append((board_id, board))
    # Publish the catalog only after all referenced boards were written.
    documents.append(("catalog", catalog))
    return documents


def push_documents(
    documents: list[tuple[str, dict]],
    appid: str,
    secret: str,
    env: str,
    collection: str,
) -> list[dict]:
    """Write every document with one access token, creating the collection once."""
    token = fetch_access_token(appid, secret)
    collection_ready = False
    results = []
    for doc_id, document in documents:
        query = build_set_query(collection, doc_id, document)
        query_bytes = len(query.encode("utf-8"))
        if query_bytes > MAX_DOCUMENT_BYTES:
            raise RuntimeError(
                f"{collection}/{doc_id} is {query_bytes} bytes, above the "
                f"{MAX_DOCUMENT_BYTES}-byte guard"
            )
        log(f"pushing {collection}/{doc_id} (query {query_bytes} bytes)")
        payload = call_api(DATABASE_UPDATE_URL, token, {"env": env, "query": query})
        if payload.get("errcode") and is_missing_collection(payload) and not collection_ready:
            ensure_collection(env, collection, token)
            collection_ready = True
            payload = call_api(DATABASE_UPDATE_URL, token, {"env": env, "query": query})
        if payload.get("errcode"):
            errcode = payload.get("errcode")
            raise RuntimeError(
                f"CloudBase write failed for {collection}/{doc_id}: "
                f"errcode={errcode}"
            )
        results.append(payload)
    return results


def push_feed(
    document: dict,
    appid: str,
    secret: str,
    env: str,
    collection: str,
    doc_id: str,
    synced_at: str | None = None,
) -> dict:
    document = cloud_document(document, synced_at or utc_now())
    query = build_set_query(collection, doc_id, document)
    query_bytes = len(query.encode("utf-8"))
    if query_bytes > MAX_DOCUMENT_BYTES:
        raise RuntimeError(
            f"document is {query_bytes} bytes, above the {MAX_DOCUMENT_BYTES}-byte "
            "guard; trim it before pushing"
        )
    log(f"pushing {collection}/{doc_id} (query {query_bytes} bytes)")

    token = fetch_access_token(appid, secret)
    payload = call_api(DATABASE_UPDATE_URL, token, {"env": env, "query": query})
    if payload.get("errcode") and is_missing_collection(payload):
        ensure_collection(env, collection, token)
        payload = call_api(DATABASE_UPDATE_URL, token, {"env": env, "query": query})
    if payload.get("errcode"):
        errcode = payload.get("errcode")
        raise RuntimeError(f"CloudBase write failed: errcode={errcode}")
    return payload


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(
        description="Push Today/ranking documents into WeChat CloudBase"
    )
    parser.add_argument(
        "--kind",
        choices=("today", "ranking", "usage"),
        default="today",
        help="today: activity feed; ranking: 24-board export; usage: daily token rankings",
    )
    parser.add_argument("--feed", default=None, help="path to the document JSON")
    parser.add_argument("--collection", default=None)
    parser.add_argument("--doc-id", default=None)
    parser.add_argument("--env", default=os.environ.get("WX_CLOUD_ENV", ""))
    parser.add_argument("--appid", default=os.environ.get("WX_APPID", ""))
    parser.add_argument("--secret", default=os.environ.get("WX_APP_SECRET", ""))
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="validate and summarize without calling the API",
    )
    args = parser.parse_args(argv)

    defaults = {
        "today": {
            "feed": "generated/static-events/today-events.json",
            "collection": "todayEvents",
            "doc_id": "latest",
        },
        "ranking": {
            "feed": "generated/static-export/livebench-ranking.json",
            "collection": "rankingBundles",
            "doc_id": "latest",
        },
        "usage": {
            "feed": "generated/usage-rankings/usage-rankings.json",
            "collection": "usageRankings",
            "doc_id": "latest",
        },
    }[args.kind]
    feed_path = Path(args.feed or defaults["feed"])
    collection = args.collection or defaults["collection"]
    doc_id = args.doc_id or defaults["doc_id"]

    loader = {
        "today": load_feed,
        "ranking": load_ranking_bundle,
        "usage": load_usage_rankings,
    }[args.kind]
    try:
        document = loader(feed_path)
    except (OSError, ValueError) as error:
        log(f"refusing to push: {error}")
        return 1

    if args.kind == "today":
        events = len(document.get("events", []))
        models = len(document.get("models", {}))
        log(
            f"feed {feed_path} generatedAt={document.get('generatedAt')} "
            f"events={events} models={models} collectorStatus={document.get('collectorStatus')}"
        )
    elif args.kind == "usage":
        log(
            f"usage {feed_path} generatedAt={document.get('generatedAt')} "
            f"status={document.get('collectorStatus')} "
            f"openrouter={len(document['openrouter']['entries'])} "
            f"opencode={len(document['opencode']['entries'])}"
        )
    else:
        boards = len(document.get("rankings", {}))
        log(
            f"bundle {feed_path} generatedAt={document.get('generatedAt')} "
            f"families={len(document.get('families', []))} boards={boards} "
            f"exporterVersion={document.get('exporterVersion')}"
        )
    if args.dry_run:
        log("dry run: no credentials used, nothing written")
        return 0

    credentials = {
        "WX_APPID": args.appid,
        "WX_APP_SECRET": args.secret,
        "WX_CLOUD_ENV": args.env,
    }
    missing = [name for name, value in credentials.items() if not value]
    if missing:
        log(f"missing credentials: {', '.join(missing)}")
        return 1

    synced_at = utc_now()
    try:
        if args.kind == "ranking":
            documents = ranking_documents(document, synced_at)
            # Keep the legacy whole-bundle document so a client that has not
            # picked up per-board reads still gets today's data.
            documents.append(("latest", cloud_document(document, synced_at)))
            payloads = push_documents(
                documents, args.appid, args.secret, args.env, collection
            )
        elif args.kind == "usage":
            payloads = [
                push_feed(
                    document, args.appid, args.secret, args.env, collection, doc_id, synced_at
                )
            ]
        else:
            payloads = [
                push_feed(
                    document, args.appid, args.secret, args.env, collection, doc_id, synced_at
                )
            ]
    except RuntimeError as error:
        log(str(error))
        return 1
    log(f"pushed {len(payloads)} document(s) to {collection}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
