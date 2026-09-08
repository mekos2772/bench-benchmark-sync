from __future__ import annotations

from typing import Any


def preserve_null(value: Any) -> Any:
    """Return values unchanged; notably, None is never converted to zero."""
    return value
