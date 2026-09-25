module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-25T15:16:18Z",
  "windowStart": "2026-09-24T15:16:18Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {},
  "modelCount": 0,
  "sourceSummary": {
    "official": 0,
    "catalog": 0,
    "benchmark": 1
  },
  "events": [
    {
      "eventId": "67c2e30b49b6f59353d3b1778937e0c3",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "MMMU-Pro 官方数据更新",
      "summary": "MMMU-Pro 官方数据发生变化；共 23 个模型 · 当前前列：Claude Opus 5.5 (Adaptive Reasoning, Max Effort, Default Fallback)（87.7%）、GPT-6 Astra (max)（86.9%）、Claude Opus 5.5 (Adaptive Reasoning, Xhigh Effort, Default Fallback)（86.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
      "observedAt": "2026-09-24T22:17:02Z",
      "publishedAt": null,
      "source": "Artificial Analysis MMMU-Pro official public Dataset page",
      "benchmarkId": "aa_mmmu_pro",
      "benchmarkTitle": "MMMU-Pro",
      "release": "page_jsonld",
      "contentHash": "b330c1617b3f9dd59b0efecda1ffe7faea214cfb10a4573a411145410c21ec7c",
      "unit": "ratio",
      "modelCount": 23,
      "topModels": [
        "Claude Opus 5.5 (Adaptive Reasoning, Max Effort, Default Fallback)（87.7%）",
        "GPT-6 Astra (max)（86.9%）",
        "Claude Opus 5.5 (Adaptive Reasoning, Xhigh Effort, Default Fallback)（86.6%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "contentHash": "696e0a1ac95f6f257656d5442ae9849048378e38440b65846a93be7585656552"
      }
    }
  ],
  "eventCount": 1,
  "provenance": {
    "workflowRunId": "36153015790",
    "mainCommit": "28bf906ee7c5bca66febdc1ebc6f8c7684af102c"
  }
};
