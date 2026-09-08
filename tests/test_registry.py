from pathlib import Path

from collector.registry import CollectorRegistry


def test_registry_has_explicit_statuses():
    registry = CollectorRegistry(Path("config/sources.yaml"))
    assert registry.sources["swebench"]["status"] == "enabled"
    assert registry.sources["webdev_arena"]["status"] == "disabled"
    assert registry.sources["livebench"]["status"] == "manual_review"
    assert registry.enabled_ids() == ["swebench", "swebench_verified"]
