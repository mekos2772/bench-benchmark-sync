from __future__ import annotations

import html
import json
import os
import re
import urllib.error
import urllib.request
from typing import Any

from collector.base import BenchmarkCollector
from collector.models import FetchContext, FetchResult, ModelScore, SourceRef
from persistence.hash import sha256_bytes

_SCRIPT_RE = re.compile(
    r'<script[^>]+type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
    re.IGNORECASE | re.DOTALL,
)


class ArtificialAnalysisCollector(BenchmarkCollector):
    """Collect AA data from its official API or public Dataset JSON-LD pages."""

    def __init__(self, source: dict[str, Any]):
        self.source = source
        self.benchmark_id = source["benchmark_id"]
        self._last_fetch: FetchResult | None = None
        self._payload: dict[str, Any] | None = None

    def describe_source(self) -> dict[str, Any]:
        return dict(self.source)

    def fetch(self, context: FetchContext | None = None) -> FetchResult:
        context = context or FetchContext()
        if self.source.get("source_type") == "official_page_endpoint":
            return self._fetch_page(context)
        return self._fetch_api(context)

    def _fetch_page(self, context: FetchContext) -> FetchResult:
        try:
            raw = _read_url(self.source["endpoint"], context)
            documents = _extract_jsonld_datasets(raw)
            if not documents:
                raise ValueError("no Dataset JSON-LD found on Artificial Analysis page")
            envelope = {
                "url": self.source["endpoint"],
                "documents": documents,
            }
            payload = json.dumps(
                envelope, ensure_ascii=False, sort_keys=True, separators=(",", ":")
            ).encode("utf-8")
            result = FetchResult(
                status="success",
                payload=payload,
                fetch_time=context.fetch_time,
                content_hash=sha256_bytes(payload),
                release_id=self.source.get("release_tracking") or "page",
            )
        except Exception as exc:  # pragma: no cover - network integration
            result = FetchResult(
                status="failed",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                error_message=type(exc).__name__,
            )
        self._last_fetch = result
        return result

    def _fetch_api(self, context: FetchContext) -> FetchResult:
        secret_env = str(self.source.get("secret_env", "ARTIFICIAL_ANALYSIS_API_KEY"))
        api_key = os.environ.get(secret_env)
        if not api_key:
            result = FetchResult(
                status="manual_review",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                error_message=f"missing required environment variable: {secret_env}",
            )
            self._last_fetch = result
            return result
        try:
            pages: list[Any] = []
            url = self.source["endpoint"]
            while url:
                request = urllib.request.Request(
                    url,
                    headers={
                        "Accept": "application/json",
                        "User-Agent": context.user_agent,
                        "x-api-key": api_key,
                    },
                    method="GET",
                )
                with urllib.request.urlopen(request, timeout=context.timeout_seconds) as response:
                    page = json.loads(response.read().decode("utf-8"))
                if not isinstance(page, dict):
                    raise ValueError("Artificial Analysis API payload must be an object")
                pages.append(page)
                url = _next_page_url(page)
            envelope = {"pages": pages}
            raw = json.dumps(
                envelope, ensure_ascii=False, sort_keys=True, separators=(",", ":")
            ).encode()
            result = FetchResult(
                status="success",
                payload=raw,
                fetch_time=context.fetch_time,
                content_hash=sha256_bytes(raw),
                release_id=_payload_release(pages),
            )
        except urllib.error.HTTPError as exc:  # pragma: no cover - network integration
            result = FetchResult(
                status="manual_review" if exc.code in {401, 403} else "failed",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                error_message=f"http_{exc.code}",
            )
        except Exception as exc:  # pragma: no cover - network integration
            result = FetchResult(
                status="failed",
                payload=None,
                fetch_time=context.fetch_time,
                content_hash=None,
                error_message=type(exc).__name__,
            )
        self._last_fetch = result
        return result

    def parse(self, raw_payload: bytes | str | dict[str, Any]) -> list[dict[str, Any]]:
        if isinstance(raw_payload, bytes):
            raw_payload = raw_payload.decode("utf-8")
        payload = json.loads(raw_payload) if isinstance(raw_payload, str) else raw_payload
        if not isinstance(payload, dict):
            raise ValueError("Artificial Analysis payload must be an object")
        self._payload = payload
        if "documents" in payload:
            documents = payload.get("documents")
            if not isinstance(documents, list):
                raise ValueError("Artificial Analysis page payload must contain documents[]")
            rows: list[dict[str, Any]] = []
            wanted = self.source.get("jsonld_name")
            for document in documents:
                if not isinstance(document, dict) or document.get("@type") != "Dataset":
                    continue
                if wanted and document.get("name") != wanted:
                    continue
                data = document.get("data")
                if isinstance(data, list):
                    rows.extend(row for row in data if isinstance(row, dict))
            if not rows:
                raise ValueError("selected Artificial Analysis Dataset JSON-LD has no data[]")
            return rows
        pages = payload.get("pages")
        if not isinstance(pages, list):
            raise ValueError("Artificial Analysis API payload must contain pages[]")
        rows = []
        for page in pages:
            if not isinstance(page, dict):
                raise ValueError("Artificial Analysis page must be an object")
            page_rows = page.get("data", page.get("models", []))
            if not isinstance(page_rows, list):
                raise ValueError("Artificial Analysis page must contain data[] or models[]")
            rows.extend(row for row in page_rows if isinstance(row, dict))
        return rows

    def normalize(self, records: list[dict[str, Any]]) -> list[ModelScore]:
        if self._last_fetch is None or self._last_fetch.content_hash is None:
            raise ValueError("normalize requires a successful fetch")
        field = str(self.source.get("evaluation_field", "score"))
        release = self._last_fetch.release_id
        source_hash = self._last_fetch.content_hash
        source_ref = SourceRef(
            source_name=self.source["source_name"],
            source_type=self.source["source_type"],
            endpoint=self.source["endpoint"],
            release_id=release,
            content_hash=source_hash,
        )
        normalized: list[ModelScore] = []
        for record in records:
            model = (
                record.get("model")
                or record.get("name")
                or record.get("model_name")
                or record.get("label")
            )
            if not model:
                raise ValueError("Artificial Analysis record requires model/label")
            if self.source.get("source_type") == "official_page_endpoint":
                raw_score = record.get(field)
                score, score_metadata = _page_score_value(raw_score)
                metric = field
                extra = {
                    "details_url": record.get("detailsUrl"),
                    "jsonld_name": self.source.get("jsonld_name"),
                    "page_data": True,
                    **score_metadata,
                }
            else:
                evaluations = record.get("evaluations")
                value = record.get(field)
                if value is None and isinstance(evaluations, dict):
                    value = evaluations.get(field)
                if isinstance(value, dict):
                    score = value.get("score", value.get("value"))
                    metric = value.get("metric", field)
                else:
                    score = value
                    metric = field
                extra = {
                    "evaluation_field": field,
                    "intelligence_index_version": record.get("intelligence_index_version"),
                    "api_model_id": record.get("id"),
                }
            normalized.append(
                ModelScore(
                    benchmark=self.benchmark_id,
                    release=str(release) if release is not None else None,
                    metric=str(metric),
                    comparison_key=f"{field}:{model}",
                    model=str(model),
                    provider=_optional_string(record.get("provider") or record.get("organization")),
                    score=score,
                    rank=record.get("rank"),
                    timestamp=self._last_fetch.fetch_time,
                    source_hash=source_hash,
                    category=self.benchmark_id,
                    version=str(release) if release is not None else None,
                    source=source_ref,
                    last_verified=self._last_fetch.fetch_time,
                    extra=extra,
                )
            )
        return normalized


