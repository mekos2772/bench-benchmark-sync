# Data dictionary and retention policy

## Runtime source record

A fetch run records the source identity and execution facts separately from the registry:

- `source_name`: human-readable official source name.
- `source_type`: `official_api`, `official_json`, `official_csv`, `official_github_raw`, `official_page_endpoint`, `dataset`, `page_collector`, or `html_parser`.
- `endpoint`: the exact public endpoint used, or `null` when the source is not enabled.
- `fetch_time`: UTC time at which the request began.
- `status`: one of `success`, `no_change`, `partial`, `failed`, or `manual_review`.
- `error_message`: sanitized error class/message; credentials and response headers are never included.
- `release_id` / `commit_sha` / `content_hash`: source version evidence. At least a release/version or content hash is required for an enabled source.

## Tables

### `benchmark_source`

Stores the verified registry identity and provenance. `benchmark_id` identifies the benchmark family; `source_name` and `endpoint` identify the specific official source. `status` gates whether a collector may make a request. The identity index is unique on `(benchmark_id, source_name, endpoint)`.

### `benchmark_snapshot`

Stores one immutable fetch result. `content_hash` is the SHA-256 of the exact raw payload and is unique with `benchmark_id`. `raw_object_key` points to durable object storage in a production ingestion deployment (for example, COS); the local adapter only provides a development filesystem store. `release_version` and `commit_sha` remain independent so a release cannot be confused with a repository revision.

A repeated content hash creates a `no_change` sync event without writing another raw body. A failed or partial run never deletes or replaces the most recent successful snapshot.

### `model_score`

Stores normalized observations with `benchmark_id`, `release_version`, `metric`, and `comparison_key` kept explicit. `score` and `rank` are nullable and are never filled by interpolation or local sorting. The uniqueness key is `(benchmark_id, release_version, metric, comparison_key, model_name, provider, observed_at, source_hash)`.

### `model_rank`

Stores rank observations only when a source supplies a rank. It is kept separate from `model_score` so a missing rank is not manufactured from a score. The uniqueness key is `(benchmark_id, release_version, metric, comparison_key, model_name, provider, observed_at)`.

### `sync_run`

Stores orchestration history, sanitized failure information, and a pointer to the last successful snapshot. `run_id` is unique. It is the audit record for a retry, `no_change`, `partial`, or `manual_review` result.

## Status definitions

- `success`: source fetched, parsed, normalized, and validated; a new immutable snapshot was written.
- `no_change`: source fetched and its content hash already exists; no duplicate raw payload was written.
- `partial`: some source partitions were accepted but at least one required partition failed validation; the prior successful snapshot remains authoritative.
- `failed`: the fetch, parse, normalize, or validation step failed; no successful snapshot is replaced.
- `manual_review`: source provenance or structured result data is not verified; the collector performs no network request and emits zero records.

## Retention

Production ingestion is append-only: raw payloads are stored in durable object storage, while snapshot metadata, hashes, normalized scores, ranks, and sync runs are retained for audit. A deployment may archive old raw objects according to a documented retention policy, but it must preserve snapshot hashes and source provenance. GitHub Actions Artifacts in these workflows are short-lived run diagnostics only, never the formal historical database.

The current repository performs no production write and does not configure a COS bucket, SCF secret, database credential, or ingestion URL.
