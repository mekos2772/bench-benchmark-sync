module.exports = {
  "schemaVersion": 3,
  "dataSource": "benchmark-sync-static",
  "exporterVersion": "0.4.0",
  "workflowRunId": "40076567579",
  "mainCommit": "645a6f4352557b8984a3e6057c996e54d0c9c934",
  "generatedAt": "2026-10-24T08:05:06Z",
  "families": [
    {
      "familyId": "livebench",
      "title": "LiveBench",
      "overall": "livebench_overall",
      "boards": [
        {
          "id": "livebench_overall",
          "title": "LiveBench Overall",
          "isOverall": true,
          "modelCount": 53
        },
        {
          "id": "livebench_coding",
          "title": "LiveBench Coding",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_reasoning",
          "title": "LiveBench Reasoning",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_data_analysis",
          "title": "LiveBench Data Analysis",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_long_horizon",
          "title": "LiveBench Long Agentic",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_browser",
          "title": "LiveBench Browser",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_research",
          "title": "LiveBench Research",
          "isOverall": false,
          "modelCount": 53
        },
        {
          "id": "livebench_design",
          "title": "LiveBench Design",
          "isOverall": false,
          "modelCount": 53
        }
      ]
    },
    {
      "familyId": "aa",
      "title": "Artificial Analysis",
      "overall": "aa_intelligence_index_v4_3",
      "boards": [
        {
          "id": "aa_intelligence_index_v4_3",
          "title": "Artificial Analysis Intelligence Index v4.3",
          "isOverall": true,
          "modelCount": 27
        },
        {
          "id": "aa_terminal_bench_v4_0",
          "title": "Terminal-Bench 4.0",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_humanitys_last_exam",
          "title": "Humanity's Last Exam",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_gpqa_diamond",
          "title": "GPQA Diamond",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_scicode",
          "title": "SciCode",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_lcr",
          "title": "AA LCR",
          "isOverall": false,
          "modelCount": 28
        },
        {
          "id": "aa_omniscience_index",
          "title": "AA Omniscience Index",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_critpt",
          "title": "CritPt",
          "isOverall": false,
          "modelCount": 28
        },
        {
          "id": "aa_gdpval_elo",
          "title": "GDPval-AA Elo",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_terminalbench_hard",
          "title": "Terminal-Bench Hard",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_terminalbench_v2_1",
          "title": "Terminal-Bench v2.1",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_ifbench",
          "title": "IFBench",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_mmmu_pro",
          "title": "MMMU-Pro",
          "isOverall": false,
          "modelCount": 27
        },
        {
          "id": "aa_openness_index",
          "title": "Artificial Analysis Openness Index",
          "isOverall": false,
          "modelCount": 25
        },
        {
          "id": "aa_mlcr_overall",
          "title": "MLCR Overall",
          "isOverall": false,
          "modelCount": 27
        }
      ]
    },
    {
      "familyId": "deepswe",
      "title": "DeepSWE",
      "overall": "deepswe_v1_1",
      "boards": [
        {
          "id": "deepswe_v1_1",
          "title": "DeepSWE v1.1",
          "isOverall": true,
          "modelCount": 70
        }
      ]
    }
  ],
  "rankings": {
    "livebench_overall": {
      "rankingId": "livebench_overall",
      "benchmarkId": "livebench_overall",
      "familyId": "livebench",
      "title": "LiveBench Overall",
      "category": "overall",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "global_average",
      "unit": "score",
      "comparisonKey": "live_bench",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:37Z",
      "taskCount": 7,
      "source": {
        "name": "LiveBench dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          87.99,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          86.53,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          86.14,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          85.41,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          84.1,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          83.61,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          82.46,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          82.09,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          81.91,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          79.2,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          78.1,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          78.04,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          76.77,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          76.74,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          76.26,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          75.64,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          74.99,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          74.94,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          74.87,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          74.76,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          74.09,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          73.09,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          72.99,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          70.61,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          70.06,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          69.4,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          68.79,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          68.7,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          67.34,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          67.19,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          66.09,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          65.09,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          64.24,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          63.63,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          63.39,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          62.66,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          62.4,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          62.01,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          60.74,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          57.59,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          57.57,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          55.5,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          54.91,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          53.74,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          52.93,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          51.91,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          51.47,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          50.03,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          47.7,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          46.04,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          41.53,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          40.83,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          28.69,
          null,
          null
        ]
      ]
    },
    "livebench_coding": {
      "rankingId": "livebench_coding",
      "benchmarkId": "livebench_coding",
      "familyId": "livebench",
      "title": "LiveBench Coding",
      "category": "Coding",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "coding",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:25Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Coding dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-fable-5",
          "claude-fable-5",
          98.3,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          97.7,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          96.3,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          96.0,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          96.0,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          94.7,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          94.3,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          93.7,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          93.1,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          91.4,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          90.8,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          90.2,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          90.2,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          89.7,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          89.7,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          89.1,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          87.4,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          86.8,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          86.2,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          86.2,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          85.6,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          85.1,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          84.5,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          84.5,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          83.9,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          83.9,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          82.8,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          82.2,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          81.8,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          81.5,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          80.6,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          80.5,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          78.2,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          77.3,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          77.0,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          74.7,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          73.6,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          73.6,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          72.2,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          70.9,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          66.7,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          66.6,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          65.5,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          64.0,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          61.3,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          60.3,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          60.0,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          59.3,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          49.0,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          48.1,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          43.6,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          37.6,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          22.6,
          null,
          null
        ]
      ]
    },
    "livebench_reasoning": {
      "rankingId": "livebench_reasoning",
      "benchmarkId": "livebench_reasoning",
      "familyId": "livebench",
      "title": "LiveBench Reasoning",
      "category": "Reasoning",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "reasoning",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:37Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Reasoning dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "gemini-4-argon",
          "gemini-4-argon",
          95.1,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          92.7,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          92.6,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          92.2,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          91.7,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          91.7,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          91.6,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          91.2,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          91.2,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          91.1,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          90.7,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          90.6,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          90.6,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          90.0,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          89.7,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          89.7,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          89.7,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          89.3,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          89.2,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          89.1,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          88.7,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          88.7,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          88.2,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          87.8,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          87.4,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          87.2,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          86.7,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          86.4,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          85.8,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          85.6,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          85.4,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          84.0,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          83.9,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          83.8,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          82.9,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          82.7,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          82.4,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          81.8,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          80.2,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          80.0,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          79.6,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          78.8,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          78.3,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          77.6,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          75.1,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          74.7,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          74.5,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          73.7,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          71.7,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          70.6,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          68.3,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          61.7,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          42.9,
          null,
          null
        ]
      ]
    },
    "livebench_data_analysis": {
      "rankingId": "livebench_data_analysis",
      "benchmarkId": "livebench_data_analysis",
      "familyId": "livebench",
      "title": "LiveBench Data Analysis",
      "category": "Data Analysis",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "data_analysis",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:42Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Data Analysis dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "gemini-4-argon",
          "gemini-4-argon",
          85.2,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          83.0,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          82.7,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          81.6,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          81.6,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          81.2,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          80.5,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          80.3,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          80.3,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          79.8,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          79.6,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          79.5,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          79.5,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          79.3,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          79.3,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          79.1,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          78.7,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          78.5,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          78.4,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          78.0,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          76.9,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          76.6,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          76.5,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          76.5,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          76.4,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          76.2,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          76.1,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          75.3,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          74.6,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          74.2,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          73.4,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          73.0,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          72.8,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          72.3,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          71.7,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          71.4,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          70.2,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          68.0,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          68.0,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          66.4,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          66.0,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          65.7,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          65.1,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          64.6,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          63.5,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          60.2,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          59.5,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          59.3,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          54.5,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          54.0,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          53.3,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          53.1,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          43.1,
          null,
          null
        ]
      ]
    },
    "livebench_long_horizon": {
      "rankingId": "livebench_long_horizon",
      "benchmarkId": "livebench_long_horizon",
      "familyId": "livebench",
      "title": "LiveBench Long Agentic",
      "category": "Long Agentic",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "long_horizon",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:36Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Long-Horizon dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          85.0,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          82.4,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          80.8,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          78.8,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          73.0,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          69.9,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          66.9,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          62.1,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          57.6,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          53.2,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          53.2,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          50.9,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          50.1,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          49.5,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          48.5,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          48.4,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          48.3,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          48.1,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          47.5,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          44.6,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          42.8,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          42.3,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          40.7,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          40.4,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          40.1,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          39.0,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          39.0,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          37.1,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          36.6,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          35.9,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          34.7,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          30.4,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          30.1,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          28.4,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          28.3,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          27.9,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          27.9,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          27.5,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          23.9,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          23.1,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          21.3,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          19.6,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          18.9,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          17.3,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          15.8,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          14.1,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          13.3,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          12.4,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          11.8,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          11.5,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          11.2,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          11.1,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          8.3,
          null,
          null
        ]
      ]
    },
    "livebench_browser": {
      "rankingId": "livebench_browser",
      "benchmarkId": "livebench_browser",
      "familyId": "livebench",
      "title": "LiveBench Browser",
      "category": "Browser",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "browser",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:25Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Browser dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          100.0,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          96.0,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          92.0,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          92.0,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          92.0,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          92.0,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          88.0,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          88.0,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          88.0,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          84.0,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          84.0,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          84.0,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          84.0,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          84.0,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          84.0,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          80.0,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          80.0,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          80.0,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          80.0,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          76.0,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          72.0,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          72.0,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          72.0,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          68.0,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          68.0,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          64.0,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          64.0,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          64.0,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          60.0,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          56.0,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          48.0,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          48.0,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          44.0,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          40.0,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          36.0,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          36.0,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          32.0,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          32.0,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          24.0,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          16.0,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          16.0,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          12.0,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          8.0,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          8.0,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          8.0,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          4.0,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          4.0,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          4.0,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          0.0,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          0.0,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          0.0,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          0.0,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          0.0,
          null,
          null
        ]
      ]
    },
    "livebench_research": {
      "rankingId": "livebench_research",
      "benchmarkId": "livebench_research",
      "familyId": "livebench",
      "title": "LiveBench Research",
      "category": "Research",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "research",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:42Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Research dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-opus-5",
          "claude-opus-5",
          88.9,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          88.0,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          86.9,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          86.8,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          86.4,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          85.9,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          85.2,
          null,
          null
        ],
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          85.0,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          84.5,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          83.6,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          83.5,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          83.1,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          82.8,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          82.0,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          81.9,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          81.8,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          80.3,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          79.5,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          79.2,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          79.1,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          79.0,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          77.9,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          76.7,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          76.5,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          74.6,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          73.2,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          72.8,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          72.8,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          72.7,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          70.9,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          70.9,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          70.1,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          69.9,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          69.3,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          69.2,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          68.6,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          68.0,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          67.8,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          67.7,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          65.7,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          63.6,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          61.6,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          60.4,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          59.9,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          59.4,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          54.5,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          51.0,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          44.4,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          43.5,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          43.2,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          42.2,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          40.0,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          28.1,
          null,
          null
        ]
      ]
    },
    "livebench_design": {
      "rankingId": "livebench_design",
      "benchmarkId": "livebench_design",
      "familyId": "livebench",
      "title": "LiveBench Design",
      "category": "Design",
      "release": "2026-10-14",
      "releaseId": "2026-10-14",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "design",
      "snapshotId": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "contentHash": "fa66ab34a6357af7adba4b85354b1f52d365e40f424d1098b9568cac46a4b231",
      "generatedAt": "2026-10-24T08:04:36Z",
      "taskCount": 1,
      "source": {
        "name": "LiveBench Design dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/data/20261014/table.csv",
        "categoriesUrl": "https://livebench.ai/data/20261014/categories.json"
      },
      "entries": [
        [
          "claude-opus-5.5",
          "claude-opus-5.5",
          86.9,
          null,
          null
        ],
        [
          "claude-sonnet-5.5",
          "claude-sonnet-5.5",
          85.0,
          null,
          null
        ],
        [
          "claude-fable-5",
          "claude-fable-5",
          84.7,
          null,
          null
        ],
        [
          "claude-fable-5.1",
          "claude-fable-5.1",
          83.4,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-1017",
          "deepseek-v4.1-flash-1017",
          83.4,
          null,
          null
        ],
        [
          "claude-haiku-5.5",
          "claude-haiku-5.5",
          83.1,
          null,
          null
        ],
        [
          "claude-opus-5",
          "claude-opus-5",
          83.0,
          null,
          null
        ],
        [
          "gpt-6-luna",
          "gpt-6-luna",
          82.5,
          null,
          null
        ],
        [
          "gpt-6-sol",
          "gpt-6-sol",
          82.2,
          null,
          null
        ],
        [
          "gpt-6.1-sol",
          "gpt-6.1-sol",
          82.1,
          null,
          null
        ],
        [
          "claude-sonnet-5",
          "claude-sonnet-5",
          82.0,
          null,
          null
        ],
        [
          "gpt-6-astra",
          "gpt-6-astra",
          82.0,
          null,
          null
        ],
        [
          "gpt-5.6-sol",
          "gpt-5.6-sol",
          81.6,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          79.8,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash",
          "deepseek-v4.1-flash",
          79.2,
          null,
          null
        ],
        [
          "claude-opus-4.8",
          "claude-opus-4.8",
          78.8,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          78.6,
          null,
          null
        ],
        [
          "mimo-v2.6-pro",
          "mimo-v2.6-pro",
          78.5,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          78.1,
          null,
          null
        ],
        [
          "grok-4.7",
          "grok-4.7",
          78.0,
          null,
          null
        ],
        [
          "kimi-k3.1-pro",
          "kimi-k3.1-pro",
          77.8,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          77.3,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          77.2,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          77.2,
          null,
          null
        ],
        [
          "step-5-preview",
          "step-5-preview",
          76.9,
          null,
          null
        ],
        [
          "gpt-5.6-luna",
          "gpt-5.6-luna",
          76.0,
          null,
          null
        ],
        [
          "gpt-5.6-terra",
          "gpt-5.6-terra",
          76.0,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          75.9,
          null,
          null
        ],
        [
          "muse-wonder-1.0",
          "muse-wonder-1.0",
          75.1,
          null,
          null
        ],
        [
          "muse-spark-1.3",
          "muse-spark-1.3",
          74.8,
          null,
          null
        ],
        [
          "minimax-m3.1-flash",
          "minimax-m3.1-flash",
          74.0,
          null,
          null
        ],
        [
          "gemini-4-argon",
          "gemini-4-argon",
          73.7,
          null,
          null
        ],
        [
          "gemini-3.7-flash",
          "gemini-3.7-flash",
          73.2,
          null,
          null
        ],
        [
          "qwen3.8-flash",
          "qwen3.8-flash",
          72.8,
          null,
          null
        ],
        [
          "gemini-3.8-flash",
          "gemini-3.8-flash",
          72.7,
          null,
          null
        ],
        [
          "claude-sonnet-4.6",
          "claude-sonnet-4.6",
          71.8,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          71.7,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision",
          "deepseek-v4-flash-vision",
          70.7,
          null,
          null
        ],
        [
          "gpt-5.5",
          "gpt-5.5",
          70.3,
          null,
          null
        ],
        [
          "beam-1.0",
          "beam-1.0",
          67.9,
          null,
          null
        ],
        [
          "muse-spark-1.2",
          "muse-spark-1.2",
          67.1,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          66.2,
          null,
          null
        ],
        [
          "mistral-large-4",
          "mistral-large-4",
          65.6,
          null,
          null
        ],
        [
          "smaug-nemotron-3.5-nvfp4",
          "smaug-nemotron-3.5-nvfp4",
          62.7,
          null,
          null
        ],
        [
          "gemini-3.1-pro",
          "gemini-3.1-pro",
          61.6,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5",
          "nemotron-super-vl-3.5",
          60.7,
          null,
          null
        ],
        [
          "muse-spark-open",
          "muse-spark-open",
          60.3,
          null,
          null
        ],
        [
          "claude-haiku-4.5",
          "claude-haiku-4.5",
          59.9,
          null,
          null
        ],
        [
          "nemotron-ultra-3",
          "nemotron-ultra-3",
          58.6,
          null,
          null
        ],
        [
          "gemma-4-31b",
          "gemma-4-31b",
          58.4,
          null,
          null
        ],
        [
          "inkling",
          "inkling",
          58.3,
          null,
          null
        ],
        [
          "nemotron-super-vl-3.5-nvfp4",
          "nemotron-super-vl-3.5-nvfp4",
          57.1,
          null,
          null
        ],
        [
          "nemotron-lightning-3.5",
          "nemotron-lightning-3.5",
          43.9,
          null,
          null
        ]
      ]
    },
    "aa_intelligence_index_v4_3": {
      "rankingId": "aa_intelligence_index_v4_3",
      "benchmarkId": "artificial_analysis_intelligence_index_v4_3",
      "familyId": "aa",
      "title": "Artificial Analysis Intelligence Index v4.3",
      "category": "artificial_analysis_intelligence_index_v4_3",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Artificial Analysis Intelligence Index: Score",
      "unit": "score",
      "comparisonKey": "intelligence_index_v4_3",
      "snapshotId": "84e481e9d3dc8aec347f9e77528b59f64bf89c4222297b8d726907c31057fcd1",
      "contentHash": "84e481e9d3dc8aec347f9e77528b59f64bf89c4222297b8d726907c31057fcd1",
      "generatedAt": "2026-10-24T08:04:10Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Intelligence Index official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "evidenceUrl": "https://artificialanalysis.ai/api-reference/beta",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          57.62,
          null,
          "max with fallback"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          56.0,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          55.8,
          null,
          "max"
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          55.09,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          53.35,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          52.67,
          null,
          "max"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          52.56,
          null,
          "high"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          52.39,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          51.83,
          null,
          "max"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          46.45,
          null,
          "xhigh"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          46.32,
          null,
          null
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          45.42,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          45.1,
          null,
          "max"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          44.78,
          null,
          "max"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          43.73,
          null,
          null
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          43.4,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          42.71,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          41.81,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          40.93,
          null,
          "high"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          38.87,
          null,
          "xhigh"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          38.38,
          null,
          null
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          38.12,
          null,
          "max"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          33.68,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          30.5,
          null,
          null
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          30.33,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          26.49,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          24.98,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_terminal_bench_v4_0": {
      "rankingId": "aa_terminal_bench_v4_0",
      "benchmarkId": "terminal_bench_v4_0",
      "familyId": "aa",
      "title": "Terminal-Bench 4.0",
      "category": "terminal_bench_v4_0",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Terminal-Bench 4.0: Score",
      "unit": "ratio",
      "comparisonKey": "terminal_bench_v4_0",
      "snapshotId": "d561bba1829393bfd288928168087d7a74a2580d426abb72c0f98cb91965dd38",
      "contentHash": "d561bba1829393bfd288928168087d7a74a2580d426abb72c0f98cb91965dd38",
      "generatedAt": "2026-10-24T08:05:01Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.6717,
          null,
          null
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.6364,
          null,
          "max with fallback"
        ],
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.596,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.5909,
          null,
          "max"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          0.5707,
          null,
          "max"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.5707,
          null,
          "high"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.5606,
          null,
          "max"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.5202,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.5202,
          null,
          "max"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.4192,
          null,
          "max"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.3889,
          null,
          null
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.3485,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.3384,
          null,
          "max"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.3333,
          null,
          null
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.3283,
          null,
          "max"
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.3283,
          null,
          null
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.2677,
          null,
          null
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.2576,
          null,
          "xhigh"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.2576,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.197,
          null,
          "high"
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.1263,
          null,
          "max"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.0808,
          null,
          "xhigh"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.0556,
          null,
          "xhigh"
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.0303,
          null,
          null
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.0152,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.0101,
          null,
          "xhigh"
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.0,
          null,
          null
        ]
      ]
    },
    "aa_humanitys_last_exam": {
      "rankingId": "aa_humanitys_last_exam",
      "benchmarkId": "humanitys_last_exam",
      "familyId": "aa",
      "title": "Humanity's Last Exam",
      "category": "humanitys_last_exam",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Humanity's Last Exam: Score",
      "unit": "ratio",
      "comparisonKey": "humanitys_last_exam",
      "snapshotId": "3fa44f7bdd9ee3d6faff63a7a4a726962100568a766dc2a7b9c6f1ef0bc43fcf",
      "contentHash": "3fa44f7bdd9ee3d6faff63a7a4a726962100568a766dc2a7b9c6f1ef0bc43fcf",
      "generatedAt": "2026-10-24T08:04:25Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Humanity's Last Exam official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.6135,
          null,
          "max with fallback"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.5913,
          null,
          "max with fallback"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.5709,
          null,
          "high"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.5496,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.5468,
          null,
          "max"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          0.5361,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.5292,
          null,
          "max"
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.5246,
          null,
          null
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.5009,
          null,
          "max"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.4935,
          null,
          null
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.4796,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.4782,
          null,
          "high"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.4648,
          null,
          null
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.4439,
          null,
          "max"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.4388,
          null,
          "xhigh"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.4333,
          null,
          "max"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.4314,
          null,
          "xhigh"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.431,
          null,
          null
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.4226,
          null,
          "max"
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.3985,
          null,
          null
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.3851,
          null,
          "max"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.3503,
          null,
          null
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.3466,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.3392,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.3197,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.3188,
          null,
          "xhigh"
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.3072,
          null,
          null
        ]
      ]
    },
    "aa_gpqa_diamond": {
      "rankingId": "aa_gpqa_diamond",
      "benchmarkId": "gpqa_diamond",
      "familyId": "aa",
      "title": "GPQA Diamond",
      "category": "gpqa_diamond",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "GPQA Diamond: Score",
      "unit": "ratio",
      "comparisonKey": "gpqa_diamond",
      "snapshotId": "d6b39ea845301cde295c92216bef28a68f2ca2743ec6d0c89ceadc0708a05591",
      "contentHash": "d6b39ea845301cde295c92216bef28a68f2ca2743ec6d0c89ceadc0708a05591",
      "generatedAt": "2026-10-24T08:04:21Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis GPQA Diamond official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.9606,
          null,
          "max"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.9525,
          null,
          "high"
        ],
        [
          "Grok 4.6 (High)",
          "Grok 4.6",
          0.9495,
          null,
          "high"
        ],
        [
          "Gemini 3.7 Flash (High)",
          "Gemini 3.7 Flash",
          0.9455,
          null,
          "high"
        ],
        [
          "GPT-5.6 Sol (Max)",
          "GPT-5.6 Sol",
          0.9414,
          null,
          "max"
        ],
        [
          "Muse Spark 1.3 (Xhigh)",
          "Muse Spark 1.3",
          0.9414,
          null,
          "xhigh"
        ],
        [
          "Gemini 3.1 Pro Preview",
          "Gemini 3.1 Pro Preview",
          0.9414,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.9374,
          null,
          "max with fallback"
        ],
        [
          "Claude Opus 5 (Xhigh)",
          "Claude Opus 5",
          0.9374,
          null,
          "xhigh"
        ],
        [
          "Kimi K3 (Max)",
          "Kimi K3",
          0.9354,
          null,
          "max"
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.9354,
          null,
          null
        ],
        [
          "GPT-5.5 (Xhigh)",
          "GPT-5.5",
          0.9354,
          null,
          "xhigh"
        ],
        [
          "Grok 4.5 (High)",
          "Grok 4.5",
          0.9313,
          null,
          "high"
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.9293,
          null,
          null
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.9283,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (Max)",
          "DeepSeek V4 Pro 0813",
          0.9283,
          null,
          "max"
        ],
        [
          "Gemini 3.6 Flash (High)",
          "Gemini 3.6 Flash",
          0.9283,
          null,
          "high"
        ],
        [
          "Qwen3.8 Max",
          "Qwen3.8 Max",
          0.9273,
          null,
          null
        ],
        [
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          0.9263,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (Max)",
          "GPT-5.6 Terra",
          0.9253,
          null,
          "max"
        ],
        [
          "Qwen3.8-Flash-Next",
          "Qwen3.8-Flash-Next",
          0.9232,
          null,
          null
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.9172,
          null,
          "max"
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.9121,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.9051,
          null,
          "xhigh"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.8899,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.8727,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.8717,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_scicode": {
      "rankingId": "aa_scicode",
      "benchmarkId": "scicode",
      "familyId": "aa",
      "title": "SciCode",
      "category": "scicode",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "SciCode: Score",
      "unit": "ratio",
      "comparisonKey": "scicode",
      "snapshotId": "73b63cf6c297eff8c608181a9827c665e7c071d002a4ce563295859c8095ad89",
      "contentHash": "73b63cf6c297eff8c608181a9827c665e7c071d002a4ce563295859c8095ad89",
      "generatedAt": "2026-10-24T08:04:51Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis SciCode official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/scicode",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.669,
          null,
          "max with fallback"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.6308,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          0.6262,
          null,
          "max"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.6181,
          null,
          "high"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.61,
          null,
          "max with fallback"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.6088,
          null,
          null
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.6076,
          null,
          null
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.603,
          null,
          "max"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.5903,
          null,
          "max"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.5891,
          null,
          null
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.5845,
          null,
          "xhigh"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.5741,
          null,
          "xhigh"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.566,
          null,
          "high"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.5648,
          null,
          "max"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.559,
          null,
          "max"
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.5498,
          null,
          "max"
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.5463,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.5417,
          null,
          "max"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.5417,
          null,
          null
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.5336,
          null,
          null
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.5208,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.5162,
          null,
          null
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.485,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.478,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.4699,
          null,
          "xhigh"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.4664,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.4294,
          null,
          null
        ]
      ]
    },
    "aa_lcr": {
      "rankingId": "aa_lcr",
      "benchmarkId": "aa_lcr",
      "familyId": "aa",
      "title": "AA LCR",
      "category": "aa_lcr",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "AA-LCR v1.1",
      "unit": "ratio",
      "comparisonKey": "aa_lcr",
      "snapshotId": "142d25ace6fbc0b33bfa058dcd3e64c31d1fca759a7c653925666ff87dc1105e",
      "contentHash": "142d25ace6fbc0b33bfa058dcd3e64c31d1fca759a7c653925666ff87dc1105e",
      "generatedAt": "2026-10-24T08:04:08Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis AA LCR official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Kimi K3 (Max)",
          "Kimi K3",
          0.8867,
          null,
          "max"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.8833,
          null,
          null
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.8633,
          null,
          null
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.8633,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.8533,
          null,
          "max with fallback"
        ],
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.8467,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          0.8367,
          null,
          "max"
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.8333,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.83,
          null,
          "max"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.8267,
          null,
          "max with fallback"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.8267,
          null,
          "max"
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.8267,
          null,
          "max"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.82,
          null,
          "xhigh"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.8133,
          null,
          "high"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.8133,
          null,
          null
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.8067,
          null,
          "max"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.8067,
          null,
          "max"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.8033,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.8,
          null,
          null
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.8,
          null,
          null
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.7967,
          null,
          "high"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.7967,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.7967,
          null,
          null
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.7833,
          null,
          "xhigh"
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.78,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.7733,
          null,
          "xhigh"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.7667,
          null,
          "xhigh"
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.69,
          null,
          null
        ]
      ]
    },
    "aa_omniscience_index": {
      "rankingId": "aa_omniscience_index",
      "benchmarkId": "aa_omniscience_index",
      "familyId": "aa",
      "title": "AA Omniscience Index",
      "category": "aa_omniscience_index",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "omniscienceIndex",
      "unit": "score",
      "comparisonKey": "aa_omniscience_index",
      "snapshotId": "890ac28813eaa336b72a7c06063388f35ac831947b03d5a1fa928af22a625726",
      "contentHash": "890ac28813eaa336b72a7c06063388f35ac831947b03d5a1fa928af22a625726",
      "generatedAt": "2026-10-24T08:04:10Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis AA Omniscience Index official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/omniscience",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          46.42,
          null,
          "max with fallback"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          43.45,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          43.4,
          null,
          "max"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          42.35,
          null,
          "high"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          41.53,
          null,
          "max"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          32.3,
          null,
          "max with fallback"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          32.03,
          null,
          "xhigh"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          30.15,
          null,
          "max"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          29.55,
          null,
          "high"
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          29.52,
          null,
          null
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          25.48,
          null,
          "max"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          24.65,
          null,
          "xhigh"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          16.38,
          null,
          null
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          15.55,
          null,
          null
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          14.3,
          null,
          "max"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          11.98,
          null,
          null
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          10.67,
          null,
          "max"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          8.38,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          7.47,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          4.7,
          null,
          "max"
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          2.0,
          null,
          "xhigh"
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          1.5,
          null,
          null
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.65,
          null,
          "max"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          -2.97,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          -4.22,
          null,
          null
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          -5.3,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          -9.98,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_critpt": {
      "rankingId": "aa_critpt",
      "benchmarkId": "critpt",
      "familyId": "aa",
      "title": "CritPt",
      "category": "critpt",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "CritPt: Score",
      "unit": "ratio",
      "comparisonKey": "critpt",
      "snapshotId": "bcd6bcb75bb008de212b3e84b5ca43a963500f11d423155244f69270f3406f6d",
      "contentHash": "bcd6bcb75bb008de212b3e84b5ca43a963500f11d423155244f69270f3406f6d",
      "generatedAt": "2026-10-24T08:04:08Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis CritPt official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/critpt",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          0.3286,
          null,
          "max"
        ],
        [
          "GPT-5.6 Sol (Max)",
          "GPT-5.6 Sol",
          0.3229,
          null,
          "max"
        ],
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.3171,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.3171,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.3171,
          null,
          "max"
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.3143,
          null,
          "max with fallback"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.2971,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.2829,
          null,
          "max"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.2714,
          null,
          "high"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.2657,
          null,
          null
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.2457,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.24,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.2229,
          null,
          null
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.2086,
          null,
          null
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.1943,
          null,
          "max"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.1914,
          null,
          "max"
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.1886,
          null,
          "max"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.1829,
          null,
          "high"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.1771,
          null,
          "xhigh"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.1771,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.1543,
          null,
          null
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.1486,
          null,
          "xhigh"
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.1314,
          null,
          null
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.1057,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.1057,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.0543,
          null,
          "xhigh"
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.0543,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.0457,
          null,
          null
        ]
      ]
    },
    "aa_gdpval_elo": {
      "rankingId": "aa_gdpval_elo",
      "benchmarkId": "gdpval_aa_elo",
      "familyId": "aa",
      "title": "GDPval-AA Elo",
      "category": "gdpval_aa_elo",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "gdpvalAaElo",
      "unit": "raw",
      "comparisonKey": "gdpval_aa_elo",
      "snapshotId": "e286acf109951614479ccf747d0da70d853a1e718e2ce357da7628c75b32fabe",
      "contentHash": "e286acf109951614479ccf747d0da70d853a1e718e2ce357da7628c75b32fabe",
      "generatedAt": "2026-10-24T08:04:22Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis GDPval-AA Elo official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          1866.27,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder Full (Max)",
          "Muse Wonder Full",
          1857.09,
          null,
          "max"
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          1845.72,
          null,
          null
        ],
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          1837.82,
          null,
          "max with fallback"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          1770.34,
          null,
          "max"
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          1754.56,
          null,
          "max with fallback"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          1745.77,
          null,
          "max"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          1713.96,
          null,
          "xhigh"
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          1683.02,
          null,
          null
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          1666.26,
          null,
          null
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          1649.45,
          null,
          "max"
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          1642.18,
          null,
          null
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          1624.1,
          null,
          "high"
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          1619.32,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          1596.2,
          null,
          "max"
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          1586.76,
          null,
          null
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          1574.46,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          1457.69,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          1436.35,
          null,
          "high"
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          1432.79,
          null,
          "max"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          1421.88,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          1418.98,
          null,
          "xhigh"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          1401.12,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          1358.46,
          null,
          null
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          1177.08,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          1162.41,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          1071.98,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_terminalbench_hard": {
      "rankingId": "aa_terminalbench_hard",
      "benchmarkId": "terminalbench_hard",
      "familyId": "aa",
      "title": "Terminal-Bench Hard",
      "category": "terminalbench_hard",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Terminal-Bench Hard: Score",
      "unit": "ratio",
      "comparisonKey": "terminalbench_hard",
      "snapshotId": "1ebc2774d4025296163d9882524875ea5466182d60ecfe851501c6f094cea57a",
      "contentHash": "1ebc2774d4025296163d9882524875ea5466182d60ecfe851501c6f094cea57a",
      "generatedAt": "2026-10-24T08:05:06Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "GPT-5.6 Sol (Max)",
          "GPT-5.6 Sol",
          0.6591,
          null,
          "max"
        ],
        [
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          0.6288,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (Xhigh)",
          "GPT-5.6 Terra",
          0.6288,
          null,
          "xhigh"
        ],
        [
          "GPT-5.5 (Xhigh)",
          "GPT-5.5",
          0.6061,
          null,
          "xhigh"
        ],
        [
          "Claude Opus 4.8 (Max)",
          "Claude Opus 4.8",
          0.5833,
          null,
          "max"
        ],
        [
          "GPT-5.4 (Xhigh)",
          "GPT-5.4",
          0.5758,
          null,
          "xhigh"
        ],
        [
          "Claude Opus 4.7 (Non-reasoning, High)",
          "Claude Opus 4.7 (Non-reasoning, High)",
          0.5455,
          null,
          null
        ],
        [
          "Gemini 3.1 Pro Preview",
          "Gemini 3.1 Pro Preview",
          0.5379,
          null,
          null
        ],
        [
          "GPT-5.3 Codex (Xhigh)",
          "GPT-5.3 Codex",
          0.5303,
          null,
          "xhigh"
        ],
        [
          "Claude Sonnet 4.6 (Max)",
          "Claude Sonnet 4.6",
          0.5303,
          null,
          "max"
        ],
        [
          "GPT-5.4 mini (Xhigh)",
          "GPT-5.4 mini",
          0.5227,
          null,
          "xhigh"
        ],
        [
          "GLM-5.2 (Max)",
          "GLM-5.2",
          0.5076,
          null,
          "max"
        ],
        [
          "Qwen3.7 Max",
          "Qwen3.7 Max",
          0.5076,
          null,
          null
        ],
        [
          "KAT Coder Pro V2",
          "KAT Coder Pro V2",
          0.4924,
          null,
          null
        ],
        [
          "Claude Opus 4.6 (Non-reasoning, High)",
          "Claude Opus 4.6 (Non-reasoning, High)",
          0.4848,
          null,
          null
        ],
        [
          "GPT-5.2 (Xhigh)",
          "GPT-5.2",
          0.4697,
          null,
          "xhigh"
        ],
        [
          "Claude Opus 4.5 (Reasoning)",
          "Claude Opus 4.5 (Reasoning)",
          0.4697,
          null,
          null
        ],
        [
          "Qwen3.7 Plus",
          "Qwen3.7 Plus",
          0.4697,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0424 (Max)",
          "DeepSeek V4 Pro 0424",
          0.4621,
          null,
          "max"
        ],
        [
          "Gemini 3.5 Flash (Minimal)",
          "Gemini 3.5 Flash",
          0.4621,
          null,
          "minimal"
        ],
        [
          "Muse Spark",
          "Muse Spark",
          0.4545,
          null,
          null
        ],
        [
          "GPT-5.1 (High)",
          "GPT-5.1",
          0.4545,
          null,
          "high"
        ],
        [
          "Kimi K2.7 Code",
          "Kimi K2.7 Code",
          0.447,
          null,
          null
        ],
        [
          "Qwen3.6 Max Preview",
          "Qwen3.6 Max Preview",
          0.4394,
          null,
          null
        ],
        [
          "Qwen3.6 Plus",
          "Qwen3.6 Plus",
          0.4394,
          null,
          null
        ],
        [
          "Kimi K2.6 (Reasoning)",
          "Kimi K2.6 (Reasoning)",
          0.4394,
          null,
          null
        ],
        [
          "GLM-5 (Reasoning)",
          "GLM-5 (Reasoning)",
          0.4318,
          null,
          null
        ]
      ]
    },
    "aa_terminalbench_v2_1": {
      "rankingId": "aa_terminalbench_v2_1",
      "benchmarkId": "terminalbench_v2_1",
      "familyId": "aa",
      "title": "Terminal-Bench v2.1",
      "category": "terminalbench_v2_1",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Terminal-Bench 2.1: Score",
      "unit": "ratio",
      "comparisonKey": "terminalbench_v2_1",
      "snapshotId": "cebae69c89b6d8d26d86c9a914269c51f43e3653d2ec58a1aab1a0b833be6d49",
      "contentHash": "cebae69c89b6d8d26d86c9a914269c51f43e3653d2ec58a1aab1a0b833be6d49",
      "generatedAt": "2026-10-24T08:05:05Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.9139,
          null,
          "max with fallback"
        ],
        [
          "GPT-5.6 Sol (Xhigh)",
          "GPT-5.6 Sol",
          0.8951,
          null,
          "xhigh"
        ],
        [
          "Claude Opus 5 (Max)",
          "Claude Opus 5",
          0.8914,
          null,
          "max"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.8876,
          null,
          null
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.8839,
          null,
          "max"
        ],
        [
          "Grok 4.6 (High)",
          "Grok 4.6",
          0.8839,
          null,
          "high"
        ],
        [
          "GPT-5.6 Terra (Max)",
          "GPT-5.6 Terra",
          0.8801,
          null,
          "max"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.8764,
          null,
          "high"
        ],
        [
          "Qwen3.8-Flash-Next",
          "Qwen3.8-Flash-Next",
          0.8614,
          null,
          null
        ],
        [
          "Gemini 3.7 Flash (High)",
          "Gemini 3.7 Flash",
          0.8577,
          null,
          "high"
        ],
        [
          "Muse Spark 1.3 (Xhigh)",
          "Muse Spark 1.3",
          0.8539,
          null,
          "xhigh"
        ],
        [
          "Kimi K3 (Max)",
          "Kimi K3",
          0.8502,
          null,
          "max"
        ],
        [
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          "Claude Fable 5 (Max, Opus 4.8 Fallback)",
          0.8464,
          null,
          null
        ],
        [
          "Claude Opus 4.8 (Max)",
          "Claude Opus 4.8",
          0.8464,
          null,
          "max"
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.8427,
          null,
          null
        ],
        [
          "GPT-5.5 (Xhigh)",
          "GPT-5.5",
          0.8427,
          null,
          "xhigh"
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.839,
          null,
          "max"
        ],
        [
          "Claude Opus 4.7 (Max)",
          "Claude Opus 4.7",
          0.8315,
          null,
          "max"
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.8202,
          null,
          null
        ],
        [
          "Grok 4.5 (High)",
          "Grok 4.5",
          0.8165,
          null,
          "high"
        ],
        [
          "Qwen3.8 Max",
          "Qwen3.8 Max",
          0.8127,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (Max)",
          "GPT-5.6 Luna",
          0.809,
          null,
          "max"
        ],
        [
          "Claude Sonnet 5 (Max)",
          "Claude Sonnet 5",
          0.8052,
          null,
          "max"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.7978,
          null,
          "xhigh"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.764,
          null,
          "xhigh"
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.7191,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.5506,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_ifbench": {
      "rankingId": "aa_ifbench",
      "benchmarkId": "ifbench",
      "familyId": "aa",
      "title": "IFBench",
      "category": "ifbench",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "IFBench: Score",
      "unit": "ratio",
      "comparisonKey": "ifbench",
      "snapshotId": "9c84e46a9d6826d11d55d818c7c7130e6c7973e28ef5207321450e8bc28b08ac",
      "contentHash": "9c84e46a9d6826d11d55d818c7c7130e6c7973e28ef5207321450e8bc28b08ac",
      "generatedAt": "2026-10-24T08:04:24Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis IFBench official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/ifbench",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Grok 4.3 (Medium)",
          "Grok 4.3",
          0.8333,
          null,
          "medium"
        ],
        [
          "Grok 4.20 0309 (Reasoning)",
          "Grok 4.20 0309 (Reasoning)",
          0.8293,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.8286,
          null,
          null
        ],
        [
          "Nemotron 3 Ultra 550B A55B (Reasoning)",
          "Nemotron 3 Ultra 550B A55B (Reasoning)",
          0.8136,
          null,
          null
        ],
        [
          "Grok 4.20 0309 v2 (Reasoning)",
          "Grok 4.20 0309 v2 (Reasoning)",
          0.8122,
          null,
          null
        ],
        [
          "Qwen3.7 Max",
          "Qwen3.7 Max",
          0.8054,
          null,
          null
        ],
        [
          "Nemotron Cascade 2 30B A3B",
          "Nemotron Cascade 2 30B A3B",
          0.8041,
          null,
          null
        ],
        [
          "MiMo-V2.5-Pro (Reasoning)",
          "MiMo-V2.5-Pro (Reasoning)",
          0.7986,
          null,
          null
        ],
        [
          "Nova 2.0 Pro Preview (Low)",
          "Nova 2.0 Pro Preview",
          0.7959,
          null,
          "low"
        ],
        [
          "DeepSeek V4 Flash 0420 (Max)",
          "DeepSeek V4 Flash 0420",
          0.7918,
          null,
          "max"
        ],
        [
          "Qwen3.5 397B A17B (Reasoning)",
          "Qwen3.5 397B A17B (Reasoning)",
          0.7878,
          null,
          null
        ],
        [
          "Gemini 3 Flash Preview (Reasoning)",
          "Gemini 3 Flash Preview (Reasoning)",
          0.7796,
          null,
          null
        ],
        [
          "Qwen3.7 Plus",
          "Qwen3.7 Plus",
          0.7796,
          null,
          null
        ],
        [
          "GPT-5.2 Codex (Xhigh)",
          "GPT-5.2 Codex",
          0.7762,
          null,
          "xhigh"
        ],
        [
          "Gemini 3.1 Flash-Lite",
          "Gemini 3.1 Flash-Lite",
          0.7721,
          null,
          null
        ],
        [
          "Gemini 3.1 Pro Preview",
          "Gemini 3.1 Pro Preview",
          0.7714,
          null,
          null
        ],
        [
          "Qwen3.6 Max Preview",
          "Qwen3.6 Max Preview",
          0.766,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0424 (Max)",
          "DeepSeek V4 Pro 0424",
          0.7646,
          null,
          "max"
        ],
        [
          "Gemini 3.5 Flash (High)",
          "Gemini 3.5 Flash",
          0.7633,
          null,
          "high"
        ],
        [
          "GLM-5.1 (Reasoning)",
          "GLM-5.1 (Reasoning)",
          0.7626,
          null,
          null
        ],
        [
          "Kimi K2.6 (Reasoning)",
          "Kimi K2.6 (Reasoning)",
          0.7599,
          null,
          null
        ],
        [
          "Muse Spark",
          "Muse Spark",
          0.7592,
          null,
          null
        ],
        [
          "GPT-5.4 nano (Xhigh)",
          "GPT-5.4 nano",
          0.7592,
          null,
          "xhigh"
        ],
        [
          "GPT-5.5 (Xhigh)",
          "GPT-5.5",
          0.7585,
          null,
          "xhigh"
        ],
        [
          "MiniMax-M2.7",
          "MiniMax-M2.7",
          0.7571,
          null,
          null
        ],
        [
          "Qwen3.5 122B A10B (Reasoning)",
          "Qwen3.5 122B A10B (Reasoning)",
          0.7571,
          null,
          null
        ],
        [
          "Qwen3.5 27B (Reasoning)",
          "Qwen3.5 27B (Reasoning)",
          0.7558,
          null,
          null
        ]
      ]
    },
    "aa_mmmu_pro": {
      "rankingId": "aa_mmmu_pro",
      "benchmarkId": "mmmu_pro",
      "familyId": "aa",
      "title": "MMMU-Pro",
      "category": "mmmu_pro",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "MMMU-Pro: Score",
      "unit": "ratio",
      "comparisonKey": "mmmu_pro",
      "snapshotId": "301adc20fdb98c5770d35d57681314797cfccefd89c743f28bc142a0b2e0910f",
      "contentHash": "301adc20fdb98c5770d35d57681314797cfccefd89c743f28bc142a0b2e0910f",
      "generatedAt": "2026-10-24T08:04:54Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis MMMU-Pro official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.8769,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.8688,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.8595,
          null,
          "max"
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.8561,
          null,
          "high"
        ],
        [
          "Gemini 3.7 Flash (High)",
          "Gemini 3.7 Flash",
          0.8549,
          null,
          "high"
        ],
        [
          "Claude Opus 5 (Max)",
          "Claude Opus 5",
          0.8474,
          null,
          "max"
        ],
        [
          "Gemini 3.5 Flash (High)",
          "Gemini 3.5 Flash",
          0.8428,
          null,
          "high"
        ],
        [
          "Kimi K3.1 Pro",
          "Kimi K3.1 Pro",
          0.8387,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (Max)",
          "GPT-5.6 Sol",
          0.8341,
          null,
          "max"
        ],
        [
          "Gemini 3.6 Flash (High)",
          "Gemini 3.6 Flash",
          0.8324,
          null,
          "high"
        ],
        [
          "GPT-6 Sol (Max)",
          "GPT-6 Sol",
          0.8295,
          null,
          "max"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.8277,
          null,
          null
        ],
        [
          "Gemini 3.1 Pro Preview",
          "Gemini 3.1 Pro Preview",
          0.8243,
          null,
          null
        ],
        [
          "Qwen3.8 Max",
          "Qwen3.8 Max",
          0.8231,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (Xhigh)",
          "Muse Spark 1.3",
          0.8202,
          null,
          "xhigh"
        ],
        [
          "GPT-5.5 (Medium)",
          "GPT-5.5",
          0.8116,
          null,
          "medium"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.8092,
          null,
          "xhigh"
        ],
        [
          "GPT-5.6 Terra (Max)",
          "GPT-5.6 Terra",
          0.8069,
          null,
          "max"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.8064,
          null,
          "max"
        ],
        [
          "Kimi K3 (Max)",
          "Kimi K3",
          0.8052,
          null,
          "max"
        ],
        [
          "Muse Spark",
          "Muse Spark",
          0.8052,
          null,
          null
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.7965,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.7913,
          null,
          null
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.7642,
          null,
          null
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.7636,
          null,
          null
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.763,
          null,
          "xhigh"
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.7347,
          null,
          "xhigh"
        ]
      ]
    },
    "aa_openness_index": {
      "rankingId": "aa_openness_index",
      "benchmarkId": "artificial_analysis_openness_index",
      "familyId": "aa",
      "title": "Artificial Analysis Openness Index",
      "category": "artificial_analysis_openness_index",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "Artificial Analysis Openness Index: Score",
      "unit": "score",
      "comparisonKey": "artificial_analysis_openness_index",
      "snapshotId": "3c30c037e3a944f988f22cc32f117188ca753321985ddacad76cfe801c16bdc2",
      "contentHash": "3c30c037e3a944f988f22cc32f117188ca753321985ddacad76cfe801c16bdc2",
      "generatedAt": "2026-10-24T08:04:08Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Artificial Analysis Openness Index official Data API",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-openness-index",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "K2 Think V2",
          "K2 Think V2",
          88.89,
          null,
          null
        ],
        [
          "K2-V2 (High)",
          "K2-V2",
          88.89,
          null,
          "high"
        ],
        [
          "K2-V2 (Medium)",
          "K2-V2",
          88.89,
          null,
          "medium"
        ],
        [
          "K2-V2 (Low)",
          "K2-V2",
          88.89,
          null,
          "low"
        ],
        [
          "Olmo 3.1 32B Think",
          "Olmo 3.1 32B Think",
          88.89,
          null,
          null
        ],
        [
          "Olmo 3.1 32B Instruct",
          "Olmo 3.1 32B Instruct",
          88.89,
          null,
          null
        ],
        [
          "Olmo 3 7B Think",
          "Olmo 3 7B Think",
          88.89,
          null,
          null
        ],
        [
          "Molmo 7B-D",
          "Molmo 7B-D",
          88.89,
          null,
          null
        ],
        [
          "Olmo 3 7B Instruct",
          "Olmo 3 7B Instruct",
          88.89,
          null,
          null
        ],
        [
          "Apertus 70B Instruct",
          "Apertus 70B Instruct",
          88.89,
          null,
          null
        ],
        [
          "Apertus 8B Instruct",
          "Apertus 8B Instruct",
          88.89,
          null,
          null
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          83.33,
          null,
          null
        ],
        [
          "Nemotron 3 Ultra 550B A55B (Reasoning)",
          "Nemotron 3 Ultra 550B A55B (Reasoning)",
          83.33,
          null,
          null
        ],
        [
          "Nemotron 3.5 Lightning",
          "Nemotron 3.5 Lightning",
          83.33,
          null,
          null
        ],
        [
          "Nemotron Cascade 2 30B A3B",
          "Nemotron Cascade 2 30B A3B",
          83.33,
          null,
          null
        ],
        [
          "NVIDIA Nemotron 3 Nano 30B A3B (Reasoning)",
          "NVIDIA Nemotron 3 Nano 30B A3B (Reasoning)",
          83.33,
          null,
          null
        ],
        [
          "MiniCPM5-1B (Reasoning)",
          "MiniCPM5-1B (Reasoning)",
          83.33,
          null,
          null
        ],
        [
          "MiniCPM5-1B (Non-reasoning)",
          "MiniCPM5-1B (Non-reasoning)",
          83.33,
          null,
          null
        ],
        [
          "NVIDIA Nemotron 3 Nano 30B A3B (Non-reasoning)",
          "NVIDIA Nemotron 3 Nano 30B A3B (Non-reasoning)",
          83.33,
          null,
          null
        ],
        [
          "NVIDIA Nemotron 3 Nano 4B",
          "NVIDIA Nemotron 3 Nano 4B",
          83.33,
          null,
          null
        ],
        [
          "Nemotron 3.5 Bolt 74B-A9B",
          "Nemotron 3.5 Bolt 74B-A9B",
          72.22,
          null,
          null
        ],
        [
          "Granite 4.2 30B",
          "Granite 4.2 30B",
          72.22,
          null,
          null
        ],
        [
          "Granite 4.2 8B",
          "Granite 4.2 8B",
          72.22,
          null,
          null
        ],
        [
          "INTELLECT-3 (Based on GLM-4.5-Air)",
          "INTELLECT-3 (Based on GLM-4.5-Air)",
          72.22,
          null,
          null
        ],
        [
          "Granite 4.2 3B",
          "Granite 4.2 3B",
          72.22,
          null,
          null
        ]
      ]
    },
    "aa_mlcr_overall": {
      "rankingId": "aa_mlcr_overall",
      "benchmarkId": "mlcr_overall",
      "familyId": "aa",
      "title": "MLCR Overall",
      "category": "mlcr_overall",
      "release": "page_jsonld",
      "releaseId": "page_jsonld",
      "metric": "MLCR-AA",
      "unit": "ratio",
      "comparisonKey": "mlcr_overall",
      "snapshotId": "4a148c5dd986e6e9effbcd529d348f6002dd9c005047631204e18cff1579699e",
      "contentHash": "4a148c5dd986e6e9effbcd529d348f6002dd9c005047631204e18cff1579699e",
      "generatedAt": "2026-10-24T08:04:52Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis MLCR Overall official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Sonnet 5.5 (Max, Default Fallback)",
          "Claude Sonnet 5.5",
          0.4167,
          null,
          "max with fallback"
        ],
        [
          "GPT-6 Astra (Max)",
          "GPT-6 Astra",
          0.4167,
          null,
          "max"
        ],
        [
          "GPT-6.1 Sol (Max)",
          "GPT-6.1 Sol",
          0.3833,
          null,
          "max"
        ],
        [
          "Claude Haiku 5.5 (Max)",
          "Claude Haiku 5.5",
          0.35,
          null,
          "max"
        ],
        [
          "GPT-6 Sol (Max)",
          "GPT-6 Sol",
          0.3389,
          null,
          "max"
        ],
        [
          "GPT-5.5 Instant (June 2026)",
          "GPT-5.5 Instant (June 2026)",
          0.3167,
          null,
          null
        ],
        [
          "Claude Opus 5.5 (Max, Default Fallback)",
          "Claude Opus 5.5",
          0.2778,
          null,
          "max with fallback"
        ],
        [
          "DeepSeek V4.1 Flash 1017 (Max)",
          "DeepSeek V4.1 Flash 1017",
          0.2667,
          null,
          "max"
        ],
        [
          "GPT-6 Luna (Max)",
          "GPT-6 Luna",
          0.2611,
          null,
          "max"
        ],
        [
          "Qwen3.8 27B (Xhigh)",
          "Qwen3.8 27B",
          0.2278,
          null,
          "xhigh"
        ],
        [
          "Muse Wonder (Max)",
          "Muse Wonder",
          0.2222,
          null,
          "max"
        ],
        [
          "Grok 4.7 (Xhigh)",
          "Grok 4.7",
          0.2,
          null,
          "xhigh"
        ],
        [
          "Qwen3.8 Max (0902)",
          "Qwen3.8 Max (0902)",
          0.2,
          null,
          null
        ],
        [
          "Step 5 Preview",
          "Step 5 Preview",
          0.1833,
          null,
          null
        ],
        [
          "Beam 1.0",
          "Beam 1.0",
          0.1778,
          null,
          null
        ],
        [
          "GLM-5.3 (Max)",
          "GLM-5.3",
          0.1722,
          null,
          "max"
        ],
        [
          "MiniMax-M3.1-Flash",
          "MiniMax-M3.1-Flash",
          0.1667,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (Max, Default Fallback)",
          "Claude Fable 5.1",
          0.1556,
          null,
          "max with fallback"
        ],
        [
          "Gemini 4 Argon (High)",
          "Gemini 4 Argon",
          0.1389,
          null,
          "high"
        ],
        [
          "Nemotron 3.5 Super VL",
          "Nemotron 3.5 Super VL",
          0.1333,
          null,
          null
        ],
        [
          "MiMo-V2.6-Pro",
          "MiMo-V2.6-Pro",
          0.1278,
          null,
          null
        ],
        [
          "K2 Horizon 375B A23B",
          "K2 Horizon 375B A23B",
          0.1222,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.1167,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (High)",
          "Gemini 3.8 Flash",
          0.1056,
          null,
          "high"
        ],
        [
          "Muse Spark Open (Xhigh)",
          "Muse Spark Open",
          0.0778,
          null,
          "xhigh"
        ],
        [
          "Mistral Large 4 Preview",
          "Mistral Large 4 Preview",
          0.0778,
          null,
          null
        ],
        [
          "Inkling (Xhigh)",
          "Inkling",
          0.0611,
          null,
          "xhigh"
        ]
      ]
    },
    "deepswe_v1_1": {
      "rankingId": "deepswe_v1_1",
      "benchmarkId": "deepswe_v1_1",
      "familyId": "deepswe",
      "title": "DeepSWE v1.1",
      "category": "software_engineering_agent",
      "release": "unknown",
      "releaseId": "unknown",
      "metric": "pass_rate",
      "unit": "ratio",
      "comparisonKey": "v1.1",
      "snapshotId": "a7c15d66288fd249c020b9931c017b92d1a3b90e480b3ff34974b752bd030019",
      "contentHash": "a7c15d66288fd249c020b9931c017b92d1a3b90e480b3ff34974b752bd030019",
      "generatedAt": "2026-10-24T08:04:12Z",
      "taskCount": null,
      "source": {
        "name": "DeepSWE v1.1 official leaderboard JSON",
        "type": "official_json",
        "url": "https://deepswe.datacurve.ai/data/v1.1",
        "evidenceUrl": "https://deepswe.datacurve.ai/data/v1.1",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "mini_swe_agent_gpt_6_astra_xhigh",
          "gpt-6-astra",
          0.7412,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_gemini_3_8_flash_high",
          "gemini-3-8-flash",
          0.7383,
          null,
          "high"
        ],
        [
          "mini_swe_agent_claude_opus_5_max",
          "claude-opus-5",
          0.7365,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gpt_6_astra_high",
          "gpt-6-astra",
          0.7323,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_6_astra_max",
          "gpt-6-astra",
          0.7323,
          null,
          "max"
        ],
        [
          "mini_swe_agent_claude_opus_5_xhigh",
          "claude-opus-5",
          0.7315,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_opus_5_high",
          "claude-opus-5",
          0.7283,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_6_astra_medium",
          "gpt-6-astra",
          0.7279,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gpt_5_6_sol_max",
          "gpt-5-6-sol",
          0.7267,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gemini_3_8_flash_medium",
          "gemini-3-8-flash",
          0.7102,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gpt_5_6_sol_xhigh",
          "gpt-5-6-sol",
          0.7073,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_fable_5_xhigh",
          "claude-fable-5",
          0.6991,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_fable_5_max",
          "claude-fable-5",
          0.6972,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gpt_5_6_terra_max",
          "gpt-5-6-terra",
          0.6962,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gpt_5_6_sol_high",
          "gpt-5-6-sol",
          0.694,
          null,
          "high"
        ],
        [
          "mini_swe_agent_glm_5_3_max",
          "glm-5-3",
          0.6896,
          null,
          "max"
        ],
        [
          "mini_swe_agent_claude_opus_5_medium",
          "claude-opus-5",
          0.689,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_claude_fable_5_high",
          "claude-fable-5",
          0.686,
          null,
          "high"
        ],
        [
          "mini_swe_agent_kimi_k3_max",
          "kimi-k3",
          0.6851,
          null,
          "max"
        ],
        [
          "mini_swe_agent_grok_4_6_medium",
          "grok-4-6",
          0.6748,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gpt_5_6_luna_max",
          "gpt-5-6-luna",
          0.6719,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gpt_5_5_xhigh",
          "gpt-5-5",
          0.6704,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_gpt_6_astra_low",
          "gpt-6-astra",
          0.6704,
          null,
          "low"
        ],
        [
          "mini_swe_agent_grok_4_6_xhigh",
          "grok-4-6",
          0.6674,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_gemini_3_7_flash_medium",
          "gemini-3-7-flash",
          0.6549,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_claude_fable_5_medium",
          "claude-fable-5",
          0.6537,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gemini_3_7_flash_high",
          "gemini-3-7-flash",
          0.6527,
          null,
          "high"
        ],
        [
          "mini_swe_agent_grok_4_6_high",
          "grok-4-6",
          0.6519,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_5_high",
          "gpt-5-5",
          0.6438,
          null,
          "high"
        ],
        [
          "mini_swe_agent_glm_5_3_flash_max",
          "glm-5-3-flash",
          0.6339,
          null,
          "max"
        ],
        [
          "mini_swe_agent_deepseek_v4_pro_max",
          "deepseek-v4-pro",
          0.6283,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gpt_5_6_sol_medium",
          "gpt-5-6-sol",
          0.6106,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gpt_5_6_terra_xhigh",
          "gpt-5-6-terra",
          0.6018,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_fable_5_low",
          "claude-fable-5",
          0.5958,
          null,
          "low"
        ],
        [
          "mini_swe_agent_claude_opus_4_8_max",
          "claude-opus-4-8",
          0.5897,
          null,
          "max"
        ],
        [
          "mini_swe_agent_claude_opus_5_low",
          "claude-opus-5",
          0.5813,
          null,
          "low"
        ],
        [
          "mini_swe_agent_qwen3_8_max_xhigh",
          "qwen3-8-max",
          0.5746,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_gpt_5_6_luna_xhigh",
          "gpt-5-6-luna",
          0.5686,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_muse_spark_1_2_xhigh",
          "muse-spark-1-2",
          0.5487,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_opus_4_8_xhigh",
          "claude-opus-4-8",
          0.5436,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_gpt_5_5_medium",
          "gpt-5-5",
          0.5398,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_claude_sonnet_5_max",
          "claude-sonnet-5",
          0.5385,
          null,
          "max"
        ],
        [
          "mini_swe_agent_gemini_3_7_flash_low",
          "gemini-3-7-flash",
          0.5376,
          null,
          "low"
        ],
        [
          "mini_swe_agent_gpt_5_6_terra_high",
          "gpt-5-6-terra",
          0.5376,
          null,
          "high"
        ],
        [
          "mini_swe_agent_grok_4_5_high",
          "grok-4-5",
          0.5376,
          null,
          "high"
        ],
        [
          "mini_swe_agent_deepseek_v4_flash_max",
          "deepseek-v4-flash",
          0.5332,
          null,
          "max"
        ],
        [
          "mini_swe_agent_muse_spark_1_1_xhigh",
          "muse-spark-1-1",
          0.5332,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_opus_4_8_high",
          "claude-opus-4-8",
          0.5177,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_4_xhigh",
          "gpt-5-4",
          0.5177,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_sonnet_5_xhigh",
          "claude-sonnet-5",
          0.4967,
          null,
          "xhigh"
        ],
        [
          "mini_swe_agent_claude_opus_4_8_medium",
          "claude-opus-4-8",
          0.4867,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_claude_sonnet_5_high",
          "claude-sonnet-5",
          0.4823,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gemini_3_6_flash_high",
          "gemini-3-6-flash",
          0.4668,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_6_sol_low",
          "gpt-5-6-sol",
          0.4535,
          null,
          "low"
        ],
        [
          "mini_swe_agent_gpt_5_6_luna_high",
          "gpt-5-6-luna",
          0.4425,
          null,
          "high"
        ],
        [
          "mini_swe_agent_glm_5_2_max",
          "glm-5-2",
          0.4378,
          null,
          "max"
        ],
        [
          "mini_swe_agent_grok_4_6_low",
          "grok-4-6",
          0.4165,
          null,
          "low"
        ],
        [
          "mini_swe_agent_claude_opus_4_8_low",
          "claude-opus-4-8",
          0.408,
          null,
          "low"
        ],
        [
          "mini_swe_agent_claude_sonnet_5_medium",
          "claude-sonnet-5",
          0.3978,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_glm_5_2_high",
          "glm-5-2",
          0.3628,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gemini_3_5_flash_high",
          "gemini-3-5-flash",
          0.3606,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_6_terra_medium",
          "gpt-5-6-terra",
          0.3511,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_kimi_k2_7_code_default",
          "kimi-k2-7-code",
          0.3053,
          null,
          null
        ],
        [
          "mini_swe_agent_claude_sonnet_5_low",
          "claude-sonnet-5",
          0.3051,
          null,
          "low"
        ],
        [
          "mini_swe_agent_claude_sonnet_4_6_high",
          "claude-sonnet-4-6",
          0.2993,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_5_low",
          "gpt-5-5",
          0.2699,
          null,
          "low"
        ],
        [
          "mini_swe_agent_gpt_5_6_terra_low",
          "gpt-5-6-terra",
          0.2405,
          null,
          "low"
        ],
        [
          "mini_swe_agent_gemini_3_1_pro_preview_high",
          "gemini-3-1-pro-preview",
          0.1173,
          null,
          "high"
        ],
        [
          "mini_swe_agent_gpt_5_6_luna_medium",
          "gpt-5-6-luna",
          0.1128,
          null,
          "medium"
        ],
        [
          "mini_swe_agent_gpt_5_6_luna_low",
          "gpt-5-6-luna",
          0.0155,
          null,
          "low"
        ]
      ]
    }
  }
}
