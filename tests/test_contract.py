from collector.manual_review import ManualReviewCollector
from collector.models import ModelScore, SourceRef


def test_manual_review_never_generates_records():
    source = {
        "benchmark_id": "unit_manual",
        "status": "manual_review",
        "source_name": "unit source",
        "notes": "not verified",
    }
    collector = ManualReviewCollector(source)
    result = collector.fetch()
    assert result.status == "manual_review"
    assert collector.parse(b"ignored") == []
    assert collector.normalize([]) == []


def test_model_score_preserves_nulls_and_reserved_fields():
    record = ModelScore(
        benchmark="unit",
        release="release-1",
        metric="metric",
        comparison_key="comparison",
        model="unit-test-model",
        provider=None,
        score=None,
        rank=None,
        timestamp="2026-01-01T00:00:00Z",
        source_hash="a" * 64,
        source=SourceRef(
            "unit", "official_json", "https://example.invalid/data.json", content_hash="a" * 64
        ),
    ).to_dict()
    assert record["score"] is None
    assert record["rank"] is None
    assert record["benchmark_weight"] is None
    assert record["confidence_score"] is None
    assert record["source_reliability"] is None
