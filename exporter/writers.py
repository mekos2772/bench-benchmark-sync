from __future__ import annotations

import json
from pathlib import Path
from typing import Any


def write_static_export(export: dict[str, Any], json_path: Path, js_path: Path) -> None:
    json_path.parent.mkdir(parents=True, exist_ok=True)
    js_path.parent.mkdir(parents=True, exist_ok=True)
    serialized = json.dumps(export, ensure_ascii=False, indent=2) + '\n'
    json_path.write_text(serialized, encoding='utf-8')
    js_path.write_text(f'module.exports = {serialized}', encoding='utf-8')
