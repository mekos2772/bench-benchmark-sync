import json
from datetime import date

import pytest

from scripts.push_today_feed import load_usage_rankings, main
from scripts.usage_rankings import (
    build_document,
    parse_opencode_usage,
    parse_page_date,
    select_complete_day,
)


def _row(model: str, value: float) -> str:
    return f'{{model:"{model}",value:{value}}}'


def _day(day_id: str, segment_id: str, label: str, rows: list[tuple[str, float]]) -> str:
    body = ",".join(_row(model, value) for model, value in rows)
    return f'$R[{day_id}]={{date:"{label}",segments:$R[{segment_id}]=[{body}]}}'


OPENCODE_HTML = (
    "<script>"
    'updatedAt:"2026-09-25T05:55:59.000Z",usage:$R[1]=['
    + ",".join([
        _day("2", "3", "SEP 23", [("alpha", 2.5), ("beta", 1.0), ("Other", 0.5)]),
        _day("7", "8", "SEP 24", [("alpha", 2.0), ("beta", 1.5), ("Other", 0.2)]),
        _day("12", "13", "SEP 25", [("alpha", 0.2), ("beta", 0.1), ("Other", 0.05)]),
    ])
    + "],users:$R[17]=[]</script>"
)


class FakeResponse:
    def __init__(self, payload=None, text="", status_code=200):
        self._payload = payload
        self.text = text
        self.status_code = status_code
        self.encoding = None

    def json(self):
        return self._payload

    def raise_for_status(self):
        if self.status_code >= 400:
            raise RuntimeError(f"HTTP {self.status_code}")


def test_opencode_uses_latest_complete_day_and_trillion_tokens():
    updated_at, days = parse_opencode_usage(OPENCODE_HTML)
    index, selection = select_complete_day(days)

    assert updated_at == "2026-09-25T05:55:59.000Z"
    assert selection == "latest_complete_day"
    assert days[index][0] == "SEP 24"
    assert parse_page_date("SEP 24", updated_at) == date(2026, 9, 24)


def test_page_date_rolls_back_across_year_boundary():
    assert parse_page_date("DEC 31", "2026-01-02T00:00:00.000Z") == date(2025, 12, 31)


def test_build_document_keeps_sources_separate(monkeypatch):
    def fake_get(url, headers=None, params=None, timeout=None):
        if "openrouter.ai" in url:
            return FakeResponse({
                "data": [
                    {"date": "2026-09-24", "model_permaslug": "other", "total_tokens": "9"},
                    {"date": "2026-09-24", "model_permaslug": "acme/beta", "total_tokens": "20"},
                    {"date": "2026-09-24", "model_permaslug": "acme/alpha", "total_tokens": "30"},
                ],
                "meta": {"as_of": "2026-09-25T00:00:00Z"},
            })
        return FakeResponse(text=OPENCODE_HTML)

    monkeypatch.setattr("scripts.usage_rankings.requests.get", fake_get)
    document = build_document("test-key")

    assert document["dataSource"] == "usage-rankings"
    assert document["collectorStatus"] == "ok"
    assert document["openrouter"]["entries"][0] == {
        "model": "acme/alpha", "tokens": 30, "rank": 1,
    }
    assert all(entry["model"] != "other" for entry in document["openrouter"]["entries"])
    opencode = document["opencode"]["entries"]
    assert opencode[0]["model"] == "alpha"
    assert opencode[0]["tokens"] == 2_000_000_000_000
    assert opencode[0]["changePercent"] == -20.0
    assert opencode[1]["changePercent"] == 50.0
    assert all(entry["model"] != "Other" for entry in opencode)


def test_missing_key_does_not_drop_opencode(monkeypatch):
    monkeypatch.setattr(
        "scripts.usage_rankings.requests.get",
        lambda *args, **kwargs: FakeResponse(text=OPENCODE_HTML),
    )
    document = build_document(None)

    assert document["collectorStatus"] == "partial"
    assert document["openrouter"]["status"] == "unavailable"
    assert document["opencode"]["status"] == "ok"


def test_invalid_page_is_reported_without_inventing_rows(monkeypatch):
    monkeypatch.setattr(
        "scripts.usage_rankings.requests.get",
        lambda *args, **kwargs: FakeResponse(text="<html></html>"),
    )
    document = build_document(None)

    assert document["collectorStatus"] == "unavailable"
    assert document["opencode"]["entries"] == []
    assert document["errors"]


def _usage(**overrides):
    document = {
        "schemaVersion": 1,
        "dataSource": "usage-rankings",
        "generatedAt": "2026-09-25T06:00:00Z",
        "collectorStatus": "ok",
        "errors": [],
        "openrouter": {"metric": "daily_tokens", "unit": "tokens", "entries": []},
        "opencode": {"metric": "daily_tokens", "unit": "tokens", "entries": []},
    }
    document.update(overrides)
    return document


def test_usage_push_dry_run_accepts_contract(tmp_path, capsys):
    path = tmp_path / "usage.json"
    path.write_text(json.dumps(_usage()), encoding="utf-8")

    assert main(["--kind", "usage", "--feed", str(path), "--dry-run"]) == 0
    assert "dry run" in capsys.readouterr().out


@pytest.mark.parametrize("override", [
    {"schemaVersion": 2},
    {"dataSource": "other"},
    {"openrouter": {"metric": "requests", "unit": "tokens", "entries": []}},
    {"opencode": []},
])
def test_usage_push_rejects_wrong_contract(tmp_path, override):
    path = tmp_path / "usage.json"
    path.write_text(json.dumps(_usage(**override)), encoding="utf-8")

    with pytest.raises(ValueError):
        load_usage_rankings(path)
