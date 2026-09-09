from __future__ import annotations

import hashlib
import json
import re
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
    max_hub_discoveries: int = 12
    max_events: int = 240
    github_feed_timeout_seconds: int = 20
    hub_timeout_seconds: int = 30
    official_timeout_seconds: int = 30
    stale_after_minutes: int = 60
    hub_require_license: bool = True
    hub_allow_gated: bool = False
    hub_min_downloads: int = 0
    hub_min_likes: int = 0
    hub_denied_name_tokens: tuple[str, ...] = ()
    important_pr_keywords: tuple[str, ...] = ()
    architecture_keywords: tuple[str, ...] = ()
    repositories: tuple[dict[str, Any], ...] = ()
    official_sources: tuple[dict[str, Any], ...] = ()


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


def get_text(url: str, timeout: int, headers: dict[str, str] | None = None) -> str:
    try:
        response = requests.get(url, timeout=timeout, headers=headers or {})
    except requests.RequestException as exc:
        raise TodayFetchError(f"request failed: {url}") from exc
    if response.status_code < 200 or response.status_code >= 300:
        raise TodayFetchError(f"unexpected HTTP {response.status_code}: {url}")
    return response.text


def load_config(path: Path) -> TodayConfig:
    data = yaml.safe_load(path.read_text(encoding="utf-8")) or {}
    settings = data.get("settings") or {}
    repositories = tuple(
        dict(item)
        for item in data.get("repositories", [])
        if isinstance(item, dict) and item.get("id") and item.get("kind")
    )
    official_sources = tuple(
        dict(item)
        for item in data.get("official_sources", [])
        if isinstance(item, dict) and item.get("source_id")
    )
    return TodayConfig(
        window_hours=int(settings.get("window_hours", 24)),
        max_hub_models=int(settings.get("max_hub_models", 80)),
        max_hub_discoveries=int(settings.get("max_hub_discoveries", 12)),
        max_events=int(settings.get("max_events", 240)),
        github_feed_timeout_seconds=int(settings.get("github_feed_timeout_seconds", 20)),
        hub_timeout_seconds=int(settings.get("hub_timeout_seconds", 30)),
        official_timeout_seconds=int(settings.get("official_timeout_seconds", 30)),
        stale_after_minutes=int(settings.get("stale_after_minutes", 60)),
        hub_require_license=bool(settings.get("hub_require_license", True)),
        hub_allow_gated=bool(settings.get("hub_allow_gated", False)),
        hub_min_downloads=int(settings.get("hub_min_downloads", 0)),
        hub_min_likes=int(settings.get("hub_min_likes", 0)),
        hub_denied_name_tokens=tuple(
            str(item).lower() for item in settings.get("hub_denied_name_tokens", [])
        ),
        important_pr_keywords=tuple(
            str(item).lower() for item in settings.get("important_pr_keywords", [])
        ),
        architecture_keywords=tuple(
            str(item).lower() for item in settings.get("architecture_keywords", [])
        ),
        repositories=repositories,
        official_sources=official_sources,
    )


