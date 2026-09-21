module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-21T18:37:38Z",
  "windowStart": "2026-09-20T18:37:38Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "openrouter:x-ai/grok-4.7": {
      "canonicalId": "openrouter:x-ai/grok-4.7",
      "provider": "xAI",
      "modelId": "x-ai/grok-4.7",
      "displayName": "Grok 4.7",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-21T16:19:01Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "text",
          "image",
          "file"
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
      "contextWindow": 500000,
      "maxInputTokens": null,
      "maxOutputTokens": 450000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 1.6,
        "outputPerMillionTokens": 4.8,
        "cachedInputPerMillionTokens": 0.4
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/x-ai/grok-4.7",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "xAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "modelsdev:grok-4.7": {
      "canonicalId": "modelsdev:grok-4.7",
      "provider": "xAI",
      "modelId": "grok-4.7",
      "displayName": "Grok 4.7",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-21T00:00:00Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "text",
          "image",
          "pdf"
        ],
        "output": [
          "text"
        ]
      },
      "capabilities": [
        "工具调用",
        "推理",
        "结构化输出"
      ],
      "parameterCount": null,
      "license": null,
      "technicalReportUrl": null,
      "description": null,
      "contextWindow": 500000,
      "maxInputTokens": null,
      "maxOutputTokens": 500000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 2.0,
        "outputPerMillionTokens": 6.0,
        "cachedInputPerMillionTokens": 0.5
      },
      "availability": [
        "models.dev"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": null,
      "hubRepo": null,
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "xAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        }
      ]
    },
    "benchmark:Step 5 Preview": {
      "canonicalId": "benchmark:Step 5 Preview",
      "provider": null,
      "modelId": "Step 5 Preview",
      "displayName": "Step 5 Preview",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T01:18:27Z",
          "contentHash": "93ada058b1a0c59016e069fdba63ffb2a4f09e857e00eac0aab9a665cd1fc429",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Grok 4.7 (xhigh)": {
      "canonicalId": "benchmark:Grok 4.7 (xhigh)",
      "provider": null,
      "modelId": "Grok 4.7 (xhigh)",
      "displayName": "Grok 4.7 (xhigh)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d7fd607aafcfcb8eb3773ceffa3c8ca931b03ad9759d8349c2769bb01d17911f",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Fable 5 (with fallback)": {
      "canonicalId": "benchmark:Claude Fable 5 (with fallback)",
      "provider": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "displayName": "Claude Fable 5 (with fallback)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a7a810fa5953335bb3c8a981eabc3f1062dc41a9d0a78d62bc12bce345394780",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:DeepSeek V4.1 Flash (max)": {
      "canonicalId": "benchmark:DeepSeek V4.1 Flash (max)",
      "provider": null,
      "modelId": "DeepSeek V4.1 Flash (max)",
      "displayName": "DeepSeek V4.1 Flash (max)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4e064a2603a996a5e50f4c9fc4bb49f2e87ca9bd211d313624aeddc15f8b4d52",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GLM-5.3 (max)": {
      "canonicalId": "benchmark:GLM-5.3 (max)",
      "provider": null,
      "modelId": "GLM-5.3 (max)",
      "displayName": "GLM-5.3 (max)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4dcd4a5941754861636e432abb8317610811eac8bb0476c806a0bcc6f1e788d0",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GLM-5.3-Flash": {
      "canonicalId": "benchmark:GLM-5.3-Flash",
      "provider": null,
      "modelId": "GLM-5.3-Flash",
      "displayName": "GLM-5.3-Flash",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5497351da758d5e95e55b47d070ba8b3b86037c32c34a24e7d714e3f937c895",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-5.6 Sol (max)": {
      "canonicalId": "benchmark:GPT-5.6 Sol (max)",
      "provider": null,
      "modelId": "GPT-5.6 Sol (max)",
      "displayName": "GPT-5.6 Sol (max)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b8b0e5787ed8588c09a2af4b5fcd701cd1411f6b9ad01e7e277aedc713c1f2a2",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-5.6 Terra (max)": {
      "canonicalId": "benchmark:GPT-5.6 Terra (max)",
      "provider": null,
      "modelId": "GPT-5.6 Terra (max)",
      "displayName": "GPT-5.6 Terra (max)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "aa86a3680d5d203652d22583392457571105cf3ec7d27d73d4086860a3150b18",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Muse Spark 1.3 (max)": {
      "canonicalId": "benchmark:Muse Spark 1.3 (max)",
      "provider": null,
      "modelId": "Muse Spark 1.3 (max)",
      "displayName": "Muse Spark 1.3 (max)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "09039874b42823cf75087689481fcc751a9dea46627a3353f23ba507d4752cdb",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Qwen3.8 Max (0902)": {
      "canonicalId": "benchmark:Qwen3.8 Max (0902)",
      "provider": null,
      "modelId": "Qwen3.8 Max (0902)",
      "displayName": "Qwen3.8 Max (0902)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f59134fed3f0c5ce3c71d8b93803b3215061f201986b0ff0c0e814e6254932bc",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-5.6 Luna (max)": {
      "canonicalId": "benchmark:GPT-5.6 Luna (max)",
      "provider": null,
      "modelId": "GPT-5.6 Luna (max)",
      "displayName": "GPT-5.6 Luna (max)",
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
      "sourceOwner": "Artificial Analysis GPQA Diamond official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6488eb9eabb358d61120be352708491cfda359a32f88ae484d9abe12905d879f",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Fable 5.1 (medium with fallback)": {
      "canonicalId": "benchmark:Claude Fable 5.1 (medium with fallback)",
      "provider": null,
      "modelId": "Claude Fable 5.1 (medium with fallback)",
      "displayName": "Claude Fable 5.1 (medium with fallback)",
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
      "sourceOwner": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd33bba54901d664f2959963e4eaa94e3fe0919176d808ce8052b4a37953e2f1",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Gemini 3.8 Flash (high)": {
      "canonicalId": "benchmark:Gemini 3.8 Flash (high)",
      "provider": null,
      "modelId": "Gemini 3.8 Flash (high)",
      "displayName": "Gemini 3.8 Flash (high)",
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
      "sourceOwner": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53d7089c3d97c1efdf713394a35d2ac46aa29d5a0465a3ad671e24ddc0dd0856",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Kimi K3 (max)": {
      "canonicalId": "benchmark:Kimi K3 (max)",
      "provider": null,
      "modelId": "Kimi K3 (max)",
      "displayName": "Kimi K3 (max)",
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
      "sourceOwner": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0351e4774c080676fe92564ba8f584a882c85a70cc64e218d9fc7d96407d4dad",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Grok 4.6 (high)": {
      "canonicalId": "benchmark:Grok 4.6 (high)",
      "provider": null,
      "modelId": "Grok 4.6 (high)",
      "displayName": "Grok 4.6 (high)",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "13fb68668d59bd2b1a9703c6293fb46f586db8feaa911c8606aa9cd073089dbe",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-6 Astra (max)": {
      "canonicalId": "benchmark:GPT-6 Astra (max)",
      "provider": null,
      "modelId": "GPT-6 Astra (max)",
      "displayName": "GPT-6 Astra (max)",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8be640e1fcc061d196a7c78c805a7b3fcfaf25e001c559ffa38adce290cc08b2",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Qwen3.8 27B (xhigh)": {
      "canonicalId": "benchmark:Qwen3.8 27B (xhigh)",
      "provider": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "displayName": "Qwen3.8 27B (xhigh)",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3fdd24c3cb98a1bb70bd63041783b227d1f1adac952f926834ffa40dbb56d77b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Fable 5.1 (high with fallback)": {
      "canonicalId": "benchmark:Claude Fable 5.1 (high with fallback)",
      "provider": null,
      "modelId": "Claude Fable 5.1 (high with fallback)",
      "displayName": "Claude Fable 5.1 (high with fallback)",
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
      "sourceOwner": "Artificial Analysis SciCode official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1b003724f870c86da89f5d166e7d074110c18c4efbf4475804bb605e25bd9fbe",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Opus 5 (max)": {
      "canonicalId": "benchmark:Claude Opus 5 (max)",
      "provider": null,
      "modelId": "Claude Opus 5 (max)",
      "displayName": "Claude Opus 5 (max)",
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
      "sourceOwner": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a1cff63d5a43267257024e89db52cce25dfa9876c61526b6e05178bad6f2e54d",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-5.5 (xhigh)": {
      "canonicalId": "benchmark:GPT-5.5 (xhigh)",
      "provider": null,
      "modelId": "GPT-5.5 (xhigh)",
      "displayName": "GPT-5.5 (xhigh)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7d9b567214976c8b512dba2d45255dd3c696f34b27ef6920ca46781ef5e819e2",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:MiniMax-M3": {
      "canonicalId": "benchmark:MiniMax-M3",
      "provider": null,
      "modelId": "MiniMax-M3",
      "displayName": "MiniMax-M3",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6ce74d8b7981406e83b794c9b07c0c2118346113bd046dad4a3376a6b3a162af",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Mistral Medium 3.5": {
      "canonicalId": "benchmark:Mistral Medium 3.5",
      "provider": null,
      "modelId": "Mistral Medium 3.5",
      "displayName": "Mistral Medium 3.5",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49f8261eb84626f6f10e8ac123cd5e1d27d761a3cb4229477b9105af995dc40",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Nemotron 3 Ultra": {
      "canonicalId": "benchmark:Nemotron 3 Ultra",
      "provider": null,
      "modelId": "Nemotron 3 Ultra",
      "displayName": "Nemotron 3 Ultra",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "1e74d9bf37ee112951956ad9ced757a21a5b81907b3df2cae4524942e034ebd7",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-oss-120b (high)": {
      "canonicalId": "benchmark:gpt-oss-120b (high)",
      "provider": null,
      "modelId": "gpt-oss-120b (high)",
      "displayName": "gpt-oss-120b (high)",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "53bfecbc700ec41da62bff99a3a76a7f9aee0d8ba1f1f2d3ba660189607335fd",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:DeepSeek V4 Pro 0813 (max)": {
      "canonicalId": "benchmark:DeepSeek V4 Pro 0813 (max)",
      "provider": null,
      "modelId": "DeepSeek V4 Pro 0813 (max)",
      "displayName": "DeepSeek V4 Pro 0813 (max)",
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
      "sourceOwner": "Artificial Analysis CritPt official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8d3828152620af3e88179bd8830b26a67eb6df40d47d45976e0742d3a953c4a9",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Grok 4.7 (high)": {
      "canonicalId": "benchmark:Grok 4.7 (high)",
      "provider": null,
      "modelId": "Grok 4.7 (high)",
      "displayName": "Grok 4.7 (high)",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d6fb625877f06254e98623022003e76d5b2b2d1888fc77bb8e83c709a489bad5",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Opus 5 (xhigh)": {
      "canonicalId": "benchmark:Claude Opus 5 (xhigh)",
      "provider": null,
      "modelId": "Claude Opus 5 (xhigh)",
      "displayName": "Claude Opus 5 (xhigh)",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f30ad8666a21aef896c1cf5c9c23110a9f911c6ca55eee8a333ef02a622dfc55",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Grok 4.6 (xhigh)": {
      "canonicalId": "benchmark:Grok 4.6 (xhigh)",
      "provider": null,
      "modelId": "Grok 4.6 (xhigh)",
      "displayName": "Grok 4.6 (xhigh)",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "52c27cf6da9e9a93b9cca25dc7916041f3120b19b0342a80f80f2f0dcf097315",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Muse Spark 1.3 (xhigh)": {
      "canonicalId": "benchmark:Muse Spark 1.3 (xhigh)",
      "provider": null,
      "modelId": "Muse Spark 1.3 (xhigh)",
      "displayName": "Muse Spark 1.3 (xhigh)",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4b95f08e2f0a90ab8ba225d1fe233f2f8ab2b556f91969718334a7f7f586bffa",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Opus 5 (low)": {
      "canonicalId": "benchmark:Claude Opus 5 (low)",
      "provider": null,
      "modelId": "Claude Opus 5 (low)",
      "displayName": "Claude Opus 5 (low)",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "608720c290a45d635f341f09a58315130a372152cd69394d6a6df105071368f8",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Muse Glimmer (high)": {
      "canonicalId": "benchmark:Muse Glimmer (high)",
      "provider": null,
      "modelId": "Muse Glimmer (high)",
      "displayName": "Muse Glimmer (high)",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8e7a3ae22176498ed697e0628aa331a4c870ffb3e06c5cbf240b86e007cda287",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 33,
  "sourceSummary": {
    "official": 0,
    "catalog": 2,
    "benchmark": 49
  },
  "events": [
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
      "summary": "Terminal-Bench 4.0 官方数据发生变化；共 20 个模型 · 当前前列：GPT-6 Astra (xhigh)（59.6%）、GPT-6 Astra (max)（59.1%）、Claude Fable 5.1 (xhigh with fallback)（55.1%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "contentHash": "8abc838d48c0b0e1a47bf57d52e232731d1e4a63548f845b22133495c3aa18d6",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（59.6%）",
        "GPT-6 Astra (max)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（55.1%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "69746bc164532ee20e35fa7927b83338",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Artificial Analysis Intelligence Index v4.3 官方数据更新",
      "summary": "Artificial Analysis Intelligence Index v4.3 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（53.35）、Claude Fable 5.1 (xhigh with fallback)（53.20）、GPT-6 Astra (max)（52.67）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "contentHash": "063509c3b80f549bdd1d14c982a3e22bd17d1fbb8e547420be50225d6fda9482",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（53.35）",
        "Claude Fable 5.1 (xhigh with fallback)（53.20）",
        "GPT-6 Astra (max)（52.67）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "66b8d0eef118e7884c894362de96dd3b",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "GPQA Diamond 官方数据更新",
      "summary": "GPQA Diamond 官方数据发生变化；共 20 个模型 · 当前前列：GPT-6 Astra (xhigh)（96.3%）、GPT-6 Astra (max)（96.1%）、Gemini 3.8 Flash (high)（95.3%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "contentHash": "99ce9254383a5c7c9b7aee8edfa8a2f968e7e697ac07f7b376808da86fc7257c",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（96.3%）",
        "GPT-6 Astra (max)（96.1%）",
        "Gemini 3.8 Flash (high)（95.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "003b89c8c09d48cdfb9b7ccfe666d1f9",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Humanity's Last Exam 官方数据更新",
      "summary": "Humanity's Last Exam 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（59.1%）、Claude Fable 5.1 (xhigh with fallback)（58.7%）、Claude Fable 5.1 (high with fallback)（55.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "contentHash": "1e1f0050b5875d1fc9ddba6c49d3d611617b720ddbc4d3ab62fc6ef2776f8da9",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（58.7%）",
        "Claude Fable 5.1 (high with fallback)（55.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "dc20ee1a608920992b40cf8fd6c88477",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "AA LCR 官方数据更新",
      "summary": "AA LCR 官方数据发生变化；共 20 个模型 · 当前前列：Kimi K3 (max)（88.7%）、Step 5 Preview（88.3%）、Claude Fable 5.1 (max with fallback)（85.3%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "contentHash": "b342793df248e87d758e1b45564f038b62b90ae1d68b4fef3406f708b052763f",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Kimi K3 (max)（88.7%）",
        "Step 5 Preview（88.3%）",
        "Claude Fable 5.1 (max with fallback)（85.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "d7e6288b80d905660a213aca60a84ca8",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "SciCode 官方数据更新",
      "summary": "SciCode 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（63.1%）、Claude Fable 5 (with fallback)（61.0%）、Claude Fable 5.1 (xhigh with fallback)（60.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "contentHash": "f2b3689f14b3af669189d7ae2f70aa122e08a46390c5a2f566ca1b8516e2e7dc",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（63.1%）",
        "Claude Fable 5 (with fallback)（61.0%）",
        "Claude Fable 5.1 (xhigh with fallback)（60.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "41fe0b627d6032c4dd07ae1ff8ee46f0",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "AA Omniscience Index 官方数据更新",
      "summary": "AA Omniscience Index 官方数据发生变化；共 20 个模型 · 当前前列：GPT-6 Astra (high)（43.73）、Claude Fable 5.1 (max with fallback)（43.45）、GPT-6 Astra (xhigh)（43.42）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "contentHash": "5b8d46f28ba675bc6faff631b11bfe18b14443437f80656dda62e5739ab7bfad",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (high)（43.73）",
        "Claude Fable 5.1 (max with fallback)（43.45）",
        "GPT-6 Astra (xhigh)（43.42）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "a10609cf4ff080ee436fef8268386eab",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Terminal-Bench Hard 官方数据更新",
      "summary": "Terminal-Bench Hard 官方数据发生变化；共 11 个模型 · 当前前列：GPT-5.6 Sol (max)（65.9%）、Claude Fable 5 (with fallback)（62.9%）、GPT-5.6 Sol (medium)（62.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "contentHash": "6a843751ce1b4aba80aa6fc9bbbbc83ab3d0d7481c57e37a8e26a53e2d5c2bc4",
      "unit": "ratio",
      "modelCount": 11,
      "topModels": [
        "GPT-5.6 Sol (max)（65.9%）",
        "Claude Fable 5 (with fallback)（62.9%）",
        "GPT-5.6 Sol (medium)（62.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "17900dff48b32f6df584fcfd74c3763e",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "CritPt 官方数据更新",
      "summary": "CritPt 官方数据发生变化；共 20 个模型 · 当前前列：GPT-5.6 Sol (max)（32.3%）、GPT-6 Astra (max)（31.7%）、GPT-6 Astra (xhigh)（31.4%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "contentHash": "643064eeae22458720953dd7afc59bf3e0ff33c40e54f95fbe3a109ecac2f2a2",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-5.6 Sol (max)（32.3%）",
        "GPT-6 Astra (max)（31.7%）",
        "GPT-6 Astra (xhigh)（31.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "e8e2f9a048244c2ae3e25b71813117b1",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Terminal-Bench v2.1 官方数据更新",
      "summary": "Terminal-Bench v2.1 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（91.4%）、Claude Fable 5.1 (xhigh with fallback)（91.0%）、Claude Fable 5.1 (high with fallback)（89.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "contentHash": "f0dc43837af356520e124392bf730689979acc6b194c806abd23641d2a062a45",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（91.4%）",
        "Claude Fable 5.1 (xhigh with fallback)（91.0%）",
        "Claude Fable 5.1 (high with fallback)（89.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "b61c3df424f537244322c3ac09126d7a",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "IFBench 官方数据更新",
      "summary": "IFBench 官方数据发生变化；共 11 个模型 · 当前前列：Grok 4.3 (medium)（83.3%）、Grok 4.20 0309（82.9%）、MiniMax-M3（82.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "contentHash": "f608895ca9807bf1f05b61b90f2af603e4fd5126d175e51eff6dae4b1a989597",
      "unit": "ratio",
      "modelCount": 11,
      "topModels": [
        "Grok 4.3 (medium)（83.3%）",
        "Grok 4.20 0309（82.9%）",
        "MiniMax-M3（82.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "a69764de374688f9007ef89f474aa7f7",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "GDPval-AA Elo 官方数据更新",
      "summary": "GDPval-AA Elo 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（1734.67）、Claude Fable 5.1 (xhigh with fallback)（1720.92）、Claude Opus 5 (max)（1707.92）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "contentHash": "f9825227fc7d997fd4d9915d13467fab1ba53ac62f8c7ed788dd145f901e35be",
      "unit": "raw",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（1734.67）",
        "Claude Fable 5.1 (xhigh with fallback)（1720.92）",
        "Claude Opus 5 (max)（1707.92）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "9745645755ae989f94ca75029c440388",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "MLCR Overall 官方数据更新",
      "summary": "MLCR Overall 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（71.1%）、Claude Fable 5 (with fallback)（64.4%）、Claude Opus 5 (high)（59.4%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "contentHash": "f539807f81081684d1c307ce8b37679a1cbacad8400dfb6f38a78c0ca3a413ac",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（71.1%）",
        "Claude Fable 5 (with fallback)（64.4%）",
        "Claude Opus 5 (high)（59.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "f4b2a8d71014729cc0a228be4f0cda9a",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Grok 4.7 新增可用",
      "summary": "Grok 4.7 新增可用：上下文 500,000 tokens，价格 $1.6/$4.8 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "x-ai/grok-4.7",
      "modelRef": "openrouter:x-ai/grok-4.7",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "xAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "44a8ba1956e7fa8a78f050e0bbde4d6d6895939b41398f41230dd830cb56142c",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/x-ai/grok-4.7",
      "observedAt": "2026-09-21T16:19:01Z",
      "publishedAt": "2026-09-21T16:19:01Z",
      "source": "OpenRouter · xAI",
      "eventIdentity": "catalog:x-ai/grok-4.7",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "b221bb2a9a255f997718f4b82c12de82",
      "family": "model",
      "eventType": "vendor_catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Grok 4.7 新增可用",
      "summary": "Grok 4.7 新增可用：上下文 500,000 tokens，价格 $2/$6 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7",
      "modelRef": "modelsdev:grok-4.7",
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "xAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://models.dev/api.json",
          "observedAt": "2026-09-21T00:00:00Z",
          "contentHash": "6a2a667c98070c67d5f2c2c4e67b297b18c8753d80a9ce1e51a691540f30191d",
          "sourceType": "modelsdev_catalog"
        }
      ],
      "url": "https://models.dev/api.json",
      "observedAt": "2026-09-21T00:00:00Z",
      "publishedAt": "2026-09-21T00:00:00Z",
      "source": "models.dev · xAI",
      "eventIdentity": "modelsdev:grok-4.7",
      "provenance": {
        "sourceUrl": "https://models.dev/api.json",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "1de89f74110609a6f8ac20e09822ed58",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 Terminal-Bench 4.0，当前分数 25.8%（第 17 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "score": 0.257575757575758,
      "rank": null,
      "displayRank": 17,
      "unit": "ratio",
      "modelIdentity": "aa_terminal_bench_v4_0:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "fb47d6777de6b7c325174244cc51fd6d",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 Terminal-Bench 4.0 当前官方数据中（此前分数 42.4%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "previousScore": 0.424242424242424,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminal_bench_v4_0:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "0c6a094379f6d567eacc614e4a46f0a5",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Step 5 Preview 排名位置变化",
      "summary": "Terminal-Bench 4.0 按当前分数推导的列表位置从 15 变为 14；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 15,
      "displayRank": 14,
      "rankSource": "derived",
      "modelIdentity": "aa_terminal_bench_v4_0:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "cb2540e141e5cb2ce92727c085b1146e",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 Artificial Analysis Intelligence Index v4.3，当前分数 46.45（第 11 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "score": 46.4465506302286,
      "rank": null,
      "displayRank": 11,
      "unit": "score",
      "modelIdentity": "aa_intelligence_index_v4_3:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "a4049ee6dcbde9c59f393f4ed94ceb6b",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 Artificial Analysis Intelligence Index v4.3 当前官方数据中（此前分数 49.63）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "previousScore": 49.6258202733378,
      "previousRank": null,
      "unit": "score",
      "modelIdentity": "aa_intelligence_index_v4_3:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "88a7baf50e64b5cb5b80692a6427d054",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Muse Spark 1.3 (max) 排名位置变化",
      "summary": "Artificial Analysis Intelligence Index v4.3 按当前分数推导的列表位置从 10 变为 9；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Muse Spark 1.3 (max)",
      "modelRef": "benchmark:Muse Spark 1.3 (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 10,
      "displayRank": 9,
      "rankSource": "derived",
      "modelIdentity": "aa_intelligence_index_v4_3:Muse Spark 1.3 (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "c18807bab0c89abf189a566425023f06",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "GPT-5.6 Luna (max) 新上榜",
      "summary": "GPT-5.6 Luna (max) 进入 GPQA Diamond，当前分数 91.1%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Luna (max)",
      "modelRef": "benchmark:GPT-5.6 Luna (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "score": 0.911111111111111,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_gpqa_diamond:GPT-5.6 Luna (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "c65d3765b4d40a402c309b0c86b4a2f8",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 GPQA Diamond 当前官方数据中（此前分数 92.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "previousScore": 0.926262626262626,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_gpqa_diamond:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "7d6a7755a7a356b5b0ec7410b1330d24",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-5.6 Terra (max) 排名位置变化",
      "summary": "GPQA Diamond 按当前分数推导的列表位置从 18 变为 17；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 18,
      "displayRank": 17,
      "rankSource": "derived",
      "modelIdentity": "aa_gpqa_diamond:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "339cba7ba201bab387ead4a316fc64b7",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 Humanity's Last Exam，当前分数 43.1%（第 14 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "score": 0.431417979610751,
      "rank": null,
      "displayRank": 14,
      "unit": "ratio",
      "modelIdentity": "aa_humanitys_last_exam:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "dd5e10162d0828041cf5f6618a671ccd",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5.1 (medium with fallback) 移出榜单",
      "summary": "Claude Fable 5.1 (medium with fallback) 不再出现在 Humanity's Last Exam 当前官方数据中（此前分数 53.8%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5.1 (medium with fallback)",
      "modelRef": "benchmark:Claude Fable 5.1 (medium with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "previousScore": 0.537998146431881,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_humanitys_last_exam:Claude Fable 5.1 (medium with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "457c60b2746e074310cc905649d27fa2",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Step 5 Preview 排名位置变化",
      "summary": "Humanity's Last Exam 按当前分数推导的列表位置从 14 变为 13；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 14,
      "displayRank": 13,
      "rankSource": "derived",
      "modelIdentity": "aa_humanitys_last_exam:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "ac11df094eb77ea791155aa909524a09",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.6 (high) 新上榜",
      "summary": "Grok 4.6 (high) 进入 AA LCR，当前分数 80.3%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.6 (high)",
      "modelRef": "benchmark:Grok 4.6 (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "score": 0.803333333333333,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_lcr:Grok 4.6 (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "ec71f058d79d374b8d8ea5b5ac9e9066",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 AA LCR 当前官方数据中（此前分数 82.3%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "previousScore": 0.823333333333333,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_lcr:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "bda5d2b71bc579df394a10dc6e830912",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Qwen3.8 Max (0902) 排名位置变化",
      "summary": "AA LCR 按当前分数推导的列表位置从 20 变为 19；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 Max (0902)",
      "modelRef": "benchmark:Qwen3.8 Max (0902)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 20,
      "displayRank": 19,
      "rankSource": "derived",
      "modelIdentity": "aa_lcr:Qwen3.8 Max (0902)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "13be8057a7a3c9032cbc7583b21a6af4",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 SciCode，当前分数 57.4%（第 11 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "score": 0.574074074074074,
      "rank": null,
      "displayRank": 11,
      "unit": "ratio",
      "modelIdentity": "aa_scicode:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "b528270354cf9edb43c634249dda25ea",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5.1 (high with fallback) 移出榜单",
      "summary": "Claude Fable 5.1 (high with fallback) 不再出现在 SciCode 当前官方数据中（此前分数 58.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5.1 (high with fallback)",
      "modelRef": "benchmark:Claude Fable 5.1 (high with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "previousScore": 0.586805555555556,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_scicode:Claude Fable 5.1 (high with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "58960e8dbc934ffe15e9ebfdef182185",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 AA Omniscience Index，当前分数 32.03（第 9 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "score": 32.0333333333333,
      "rank": null,
      "displayRank": 9,
      "unit": "score",
      "modelIdentity": "aa_omniscience_index:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "afcb5963b5e8bcbe03e433a031e64ba9",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5.1 (high with fallback) 移出榜单",
      "summary": "Claude Fable 5.1 (high with fallback) 不再出现在 AA Omniscience Index 当前官方数据中（此前分数 40.80）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5.1 (high with fallback)",
      "modelRef": "benchmark:Claude Fable 5.1 (high with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "previousScore": 40.8,
      "previousRank": null,
      "unit": "score",
      "modelIdentity": "aa_omniscience_index:Claude Fable 5.1 (high with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "2eabc1504691f89c89c8ee48aa444da9",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Claude Opus 5 (max) 排名位置变化",
      "summary": "AA Omniscience Index 按当前分数推导的列表位置从 9 变为 8；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Opus 5 (max)",
      "modelRef": "benchmark:Claude Opus 5 (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 9,
      "displayRank": 8,
      "rankSource": "derived",
      "modelIdentity": "aa_omniscience_index:Claude Opus 5 (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "9445f7d1e16b86b7b739954df71a9b9f",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "GPT-5.5 (xhigh) 移出榜单",
      "summary": "GPT-5.5 (xhigh) 不再出现在 Terminal-Bench Hard 当前官方数据中（此前分数 60.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.5 (xhigh)",
      "modelRef": "benchmark:GPT-5.5 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "previousScore": 0.606060606060606,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_hard:GPT-5.5 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "6016716865f7bd49b9668a44755c50a9",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "gpt-oss-120b (high) 排名位置变化",
      "summary": "Terminal-Bench Hard 按当前分数推导的列表位置从 12 变为 11；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "gpt-oss-120b (high)",
      "modelRef": "benchmark:gpt-oss-120b (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 12,
      "displayRank": 11,
      "rankSource": "derived",
      "modelIdentity": "aa_terminalbench_hard:gpt-oss-120b (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "e35dd84e066104a7b35e6e8ca10f1abf",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 CritPt，当前分数 17.7%（第 19 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "score": 0.177142857142857,
      "rank": null,
      "displayRank": 19,
      "unit": "ratio",
      "modelIdentity": "aa_critpt:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "3c0aa54fe53b762228783d197be7ca04",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 CritPt 当前官方数据中（此前分数 28.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "previousScore": 0.2857142857,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_critpt:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "665ab056b54b4b0d90d6281e0e395a42",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Step 5 Preview 排名位置变化",
      "summary": "CritPt 按当前分数推导的列表位置从 15 变为 14；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 15,
      "displayRank": 14,
      "rankSource": "derived",
      "modelIdentity": "aa_critpt:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "be882b1dcc7d2ab4cf6a2185932f9e35",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "DeepSeek V4 Pro 0813 (max) 新上榜",
      "summary": "DeepSeek V4 Pro 0813 (max) 进入 Terminal-Bench v2.1，当前分数 78.7%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "DeepSeek V4 Pro 0813 (max)",
      "modelRef": "benchmark:DeepSeek V4 Pro 0813 (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "score": 0.786516853932584,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_v2_1:DeepSeek V4 Pro 0813 (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "cde97e24aa883ab7dbb2e007323e38c0",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 Terminal-Bench v2.1 当前官方数据中（此前分数 84.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "previousScore": 0.846441947565543,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_v2_1:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "4f1e89323c824b2cbe6f59b1a6a3d53f",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Qwen3.8 27B (xhigh) 排名位置变化",
      "summary": "Terminal-Bench v2.1 按当前分数推导的列表位置从 20 变为 19；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "modelRef": "benchmark:Qwen3.8 27B (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 20,
      "displayRank": 19,
      "rankSource": "derived",
      "modelIdentity": "aa_terminalbench_v2_1:Qwen3.8 27B (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "ab213a64cd2b13bae660cdfb6179f7eb",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5 (with fallback) 移出榜单",
      "summary": "Claude Fable 5 (with fallback) 不再出现在 IFBench 当前官方数据中（此前分数 63.5%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5 (with fallback)",
      "modelRef": "benchmark:Claude Fable 5 (with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "previousScore": 0.63469387755102,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_ifbench:Claude Fable 5 (with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "340a5bdb660ce1d115e76d6134d488a6",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.7 (xhigh) 新上榜",
      "summary": "Grok 4.7 (xhigh) 进入 GDPval-AA Elo，当前分数 1695.21（第 4 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.7 (xhigh)",
      "modelRef": "benchmark:Grok 4.7 (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "score": 1695.21,
      "rank": null,
      "displayRank": 4,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:Grok 4.7 (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "f29d8bf81104a0907a322cc6084e6578",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Fable 5.1 (high with fallback) 移出榜单",
      "summary": "Claude Fable 5.1 (high with fallback) 不再出现在 GDPval-AA Elo 当前官方数据中（此前分数 1617.29）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5.1 (high with fallback)",
      "modelRef": "benchmark:Claude Fable 5.1 (high with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousScore": 1617.29,
      "previousRank": null,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:Claude Fable 5.1 (high with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "4d7ff20484f7c183e8a1bb95261f6026",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Qwen3.8 Max (0902) 排名位置变化",
      "summary": "GDPval-AA Elo 按当前分数推导的列表位置从 6 变为 8；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 Max (0902)",
      "modelRef": "benchmark:Qwen3.8 Max (0902)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 6,
      "displayRank": 8,
      "rankSource": "derived",
      "modelIdentity": "aa_gdpval_elo:Qwen3.8 Max (0902)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "1550bfeeb877c3c2a233a131e2c1348e",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Grok 4.6 (high) 新上榜",
      "summary": "Grok 4.6 (high) 进入 MLCR Overall，当前分数 12.2%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Grok 4.6 (high)",
      "modelRef": "benchmark:Grok 4.6 (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "score": 0.122222222222222,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_mlcr_overall:Grok 4.6 (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "96e5ec3d06636388e65c7de1ea8846f5",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Opus 5 (low) 移出榜单",
      "summary": "Claude Opus 5 (low) 不再出现在 MLCR Overall 当前官方数据中（此前分数 53.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Opus 5 (low)",
      "modelRef": "benchmark:Claude Opus 5 (low)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "previousScore": 0.538888888888889,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_mlcr_overall:Claude Opus 5 (low)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "8752490612503515074b5ccbdc5b0a64",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Qwen3.8 27B (xhigh) 排名位置变化",
      "summary": "MLCR Overall 按当前分数推导的列表位置从 16 变为 15；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "modelRef": "benchmark:Qwen3.8 27B (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-21T18:37:38Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 16,
      "displayRank": 15,
      "rankSource": "derived",
      "modelIdentity": "aa_mlcr_overall:Qwen3.8 27B (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    },
    {
      "eventId": "5d23d9fc467c66841a32e4ccd45d0368",
      "family": "benchmark",
      "eventType": "score_changed",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Step 5 Preview 分数变化",
      "summary": "GDPval-AA Elo 分数从 1565.95 变为 1566.12（+0.17）。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-21T01:18:27Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousScore": 1565.95,
      "score": 1566.12,
      "delta": 0.16999999999984539,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "e241898db461b48b567ca50e296848a7c71e2b520a362fcd11e963e190c56ac1"
      }
    }
  ],
  "eventCount": 51,
  "provenance": {
    "workflowRunId": "35639577363",
    "mainCommit": "1937e6bc5db2677d9b314dd77474763017cf3c61"
  }
};
