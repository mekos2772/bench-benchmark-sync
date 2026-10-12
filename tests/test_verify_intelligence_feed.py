import json
from datetime import datetime, timedelta, timezone
from pathlib import Path

import pytest

from scripts import verify_intelligence_feed as verify


def _event(event_id: str, collected_at: str) -> dict:
    return {
        "event_id": event_id,
        "event_type": "github",
        "title": "Example",
        "summary": "Example summary",
        "sources": [{"name": "Example", "type": "official"}],
        "evidence": ["Example evidence"],
        "collected_at": collected_at,
    }


def _stamp(hours_ago: float) -> str:
    moment = datetime.now(timezone.utc) - timedelta(hours=hours_ago)
    return moment.isoformat(timespec="seconds").replace("+00:00", "Z")


def _write_day(data_dir: Path, day: str, events: list[dict]) -> Path:
    path = data_dir / f"{day}.jsonl"
    path.write_text("\n".join(json.dumps(e, ensure_ascii=False) for e in events), encoding="utf-8")
    return path


def _write_index(data_dir: Path, events=None, **overrides) -> Path:
    document = {
        "schema_version": 1,
        "updated_at": "2026-10-12T17:18:04+08:00",
        "retention_days": 90,
        "events": events if events is not None else [],
    }
    document.update(overrides)
    path = data_dir / "dedup-index.json"
    path.write_text(json.dumps(document, ensure_ascii=False), encoding="utf-8")
    return path


def _index_entry(event_id: str, day: str) -> dict:
    return {
        "event_id": event_id,
        "title_normalized": "example",
        "org": None,
        "model": None,
        "event_type": "github",
        "published_at": day,
        "file": f"data/intelligence/{day}.jsonl",
    }


def _ledger(tmp_path: Path, *, recent_events: int = 2, old_events: int = 1):
    """Build a ledger whose recent day is inside the scan window and old day is not."""
    today = datetime.now(timezone.utc).astimezone(verify.BEIJING).date()
    old_day = (today - timedelta(days=30)).isoformat()
    recent_day = today.isoformat()
    entries = []
    recent = []
    for position in range(recent_events):
        event_id = f"recent-{position}"
        recent.append(_event(event_id, _stamp(1 + position)))
        entries.append(_index_entry(event_id, recent_day))
    old = []
    for position in range(old_events):
        event_id = f"old-{position}"
        old.append(_event(event_id, _stamp(24 * 30)))
        entries.append(_index_entry(event_id, old_day))
    _write_day(tmp_path, recent_day, recent)
    _write_day(tmp_path, old_day, old)
    _write_index(tmp_path, entries)
    return {"recent_day": recent_day, "old_day": old_day, "entries": entries}


def _invoke(monkeypatch, argv: list[str]) -> int:
    monkeypatch.setattr("sys.argv", ["verify_intelligence_feed.py", *argv])
    return verify.main()


def test_reports_missing_index_entry_as_fatal(tmp_path, monkeypatch, capsys):
    ledger = _ledger(tmp_path)
    # Simulate the production outage: the day file ships an id the index lost.
    entries = [e for e in ledger["entries"] if e["event_id"] != "recent-1"]
    _write_index(tmp_path, entries)

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "recent-1" in captured.err
    assert "missing from dedup index" in captured.err


def test_consistent_ledger_passes_and_counts_publishable(tmp_path, monkeypatch, capsys):
    _ledger(tmp_path, recent_events=3)

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path), "--window-hours", "24"])

    captured = capsys.readouterr()
    assert code == 0
    assert "publishable(24h)=3" in captured.out
    assert "ledger is consistent" in captured.out


def test_old_file_drift_is_advisory_not_fatal(tmp_path, monkeypatch, capsys):
    """The publisher skips day files older than its window, so drift there must not block."""
    ledger = _ledger(tmp_path)
    day = ledger["old_day"]
    _write_day(tmp_path, day, [_event("never-indexed", _stamp(24 * 30))])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 0
    assert "never-indexed" in captured.out
    assert "never-indexed" not in captured.err


def test_recent_file_drift_is_fatal(tmp_path, monkeypatch, capsys):
    ledger = _ledger(tmp_path)
    _write_day(tmp_path, ledger["recent_day"], [_event("never-indexed", _stamp(1))])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "never-indexed" in captured.err