def _event_metadata(event_type: str) -> dict[str, Any]:
    if event_type in {
        "official_model_release",
        "official_model_deprecated",
        "official_model_metadata_changed",
    }:
        return {
            "eventClass": "model_release",
            "trustTier": "official",
            "priority": "P0",
            "visibility": "primary",
            "isOfficial": True,
        }
    if event_type == "official_catalog_added":
        return {
            "eventClass": "model_catalog",
            "trustTier": "official_catalog",
            "priority": "P0",
            "visibility": "primary",
            "isOfficial": True,
        }
    if event_type == "derived_rank_changed":
        return {
            "eventClass": "benchmark",
            "trustTier": "derived",
            "priority": "P2",
            "visibility": "primary",
            "isOfficial": False,
        }
    if event_type.startswith("hub_"):
        return {
            "eventClass": "model_discovery",
            "trustTier": "hub",
            "priority": "P2",
            "visibility": "secondary",
            "isOfficial": False,
        }
    if event_type in {
        "benchmark_updated",
        "model_added_to_benchmark",
        "model_removed_from_benchmark",
        "score_changed",
        "significant_score_change",
        "rank_changed",
        "derived_rank_changed",
    }:
        return {
            "eventClass": "benchmark",
            "trustTier": "official",
            "priority": "P1"
            if event_type in {"benchmark_updated", "significant_score_change"}
            else "P2",
            "visibility": "primary",
            "isOfficial": True,
        }
    if event_type == "github_release":
        return {
            "eventClass": "technical_release",
            "trustTier": "technical",
            "priority": "P1",
            "visibility": "primary",
            "isOfficial": False,
        }
    return {
        "eventClass": "technical_activity",
        "trustTier": "technical",
        "priority": "P2",
        "visibility": "primary",
        "isOfficial": False,
    }


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
        (extra or {}).get("eventIdentity")
        or (extra or {}).get("benchmarkId")
        or (extra or {}).get("modelIdentity")
        or (extra or {}).get("sha")
        or (extra or {}).get("tag")
    )
    event_key = [family, event_type, identity or repo_id or model_id or url]
    result: dict[str, Any] = {
        "eventId": event_id(*event_key),
        "family": family,
        "eventType": event_type,
        **_event_metadata(event_type),
        "severity": severity,
        "title": title,
        "summary": summary,
        "repoId": repo_id,
        "repo": repo_id,
        "modelId": model_id,
        "modelRef": None,
        "sourceType": None,
        "sourceOwner": None,
        "evidence": [],
        "url": url,
        "observedAt": iso(observed_at),
        "publishedAt": iso(published_at) if published_at else None,
        "source": source,
    }
    if extra:
        result.update(extra)
    return result


def evidence_entry(
    field: str,
    source_url: str | None,
    observed_at: datetime,
    content_hash: str | None,
    source_type: str,
) -> dict[str, Any]:
    return {
        "field": field,
        "sourceUrl": source_url,
        "observedAt": iso(observed_at),
        "contentHash": content_hash or stable_hash([field, source_url, iso(observed_at)]),
        "sourceType": source_type,
    }


def _nonempty(value: Any) -> bool:
    return value is not None and value != "" and value != [] and value != {}


def _provider_slug(provider: str) -> str:
    slug = re.sub(r"[^a-z0-9]+", "-", provider.lower()).strip("-")
    return slug or "unknown"


def _as_list(value: Any) -> list[Any]:
    if value is None:
        return []
    if isinstance(value, list):
        return value
    return [value]


def _normalise_modalities(value: Any) -> dict[str, list[str]]:
    if not isinstance(value, dict):
        return {"input": [], "output": []}
    return {
        "input": [str(item) for item in _as_list(value.get("input")) if item],
        "output": [str(item) for item in _as_list(value.get("output")) if item],
    }


def _normalise_pricing(value: Any) -> dict[str, Any]:
    if not isinstance(value, dict):
        return {
            "currency": "USD",
            "inputPerMillionTokens": None,
            "outputPerMillionTokens": None,
            "cachedInputPerMillionTokens": None,
        }
    return {
        "currency": value.get("currency") or "USD",
        "inputPerMillionTokens": value.get("inputPerMillionTokens"),
        "outputPerMillionTokens": value.get("outputPerMillionTokens"),
        "cachedInputPerMillionTokens": value.get("cachedInputPerMillionTokens"),
    }


