module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-15T18:17:37Z",
  "windowStart": "2026-09-14T18:17:37Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "hf:nvidia/c-foundationstereo-s": {
      "canonicalId": "hf:nvidia/c-foundationstereo-s",
      "provider": "NVIDIA",
      "modelId": "nvidia/c-foundationstereo-s",
      "displayName": "c-foundationstereo-s",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-15T01:25:18Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "open_weights_release",
      "access": "open_weights",
      "modalities": {
        "input": [],
        "output": []
      },
      "capabilities": [],
      "parameterCount": null,
      "license": "other",
      "technicalReportUrl": "https://arxiv.org/abs/2501.09898",
      "description": "FoundationStereo is a foundation model developed by NVIDIA Research for Stereo Depth Estimation. The model takes as input an RGB stereo-image pair and outputs an accurate disparity map. The model was designed to achieve strong zero-shot generalization and has been shown to generalize to various scenarios with wide zero-shot coverage.",
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
      "officialUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
      "hubRepo": "nvidia/c-foundationstereo-s",
      "sourceType": "hub_official_org",
      "sourceOwner": "NVIDIA",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        }
      ]
    },
    "hf:nvidia/foundationpose": {
      "canonicalId": "hf:nvidia/foundationpose",
      "provider": "NVIDIA",
      "modelId": "nvidia/foundationpose",
      "displayName": "foundationpose",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-15T01:25:12Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "open_weights_release",
      "access": "open_weights",
      "modalities": {
        "input": [],
        "output": []
      },
      "capabilities": [],
      "parameterCount": null,
      "license": "other",
      "technicalReportUrl": "https://arxiv.org/abs/2312.08344",
      "description": "FoundationPose is a unified foundation model for 6-DoF (Degrees of Freedom) object pose estimation and tracking. This approach can be instantly applied at test-time to a novel object without fine-tuning, as long as its CAD model is given. This model is ready for commercial use.",
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
      "officialUrl": "https://huggingface.co/nvidia/foundationpose",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/nvidia/foundationpose",
      "hubRepo": "nvidia/foundationpose",
      "sourceType": "hub_official_org",
      "sourceOwner": "NVIDIA",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "5d9fea87edf74e49ea51bb2791c7bd0aa0f5b5856325265e6708f3a8fe5b362f",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "9092be089a10990177e1aad20682cf0822788ff51f6451fd233028735b7ec4c3",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 4,
  "sourceSummary": {
    "official": 2,
    "catalog": 0,
    "benchmark": 14
  },
  "events": [
    {
      "eventId": "74a42da104358c2e7024e1b2de198f4d",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "c-foundationstereo-s 开放权重发布",
      "summary": "NVIDIA 在官方组织发布新模型：许可 other。",
      "repoId": "nvidia/c-foundationstereo-s",
      "repo": "nvidia/c-foundationstereo-s",
      "modelId": "nvidia/c-foundationstereo-s",
      "modelRef": "hf:nvidia/c-foundationstereo-s",
      "sourceType": "hub_official_org",
      "sourceOwner": "NVIDIA",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "614ec43cab44b1fd4fac665ac130fdb58df199722a4e5e2a4ff40b1180b2b2be",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/nvidia/c-foundationstereo-s",
      "observedAt": "2026-09-15T01:25:18Z",
      "publishedAt": "2026-09-15T01:25:18Z",
      "source": "Hugging Face · NVIDIA",
      "eventIdentity": "open-release:nvidia/c-foundationstereo-s",
      "provenance": {
        "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
      }
    },
    {
      "eventId": "f87764ad8282002f718f1fce040c281c",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "foundationpose 开放权重发布",
      "summary": "NVIDIA 在官方组织发布新模型：许可 other。",
      "repoId": "nvidia/foundationpose",
      "repo": "nvidia/foundationpose",
      "modelId": "nvidia/foundationpose",
      "modelRef": "hf:nvidia/foundationpose",
      "sourceType": "hub_official_org",
      "sourceOwner": "NVIDIA",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "8943a205416052f5b18ef36be1545525aabe1b668dfc815c477e4f72418b8f53",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/nvidia/foundationpose",
      "observedAt": "2026-09-15T01:25:12Z",
      "publishedAt": "2026-09-15T01:25:12Z",
      "source": "Hugging Face · NVIDIA",
      "eventIdentity": "open-release:nvidia/foundationpose",
      "provenance": {
        "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "contentHash": "d00d90598288f33948bfd5fa55ed500dbcd23822cfabf859aad3ee035d25e3f3",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（53.37）",
        "Claude Fable 5.1 (xhigh with fallback)（53.18）",
        "GPT-6 Astra (max)（52.81）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "contentHash": "6a3b70d8aa7050627f52de22814e5ca491b9de7ba8531dacdaf970ff0b2a7043",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（59.6%）",
        "GPT-6 Astra (max)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（55.1%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-v4-0",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "contentHash": "a6fb6c5510f322df52412d27538584d8cfcaa765f193be5b7f61916e5c0b21d4",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（96.3%）",
        "GPT-6 Astra (max)（96.1%）",
        "Gemini 3.8 Flash (high)（95.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "contentHash": "1c185fb0f437a10c8267ac906a9f7bd27deb6877c36528dd51990c8221b49a08",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（58.7%）",
        "Claude Fable 5.1 (high with fallback)（55.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "contentHash": "237d2d9d816a7408b3c5e1d74bfcd4fd0518996009903c446a4410b20422f03b",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Kimi K3 (max)（88.7%）",
        "Claude Fable 5.1 (max with fallback)（85.3%）",
        "Claude Fable 5.1 (medium with fallback)（84.7%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "contentHash": "8c58095f54c53e1bdea9eec23082605c53c808ec70aa7ea58cabb05ee5a99ef1",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（63.1%）",
        "Claude Fable 5 (with fallback)（61.0%）",
        "Claude Fable 5.1 (xhigh with fallback)（60.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "contentHash": "fcd91805dcb2e36711d533afc0c974ca61f8af5a0c2b4558e1792a6ebf774ff7",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-5.6 Sol (max)（32.3%）",
        "GPT-6 Astra (max)（31.7%）",
        "GPT-6 Astra (xhigh)（31.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "contentHash": "21df99461b94024df5a03a372b9e3af43bff2b9753ed56b19fd83493f4b020ba",
      "unit": "ratio",
      "modelCount": 12,
      "topModels": [
        "GPT-5.6 Sol (max)（65.9%）",
        "Claude Fable 5 (with fallback)（62.9%）",
        "GPT-5.6 Sol (medium)（62.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "contentHash": "23889712569a69d15965ba207d0f60afea8df5a86feb1f12797a3513344cfea1",
      "unit": "ratio",
      "modelCount": 12,
      "topModels": [
        "Grok 4.3 (medium)（83.3%）",
        "Grok 4.20 0309（82.9%）",
        "MiniMax-M3（82.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "contentHash": "ea137315bba23d4e476f79254f6493edd6da2155e1c03e37dd4f289178b2b0d9",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（91.4%）",
        "Claude Fable 5.1 (xhigh with fallback)（91.0%）",
        "Claude Fable 5.1 (high with fallback)（89.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-v2-1",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-15T09:21:31Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "contentHash": "8795beed5e5214a497d6149a351a5e87868736db66526165c762b2c564976f9c",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（71.1%）",
        "Claude Fable 5 (with fallback)（64.4%）",
        "Claude Opus 5 (high)（59.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
      }
    },
    {
      "eventId": "1a3beac418b6a8940cc0c246d233bc9d",
      "family": "benchmark",
      "eventType": "significant_score_change",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "GPT-5.6 Luna (max) 分数变化",
      "summary": "GDPval-AA Elo 分数从 1489.33 变为 1463.89（-25.44）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Luna (max)",
      "modelRef": "benchmark:GPT-5.6 Luna (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-15T14:22:13Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousScore": 1489.33,
      "score": 1463.89,
      "delta": -25.439999999999827,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:GPT-5.6 Luna (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "observedAt": "2026-09-14T21:48:41Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "contentHash": "74add8f44ae41dc9c3c940f3309bc7af00ae3e5cab51d5f6b8035aab14dc85df",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (high)（43.73）",
        "Claude Fable 5.1 (max with fallback)（43.45）",
        "GPT-6 Astra (xhigh)（43.42）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
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
      "title": "GPT-5.6 Terra (max) 排名位置变化",
      "summary": "GDPval-AA Elo 按当前分数推导的列表位置从 20 变为 19；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-15T14:22:13Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 20,
      "displayRank": 19,
      "rankSource": "derived",
      "modelIdentity": "aa_gdpval_elo:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "0a3d39093f8b079e75ab6738eded21b49fcd641524a166702fd8c384df4091ea"
      }
    }
  ],
  "eventCount": 16,
  "provenance": {
    "workflowRunId": "35006539031",
    "mainCommit": "0bce40c3715b7a923d7fc2fe9bff8a297e9dc3db"
  }
};
