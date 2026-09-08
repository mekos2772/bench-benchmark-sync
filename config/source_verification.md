# Source verification record

Verification was performed before collector implementation. The rule is strict: a page or repository README can establish provenance, but it does not establish a structured leaderboard result endpoint by itself.

## SWE-bench — enabled

The official SWE-bench site repository publishes [`data/leaderboards.json`](https://raw.githubusercontent.com/SWE-bench/SWE-bench.github.io/master/data/leaderboards.json). The document contains a `leaderboards` array with separate `Test` and `Verified` boards and result objects containing model/agent names, organization, resolved values, dates, and result folders. The collector maps only the `Test` board to `swebench` and only the `Verified` board to `swebench_verified`. Other boards are not silently merged. The raw file content hash is recorded on every successful fetch.

The source does not provide a rank field for every result. Rank therefore remains `null`; this repository does not sort or invent ranks.

## LiveBench — manual review

The [official LiveBench repository](https://github.com/LiveBench/LiveBench) documents the public leaderboard at [livebench.ai](https://livebench.ai/) and links to Hugging Face datasets for questions, `model_answer`, and `model_judgment`. Those artifact classes are not interchangeable. A stable, official structured file containing leaderboard model scores was not confirmed during this implementation, so the collector is a no-network manual-review stub.

## Artificial Analysis — manual review

The public [Intelligence Index page](https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index) and [methodology page](https://artificialanalysis.ai/methodology/intelligence-benchmarking) are official provenance pages. No stable public official API, JSON, CSV, or raw result file was confirmed. HTML/screenshot parsing is intentionally not implemented.

## LMArena — manual review

The official entry point is [lmarena.ai](https://lmarena.ai/). Overall Arena, Vision Arena, Coding Arena, Hard Prompts, and other categories must remain separate, and battle records are not leaderboard rows. A stable, public, structured official endpoint was not confirmed, so no login-cookie or guessed endpoint is used.

## Terminal-Bench — manual review

The official project is maintained under the [Harbor organization](https://github.com/harbor-framework/terminal-bench). The repository establishes project provenance, but a stable official Terminal-Bench 4.0 leaderboard result file was not confirmed. Documentation alone is not treated as data.

## Artificial Analysis — manual review hierarchy

The official pages confirm the requested hierarchy: Intelligence Index v4.3, Coding, Agents/Agentic, Reasoning, Knowledge-related evaluation views, Individual/AI Model Evaluations, Terminal-Bench v4.0, Humanity's Last Exam, GPQA Diamond, and SciCode. The official page routes are recorded in `config/sources.yaml`.

No stable public official JSON, CSV, raw result file, or documented API endpoint was confirmed for these pages. The registry therefore keeps every Artificial Analysis node at `manual_review`; no HTML, screenshot, embedded page state, or Download data control is treated as a structured source.

## LiveBench — manual review hierarchy

The official LiveBench repository defines the categories `coding`, `data_analysis`, `instruction_following`, `math`, `reasoning`, and `language`, plus an all-question evaluation route. The registry exposes these as independent overall/category nodes. A verifiable stable aggregate leaderboard score file was not confirmed, so every LiveBench leaderboard node remains `manual_review`.

The repository's `model_answer`, `model_judgment`, and question datasets remain separate artifact nodes. They are never merged into leaderboard scores.

## DeepSWE — enabled v1.1 source

The official DeepSWE v1.1 data page is [deepswe.datacurve.ai/data/v1.1](https://deepswe.datacurve.ai/data/v1.1). Its public artifact loader exposes the verified JSON leaderboard at [`leaderboard-live.json`](https://deepswe.datacurve.ai/artifacts/v1.1/leaderboard-live.json) and a separate task catalog at [`tasks.json`](https://deepswe.datacurve.ai/artifacts/v1.1/tasks.json).

`deepswe_v1_1` is enabled because the aggregate JSON is public and re-fetchable. Rows are kept separate by `config`, `harness`, `model`, `provider`, and `reasoning_effort`; the collector preserves missing ranks as `null` and does not calculate a local rank. `deepswe_v1_1_tasks` is metadata only and does not produce ModelScore rows. `software_engineering_agent` is a display-family node, not a separate verified benchmark.


No stable, public, verifiable official result source was confirmed. The registry is disabled rather than pointing at a third-party page or inventing an endpoint.

## Candidate registry

MMLU, MMLU-Pro, and GPQA are present only as `manual_review` registry entries. They have no active collectors and cannot generate records.
