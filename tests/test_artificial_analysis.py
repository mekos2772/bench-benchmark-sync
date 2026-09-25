from __future__ import annotations

import json

from collector.artificial_analysis.collector import ArtificialAnalysisCollector
from collector.models import FetchContext
from persistence.hash import sha256_bytes

SOURCE = {
    "benchmark_id": "artificial_analysis_coding",
    "status": "enabled",
    "source_name": "Artificial Analysis Coding API",
    "source_type": "official_api",
    "api_family": "artificial_analysis",
    "endpoint": "https://example.invalid/api/v2/language/models",
    "secret_env": "ARTIFICIAL_ANALYSIS_API_KEY",
    "evaluation_field": "artificial_analysis_coding_index",
}

PAGE_SOURCE = {
    "benchmark_id": "terminal_bench_v4_0",
    "status": "enabled",
    "source_name": "Artificial Analysis Terminal-Bench page",
    "source_type": "official_page_endpoint",
    "endpoint": "https://example.invalid/evaluations/terminalbench-v4-0",
    "evaluation_field": "Terminal-Bench v4.0",
    "jsonld_name": "Terminal-Bench v4.0: Score",
}


def test_missing_api_key_does_not_make_a_request(monkeypatch):
    monkeypatch.delenv("ARTIFICIAL_ANALYSIS_API_KEY", raising=False)
    collector = ArtificialAnalysisCollector(SOURCE)
    result = collector.fetch()
    assert result.status == "manual_review"
    assert result.payload is None
    assert "ARTIFICIAL_ANALYSIS_API_KEY" in (result.error_message or "")


def test_artificial_analysis_normalizes_selected_evaluation_field():
    collector = ArtificialAnalysisCollector(SOURCE)
    raw = json.dumps(
        {
            "pages": [
                {
                    "intelligence_index_version": "v4.3",
                    "data": [
                        {
                            "id": "model-1",
                            "model": "Unit Model",
                            "provider": "Unit Provider",
                            "evaluations": {"artificial_analysis_coding_index": {"score": 72.5}},
                        },
                        {"model": "No Score", "evaluations": {}},
                    ],
                }
            ]
        },
        separators=(",", ":"),
    ).encode()
    collector._last_fetch = type(
        "Fetch",
        (),
        {
            "content_hash": sha256_bytes(raw),
            "fetch_time": "2026-09-08T00:00:00Z",
            "release_id": "v4.3",
        },
    )()
    records = collector.normalize(collector.parse(raw))
    assert len(records) == 2
    assert records[0].score == 72.5
    assert records[0].release == "v4.3"
    assert records[0].extra["evaluation_field"] == "artificial_analysis_coding_index"
    assert records[1].score is None
    assert records[0].rank is None


def test_fetch_paginates_without_logging_api_key(monkeypatch):
    monkeypatch.setenv("ARTIFICIAL_ANALYSIS_API_KEY", "unit-test-key")
    calls: list[tuple[str, dict[str, str]]] = []

    class Response:
        def __init__(self, body: bytes):
            self.body = body

        def __enter__(self):
            return self

        def __exit__(self, *_args):
            return None

        def read(self):
            return self.body

    def fake_urlopen(request, timeout):
        calls.append((request.full_url, dict(request.header_items())))
        if len(calls) == 1:
            body = {"data": [], "pagination": {"next": "https://example.invalid/page-2"}}
        else:
            body = {"data": [], "pagination": {}}
        return Response(json.dumps(body).encode())

    monkeypatch.setattr(
        "collector.artificial_analysis.collector.urllib.request.urlopen", fake_urlopen
    )
    result = ArtificialAnalysisCollector(SOURCE).fetch(
        FetchContext(fetch_time="2026-09-08T00:00:00Z")
    )
    assert result.status == "success"
    assert len(calls) == 2
    assert all(headers.get("X-api-key") == "unit-test-key" for _, headers in calls)
    assert "unit-test-key" not in (result.error_message or "")


