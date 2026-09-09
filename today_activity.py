from __future__ import annotations

import hashlib
import json
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any

import requests
import yaml

UTC = timezone.utc
ISO_FORMAT = "%Y-%m-%dT%H:%M:%SZ"


@dataclass(frozen=True)
class TodayConfig:
    window_hours: int = 24
    max_hub_models: int = 80
    max_events: int = 240
    github_feed_timeout_seconds: int = 20
    hub_timeout_seconds: int = 30
    stale_after_minutes: int = 60
    important_pr_keywords: tuple[str, ...] = ()
    architecture_keywords: tuple[str, ...] = ()
    repositories: tuple[dict[str, str], ...] = ()


class TodayFetchError(RuntimeError):
    pass


def utc_now() -> datetime:
    return datetime.now(UTC).replace(microsecond=0)


def iso(value: datetime) -> str:
    return value.astimezone(UTC).strftime(ISO_FORMAT)


def parse_time(value: Any) -> datetime | None:
    if not value or not isinstance(value, str):
        return None
    text = value.strip()
    if text.endswith("Z"):
        text = text[:-1] + "+00:00"
    try:
        parsed = datetime.fromisoformat(text)
    except ValueError:
        return None
    if parsed.tzinfo is None:
        parsed = parsed.replace(tzinfo=UTC)
    return parsed.astimezone(UTC)


def stable_hash(value: Any) -> str:
    payload = json.dumps(value, ensure_ascii=False, sort_keys=True, separators=(",", ":")).encode()
    return hashlib.sha256(payload).hexdigest()


def event_id(*parts: Any) -> str:
    return stable_hash(list(parts))[:32]


def get_json(url: str, timeout: int, headers: dict[str, str] | None = None) -> Any:
    try:
        response = requests.get(url, timeout=timeout, headers=headers or {})
    except requests.RequestException as exc:
        raise TodayFetchError(f"request failed: {url}") from exc
    if response.status_code < 200 or response.status_code >= 300:
        raise TodayFetchError(f"unexpected HTTP {response.status_code}: {url}")
    try:
        return response.json()
    except ValueError as exc:
        raise TodayFetchError(f"invalid JSON: {url}") from exc


def load_config(path: Path) -> TodayConfig:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    settings = data.get("settings") or {}
    repositories = tuple(
        {"id": str(item["id"]), "kind": str(item["kind"]), "branch": str(item.get("branch") or "")}
        for item in data.get("repositories", [])
        if isinstance(item, dict) and item.get("id") and item.get("kind")
    )
    return TodayConfig(
        window_hours=int(settings.get("window_hours", 24)),
        max_hub_models=int(settings.get("max_hub_models", 80)),
        max_events=int(settings.get("max_events", 240)),
        github_feed_timeout_seconds=int(settings.get("github_feed_timeout_seconds", 20)),
        hub_timeout_seconds=int(settings.get("hub_timeout_seconds", 30)),
        stale_after_minutes=int(settings.get("stale_after_minutes", 60)),
        important_pr_keywords=tuple(
            str(item).lower() for item in settings.get("important_pr_keywords", [])
        ),
        architecture_keywords=tuple(
            str(item).lower() for item in settings.get("architecture_keywords", [])
        ),
        repositories=repositories,
    )


def make_event(
    *,
    family: str,
    event_type: str,
    title: str,
    summary: str,
    url: str,
    observed_at: datetime,
    source: str,
    repo_id: str | None = None,
    model_id: str | None = None,
    severity: str = "normal",
    published_at: datetime | None = None,
    extra: dict[str, Any] | None = None,
) -> dict[str, Any]:
    identity = (
        (extra or {}).get("benchmarkId")
        or (extra or {}).get("modelIdentity")
        or (extra or {}).get("sha")
        or (extra or {}).get("tag")
    )
    event_key = [family, event_type, identity or repo_id or model_id or url, iso(observed_at)]
    result: dict[str, Any] = {
        "eventId": event_id(*event_key),
        "family": family,
        "eventType": event_type,
        "severity": severity,
        "title": title,
        "summary": summary,
        "repoId": repo_id,
        "repo": repo_id,
        "modelId": model_id,
        "url": url,
        "observedAt": iso(observed_at),
        "publishedAt": iso(published_at) if published_at else None,
        "source": source,
    }
    if extra:
        result.update(extra)
    return result


