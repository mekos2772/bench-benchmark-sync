from datetime import datetime, timedelta, timezone

from today_activity import (
    TodayConfig,
    _official_records,
    classify_hub_event,
    make_event,
    parse_time,
    stable_hash,
)


def test_hub_classification_requires_new_licensed_model():
    now = datetime(2026, 9, 9, 12, 0, tzinfo=timezone.utc)
    window = now - timedelta(hours=24)
    event = classify_hub_event(
        {
            "id": "org/model",
            "createdAt": "2026-09-09T10:00:00Z",
            "lastModified": "2026-09-09T11:00:00Z",
            "license": "apache-2.0",
            "siblings": [{"rfilename": "model.safetensors"}],
        },
        now,
        window,
        config=TodayConfig(),
    )
    assert event["eventType"] == "hub_open_model_discovered"
    assert event["trustTier"] == "hub"
    assert event["visibility"] == "secondary"
    assert event["modelRef"] == "hub:org/model"
    assert event["modelProfile"]["access"] == "open_weights"


def test_hub_classification_ignores_existing_repository_activity():
    now = datetime(2026, 9, 9, 12, 0, tzinfo=timezone.utc)
    window = now - timedelta(hours=24)
    event = classify_hub_event(
        {
            "id": "org/model",
            "createdAt": "2026-01-01T00:00:00Z",
            "lastModified": "2026-09-09T11:00:00Z",
            "license": "apache-2.0",
            "siblings": [{"rfilename": "model.safetensors"}],
        },
        now,
        window,
        config=TodayConfig(),
    )
    assert event is None


def test_hub_classification_rejects_unlicensed_repository():
    now = datetime(2026, 9, 9, 12, 0, tzinfo=timezone.utc)
    window = now - timedelta(hours=24)
    event = classify_hub_event(
        {
            "id": "org/model",
            "createdAt": "2026-09-09T10:00:00Z",
            "lastModified": "2026-09-09T11:00:00Z",
        },
        now,
        window,
        config=TodayConfig(),
    )
    assert event is None


def test_official_json_ld_records_are_extracted():
    html = (
        '<script type="application/ld+json">'
        '{"@type":"Dataset","modelId":"provider/model-v1",'
        '"updated":"2026-09-09T10:00:00Z"}'
        "</script>"
    )
    records = _official_records(html)
    assert records[0]["modelId"] == "provider/model-v1"

    value = make_event(
        family="technology",
        event_type="commit",
        title="Commit",
        summary="Summary",
        url="https://github.com/org/repo/commit/abc",
        observed_at=parse_time("2026-09-09T11:00:00Z"),
        source="GitHub",
        extra={"eventIdentity": "commit:abc"},
    )
    assert value["eventId"] == stable_hash(["technology", "commit", "commit:abc"])[:32]
