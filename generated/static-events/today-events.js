module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-22T00:47:45Z",
  "windowStart": "2026-09-21T00:47:45Z",
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
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Distill-Qwen-9B",
          "observedAt": "2026-09-21T18:18:40Z",
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
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
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Flash-RL",
          "observedAt": "2026-09-21T15:39:51Z",
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
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
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "provider",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "status",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "access",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "parameterCount",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "license",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "description",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "officialUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "hubRepo",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "availability",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
          "sourceType": "hub_official_org"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://huggingface.co/XiaomiMiMo/MiMo-V2.6-Pro-RL",
          "observedAt": "2026-09-21T15:39:33Z",
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
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
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/x-ai/grok-4.7",
          "observedAt": "2026-09-21T16:19:01Z",
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
          "sourceType": "openrouter_catalog"
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
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "537c659e0e1141468ee627ad3c5446ef50df6f8dadced251d116bd507a8cdfde",
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
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "73fa014b67c964434c03f9c12addadac178b12a1af66aa6829897c8f525fec48",
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
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "775035c36e9f7b629297ec2297f9eebf40c9e5dce5fb482f3e621fb14eba71d4",
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
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "3eb5552cf8f77676e29f33d75880eead7df2f8a111ec1dae41b4387fa00cacdb",
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
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "a07c2ebe3afd9b2621d0d36603d30278da9e5dbae46974fbf80ba3707929f471",
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
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "374224aab8f4e3a472524ff231bbf4551ee5343fed71ad2eecce2dd033368cb7",
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
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "988a375e0a469894cf8fd244b057b0a51c504e81d070f74cddab93003989bf47",
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
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "041b5c52fe7d531e182b5e1c7167c396573632310bde1ecb0f11bec91c8bc1b5",
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
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "e86ec1671d2ad74d824e902ce96975b32178aa6090c00eb60f87d3769d371be6",
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
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "6f86e11ee9681c3582ca219e004a7f5f527909292696785cfb4c1b457dbcb3d9",
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
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "8dd0755835608446f6b2da9162b4458b73af7b50cd91c134671004bb26282aca",
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
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "d478338993486905167781297988a26eef94e51c6346f724176686deb335ae28",
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
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "4d57e5248c5bf12c011d2a446a36dc829587edd3a4aa43ea7ce6f623f866eeef",
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
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "dcdb8e5348ad9d4e2e8475b591901da3d1e375ff3dea5254c6bd84bdc10bc93c",
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
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "022caff16a2fd18c8157f71a8f10cde0983ff4dffc0d7e345e2e2130dac70342",
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
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-21T18:37:38Z",
          "contentHash": "7f55be361efc1eedeb930f0c68bf90c0437819fcb14548010ece58469ecd9f08",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:grok-4.7-xhigh": {
      "canonicalId": "benchmark:grok-4.7-xhigh",
      "provider": null,
      "modelId": "grok-4.7-xhigh",
      "displayName": "grok-4.7-xhigh",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5d1e35cd84ba4f9dfb0d8faf64622ef7794d7286e9dcc05771b308aab37f6c8b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-opus-4-5-20251101-thinking-64k-high-effort": {
      "canonicalId": "benchmark:claude-opus-4-5-20251101-thinking-64k-high-effort",
      "provider": null,
      "modelId": "claude-opus-4-5-20251101-thinking-64k-high-effort",
      "displayName": "claude-opus-4-5-20251101-thinking-64k-high-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8b0c83f045046252a4ac15f010a6f6e93ae64fb021590df1ce754956b19afe8b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-opus-4-6-thinking-auto-high-effort": {
      "canonicalId": "benchmark:claude-opus-4-6-thinking-auto-high-effort",
      "provider": null,
      "modelId": "claude-opus-4-6-thinking-auto-high-effort",
      "displayName": "claude-opus-4-6-thinking-auto-high-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5cafe6a447121c3a29ac1aaf5f707eb5484a509912f013cfbbcd94518b283ef6",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-opus-4-7-xhigh-effort": {
      "canonicalId": "benchmark:claude-opus-4-7-xhigh-effort",
      "provider": null,
      "modelId": "claude-opus-4-7-xhigh-effort",
      "displayName": "claude-opus-4-7-xhigh-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a7c5670741f00661fd1cf22aac14cdfae0f9c7de595ad88667447f0c0308d3ba",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-opus-4-8-max-effort": {
      "canonicalId": "benchmark:claude-opus-4-8-max-effort",
      "provider": null,
      "modelId": "claude-opus-4-8-max-effort",
      "displayName": "claude-opus-4-8-max-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "df39576736ec81d66ee8bf8190e1f087fd23dee66d112cb7052ad166788a0b2e",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-sonnet-4-6-thinking-auto-medium-effort": {
      "canonicalId": "benchmark:claude-sonnet-4-6-thinking-auto-medium-effort",
      "provider": null,
      "modelId": "claude-sonnet-4-6-thinking-auto-medium-effort",
      "displayName": "claude-sonnet-4-6-thinking-auto-medium-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "40c8e2588bdda24519768569647c7941bdd1ec76825fc0c5c0233fd95eb8962e",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-sonnet-5-xhigh-effort": {
      "canonicalId": "benchmark:claude-sonnet-5-xhigh-effort",
      "provider": null,
      "modelId": "claude-sonnet-5-xhigh-effort",
      "displayName": "claude-sonnet-5-xhigh-effort",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6fb0a7b0bc345ee9016dab0a4481c0d574a9e303809b2ca9110d701dacf89dbd",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4-flash-0731": {
      "canonicalId": "benchmark:deepseek-v4-flash-0731",
      "provider": null,
      "modelId": "deepseek-v4-flash-0731",
      "displayName": "deepseek-v4-flash-0731",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0d0f3800f55ea7f062dfc142f056d5e1cd52ef09158230f1591fb798cb80674d",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4-flash-vision-exp": {
      "canonicalId": "benchmark:deepseek-v4-flash-vision-exp",
      "provider": null,
      "modelId": "deepseek-v4-flash-vision-exp",
      "displayName": "deepseek-v4-flash-vision-exp",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "3b45948db3cfa3bd1fd116baed5519722fd48819b55bacc39c55fda6e28adbe0",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4-flash": {
      "canonicalId": "benchmark:deepseek-v4-flash",
      "provider": null,
      "modelId": "deepseek-v4-flash",
      "displayName": "deepseek-v4-flash",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "381410887f536e62920d7eafb1970a638a64b594da21c910efa290c02d4e3f0f",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4-pro": {
      "canonicalId": "benchmark:deepseek-v4-pro",
      "provider": null,
      "modelId": "deepseek-v4-pro",
      "displayName": "deepseek-v4-pro",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "0af7475ced7e512c318c79142a29b9aeaef6e113f46e957dd603a602bcf2b0ea",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.1-pro-preview-high": {
      "canonicalId": "benchmark:gemini-3.1-pro-preview-high",
      "provider": null,
      "modelId": "gemini-3.1-pro-preview-high",
      "displayName": "gemini-3.1-pro-preview-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "22fe581b345a40e2d43c33c60b34e0c5ed4e345323b6fbc6c468a416a810cfcf",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.5-flash-high": {
      "canonicalId": "benchmark:gemini-3.5-flash-high",
      "provider": null,
      "modelId": "gemini-3.5-flash-high",
      "displayName": "gemini-3.5-flash-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e0792f27a34993a44f96f6b467b23a5f9c487986414a905a56f4411876bb5664",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.5-flash-lite-high": {
      "canonicalId": "benchmark:gemini-3.5-flash-lite-high",
      "provider": null,
      "modelId": "gemini-3.5-flash-lite-high",
      "displayName": "gemini-3.5-flash-lite-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ee6c15847b98c5506b4f979d817bc24ca7a620eb68b1a9d35121b45355cb4dd2",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.6-flash-high": {
      "canonicalId": "benchmark:gemini-3.6-flash-high",
      "provider": null,
      "modelId": "gemini-3.6-flash-high",
      "displayName": "gemini-3.6-flash-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e5ec7478942754943296b405894b6bf014c529bf2d1a81e3ad0a266b57fb7f63",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.8-flash-high": {
      "canonicalId": "benchmark:gemini-3.8-flash-high",
      "provider": null,
      "modelId": "gemini-3.8-flash-high",
      "displayName": "gemini-3.8-flash-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "758f05ec86dcb1a9c2592126dd91d8a7eb1482897d234d7e7cadb7deaf7697ff",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:glm-5.2": {
      "canonicalId": "benchmark:glm-5.2",
      "provider": null,
      "modelId": "glm-5.2",
      "displayName": "glm-5.2",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9686a232ac3e3eef49eefab27a4717bc9afd70b9feee0f8bc3e935445504a1a3",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:glm-5.3-flash": {
      "canonicalId": "benchmark:glm-5.3-flash",
      "provider": null,
      "modelId": "glm-5.3-flash",
      "displayName": "glm-5.3-flash",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d924632d7f736846e50f6884282ef142b31496d66b50079aca4906e49a6a3975",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:glm-5.3": {
      "canonicalId": "benchmark:glm-5.3",
      "provider": null,
      "modelId": "glm-5.3",
      "displayName": "glm-5.3",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10b01cbee171cb84968f92546e35ec818a0774679f7cabfebd53c2ece12af536",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.2-2025-12-11-high": {
      "canonicalId": "benchmark:gpt-5.2-2025-12-11-high",
      "provider": null,
      "modelId": "gpt-5.2-2025-12-11-high",
      "displayName": "gpt-5.2-2025-12-11-high",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "37773d6fd5ba33fdbd81bdf62b2134b3374b23f0d744fa6ead64d572bc9a3bd7",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.2-codex": {
      "canonicalId": "benchmark:gpt-5.2-codex",
      "provider": null,
      "modelId": "gpt-5.2-codex",
      "displayName": "gpt-5.2-codex",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbae153b50bf62b8cad415e6bb9564f16668e01525f148b0ea90bb534dcd4bae",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.4-mini-xhigh": {
      "canonicalId": "benchmark:gpt-5.4-mini-xhigh",
      "provider": null,
      "modelId": "gpt-5.4-mini-xhigh",
      "displayName": "gpt-5.4-mini-xhigh",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5979ed5aba6453694adf35c562973b2a6331aa66d682048d3cfd02a25a9205a",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.4-nano-xhigh": {
      "canonicalId": "benchmark:gpt-5.4-nano-xhigh",
      "provider": null,
      "modelId": "gpt-5.4-nano-xhigh",
      "displayName": "gpt-5.4-nano-xhigh",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d666d95bf0238b1088b8205144adf8ec74bd569a243761e0a31ead2afb80348e",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.6-luna-max": {
      "canonicalId": "benchmark:gpt-5.6-luna-max",
      "provider": null,
      "modelId": "gpt-5.6-luna-max",
      "displayName": "gpt-5.6-luna-max",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "af9d2ba99dd8643bb04c64e1c7f9abea2c8f3d1646e104e93e63674bc9a8130b",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:grok-4.3": {
      "canonicalId": "benchmark:grok-4.3",
      "provider": null,
      "modelId": "grok-4.3",
      "displayName": "grok-4.3",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4efa068d9f995081784a8bdfef3a0db61409b2d11fca4a3ca6e840742e6f25f",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:grok-4.5": {
      "canonicalId": "benchmark:grok-4.5",
      "provider": null,
      "modelId": "grok-4.5",
      "displayName": "grok-4.5",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "5be8a829170623cad0ec24916e208b5016360e6264131fd7a83dc90eb22d3bb1",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:grok-build-0.1": {
      "canonicalId": "benchmark:grok-build-0.1",
      "provider": null,
      "modelId": "grok-build-0.1",
      "displayName": "grok-build-0.1",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10934d50cc61a95f7e0b4fc83e7253add917b59caf2b27b76c989eb50c04d1c5",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:inkling-xhigh": {
      "canonicalId": "benchmark:inkling-xhigh",
      "provider": null,
      "modelId": "inkling-xhigh",
      "displayName": "inkling-xhigh",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d1242bc9edd8949aeb430bc725631bb6746b63a7db2b7c3962bf30391db8390c",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:kimi-k2.6-thinking": {
      "canonicalId": "benchmark:kimi-k2.6-thinking",
      "provider": null,
      "modelId": "kimi-k2.6-thinking",
      "displayName": "kimi-k2.6-thinking",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e11537e48b77ecd6e620e39c60201e8608a3332cb6836433cf3b9acd836b3dbf",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:kimi-k2.7-code": {
      "canonicalId": "benchmark:kimi-k2.7-code",
      "provider": null,
      "modelId": "kimi-k2.7-code",
      "displayName": "kimi-k2.7-code",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2bc9e62911e799bb8d4c8c692fb02b6d9b6aa24d7bc0673cfe9cafa2e8c086dc",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:minimax-m3": {
      "canonicalId": "benchmark:minimax-m3",
      "provider": null,
      "modelId": "minimax-m3",
      "displayName": "minimax-m3",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "c5e58d067b7cb52d8e203873b4b725f7b1edaf153d7d49cb280dd68cc8e83e59",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:muse-spark-1.1-xhigh": {
      "canonicalId": "benchmark:muse-spark-1.1-xhigh",
      "provider": null,
      "modelId": "muse-spark-1.1-xhigh",
      "displayName": "muse-spark-1.1-xhigh",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "10ab1f0dcbc7bcf4991f578e457f993e3ef2e2455df0055f5077623564f43fda",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:nemotron-3-ultra-550b-a55b": {
      "canonicalId": "benchmark:nemotron-3-ultra-550b-a55b",
      "provider": null,
      "modelId": "nemotron-3-ultra-550b-a55b",
      "displayName": "nemotron-3-ultra-550b-a55b",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "bbbff64bd03484bd49bc09352ba881d57adcf86d0c74f5aac83527c169819f4c",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:ox-alpha-max": {
      "canonicalId": "benchmark:ox-alpha-max",
      "provider": null,
      "modelId": "ox-alpha-max",
      "displayName": "ox-alpha-max",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ec95689735ba591703e1de9da8d2fccaa08901788c5a88992b58c24393039706",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.6-27b": {
      "canonicalId": "benchmark:qwen3.6-27b",
      "provider": null,
      "modelId": "qwen3.6-27b",
      "displayName": "qwen3.6-27b",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f526d506841791d30d53fb6aaf05c57fc9476480d9088931c43f9d5cc553f0d0",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.6-plus": {
      "canonicalId": "benchmark:qwen3.6-plus",
      "provider": null,
      "modelId": "qwen3.6-plus",
      "displayName": "qwen3.6-plus",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "6192b133e6e877ac45691b99deffee7fc13560a87892347ff8f87dbb9c1970a4",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.7-max": {
      "canonicalId": "benchmark:qwen3.7-max",
      "provider": null,
      "modelId": "qwen3.7-max",
      "displayName": "qwen3.7-max",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "054e74df6b8be49b9aa5897a07ad24b06883a7f9c639ce501fe423e7ea2b1b90",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.8-27b": {
      "canonicalId": "benchmark:qwen3.8-27b",
      "provider": null,
      "modelId": "qwen3.8-27b",
      "displayName": "qwen3.8-27b",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d49982de2728cf24d0ec57b3e961e710b9901fc71aea33e98d2ed8676e209e5c",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.8-flash-next": {
      "canonicalId": "benchmark:qwen3.8-flash-next",
      "provider": null,
      "modelId": "qwen3.8-flash-next",
      "displayName": "qwen3.8-flash-next",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "451c477422704660da3396095793783fd780ac1fb91aac81837dccac9cd4be46",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:smaug-mini": {
      "canonicalId": "benchmark:smaug-mini",
      "provider": null,
      "modelId": "smaug-mini",
      "displayName": "smaug-mini",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b04f09a8f78b2c474d2742966a844653c220c2546f4cf9ad7afbffd623dfefa4",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:union-alpha": {
      "canonicalId": "benchmark:union-alpha",
      "provider": null,
      "modelId": "union-alpha",
      "displayName": "union-alpha",
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
      "sourceOwner": "LiveBench dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "61465654917d9de811bfcf20c1edf677aae11bfa79fc9b0a3a67fc34ebf31deb",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:grok-4.6": {
      "canonicalId": "benchmark:grok-4.6",
      "provider": null,
      "modelId": "grok-4.6",
      "displayName": "grok-4.6",
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
      "sourceOwner": "LiveBench Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "ad14ff771922dd832e82301764faf68bd294c279be889bf227f384cfff882078",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:qwen3.8-max": {
      "canonicalId": "benchmark:qwen3.8-max",
      "provider": null,
      "modelId": "qwen3.8-max",
      "displayName": "qwen3.8-max",
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
      "sourceOwner": "LiveBench Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "8a63e144b12e2f2a5d1f7789482fdadc933514d336cbe22c063691125cc2a16c",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:smaug-flash": {
      "canonicalId": "benchmark:smaug-flash",
      "provider": null,
      "modelId": "smaug-flash",
      "displayName": "smaug-flash",
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
      "sourceOwner": "LiveBench Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1bf9d3808dadeb486f14a35970bbbfa9d97364fd7aab97cf068f00c72992ac6f",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:muse-spark-1.2-xhigh": {
      "canonicalId": "benchmark:muse-spark-1.2-xhigh",
      "provider": null,
      "modelId": "muse-spark-1.2-xhigh",
      "displayName": "muse-spark-1.2-xhigh",
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
      "sourceOwner": "LiveBench Language dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "2a026bcab4c14f2e179b90952c32ace4c79d607bc809a9c700a7c7341a665d19",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4-pro-0813": {
      "canonicalId": "benchmark:deepseek-v4-pro-0813",
      "provider": null,
      "modelId": "deepseek-v4-pro-0813",
      "displayName": "deepseek-v4-pro-0813",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "47fc384fa51fe5a897ad1aade914e81989e9a400cde5a5a0678cc07b3e87e240",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:deepseek-v4.1-flash-max": {
      "canonicalId": "benchmark:deepseek-v4.1-flash-max",
      "provider": null,
      "modelId": "deepseek-v4.1-flash-max",
      "displayName": "deepseek-v4.1-flash-max",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "b77df9c33eed29b1e217752c6543e333126b68e12956fca129cc94a6c1df7fce",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gemini-3.7-flash-high": {
      "canonicalId": "benchmark:gemini-3.7-flash-high",
      "provider": null,
      "modelId": "gemini-3.7-flash-high",
      "displayName": "gemini-3.7-flash-high",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "96921a26dc6c92d9a062143b16a0530e94e9ad7d0895b046a52c4c6828e25511",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.4-xhigh": {
      "canonicalId": "benchmark:gpt-5.4-xhigh",
      "provider": null,
      "modelId": "gpt-5.4-xhigh",
      "displayName": "gpt-5.4-xhigh",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9dcd5dddcc4854babd42bcb9c71e93bd6cb3b913ae91cc780e4a2debf0994858",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.6-terra-max": {
      "canonicalId": "benchmark:gpt-5.6-terra-max",
      "provider": null,
      "modelId": "gpt-5.6-terra-max",
      "displayName": "gpt-5.6-terra-max",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "f221495dba0980c732bff92e87344ad5cbfda408fdf523bbb7b69b71d6026a0d",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:kimi-k3": {
      "canonicalId": "benchmark:kimi-k3",
      "provider": null,
      "modelId": "kimi-k3",
      "displayName": "kimi-k3",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1112be29b92ea947c5114df74912064f1bf0099839aef6e6e93e1140eb35b7c8",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:smaug-agentic": {
      "canonicalId": "benchmark:smaug-agentic",
      "provider": null,
      "modelId": "smaug-agentic",
      "displayName": "smaug-agentic",
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
      "sourceOwner": "LiveBench Mathematics dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "50b88bc621a337a15cb149444d85ca0b209eef2aed028d3e6341be24df3e38ba",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-opus-5-max-effort": {
      "canonicalId": "benchmark:claude-opus-5-max-effort",
      "provider": null,
      "modelId": "claude-opus-5-max-effort",
      "displayName": "claude-opus-5-max-effort",
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
      "sourceOwner": "LiveBench Data Analysis dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "20ff8c3b3c480a4b76d3197450740513f427341ca3e7575dcda228083e2c9b27",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:claude-fable-5-1-max-effort": {
      "canonicalId": "benchmark:claude-fable-5-1-max-effort",
      "provider": null,
      "modelId": "claude-fable-5-1-max-effort",
      "displayName": "claude-fable-5-1-max-effort",
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
      "sourceOwner": "LiveBench IF dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "9b44efe020902b94e8f0dd33658eaa3fce4bc1083f23e2495dad2d4d70dff335",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.5-xhigh": {
      "canonicalId": "benchmark:gpt-5.5-xhigh",
      "provider": null,
      "modelId": "gpt-5.5-xhigh",
      "displayName": "gpt-5.5-xhigh",
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
      "sourceOwner": "LiveBench IF dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d5fcc32a0e39893308f9f7eb9e097b4f152b8b4c531ac61d9994063a9b51f1e3",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:gpt-5.6-sol-max": {
      "canonicalId": "benchmark:gpt-5.6-sol-max",
      "provider": null,
      "modelId": "gpt-5.6-sol-max",
      "displayName": "gpt-5.6-sol-max",
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
      "sourceOwner": "LiveBench IF dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "72521b6968779daa93db56c143af2fe0175941608be3c1d8b0e9368a8415a296",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "7c63fc57322997246ea62e24def82da0634b1fe124103db248eff01ca334e0af",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "1b4d0ea776c8f2ae72e0dbe0a798f61365ef33affd75de81c777b9e09af709d3",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "73f4ba81ea1278edce7c5a8e665d8073da6dde99e8429ab34e53de3b2eee8158",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "a4cbbaeb39de19eb07ab8332088e5bb0526a01a5c395b2d2a96121740f74438f",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "722863d1379e37255f83dc01267ad45de638276ee631b79bb5ec9a22c375ae53",
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
      "sourceOwner": "Artificial Analysis MLCR Overall official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "42af8755f326c8615e3b3788cfdbb7d5d7872f5f66fb4c9afe7dc304860cb0b9",
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
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "05aad91c627998a6bd0b288e22dad4a41d285e4ccf36089efdf0a027fecbbc0c",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 83,
  "sourceSummary": {
    "official": 3,
    "catalog": 1,
    "benchmark": 74
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
          "contentHash": "808c641fed8e658ed68bb1a863852b6d6c066631ef646d1e1dc454cd1669b084",
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
          "contentHash": "db10be879a401bab38b739b0278bae8844ed9798a8b7e76ea1d2a22b1d316482",
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
          "contentHash": "f8155d49d06f3de1acb0e1f908204de93d514ae1e577966015c00a99e1763f3b",
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Overall 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（83.41）、claude-fable-5-max-effort（82.97）、gpt-6-astra-max（82.16）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench dated official leaderboard CSV",
      "benchmarkId": "livebench_overall",
      "benchmarkTitle": "LiveBench Overall",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "claude-fable-5-1-max-effort（83.41）",
        "claude-fable-5-max-effort（82.97）",
        "gpt-6-astra-max（82.16）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Reasoning 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（92.65）、claude-fable-5-1-max-effort（91.69）、gpt-5.6-sol-max（91.65）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Reasoning dated official leaderboard CSV",
      "benchmarkId": "livebench_reasoning",
      "benchmarkTitle": "LiveBench Reasoning",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "gpt-6-astra-max（92.65）",
        "claude-fable-5-1-max-effort（91.69）",
        "gpt-5.6-sol-max（91.65）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Coding 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（86.38）、claude-fable-5-max-effort（85.99）、gpt-5.6-sol-max（83.94）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_coding",
      "benchmarkTitle": "LiveBench Coding",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "claude-fable-5-1-max-effort（86.38）",
        "claude-fable-5-max-effort（85.99）",
        "gpt-5.6-sol-max（83.94）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Language 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-max-effort（90.68）、claude-fable-5-1-max-effort（89.50）、gpt-6-astra-max（89.43）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Language dated official leaderboard CSV",
      "benchmarkId": "livebench_language",
      "benchmarkTitle": "LiveBench Language",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "claude-fable-5-max-effort（90.68）",
        "claude-fable-5-1-max-effort（89.50）",
        "gpt-6-astra-max（89.43）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Math 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（97.01）、gpt-6-astra-max（96.81）、gpt-5.6-sol-max（96.20）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Mathematics dated official leaderboard CSV",
      "benchmarkId": "livebench_math",
      "benchmarkTitle": "LiveBench Math",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "claude-fable-5-1-max-effort（97.01）",
        "gpt-6-astra-max（96.81）",
        "gpt-5.6-sol-max（96.20）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Data Analysis 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（82.97）、gpt-5.5-xhigh（81.58）、claude-fable-5-max-effort（80.54）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Data Analysis dated official leaderboard CSV",
      "benchmarkId": "livebench_data_analysis",
      "benchmarkTitle": "LiveBench Data Analysis",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "gpt-6-astra-max（82.97）",
        "gpt-5.5-xhigh（81.58）",
        "claude-fable-5-max-effort（80.54）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Agentic Coding 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：deepseek-v4.1-flash-max（77.27）、claude-fable-5-1-max-effort（66.06）、claude-opus-5-max-effort（65.20）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Agentic Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_agentic_coding",
      "benchmarkTitle": "LiveBench Agentic Coding",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "deepseek-v4.1-flash-max（77.27）",
        "claude-fable-5-1-max-effort（66.06）",
        "claude-opus-5-max-effort（65.20）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
      "summary": "LiveBench Instruction Following 官方数据发生变化；共 59 个模型 · 数据版本 2026-06-25 · 当前前列：gemini-3.8-flash-high（81.41）、gemini-3.7-flash-high（79.93）、gemini-3.1-pro-preview-high（79.10）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench IF dated official leaderboard CSV",
      "benchmarkId": "livebench_instruction_following",
      "benchmarkTitle": "LiveBench Instruction Following",
      "release": "2026-06-25",
      "contentHash": "b762286079427ef5ac704c62a09ed1b8cbfb6e3da7a82ac8f208d69224c9225d",
      "unit": "score",
      "modelCount": 59,
      "topModels": [
        "gemini-3.8-flash-high（81.41）",
        "gemini-3.7-flash-high（79.93）",
        "gemini-3.1-pro-preview-high（79.10）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
          "contentHash": "0c6beb3f2b346c2ee19823e05d28ac7a08fba782dd72686ba801b34c14311c5f",
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "1865909cf313295749f03055efa9009d",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Overall，当前分数 77.08（第 19 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench dated official leaderboard CSV",
      "benchmarkId": "livebench_overall",
      "benchmarkTitle": "LiveBench Overall",
      "release": "2026-06-25",
      "score": 77.07930952380953,
      "rank": null,
      "displayRank": 19,
      "unit": "score",
      "modelIdentity": "livebench_overall:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "311596ab0490cae0d4810f358f6ab7c3",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "union-alpha 排名位置变化",
      "summary": "LiveBench Overall 按当前分数推导的列表位置从 26 变为 27；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "union-alpha",
      "modelRef": "benchmark:union-alpha",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench dated official leaderboard CSV",
      "benchmarkId": "livebench_overall",
      "benchmarkTitle": "LiveBench Overall",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 26,
      "displayRank": 27,
      "rankSource": "derived",
      "modelIdentity": "livebench_overall:union-alpha",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "8f3bfe994579c4cf1af3e90a88cf6652",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Reasoning，当前分数 82.65（第 39 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Reasoning dated official leaderboard CSV",
      "benchmarkId": "livebench_reasoning",
      "benchmarkTitle": "LiveBench Reasoning",
      "release": "2026-06-25",
      "score": 82.65375,
      "rank": null,
      "displayRank": 39,
      "unit": "score",
      "modelIdentity": "livebench_reasoning:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "5bb0e46b1df879bb5fa75e82bebcfe6c",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "union-alpha 排名位置变化",
      "summary": "LiveBench Reasoning 按当前分数推导的列表位置从 41 变为 42；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "union-alpha",
      "modelRef": "benchmark:union-alpha",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Reasoning dated official leaderboard CSV",
      "benchmarkId": "livebench_reasoning",
      "benchmarkTitle": "LiveBench Reasoning",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 41,
      "displayRank": 42,
      "rankSource": "derived",
      "modelIdentity": "livebench_reasoning:union-alpha",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "ec65eb2f4dfbd3f260055e7bd2b542ae",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Coding，当前分数 77.16（第 33 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_coding",
      "benchmarkTitle": "LiveBench Coding",
      "release": "2026-06-25",
      "score": 77.1585,
      "rank": null,
      "displayRank": 33,
      "unit": "score",
      "modelIdentity": "livebench_coding:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "d0135c9f145148856ad748e5fe2f519a",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "smaug-mini 排名位置变化",
      "summary": "LiveBench Coding 按当前分数推导的列表位置从 40 变为 41；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "smaug-mini",
      "modelRef": "benchmark:smaug-mini",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_coding",
      "benchmarkTitle": "LiveBench Coding",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 40,
      "displayRank": 41,
      "rankSource": "derived",
      "modelIdentity": "livebench_coding:smaug-mini",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "66a09f95866d014bc73ae088b37ba52e",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Language，当前分数 80.14（第 25 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Language dated official leaderboard CSV",
      "benchmarkId": "livebench_language",
      "benchmarkTitle": "LiveBench Language",
      "release": "2026-06-25",
      "score": 80.13866666666667,
      "rank": null,
      "displayRank": 25,
      "unit": "score",
      "modelIdentity": "livebench_language:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "cb01f39ecb85ff54ecffbc009a50ab54",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "smaug-mini 排名位置变化",
      "summary": "LiveBench Language 按当前分数推导的列表位置从 37 变为 38；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "smaug-mini",
      "modelRef": "benchmark:smaug-mini",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Language dated official leaderboard CSV",
      "benchmarkId": "livebench_language",
      "benchmarkTitle": "LiveBench Language",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 37,
      "displayRank": 38,
      "rankSource": "derived",
      "modelIdentity": "livebench_language:smaug-mini",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "7912bd62c1c7fd0282b2b1c455516754",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Math，当前分数 95.68（第 8 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Mathematics dated official leaderboard CSV",
      "benchmarkId": "livebench_math",
      "benchmarkTitle": "LiveBench Math",
      "release": "2026-06-25",
      "score": 95.678,
      "rank": null,
      "displayRank": 8,
      "unit": "score",
      "modelIdentity": "livebench_math:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "7f123e8d4c4a2e026a323218ca8f1db3",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "union-alpha 排名位置变化",
      "summary": "LiveBench Math 按当前分数推导的列表位置从 8 变为 9；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "union-alpha",
      "modelRef": "benchmark:union-alpha",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Mathematics dated official leaderboard CSV",
      "benchmarkId": "livebench_math",
      "benchmarkTitle": "LiveBench Math",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 8,
      "displayRank": 9,
      "rankSource": "derived",
      "modelIdentity": "livebench_math:union-alpha",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "1024b713f13abd8f9fb10c196b4c79db",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Data Analysis，当前分数 76.88（第 24 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Data Analysis dated official leaderboard CSV",
      "benchmarkId": "livebench_data_analysis",
      "benchmarkTitle": "LiveBench Data Analysis",
      "release": "2026-06-25",
      "score": 76.88333333333334,
      "rank": null,
      "displayRank": 24,
      "unit": "score",
      "modelIdentity": "livebench_data_analysis:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "7eccb45e27f3f3ddeb0547911e2f5632",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "union-alpha 排名位置变化",
      "summary": "LiveBench Data Analysis 按当前分数推导的列表位置从 29 变为 30；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "union-alpha",
      "modelRef": "benchmark:union-alpha",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Data Analysis dated official leaderboard CSV",
      "benchmarkId": "livebench_data_analysis",
      "benchmarkTitle": "LiveBench Data Analysis",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 29,
      "displayRank": 30,
      "rankSource": "derived",
      "modelIdentity": "livebench_data_analysis:union-alpha",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "98d3b34b6770beb004d2d16dcb519af9",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Agentic Coding，当前分数 51.77（第 32 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Agentic Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_agentic_coding",
      "benchmarkTitle": "LiveBench Agentic Coding",
      "release": "2026-06-25",
      "score": 51.76766666666666,
      "rank": null,
      "displayRank": 32,
      "unit": "score",
      "modelIdentity": "livebench_agentic_coding:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "6214e5b389e97622c992562fb8701818",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "qwen3.7-max 排名位置变化",
      "summary": "LiveBench Agentic Coding 按当前分数推导的列表位置从 47 变为 48；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "qwen3.7-max",
      "modelRef": "benchmark:qwen3.7-max",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench Agentic Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_agentic_coding",
      "benchmarkTitle": "LiveBench Agentic Coding",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 47,
      "displayRank": 48,
      "rankSource": "derived",
      "modelIdentity": "livebench_agentic_coding:qwen3.7-max",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "0fea4af31d1a1a97adf875d49a1acd2f",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 新上榜",
      "summary": "grok-4.7-xhigh 进入 LiveBench Instruction Following，当前分数 75.28（第 10 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench IF dated official leaderboard CSV",
      "benchmarkId": "livebench_instruction_following",
      "benchmarkTitle": "LiveBench Instruction Following",
      "release": "2026-06-25",
      "score": 75.27525,
      "rank": null,
      "displayRank": 10,
      "unit": "score",
      "modelIdentity": "livebench_instruction_following:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    },
    {
      "eventId": "4b0b91361a8ee0ce2d0f29f57fe5140c",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "union-alpha 排名位置变化",
      "summary": "LiveBench Instruction Following 按当前分数推导的列表位置从 53 变为 54；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "union-alpha",
      "modelRef": "benchmark:union-alpha",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T00:47:45Z",
      "publishedAt": null,
      "source": "LiveBench IF dated official leaderboard CSV",
      "benchmarkId": "livebench_instruction_following",
      "benchmarkTitle": "LiveBench Instruction Following",
      "release": "2026-06-25",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 53,
      "displayRank": 54,
      "rankSource": "derived",
      "modelIdentity": "livebench_instruction_following:union-alpha",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
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
        "contentHash": "39f1e3736449a4ea0ac2dfe7bea3dca1e4fbaa68b53478f621a4ac0869d1567f"
      }
    }
  ],
  "eventCount": 78,
  "provenance": {
    "workflowRunId": "35673390186",
    "mainCommit": "e5a045fc80ac386c2ad682020566d88d4469c928"
  }
};
