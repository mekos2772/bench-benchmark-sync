#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const util = require('node:util');

const [jsonFile, commonJsFile, expectedBoardsText, expectedWorkflowRunId, expectedMainCommit] = process.argv.slice(2);

const fail = (message) => {
  console.error(`static export verification failed: ${message}`);
  process.exit(1);
};

if (!jsonFile || !commonJsFile || !expectedBoardsText) {
  fail('usage: verify_static_export.js <json> <commonjs> <expected-boards> [workflow-run-id] [main-commit]');
}

const readJson = (file) => {
  try {
    return JSON.parse(fs.readFileSync(path.resolve(file), 'utf8'));
  } catch (error) {
    fail(`cannot parse JSON ${file}: ${error.message}`);
  }
};

const jsonExport = readJson(jsonFile);
let commonJsExport;
try {
  commonJsExport = require(path.resolve(commonJsFile));
} catch (error) {
  fail(`cannot load CommonJS ${commonJsFile}: ${error.message}`);
}

if (!util.isDeepStrictEqual(jsonExport, commonJsExport)) {
  fail('JSON and CommonJS exports differ');
}
if (jsonExport.schemaVersion !== 3) fail(`schemaVersion must be 3, got ${jsonExport.schemaVersion}`);
if (jsonExport.dataSource !== 'benchmark-sync-static') {
  fail(`dataSource must be benchmark-sync-static, got ${jsonExport.dataSource}`);
}

const expectedBoards = Number(expectedBoardsText);
if (!Number.isInteger(expectedBoards) || expectedBoards < 1) {
  fail(`expected board count must be a positive integer, got ${expectedBoardsText}`);
}
if (!Array.isArray(jsonExport.families) || jsonExport.families.length !== 3) {
  fail(`expected 3 families, got ${jsonExport.families?.length ?? 'missing'}`);
}
const familyIds = jsonExport.families.map((family) => family.familyId);
if (JSON.stringify(familyIds) !== JSON.stringify(['livebench', 'aa', 'deepswe'])) {
  fail(`unexpected family order: ${familyIds.join(', ')}`);
}
if (!jsonExport.rankings || typeof jsonExport.rankings !== 'object') fail('rankings is missing');
const rankingIds = Object.keys(jsonExport.rankings);
if (rankingIds.length !== expectedBoards) {
  fail(`expected ${expectedBoards} rankings, got ${rankingIds.length}`);
}

const indexedBoardIds = [];
for (const family of jsonExport.families) {
  if (!Array.isArray(family.boards) || family.boards.length < 1) {
    fail(`family ${family.familyId} has no boards`);
  }
  for (const board of family.boards) {
    if (!board.id || !jsonExport.rankings[board.id]) fail(`family board is missing ranking: ${board.id}`);
    indexedBoardIds.push(board.id);
  }
}
if (indexedBoardIds.length !== expectedBoards || new Set(indexedBoardIds).size !== expectedBoards) {
  fail('family board index does not match ranking count');
}

for (const [rankingId, ranking] of Object.entries(jsonExport.rankings)) {
  if (ranking.rankingId !== rankingId) fail(`rankingId mismatch for ${rankingId}`);
  if (!Array.isArray(ranking.entries) || ranking.entries.length < 1) fail(`empty entries for ${rankingId}`);
  for (const entry of ranking.entries) {
    if (!Array.isArray(entry) || entry.length !== 5) fail(`invalid entry shape in ${rankingId}`);
    if (typeof entry[0] !== 'string' || typeof entry[1] !== 'string') fail(`invalid entry identity in ${rankingId}`);
    if (entry[2] !== null && typeof entry[2] !== 'number') fail(`invalid entry score in ${rankingId}`);
    if (entry[3] !== null && (!Number.isInteger(entry[3]) || entry[3] < 1)) fail(`invalid entry rank in ${rankingId}`);
    if (entry[4] !== null && typeof entry[4] !== 'string') fail(`invalid entry variant in ${rankingId}`);
  }
}

if (expectedWorkflowRunId !== undefined && expectedWorkflowRunId !== ''
  && jsonExport.workflowRunId !== expectedWorkflowRunId) {
  fail(`workflowRunId mismatch: expected ${expectedWorkflowRunId}, got ${jsonExport.workflowRunId}`);
}
if (expectedMainCommit !== undefined && expectedMainCommit !== ''
  && jsonExport.mainCommit !== expectedMainCommit) {
  fail(`mainCommit mismatch: expected ${expectedMainCommit}, got ${jsonExport.mainCommit}`);
}

console.log(JSON.stringify({
  ok: true,
  schemaVersion: jsonExport.schemaVersion,
  dataSource: jsonExport.dataSource,
  families: familyIds,
  boards: rankingIds.length,
  workflowRunId: jsonExport.workflowRunId ?? null,
  mainCommit: jsonExport.mainCommit ?? null,
}));
