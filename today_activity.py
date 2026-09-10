from __future__ import annotations

import hashlib
import json
import math
import re
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from pathlib import Path
from typing import Any
from urllib.parse import quote

import requests
import yaml

UTC = timezone.utc
ISO_FORMAT = "%Y-%m-%dT%H:%M:%SZ"
WEIGHT_SUFFIXES = (".safetensors", ".bin", ".pt", ".pth", ".onnx", ".mlx", ".h5", ".msgpack")


@dataclass(frozen=True)
class TodayConfig:
    window_hours: int = 24
    max_events: int = 200
    max_hub_events: int = 40
    catalog_max_models: int = 40
    hub_org_limit: int = 20
    hub_timeout_seconds: int = 30
    openrouter_timeout_seconds: int = 30
    stale_after_minutes: int = 60
    hub_denied_name_tokens: tuple[str, ...] = ()
    hub_orgs: tuple[dict[str, Any], ...] = ()
    openrouter_enabled: bool = True
    openrouter_providers: tuple[tuple[str, str], ...] = ()


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
    hub_orgs = tuple(
        dict(item)
        for item in data.get("hub_orgs", [])
        if isinstance(item, dict) and item.get("org")
    )
    openrouter = data.get("openrouter") or {}
    providers = openrouter.get("providers") or {}
    openrouter_providers = tuple(
        (str(slug), str(name)) for slug, name in providers.items() if slug and name
    )
    return TodayConfig(
        window_hours=int(settings.get("window_hours", 24)),
        max_events=int(settings.get("max_events", 200)),
        max_hub_events=int(settings.get("max_hub_events", 40)),
        catalog_max_models=int(settings.get("catalog_max_models", 40)),
        hub_org_limit=int(settings.get("hub_org_limit", 20)),
        hub_timeout_seconds=int(settings.get("hub_timeout_seconds", 30)),
        openrouter_timeout_seconds=int(settings.get("openrouter_timeout_seconds", 30)),
        stale_after_minutes=int(settings.get("stale_after_minutes", 60)),
        hub_denied_name_tokens=tuple(
            str(item).lower() for item in settings.get("hub_denied_name_tokens", [])
        ),
        hub_orgs=hub_orgs,
        openrouter_enabled=bool(openrouter.get("enabled", True)),
        openrouter_providers=openrouter_providers,
    )


