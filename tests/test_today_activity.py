from datetime import datetime, timedelta, timezone

from today_activity import (
    TodayConfig,
    _hub_base_name,
    _hub_has_quant_suffix,
    _hub_license,
    _hub_readme_intro,
    _hub_technical_report_url,
    build_document,
    catalog_model_entry,
    hub_org_model_entry,
    make_event,
    parse_time,
    stable_hash,
)

NOW = datetime(2026, 9, 10, 12, 0, tzinfo=timezone.utc)
WINDOW = NOW - timedelta(hours=24)
CONFIG = TodayConfig(
    hub_denied_name_tokens=("adapter", "lora", "test", "demo", "checkpoint"),
    openrouter_enabled=False,
)


def _hf_model(**overrides):
    model = {
        "id": "Qwen/Qwen5-8B",
        "createdAt": "2026-09-10T08:00:00.000Z",
        "lastModified": "2026-09-10T09:00:00.000Z",
        "pipeline_tag": "text-generation",
        "tags": ["transformers", "text-generation", "license:apache-2.0"],
        "safetensors": {"total": 8_200_000_000},
        "siblings": [{"rfilename": "model-00001-of-00002.safetensors"}],
        "config": {"text_config": {"max_position_embeddings": 262144}},
        "gated": False,
        "private": False,
    }
    model.update(overrides)
    return model


def test_official_org_release_extracts_parameters():
    entry = hub_org_model_entry(_hf_model(), "Qwen", NOW, WINDOW, CONFIG)
    assert entry is not None
    event, profile = entry
    assert event["eventType"] == "official_model_release"
    assert event["trustTier"] == "official"
    assert event["isOfficial"] is True
    assert event["modelRef"] == "hf:Qwen/Qwen5-8B"
    assert profile["parameterCount"] == 8_200_000_000
    assert profile["license"] == "apache-2.0"
    assert profile["contextWindow"] == 262144
    assert profile["access"] == "open_weights"
    assert profile["modalities"] == {"input": ["text"], "output": ["text"]}
    assert profile["evidence"], "profile evidence must not be empty"


def test_official_org_release_reads_license_from_card_data():
    model = _hf_model(tags=["transformers"], cardData={"license": "mit"})
    assert _hub_license(model) == "mit"
    entry = hub_org_model_entry(model, "Qwen", NOW, WINDOW, CONFIG)
    assert entry is not None
    assert entry[1]["license"] == "mit"


def test_technical_report_url_from_card_data_and_tag():
    assert (
        _hub_technical_report_url({"cardData": {"arxiv": "2412.19437"}})
        == "https://arxiv.org/abs/2412.19437"
    )
    assert (
        _hub_technical_report_url({"tags": ["arxiv:2505.09388v2"]})
        == "https://arxiv.org/abs/2505.09388"
    )
    assert _hub_technical_report_url({"cardData": {"arxiv": "not-an-id"}}) is None
    assert _hub_technical_report_url({"tags": ["arxiv:https://example.com"]}) is None
    assert _hub_technical_report_url({}) is None


def test_profile_carries_technical_report_url_and_description():
    model = _hf_model(
        cardData={"arxiv": "2412.19437"},
        readmeIntro="DeepSeek-V3.1 is a hybrid model that supports both thinking modes.",
    )
    entry = hub_org_model_entry(model, "Qwen", NOW, WINDOW, CONFIG)
    assert entry is not None
    profile = entry[1]
    assert profile["technicalReportUrl"] == "https://arxiv.org/abs/2412.19437"
    assert profile["description"].startswith("DeepSeek-V3.1 is a hybrid")
    fields = {item["field"] for item in profile["evidence"]}
    assert "technicalReportUrl" in fields
    assert "description" in fields
    # absent metadata stays null, never guessed
    plain = hub_org_model_entry(_hf_model(), "Qwen", NOW, WINDOW, CONFIG)
    assert plain[1]["technicalReportUrl"] is None
    assert plain[1]["description"] is None


def test_readme_intro_extracts_first_prose_paragraph():
    readme = "\n".join(
        [
            "---",
            "license: mit",
            "---",
            "# DeepSeek-V3.1",
            '<a href="https://chat.example"><img src="badge.svg"/></a>',
            "## Introduction",
            "DeepSeek-V3.1 is a hybrid model that supports thinking and non-thinking mode.",
            "- **Smarter tool calling**: post-training optimization improves agent tasks.",
            "```python",
            "tokenizer = AutoTokenizer.from_pretrained(model_name)",
            "```",
            "## Model Downloads",
            "| Model | Params |",
        ]
    )
    intro = _hub_readme_intro(readme)
    assert intro.startswith("DeepSeek-V3.1 is a hybrid model")
    assert "Smarter tool calling" in intro
    assert "from_pretrained" not in intro
    assert "| Model" not in intro


def test_readme_intro_handles_missing_or_empty_cards():
    assert _hub_readme_intro(None) is None
    assert _hub_readme_intro("---\nlicense: mit\n---\n# X\n## Only Headers") is None
    assert _hub_readme_intro("") is None