def _profile_evidence(
    profile: dict[str, Any],
    source_url: str,
    observed_at: datetime,
    content_hash: str,
    source_type: str,
) -> list[dict[str, Any]]:
    evidence: list[dict[str, Any]] = []
    scalar_fields = [
        "canonicalId",
        "provider",
        "modelId",
        "displayName",
        "version",
        "releaseDate",
        "status",
        "deprecationDate",
        "releaseType",
        "access",
        "contextWindow",
        "maxInputTokens",
        "maxOutputTokens",
        "officialUrl",
        "documentationUrl",
        "modelCardUrl",
        "hubRepo",
        "sourceOwner",
    ]
    for field in scalar_fields:
        if _nonempty(profile.get(field)):
            evidence.append(
                evidence_entry(field, source_url, observed_at, content_hash, source_type)
            )
    for field in ("aliases", "capabilities", "availability"):
        if profile.get(field):
            evidence.append(
                evidence_entry(field, source_url, observed_at, content_hash, source_type)
            )
    modalities = profile.get("modalities") or {}
    if modalities.get("input") or modalities.get("output"):
        evidence.append(
            evidence_entry("modalities", source_url, observed_at, content_hash, source_type)
        )
    pricing = profile.get("pricing") or {}
    if any(value is not None for key, value in pricing.items() if key != "currency"):
        evidence.append(
            evidence_entry("pricing", source_url, observed_at, content_hash, source_type)
        )
    return evidence


def build_model_profile(
    *,
    canonical_id: str,
    provider: str | None,
    model_id: str,
    display_name: str | None,
    version: str | None,
    release_date: datetime | None,
    access: str | None,
    status: str | None,
    release_type: str | None,
    official_url: str | None,
    documentation_url: str | None,
    model_card_url: str | None,
    hub_repo: str | None,
    source_type: str,
    source_owner: str | None,
    observed_at: datetime,
    source_hash: str,
    aliases: list[str] | None = None,
    deprecation_date: datetime | None = None,
    modalities: Any = None,
    capabilities: list[str] | None = None,
    context_window: Any = None,
    max_input_tokens: Any = None,
    max_output_tokens: Any = None,
    pricing: Any = None,
    availability: list[str] | None = None,
) -> dict[str, Any]:
    profile: dict[str, Any] = {
        "canonicalId": canonical_id,
        "provider": provider,
        "modelId": model_id,
        "displayName": display_name or model_id,
        "version": version,
        "aliases": aliases or [],
        "releaseDate": iso(release_date) if release_date else None,
        "status": status,
        "deprecationDate": iso(deprecation_date) if deprecation_date else None,
        "releaseType": release_type,
        "access": access or "unknown",
        "modalities": _normalise_modalities(modalities),
        "capabilities": capabilities or [],
        "contextWindow": context_window,
        "maxInputTokens": max_input_tokens,
        "maxOutputTokens": max_output_tokens,
        "pricing": _normalise_pricing(pricing),
        "availability": availability or [],
        "officialUrl": official_url,
        "documentationUrl": documentation_url,
        "modelCardUrl": model_card_url,
        "hubRepo": hub_repo,
        "sourceType": source_type,
        "sourceOwner": source_owner,
        "evidence": [],
    }
    profile["evidence"] = _profile_evidence(
        profile,
        official_url or model_card_url or documentation_url or "",
        observed_at,
        source_hash,
        source_type,
    )
    return profile


def _hub_license(model: dict[str, Any]) -> str | None:
    value = model.get("license")
    if value is None and isinstance(model.get("cardData"), dict):
        value = model["cardData"].get("license")
    return str(value) if value else None


def _hub_author(model: dict[str, Any]) -> str | None:
    for key in ("author", "authorName", "organization"):
        if model.get(key):
            return str(model[key])
    repo_id = model.get("id")
    return str(repo_id).split("/", 1)[0] if isinstance(repo_id, str) and "/" in repo_id else None


def _hub_is_eligible(model: dict[str, Any], config: TodayConfig | None) -> bool:
    if config is None:
        return True
    repo_id = str(model.get("id") or "").lower()
    if any(token and token in repo_id for token in config.hub_denied_name_tokens):
        return False
    if config.hub_require_license and not _hub_license(model):
        return False
    if not config.hub_allow_gated and (model.get("gated") is True or model.get("private") is True):
        return False
    downloads = model.get("downloads") if isinstance(model.get("downloads"), int) else 0
    likes = model.get("likes") if isinstance(model.get("likes"), int) else 0
    return downloads >= config.hub_min_downloads and likes >= config.hub_min_likes