def _event_metadata(event_type: str) -> dict[str, Any]:
    if event_type == "official_model_release":
        return {
            "eventClass": "model_release",
            "trustTier": "official",
            "priority": "P0",
            "visibility": "primary",
            "isOfficial": True,
        }
    if event_type == "catalog_model_added":
        return {
            "eventClass": "model_catalog",
            "trustTier": "catalog",
            "priority": "P1",
            "visibility": "primary",
            "isOfficial": False,
        }
    if event_type == "derived_rank_changed":
        return {
            "eventClass": "benchmark",
            "trustTier": "derived",
            "priority": "P2",
            "visibility": "primary",
            "isOfficial": False,
        }
    if event_type in {
        "benchmark_updated",
        "model_added_to_benchmark",
        "model_removed_from_benchmark",
        "score_changed",
        "significant_score_change",
        "rank_changed",
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
    return {
        "eventClass": "unverified_activity",
        "trustTier": "unverified",
        "priority": "P3",
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
        "parameterCount",
        "license",
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
    parameter_count: Any = None,
    license: str | None = None,
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
        "parameterCount": parameter_count if isinstance(parameter_count, int) else None,
        "license": license or None,
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
    if value is None:
        for tag in model.get("tags") or []:
            text = str(tag)
            if text.lower().startswith("license:"):
                value = text.split(":", 1)[1]
                break
    return str(value) if value else None


BRAND_OWNERS: dict[str, str] = {
    "deepseek": "deepseek-ai",
    "qwen": "qwen",
    "llama": "meta-llama",
    "gemma": "google",
    "phi": "microsoft",
    "mistral": "mistralai",
    "mixtral": "mistralai",
    "grok": "xai-org",
    "kimi": "moonshotai",
    "glm": "zai-org",
    "minimax": "minimaxai",
    "ernie": "baidu",
    "hunyuan": "tencent",
    "falcon": "tiiuae",
    "granite": "ibm-granite",
    "olmo": "allenai",
    "nemotron": "nvidia",
    "command": "coherelabs",
    "yi": "01-ai",
    "step": "stepfun-ai",
    "ling": "inclusionai",
    "mimo": "xiaomimimo",
    "minicpm": "openbmb",
}


def _hub_is_cross_brand_repackage(repo_id: str, org: str) -> bool:
    """Repackagings such as nvidia/DeepSeek-... are not new model releases."""
    name = repo_id.split("/", 1)[-1].lower()
    org_slug = org.strip().lower()
    for brand, owner in BRAND_OWNERS.items():
        if re.match(rf"^{re.escape(brand)}(?:$|[-_.0-9])", name) and owner != org_slug:
            return True
    return False


def _hub_is_denied(repo_id: str, tokens: tuple[str, ...]) -> bool:
    name = repo_id.split("/", 1)[-1].lower()
    for token in tokens:
        if not token:
            continue
        pattern = r"(?:^|[-_.])" + re.escape(token) + r"s?(?:[-_.]|$)"
        if re.search(pattern, name):
            return True
    return False


def _hub_has_weights(model: dict[str, Any]) -> bool:
    safetensors = model.get("safetensors")
    if isinstance(safetensors, dict) and safetensors.get("total"):
        return True
    siblings = model.get("siblings")
    if not isinstance(siblings, list):
        return False
    for item in siblings:
        name = str(item.get("rfilename") or item.get("path") or "").lower()
        if name.endswith(WEIGHT_SUFFIXES):
            return True
    return False


PIPELINE_MODALITIES: dict[str, dict[str, list[str]]] = {
    "text-generation": {"input": ["text"], "output": ["text"]},
    "text2text-generation": {"input": ["text"], "output": ["text"]},
    "image-text-to-text": {"input": ["text", "image"], "output": ["text"]},
    "any-to-any": {"input": ["text", "image", "audio"], "output": ["text", "image", "audio"]},
    "text-to-image": {"input": ["text"], "output": ["image"]},
    "image-to-image": {"input": ["image"], "output": ["image"]},
    "image-to-text": {"input": ["image"], "output": ["text"]},
    "visual-question-answering": {"input": ["image", "text"], "output": ["text"]},
    "text-to-video": {"input": ["text"], "output": ["video"]},
    "image-to-video": {"input": ["image"], "output": ["video"]},
    "automatic-speech-recognition": {"input": ["audio"], "output": ["text"]},
    "text-to-speech": {"input": ["text"], "output": ["audio"]},
    "audio-text-to-text": {"input": ["audio", "text"], "output": ["text"]},
    "feature-extraction": {"input": ["text"], "output": ["text"]},
}

QUANT_SUFFIX_TOKENS = (
    "fp8",
    "bf16",
    "fp4",
    "mxfp4",
    "nvfp4",
    "awq",
    "gptq",
    "mlx",
    "gguf",
    "int4",
    "int8",
)


def _hub_pipeline_modalities(pipeline_tag: Any) -> dict[str, list[str]]:
    if not isinstance(pipeline_tag, str):
        return {"input": [], "output": []}
    mapping = PIPELINE_MODALITIES.get(pipeline_tag.strip())
    if mapping is None:
        return {"input": [], "output": []}
    return {"input": list(mapping["input"]), "output": list(mapping["output"])}


def _hub_parameter_count(model: dict[str, Any]) -> int | None:
    safetensors = model.get("safetensors")
    if isinstance(safetensors, dict):
        total = safetensors.get("total")
        if isinstance(total, int) and total > 0:
            return total
    return None


def _hub_context_window(model: dict[str, Any]) -> int | None:
    config = model.get("config")
    if not isinstance(config, dict):
        return None
    for key in ("max_position_embeddings", "n_positions", "seq_length", "max_sequence_length"):
        value = config.get(key)
        if isinstance(value, int) and value > 0:
            return value
    text_config = config.get("text_config")
    if isinstance(text_config, dict):
        value = text_config.get("max_position_embeddings")
        if isinstance(value, int) and value > 0:
            return value
    return None


def _format_parameter_count(value: Any) -> str | None:
    if not isinstance(value, (int, float)) or value <= 0:
        return None
    if value >= 1_000_000_000_000:
        return f"{value / 1_000_000_000_000:.1f}T"
    if value >= 1_000_000_000:
        return f"{value / 1_000_000_000:.1f}B"
    if value >= 1_000_000:
        return f"{value / 1_000_000:.1f}M"
    return str(int(value))


def _hub_base_name(repo_id: str) -> str:
    name = repo_id.split("/", 1)[-1].lower()
    tokens = name.split("-")
    while tokens and tokens[-1] in QUANT_SUFFIX_TOKENS:
        tokens.pop()
    return "-".join(tokens) or name


def _hub_has_quant_suffix(repo_id: str) -> bool:
    return _hub_base_name(repo_id) != repo_id.split("/", 1)[-1].lower()


def _hub_is_preferred(candidate: dict[str, Any], current: dict[str, Any]) -> bool:
    candidate_id = str(candidate.get("id") or "")
    current_id = str(current.get("id") or "")
    candidate_quant = _hub_has_quant_suffix(candidate_id)
    current_quant = _hub_has_quant_suffix(current_id)
    if candidate_quant != current_quant:
        return not candidate_quant
    candidate_created = parse_time(candidate.get("createdAt")) or datetime.min.replace(tzinfo=UTC)
    current_created = parse_time(current.get("createdAt")) or datetime.min.replace(tzinfo=UTC)
    return candidate_created > current_created


def fetch_hub_model_detail(
    repo_id: str, timeout: int, headers: dict[str, str] | None = None
) -> dict[str, Any] | None:
    try:
        payload = get_json(f"https://huggingface.co/api/models/{repo_id}", timeout, headers or {})
    except TodayFetchError:
        return None
    return payload if isinstance(payload, dict) else None


def fetch_hub_raw_config(
    repo_id: str, timeout: int, headers: dict[str, str] | None = None
) -> dict[str, Any] | None:
    try:
        payload = get_json(
            f"https://huggingface.co/{repo_id}/raw/main/config.json", timeout, headers or {}
        )
    except TodayFetchError:
        return None
    return payload if isinstance(payload, dict) else None


def hub_org_model_profile(
    model: dict[str, Any], provider: str, release_date: datetime | None
) -> dict[str, Any] | None:
    repo_id = model.get("id")
    if not isinstance(repo_id, str) or not repo_id.strip():
        return None
    repo_id = repo_id.strip()
    display_name = repo_id.split("/", 1)[1] if "/" in repo_id else repo_id
    gated = model.get("gated") is True
    return build_model_profile(
        canonical_id=f"hf:{repo_id}",
        provider=provider,
        model_id=repo_id,
        display_name=display_name,
        version=None,
        release_date=release_date,
        access="gated" if gated else "open_weights",
        status="available",
        release_type="open_weights_release",
        official_url=f"https://huggingface.co/{repo_id}",
        documentation_url=None,
        model_card_url=f"https://huggingface.co/{repo_id}",
        hub_repo=repo_id,
        source_type="hub_official_org",
        source_owner=provider,
        observed_at=release_date or utc_now(),
        source_hash=stable_hash(model),
        modalities=_hub_pipeline_modalities(model.get("pipeline_tag")),
        context_window=_hub_context_window(model),
        parameter_count=_hub_parameter_count(model),
        license=_hub_license(model),
        availability=["Hugging Face"],
    )


def hub_org_release_summary(profile: dict[str, Any]) -> str:
    parts: list[str] = []
    parameter_text = _format_parameter_count(profile.get("parameterCount"))
    if parameter_text:
        parts.append(f"参数量 {parameter_text}")
    if isinstance(profile.get("contextWindow"), int):
        parts.append(f"上下文 {profile['contextWindow']:,} tokens")
    if profile.get("license"):
        parts.append(f"许可 {profile['license']}")
    base = f"{profile.get('provider') or '厂商'} 在官方组织发布新模型"
    if parts:
        return base + "：" + "，".join(parts) + "。"
    return base + "。"


def hub_org_model_entry(
    model: dict[str, Any],
    provider: str,
    now: datetime,
    window_start: datetime,
    config: TodayConfig,
    org: str | None = None,
) -> tuple[dict[str, Any], dict[str, Any]] | None:
    repo_id = str(model.get("id") or "").strip()
    if not repo_id or model.get("private") is True:
        return None
    created = parse_time(model.get("createdAt"))
    if created is None or created < window_start or created > now:
        return None
    if _hub_is_denied(repo_id, config.hub_denied_name_tokens):
        return None
    if org and _hub_is_cross_brand_repackage(repo_id, org):
        return None
    if not _hub_has_weights(model):
        return None
    profile = hub_org_model_profile(model, provider, created)
    if profile is None:
        return None
    url = f"https://huggingface.co/{repo_id}"
    event = make_event(
        family="model",
        event_type="official_model_release",
        title=f"{profile['displayName']} 开放权重发布",
        summary=hub_org_release_summary(profile),
        url=url,
        observed_at=created,
        published_at=created,
        source=f"Hugging Face · {provider}",
        repo_id=repo_id,
        model_id=repo_id,
        severity="important",
        extra={
            "modelRef": profile["canonicalId"],
            "sourceType": "hub_official_org",
            "sourceOwner": provider,
            "eventIdentity": f"open-release:{repo_id}",
            "evidence": [
                evidence_entry(
                    "modelRepository", url, created, stable_hash(model), "hub_official_org"
                )
            ],
        },
    )
    return event, profile


def collect_hub_org_models(
    config: TodayConfig, now: datetime, window_start: datetime
) -> tuple[list[dict[str, Any]], dict[str, dict[str, Any]], list[str]]:
    events: list[dict[str, Any]] = []
    profiles: dict[str, dict[str, Any]] = {}
    failures: list[str] = []
    if not config.hub_orgs:
        return events, profiles, failures
    headers = {"User-Agent": "bench-benchmark-sync/today", "Accept": "application/json"}

    def fetch_org(entry: dict[str, Any]) -> list[Any]:
        org = str(entry.get("org") or "").strip()
        url = (
            "https://huggingface.co/api/models"
            f"?author={quote(org, safe='')}&sort=createdAt&direction=-1"
            f"&limit={config.hub_org_limit}&full=true"
        )
        payload = get_json(url, config.hub_timeout_seconds, headers)
        return payload if isinstance(payload, list) else []

    with ThreadPoolExecutor(max_workers=min(6, max(1, len(config.hub_orgs)))) as executor:
        futures = {executor.submit(fetch_org, entry): entry for entry in config.hub_orgs}
        for future in as_completed(futures):
            entry = futures[future]
            org = str(entry.get("org") or "")
            provider = str(entry.get("provider") or org)
            try:
                payload = future.result()
            except TodayFetchError:
                failures.append(f"hub_org:{org}")
                continue
            selected: dict[str, dict[str, Any]] = {}
            for model in payload:
                if not isinstance(model, dict):
                    continue
                repo_id = str(model.get("id") or "")
                if not repo_id or model.get("private") is True:
                    continue
                created = parse_time(model.get("createdAt"))
                if created is None or created < window_start or created > now:
                    continue
                if _hub_is_denied(repo_id, config.hub_denied_name_tokens):
                    continue
                base = _hub_base_name(repo_id)
                current = selected.get(base)
                if current is None or _hub_is_preferred(model, current):
                    selected[base] = model
            for model in selected.values():
                if len(events) >= config.max_hub_events:
                    break
                repo_id = str(model.get("id") or "")
                detail = fetch_hub_model_detail(repo_id, config.hub_timeout_seconds, headers)
                merged = {**model, **(detail or {})}
                raw_config = fetch_hub_raw_config(repo_id, config.hub_timeout_seconds, headers)
                if isinstance(raw_config, dict):
                    merged["config"] = {**(merged.get("config") or {}), **raw_config}
                item = hub_org_model_entry(merged, provider, now, window_start, config, org=org)
                if item is None:
                    continue
                event, profile = item
                profiles[profile["canonicalId"]] = profile
                events.append(event)
    return events, profiles, failures


def _price_per_million(value: Any) -> float | None:
    try:
        number = float(value)
    except (TypeError, ValueError):
        return None
    if not math.isfinite(number) or number < 0:
        return None
    return round(number * 1_000_000, 6)


CATALOG_CAPABILITIES: dict[str, str] = {
    "tools": "工具调用",
    "tool_choice": "工具调用",
    "reasoning": "推理",
    "reasoning_effort": "推理",
    "structured_outputs": "结构化输出",
    "response_format": "结构化输出",
    "web_search_options": "联网搜索",
}


def catalog_model_profile(
    item: dict[str, Any], provider: str, created: datetime
) -> dict[str, Any] | None:
    model_id = str(item.get("id") or "").strip()
    if not model_id:
        return None
    architecture = item.get("architecture") if isinstance(item.get("architecture"), dict) else {}
    pricing = item.get("pricing") if isinstance(item.get("pricing"), dict) else {}
    top_provider = item.get("top_provider") if isinstance(item.get("top_provider"), dict) else {}
    name = str(item.get("name") or model_id)
    if ": " in name:
        name = name.rsplit(": ", 1)[1]
    hf_id = item.get("hugging_face_id")
    hub_repo = hf_id.strip() if isinstance(hf_id, str) and hf_id.strip() else None
    capabilities: list[str] = []
    for parameter in item.get("supported_parameters") or []:
        label = CATALOG_CAPABILITIES.get(str(parameter))
        if label and label not in capabilities:
            capabilities.append(label)
    max_output = top_provider.get("max_completion_tokens")
    cached_price_key = None
    for key in ("input_cache_read", "cached_tokens", "input_cache_write"):
        if key in pricing:
            cached_price_key = key
            break
    return build_model_profile(
        canonical_id=f"openrouter:{model_id}",
        provider=provider,
        model_id=model_id,
        display_name=name,
        version=None,
        release_date=created,
        access="open_weights" if hub_repo else "closed_api",
        status="available",
        release_type="catalog_addition",
        official_url=None,
        documentation_url=None,
        model_card_url=f"https://openrouter.ai/{model_id}",
        hub_repo=hub_repo,
        source_type="openrouter_catalog",
        source_owner=provider,
        observed_at=created,
        source_hash=stable_hash(item),
        modalities={
            "input": [str(value) for value in architecture.get("input_modalities") or []],
            "output": [str(value) for value in architecture.get("output_modalities") or []],
        },
        capabilities=capabilities,
        context_window=item.get("context_length")
        if isinstance(item.get("context_length"), int)
        else None,
        max_output_tokens=max_output
        if isinstance(max_output, int) and max_output > 0
        else None,
        pricing={
            "currency": "USD",
            "inputPerMillionTokens": _price_per_million(pricing.get("prompt")),
            "outputPerMillionTokens": _price_per_million(pricing.get("completion")),
            "cachedInputPerMillionTokens": _price_per_million(
                pricing.get(cached_price_key) if cached_price_key else None
            ),
        },
        availability=["OpenRouter"],
    )


def catalog_added_summary(profile: dict[str, Any]) -> str:
    parts: list[str] = []
    if isinstance(profile.get("contextWindow"), int):
        parts.append(f"上下文 {profile['contextWindow']:,} tokens")
    pricing = profile.get("pricing") or {}
    input_price = pricing.get("inputPerMillionTokens")
    output_price = pricing.get("outputPerMillionTokens")
    if input_price is not None and output_price is not None:
        parts.append(f"价格 ${input_price:g}/${output_price:g} 每百万 tokens")
    base = f"{profile.get('displayName') or '模型'} 新增可用"
    if parts:
        return base + "：" + "，".join(parts) + "。"
    return base + "。"


def catalog_model_entry(
    item: dict[str, Any],
    provider: str,
    now: datetime,
    window_start: datetime,
    known_hf_repos: set[str],
) -> tuple[dict[str, Any], dict[str, Any]] | None:
    model_id = str(item.get("id") or "").strip()
    if not model_id or model_id.startswith("~") or ":" in model_id:
        return None
    created_raw = item.get("created")
    if not isinstance(created_raw, (int, float)) or isinstance(created_raw, bool):
        return None
    created = datetime.fromtimestamp(created_raw, tz=UTC)
    if created < window_start or created > now:
        return None
    hf_id = item.get("hugging_face_id")
    if isinstance(hf_id, str) and hf_id.strip().lower() in known_hf_repos:
        return None
    profile = catalog_model_profile(item, provider, created)
    if profile is None:
        return None
    url = f"https://openrouter.ai/{model_id}"
    event = make_event(
        family="model",
        event_type="catalog_model_added",
        title=f"{profile['displayName']} 新增可用",
        summary=catalog_added_summary(profile),
        url=url,
        observed_at=created,
        published_at=created,
        source=f"OpenRouter · {provider}",
        model_id=model_id,
        severity="normal",
        extra={
            "modelRef": profile["canonicalId"],
            "sourceType": "openrouter_catalog",
            "sourceOwner": provider,
            "eventIdentity": f"catalog:{model_id}",
            "evidence": [
                evidence_entry(
                    "catalogEntry", url, created, stable_hash(item), "openrouter_catalog"
                )
            ],
        },
    )
    return event, profile


def collect_catalog_models(
    config: TodayConfig,
    now: datetime,
    window_start: datetime,
    known_hf_repos: set[str],
) -> tuple[list[dict[str, Any]], dict[str, dict[str, Any]], list[str]]:
    if not config.openrouter_enabled:
        return [], {}, []
    headers = {"User-Agent": "bench-benchmark-sync/today", "Accept": "application/json"}
    payload = get_json(
        "https://openrouter.ai/api/v1/models", config.openrouter_timeout_seconds, headers
    )
    data = payload.get("data") if isinstance(payload, dict) else payload
    if not isinstance(data, list):
        raise TodayFetchError("OpenRouter model response is not a list")
    providers = dict(config.openrouter_providers)
    events: list[dict[str, Any]] = []
    profiles: dict[str, dict[str, Any]] = {}
    for item in data:
        if not isinstance(item, dict):
            continue
        if len(events) >= config.catalog_max_models:
            break
        model_id = str(item.get("id") or "")
        slug = model_id.split("/", 1)[0] if "/" in model_id else ""
        provider = providers.get(slug)
        if not provider:
            continue
        entry = catalog_model_entry(item, provider, now, window_start, known_hf_repos)
        if entry is None:
            continue
        event, profile = entry
        profiles[profile["canonicalId"]] = profile
        events.append(event)
    return events, profiles, []


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
    previous_models: dict[str, dict[str, Any]] | None = None,
) -> dict[str, Any]:
    current = now or utc_now()
    window_start = current - timedelta(hours=config.window_hours)
    failures: list[str] = []
    hub_events, hub_profiles, hub_failures = collect_hub_org_models(
        config, current, window_start
    )
    failures.extend(hub_failures)
    known_hf_repos = {
        str(profile.get("hubRepo") or "").lower()
        for profile in hub_profiles.values()
        if profile.get("hubRepo")
    }
    try:
        catalog_events, catalog_profiles, catalog_failures = collect_catalog_models(
            config, current, window_start, known_hf_repos
        )
    except TodayFetchError:
        catalog_events, catalog_profiles, catalog_failures = [], {}, ["catalog:TodayFetchError"]
    failures.extend(catalog_failures)
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
    if failures and previous_models:
        profiles.update(previous_models)
    profiles.update(hub_profiles)
    profiles.update(catalog_profiles)
    for event in recent_benchmark_events:
        profile_item = _benchmark_profile(event)
        if profile_item:
            model_ref, profile = profile_item
            event["modelRef"] = model_ref
            profiles.setdefault(model_ref, profile)
    events = sorted(
        hub_events + catalog_events + recent_benchmark_events,
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
    return {
        "schemaVersion": 1,
        "dataSource": "today-activity-aggregator",
        "generatedAt": iso(current),
        "windowStart": iso(window_start),
        "collectorStatus": "partial" if failures else "ok",
        "staleAfterMinutes": config.stale_after_minutes,
        "families": ["model", "benchmark"],
        "models": profiles,
        "modelCount": len(profiles),
        "sourceSummary": {
            "official": sum(
                1 for item in events if item.get("eventType") == "official_model_release"
            ),
            "catalog": sum(1 for item in events if item.get("eventType") == "catalog_model_added"),
            "benchmark": sum(1 for item in events if item.get("family") == "benchmark"),
        },
        "events": events,
        "eventCount": len(events),
        **({"collectorFailures": failures[:40]} if failures else {}),
    }