def classify_hub_event(
    model: dict[str, Any],
    observed_at: datetime,
    window_start: datetime,
    previous: dict[str, Any] | None = None,
) -> dict[str, Any] | None:
    repo_id = model.get("id")
    if not isinstance(repo_id, str) or not repo_id.strip():
        return None
    modified = parse_time(model.get("lastModified"))
    created = parse_time(model.get("createdAt"))
    if modified is None or modified < window_start:
        return None
    siblings = model.get("siblings") if isinstance(model.get("siblings"), list) else []
    filenames = [
        str(item.get("rfilename") or item.get("path") or "")
        for item in siblings
        if isinstance(item, dict) and (item.get("rfilename") or item.get("path"))
    ]
    lowered = " ".join(filenames).lower()
    if created is not None and created >= window_start:
        event_type = "model_created"
        title = "Hub 新模型仓库"
    elif any(token in lowered for token in ("tokenizer", "tokenization", "vocab")):
        event_type = "tokenizer_updated"
        title = "Tokenizer 文件更新"
    elif any(
        token in lowered
        for token in ("config.json", "config.yaml", "config.yml", "generation_config")
    ):
        event_type = "config_updated"
        title = "模型 Config 更新"
    elif any(
        token in lowered for token in (".safetensors", ".bin", ".pt", ".pth", ".gguf", ".onnx")
    ):
        event_type = "weights_updated"
        title = "模型权重文件更新"
    elif previous and previous.get("lastModified") == model.get("lastModified"):
        return None
    else:
        event_type = "model_updated"
        title = "模型仓库更新"
    summary = f"{repo_id} 在 Hugging Face Hub 有公开仓库活动。"
    return make_event(
        family="model",
        event_type=event_type,
        title=title,
        summary=summary,
        url=f"https://huggingface.co/{repo_id}",
        observed_at=modified,
        published_at=created if event_type == "model_created" else None,
        source="Hugging Face Hub",
        repo_id=repo_id,
        model_id=repo_id,
        extra={
            "downloads": model.get("downloads")
            if isinstance(model.get("downloads"), int)
            else None,
            "likes": model.get("likes") if isinstance(model.get("likes"), int) else None,
            "hubActivity": True,
            "files": filenames[:20] or None,
        },
    )


def collect_hub_models(
    config: TodayConfig, now: datetime, window_start: datetime
) -> list[dict[str, Any]]:
    url = (
        "https://huggingface.co/api/models?sort=lastModified&direction=-1&limit="
        f"{config.max_hub_models}&full=true"
    )
    payload = get_json(
        url, config.hub_timeout_seconds, {"User-Agent": "bench-benchmark-sync/today"}
    )
    if not isinstance(payload, list):
        raise TodayFetchError("Hugging Face model response is not a list")
    return [
        event
        for item in payload
        if isinstance(item, dict)
        if (event := classify_hub_event(item, now, window_start))
    ]


def classify_paths(paths: list[str], keywords: tuple[str, ...]) -> bool:
    lowered = " ".join(paths).lower()
    return any(keyword in lowered for keyword in keywords)


def get_text(url: str, timeout: int, headers: dict[str, str] | None = None) -> str:
    try:
        response = requests.get(url, timeout=timeout, headers=headers or {})
    except requests.RequestException as exc:
        raise TodayFetchError(f"request failed: {url}") from exc
    if response.status_code < 200 or response.status_code >= 300:
        raise TodayFetchError(f"unexpected HTTP {response.status_code}: {url}")
    return response.text


def atom_entries(payload: str) -> list[dict[str, str]]:
    try:
        root = ET.fromstring(payload)
    except ET.ParseError as exc:
        raise TodayFetchError("invalid Atom feed") from exc
    namespace = "{http://www.w3.org/2005/Atom}"
    entries: list[dict[str, str]] = []
    for entry in root.findall(f"{namespace}entry"):
        title = entry.findtext(f"{namespace}title") or ""
        updated = (
            entry.findtext(f"{namespace}updated") or entry.findtext(f"{namespace}published") or ""
        )
        links = [item.get("href") for item in entry.findall(f"{namespace}link") if item.get("href")]
        author = entry.findtext(f"{namespace}author/{namespace}name") or ""
        entries.append(
            {"title": title, "updated": updated, "url": links[0] if links else "", "author": author}
        )
    return entries