def hub_model_profile(model: dict[str, Any], observed_at: datetime) -> dict[str, Any] | None:
    repo_id = model.get("id")
    if not isinstance(repo_id, str) or not repo_id.strip():
        return None
    created = parse_time(model.get("createdAt"))
    source_hash = stable_hash(model)
    gated = model.get("gated") is True
    return build_model_profile(
        canonical_id=f"hub:{repo_id}",
        provider=None,
        model_id=repo_id,
        display_name=repo_id,
        version=None,
        release_date=created,
        access="gated" if gated else "open_weights",
        status="available" if not model.get("private") else "private",
        release_type="hub_repository",
        official_url=None,
        documentation_url=None,
        model_card_url=f"https://huggingface.co/{repo_id}",
        hub_repo=repo_id,
        source_type="hub_model_page",
        source_owner=_hub_author(model),
        observed_at=observed_at,
        source_hash=source_hash,
        availability=["Hugging Face Hub"],
    )


def classify_hub_event(
    model: dict[str, Any],
    observed_at: datetime,
    window_start: datetime,
    previous: dict[str, Any] | None = None,
    config: TodayConfig | None = None,
) -> dict[str, Any] | None:
    del previous
    repo_id = model.get("id")
    if not isinstance(repo_id, str) or not repo_id.strip():
        return None
    created = parse_time(model.get("createdAt"))
    modified = parse_time(model.get("lastModified"))
    if created is None or created < window_start or created > observed_at:
        return None
    if not _hub_is_eligible(model, config):
        return None
    observed = modified or created
    if observed < window_start or observed > observed_at:
        return None
    filenames = [
        str(item.get("rfilename") or item.get("path") or "")
        for item in model.get("siblings", [])
        if isinstance(item, dict) and (item.get("rfilename") or item.get("path"))
    ]
    model_ref = f"hub:{repo_id}"
    return make_event(
        family="model",
        event_type="hub_open_model_discovered",
        title="Hub 新开放模型",
        summary=f"{repo_id} 在 Hugging Face Hub 新建公开模型仓库；这不是厂商官方发布或质量认证。",
        url=f"https://huggingface.co/{repo_id}",
        observed_at=observed,
        published_at=created,
        source="Hugging Face Hub",
        repo_id=repo_id,
        model_id=repo_id,
        extra={
            "modelRef": model_ref,
            "sourceType": "hub_model_page",
            "sourceOwner": _hub_author(model),
            "downloads": model.get("downloads")
            if isinstance(model.get("downloads"), int)
            else None,
            "likes": model.get("likes") if isinstance(model.get("likes"), int) else None,
            "license": _hub_license(model),
            "gated": model.get("gated") if isinstance(model.get("gated"), bool) else None,
            "hubActivity": True,
            "files": filenames[:20] or None,
            "evidence": [
                evidence_entry(
                    "hubRepository",
                    f"https://huggingface.co/{repo_id}",
                    observed,
                    stable_hash(model),
                    "hub_model_page",
                )
            ],
            "modelProfile": hub_model_profile(model, observed),
        },
    )


def collect_hub_models_with_profiles(
    config: TodayConfig, now: datetime, window_start: datetime
) -> tuple[list[dict[str, Any]], dict[str, dict[str, Any]]]:
    url = (
        "https://huggingface.co/api/models?sort=createdAt&direction=-1&limit="
        f"{config.max_hub_models}&full=true"
    )
    payload = get_json(
        url, config.hub_timeout_seconds, {"User-Agent": "bench-benchmark-sync/today"}
    )
    if not isinstance(payload, list):
        raise TodayFetchError("Hugging Face model response is not a list")
    events: list[dict[str, Any]] = []
    profiles: dict[str, dict[str, Any]] = {}
    for item in payload:
        if not isinstance(item, dict):
            continue
        event = classify_hub_event(item, now, window_start, config=config)
        if not event:
            continue
        events.append(event)
        profile = event.get("modelProfile")
        if isinstance(profile, dict) and event.get("modelRef"):
            profiles[event["modelRef"]] = profile
        if len(events) >= config.max_hub_discoveries:
            break
    return events, profiles


