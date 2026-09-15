module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-15T21:25:01Z",
  "windowStart": "2026-09-14T21:25:01Z",
  "collectorStatus": "partial",
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
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/nvidia/c-foundationstereo-s",
          "observedAt": "2026-09-15T01:25:18Z",
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
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
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "technicalReportUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/nvidia/foundationpose",
          "observedAt": "2026-09-15T01:25:12Z",
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
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
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "fb602685de6cf56a23c561230e0c2c1d2cf26d7a0b86e961cdfad5b0c27f5ff6",
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
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T14:22:13Z",
          "contentHash": "4864cacf3bcb934e8c62efcf024cb49e0b2b530c91f59900dfe8b99bc424030f",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "d40d7a2c5095432bac7c9629596d04dc0cd1ccfc5c2efa5b2fa62e08a79e7e0a",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "65a390d05e2244d8e919dea5eebe0b2dbb6c911fa15d2b683621b65d94d57cee",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "f1fb1c7d8df360c60efb20d6bf9d39e56447277fdfce63866c55b1eb277dd4f9",
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
      "sourceOwner": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "7ee7b57b3956910681e5961ca6a03f62228b83a13f513d98f70b2a33ad8bd9b0",
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
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "0c1d91e1f263ccbb60a969f277c9cd4330f4ed104490dca41fa3221cae7f0bbd",
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
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-15T21:25:01Z",
          "contentHash": "873d6278a8260d64f0e67128cabbe98027fccd571939084b983a48c61121fb32",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 10,
  "sourceSummary": {
    "official": 2,
    "catalog": 0,
    "benchmark": 17
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
          "contentHash": "b37b8424bf915046c0ffbf13920e612cd5a5e8f06030531b5681fba65e7b33c8",
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
          "contentHash": "366c7963dbc13f250d264a0d1c489797d7618aeb93afe93ce6018e6ff9e0256f",
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
      "observedAt": "2026-09-15T21:25:01Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "contentHash": "c420b31525ad54e27ca34385298d28fcb32088b34b04e1631b1f9c74771ffd60",
      "unit": "raw",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（1763.64）",
        "Claude Fable 5.1 (xhigh with fallback)（1745.29）",
        "Claude Opus 5 (max)（1735.09）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
      "title": "Qwen3.8 Max (0902) 新上榜",
      "summary": "Qwen3.8 Max (0902) 进入 GDPval-AA Elo，当前分数 1688.96（第 6 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 Max (0902)",
      "modelRef": "benchmark:Qwen3.8 Max (0902)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-15T21:25:01Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "score": 1688.96,
      "rank": null,
      "displayRank": 6,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:Qwen3.8 Max (0902)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
      "summary": "Claude Fable 5.1 (high with fallback) 不再出现在 GDPval-AA Elo 当前官方数据中（此前分数 1649.77）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Fable 5.1 (high with fallback)",
      "modelRef": "benchmark:Claude Fable 5.1 (high with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-15T21:25:01Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "previousScore": 1649.77,
      "previousRank": null,
      "unit": "raw",
      "modelIdentity": "aa_gdpval_elo:Claude Fable 5.1 (high with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
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
        "contentHash": "c32ed831395c6007f559ba0383a18c053dcb7ddbf2b7fd9fa9fa08d8433e634e"
      }
    }
  ],
  "eventCount": 19,
  "collectorFailures": [
    "terminal_bench_v4_0:ValueError",
    "terminalbench_v2_1:ValueError"
  ],
  "provenance": {
    "workflowRunId": "35025462714",
    "mainCommit": "e263e930b5ffb76d1235f9432ee569917291da08"
  }
};
