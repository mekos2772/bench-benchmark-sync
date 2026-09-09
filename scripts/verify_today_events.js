#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

const [jsonFile, commonJsFile] = process.argv.slice(2);
const fail = (message) => { console.error(`today event verification failed: ${message}`); process.exit(1); };
if (!jsonFile || !commonJsFile) fail('usage: verify_today_events.js <json> <commonjs>');

let document;
try { document = JSON.parse(fs.readFileSync(path.resolve(jsonFile), 'utf8')); } catch (error) { fail(`cannot parse JSON: ${error.message}`); }
let moduleValue;
try { moduleValue = require(path.resolve(commonJsFile)); } catch (error) { fail(`cannot load CommonJS: ${error.message}`); }
if (!util.isDeepStrictEqual(document, moduleValue)) fail('JSON and CommonJS differ');
if (document.schemaVersion !== 1) fail(`schemaVersion must be 1, got ${document.schemaVersion}`);
if (document.dataSource !== 'today-activity-aggregator') fail('unexpected dataSource');
if (!Array.isArray(document.families) || JSON.stringify(document.families) !== JSON.stringify(['model', 'technology', 'benchmark'])) fail('invalid family order');
if (!Array.isArray(document.events) || document.eventCount !== document.events.length) fail('eventCount mismatch');
if (!['ok', 'partial'].includes(document.collectorStatus)) fail('invalid collectorStatus');
const ids = new Set();
for (const event of document.events) {
  if (!event.eventId || ids.has(event.eventId)) fail(`duplicate eventId: ${event.eventId}`);
  ids.add(event.eventId);
  if (!document.families.includes(event.family)) fail(`invalid event family: ${event.family}`);
  if (typeof event.title !== 'string' || !event.title) fail('event title missing');
  if (typeof event.url !== 'string' || !/^https?:\/\//.test(event.url)) fail('event URL missing');
  if (!event.provenance || !/^[a-f0-9]{64}$/.test(event.provenance.contentHash || '')) fail('event provenance hash missing');
}
console.log(JSON.stringify({ ok: true, events: document.events.length, status: document.collectorStatus, generatedAt: document.generatedAt }));