def collect_hub_models(
    config: TodayConfig, now: datetime, window_start: datetime
) -> list[dict[str, Any]]:
    events, _ = collect_hub_models_with_profiles(config, now, window_start)
    return events


def classify_paths(paths: list[str], keywords: tuple[str, ...]) -> bool:
    lowered = " ".join(paths).lower()
    return any(keyword in lowered for keyword in keywords)


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
        entry_id = entry.findtext(f"{namespace}id") or ""
        summary = (
            entry.findtext(f"{namespace}summary") or entry.findtext(f"{namespace}content") or ""
        )
        entries.append(
            {
                "title": title,
                "updated": updated,
                "url": links[0] if links else "",
                "author": author,
                "id": entry_id,
                "summary": summary,
            }
        )
    return entries


def collect_github_repo(
    repo: dict[str, Any], config: TodayConfig, now: datetime, window_start: datetime
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
                if not any(keyword in title.lower() for keyword in config.important_pr_keywords):
                    continue
                event_type, event_title, summary, severity = (
                    "important_pr",
                    f"{repo_id} 重要 PR 活动",
                    title[:180],
                    "important",
                )
            elif feed_type == "github_release":
                event_type, event_title, summary, severity = (
                    "github_release",
                    f"{repo_id} 发布版本",
                    title[:180] or "GitHub Release 更新",
                    "important",
                )
            elif feed_type == "tag_created":
                event_type, event_title, summary, severity = (
                    "tag_created",
                    f"{repo_id} 创建 Tag",
                    title[:180] or "GitHub Tag 更新",
                    "normal",
                )
            else:
                event_type = (
                    "architecture_code_change"
                    if any(keyword in title.lower() for keyword in config.architecture_keywords)
                    else "commit"
                )
                event_title = (
                    f"{repo_id} 架构相关代码变化"
                    if event_type == "architecture_code_change"
                    else f"{repo_id} Commit"
                )
                summary, severity = title[:180] or "GitHub Commit 更新", "normal"
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
                        "eventIdentity": entry.get("id") or url,
                        "sourceType": "github_atom",
                        "sourceOwner": repo_id.split("/", 1)[0],
                        "evidence": [
                            evidence_entry(
                                "event", url, observed, stable_hash(entry), "github_atom"
                            )
                        ],
                    },
                )
            )
    return events


def _official_records(payload: Any) -> list[dict[str, Any]]:
    if isinstance(payload, str):
        records: list[dict[str, Any]] = []
        for match in re.findall(
            r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
            payload,
            flags=re.IGNORECASE | re.DOTALL,
        ):
            try:
                decoded = json.loads(match.strip())
            except ValueError:
                continue
            records.extend(_official_records(decoded))
        return records
    records: list[dict[str, Any]] = []

    def visit(value: Any, top_level: bool = False) -> None:
        if isinstance(value, list):
            for item in value:
                visit(item)
            return
        if not isinstance(value, dict):
            return
        keys = set(value)
        identity_keys = {"modelId", "model_id", "modelName", "model_name", "canonicalId", "model"}
        if keys & identity_keys or (top_level and ("id" in keys or "name" in keys)):
            records.append(value)
        for key in ("models", "items", "releases", "data", "results", "@graph", "itemListElement"):
            if key in value:
                visit(value[key])

    visit(payload, top_level=True)
    return records