def test_page_property_value_score_uses_mid_and_preserves_interval():
    collector = ArtificialAnalysisCollector(
        {
            **PAGE_SOURCE,
            "benchmark_id": "gdpval_aa_elo",
            "evaluation_field": "gdpvalAaElo",
            "jsonld_name": "GDPval-AA v2.1 Leaderboard",
        }
    )
    raw = json.dumps(
        {
            "documents": [
                {
                    "@type": "Dataset",
                    "name": "GDPval-AA v2.1 Leaderboard",
                    "data": [
                        {
                            "label": "Unit Model",
                            "gdpvalAaElo": [
                                {"@type": "PropertyValue", "name": "mid", "value": 1763.64},
                                {"@type": "PropertyValue", "name": "lower", "value": 1744.8},
                                {"@type": "PropertyValue", "name": "upper", "value": 1782.48},
                            ],
                        }
                    ],
                }
            ]
        },
        separators=(",", ":"),
    ).encode()
    collector._last_fetch = type(
        "Fetch",
        (),
        {
            "content_hash": sha256_bytes(raw),
            "fetch_time": "2026-09-08T00:00:00Z",
            "release_id": "page_jsonld",
        },
    )()
    records = collector.normalize(collector.parse(raw))
    assert records[0].score == 1763.64
    assert records[0].extra["score_interval"]["lower"] == 1744.8
    assert records[0].extra["score_interval"]["upper"] == 1782.48


def test_public_page_jsonld_requires_no_api_key(monkeypatch):
    html = (
        b'<html><script type="application/ld+json">'
        b'{"@type":"Dataset","name":"Terminal-Bench v4.0: Score",'
        b'"data":[{"label":"GPT-6 Astra (xhigh)",'
        b'"Terminal-Bench v4.0":0.5959,'
        b'"detailsUrl":"/models/gpt-6-astra-xhigh"}]}'
        b"</script></html>"
    )
    monkeypatch.setattr(
        "collector.artificial_analysis.collector._read_url", lambda url, context: html
    )
    monkeypatch.delenv("ARTIFICIAL_ANALYSIS_API_KEY", raising=False)
    collector = ArtificialAnalysisCollector(PAGE_SOURCE)
    result = collector.fetch(FetchContext(fetch_time="2026-09-08T00:00:00Z"))
    assert result.status == "success"
    records = collector.normalize(collector.parse(result.payload))
    assert records[0].model == "GPT-6 Astra (xhigh)"
    assert records[0].score == 0.5959
    assert records[0].extra["details_url"] == "/models/gpt-6-astra-xhigh"


def test_record_value_matches_score_suffix_and_camelcase_metric():
    from collector.artificial_analysis.collector import _record_value

    assert _record_value({"AA-LCR v1.1": 0.88}, "AA-LCR v1.1") == 0.88
    assert _record_value({"Terminal-Bench v4.0": 0.59}, "Terminal-Bench v4.0: Score") == 0.59
    assert (
        _record_value(
            {"opennessIndex": 88.88, "detailsUrl": "/models/x"},
            "Artificial Analysis Openness Index: Score",
        )
        == 88.88
    )
    assert (
        _record_value({"a": 1, "b": 2, "detailsUrl": "/x"}, "Unknown: Score") is None
    )


def test_current_page_payload_reads_initial_models():
    collector = ArtificialAnalysisCollector(PAGE_SOURCE)
    raw = json.dumps(
        {
            "url": PAGE_SOURCE["endpoint"],
            "page_models": [
                {
                    "slug": "unit-model",
                    "name": "Unit Model",
                    "terminalBench40": 0.595959595959596,
                    "creator": {"name": "Unit Provider"},
                },
                {"slug": "missing-score", "name": "Missing Score", "terminalBench40": None,
                 "contextWindowTokens": 262144},
            ],
            "documents": [],
        },
        separators=(",", ":"),
    ).encode()
    collector._last_fetch = type(
        "Fetch",
        (),
        {
            "content_hash": sha256_bytes(raw),
            "fetch_time": "2026-09-08T00:00:00Z",
            "release_id": "page_jsonld",
        },
    )()
    records = collector.normalize(collector.parse(raw))
    assert [(record.model, record.score) for record in records] == [
        ("Unit Model", 0.595959595959596),
        ("Missing Score", None),
    ]
    assert records[0].provider == "Unit Provider"
    assert records[0].extra["details_url"] == "/models/unit-model"


