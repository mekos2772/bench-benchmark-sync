module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-14T18:13:18Z",
  "windowStart": "2026-09-13T18:13:18Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "hf:tencent/Simple-Attention-Sparsification": {
      "canonicalId": "hf:tencent/Simple-Attention-Sparsification",
      "provider": "Tencent",
      "modelId": "tencent/Simple-Attention-Sparsification",
      "displayName": "Simple-Attention-Sparsification",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-14T07:43:25Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "open_weights_release",
      "access": "open_weights",
      "modalities": {
        "input": [
          "text"
        ],
        "output": [
          "text"
        ]
      },
      "capabilities": [],
      "parameterCount": null,
      "license": null,
      "technicalReportUrl": "https://arxiv.org/abs/2609.13141",
      "description": "*SAS** learns to rank and select KV blocks for each query. Unlike methods that train a sparse-attention selector by distilling dense attention scores, SAS adds continuous gates to the selected blocks so that the language-modeling loss can optimize context ranking end to end.",
      "contextWindow": null,
      "maxInputTokens": null,
      "maxOutputTokens": null,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": null,
        "outputPerMillionTokens": null,
        "cachedInputPerMillionTokens": null
      },
      "availability": [
        "Hugging Face"
      ],
      "officialUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
      "hubRepo": "tencent/Simple-Attention-Sparsification",
      "sourceType": "hub_official_org",
      "sourceOwner": "Tencent",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        }
      ]
    },
    "hf:inclusionAI/gpt-oss-120b-singprobe": {
      "canonicalId": "hf:inclusionAI/gpt-oss-120b-singprobe",
      "provider": "InclusionAI",
      "modelId": "inclusionAI/gpt-oss-120b-singprobe",
      "displayName": "gpt-oss-120b-singprobe",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-14T03:17:19Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "open_weights_release",
      "access": "open_weights",
      "modalities": {
        "input": [],
        "output": []
      },
      "capabilities": [],
      "parameterCount": 5797386,
      "license": "apache-2.0",
      "technicalReportUrl": "https://arxiv.org/abs/2608.30703",
      "description": "SingProbe is an **intrinsic streaming guardrail** built on `openai/gpt-oss-120b`. Rather than running a separate safety model, this lightweight probe reuses the base model's hidden states during generation to score, at every token, **query intent**, **response unsafety**, and **hallucination risk**. It adds less than 0.5% decode-time overhead.",
      "contextWindow": null,
      "maxInputTokens": null,
      "maxOutputTokens": null,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": null,
        "outputPerMillionTokens": null,
        "cachedInputPerMillionTokens": null
      },
      "availability": [
        "Hugging Face"
      ],
      "officialUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
      "hubRepo": "inclusionAI/gpt-oss-120b-singprobe",
      "sourceType": "hub_official_org",
      "sourceOwner": "InclusionAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-14T18:13:18Z",
          "contentHash": "c0d82f75bbd1a5007a4b06ba91e4801ae145c1b45c0926c82001935a6ee4c449",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 3,
  "sourceSummary": {
    "official": 2,
    "catalog": 0,
    "benchmark": 21
  },
  "events": [
    {
      "eventId": "6bf4cc6b101a63bbf249724ce6bc4038",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "Simple-Attention-Sparsification 开放权重发布",
      "summary": "Tencent 在官方组织发布新模型。",
      "repoId": "tencent/Simple-Attention-Sparsification",
      "repo": "tencent/Simple-Attention-Sparsification",
      "modelId": "tencent/Simple-Attention-Sparsification",
      "modelRef": "hf:tencent/Simple-Attention-Sparsification",
      "sourceType": "hub_official_org",
      "sourceOwner": "Tencent",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
          "observedAt": "2026-09-14T07:43:25Z",
          "contentHash": "394f95647783f42be103de14bd2521b945bd3ed99e87ac816b73234a3142595a",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
      "observedAt": "2026-09-14T07:43:25Z",
      "publishedAt": "2026-09-14T07:43:25Z",
      "source": "Hugging Face · Tencent",
      "eventIdentity": "open-release:tencent/Simple-Attention-Sparsification",
      "provenance": {
        "sourceUrl": "https://huggingface.co/tencent/Simple-Attention-Sparsification",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "fca2d91042916d5730fa5a3b99348742",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "gpt-oss-120b-singprobe 开放权重发布",
      "summary": "InclusionAI 在官方组织发布新模型：参数量 5.8M，许可 apache-2.0。",
      "repoId": "inclusionAI/gpt-oss-120b-singprobe",
      "repo": "inclusionAI/gpt-oss-120b-singprobe",
      "modelId": "inclusionAI/gpt-oss-120b-singprobe",
      "modelRef": "hf:inclusionAI/gpt-oss-120b-singprobe",
      "sourceType": "hub_official_org",
      "sourceOwner": "InclusionAI",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
          "observedAt": "2026-09-14T03:17:19Z",
          "contentHash": "cfefae37be8b8884397a7bb7bef33d02a1bc31e840c1495ebab0a2904eac4b03",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
      "observedAt": "2026-09-14T03:17:19Z",
      "publishedAt": "2026-09-14T03:17:19Z",
      "source": "Hugging Face · InclusionAI",
      "eventIdentity": "open-release:inclusionAI/gpt-oss-120b-singprobe",
      "provenance": {
        "sourceUrl": "https://huggingface.co/inclusionAI/gpt-oss-120b-singprobe",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "Artificial Analysis Intelligence Index v4.3 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（53.37）、Claude Fable 5.1 (xhigh with fallback)（53.18）、GPT-6 Astra (max)（52.81）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "contentHash": "40957a4746af6354dba3de2a5da5109f2ffba0d521e013600ff913ada40586bb",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（53.37）",
        "Claude Fable 5.1 (xhigh with fallback)（53.18）",
        "GPT-6 Astra (max)（52.81）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "contentHash": "d80191cc27666072ad0e8ffb40204815cb44d015b46add4b016dfa8de7e08d34",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（96.3%）",
        "GPT-6 Astra (max)（96.1%）",
        "Gemini 3.8 Flash (high)（95.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "Terminal-Bench 4.0 官方数据发生变化；共 20 个模型 · 当前前列：GPT-6 Astra (xhigh)（59.6%）、GPT-6 Astra (max)（59.1%）、Claude Fable 5.1 (xhigh with fallback)（55.1%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-v4-0",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "contentHash": "c3fc11618eea04e030e315ec2685f700bc6ce941309c89937963bed9c11f1f7a",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（59.6%）",
        "GPT-6 Astra (max)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（55.1%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-v4-0",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "AA LCR 官方数据发生变化；共 20 个模型 · 当前前列：Kimi K3 (max)（88.7%）、Claude Fable 5.1 (max with fallback)（85.3%）、Claude Fable 5.1 (medium with fallback)（84.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "contentHash": "fff6adc922d08c629ac972bf7775bd19aa5a4f94dfc345feeae3f2f27f3f8e2d",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Kimi K3 (max)（88.7%）",
        "Claude Fable 5.1 (max with fallback)（85.3%）",
        "Claude Fable 5.1 (medium with fallback)（84.7%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "contentHash": "86cdc112ef8f18cece0da30da837af4a6241e1e97de23bb14efcb0af3d671256",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（58.7%）",
        "Claude Fable 5.1 (high with fallback)（55.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "contentHash": "80ba96947c79420d2229ae409d361ccc649b8ab33aa71a35f7a42811c540403e",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（63.1%）",
        "Claude Fable 5 (with fallback)（61.0%）",
        "Claude Fable 5.1 (xhigh with fallback)（60.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "contentHash": "ebf035b5f1f6f4a44dd8a8bc8105d73d2c695fe58acadcca72c795d2df5600a5",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-5.6 Sol (max)（32.3%）",
        "GPT-6 Astra (max)（31.7%）",
        "GPT-6 Astra (xhigh)（31.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "Terminal-Bench Hard 官方数据发生变化；共 12 个模型 · 当前前列：GPT-5.6 Sol (max)（65.9%）、Claude Fable 5 (with fallback)（62.9%）、GPT-5.6 Sol (medium)（62.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "contentHash": "5eccb6de9041ae47618777ef098a1e9d57485788ab05a545acb5fa4ffef4796f",
      "unit": "ratio",
      "modelCount": 12,
      "topModels": [
        "GPT-5.6 Sol (max)（65.9%）",
        "Claude Fable 5 (with fallback)（62.9%）",
        "GPT-5.6 Sol (medium)（62.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "IFBench 官方数据发生变化；共 12 个模型 · 当前前列：Grok 4.3 (medium)（83.3%）、Grok 4.20 0309（82.9%）、MiniMax-M3（82.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "contentHash": "a444f6fae32ca6c8f33a265d5397dfc3da4cc2efbfcab738439421057ad548d1",
      "unit": "ratio",
      "modelCount": 12,
      "topModels": [
        "Grok 4.3 (medium)（83.3%）",
        "Grok 4.20 0309（82.9%）",
        "MiniMax-M3（82.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "summary": "GDPval-AA Elo 官方数据发生变化；共 20 个模型 · 当前前列：Claude Fable 5.1 (max with fallback)（1763.64）、Claude Fable 5.1 (xhigh with fallback)（1745.29）、Claude Opus 5 (max)（1735.09）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-14T18:13:18Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "contentHash": "7402cfe17ae67b0efd7bcbbd229bed6b6cb2448b4e2ed56bddb148b516e9c544",
      "unit": "raw",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（1763.64）",
        "Claude Fable 5.1 (xhigh with fallback)（1745.29）",
        "Claude Opus 5 (max)（1735.09）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-v2-1",
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "contentHash": "37c7619bed2fc6c089d746cdb70833731e32429285072676d1da51c7061e0c9d",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（91.4%）",
        "Claude Fable 5.1 (xhigh with fallback)（91.0%）",
        "Claude Fable 5.1 (high with fallback)（89.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-v2-1",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "observedAt": "2026-09-14T06:15:48Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "contentHash": "bd11a4fbea22a7e31cc0407e526b685c4a1439ab54e58b58f656c7aa3bf2379d",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（71.1%）",
        "Claude Fable 5 (with fallback)（64.4%）",
        "Claude Opus 5 (high)（59.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "0e913bc433a90d85aac43cadd837f4ef",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Reasoning 官方数据更新",
      "summary": "LiveBench Reasoning 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（92.65）、claude-fable-5-1-max-effort（91.69）、gpt-5.6-sol-max（91.65）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Reasoning dated official leaderboard CSV",
      "benchmarkId": "livebench_reasoning",
      "benchmarkTitle": "LiveBench Reasoning",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "gpt-6-astra-max（92.65）",
        "claude-fable-5-1-max-effort（91.69）",
        "gpt-5.6-sol-max（91.65）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "2337b4a3b64a7e65de965dd208889cb7",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Data Analysis 官方数据更新",
      "summary": "LiveBench Data Analysis 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（82.97）、gpt-5.5-xhigh（81.58）、claude-fable-5-max-effort（80.54）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Data Analysis dated official leaderboard CSV",
      "benchmarkId": "livebench_data_analysis",
      "benchmarkTitle": "LiveBench Data Analysis",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "gpt-6-astra-max（82.97）",
        "gpt-5.5-xhigh（81.58）",
        "claude-fable-5-max-effort（80.54）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "ac7b154817c3cc22954123d7fdb8ea0e",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Coding 官方数据更新",
      "summary": "LiveBench Coding 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（86.38）、claude-fable-5-max-effort（85.99）、gpt-5.6-sol-max（83.94）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_coding",
      "benchmarkTitle": "LiveBench Coding",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "claude-fable-5-1-max-effort（86.38）",
        "claude-fable-5-max-effort（85.99）",
        "gpt-5.6-sol-max（83.94）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "c3267acc5abfd0e17f0352cfc0038308",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Math 官方数据更新",
      "summary": "LiveBench Math 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（97.01）、gpt-6-astra-max（96.81）、gpt-5.6-sol-max（96.20）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Mathematics dated official leaderboard CSV",
      "benchmarkId": "livebench_math",
      "benchmarkTitle": "LiveBench Math",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "claude-fable-5-1-max-effort（97.01）",
        "gpt-6-astra-max（96.81）",
        "gpt-5.6-sol-max（96.20）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "3f0d0cedc39ec358321fe1b694a2e4ed",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Language 官方数据更新",
      "summary": "LiveBench Language 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-max-effort（90.68）、claude-fable-5-1-max-effort（89.50）、gpt-6-astra-max（89.43）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Language dated official leaderboard CSV",
      "benchmarkId": "livebench_language",
      "benchmarkTitle": "LiveBench Language",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "claude-fable-5-max-effort（90.68）",
        "claude-fable-5-1-max-effort（89.50）",
        "gpt-6-astra-max（89.43）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "8980b7eb12c084180a2ee05008e4aeab",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Overall 官方数据更新",
      "summary": "LiveBench Overall 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（83.41）、claude-fable-5-max-effort（82.97）、gpt-6-astra-max（82.16）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench dated official leaderboard CSV",
      "benchmarkId": "livebench_overall",
      "benchmarkTitle": "LiveBench Overall",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "claude-fable-5-1-max-effort（83.41）",
        "claude-fable-5-max-effort（82.97）",
        "gpt-6-astra-max（82.16）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "2ed6865c010329d0072ccc35dfc82251",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Agentic Coding 官方数据更新",
      "summary": "LiveBench Agentic Coding 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：deepseek-v4.1-flash-max（77.27）、claude-fable-5-1-max-effort（66.06）、claude-opus-5-max-effort（65.20）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench Agentic Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_agentic_coding",
      "benchmarkTitle": "LiveBench Agentic Coding",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "deepseek-v4.1-flash-max（77.27）",
        "claude-fable-5-1-max-effort（66.06）",
        "claude-opus-5-max-effort（65.20）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    },
    {
      "eventId": "30e72fd9a58e892d69cdc90e3d876935",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "LiveBench Instruction Following 官方数据更新",
      "summary": "LiveBench Instruction Following 官方数据发生变化；共 57 个模型 · 数据版本 2026-06-25 · 当前前列：gemini-3.8-flash-high（81.41）、gemini-3.7-flash-high（79.93）、gemini-3.1-pro-preview-high（79.10）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-13T21:29:24Z",
      "publishedAt": null,
      "source": "LiveBench IF dated official leaderboard CSV",
      "benchmarkId": "livebench_instruction_following",
      "benchmarkTitle": "LiveBench Instruction Following",
      "release": "2026-06-25",
      "contentHash": "5041eb6c87fb31083c16b98af432df433408b5b1c25412404025c17fac9f1bcb",
      "unit": "score",
      "modelCount": 57,
      "topModels": [
        "gemini-3.8-flash-high（81.41）",
        "gemini-3.7-flash-high（79.93）",
        "gemini-3.1-pro-preview-high（79.10）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
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
      "title": "GLM-5.3 (max) 分数变化",
      "summary": "GDPval-AA Elo 分数从 1657.71 变为 1655.16（-2.55）。",
      "repoId": null,
      "repo": null,
      "modelId": "GLM-5.3 (max)",
      "modelRef": "benchmark:GLM-5.3 (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-14T18:13:18Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousScore": 1657.71,
      "score": 1655.16,
      "delta": -2.5499999999999545,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:GLM-5.3 (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "9fca85ea4b960eb689d20dac48a456c8d435716428ce67024987da0fa66abdb8"
      }
    }
  ],
  "eventCount": 23,
  "provenance": {
    "workflowRunId": "34879453165",
    "mainCommit": "e1662159424a107af8bd90dd2927ca812b38bf73"
  }
};
