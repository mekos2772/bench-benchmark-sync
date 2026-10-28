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

- **Enabled SWE sources:** `swebench` (official Test board), `swebench_verified` (official Verified board), and `deepswe_v1_1` (official DeepSWE v1.1 live JSON leaderboard).
- **Enabled LiveBench 2.0 sources:** Eight boards retain their existing IDs. Release discovery reads the compact release list from the official livebench.ai app bundle, then fetches paired `data/<YYYYMMDD>/table.csv` and `categories.json` assets. Scores stay isolated by release and suite; Overall averages available suite means. The `livebench_long_horizon` ID now selects the official `Long Agentic` suite. No stale release fallback is configured for this layout.
- **Enabled Artificial Analysis public-page sources:** `artificial_analysis_intelligence_index_v5_0`, `terminal_bench_v4_0`, `humanitys_last_exam`, `gpqa_diamond`, `scicode`, `aa_lcr`, `aa_omniscience_index_v1_1`, `critpt`, `gdpval_aa_elo`, `terminalbench_hard`, `terminalbench_v2_1`, `ifbench`, `mmmu_pro`, `artificial_analysis_openness_index`, `mlcr_overall`, `aa_briefcase_v1_1`, `automationbench_aa`, `frontiercode_v2_0`, `gdp_pdf`, `hle_diamond`, `critpt_v2_hard`, and `terminal_bench_science_v0_1`. These read the official public Next.js `initialModels` score payload (with Dataset JSON-LD compatibility) and do not require an API key. A page contract change fails closed; screenshots, hidden endpoints, and Download controls are not used.
- **Artificial Analysis still under `manual_review`:** the family/display nodes, Coding, Agents, Reasoning, Knowledge, and fields without an independently verified Dataset JSON-LD document. No other benchmark page is substituted for an AA composite, and no cross-evaluation average is generated.
- **DeepSWE hierarchy:** `deepswe_v1_1` is enabled from the verified official JSON; `deepswe_v1_1_tasks` is an auxiliary task-catalog node; `software_engineering_agent` is a display-family node and remains `manual_review`.
- **Separate artifacts:** LiveBench `model_answer`, `model_judgment`, and question datasets remain metadata/artifact sources and never become leaderboard rows.
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

## Mini Program static export

`exporter/` turns successful snapshots into the read-only static bundle consumed by the Mini Program:

```bash
python -m exporter.cli --snapshot-root artifacts --check
python -m exporter.cli --snapshot-root artifacts --output-dir static-export
```

The export groups boards into three families — `livebench` (Overall + 7 categories), `aa` (Intelligence Index + 21 individual evaluations), and `deepswe` (v1.1) — and records a per-board `unit` (`ratio`, `score`, or `raw`) so the client formats percentages, 0–100 indices, and Elo-style values correctly.

The collector registry currently has 33 enabled sources. `swebench` and `swebench_verified` are collector-only sources and are intentionally excluded from the explicit 31-board Mini Program export. The exporter fails closed unless all 31 mapped boards have complete successful snapshots. A board whose source does not expose task-level scores uses `taskCount: null`; zero is not used to mean unknown.

It fails closed on missing, failed, or partial snapshots, empty boards, cross-board records, and scores that are not rounded to two decimals. It writes only local JSON/CommonJS files: no CloudBase write, no `rankingAdmin` call, and no Mini Program repository push.

## GitHub Actions static export

The scheduled workflow collects every enabled source with bounded matrix concurrency. A scheduled run, or a manual run with an empty `benchmark` input, downloads the collector snapshots and exports all 31 mapped boards. The exporter receives the GitHub run ID and commit SHA as provenance, then the written JSON/CommonJS files are reloaded and compared by `scripts/verify_static_export.js`. After validation, the same files are published to `generated/static-export/` in the benchmark-sync `benchmark-data` branch and uploaded as a read-only artifact.

A manual run with a specific `benchmark` input is a single-source diagnostic run only; it intentionally skips the static export job so an incomplete snapshot set cannot produce a partial Mini Program bundle. The workflow only writes its own generated directory; the private Mini Program repository pulls that public static path on its own schedule and updates only its bundle file. It does not call CloudBase, call `rankingAdmin`, upload an experience version, or publish.

## Today activity feed

The Mini Program Today page is intentionally separate from the 31-board static ranking bundle. A dedicated `today-activity` workflow runs every five minutes on an Ubuntu GitHub Actions runner and publishes a verified feed to `generated/static-events/today-events.json` plus a CommonJS copy.

The feed covers exactly two families, and every event carries trust metadata (`trustTier`, `priority`, `visibility`, `isOfficial`, `sourceType`, `sourceOwner`) plus evidence records:

- `model`: new model additions with concrete parameters, from two channels:
  - **Open weights** (`official_model_release`): new repositories under vendor official Hugging Face organizations (`Qwen`, `deepseek-ai`, `meta-llama`, `mistralai`, `google`, `openai`, `moonshotai`, `zai-org`, `MiniMaxAI`, and others configured in `config/today_sources.yaml`). Parameter count comes from the repository's `safetensors` metadata, license from the model card, context window from the model config, modalities from the pipeline tag. Repackagings of another vendor's model (`nvidia/DeepSeek-...`), quantization-only variants (`-FP8`, `-GGUF`, `-MLX`, `-AWQ`, ...), adapters, checkpoints and test repositories are excluded.
  - **Closed / API models** (`catalog_model_added`): models newly listed in the public OpenRouter catalog with context window, per-million-token pricing, input/output modalities and capability flags. Entries already covered by an official open-weight release are dropped, as are variant IDs (`:free`, `:batch`, `~` aliases).
- `benchmark`: changes detected by comparing successful observations from the official LiveBench, Artificial Analysis, and DeepSWE collectors. Missing official rank remains missing; a position derived from score is labeled `derived_rank_changed` with `rankSource: derived`.

### Model profiles

Events reference models by `modelRef`; the feed carries a top-level `models` map with structured profiles (provider, modelId, version, release/access status, modalities, capabilities, parameter count, license, context window, max output tokens, pricing, availability, official URLs, and per-field evidence). Fields the source does not provide stay `null` or empty arrays — nothing is guessed.

### Collection guarantees

The collector filters events to the recent window, deduplicates by stable event ID (fetch time is not part of the ID), validates the JSON/CommonJS pair with `scripts/verify_today_events.js`, and preserves the last successful generated file if a source fails. The Mini Program never requests Hugging Face, OpenRouter, GitHub, or this repository's raw files directly.

### Distribution to the Mini Program

WeChat only allows ICP-filed HTTPS domains in `wx.request`, so the GitHub-hosted feed cannot be fetched on a real device. The workflow therefore also pushes the verified feed into the WeChat CloudBase database, and the Mini Program reads it back with `wx.cloud.callFunction` (which is exempt from the domain whitelist):

- `scripts/push_today_feed.py` validates the feed contract and writes the whole document to `todayEvents/latest` through the CloudBase HTTP API (`cgi-bin/stable_token` + `tcb/databaseupdate` with `doc("latest").set(...)`); the collection is created on demand, transient failures are retried, and `cloudSyncedAt` records the push time so readers can distinguish a quiet window from a broken pipeline.
- Credentials come from repository secrets `WX_APPID`, `WX_APP_SECRET`, and `WX_CLOUD_ENV`; they are never printed, committed, or written to artifacts. When the secrets are absent the push step logs a warning and is skipped, so collection and publishing keep working.
- The push runs after the feed is committed, so a CloudBase outage cannot corrupt the published feed; a failed push fails the step visibly.

The real-time target is minute-level refresh through the workflow schedule, not second-level delivery. The page shows the generated time, stale warning, partial-source warning, source labels, and an explicit error state instead of inventing zero changes.


`persistence/scf_adapter.py` is an interface adapter, disabled unless `--ingest` is requested and both `INGESTION_URL` and `INGESTION_SECRET` are present in the environment. The adapter sends an HMAC signature in a header and never logs the secret or authorization header. No production endpoint is configured in this repository.

GitHub Actions injects any future production values only through repository or environment secrets. External pull requests do not receive those secrets.

## Data model

Each normalized record contains the benchmark, release, metric, comparison key, model, provider, score, rank, timestamp, source hash, and a structured source reference. Missing values remain `null`. The SQL design in [`schemas/migrations/001_initial.sql`](schemas/migrations/001_initial.sql) is append-only and separates `benchmark_source`, `benchmark_snapshot`, `model_score`, `model_rank`, and `sync_run`.

## Safety boundary

No current Mini Program files are copied into this repository. No current Mini Program business code is changed. No existing production database is accessed. No `rankingAdmin` endpoint is called. The only CloudBase write is the Today feed document (`todayEvents/latest`); no CloudBase ranking data or ranking credential is read or stored here, and the AppSecret lives only in repository secrets.

## Artificial Analysis v5.0 migration

The current AA overall board is `aa_intelligence_index_v5_0`, with release `v5.0`. The previous v4.3 registry/hierarchy entries remain disabled for auditability; new v5.0 scores are never published under their IDs. AA-Omniscience v1.1 similarly has a separate versioned ID. Existing independent older evaluations remain available as their own boards.

The nine v5.0 components are AA-Briefcase v1.1, AutomationBench-AA, Terminal-Bench 4.0, FrontierCode 2.0, AA-Omniscience v1.1, GDP.pdf, HLE-Diamond, CritPt v2 (Hard Subset), and Terminal-Bench-Science 0.1. See [verified public source fields](docs/aa-v5-sources.md). Versioned pages must match their configured official heading; a later methodology change fails explicitly instead of silently mixing releases.

Public evaluation pages currently embed selected model subsets, not all leaderboard rows. Each page-derived record and exported board includes `coverage` with `collectedModels`, `totalModels`, and `isComplete` (null if the total is not published). For example, the total-index page exposed 28 of 77 models when verified. The collector does not claim full coverage or call undocumented endpoints.
