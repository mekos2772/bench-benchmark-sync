module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-21T22:10:25Z",
  "windowStart": "2026-09-20T22:10:25Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "hf:XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B": {
      "canonicalId": "hf:XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "provider": "Xiaomi",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "displayName": "MiMo-V2.6-Distill-Qwen-9B",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-21T18:18:40Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "open_weights_release",
      "access": "open_weights",
      "modalities": {
        "input": [
          "text",
          "image"
        ],
        "output": [
          "text"
        ]
      },
      "capabilities": [],
      "parameterCount": 9409813744,
      "license": null,
      "technicalReportUrl": null,
      "description": "MiMo-V2.6-Distill-Qwen-9B is a 9B agentic model developed by Xiaomi MiMo through supervised fine-tuning of Qwen3.5-9B on MiMo-generated data. It covers coding, general-purpose agent tasks, visual coding, and cybersecurity. We release this SFT checkpoint as a starting point for open research in agentic reinforcement learning.",
      "contextWindow": 262144,
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
      "officialUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "hubRepo": "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        }
      ]
    },
    "hf:XiaomiMiMo/MiMo-V2.6-Flash-RL": {
      "canonicalId": "hf:XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "provider": "Xiaomi",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "displayName": "MiMo-V2.6-Flash-RL",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-21T15:39:51Z",
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
      "parameterCount": 159358725504,
      "license": "mit",
      "technicalReportUrl": null,
      "description": "*Scaling Reinforcement Learning Toward Self-Improvement**",
      "contextWindow": 1048576,
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
      "officialUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "hubRepo": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        }
      ]
    },
    "hf:XiaomiMiMo/MiMo-V2.6-Pro-RL": {
      "canonicalId": "hf:XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "provider": "Xiaomi",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "displayName": "MiMo-V2.6-Pro-RL",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-21T15:39:33Z",
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
      "parameterCount": 524121348864,
      "license": "mit",
      "technicalReportUrl": null,
      "description": "*Scaling Reinforcement Learning Toward Self-Improvement**",
      "contextWindow": 1048576,
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
      "officialUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "documentationUrl": null,
      "modelCardUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "hubRepo": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        }
      ]
    },
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
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "9ef3a1db12713881a63c1ae3ff163181ef5ef60f249e11b8ce2f496e3a92eb48",
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
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "2c9109f74c8a4a95523506012414842e6c224ed1c1ee74c650e339da22a1d0f8",
          "sourceType": "official_benchmark"
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "0f9903377a4bf32e52dea11fa445a8553ba07f188ee3491582743b857b52dccf",
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
      "sourceOwner": "Artificial Analysis Intelligence Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "976ac2bf0a44df3cf0682b3147529d5e90d100fffe1852d27fa60cd440799474",
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
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "55f9d4c7a472c7305a331ae74be90d289645672359abcc79734453cdfecb01ff",
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
      "sourceOwner": "Artificial Analysis GPQA Diamond official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a05aea1ac356a4e282f9202d4d596386cca17b9374d0da9bc81af762e768cb1d",
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
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "b981138e357c9da0ff5bea5d181f911567ded66961aa17708670291a33eb08a5",
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
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7880fdfb906cdee91e83a16b367a6b6b6388eb63dfdb0a2a9749d3ee918ae48f",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4040ce87be7e6fd0ebe25a03867c23aa714963de36badb0d5e0b6061c80fcbca",
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
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a5d059770e73ed0d7996bfdb29dfe32513c7aee22cda9b72c458b8813301a4d6",
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
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "caab148ba5c16d6eb5cff5eec2284ecc295ce62e2b9ecf7c314233caec7c4e20",
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
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "32cbba749e8981031a08650f74c3df1ffe30963e06d9c11629b4a82e244c8527",
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
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "f49ca3c44b5fa23a90d0d77da362adc09857e94406e253f8fb3f6eabe2998659",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dd48a3c7082fcc9de96adea92306434856793425f1a99c578b0c185e3f56fb80",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4ee541bc33caf1578186f9e880aa25cb5475c890addc03f3a4260d9a098d3a2f",
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
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4574ec9c5647bee337313310fda1dc1e217dc05dfc0ea33823fa7e1114fa692b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:MiMo-V2.6-Pro": {
      "canonicalId": "benchmark:MiMo-V2.6-Pro",
      "provider": null,
      "modelId": "MiMo-V2.6-Pro",
      "displayName": "MiMo-V2.6-Pro",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ef5d78f07e96615a2f4f97ebb0a69cbddc920321cd85859afab552c1a33fd493",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "73207813cceeff92ed8fb65fc73d24abdc4eba9a886cb79ce410c64cb915919a",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "e1af233f5f802b56aaf76b70ffebef0e3824ca158d3f4b2f67c92cc3e19d871f",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5b8b97ac2b14d18bd46532812e85c56c98fe97e979e50fbcb5b0485add7f00d0",
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
      "sourceOwner": "Artificial Analysis Intelligence Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "eda4130fa13f2bb6f52020458411ff41731e35a130295b5884dc704c98c49c86",
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
      "sourceOwner": "Artificial Analysis Intelligence Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "11a35b4ecb5ff5745161067cb7e3a0f81298594d9d6cc30500732a7fce9f0aed",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Fable 5.1 (max with fallback)": {
      "canonicalId": "benchmark:Claude Fable 5.1 (max with fallback)",
      "provider": null,
      "modelId": "Claude Fable 5.1 (max with fallback)",
      "displayName": "Claude Fable 5.1 (max with fallback)",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "d5b684e8957dd0e1e84715e80161b3469625980fe133d7aaab0117df58849d9b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-5.5 (high)": {
      "canonicalId": "benchmark:GPT-5.5 (high)",
      "provider": null,
      "modelId": "GPT-5.5 (high)",
      "displayName": "GPT-5.5 (high)",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "14978c854cad157eb4046763b5f42c7bc972ae29283bb085c29bb825cd3fc177",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "460e52085e2dc4e6e3eab8ca2bac34a3e7f1d1e60a8e06f76997ecbca0e4f399",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "582624d15273e4ce6b8aeb0f414e5de2f5ad5a42347c684d116bef4b41f37a97",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Gemini 3.8 Flash (medium)": {
      "canonicalId": "benchmark:Gemini 3.8 Flash (medium)",
      "provider": null,
      "modelId": "Gemini 3.8 Flash (medium)",
      "displayName": "Gemini 3.8 Flash (medium)",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "3efab0f1efcab5ee030da52d48ebfbf10772e1a8e50587a19a2a930db7132242",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "090b03baca3f1c5ba932d07bea2f99d2255fd1c75bb7e912638097f20b15ae82",
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
      "sourceOwner": "Artificial Analysis AA LCR official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "2afbbfa87ee2e894afc954310e94f4cbaa8dddcf13c03a595ceb50c9b0f0bc57",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Gemini 3.7 Flash (medium)": {
      "canonicalId": "benchmark:Gemini 3.7 Flash (medium)",
      "provider": null,
      "modelId": "Gemini 3.7 Flash (medium)",
      "displayName": "Gemini 3.7 Flash (medium)",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "ff08a1c9b967bed735f21c423926cf62d31f8e98528e408e52be2edbbe1d8363",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Muse Spark 1.1 (xhigh)": {
      "canonicalId": "benchmark:Muse Spark 1.1 (xhigh)",
      "provider": null,
      "modelId": "Muse Spark 1.1 (xhigh)",
      "displayName": "Muse Spark 1.1 (xhigh)",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "dd407fa5ca99abad3dc4222a0625e58bd93d35b2e0e128ea7e74c4785c2ded83",
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
      "sourceOwner": "Artificial Analysis SciCode official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "5ef4df3912b74164b189d19af2599318e981115f7ca5a50aa027cc418cf799e9",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Inkling": {
      "canonicalId": "benchmark:Inkling",
      "provider": null,
      "modelId": "Inkling",
      "displayName": "Inkling",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "598c3894c8d55e5c45b875e1b520d30aa0dc356271ae1ed741eea88d3a96ae76",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Gemini 3.5 Flash-Lite": {
      "canonicalId": "benchmark:Gemini 3.5 Flash-Lite",
      "provider": null,
      "modelId": "Gemini 3.5 Flash-Lite",
      "displayName": "Gemini 3.5 Flash-Lite",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "92a7959c22216a03f95325a6384901aebfae46c19fdd53f0e2eb13a07da664e6",
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
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
          "observedAt": "2026-09-21T22:10:25Z",
          "contentHash": "239102f8fb4ac6451d4a7e8898166fb9aa606ccfb539132b03d42f263728ce22",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 40,
  "sourceSummary": {
    "official": 3,
    "catalog": 2,
    "benchmark": 50
  },
  "events": [
    {
      "eventId": "4f698bfd89fd0fe51758688a401962c4",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "MiMo-V2.6-Distill-Qwen-9B 开放权重发布",
      "summary": "Xiaomi 在官方组织发布新模型：参数量 9.4B，上下文 262,144 tokens。",
      "repoId": "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "repo": "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "modelRef": "hf:XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "1d17c0debe68c9313e936bc2454adfb978ae0b847f3a5819c292b4e652a433a5",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "observedAt": "2026-09-21T18:18:40Z",
      "publishedAt": "2026-09-21T18:18:40Z",
      "source": "Hugging Face · Xiaomi",
      "eventIdentity": "open-release:XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
      "provenance": {
        "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
      }
    },
    {
      "eventId": "a65e8d4676a15d26b73dfddca18be908",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "MiMo-V2.6-Flash-RL 开放权重发布",
      "summary": "Xiaomi 在官方组织发布新模型：参数量 159.4B，上下文 1,048,576 tokens，许可 mit。",
      "repoId": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "repo": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "modelRef": "hf:XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "b9c89aae281b44cc1d6b0059e88b249a867daa9bb3bd2e3e2d7b4f747ca9b981",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "observedAt": "2026-09-21T15:39:51Z",
      "publishedAt": "2026-09-21T15:39:51Z",
      "source": "Hugging Face · Xiaomi",
      "eventIdentity": "open-release:XiaomiMiMo/MiMo-V2.6-Flash-RL",
      "provenance": {
        "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
      }
    },
    {
      "eventId": "861a47251e5a55db5845543408accee6",
      "family": "model",
      "eventType": "official_model_release",
      "eventClass": "model_release",
      "trustTier": "official",
      "priority": "P0",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "MiMo-V2.6-Pro-RL 开放权重发布",
      "summary": "Xiaomi 在官方组织发布新模型：参数量 524.1B，上下文 1,048,576 tokens，许可 mit。",
      "repoId": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "repo": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "modelId": "XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "modelRef": "hf:XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "sourceType": "hub_official_org",
      "sourceOwner": "Xiaomi",
      "evidence": [
        {
          "field": "modelRepository",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "65e3f58655f487b305237808b4a498cd735bce177f5d59b86791912a031a9105",
          "sourceType": "hub_official_org"
        }
      ],
      "url": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "observedAt": "2026-09-21T15:39:33Z",
      "publishedAt": "2026-09-21T15:39:33Z",
      "source": "Hugging Face · Xiaomi",
      "eventIdentity": "open-release:XiaomiMiMo/MiMo-V2.6-Pro-RL",
      "provenance": {
        "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
      "summary": "AA LCR 官方数据发生变化；共 20 个模型 · 当前前列：Kimi K3 (max)（88.7%）、Step 5 Preview（88.3%）、MiMo-V2.6-Pro（86.3%）。",
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
        "MiMo-V2.6-Pro（86.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
      }
    },
    {
      "eventId": "53435cb472a124dcdcdc57cef87712e1",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Step 5 Preview 排名位置变化",
      "summary": "SciCode 按当前分数推导的列表位置从 8 变为 9；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-21T22:10:25Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 8,
      "displayRank": 9,
      "rankSource": "derived",
      "modelIdentity": "aa_scicode:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
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
        "contentHash": "8b7a408a709f92dcb62cef6297361144edef21dc63312760e37c850f78e6b62c"
      }
    }
  ],
  "eventCount": 55,
  "provenance": {
    "workflowRunId": "35661254654",
    "mainCommit": "092a8201d9044c53752c8dc20d652e2d52ce102e"
  }
};
