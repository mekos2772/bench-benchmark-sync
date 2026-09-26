import json

import pytest
import requests

from scripts.push_today_feed import (
    build_set_query,
    call_api,
    cloud_document,
    feed_payload,
    fetch_access_token,
    is_missing_collection,
    load_feed,
    main,
    ranking_documents,
)


def _feed(**overrides):
    document = {
        "schemaVersion": 1,
        "dataSource": "today-activity-aggregator",
        "generatedAt": "2026-09-10T14:23:46Z",
        "collectorStatus": "ok",
        "families": ["model", "benchmark"],
        "modelCount": 1,
        "events": [{"eventId": "a", "family": "model", "eventType": "official_model_release"}],
        "models": {"hf:org/model": {"canonicalId": "hf:org/model"}},
    }
    document.update(overrides)
    return document


def _write(tmp_path, document):
    path = tmp_path / "today-events.json"
    path.write_text(json.dumps(document, ensure_ascii=False), encoding="utf-8")
    return path


def test_load_feed_accepts_contract_document(tmp_path):
    path = _write(tmp_path, _feed())
    assert load_feed(path)["events"][0]["eventId"] == "a"


@pytest.mark.parametrize(
    "override",
    [
        {"schemaVersion": 2},
        {"dataSource": "something-else"},
        {"events": {}},
        {"families": ["model"]},
        {"models": []},
    ],
)
def test_load_feed_rejects_broken_documents(tmp_path, override):
    path = _write(tmp_path, _feed(**override))
    with pytest.raises(ValueError):
        load_feed(path)


def test_feed_payload_strips_database_managed_fields():
    payload = feed_payload({"schemaVersion": 1, "_id": "latest", "_openid": "o", "events": []})
    assert payload == {"schemaVersion": 1, "events": []}


def test_cloud_document_records_sync_timestamp():
    document = cloud_document(_feed(_id="latest"), "2026-09-10T15:00:00Z")
    assert document["cloudSyncedAt"] == "2026-09-10T15:00:00Z"
    assert "_id" not in document


def test_build_set_query_targets_document_with_embedded_payload():
    query = build_set_query("todayEvents", "latest", _feed())
    assert query.startswith('db.collection("todayEvents").doc("latest").set({data: {')
    assert '"dataSource":"today-activity-aggregator"' in query
    assert '"canonicalId":"hf:org/model"' in query


def test_is_missing_collection_matches_cloudbase_errors():
    assert is_missing_collection({"errcode": -502005, "errmsg": "collection not exists"})
    assert is_missing_collection({"errcode": 1, "errmsg": "集合不存在"})
    assert not is_missing_collection({"errcode": 0, "errmsg": "ok"})
    assert not is_missing_collection({"errcode": -1, "errmsg": "system error"})


def test_dry_run_validates_without_credentials(tmp_path, capsys):
    path = _write(tmp_path, _feed())
    assert main(["--feed", str(path), "--dry-run"]) == 0
    assert "dry run" in capsys.readouterr().out


def test_rejects_invalid_feed(tmp_path):
    path = _write(tmp_path, _feed(dataSource="legacy"))
    assert main(["--feed", str(path), "--dry-run"]) == 1


def _ranking(**overrides):
    document = {
        "schemaVersion": 3,
        "dataSource": "benchmark-sync-static",
        "exporterVersion": "0.4.0",
        "generatedAt": "2026-09-24T08:25:29Z",
        "workflowRunId": "1",
        "mainCommit": "abc",
        "families": [{"familyId": "livebench", "boards": []}] * 3,
        "rankings": {
            f"board_{index}": {"rankingId": f"board_{index}", "entries": [[f"m{index}", "Model", 1]]}
            for index in range(24)
        },
    }
    document.update(overrides)
    return document


def test_ranking_documents_split_catalog_and_boards():
    items = ranking_documents(_ranking(), "2026-09-24T08:25:48Z")
    assert items[-1][0] == "catalog"  # advertise boards only after they are written
    documents = dict(items)
    assert documents["catalog"]["kind"] == "catalog"
    assert documents["catalog"]["boardCount"] == 24
    assert "rankings" not in documents["catalog"]
    assert documents["board_0"]["kind"] == "board"
    assert documents["board_0"]["boardId"] == "board_0"
    assert documents["board_0"]["entries"][0][0] == "m0"
    assert documents["board_23"]["bundleGeneratedAt"] == "2026-09-24T08:25:29Z"
    assert len(documents) == 25


def test_missing_credentials_fail_loudly(tmp_path, monkeypatch, capsys):
    path = _write(tmp_path, _feed())
    for name in ("WX_APPID", "WX_APP_SECRET", "WX_CLOUD_ENV"):
        monkeypatch.delenv(name, raising=False)
    assert main(["--feed", str(path)]) == 1
    assert "missing credentials" in capsys.readouterr().out


def test_request_errors_do_not_expose_credentials(monkeypatch, capsys):
    def fail(*args, **kwargs):
        raise requests.RequestException("https://api.weixin.qq.com/?access_token=sensitive-token&secret=sensitive-secret")

    monkeypatch.setattr("scripts.push_today_feed.requests.post", fail)
    monkeypatch.setattr("scripts.push_today_feed.requests.get", fail)
    with pytest.raises(RuntimeError) as error:
        fetch_access_token("appid", "sensitive-secret")
    assert "sensitive-secret" not in str(error.value)

    with pytest.raises(RuntimeError) as error:
        call_api("https://api.weixin.qq.com/tcb/databaseupdate", "sensitive-token", {}, attempts=1)
    output = capsys.readouterr().out + str(error.value)
    assert "sensitive-token" not in output
    assert "sensitive-secret" not in output
