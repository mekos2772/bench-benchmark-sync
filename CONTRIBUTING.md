# Contributing

This repository is intentionally conservative. A collector may be enabled only when its source is an official, public, structured API or file that can be cited and re-fetched without login cookies.

## Rules

- Do not commit secrets, tokens, cookies, local credential files, raw payloads, or production data.
- Do not add simulated leaderboard rows to fixtures or tests.
- Do not infer an endpoint from a web page, search result, or third-party copy.
- Preserve missing scores and ranks as `null`.
- Keep benchmark, release, metric, harness, and comparison keys isolated.
- Add source-verification evidence before changing a registry entry to `enabled`.
- Run `python -m pytest`, `python -m compileall .`, `ruff check .`, and a credential scan before opening a pull request.

Production ingestion is intentionally disabled by default. Changes that would call an ingestion endpoint or alter retention policy require review by the repository owner.
