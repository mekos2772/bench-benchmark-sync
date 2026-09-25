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
            page_models = _extract_page_models(raw, str(self.source.get("evaluation_field") or ""))
            documents = [] if page_models else _extract_jsonld_datasets(raw)
            if not page_models and not documents:
                raise ValueError("no leaderboard models or Dataset JSON-LD found on Artificial Analysis page")
            envelope = {
                "url": self.source["endpoint"],
                "page_models": page_models,
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
        if "page_models" in payload and payload["page_models"]:
            rows = payload["page_models"]
            if not isinstance(rows, list) or not rows or not all(isinstance(row, dict) for row in rows):
                raise ValueError("Artificial Analysis page payload has invalid page_models[]")
            return rows
        if "documents" in payload:
            documents = payload.get("documents")
            if not isinstance(documents, list):
                raise ValueError("Artificial Analysis page payload must contain documents[]")
            rows: list[dict[str, Any]] = []
            wanted = self.source.get("jsonld_name")

            # The site renames versions cosmetically ("v4.0" -> "4.0", mid-name);
            # compare with that "v" stripped so such rewrites don't kill the source.
            def version_normalized(value: str) -> str:
                return re.sub(r"(?<= )v(?=\d)", "", value)

            def matches(actual: Any) -> bool:
                if not wanted:
                    return True
                if actual == wanted:
                    return True
                return (
                    isinstance(actual, str)
                    and isinstance(wanted, str)
                    and version_normalized(actual) == version_normalized(wanted)
                )

            for document in documents:
                if not isinstance(document, dict) or document.get("@type") != "Dataset":
                    continue
                if not matches(document.get("name")):
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
        is_page_models = self._payload is not None and bool(self._payload.get("page_models"))
        page_field = _page_model_field(field) if is_page_models else None
        if is_page_models and not page_field:
            raise ValueError(f"no mapped score field for {self.benchmark_id}")
        for record in records:
            model = (
                record.get("model")
                or record.get("name")
                or record.get("model_name")
                or record.get("label")
            )
            if not model:
                raise ValueError("Artificial Analysis record requires model/label")
            if is_page_models:
                score = _page_model_score(record, page_field)
                metric = field
                creator = record.get("creator")
                extra = {
                    "details_url": f"/models/{record['slug']}" if record.get("slug") else None,
                    "slug": record.get("slug"),
                    "page_model": True,
                    "provider": (
                        creator.get("name")
                        if isinstance(creator, dict)
                        else record.get("modelCreatorName")
                    ),
                }
            elif self.source.get("source_type") == "official_page_endpoint":
                raw_score = _record_value(record, field)
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
                    provider=_optional_string(
                        extra.get("provider")
                        or record.get("provider")
                        or record.get("organization")
                    ),
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


def _extract_page_models(raw: bytes, evaluation_field: str) -> list[dict[str, Any]]:
    """Read the leaderboard embedded in the current Next.js page payload.

    Dataset JSON-LD on these pages no longer carries rows. Each evaluation page
    embeds the scored rows as ``initialModels``; the Intelligence Index page
    embeds the full catalog as ``models``.
    """
    text = raw.decode("utf-8", errors="replace")
    payloads: list[str] = []
    for match in re.finditer(r"self\.__next_f\.push\((.*?)\)\s*</script>", text, re.DOTALL):
        try:
            value = json.loads(match.group(1))
        except json.JSONDecodeError:
            continue
        if isinstance(value, list) and len(value) == 2 and isinstance(value[1], str):
            payloads.append(value[1])
    if not payloads:
        return []
    blob = "\n".join(payloads)
    field = _page_model_field(evaluation_field)
    # ``initialModels`` is the board shown on an evaluation page. The Intelligence
    # Index page has no such array; its scored catalog is the ``models`` array.
    # A later, larger ``models`` array on that page is only names and releases.
    for name in ("initialModels", "models"):
        for rows in _json_arrays_named(blob, name):
            if not rows or not isinstance(rows[0], dict):
                continue
            if field and any(_page_model_score(row, field) is not None for row in rows):
                return [
                    {
                        "name": row.get("name"),
                        "slug": row.get("slug"),
                        field: _page_model_score(row, field),
                        "creator": {"name": row["creator"].get("name")}
                        if isinstance(row.get("creator"), dict)
                        else None,
                        "modelCreatorName": row.get("modelCreatorName"),
                    }
                    for row in rows
                    if isinstance(row, dict) and row.get("name")
                ]
    return []


def _json_arrays_named(blob: str, name: str) -> list[list[Any]]:
    found: list[list[Any]] = []
    key = f'"{name}":'
    start = 0
    while True:
        index = blob.find(key, start)
        if index < 0:
            return found
        position = index + len(key)
        while position < len(blob) and blob[position].isspace():
            position += 1
        if position >= len(blob) or blob[position] != "[":
            start = index + len(key)
            continue
        depth = 0
        in_string = False
        escaped = False
        end = None
        for offset, char in enumerate(blob[position:], position):
            if in_string:
                if escaped:
                    escaped = False
                elif char == "\\":
                    escaped = True
                elif char == '"':
                    in_string = False
                continue
            if char == '"':
                in_string = True
            elif char == "[":
                depth += 1
            elif char == "]":
                depth -= 1
                if depth == 0:
                    end = offset + 1
                    break
        if end is not None:
            try:
                value = json.loads(blob[position:end])
            except json.JSONDecodeError:
                value = None
            if isinstance(value, list):
                found.append(value)
        start = index + len(key)
    return found


def _canonical_evaluation_field(evaluation_field: str) -> str:
    text = re.sub(r"\bv(?=\d)", "", evaluation_field)
    if ":" not in text and not re.fullmatch(r"[A-Za-z][A-Za-z0-9]*", text):
        text = f"{text}: Score"
    return text


def _page_model_field(evaluation_field: str) -> str | None:
    candidates = {
        evaluation_field,
        _canonical_evaluation_field(evaluation_field),
        re.sub(r"\bv(?=\d)", "", evaluation_field),
    }
    configured = {
        "Artificial Analysis Intelligence Index: Score": "intelligenceIndex",
        "Humanity's Last Exam: Score": "hle",
        "Terminal-Bench 4.0: Score": "terminalBench40",
        "GPQA Diamond: Score": "gpqa",
        "SciCode: Score": "scicode",
        "AA-LCR v1.1": "lcr",
        "omniscienceIndex": "omniscience",
        "CritPt: Score": "critpt",
        "gdpvalAaElo": "gdpval",
        "Terminal-Bench Hard: Score": "terminalbenchHard",
        "Terminal-Bench 2.1: Score": "terminalBench21",
        "IFBench: Score": "ifbench",
        "MMMU-Pro: Score": "mmmuPro",
        "Artificial Analysis Openness Index: Score": "opennessIndex",
        "MLCR-AA": "mlcrOverall",
        "MLCR-AA: Score": "mlcrOverall",
        "AA-LCR 1.1: Score": "lcr",
    }
    for candidate in candidates:
        if candidate in configured:
            return configured[candidate]
    if re.fullmatch(r"[A-Za-z][A-Za-z0-9]*", evaluation_field):
        return evaluation_field
    return None


def _page_model_score(record: dict[str, Any], field: str) -> Any:
    value = record.get(field)
    return value if isinstance(value, (int, float)) and not isinstance(value, bool) else None


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


def _record_value(record: dict[str, Any], field: str) -> Any:
    """Read an AA JSON-LD data field.

    Rows may name the metric without the ': Score' suffix, or use a camelCase
    JSON-LD property; fall back to the row's single numeric metric.
    """
    if field in record:
        return record[field]
    base = field.rsplit(":", 1)[0].strip()
    candidates = {candidate.lower() for candidate in (base, f"{base}: Score")}
    for key, value in record.items():
        if str(key).strip().lower() in candidates:
            return value
    metadata = {"label", "name", "model", "detailsurl", "url"}
    numeric = [
        value
        for key, value in record.items()
        if str(key).strip().lower() not in metadata
        and isinstance(value, (int, float))
        and not isinstance(value, bool)
    ]
    return numeric[0] if len(numeric) == 1 else None


def _optional_string(value: Any) -> str | None:
    return str(value) if value is not None else None