def _official_model_id(record: dict[str, Any], source: dict[str, Any]) -> str | None:
    for key in ("modelId", "model_id", "modelName", "model_name", "canonicalId", "model"):
        value = record.get(key)
        if isinstance(value, str) and value.strip():
            return value.strip()
    title = str(record.get("title") or record.get("name") or "")
    for pattern in source.get("model_id_patterns") or []:
        try:
            match = re.search(str(pattern), title, flags=re.IGNORECASE)
        except re.error:
            continue
        if match:
            return match.groupdict().get("model_id") or match.group(0)
    return None


def _official_profile(
    source: dict[str, Any], record: dict[str, Any], model_id: str, observed_at: datetime
) -> tuple[str, dict[str, Any], datetime | None, str]:
    provider = str(source.get("provider") or "") or None
    canonical_id = str(
        record.get("canonicalId") or f"{_provider_slug(provider or 'unknown')}:{model_id}"
    )
    release_date = parse_time(
        record.get("releaseDate")
        or record.get("release_date")
        or record.get("publishedAt")
        or record.get("published_at")
        or record.get("date")
    )
    source_url = str(
        record.get("officialUrl") or record.get("url") or source.get("official_url") or ""
    )
    content_hash = stable_hash(record)
    profile = build_model_profile(
        canonical_id=canonical_id,
        provider=provider,
        model_id=model_id,
        display_name=record.get("displayName")
        or record.get("display_name")
        or record.get("name")
        or model_id,
        version=str(record.get("version")) if record.get("version") is not None else None,
        release_date=release_date,
        access=record.get("access"),
        status=record.get("status"),
        release_type=record.get("releaseType") or record.get("release_type"),
        official_url=source_url or None,
        documentation_url=record.get("documentationUrl") or record.get("documentation_url"),
        model_card_url=record.get("modelCardUrl") or record.get("model_card_url"),
        hub_repo=record.get("hubRepo") or record.get("hub_repo"),
        source_type=str(source.get("source_type") or "official_source"),
        source_owner=provider,
        observed_at=observed_at,
        source_hash=content_hash,
        aliases=[str(item) for item in _as_list(record.get("aliases")) if item],
        deprecation_date=parse_time(record.get("deprecationDate") or record.get("deprecated_at")),
        modalities=record.get("modalities"),
        capabilities=[str(item) for item in _as_list(record.get("capabilities")) if item],
        context_window=record.get("contextWindow") or record.get("context_window"),
        max_input_tokens=record.get("maxInputTokens") or record.get("max_input_tokens"),
        max_output_tokens=record.get("maxOutputTokens") or record.get("max_output_tokens"),
        pricing=record.get("pricing"),
        availability=[str(item) for item in _as_list(record.get("availability")) if item],
    )
    return canonical_id, profile, release_date, source_url


