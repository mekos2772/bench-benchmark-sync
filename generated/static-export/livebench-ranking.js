module.exports = {
  "schemaVersion": 3,
  "dataSource": "benchmark-sync-static",
  "exporterVersion": "0.4.0",
  "workflowRunId": "34747222564",
  "mainCommit": "5af77335861c988e49ffedab00beb80a233fedf5",
  "generatedAt": "2026-09-13T08:16:32Z",
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
          "modelCount": 57
        },
        {
          "id": "livebench_coding",
          "title": "LiveBench Coding",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_reasoning",
          "title": "LiveBench Reasoning",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_math",
          "title": "LiveBench Math",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_data_analysis",
          "title": "LiveBench Data Analysis",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_language",
          "title": "LiveBench Language",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_instruction_following",
          "title": "LiveBench Instruction Following",
          "isOverall": false,
          "modelCount": 57
        },
        {
          "id": "livebench_agentic_coding",
          "title": "LiveBench Agentic Coding",
          "isOverall": false,
          "modelCount": 57
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
          "modelCount": 20
        },
        {
          "id": "aa_terminal_bench_v4_0",
          "title": "Terminal-Bench 4.0",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_humanitys_last_exam",
          "title": "Humanity's Last Exam",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_gpqa_diamond",
          "title": "GPQA Diamond",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_scicode",
          "title": "SciCode",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_lcr",
          "title": "AA LCR",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_omniscience_index",
          "title": "AA Omniscience Index",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_critpt",
          "title": "CritPt",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_gdpval_elo",
          "title": "GDPval-AA Elo",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_terminalbench_hard",
          "title": "Terminal-Bench Hard",
          "isOverall": false,
          "modelCount": 12
        },
        {
          "id": "aa_terminalbench_v2_1",
          "title": "Terminal-Bench v2.1",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_ifbench",
          "title": "IFBench",
          "isOverall": false,
          "modelCount": 12
        },
        {
          "id": "aa_mmmu_pro",
          "title": "MMMU-Pro",
          "isOverall": false,
          "modelCount": 19
        },
        {
          "id": "aa_openness_index",
          "title": "Artificial Analysis Openness Index",
          "isOverall": false,
          "modelCount": 20
        },
        {
          "id": "aa_mlcr_overall",
          "title": "MLCR Overall",
          "isOverall": false,
          "modelCount": 20
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
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "global_average",
      "unit": "score",
      "comparisonKey": "live_bench",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:06Z",
      "taskCount": 23,
      "source": {
        "name": "LiveBench dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          83.41,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          82.97,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          82.16,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          81.59,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          81.11,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          81.05,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          80.19,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          80.08,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          79.51,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          79.19,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          78.83,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          78.46,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          78.04,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          77.97,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          77.95,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          77.94,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          77.44,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          77.44,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          76.95,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          76.93,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          76.76,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          76.53,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          76.22,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          76.19,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          76.14,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          76.04,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          75.83,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          75.77,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          75.3,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          75.27,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          74.64,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          74.63,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          74.52,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          74.17,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          73.98,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          73.59,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          73.56,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          73.16,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          73.14,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          72.99,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          72.58,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          71.92,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          71.59,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          71.57,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          70.54,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          69.58,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          69.24,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          68.91,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          68.41,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          67.78,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          67.36,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          67.26,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          66.37,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          65.48,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          64.03,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          63.94,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          62.25,
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
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "coding",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:15:53Z",
      "taskCount": 2,
      "source": {
        "name": "LiveBench Coding dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          86.38,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          85.99,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          83.94,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          83.62,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          82.91,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          82.47,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          82.15,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          82.09,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          81.83,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          81.45,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          81.45,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          81.06,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          80.68,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          80.36,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          80.04,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          79.65,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          79.65,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          79.27,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          78.95,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          78.95,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          78.89,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          78.57,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          78.25,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          78.18,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          78.18,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          78.18,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          77.86,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          77.54,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          77.54,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          77.16,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          77.16,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          77.1,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          76.78,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          76.45,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          76.07,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          76.07,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          75.75,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          75.69,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          75.43,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          74.98,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          74.22,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          73.96,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          72.87,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          72.55,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          72.49,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          71.78,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          71.62,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          71.02,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          70.84,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          70.7,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          69.99,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          69.93,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          69.23,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          68.59,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          68.2,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          68.2,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          65.39,
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
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "reasoning",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:09Z",
      "taskCount": 4,
      "source": {
        "name": "LiveBench Reasoning dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          92.65,
          null,
          null
        ],
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          91.69,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          91.65,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          91.21,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          90.67,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          90.63,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          90.51,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          90.27,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          90.0,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          89.65,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          89.65,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          89.65,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          89.29,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          89.19,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          88.69,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          88.67,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          88.21,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          88.12,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          87.8,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          87.73,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          87.38,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          87.19,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          87.17,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          86.69,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          86.63,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          86.23,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          85.84,
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
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          85.64,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          85.4,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          85.15,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          84.77,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          84.0,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          83.34,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          83.21,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          82.81,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          82.81,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          82.69,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          82.0,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          81.1,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          80.09,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          80.03,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          79.38,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          78.63,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          78.35,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          77.71,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          77.64,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          76.59,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          76.37,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          75.83,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          74.7,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          74.48,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          71.32,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          70.82,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          70.58,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          70.28,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          60.19,
          null,
          null
        ]
      ]
    },
    "livebench_math": {
      "rankingId": "livebench_math",
      "benchmarkId": "livebench_math",
      "familyId": "livebench",
      "title": "LiveBench Math",
      "category": "Mathematics",
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "math",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:06Z",
      "taskCount": 4,
      "source": {
        "name": "LiveBench Mathematics dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          97.01,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          96.81,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          96.2,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          95.99,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          95.95,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          95.86,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          95.73,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          95.09,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          94.91,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          94.32,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          94.15,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          93.47,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          93.29,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          93.17,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          92.94,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          92.85,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          92.57,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          91.56,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          91.31,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          91.2,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          91.04,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          90.98,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          90.82,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          90.68,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          90.39,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          90.06,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          89.78,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          89.74,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          89.32,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          88.77,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          88.66,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          88.36,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          88.24,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          87.9,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          87.81,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          87.2,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          87.14,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          86.99,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          86.79,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          86.4,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          86.21,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          85.82,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          85.25,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          84.44,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          84.34,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          84.28,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          83.92,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          83.72,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          81.24,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          79.87,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          79.65,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          79.6,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          78.46,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          78.43,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          77.53,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          76.95,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          73.74,
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
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "data_analysis",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:02Z",
      "taskCount": 3,
      "source": {
        "name": "LiveBench Data Analysis dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          82.97,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          81.58,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          80.54,
          null,
          null
        ],
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          80.28,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          79.9,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          79.84,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          79.57,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          79.48,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          79.33,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          79.31,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          79.31,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          79.25,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          79.24,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          79.12,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          78.81,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          78.73,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          78.54,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          78.41,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          78.26,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          78.2,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          78.16,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          78.03,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          77.95,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          76.59,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          76.46,
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
          76.17,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          75.77,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          74.55,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          74.54,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          74.44,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          74.24,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          73.86,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          73.74,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          73.04,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          72.78,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          72.55,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          71.79,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          71.74,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          70.79,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          70.79,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          70.43,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          70.24,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          69.91,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          69.89,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          68.02,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          67.96,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          67.64,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          66.03,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          65.13,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          64.86,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          63.0,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          62.66,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          55.77,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          54.46,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          54.01,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          53.25,
          null,
          null
        ]
      ]
    },
    "livebench_language": {
      "rankingId": "livebench_language",
      "benchmarkId": "livebench_language",
      "familyId": "livebench",
      "title": "LiveBench Language",
      "category": "Language",
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "language",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:05Z",
      "taskCount": 3,
      "source": {
        "name": "LiveBench Language dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          90.68,
          null,
          null
        ],
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          89.5,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          89.43,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          88.69,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          87.79,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          87.68,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          87.36,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          85.53,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          85.45,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          85.38,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          84.58,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          84.36,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          83.9,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          83.7,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          83.27,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          82.89,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          82.8,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          82.79,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          82.63,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          82.07,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          81.26,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          81.19,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          80.36,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          79.86,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          79.81,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          79.74,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          79.69,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          79.66,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          79.21,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          79.17,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          78.57,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          78.13,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          77.91,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          77.91,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          77.31,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          77.0,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          76.84,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          76.24,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          76.1,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          75.14,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          74.99,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          74.97,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          74.64,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          74.35,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          74.34,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          73.68,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          73.58,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          73.46,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          72.57,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          72.46,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          71.82,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          70.95,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          70.81,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          70.12,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          66.14,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          63.3,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          62.51,
          null,
          null
        ]
      ]
    },
    "livebench_instruction_following": {
      "rankingId": "livebench_instruction_following",
      "benchmarkId": "livebench_instruction_following",
      "familyId": "livebench",
      "title": "LiveBench Instruction Following",
      "category": "IF",
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "instruction_following",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:16:04Z",
      "taskCount": 4,
      "source": {
        "name": "LiveBench IF dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          81.41,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          79.93,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          79.1,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          78.0,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          77.11,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          75.77,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          75.6,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          75.58,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          75.37,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          74.33,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          74.08,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          74.04,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          73.92,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          73.45,
          null,
          null
        ],
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          72.99,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          72.66,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          72.03,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          71.87,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          71.85,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          71.53,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          71.36,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          70.99,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          70.96,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          70.73,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          70.22,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          70.1,
          null,
          null
        ],
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          70.03,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          69.64,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          69.3,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          69.26,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          67.7,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          67.24,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          67.2,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          66.74,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          66.45,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          65.52,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          65.22,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          64.62,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          64.36,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          63.86,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          63.77,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          63.31,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          63.22,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          63.14,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          62.75,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          62.55,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          62.35,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          62.29,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          61.77,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          60.25,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          60.12,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          59.8,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          58.34,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          57.51,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          56.29,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          53.23,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          52.82,
          null,
          null
        ]
      ]
    },
    "livebench_agentic_coding": {
      "rankingId": "livebench_agentic_coding",
      "benchmarkId": "livebench_agentic_coding",
      "familyId": "livebench",
      "title": "LiveBench Agentic Coding",
      "category": "Agentic Coding",
      "release": "2026-06-25",
      "releaseId": "2026-06-25",
      "metric": "category_average",
      "unit": "score",
      "comparisonKey": "agentic_coding",
      "snapshotId": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "contentHash": "324cded916ad89aebcf5fac5089e8c93448a7ba8f3e79e41b4128c1806d65f62",
      "generatedAt": "2026-09-13T08:15:52Z",
      "taskCount": 3,
      "source": {
        "name": "LiveBench Agentic Coding dated official leaderboard CSV",
        "type": "official_site_dated_csv",
        "url": "https://livebench.ai/",
        "evidenceUrl": "https://livebench.ai/",
        "tableUrl": "https://livebench.ai/table_2026_06_25.csv",
        "categoriesUrl": "https://livebench.ai/categories_2026_06_25.json"
      },
      "entries": [
        [
          "deepseek-v4.1-flash-max",
          "deepseek-v4.1-flash-max",
          77.27,
          null,
          null
        ],
        [
          "claude-fable-5-1-max-effort",
          "claude-fable-5-1-max-effort",
          66.06,
          null,
          null
        ],
        [
          "claude-opus-5-max-effort",
          "claude-opus-5-max-effort",
          65.2,
          null,
          null
        ],
        [
          "deepseek-v4-flash-vision-exp",
          "deepseek-v4-flash-vision-exp",
          65.1,
          null,
          null
        ],
        [
          "qwen3.8-max",
          "qwen3.8-max",
          64.65,
          null,
          null
        ],
        [
          "smaug-agentic",
          "smaug-agentic",
          64.65,
          null,
          null
        ],
        [
          "muse-spark-1.3-xhigh",
          "muse-spark-1.3-xhigh",
          64.09,
          null,
          null
        ],
        [
          "claude-fable-5-max-effort",
          "claude-fable-5-max-effort",
          62.17,
          null,
          null
        ],
        [
          "kimi-k3",
          "kimi-k3",
          62.17,
          null,
          null
        ],
        [
          "qwen3.8-flash-next",
          "qwen3.8-flash-next",
          61.62,
          null,
          null
        ],
        [
          "qwen3.8-27b",
          "qwen3.8-27b",
          61.36,
          null,
          null
        ],
        [
          "smaug-flash",
          "smaug-flash",
          61.06,
          null,
          null
        ],
        [
          "glm-5.3",
          "glm-5.3",
          60.91,
          null,
          null
        ],
        [
          "smaug-mini",
          "smaug-mini",
          60.81,
          null,
          null
        ],
        [
          "claude-sonnet-5-xhigh-effort",
          "claude-sonnet-5-xhigh-effort",
          59.39,
          null,
          null
        ],
        [
          "muse-spark-1.1-xhigh",
          "muse-spark-1.1-xhigh",
          58.54,
          null,
          null
        ],
        [
          "gemini-3.7-flash-high",
          "gemini-3.7-flash-high",
          58.28,
          null,
          null
        ],
        [
          "muse-spark-1.2-xhigh",
          "muse-spark-1.2-xhigh",
          57.58,
          null,
          null
        ],
        [
          "gpt-6-astra-max",
          "gpt-6-astra-max",
          57.32,
          null,
          null
        ],
        [
          "grok-4.6",
          "grok-4.6",
          57.02,
          null,
          null
        ],
        [
          "glm-5.3-flash",
          "glm-5.3-flash",
          56.77,
          null,
          null
        ],
        [
          "grok-4.5",
          "grok-4.5",
          56.46,
          null,
          null
        ],
        [
          "gpt-5.6-sol-max",
          "gpt-5.6-sol-max",
          56.21,
          null,
          null
        ],
        [
          "gpt-5.6-terra-max",
          "gpt-5.6-terra-max",
          54.95,
          null,
          null
        ],
        [
          "deepseek-v4-pro-0813",
          "deepseek-v4-pro-0813",
          54.95,
          null,
          null
        ],
        [
          "gemini-3.8-flash-high",
          "gemini-3.8-flash-high",
          54.24,
          null,
          null
        ],
        [
          "gpt-5.5-xhigh",
          "gpt-5.5-xhigh",
          53.99,
          null,
          null
        ],
        [
          "gpt-5.4-xhigh",
          "gpt-5.4-xhigh",
          53.84,
          null,
          null
        ],
        [
          "ox-alpha-max",
          "ox-alpha-max",
          52.63,
          null,
          null
        ],
        [
          "glm-5.2",
          "glm-5.2",
          51.77,
          null,
          null
        ],
        [
          "claude-opus-4-7-xhigh-effort",
          "claude-opus-4-7-xhigh-effort",
          50.66,
          null,
          null
        ],
        [
          "claude-opus-4-8-max-effort",
          "claude-opus-4-8-max-effort",
          50.5,
          null,
          null
        ],
        [
          "gpt-5.2-2025-12-11-high",
          "gpt-5.2-2025-12-11-high",
          50.25,
          null,
          null
        ],
        [
          "gpt-5.2-codex",
          "gpt-5.2-codex",
          49.39,
          null,
          null
        ],
        [
          "inkling-xhigh",
          "inkling-xhigh",
          49.39,
          null,
          null
        ],
        [
          "claude-opus-4-6-thinking-auto-high-effort",
          "claude-opus-4-6-thinking-auto-high-effort",
          48.99,
          null,
          null
        ],
        [
          "gemini-3.5-flash-high",
          "gemini-3.5-flash-high",
          48.99,
          null,
          null
        ],
        [
          "gpt-5.6-luna-max",
          "gpt-5.6-luna-max",
          48.43,
          null,
          null
        ],
        [
          "kimi-k2.6-thinking",
          "kimi-k2.6-thinking",
          46.92,
          null,
          null
        ],
        [
          "gpt-5.4-nano-xhigh",
          "gpt-5.4-nano-xhigh",
          46.77,
          null,
          null
        ],
        [
          "deepseek-v4-flash-0731",
          "deepseek-v4-flash-0731",
          46.77,
          null,
          null
        ],
        [
          "grok-build-0.1",
          "grok-build-0.1",
          45.81,
          null,
          null
        ],
        [
          "kimi-k2.7-code",
          "kimi-k2.7-code",
          45.66,
          null,
          null
        ],
        [
          "gemini-3.5-flash-lite-high",
          "gemini-3.5-flash-lite-high",
          45.25,
          null,
          null
        ],
        [
          "gemini-3.1-pro-preview-high",
          "gemini-3.1-pro-preview-high",
          44.14,
          null,
          null
        ],
        [
          "qwen3.7-max",
          "qwen3.7-max",
          43.59,
          null,
          null
        ],
        [
          "gemini-3.6-flash-high",
          "gemini-3.6-flash-high",
          43.43,
          null,
          null
        ],
        [
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          "claude-sonnet-4-6-thinking-auto-medium-effort",
          42.63,
          null,
          null
        ],
        [
          "deepseek-v4-pro",
          "deepseek-v4-pro",
          42.63,
          null,
          null
        ],
        [
          "gpt-5.4-mini-xhigh",
          "gpt-5.4-mini-xhigh",
          41.67,
          null,
          null
        ],
        [
          "qwen3.6-plus",
          "qwen3.6-plus",
          41.36,
          null,
          null
        ],
        [
          "minimax-m3",
          "minimax-m3",
          40.66,
          null,
          null
        ],
        [
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          "claude-opus-4-5-20251101-thinking-64k-high-effort",
          39.7,
          null,
          null
        ],
        [
          "qwen3.6-27b",
          "qwen3.6-27b",
          39.29,
          null,
          null
        ],
        [
          "nemotron-3-ultra-550b-a55b",
          "nemotron-3-ultra-550b-a55b",
          38.74,
          null,
          null
        ],
        [
          "deepseek-v4-flash",
          "deepseek-v4-flash",
          37.63,
          null,
          null
        ],
        [
          "grok-4.3",
          "grok-4.3",
          18.54,
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
      "snapshotId": "ab736aecb5f03ab3869a11ec41631a840fa60a2de1de742989cf5524687a4d6d",
      "contentHash": "ab736aecb5f03ab3869a11ec41631a840fa60a2de1de742989cf5524687a4d6d",
      "generatedAt": "2026-09-13T08:15:39Z",
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
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          53.37,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          53.18,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          52.81,
          null,
          null
        ],
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          52.51,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          51.21,
          null,
          null
        ],
        [
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          51.05,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          50.7,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          49.7,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          49.67,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          48.17,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          47.06,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          44.86,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          44.41,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          43.78,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          42.25,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          41.91,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          41.19,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          40.04,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          39.55,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          37.5,
          null,
          null
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
      "metric": "Terminal-Bench v4.0: Score",
      "unit": "ratio",
      "comparisonKey": "terminal_bench_v4_0",
      "snapshotId": "9687c648e1f39f51e5825e64a53f6f2f2b55f1a9cbe366fa9198240c2298de76",
      "contentHash": "9687c648e1f39f51e5825e64a53f6f2f2b55f1a9cbe366fa9198240c2298de76",
      "generatedAt": "2026-09-13T08:16:22Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/terminalbench-v4-0",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          0.596,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.5909,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          0.5505,
          null,
          null
        ],
        [
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          0.5404,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.5202,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.5202,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          0.4949,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.4899,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.4242,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.4192,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.399,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.3535,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.3333,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.3283,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          0.2677,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.2121,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.197,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          0.1414,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.1263,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.1162,
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
      "snapshotId": "809029a7b14339e8ba7d0913a8c8d9393b9eb7f649392c24551d3e866098c3ae",
      "contentHash": "809029a7b14339e8ba7d0913a8c8d9393b9eb7f649392c24551d3e866098c3ae",
      "generatedAt": "2026-09-13T08:15:51Z",
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
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.5913,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          0.5871,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.5593,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.5547,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.5487,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.5468,
          null,
          null
        ],
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          0.5459,
          null,
          null
        ],
        [
          "Claude Opus 5 (xhigh)",
          "Claude Opus 5 (xhigh)",
          0.544,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (medium with fallback)",
          "Claude Fable 5.1 (medium with fallback)",
          0.538,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.4949,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.487,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.4782,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.469,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.4291,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.4291,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.4245,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.4226,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          0.4101,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.3985,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.3948,
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
      "snapshotId": "b60cbcbdae24086237c7aa027c55b35d79cc26890ab705311d0cc1b36420377f",
      "contentHash": "b60cbcbdae24086237c7aa027c55b35d79cc26890ab705311d0cc1b36420377f",
      "generatedAt": "2026-09-13T08:15:53Z",
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
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          0.9626,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.9606,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.9525,
          null,
          null
        ],
        [
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          0.9495,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.9495,
          null,
          null
        ],
        [
          "Gemini 3.7 Flash (high)",
          "Gemini 3.7 Flash (high)",
          0.9455,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.9414,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (xhigh)",
          "Muse Spark 1.3 (xhigh)",
          0.9414,
          null,
          null
        ],
        [
          "Gemini 3.1 Pro Preview",
          "Gemini 3.1 Pro Preview",
          0.9414,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.9374,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.9354,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.9354,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.9354,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.9323,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.9293,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          0.9283,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.9263,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.9253,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.9172,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.9121,
          null,
          null
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
      "snapshotId": "cef12c6a1fd4124a1ed702dd172a0b1e5455d400adf577f63e81e7a421b47066",
      "contentHash": "cef12c6a1fd4124a1ed702dd172a0b1e5455d400adf577f63e81e7a421b47066",
      "generatedAt": "2026-09-13T08:16:18Z",
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
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.6308,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.61,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          0.6088,
          null,
          null
        ],
        [
          "Gemini 3.7 Flash (medium)",
          "Gemini 3.7 Flash (medium)",
          0.5984,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (xhigh)",
          "Muse Spark 1.3 (xhigh)",
          0.5972,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.5949,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.5903,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.588,
          null,
          null
        ],
        [
          "Muse Spark 1.1 (xhigh)",
          "Muse Spark 1.1 (xhigh)",
          0.588,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.5868,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.5706,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.566,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.5648,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.5648,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.5637,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.5498,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.5405,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.5359,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          0.5185,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.5162,
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
      "snapshotId": "cb8ebb5c6931d40e9366de73c820f345af8913d9ba2c5aed8428aa22970e3bbb",
      "contentHash": "cb8ebb5c6931d40e9366de73c820f345af8913d9ba2c5aed8428aa22970e3bbb",
      "generatedAt": "2026-09-13T08:15:38Z",
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
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.8867,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.8533,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (medium with fallback)",
          "Claude Fable 5.1 (medium with fallback)",
          0.8467,
          null,
          null
        ],
        [
          "GPT-5.5 (xhigh)",
          "GPT-5.5 (xhigh)",
          0.8433,
          null,
          null
        ],
        [
          "GPT-5.5 (high)",
          "GPT-5.5 (high)",
          0.8433,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.84,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (medium)",
          "Gemini 3.8 Flash (medium)",
          0.84,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          0.84,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.8367,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.8367,
          null,
          null
        ],
        [
          "Muse Glimmer (high)",
          "Muse Glimmer (high)",
          0.8333,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.83,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.83,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.83,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.8233,
          null,
          null
        ],
        [
          "Qwen3.8 27B (xhigh)",
          "Qwen3.8 27B (xhigh)",
          0.82,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.8133,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.8067,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.8033,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.8033,
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
      "snapshotId": "5bd9a9db403d15ab8c037e680e0061f44f6a7a6b78f566fff217abcb50d280cf",
      "contentHash": "5bd9a9db403d15ab8c037e680e0061f44f6a7a6b78f566fff217abcb50d280cf",
      "generatedAt": "2026-09-13T08:15:37Z",
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
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          43.73,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          43.45,
          null,
          null
        ],
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          43.42,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          43.4,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          43.3,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          42.38,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          42.22,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          40.8,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          37.07,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          30.48,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          29.55,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          25.0,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          21.97,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          19.7,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          14.3,
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
          "Gemini 3.5 Flash-Lite",
          "Gemini 3.5 Flash-Lite",
          5.23,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          4.32,
          null,
          null
        ],
        [
          "Inkling",
          "Inkling",
          2.0,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          1.35,
          null,
          null
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
      "snapshotId": "cb8d07a91b4f101784517f89a8c04e610c93e224afa45616148342c5137815bd",
      "contentHash": "cb8d07a91b4f101784517f89a8c04e610c93e224afa45616148342c5137815bd",
      "generatedAt": "2026-09-13T08:15:40Z",
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
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.3229,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.3171,
          null,
          null
        ],
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          0.3143,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          0.3114,
          null,
          null
        ],
        [
          "GPT-5.5 Pro (xhigh)",
          "GPT-5.5 Pro (xhigh)",
          0.3057,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.3029,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.3,
          null,
          null
        ],
        [
          "GPT-5.4 Pro (xhigh)",
          "GPT-5.4 Pro (xhigh)",
          0.3,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.2971,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.2914,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          0.2914,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.2857,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.2486,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.2343,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.2057,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.2,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.1914,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.1829,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          0.18,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.1714,
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
      "snapshotId": "d61b8325fed46960396e96a90778c871235d232fbba860246d5fa15203a87a35",
      "contentHash": "d61b8325fed46960396e96a90778c871235d232fbba860246d5fa15203a87a35",
      "generatedAt": "2026-09-13T08:15:50Z",
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
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          1763.64,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          1745.29,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          1735.09,
          null,
          null
        ],
        [
          "Claude Opus 5 (xhigh)",
          "Claude Opus 5 (xhigh)",
          1708.14,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          1703.34,
          null,
          null
        ],
        [
          "Grok 4.6 (xhigh)",
          "Grok 4.6 (xhigh)",
          1663.07,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (xhigh)",
          "Muse Spark 1.3 (xhigh)",
          1662.34,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          1661.42,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          1655.48,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          1649.77,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          1642.96,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          1632.06,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          1631.46,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          1627.82,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          1624.11,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          1580.2,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          1569.28,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          1493.31,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          1489.33,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          1476.96,
          null,
          null
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
      "snapshotId": "e05c9dd4e5b69d3bd4a621b9869900e28cca2ea1343b3e7d48e6938c4d1ddc95",
      "contentHash": "e05c9dd4e5b69d3bd4a621b9869900e28cca2ea1343b3e7d48e6938c4d1ddc95",
      "generatedAt": "2026-09-13T08:16:28Z",
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
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.6591,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.6288,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (medium)",
          "GPT-5.6 Sol (medium)",
          0.6288,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (xhigh)",
          "GPT-5.6 Terra (xhigh)",
          0.6288,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (high)",
          "GPT-5.6 Sol (high)",
          0.6212,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (xhigh)",
          "GPT-5.6 Sol (xhigh)",
          0.6136,
          null,
          null
        ],
        [
          "GPT-5.5 (xhigh)",
          "GPT-5.5 (xhigh)",
          0.6061,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.5758,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.4242,
          null,
          null
        ],
        [
          "Nemotron 3 Ultra",
          "Nemotron 3 Ultra",
          0.3636,
          null,
          null
        ],
        [
          "Mistral Medium 3.5",
          "Mistral Medium 3.5",
          0.3333,
          null,
          null
        ],
        [
          "gpt-oss-120b (high)",
          "gpt-oss-120b (high)",
          0.2348,
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
      "metric": "Terminal-Bench v2.1: Score",
      "unit": "ratio",
      "comparisonKey": "terminalbench_v2_1",
      "snapshotId": "548f08836a97d055d2558fec94c1be874ed2215afb20137ac292fb4c85d3e3a5",
      "contentHash": "548f08836a97d055d2558fec94c1be874ed2215afb20137ac292fb4c85d3e3a5",
      "generatedAt": "2026-09-13T08:16:32Z",
      "taskCount": null,
      "source": {
        "name": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
        "type": "official_page_endpoint",
        "url": "https://artificialanalysis.ai/evaluations/terminalbench-v2-1",
        "evidenceUrl": "https://artificialanalysis.ai/api/v2/openapi",
        "tableUrl": null,
        "categoriesUrl": null
      },
      "entries": [
        [
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.9139,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (xhigh with fallback)",
          "Claude Fable 5.1 (xhigh with fallback)",
          0.9101,
          null,
          null
        ],
        [
          "Claude Fable 5.1 (high with fallback)",
          "Claude Fable 5.1 (high with fallback)",
          0.8989,
          null,
          null
        ],
        [
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          0.8989,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          0.8951,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (xhigh)",
          "GPT-5.6 Sol (xhigh)",
          0.8951,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.8914,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.8839,
          null,
          null
        ],
        [
          "Grok 4.6 (high)",
          "Grok 4.6 (high)",
          0.8839,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.8801,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.8801,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.8764,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.8502,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.8464,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.8427,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.8427,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.839,
          null,
          null
        ],
        [
          "Qwen3.8 2.4T A95B",
          "Qwen3.8 2.4T A95B",
          0.8202,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.809,
          null,
          null
        ],
        [
          "Qwen3.8 27B (xhigh)",
          "Qwen3.8 27B (xhigh)",
          0.7978,
          null,
          null
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
      "snapshotId": "4cb4f5381384d14b74d571a090a8923196fd7fc7d660699b3ea238f46c8c971a",
      "contentHash": "4cb4f5381384d14b74d571a090a8923196fd7fc7d660699b3ea238f46c8c971a",
      "generatedAt": "2026-09-13T08:15:54Z",
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
          "Grok 4.3 (medium)",
          "Grok 4.3 (medium)",
          0.8333,
          null,
          null
        ],
        [
          "Grok 4.20 0309",
          "Grok 4.20 0309",
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
          "Nemotron 3 Ultra",
          "Nemotron 3 Ultra",
          0.8136,
          null,
          null
        ],
        [
          "Grok 4.3 (high)",
          "Grok 4.3 (high)",
          0.8129,
          null,
          null
        ],
        [
          "Grok 4.20 0309 v2",
          "Grok 4.20 0309 v2",
          0.8122,
          null,
          null
        ],
        [
          "Grok 4.3 (low)",
          "Grok 4.3 (low)",
          0.8095,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.7265,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.7122,
          null,
          null
        ],
        [
          "gpt-oss-120b (high)",
          "gpt-oss-120b (high)",
          0.6898,
          null,
          null
        ],
        [
          "Mistral Medium 3.5",
          "Mistral Medium 3.5",
          0.6878,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.6347,
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
      "snapshotId": "f31133bab517b8f725eafff3f9bae408bab86455d3402f32ce5aa8344b1aa098",
      "contentHash": "f31133bab517b8f725eafff3f9bae408bab86455d3402f32ce5aa8344b1aa098",
      "generatedAt": "2026-09-13T08:16:16Z",
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
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.8688,
          null,
          null
        ],
        [
          "GPT-6 Astra (high)",
          "GPT-6 Astra (high)",
          0.8642,
          null,
          null
        ],
        [
          "GPT-6 Astra (xhigh)",
          "GPT-6 Astra (xhigh)",
          0.8624,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.8561,
          null,
          null
        ],
        [
          "Gemini 3.7 Flash (high)",
          "Gemini 3.7 Flash (high)",
          0.8549,
          null,
          null
        ],
        [
          "GPT-6 Astra (medium)",
          "GPT-6 Astra (medium)",
          0.8509,
          null,
          null
        ],
        [
          "Gemini 3.7 Flash (low)",
          "Gemini 3.7 Flash (low)",
          0.8486,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.8474,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.8341,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.8069,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.8052,
          null,
          null
        ],
        [
          "Gemini 3.5 Flash-Lite",
          "Gemini 3.5 Flash-Lite",
          0.7902,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.7855,
          null,
          null
        ],
        [
          "MiniMax-M3",
          "MiniMax-M3",
          0.7855,
          null,
          null
        ],
        [
          "DeepSeek V4.1 Flash (max)",
          "DeepSeek V4.1 Flash (max)",
          0.7699,
          null,
          null
        ],
        [
          "Qwen3.8 27B (xhigh)",
          "Qwen3.8 27B (xhigh)",
          0.763,
          null,
          null
        ],
        [
          "Muse Glimmer (high)",
          "Muse Glimmer (high)",
          0.7434,
          null,
          null
        ],
        [
          "Inkling",
          "Inkling",
          0.7347,
          null,
          null
        ],
        [
          "Mistral Medium 3.5",
          "Mistral Medium 3.5",
          0.6486,
          null,
          null
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
      "snapshotId": "d80af99d5c3875a6957400ad81518290d669e26b7795b20c54d739253e4ffa07",
      "contentHash": "d80af99d5c3875a6957400ad81518290d669e26b7795b20c54d739253e4ffa07",
      "generatedAt": "2026-09-13T08:15:37Z",
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
          "K2-V2 (high)",
          "K2-V2 (high)",
          88.89,
          null,
          null
        ],
        [
          "K2-V2 (medium)",
          "K2-V2 (medium)",
          88.89,
          null,
          null
        ],
        [
          "K2-V2 (low)",
          "K2-V2 (low)",
          88.89,
          null,
          null
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
          "Olmo 3 7B",
          "Olmo 3 7B",
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
          "Nemotron 3 Ultra",
          "Nemotron 3 Ultra",
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
          "Nemotron 3 Super",
          "Nemotron 3 Super",
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
          "Nemotron 3 Nano",
          "Nemotron 3 Nano",
          83.33,
          null,
          null
        ],
        [
          "MiniCPM5-1B",
          "MiniCPM5-1B",
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
          "Nemotron 3 Nano 4B",
          "Nemotron 3 Nano 4B",
          83.33,
          null,
          null
        ],
        [
          "Nemotron 3 Nano (Non-reasoning)",
          "Nemotron 3 Nano (Non-reasoning)",
          83.33,
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
      "snapshotId": "9ec2e5ed51f0e411d7e6059288383b4dc23d2c85a1da09eb15d6c75fd475300d",
      "contentHash": "9ec2e5ed51f0e411d7e6059288383b4dc23d2c85a1da09eb15d6c75fd475300d",
      "generatedAt": "2026-09-13T08:16:19Z",
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
          "Claude Fable 5.1 (max with fallback)",
          "Claude Fable 5.1 (max with fallback)",
          0.7111,
          null,
          null
        ],
        [
          "Claude Fable 5 (with fallback)",
          "Claude Fable 5 (with fallback)",
          0.6444,
          null,
          null
        ],
        [
          "Claude Opus 5 (high)",
          "Claude Opus 5 (high)",
          0.5944,
          null,
          null
        ],
        [
          "Claude Opus 5 (xhigh)",
          "Claude Opus 5 (xhigh)",
          0.5833,
          null,
          null
        ],
        [
          "Claude Opus 5 (medium)",
          "Claude Opus 5 (medium)",
          0.5611,
          null,
          null
        ],
        [
          "Claude Opus 5 (max)",
          "Claude Opus 5 (max)",
          0.5556,
          null,
          null
        ],
        [
          "Claude Sonnet 5 (max)",
          "Claude Sonnet 5 (max)",
          0.55,
          null,
          null
        ],
        [
          "Claude Opus 5 (low)",
          "Claude Opus 5 (low)",
          0.5389,
          null,
          null
        ],
        [
          "GLM-5.3-Flash",
          "GLM-5.3-Flash",
          0.5111,
          null,
          null
        ],
        [
          "GLM-5.3 (max)",
          "GLM-5.3 (max)",
          0.4833,
          null,
          null
        ],
        [
          "Muse Spark 1.3 (max)",
          "Muse Spark 1.3 (max)",
          0.4111,
          null,
          null
        ],
        [
          "Kimi K3 (max)",
          "Kimi K3 (max)",
          0.3833,
          null,
          null
        ],
        [
          "GPT-6 Astra (max)",
          "GPT-6 Astra (max)",
          0.35,
          null,
          null
        ],
        [
          "GPT-5.6 Terra (max)",
          "GPT-5.6 Terra (max)",
          0.3167,
          null,
          null
        ],
        [
          "GPT-5.6 Sol (max)",
          "GPT-5.6 Sol (max)",
          0.2611,
          null,
          null
        ],
        [
          "Gemini 3.8 Flash (high)",
          "Gemini 3.8 Flash (high)",
          0.2167,
          null,
          null
        ],
        [
          "Qwen3.8 27B (xhigh)",
          "Qwen3.8 27B (xhigh)",
          0.2167,
          null,
          null
        ],
        [
          "Muse Glimmer (high)",
          "Muse Glimmer (high)",
          0.2,
          null,
          null
        ],
        [
          "GPT-5.6 Luna (max)",
          "GPT-5.6 Luna (max)",
          0.1944,
          null,
          null
        ],
        [
          "DeepSeek V4 Pro 0813 (max)",
          "DeepSeek V4 Pro 0813 (max)",
          0.1778,
          null,
          null
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
      "snapshotId": "005cbedb49f988ba3f0d9636300862ad7ace93ce1992b37faf9945fe5b383415",
      "contentHash": "005cbedb49f988ba3f0d9636300862ad7ace93ce1992b37faf9945fe5b383415",
      "generatedAt": "2026-09-13T08:15:37Z",
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