def test_official_org_release_ignores_old_repository():
    model = _hf_model(createdAt="2026-01-01T00:00:00.000Z")
    assert hub_org_model_entry(model, "Qwen", NOW, WINDOW, CONFIG) is None


def test_official_org_release_rejects_denied_name_tokens():
    model = _hf_model(id="Qwen/Qwen5-8B-lora")
    assert hub_org_model_entry(model, "Qwen", NOW, WINDOW, CONFIG) is None


def test_official_org_release_requires_weight_files():
    model = _hf_model(safetensors=None, siblings=[{"rfilename": "README.md"}])
    assert hub_org_model_entry(model, "Qwen", NOW, WINDOW, CONFIG) is None


def test_cross_brand_repackaging_is_not_a_new_release():
    model = _hf_model(id="nvidia/DeepSeek-V4-Pro-0813-nvfp4-DSpark")
    assert hub_org_model_entry(model, "NVIDIA", NOW, WINDOW, CONFIG, org="nvidia") is None
    own = _hf_model(id="nvidia/Nemotron-5-70B")
    assert hub_org_model_entry(own, "NVIDIA", NOW, WINDOW, CONFIG, org="nvidia") is not None


def test_quant_variant_base_name_and_preference():
    assert _hub_base_name("Qwen/Qwen5-8B-FP8") == "qwen5-8b"
    assert _hub_base_name("Qwen/Qwen5-8B-FP8-GGUF") == "qwen5-8b"
    assert _hub_base_name("Qwen/Qwen5-8B") == "qwen5-8b"
    assert _hub_has_quant_suffix("Qwen/Qwen5-8B-FP8") is True
    assert _hub_has_quant_suffix("Qwen/Qwen5-8B") is False


def _catalog_item(**overrides):
    item = {
        "id": "openai/gpt-6-astra",
        "name": "OpenAI: GPT-6 Astra",
        "created": int(NOW.timestamp()) - 3600,
        "context_length": 1050000,
        "architecture": {
            "input_modalities": ["text", "image"],
            "output_modalities": ["text"],
        },
        "pricing": {
            "prompt": "0.00001",
            "completion": "0.00005",
            "input_cache_read": "0.0000025",
        },
        "supported_parameters": ["tools", "reasoning", "temperature"],
        "top_provider": {"max_completion_tokens": 32768},
        "hugging_face_id": None,
    }
    item.update(overrides)
    return item


def test_catalog_entry_extracts_pricing_and_modalities():
    entry = catalog_model_entry(_catalog_item(), "OpenAI", NOW, WINDOW, set())
    assert entry is not None
    event, profile = entry
    assert event["eventType"] == "catalog_model_added"
    assert event["trustTier"] == "catalog"
    assert event["isOfficial"] is False
    assert profile["displayName"] == "GPT-6 Astra"
    assert profile["access"] == "closed_api"
    assert profile["contextWindow"] == 1050000
    assert profile["maxOutputTokens"] == 32768
    assert profile["pricing"]["inputPerMillionTokens"] == 10.0
    assert profile["pricing"]["outputPerMillionTokens"] == 50.0
    assert profile["pricing"]["cachedInputPerMillionTokens"] == 2.5
    assert profile["modalities"] == {"input": ["text", "image"], "output": ["text"]}
    assert profile["capabilities"] == ["工具调用", "推理"]


def test_catalog_entry_skips_variants_and_old_entries():
    variant = _catalog_item(id="openai/gpt-6-astra:free")
    assert catalog_model_entry(variant, "OpenAI", NOW, WINDOW, set()) is None
    alias = _catalog_item(id="~openai/gpt-6-astra")
    assert catalog_model_entry(alias, "OpenAI", NOW, WINDOW, set()) is None
    assert catalog_model_entry(_catalog_item(created=1), "OpenAI", NOW, WINDOW, set()) is None


def test_catalog_entry_deduplicates_against_official_hf_release():
    item = _catalog_item(
        id="deepseek/deepseek-v4.1-flash", hugging_face_id="deepseek-ai/DeepSeek-V4.1-Flash"
    )
    assert (
        catalog_model_entry(item, "DeepSeek", NOW, WINDOW, {"deepseek-ai/deepseek-v4.1-flash"})
        is None
    )
    entry = catalog_model_entry(item, "DeepSeek", NOW, WINDOW, set())
    assert entry is not None
    assert entry[1]["access"] == "open_weights"


def test_build_document_families_and_summary():
    document = build_document(TodayConfig(openrouter_enabled=False), now=NOW, benchmark_events=[])
    assert document["families"] == ["model", "benchmark"]
    assert document["events"] == []
    assert document["eventCount"] == 0
    assert document["sourceSummary"] == {"official": 0, "catalog": 0, "benchmark": 0}


def test_event_id_is_stable_and_ignores_fetch_time():
    value = make_event(
        family="model",
        event_type="official_model_release",
        title="Model",
        summary="Summary",
        url="https://huggingface.co/org/model",
        observed_at=parse_time("2026-09-10T08:00:00Z"),
        source="Hugging Face",
        extra={"eventIdentity": "open-release:org/model"},
    )
    assert (
        value["eventId"]
        == stable_hash(["model", "official_model_release", "open-release:org/model"])[:32]
    )
