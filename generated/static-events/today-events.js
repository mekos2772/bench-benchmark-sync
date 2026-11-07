module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-11-07T18:37:15Z",
  "windowStart": "2026-11-06T18:37:15Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "openrouter:liquid/lfm-3-1.7b": {
      "canonicalId": "openrouter:liquid/lfm-3-1.7b",
      "provider": "Liquid AI",
      "modelId": "liquid/lfm-3-1.7b",
      "displayName": "LFM3-1.7B",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-11-06T23:57:57Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "open_weights",
      "modalities": {
        "input": [
          "text"
        ],
        "output": [
          "text"
        ]
      },
      "capabilities": [
        "推理",
        "结构化输出",
        "工具调用"
      ],
      "parameterCount": null,
      "license": null,
      "technicalReportUrl": null,
      "description": null,
      "contextWindow": 262144,
      "maxInputTokens": null,
      "maxOutputTokens": 8192,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 0.08,
        "outputPerMillionTokens": 0.2,
        "cachedInputPerMillionTokens": 0.02
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
      "hubRepo": "LiquidAI/LFM3-1.7B",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Liquid AI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "benchmark:Kimi K3.1 Pro": {
      "canonicalId": "benchmark:Kimi K3.1 Pro",
      "provider": null,
      "modelId": "Kimi K3.1 Pro",
      "displayName": "Kimi K3.1 Pro",
      "version": null,
      "aliases": [],
      "releaseDate": null,
      "status": "unknown",
      "deprecationDate": null,
      "releaseType": null,
      "access": "unknown",
      "modalities": {
        "input": [],
        "output": []
      },
      "capabilities": [],
      "parameterCount": null,
      "license": null,
      "technicalReportUrl": null,
      "description": null,
      "contextWindow": null,
      "maxInputTokens": null,
      "maxOutputTokens": null,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": null,
        "outputPerMillionTokens": null,
        "cachedInputPerMillionTokens": null
      },
      "availability": [],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": null,
      "hubRepo": null,
      "sourceType": "official_benchmark",
      "sourceOwner": "AA-Briefcase v1.1 official public page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/aa-briefcase",
          "observedAt": "2026-11-07T01:17:14Z",
          "contentHash": "65008f70ca6d482d34c1deeffde681d4fb92ead2dbc40710b4d64406d84a886d",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 2,
  "sourceSummary": {
    "official": 0,
    "catalog": 1,
    "benchmark": 8
  },
  "events": [
    {
      "eventId": "0b60a2eb44a5a92c7207a3bdea072340",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Artificial Analysis Intelligence Index v5.0.1 官方数据更新",
      "summary": "Artificial Analysis Intelligence Index v5.0.1 官方数据发生变化；共 28 个模型 · 数据版本 v5.0.1 · 当前前列：Gemini 4 Carbon (High)（60.03）、Claude Opus 5.5 (Max, Default Fallback)（59.11）、GPT-6 Astra (Max)（56.85）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-11-07T01:17:14Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index v5.0.1 official public page",
      "benchmarkId": "aa_intelligence_index_v5_0_1",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v5.0.1",
      "release": "v5.0.1",
      "contentHash": "a0c3c24abd45a1e84832290ebeabbcdf43e781014d17c7f9529dbcd9f2230b57",
      "unit": "score",
      "modelCount": 28,
      "topModels": [
        "Gemini 4 Carbon (High)（60.03）",
        "Claude Opus 5.5 (Max, Default Fallback)（59.11）",
        "GPT-6 Astra (Max)（56.85）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "5f47c420c0b3b15f141ccb6aab12c081",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "AA-Briefcase v1.1 官方数据更新",
      "summary": "AA-Briefcase v1.1 官方数据发生变化；共 28 个模型 · 数据版本 v1.1 · 当前前列：Claude Sonnet 5.5 (Max, Default Fallback)（1813.33）、Claude Opus 5.5 (Max, Default Fallback)（1799.89）、Muse Wonder Full (Max)（1729.32）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/aa-briefcase",
      "observedAt": "2026-11-07T01:17:14Z",
      "publishedAt": null,
      "source": "AA-Briefcase v1.1 official public page",
      "benchmarkId": "aa_briefcase_v1_1",
      "benchmarkTitle": "AA-Briefcase v1.1",
      "release": "v1.1",
      "contentHash": "3995f3d3c714ecffdea3e7bc5f261c38ddf3846e257b3f9084afee88f51733c3",
      "unit": "raw",
      "modelCount": 28,
      "topModels": [
        "Claude Sonnet 5.5 (Max, Default Fallback)（1813.33）",
        "Claude Opus 5.5 (Max, Default Fallback)（1799.89）",
        "Muse Wonder Full (Max)（1729.32）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/aa-briefcase",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "eb16a7e18838529b699fe7874c6feca4",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "LFM3-1.7B 新增可用",
      "summary": "LFM3-1.7B 新增可用：上下文 262,144 tokens，价格 $0.08/$0.2 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "liquid/lfm-3-1.7b",
      "modelRef": "openrouter:liquid/lfm-3-1.7b",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Liquid AI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
          "observedAt": "2026-11-06T23:57:57Z",
          "contentHash": "175f23624a3a8a4d5235daa1b715525c715bed3e086e7e10097f0aedf97b9fc1",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/liquid/lfm-3-1.7b",
      "observedAt": "2026-11-06T23:57:57Z",
      "publishedAt": "2026-11-06T23:57:57Z",
      "source": "OpenRouter · Liquid AI",
      "eventIdentity": "catalog:liquid/lfm-3-1.7b",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/liquid/lfm-3-1.7b",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "4b9e9a5f80aab9a8abaaa144cea9064c",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "AutomationBench-AA 官方数据更新",
      "summary": "AutomationBench-AA 官方数据发生变化；共 29 个模型 · 数据版本 page · 当前前列：Gemini 4 Carbon (High)（77.8%）、Gemini 4 Argon (High)（77.5%）、Kimi K3.1 Pro（73.3%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/automationbench-aa",
      "observedAt": "2026-11-06T21:47:59Z",
      "publishedAt": null,
      "source": "AutomationBench-AA official public page",
      "benchmarkId": "aa_automationbench",
      "benchmarkTitle": "AutomationBench-AA",
      "release": "page",
      "contentHash": "b5643ba73af55e9170741c9d2fa6b15758aa243c99de2f9a390c63ce91f79945",
      "unit": "ratio",
      "modelCount": 29,
      "topModels": [
        "Gemini 4 Carbon (High)（77.8%）",
        "Gemini 4 Argon (High)（77.5%）",
        "Kimi K3.1 Pro（73.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/automationbench-aa",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "584e08cc2aeb6f8f784ada199478e20a",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "FrontierCode 2.0 官方数据更新",
      "summary": "FrontierCode 2.0 官方数据发生变化；共 28 个模型 · 数据版本 v2.0 · 当前前列：Claude Opus 5.5 (Max, Default Fallback)（46.4%）、GPT-6 Astra (Max)（42.4%）、GPT-6.1 Terra (Max)（42.3%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/frontiercode-2-0",
      "observedAt": "2026-11-06T21:47:59Z",
      "publishedAt": null,
      "source": "FrontierCode 2.0 official public page",
      "benchmarkId": "aa_frontiercode_v2_0",
      "benchmarkTitle": "FrontierCode 2.0",
      "release": "v2.0",
      "contentHash": "0f546bb9930bd260cf0fcea208874321de332beaf25ac10cad254b7d2d892919",
      "unit": "ratio",
      "modelCount": 28,
      "topModels": [
        "Claude Opus 5.5 (Max, Default Fallback)（46.4%）",
        "GPT-6 Astra (Max)（42.4%）",
        "GPT-6.1 Terra (Max)（42.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/frontiercode-2-0",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "2ebbdebb580f3b850b985b6d13568a3c",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Terminal-Bench-Science 0.1 官方数据更新",
      "summary": "Terminal-Bench-Science 0.1 官方数据发生变化；共 28 个模型 · 数据版本 v0.1 · 当前前列：Gemini 4 Carbon (High)（64.8%）、GPT-6 Astra (Max)（63.3%）、Claude Opus 5.5 (Max, Default Fallback)（59.0%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminal-bench-science",
      "observedAt": "2026-11-06T21:47:59Z",
      "publishedAt": null,
      "source": "Terminal-Bench-Science 0.1 official public page",
      "benchmarkId": "aa_terminal_bench_science_v0_1",
      "benchmarkTitle": "Terminal-Bench-Science 0.1",
      "release": "v0.1",
      "contentHash": "c13c900d7a48bef92206d63bbf1e080a59e7231d89aa203fecd451439947bcba",
      "unit": "ratio",
      "modelCount": 28,
      "topModels": [
        "Gemini 4 Carbon (High)（64.8%）",
        "GPT-6 Astra (Max)（63.3%）",
        "Claude Opus 5.5 (Max, Default Fallback)（59.0%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminal-bench-science",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "67cfc5b1185c6e69926e83d2eb7aa978",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Terminal-Bench 4.0 官方数据更新",
      "summary": "Terminal-Bench 4.0 官方数据发生变化；共 28 个模型 · 当前前列：Kimi K3.1 Pro（67.2%）、Gemini 4 Carbon (High)（65.2%）、Claude Sonnet 5.5 (Max, Default Fallback)（63.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-11-06T21:47:59Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "contentHash": "d21c6e0bdf9450ad3c52a4fe5fa5e75f0fc2b2b367c7905b8f51f857382aafe2",
      "unit": "ratio",
      "modelCount": 28,
      "topModels": [
        "Kimi K3.1 Pro（67.2%）",
        "Gemini 4 Carbon (High)（65.2%）",
        "Claude Sonnet 5.5 (Max, Default Fallback)（63.6%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "20c162e15b9cf5acc331493fbc28ae60",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Artificial Analysis Openness Index 官方数据更新",
      "summary": "Artificial Analysis Openness Index 官方数据发生变化；共 25 个模型 · 当前前列：Olmo 3 7B Think（88.89）、Olmo 3.1 32B Think（88.89）、Apertus 70B Instruct（88.89）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-openness-index",
      "observedAt": "2026-11-06T21:47:59Z",
      "publishedAt": null,
      "source": "Artificial Analysis Artificial Analysis Openness Index official Data API",
      "benchmarkId": "aa_openness_index",
      "benchmarkTitle": "Artificial Analysis Openness Index",
      "release": "page_jsonld",
      "contentHash": "90a67445841763f9c4f94bcc83edb44b995b1a006d3e61ad7b7b316e9775f054",
      "unit": "score",
      "modelCount": 25,
      "topModels": [
        "Olmo 3 7B Think（88.89）",
        "Olmo 3.1 32B Think（88.89）",
        "Apertus 70B Instruct（88.89）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-openness-index",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    },
    {
      "eventId": "4283a45359f92fd93eb0b1e8337257e9",
      "family": "benchmark",
      "eventType": "score_changed",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Kimi K3.1 Pro 分数变化",
      "summary": "AA-Briefcase v1.1 分数从 1674.81 变为 1674.17（-0.64）。",
      "repoId": null,
      "repo": null,
      "modelId": "Kimi K3.1 Pro",
      "modelRef": "benchmark:Kimi K3.1 Pro",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/aa-briefcase",
      "observedAt": "2026-11-07T01:17:14Z",
      "publishedAt": null,
      "source": "AA-Briefcase v1.1 official public page",
      "benchmarkId": "aa_briefcase_v1_1",
      "benchmarkTitle": "AA-Briefcase v1.1",
      "release": "v1.1",
      "previousScore": 1674.81,
      "score": 1674.17,
      "delta": -0.6399999999998727,
      "unit": "raw",
      "modelIdentity": "aa_briefcase_v1_1:Kimi K3.1 Pro",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/aa-briefcase",
        "contentHash": "26e684e3ea2fd278df4fe2f8bd1c4c2e22d03b89c6e84fb59ef99179d7f0641c"
      }
    }
  ],
  "eventCount": 9,
  "provenance": {
    "workflowRunId": "42402174041",
    "mainCommit": "4fd8509011a6764376c94b2d1149c68bcc8f49ee"
  }
};