def test_pruned_old_day_is_advisory(tmp_path, monkeypatch, capsys):
    """retention_days lets an old day file disappear while the index keeps its entries."""
    ledger = _ledger(tmp_path)
    (tmp_path / f"{ledger['old_day']}.jsonl").unlink()

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 0
    assert "old-0" in captured.out


@pytest.mark.parametrize("field", ["event_type", "title", "summary"])
def test_missing_required_text_field_is_fatal(tmp_path, monkeypatch, capsys, field):
    ledger = _ledger(tmp_path, recent_events=1)
    event = _event("recent-0", _stamp(1))
    event.pop(field)
    _write_day(tmp_path, ledger["recent_day"], [event])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert f"{field} must be a non-empty string" in captured.err


@pytest.mark.parametrize("field", ["sources", "evidence"])
def test_non_array_field_is_fatal(tmp_path, monkeypatch, capsys, field):
    ledger = _ledger(tmp_path, recent_events=1)
    event = _event("recent-0", _stamp(1))
    event[field] = "nope"
    _write_day(tmp_path, ledger["recent_day"], [event])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert f"{field} must be an array" in captured.err


def test_naive_timestamp_is_fatal(tmp_path, monkeypatch, capsys):
    ledger = _ledger(tmp_path, recent_events=1)
    event = _event("recent-0", "2026-10-12T17:18:04")
    _write_day(tmp_path, ledger["recent_day"], [event])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "must carry a timezone" in captured.err


def test_bom_is_fatal_because_publisher_rejects_it(tmp_path, monkeypatch, capsys):
    """Being laxer than the publisher would green-light a run that then fails."""
    _ledger(tmp_path, recent_events=1)
    index_path = tmp_path / "dedup-index.json"
    index_path.write_text("\ufeff" + index_path.read_text(encoding="utf-8"), encoding="utf-8")

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "unreadable" in captured.err


def test_duplicate_index_id_is_advisory(tmp_path, monkeypatch, capsys):
    """The publisher collapses ids through a set, so duplicates do not change output."""
    ledger = _ledger(tmp_path, recent_events=1)
    _write_index(tmp_path, ledger["entries"] + [dict(ledger["entries"][0])])

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 0
    assert "duplicate event_id" in captured.out


@pytest.mark.parametrize("overrides", [{"schema_version": 2}, {"events": "nope"}])
def test_index_shape_errors_are_fatal(tmp_path, monkeypatch, capsys, overrides):
    _ledger(tmp_path)
    _write_index(tmp_path, **overrides)

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    assert code == 1


def test_missing_index_file_is_fatal(tmp_path, monkeypatch, capsys):
    _ledger(tmp_path)
    (tmp_path / "dedup-index.json").unlink()

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "file is missing" in captured.err


def test_glob_matching_nondate_filename_is_fatal(tmp_path, monkeypatch, capsys):
    """'????-??-??.jsonl' matches 'abcd-ef-gh.jsonl', which the publisher fails to parse."""
    _ledger(tmp_path)
    (tmp_path / "abcd-ef-gh.jsonl").write_text("{}", encoding="utf-8")

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 1
    assert "not a valid YYYY-MM-DD date" in captured.err


def test_filename_outside_glob_is_advisory(tmp_path, monkeypatch, capsys):
    _ledger(tmp_path)
    (tmp_path / "notes.jsonl").write_text('{"event_id": "zzz"}', encoding="utf-8")

    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path)])

    captured = capsys.readouterr()
    assert code == 0
    assert "publisher ignores it" in captured.out


def test_missing_data_dir_fails(tmp_path, monkeypatch, capsys):
    code = _invoke(monkeypatch, ["--data-dir", str(tmp_path / "absent")])

    captured = capsys.readouterr()
    assert code == 1
    assert "data directory not found" in captured.err


def test_window_hours_is_validated(tmp_path, monkeypatch):
    _ledger(tmp_path)

    with pytest.raises(SystemExit) as error:
        _invoke(monkeypatch, ["--data-dir", str(tmp_path), "--window-hours", "99"])

    assert error.value.code == 2