def collect_official_sources(
    config: TodayConfig,
    now: datetime,
    window_start: datetime,
    previous_state: dict[str, Any] | None = None,
) -> tuple[list[dict[str, Any]], dict[str, dict[str, Any]], dict[str, Any], list[str]]:
    events: list[dict[str, Any]] = []
    profiles: dict[str, dict[str, Any]] = {}
    statuses: dict[str, Any] = {}
    failures: list[str] = []
    previous_sources = (previous_state or {}).get("officialSources") or {}
    headers = {
        "User-Agent": "bench-benchmark-sync/today",
        "Accept": "application/json, application/atom+xml",
    }
    for source in config.official_sources:
        source_id = str(source.get("source_id"))
        status: dict[str, Any] = {
            "enabled": bool(source.get("enabled")),
            "sourceType": source.get("source_type"),
            "provider": source.get("provider"),
            "endpoint": source.get("endpoint"),
            "lastSuccessAt": (previous_sources.get(source_id) or {}).get("lastSuccessAt"),
            "contentHash": (previous_sources.get(source_id) or {}).get("contentHash"),
            "modelCount": 0,
            "models": dict((previous_sources.get(source_id) or {}).get("models") or {}),
        }
        statuses[source_id] = status
        if not source.get("enabled"):
            status["status"] = "disabled"
            continue
        source_format = str(source.get("format") or "").lower()
        try:
            if source_format in {"atom", "rss", "xml"}:
                payload: Any = atom_entries(
                    get_text(source["endpoint"], config.official_timeout_seconds, headers)
                )
            elif source_format in {"json", "jsonld", "json-ld"}:
                payload = get_json(source["endpoint"], config.official_timeout_seconds, headers)
            elif source_format in {"html", "html_jsonld", "html-jsonld"}:
                payload = get_text(source["endpoint"], config.official_timeout_seconds, headers)
            else:
                raise TodayFetchError(f"unsupported official source format: {source_format}")
            content_hash = stable_hash(payload)
            status.update({"status": "ok", "lastSuccessAt": iso(now), "contentHash": content_hash})
            previous_models = (previous_sources.get(source_id) or {}).get("models") or {}
            for record in _official_records(payload):
                if isinstance(record.get("updated"), str) and not record.get("updatedAt"):
                    record = {**record, "updatedAt": record.get("updated")}
                model_id = _official_model_id(record, source)
                if not model_id:
                    continue
                canonical_id, profile, release_date, source_url = _official_profile(
                    source, record, model_id, now
                )
                profiles[canonical_id] = profile
                version = profile.get("version")
                status["models"][canonical_id] = version
                observed = release_date or parse_time(
                    record.get("updatedAt") or record.get("updated_at")
                )
                if observed is None or observed < window_start or observed > now:
                    continue
                previous_version = previous_models.get(canonical_id)
                is_catalog = str(source.get("source_type") or "").startswith(
                    "official_model_catalog"
                )
                if is_catalog and previous_version is not None and previous_version == version:
                    continue
                event_type = "official_catalog_added" if is_catalog else "official_model_release"
                event_url = source_url or str(
                    source.get("official_url") or source.get("endpoint") or ""
                )
                events.append(
                    make_event(
                        family="model",
                        event_type=event_type,
                        title=(
                            f"{profile.get('displayName')} 官方模型目录更新"
                            if is_catalog
                            else f"{profile.get('displayName')} 官方发布"
                        ),
                        summary=(
                            f"{profile.get('provider') or source.get('provider')} 官方来源公布了 "
                            f"{model_id}。"
                        ),
                        url=event_url,
                        observed_at=observed,
                        published_at=release_date,
                        source=str(source.get("provider") or source_id),
                        model_id=model_id,
                        severity="important",
                        extra={
                            "modelRef": canonical_id,
                            "sourceType": source.get("source_type"),
                            "sourceOwner": source.get("provider"),
                            "eventIdentity": (
                                f"{source_id}:{canonical_id}:{version or ''}:"
                                f"{record.get('id') or event_url}"
                            ),
                            "evidence": [
                                evidence_entry(
                                    "release",
                                    event_url,
                                    observed,
                                    stable_hash(record),
                                    str(source.get("source_type") or "official_source"),
                                )
                            ],
                        },
                    )
                )
            status["modelCount"] = len(status["models"])
        except (TodayFetchError, KeyError, TypeError, ValueError) as exc:
            status["status"] = "error"
            status["error"] = str(exc)
            status["modelCount"] = len(status["models"])
            failures.append(f"official:{source_id}:{type(exc).__name__}")
    return events, profiles, statuses, failures


def _benchmark_profile(event: dict[str, Any]) -> tuple[str, dict[str, Any]] | None:
    model_id = event.get("modelId")
    if not isinstance(model_id, str) or not model_id:
        return None
    model_ref = event.get("modelRef") or f"benchmark:{model_id}"
    observed = parse_time(event.get("observedAt")) or utc_now()
    profile = build_model_profile(
        canonical_id=model_ref,
        provider=None,
        model_id=model_id,
        display_name=model_id,
        version=None,
        release_date=None,
        access="unknown",
        status="unknown",
        release_type=None,
        official_url=None,
        documentation_url=None,
        model_card_url=None,
        hub_repo=None,
        source_type="official_benchmark",
        source_owner=event.get("source"),
        observed_at=observed,
        source_hash=stable_hash(event),
    )
    profile["evidence"].append(
        evidence_entry(
            "benchmarkIdentity",
            event.get("url"),
            observed,
            stable_hash(event),
            "official_benchmark",
        )
    )
    return model_ref, profile


