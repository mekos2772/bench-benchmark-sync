from unittest.mock import Mock

import pytest

from collector import runner


@pytest.mark.parametrize("error", ["http_429", "http_503", "http_408", "TimeoutError: timeout", "URLError"])
def test_transient_errors_retry(error):
    assert runner.is_retryable(error)


@pytest.mark.parametrize("error", ["http_403", "http_404", "ValueError: version changed", "JSONDecodeError", None])
def test_permanent_errors_do_not_retry(error):
    assert not runner.is_retryable(error)


def test_retry_is_bounded_and_only_for_transient_errors(monkeypatch):
    run = Mock(side_effect=[
        {"status": "failed", "error_message": "http_503"},
        {"status": "failed", "error_message": "ValueError: schema changed"},
    ])
    monkeypatch.setattr(runner, "run_one", run)
    monkeypatch.setattr(runner.time, "sleep", Mock())
    result = runner.run_with_retry(Mock(), Mock(), False, 3)
    assert result["error_message"] == "ValueError: schema changed"
    assert run.call_count == 2