def collect_github_repo(
    repo: dict[str, str], config: TodayConfig, now: datetime, window_start: datetime
) -> list[dict[str, Any]]:
    repo_id = repo["id"]
    headers = {"User-Agent": "bench-benchmark-sync/today", "Accept": "application/atom+xml"}
    branch = repo.get("branch") or "main"
    feeds = [
        (f"https://github.com/{repo_id}/commits/{branch}.atom", "commit"),
        (f"https://github.com/{repo_id}/releases.atom", "github_release"),
        (f"https://github.com/{repo_id}/pulls.atom", "important_pr"),
        (f"https://github.com/{repo_id}/tags.atom", "tag_created"),
    ]
    events: list[dict[str, Any]] = []
    for feed_url, feed_type in feeds:
        try:
            entries = atom_entries(get_text(feed_url, config.github_feed_timeout_seconds, headers))
        except TodayFetchError:
            continue
        for entry in entries:
            observed = parse_time(entry.get("updated"))
            if not observed or observed < window_start or observed > now:
                continue
            title = entry.get("title") or feed_type
            url = entry.get("url") or f"https://github.com/{repo_id}"
            if feed_type == "important_pr":
                searchable = title.lower()
                if not any(keyword in searchable for keyword in config.important_pr_keywords):
                    continue
                event_type = "important_pr"
                event_title = f"{repo_id} 重要 PR 活动"
                summary = title[:180]
                severity = "important"
            elif feed_type == "github_release":
                event_type = "github_release"
                event_title = f"{repo_id} 发布版本"
                summary = title[:180] or "GitHub Release 更新"
                severity = "important"
            elif feed_type == "tag_created":
                event_type = "tag_created"
                event_title = f"{repo_id} 创建 Tag"
                summary = title[:180] or "GitHub Tag 更新"
                severity = "normal"
            else:
                searchable = title.lower()
                event_type = (
                    "architecture_code_change"
                    if any(keyword in searchable for keyword in config.architecture_keywords)
                    else "commit"
                )
                event_title = (
                    f"{repo_id} 架构相关代码变化"
                    if event_type == "architecture_code_change"
                    else f"{repo_id} Commit"
                )
                summary = title[:180] or "GitHub Commit 更新"
                severity = "normal"
            events.append(
                make_event(
                    family="technology",
                    event_type=event_type,
                    title=event_title,
                    summary=summary,
                    url=url,
                    observed_at=observed,
                    published_at=observed,
                    source="GitHub",
                    repo_id=repo_id,
                    severity=severity,
                    extra={
                        "kind": repo.get("kind"),
                        "branch": branch,
                        "author": entry.get("author") or None,
                    },
                )
            )
    return events


def read_latest_benchmark_events(
    path: Path, now: datetime, window_start: datetime
) -> list[dict[str, Any]]:
    if not path.exists():
        return []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, ValueError):
        return []
    events: list[dict[str, Any]] = []
    for item in data.get("events", []) if isinstance(data, dict) else []:
        if not isinstance(item, dict) or item.get("family") != "benchmark":
            continue
        observed = parse_time(item.get("observedAt"))
        if observed and window_start <= observed <= now:
            events.append(item)
    return events


def build_document(
    config: TodayConfig,
    *,
    now: datetime | None = None,
    benchmark_events: list[dict[str, Any]] | None = None,
) -> dict[str, Any]:
    current = now or utc_now()
    window_start = current - timedelta(hours=config.window_hours)
    model_events = collect_hub_models(config, current, window_start)
    technology_events: list[dict[str, Any]] = []
    with ThreadPoolExecutor(max_workers=min(5, max(1, len(config.repositories)))) as executor:
        futures = {
            executor.submit(collect_github_repo, repo, config, current, window_start): repo
            for repo in config.repositories
        }
        for future in as_completed(futures):
            try:
                technology_events.extend(future.result())
            except TodayFetchError:
                continue
    recent_benchmark_events = [
        item
        for item in (benchmark_events or [])
        if isinstance(item, dict)
        and (observed := parse_time(item.get("observedAt")))
        and window_start <= observed <= current
    ]
    events = sorted(
        model_events + technology_events + recent_benchmark_events,
        key=lambda item: item.get("observedAt") or "",
        reverse=True,
    )
    unique: dict[str, dict[str, Any]] = {}
    for item in events:
        unique[item["eventId"]] = item
    events = list(unique.values())[: config.max_events]
    source_hash = stable_hash(events)
    for item in events:
        item["provenance"] = {
            "sourceUrl": item.get("url"),
            "contentHash": source_hash,
        }
    return {
        "schemaVersion": 1,
        "dataSource": "today-activity-aggregator",
        "generatedAt": iso(current),
        "windowStart": iso(window_start),
        "collectorStatus": "ok",
        "staleAfterMinutes": config.stale_after_minutes,
        "families": ["model", "technology", "benchmark"],
        "events": events,
        "eventCount": len(events),
    }