def test_page_html_extracts_scored_flight_models():
    from collector.artificial_analysis.collector import _extract_page_models

    html = """
    <script>self.__next_f.push([1, "catalog models"])</script>
    <script>self.__next_f.push([1, "{\\"initialModels\\":[{\\"slug\\":\\"unit\\",\\"name\\":\\"Unit\\",\\"hle\\":0.61}]}"])</script>
    """
    rows = _extract_page_models(html.encode(), "Humanity's Last Exam: Score")
    assert len(rows) == 1
    assert rows[0]["slug"] == "unit"
    assert rows[0]["name"] == "Unit"
    assert rows[0]["hle"] == 0.61


def test_page_html_chooses_scored_models_not_larger_catalog():
    from collector.artificial_analysis.collector import _extract_page_models

    flight = (
        '1:["$","div",null,{"models":['
        '{"name":"Leader","intelligenceIndex":57.6},'
        '{"name":"Missing Score","contextWindowTokens":262144}] }]'
    )
    catalog = '2:["$","div",null,{"models":[' + ','.join(
        json.dumps({"name": f"Catalog {i}", "release": "v1"})
        for i in range(20)
    ) + ']}]'
    html = ''.join(
        '<script>self.__next_f.push(' + json.dumps([1, item]) + ')</script>'
        for item in (flight, catalog)
    )
    rows = _extract_page_models(html.encode(), "Artificial Analysis Intelligence Index: Score")
    assert len(rows) == 2
    assert rows[0]["intelligenceIndex"] == 57.6


def test_page_field_mappings_for_versioned_and_short_names():
    from collector.artificial_analysis.collector import _page_model_field

    assert _page_model_field("Terminal-Bench v4.0") == "terminalBench40"
    assert _page_model_field("AA-LCR v1.1") == "lcr"
    assert _page_model_field("MLCR-AA") == "mlcrOverall"


def test_jsonld_name_match_tolerates_version_v_prefix():
    # The site renamed "Terminal-Bench v4.0: Score" to "Terminal-Bench 4.0: Score";
    # matching must survive either direction of that cosmetic rewrite.
    collector = ArtificialAnalysisCollector(
        {
            **PAGE_SOURCE,
            "benchmark_id": "terminal_bench_v4_0",
            "jsonld_name": "Terminal-Bench 4.0: Score",
        }
    )
    def payload_with(name):
        return json.dumps(
            {
                "documents": [
                    {
                        "@type": "Dataset",
                        "name": name,
                        "data": [{"label": "Unit Model", "score": 0.42}],
                    }
                ]
            },
            separators=(",", ":"),
        ).encode()

    for live_name in ("Terminal-Bench 4.0: Score", "Terminal-Bench v4.0: Score"):
        rows = collector.parse(payload_with(live_name))
        assert rows and rows[0]["score"] == 0.42

    # configured with the old v-form against the new name must also match
    old = ArtificialAnalysisCollector(
        {
            **PAGE_SOURCE,
            "benchmark_id": "terminal_bench_v4_0",
            "jsonld_name": "Terminal-Bench v4.0: Score",
        }
    )
    rows = old.parse(payload_with("Terminal-Bench 4.0: Score"))
    assert rows and rows[0]["score"] == 0.42

    # a genuinely different dataset still must not match
    try:
        collector.parse(payload_with("Terminal-Bench Hard: Score"))
        raise AssertionError("expected ValueError for unrelated dataset name")
    except ValueError as exc:
        assert "no data[]" in str(exc)
