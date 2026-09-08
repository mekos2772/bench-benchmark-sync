# Bench Benchmark Sync

An independent, append-only collection service for public AI benchmark leaderboard data. This repository is deliberately separate from the WeChat Mini Program and does not read, write, or call its CloudBase data, Cloud Functions, or `rankingAdmin` interfaces.

## Scope

```text
official public source -> fetch -> parse -> normalize -> validate -> immutable snapshot -> optional ingestion adapter
```

This project does **not** fuse leaderboards, calculate Meta Scores, calculate confidence, assign cross-benchmark weights, or produce a global ranking. Reserved fields remain `null` until a later, separately reviewed system owns those semantics.

## Source policy

The registry in [`config/sources.yaml`](config/sources.yaml) is the gate. A source is `enabled` only when an official API, JSON, CSV, or raw file is verified. A page, dataset, model answer file, model judgment file, or third-party reproduction is not silently treated as a leaderboard result.

At the current release:

- **Enabled:** `swebench` (official Test board), `swebench_verified` (official Verified board), and `deepswe_v1_1` (official DeepSWE v1.1 JSON leaderboard).
- **Artificial Analysis hierarchy:** Intelligence Index v4.3; Coding; Agents; Reasoning; Knowledge; Individual Evaluations; Terminal-Bench 4.0; Humanity's Last Exam; GPQA Diamond; SciCode. These are registered as separate nodes and remain `manual_review` until a stable public structured result source is confirmed.
- **LiveBench hierarchy:** Overall plus Coding, Math, Reasoning, Data Analysis, Language, and Instruction Following. These are separate `manual_review` nodes. `model_answer`, `model_judgment`, and question data remain separate artifacts and never become leaderboard rows.
- **DeepSWE hierarchy:** `deepswe_v1_1` is enabled from the verified official JSON; `deepswe_v1_1_tasks` is an auxiliary task-catalog node; `software_engineering_agent` is a display-family node and remains `manual_review`.
- **Disabled:** WebDev Arena because no stable, public, verifiable official result source was confirmed.

The complete parent/child structure is in [`config/benchmark_hierarchy.yaml`](config/benchmark_hierarchy.yaml). GitHub Actions reconcile every hierarchy node, while the sync workflow dynamically runs every enabled source.

## Run locally

```bash
python -m pip install -r requirements.txt
python -m collector.runner --benchmark swebench --output-dir artifacts
python -m collector.runner --benchmark swebench_verified --output-dir artifacts
python -m pytest
python -m compileall .
ruff check .
```

The default local store writes raw payloads and snapshots under `artifacts/`; those directories are ignored by Git. Repeated content is reported as `no_change` and does not write a second raw body. A failed run never removes the previous successful snapshot.

## Optional ingestion

`persistence/scf_adapter.py` is an interface adapter, disabled unless `--ingest` is requested and both `INGESTION_URL` and `INGESTION_SECRET` are present in the environment. The adapter sends an HMAC signature in a header and never logs the secret or authorization header. No production endpoint is configured in this repository.

GitHub Actions injects any future production values only through repository or environment secrets. External pull requests do not receive those secrets.

## Data model

Each normalized record contains the benchmark, release, metric, comparison key, model, provider, score, rank, timestamp, source hash, and a structured source reference. Missing values remain `null`. The SQL design in [`schemas/migrations/001_initial.sql`](schemas/migrations/001_initial.sql) is append-only and separates `benchmark_source`, `benchmark_snapshot`, `model_score`, `model_rank`, and `sync_run`.

## Safety boundary

No current Mini Program files are copied into this repository. No current Mini Program business code is changed. No existing production database is accessed. No `rankingAdmin` endpoint is called. No CloudBase credential or data is included.
