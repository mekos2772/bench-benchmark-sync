# Source verification record

Verification was performed before collector implementation. The rule is strict: a page or repository README can establish provenance, but it does not establish a structured leaderboard result endpoint by itself.

## SWE-bench — enabled

The official SWE-bench site repository publishes [`data/leaderboards.json`](https://raw.githubusercontent.com/SWE-bench/SWE-bench.github.io/master/data/leaderboards.json). The document contains a `leaderboards` array with separate `Test` and `Verified` boards and result objects containing model/agent names, organization, resolved values, dates, and result folders. The collector maps only the `Test` board to `swebench` and only the `Verified` board to `swebench_verified`. Other boards are not silently merged. The raw file content hash is recorded on every successful fetch.

The source does not provide a rank field for every result. Rank therefore remains `null`; this repository does not sort or invent ranks.

## LiveBench — enabled dated assets

The [official LiveBench web repository](https://github.com/LiveBench/livebench.github.io) publishes dated public assets under `public/`, including paired `table_YYYY_MM_DD.csv` and `categories_YYYY_MM_DD.json` files. The collector reads the official GitHub Contents directory to discover the greatest date for which both files exist, then fetches the matching raw files. The currently verified fallback release is `2026-06-25`; it is used only when the directory API returns an anonymous rate-limit response, never to guess a future release.

The eight enabled sources are `livebench_overall`, `livebench_coding`, `livebench_math`, `livebench_reasoning`, `livebench_data_analysis`, `livebench_language`, `livebench_instruction_following`, and `livebench_agentic_coding`. Category selectors map to the taxonomy names `Coding`, `Mathematics`, `Reasoning`, `Data Analysis`, `Language`, `IF`, and `Agentic Coding`. Category scores are the arithmetic mean of available task scores. Overall is the arithmetic mean of available category means. Missing task values remain absent/`null`, and rank is not inferred because the dated CSV does not provide an official rank field.

The envelope records both raw URLs, the directory URL, the release, the discovery mode, and a content hash. The GitHub Contents API currently returned HTTP 403 with zero anonymous remaining quota during verification; this is treated as transport rate limiting, not as evidence that the official raw assets are invalid. If both fallback raw files cannot be fetched, the run fails and the prior successful snapshot is retained.

LiveBench `model_answer`, `model_judgment`, and question datasets remain separate artifact/metadata sources. They are never normalized as leaderboard scores.

## Artificial Analysis — enabled public Dataset JSON-LD pages

Artificial Analysis evaluation pages were verified to expose public schema.org `Dataset` JSON-LD documents. The page collector reads only `application/ld+json` documents whose `@type` is `Dataset`, selects the configured exact `jsonld_name`, and normalizes its `data[]`. It does not parse screenshots, hidden application state, guessed internal APIs, or Download controls. The JSON-LD page is a public page contract, not an independent API; if the contract or exact Dataset name changes, the collector fails closed. No API key is required for these page sources.

The currently enabled page sources are the Intelligence Index v4.3, Terminal-Bench v4.0, Humanity's Last Exam, GPQA Diamond, SciCode, AA Long Context Reasoning v1.1, AA Omniscience Index, CritPt, GDPval-AA Elo, Terminal-Bench Hard, Terminal-Bench v2.1, IFBench, MMMU-Pro, Artificial Analysis Openness Index, and MLCR-AA. Each remains a separate benchmark/release/metric/comparison key. AA self-measured results are not merged with the original benchmark's own leaderboard or with other evaluation pages. GDPval-AA publishes Elo as `PropertyValue[]`; the collector uses the official `mid` value as the scalar score and preserves `lower`/`upper` in `extra.score_interval`.

The following remain `manual_review`: the AA family/display nodes, AA Coding, AA Agents, AA Reasoning, AA Knowledge, Omniscience Accuracy, Omniscience Non-Hallucination Rate, GDPval normalized score, τ² Telecom, τ-Banking, and the multilingual index. They lack an independently verified public Dataset JSON-LD source with an exact, semantically matching result field. In particular, LiveCodeBench is not substituted for an AA Coding composite, and GDPval-AA is not substituted for an AA Agents composite. No Reasoning/Knowledge/Meta Score is synthesized from component evaluations.

## LMArena — manual review

The official entry point is [lmarena.ai](https://lmarena.ai/). Overall Arena, Vision Arena, Coding Arena, Hard Prompts, and other categories must remain separate, and battle records are not leaderboard rows. A stable, public, structured official endpoint was not confirmed, so no login-cookie or guessed endpoint is used.

## Terminal-Bench — manual review

The official project is maintained under the [Harbor organization](https://github.com/harbor-framework/terminal-bench). The repository establishes project provenance, but a stable official Terminal-Bench 4.0 leaderboard result file was not confirmed. Documentation alone is not treated as data.

## Artificial Analysis — hierarchy and source boundaries

The official pages confirm the requested hierarchy: Intelligence Index v4.3, Coding, Agents/Agentic, Reasoning, Knowledge-related evaluation views, Individual/AI Model Evaluations, and the individual evaluation pages. The registry keeps family/display nodes separate from enabled page datasets. Individual evaluations never become an inferred composite.

## LiveBench — hierarchy and artifact boundaries

The official dated assets provide the leaderboard table and taxonomy used by the enabled overall/category sources above. The hierarchy exposes each category independently, including the current `Agentic Coding` taxonomy. The parent `livebench` node remains a family/manual-review node rather than a second aggregate source.

## DeepSWE — enabled v1.1 source

The official DeepSWE v1.1 data page is [deepswe.datacurve.ai/data/v1.1](https://deepswe.datacurve.ai/data/v1.1). Its public artifact loader exposes the verified JSON leaderboard at [`leaderboard-live.json`](https://deepswe.datacurve.ai/artifacts/v1.1/leaderboard-live.json) and a separate task catalog at [`tasks.json`](https://deepswe.datacurve.ai/artifacts/v1.1/tasks.json).

`deepswe_v1_1` is enabled because the aggregate JSON is public and re-fetchable. Rows are kept separate by `config`, `harness`, `model`, `provider`, and `reasoning_effort`; the collector preserves missing ranks as `null` and does not calculate a local rank. `deepswe_v1_1_tasks` is metadata only and does not produce ModelScore rows. `software_engineering_agent` is a display-family node, not a separate verified benchmark.

## Disabled and candidate sources

WebDev Arena is disabled because no stable, public, verifiable official result source was confirmed. MMLU, MMLU-Pro, and GPQA candidate entries remain `manual_review`; they have no active collectors and cannot generate records.
