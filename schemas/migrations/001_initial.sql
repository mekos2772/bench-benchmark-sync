-- Append-only logical schema for the ingestion service.
CREATE TABLE benchmark_source (
  id BIGINT PRIMARY KEY,
  benchmark_id VARCHAR(128) NOT NULL,
  source_name VARCHAR(255) NOT NULL,
  organization VARCHAR(255) NOT NULL,
  source_type VARCHAR(64) NOT NULL,
  official_url TEXT,
  endpoint TEXT,
  update_frequency VARCHAR(64),
  requires_auth BOOLEAN,
  evidence_url TEXT,
  release_tracking TEXT,
  hash_required BOOLEAN NOT NULL,
  status VARCHAR(32) NOT NULL CHECK (status IN ('enabled','manual_review','disabled')),
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NOT NULL
);
CREATE UNIQUE INDEX uq_benchmark_source_identity ON benchmark_source(benchmark_id, source_name, endpoint);

CREATE TABLE benchmark_snapshot (
  id BIGINT PRIMARY KEY,
  benchmark_source_id BIGINT NOT NULL REFERENCES benchmark_source(id),
  benchmark_id VARCHAR(128) NOT NULL,
  status VARCHAR(32) NOT NULL CHECK (status IN ('success','no_change','partial','failed','manual_review')),
  fetch_time TIMESTAMP NOT NULL,
  release_version VARCHAR(255),
  commit_sha VARCHAR(128),
  content_hash CHAR(64) NOT NULL,
  schema_version VARCHAR(32) NOT NULL,
  raw_object_key TEXT,
  created_at TIMESTAMP NOT NULL,
  UNIQUE (benchmark_id, content_hash)
);
CREATE INDEX idx_snapshot_benchmark_fetch ON benchmark_snapshot(benchmark_id, fetch_time DESC);

CREATE TABLE model_score (
  id BIGINT PRIMARY KEY,
  snapshot_id BIGINT NOT NULL REFERENCES benchmark_snapshot(id),
  benchmark_id VARCHAR(128) NOT NULL,
  release_version VARCHAR(255),
  metric VARCHAR(128) NOT NULL,
  comparison_key VARCHAR(255) NOT NULL,
  model_name VARCHAR(512) NOT NULL,
  provider VARCHAR(255),
  category VARCHAR(255),
  score DECIMAL(20,8),
  rank INTEGER,
  observed_at TIMESTAMP,
  source_hash CHAR(64),
  benchmark_weight DECIMAL(20,8),
  confidence_score DECIMAL(20,8),
  source_reliability DECIMAL(20,8),
  last_verified TIMESTAMP,
  UNIQUE (benchmark_id, release_version, metric, comparison_key, model_name, provider, observed_at, source_hash)
);
CREATE INDEX idx_model_score_lookup ON model_score(benchmark_id, release_version, metric, comparison_key, rank);

CREATE TABLE model_rank (
  id BIGINT PRIMARY KEY,
  snapshot_id BIGINT NOT NULL REFERENCES benchmark_snapshot(id),
  benchmark_id VARCHAR(128) NOT NULL,
  release_version VARCHAR(255),
  metric VARCHAR(128) NOT NULL,
  comparison_key VARCHAR(255) NOT NULL,
  model_name VARCHAR(512) NOT NULL,
  provider VARCHAR(255),
  rank INTEGER,
  score DECIMAL(20,8),
  observed_at TIMESTAMP,
  UNIQUE (benchmark_id, release_version, metric, comparison_key, model_name, provider, observed_at)
);
CREATE INDEX idx_model_rank_lookup ON model_rank(benchmark_id, release_version, metric, comparison_key, rank);

CREATE TABLE sync_run (
  id BIGINT PRIMARY KEY,
  run_id VARCHAR(255) NOT NULL UNIQUE,
  benchmark_id VARCHAR(128) NOT NULL,
  status VARCHAR(32) NOT NULL CHECK (status IN ('success','no_change','partial','failed','manual_review')),
  started_at TIMESTAMP NOT NULL,
  finished_at TIMESTAMP,
  error_message TEXT,
  last_successful_snapshot_id BIGINT REFERENCES benchmark_snapshot(id)
);
CREATE INDEX idx_sync_run_benchmark_started ON sync_run(benchmark_id, started_at DESC);

-- Retention is append-only by default. A deployment may archive raw objects to COS,
-- but must retain snapshot metadata and hashes for auditability.
