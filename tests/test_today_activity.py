from datetime import datetime, timedelta, timezone

from today_activity import classify_hub_event, make_event, parse_time, stable_hash


def test_hub_classification_uses_file_evidence():
    now = datetime(2026, 9, 9, 12, 0, tzinfo=timezone.utc)
    window = now - timedelta(hours=24)
    event = classify_hub_event(
        {
            "id": "org/model",
            "createdAt": "2026-09-09T10:00:00Z",
            "lastModified": "2026-09-09T11:00:00Z",
            "siblings": [{"rfilename": "model.safetensors"}],
        },
        now,
        window,
    )
    assert event["eventType"] == "model_created"


def test_hub_classification_does_not_guess_missing_files():
    now = datetime(2026, 9, 9, 12, 0, tzinfo=timezone.utc)
    window = now - timedelta(hours=24)
    event = classify_hub_event(
        {
            "id": "org/model",
            "createdAt": "2026-01-01T00:00:00Z",
            "lastModified": "2026-09-09T11:00:00Z",
            "siblings": [],
        },
        now,
        window,
    )
    assert event["eventType"] == "model_updated"


def test_event_ids_are_stable():
    value = make_event(
        family="technology",
        event_type="commit",
        title="Commit",
        summary="Summary",
        url="https://github.com/org/repo/commit/abc",
        observed_at=parse_time("2026-09-09T11:00:00Z"),
        source="GitHub",
    )
    assert (
        value["eventId"]
        == stable_hash(["technology", "commit", value["url"], value["observedAt"]])[:32]
    )
