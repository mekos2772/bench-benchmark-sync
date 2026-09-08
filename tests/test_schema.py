import json
from pathlib import Path

import jsonschema
import yaml


def test_registry_entries_match_schema():
    root = Path(__file__).resolve().parents[1]
    schema = json.loads((root / "schemas/source.schema.json").read_text(encoding="utf-8"))
    sources = yaml.safe_load((root / "config/sources.yaml").read_text(encoding="utf-8"))["sources"]
    for source in sources:
        jsonschema.validate(source, schema)
