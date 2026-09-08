from __future__ import annotations

import hashlib
import hmac
import json
import os
import urllib.request
from dataclasses import dataclass
from typing import Any


@dataclass(frozen=True)
class SCFAdapter:
    url: str | None
    secret: str | None

    @property
    def enabled(self) -> bool:
        return bool(self.url and self.secret)

    @classmethod
    def from_environment(cls) -> "SCFAdapter":
        return cls(os.environ.get("INGESTION_URL"), os.environ.get("INGESTION_SECRET"))

    def send(self, snapshot: dict[str, Any]) -> None:
        if not self.enabled:
            return
        body = json.dumps(
            {
                "source": snapshot["source"],
                "endpoint": snapshot["source"].get("endpoint"),
                "fetch_time": snapshot["fetch_time"],
                "release": snapshot["source"].get("release_tracking"),
                "commit_sha": snapshot["source"].get("commit_sha"),
                "content_hash": snapshot["content_hash"],
                "schema_version": snapshot["schema_version"],
                "records": snapshot["records"],
            },
            ensure_ascii=False,
            separators=(",", ":"),
        ).encode("utf-8")
        signature = hmac.new(self.secret.encode("utf-8"), body, hashlib.sha256).hexdigest()
        request = urllib.request.Request(
            self.url,
            data=body,
            headers={"Content-Type": "application/json", "X-Benchmark-Signature": signature},
            method="POST",
        )
        with urllib.request.urlopen(
            request, timeout=30
        ) as response:  # pragma: no cover - production integration
            if response.status >= 400:
                raise RuntimeError(f"ingestion returned HTTP {response.status}")