def _read_url(url: str, context: FetchContext) -> bytes:
    request = urllib.request.Request(
        url,
        headers={"Accept": "text/html,application/json", "User-Agent": context.user_agent},
        method="GET",
    )
    with urllib.request.urlopen(request, timeout=context.timeout_seconds) as response:
        return response.read()


def _extract_jsonld_datasets(raw: bytes) -> list[dict[str, Any]]:
    documents: list[dict[str, Any]] = []
    text = raw.decode("utf-8", errors="replace")
    for match in _SCRIPT_RE.finditer(text):
        content = html.unescape(match.group(1).strip())
        try:
            value = json.loads(content)
        except json.JSONDecodeError:
            continue
        values = value if isinstance(value, list) else [value]
        documents.extend(
            item for item in values if isinstance(item, dict) and item.get("@type") == "Dataset"
        )
    return documents


def _next_page_url(page: dict[str, Any]) -> str | None:
    pagination = page.get("pagination")
    if not isinstance(pagination, dict):
        return None
    value = pagination.get("next") or pagination.get("next_url")
    return str(value) if value and str(value).startswith("http") else None


def _payload_release(pages: list[Any]) -> str | None:
    for page in pages:
        if not isinstance(page, dict):
            continue
        for key in ("intelligence_index_version", "version", "updated_at"):
            if page.get(key) is not None:
                return str(page[key])
    return None


def _page_score_value(value: Any) -> tuple[Any, dict[str, Any]]:
    if not isinstance(value, list):
        return value, {}
    properties = {
        str(item.get("name")): item.get("value")
        for item in value
        if isinstance(item, dict) and item.get("name")
    }
    if not properties:
        return None, {}
    if "mid" in properties:
        return properties["mid"], {"score_interval": properties}
    if "value" in properties:
        return properties["value"], {"score_properties": properties}
    return None, {"score_properties": properties}


def _optional_string(value: Any) -> str | None:
    return str(value) if value is not None else None