def priority_value(value: Any) -> int:
    return {"P0": 0, "P1": 1, "P2": 2, "P3": 3}.get(str(value), 9)


def build_document(
    config: TodayConfig,
    *,
    now: datetime | None = None,
    benchmark_events: list[dict[str, Any]] | None = None,
    previous_state: dict[str, Any] | None = None,
    previous_models: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    current = now or utc_now()
    window_start = current - timedelta(hours=config.window_hours)
    hub_failures: list[str] = []
    try:
        model_events, hub_profiles = collect_hub_models_with_profiles(config, current, window_start)
    except TodayFetchError as exc:
        model_events, hub_profiles = [], {}
        hub_failures.append(f"hub:{type(exc).__name__}")
    official_events, official_profiles, official_statuses, official_failures = (
        collect_official_sources(config, current, window_start, previous_state)
    )
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
    for event in recent_benchmark_events:
        metadata = _event_metadata(str(event.get("eventType") or ""))
        for key, value in metadata.items():
            event.setdefault(key, value)
        event.setdefault("modelRef", None)
        event.setdefault("sourceType", "official_benchmark")
        event.setdefault("sourceOwner", event.get("source"))
        event.setdefault("evidence", [])
        if event.get("eventType") == "derived_rank_changed":
            event.setdefault("rankSource", "derived")
    profiles: dict[str, dict[str, Any]] = {}
    if official_failures and previous_models:
        profiles.update(previous_models)
    profiles.update(official_profiles)
    profiles.update(hub_profiles)
    if previous_models:
        for event in recent_benchmark_events:
            previous_ref = event.get("modelRef")
            if previous_ref and previous_ref in previous_models:
                profiles.setdefault(previous_ref, previous_models[previous_ref])
    for event in recent_benchmark_events:
        profile_item = _benchmark_profile(event)
        if profile_item:
            model_ref, profile = profile_item
            event["modelRef"] = model_ref
            profiles.setdefault(model_ref, profile)
    events = sorted(
        model_events + official_events + technology_events + recent_benchmark_events,
        key=lambda item: (
            priority_value(item.get("priority")),
            -(parse_time(item.get("observedAt")) or current).timestamp(),
        ),
    )
    unique: dict[str, dict[str, Any]] = {}
    for item in events:
        unique[item["eventId"]] = item
    events = list(unique.values())[: config.max_events]
    source_hash = stable_hash(events)
    for item in events:
        item.pop("modelProfile", None)
        item["provenance"] = {"sourceUrl": item.get("url"), "contentHash": source_hash}
    failures = hub_failures + official_failures
    return {
        "schemaVersion": 1,
        "dataSource": "today-activity-aggregator",
        "generatedAt": iso(current),
        "windowStart": iso(window_start),
        "collectorStatus": "partial" if failures else "ok",
        "staleAfterMinutes": config.stale_after_minutes,
        "families": ["model", "technology", "benchmark"],
        "models": profiles,
        "modelCount": len(profiles),
        "officialSources": official_statuses,
        "sourceSummary": {
            "official": sum(
                1
                for item in events
                if item.get("trustTier") in {"official", "official_catalog"}
                and item.get("family") == "model"
            ),
            "hub": sum(1 for item in events if item.get("trustTier") == "hub"),
            "technology": sum(1 for item in events if item.get("family") == "technology"),
            "benchmark": sum(1 for item in events if item.get("family") == "benchmark"),
        },
        "events": events,
        "eventCount": len(events),
        **({"collectorFailures": failures[:40]} if failures else {}),
    }
