#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

const [jsonFile, commonJsFile] = process.argv.slice(2);
const fail = (message) => {
  console.error(`today event verification failed: ${message}`);
  process.exit(1);
};
if (!jsonFile || !commonJsFile) fail('usage: verify_today_events.js <json> <commonjs>');

let document;
try {
  document = JSON.parse(fs.readFileSync(path.resolve(jsonFile), 'utf8'));
} catch (error) {
  fail(`cannot parse JSON: ${error.message}`);
}
let moduleValue;
try {
  moduleValue = require(path.resolve(commonJsFile));
} catch (error) {
  fail(`cannot load CommonJS: ${error.message}`);
}
if (!util.isDeepStrictEqual(document, moduleValue)) fail('JSON and CommonJS differ');
if (document.schemaVersion !== 1) fail(`schemaVersion must be 1, got ${document.schemaVersion}`);
if (document.dataSource !== 'today-activity-aggregator') fail('unexpected dataSource');
if (!Array.isArray(document.families) || JSON.stringify(document.families) !== JSON.stringify(['model', 'benchmark'])) {
  fail('invalid family order');
}
if (!Array.isArray(document.events) || document.eventCount !== document.events.length) fail('eventCount mismatch');
if (!document.models || typeof document.models !== 'object' || Array.isArray(document.models)) fail('models registry missing');
if (document.modelCount !== Object.keys(document.models).length) fail('modelCount mismatch');
if (!['ok', 'partial'].includes(document.collectorStatus)) fail('invalid collectorStatus');

const isHttpUrl = (value) => typeof value === 'string' && /^https?:\/\//.test(value);
const isHash = (value) => typeof value === 'string' && /^[a-f0-9]{64}$/.test(value);
const ids = new Set();
const profileFields = ['parameterCount', 'license', 'technicalReportUrl', 'description', 'contextWindow', 'maxInputTokens', 'maxOutputTokens', 'officialUrl', 'documentationUrl', 'modelCardUrl', 'hubRepo'];
const arxivUrl = /^https:\/\/arxiv\.org\/abs\/\d{4}\.\d{4,5}$/;
for (const [modelRef, profile] of Object.entries(document.models)) {
  if (!profile || typeof profile !== 'object') fail(`invalid model profile: ${modelRef}`);
  if (profile.canonicalId !== modelRef) fail(`model canonicalId mismatch: ${modelRef}`);
  if (typeof profile.modelId !== 'string' || !profile.modelId) fail(`modelId missing: ${modelRef}`);
  if (!['closed_api', 'open_weights', 'gated', 'unknown'].includes(profile.access)) fail(`invalid model access: ${modelRef}`);
  if (profile.parameterCount != null && (!Number.isInteger(profile.parameterCount) || profile.parameterCount < 1)) fail(`invalid parameterCount: ${modelRef}`);
  if (profile.license != null && typeof profile.license !== 'string') fail(`invalid license: ${modelRef}`);
  if (profile.technicalReportUrl != null && !arxivUrl.test(profile.technicalReportUrl)) fail(`invalid technicalReportUrl: ${modelRef}`);
  if (profile.description != null && (typeof profile.description !== 'string' || profile.description.length > 700)) fail(`invalid description: ${modelRef}`);
  if (!profile.modalities || !Array.isArray(profile.modalities.input) || !Array.isArray(profile.modalities.output)) fail(`invalid model modalities: ${modelRef}`);
  if (!profile.pricing || !Object.prototype.hasOwnProperty.call(profile.pricing, 'inputPerMillionTokens')) fail(`invalid model pricing: ${modelRef}`);
  if (!Array.isArray(profile.evidence)) fail(`model evidence missing: ${modelRef}`);
  const evidenceFields = new Set(profile.evidence.map((item) => item && item.field));
  for (const field of profileFields) {
    if (profile[field] != null && profile[field] !== '' && !evidenceFields.has(field)) fail(`missing evidence for ${modelRef}.${field}`);
  }
  for (const evidence of profile.evidence) {
    if (!evidence || typeof evidence.field !== 'string' || !isHash(evidence.contentHash)) fail(`invalid model evidence: ${modelRef}`);
  }
}

for (const event of document.events) {
  if (!event.eventId || ids.has(event.eventId)) fail(`duplicate eventId: ${event.eventId}`);
  ids.add(event.eventId);
  if (!document.families.includes(event.family)) fail(`invalid event family: ${event.family}`);
  if (typeof event.title !== 'string' || !event.title) fail('event title missing');
  if (!isHttpUrl(event.url)) fail('event URL missing');
  if (!isHash(event.provenance?.contentHash)) fail('event provenance hash missing');
  if (!['official', 'catalog', 'derived', 'unverified'].includes(event.trustTier)) fail(`invalid trustTier: ${event.eventId}`);
  if (!['P0', 'P1', 'P2', 'P3'].includes(event.priority)) fail(`invalid priority: ${event.eventId}`);
  if (!['primary', 'secondary', 'hidden'].includes(event.visibility)) fail(`invalid visibility: ${event.eventId}`);
  if (typeof event.isOfficial !== 'boolean') fail(`isOfficial missing: ${event.eventId}`);
  if (event.modelRef != null && !Object.prototype.hasOwnProperty.call(document.models, event.modelRef)) fail(`unknown modelRef: ${event.modelRef}`);
  if (event.eventType === 'official_model_release') {
    if (event.family !== 'model' || event.isOfficial !== true || event.trustTier !== 'official') fail(`official model event metadata invalid: ${event.eventId}`);
    if (!event.modelRef || !event.evidence?.length || !isHttpUrl(event.url)) fail(`official model event evidence missing: ${event.eventId}`);
    const profile = document.models[event.modelRef];
    if (!profile.evidence?.length) fail(`official model profile evidence missing: ${event.modelRef}`);
  }
  if (event.eventType === 'catalog_model_added') {
    if (event.family !== 'model' || event.isOfficial !== false || event.trustTier !== 'catalog') fail(`catalog event metadata invalid: ${event.eventId}`);
    if (!event.modelRef || !event.evidence?.length || !isHttpUrl(event.url)) fail(`catalog event evidence missing: ${event.eventId}`);
  }
  if (event.family === 'benchmark' && !event.benchmarkId) fail(`benchmarkId missing: ${event.eventId}`);
  if (event.eventType === 'derived_rank_changed' && event.rankSource !== 'derived') fail(`derived rank source missing: ${event.eventId}`);
}
console.log(JSON.stringify({ ok: true, events: document.events.length, models: document.modelCount, status: document.collectorStatus, generatedAt: document.generatedAt }));
