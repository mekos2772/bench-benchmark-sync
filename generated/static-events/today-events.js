module.exports = {
  "schemaVersion": 1,
  "dataSource": "today-activity-aggregator",
  "generatedAt": "2026-09-22T23:40:26Z",
  "windowStart": "2026-09-21T23:40:26Z",
  "collectorStatus": "ok",
  "staleAfterMinutes": 360,
  "families": [
    "model",
    "benchmark"
  ],
  "models": {
    "openrouter:cohere/command-a-plus": {
      "canonicalId": "openrouter:cohere/command-a-plus",
      "provider": "Cohere",
      "modelId": "cohere/command-a-plus",
      "displayName": "Command A+",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T18:48:16Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "text",
          "image"
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
      "contextWindow": 192000,
      "maxInputTokens": null,
      "maxOutputTokens": 64000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 0.3,
        "outputPerMillionTokens": 1.5,
        "cachedInputPerMillionTokens": 0.15
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/cohere/command-a-plus",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Cohere",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "openrouter:openai/gpt-6-luna-pro": {
      "canonicalId": "openrouter:openai/gpt-6-luna-pro",
      "provider": "OpenAI",
      "modelId": "openai/gpt-6-luna-pro",
      "displayName": "GPT-6 Luna Pro",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T18:13:11Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "file",
          "image",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 0.1,
        "outputPerMillionTokens": 0.5,
        "cachedInputPerMillionTokens": 0.01
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "openrouter:openai/gpt-6-luna": {
      "canonicalId": "openrouter:openai/gpt-6-luna",
      "provider": "OpenAI",
      "modelId": "openai/gpt-6-luna",
      "displayName": "GPT-6 Luna",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T18:13:06Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "file",
          "image",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 0.1,
        "outputPerMillionTokens": 0.5,
        "cachedInputPerMillionTokens": 0.01
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/openai/gpt-6-luna",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "openrouter:openai/gpt-6-sol-pro": {
      "canonicalId": "openrouter:openai/gpt-6-sol-pro",
      "provider": "OpenAI",
      "modelId": "openai/gpt-6-sol-pro",
      "displayName": "GPT-6 Sol Pro",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T18:13:01Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "file",
          "image",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 2.0,
        "outputPerMillionTokens": 10.0,
        "cachedInputPerMillionTokens": 0.2
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "openrouter:openai/gpt-6-sol": {
      "canonicalId": "openrouter:openai/gpt-6-sol",
      "provider": "OpenAI",
      "modelId": "openai/gpt-6-sol",
      "displayName": "GPT-6 Sol",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T18:12:55Z",
      "status": "available",
      "deprecationDate": null,
      "releaseType": "catalog_addition",
      "access": "closed_api",
      "modalities": {
        "input": [
          "file",
          "image",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 2.0,
        "outputPerMillionTokens": 10.0,
        "cachedInputPerMillionTokens": 0.2
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/openai/gpt-6-sol",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "openrouter:anthropic/claude-opus-5.5": {
      "canonicalId": "openrouter:anthropic/claude-opus-5.5",
      "provider": "Anthropic",
      "modelId": "anthropic/claude-opus-5.5",
      "displayName": "Claude Opus 5.5",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T16:32:12Z",
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
      "contextWindow": 1000000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 4.0,
        "outputPerMillionTokens": 20.0,
        "cachedInputPerMillionTokens": 0.2
      },
      "availability": [
        "OpenRouter"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
      "hubRepo": null,
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Anthropic",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modelCardUrl",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        }
      ]
    },
    "modelsdev:gpt-6-luna": {
      "canonicalId": "modelsdev:gpt-6-luna",
      "provider": "OpenAI",
      "modelId": "gpt-6-luna",
      "displayName": "GPT-6 Luna",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T00:00:00Z",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 0.1,
        "outputPerMillionTokens": 0.5,
        "cachedInputPerMillionTokens": 0.01
      },
      "availability": [
        "models.dev"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": null,
      "hubRepo": null,
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        }
      ]
    },
    "modelsdev:gpt-6-sol": {
      "canonicalId": "modelsdev:gpt-6-sol",
      "provider": "OpenAI",
      "modelId": "gpt-6-sol",
      "displayName": "GPT-6 Sol",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T00:00:00Z",
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
      "contextWindow": 1050000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 2.0,
        "outputPerMillionTokens": 10.0,
        "cachedInputPerMillionTokens": 0.2
      },
      "availability": [
        "models.dev"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": null,
      "hubRepo": null,
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        }
      ]
    },
    "modelsdev:claude-opus-5-5": {
      "canonicalId": "modelsdev:claude-opus-5-5",
      "provider": "Anthropic",
      "modelId": "claude-opus-5-5",
      "displayName": "Claude Opus 5.5",
      "version": null,
      "aliases": [],
      "releaseDate": "2026-09-22T00:00:00Z",
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
      "contextWindow": 1000000,
      "maxInputTokens": null,
      "maxOutputTokens": 128000,
      "pricing": {
        "currency": "USD",
        "inputPerMillionTokens": 4.0,
        "outputPerMillionTokens": 20.0,
        "cachedInputPerMillionTokens": 0.2
      },
      "availability": [
        "models.dev"
      ],
      "officialUrl": null,
      "documentationUrl": null,
      "modelCardUrl": null,
      "hubRepo": null,
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "Anthropic",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "provider",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseDate",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "releaseType",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "contextWindow",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "maxOutputTokens",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "capabilities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "availability",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "modalities",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        },
        {
          "field": "pricing",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
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
      "sourceOwner": "LiveBench Agentic Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T10:09:24Z",
          "contentHash": "c0ef968ae5ad7fc16c3f01fbe2691ca1f2916b52b5ad3999a0da28b8d5bbb702",
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
      "sourceOwner": "LiveBench Data Analysis dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "d8dc0922f905faa65b26bb87c10ccb36e021b55ea9227f2449f5ac42aae7d3f0",
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
      "sourceOwner": "LiveBench Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "e7601e738650d98bb8b7078f1178852528c7ba5e7c2984f71b4e2a41b882c413",
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
      "sourceOwner": "LiveBench Agentic Coding dated official leaderboard CSV",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://livebench.ai/",
          "observedAt": "2026-09-22T00:47:45Z",
          "contentHash": "362553fd3be328b78ed4dd3142268cb3f8b3436134d7e70e5ed1658376110b92",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:GPT-6 Sol (max)": {
      "canonicalId": "benchmark:GPT-6 Sol (max)",
      "provider": null,
      "modelId": "GPT-6 Sol (max)",
      "displayName": "GPT-6 Sol (max)",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "a5e551ae4611ddbde80857aac0a5149a65ea42ac70090704c8c04a589e3e8e29",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "e58674647c63f0249ec3d123cc51475c7e51439f5acac28d0817c347848608ae",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "407826df67db6669bdbddef23de25eaa87f85a559f4b6884844b2abea72dfa54",
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
      "sourceOwner": "Artificial Analysis Intelligence Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "252c5a0c0abcb014372a4456209a63e2a8d787a3469fdf2d84b5ae83e7d855f0",
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
      "sourceOwner": "Artificial Analysis GPQA Diamond official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "40304897c2786e9c5f95622db6ed1daf3152a30e66c28305bcb80a03067aede3",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "c7528a4aa9a1ccb749f14b20c194f884ade697d01760d8361a351b328f7fa24f",
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
      "sourceOwner": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "b8fa2db3e70164b181a976470b4d71be4f7fbcec0cc6ccc6548c699326018172",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "45531c5d50986c059a4b1020b3e68043722a1751889c983923fb1c29be72e045",
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
      "sourceOwner": "Artificial Analysis CritPt official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "4f07ad8f0fe947668ab429df30df238068cc010be19bcea3c907ede55ad5d33b",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "8b12e56cd030696774023667d826919188acaaf1b6b8d3cc8da4c4729e86c288",
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
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "21e17b9929e5e84a43a8407e8ec39e64550786a4d49965e3538d48269e6e351e",
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
      "sourceOwner": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "2e59a997eddc0607101df3e0811162516604d3f4d23c82302c395e2d0f979d4a",
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
      "sourceOwner": "Artificial Analysis IFBench official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
          "observedAt": "2026-09-22T21:26:08Z",
          "contentHash": "6659a6792bb4632e12d18c877058f87c1656e6b00ef725e21659da4058a230f3",
          "sourceType": "official_benchmark"
        }
      ]
    },
    "benchmark:Claude Opus 5.5 (xhigh with fallback)": {
      "canonicalId": "benchmark:Claude Opus 5.5 (xhigh with fallback)",
      "provider": null,
      "modelId": "Claude Opus 5.5 (xhigh with fallback)",
      "displayName": "Claude Opus 5.5 (xhigh with fallback)",
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
      "sourceOwner": "Artificial Analysis MMMU-Pro official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "0fc7491b53091948547fbd3f935355fa0be660bf4c7ed2600abf395ad004a127",
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
      "sourceOwner": "Artificial Analysis MMMU-Pro official public Dataset page",
      "evidence": [
        {
          "field": "canonicalId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "modelId",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "displayName",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "status",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "access",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "sourceOwner",
          "sourceUrl": "",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        },
        {
          "field": "benchmarkIdentity",
          "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
          "observedAt": "2026-09-22T18:19:46Z",
          "contentHash": "82795399650807f0a1844331fc7d3cfdca85641ddccbf41ef9dd535348540d2c",
          "sourceType": "official_benchmark"
        }
      ]
    }
  },
  "modelCount": 28,
  "sourceSummary": {
    "official": 0,
    "catalog": 9,
    "benchmark": 77
  },
  "events": [
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
      "summary": "Artificial Analysis Intelligence Index v4.3 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（57.62）、Claude Opus 5.5 (xhigh with fallback)（55.99）、Claude Opus 5.5 (high with fallback)（53.58）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "contentHash": "2917bae7247eb601b58bc0f440705f98008d67b4fd87a60abaee960c6b76b88e",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（57.62）",
        "Claude Opus 5.5 (xhigh with fallback)（55.99）",
        "Claude Opus 5.5 (high with fallback)（53.58）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "contentHash": "f6fac1da92a2ae4e82e793f60f6733441800d8b83f9beb33a6c86c768a24d42b",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-6 Astra (xhigh)（96.3%）",
        "GPT-6 Astra (max)（96.1%）",
        "Gemini 3.8 Flash (high)（95.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "Terminal-Bench 4.0 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（59.6%）、Claude Opus 5.5 (xhigh with fallback)（59.6%）、GPT-6 Astra (xhigh)（59.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "contentHash": "dabdd85ad1a143ff9ef59b04180b8ee1f2da61969e61c7f49a37132cc36c3df8",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（59.6%）",
        "Claude Opus 5.5 (xhigh with fallback)（59.6%）",
        "GPT-6 Astra (xhigh)（59.6%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "SciCode 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（66.9%）、Claude Opus 5.5 (xhigh with fallback)（65.0%）、Claude Fable 5.1 (max with fallback)（63.1%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "contentHash": "8b15faa6ff657cb29ee3336c710f6dc327e2101984bda3cc05b6a95e0b7282d9",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（66.9%）",
        "Claude Opus 5.5 (xhigh with fallback)（65.0%）",
        "Claude Fable 5.1 (max with fallback)（63.1%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "Humanity's Last Exam 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（61.4%）、Claude Fable 5.1 (max with fallback)（59.1%）、Claude Fable 5.1 (xhigh with fallback)（58.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "contentHash": "f9ea77b2c032346fbdf4dbafa1980529eab8a1b0070a673e07bc8b7695e1fc0c",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（61.4%）",
        "Claude Fable 5.1 (max with fallback)（59.1%）",
        "Claude Fable 5.1 (xhigh with fallback)（58.7%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "GDPval-AA Elo 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（1846.17）、Claude Opus 5.5 (xhigh with fallback)（1820.11）、Claude Fable 5.1 (max with fallback)（1734.67）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gdpval-aa",
      "observedAt": "2026-09-22T18:19:46Z",
      "publishedAt": null,
      "source": "Artificial Analysis GDPval-AA Elo official public Dataset page",
      "benchmarkId": "aa_gdpval_elo",
      "benchmarkTitle": "GDPval-AA Elo",
      "release": "page_jsonld",
      "contentHash": "d7f045472dfb283917f91775b6fd42894c318d178cd2a385d477f22b3831472b",
      "unit": "raw",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（1846.17）",
        "Claude Opus 5.5 (xhigh with fallback)（1820.11）",
        "Claude Fable 5.1 (max with fallback)（1734.67）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gdpval-aa",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "contentHash": "3a154a43faf6d57395bd464c04fa1389e40390c9a1203ead23afe9a1d1bc9993",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Kimi K3 (max)（88.7%）",
        "Step 5 Preview（88.3%）",
        "MiMo-V2.6-Pro（86.3%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "CritPt 官方数据发生变化；共 20 个模型 · 当前前列：GPT-5.6 Sol (max)（32.3%）、Claude Opus 5.5 (max with fallback)（31.7%）、Claude Opus 5.5 (xhigh with fallback)（31.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "contentHash": "d093ad637475ced40782ea5595c3473a7c014dd5bc4d524d8e09e83b5cb9a7a4",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "GPT-5.6 Sol (max)（32.3%）",
        "Claude Opus 5.5 (max with fallback)（31.7%）",
        "Claude Opus 5.5 (xhigh with fallback)（31.7%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "Terminal-Bench Hard 官方数据发生变化；共 9 个模型 · 当前前列：GPT-5.6 Sol (max)（65.9%）、Claude Fable 5 (with fallback)（62.9%）、GPT-5.6 Sol (medium)（62.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "contentHash": "08751f9d8162b6747c7232afa8ea480ec6bdb6a2452fcde233ab5655a7449d68",
      "unit": "ratio",
      "modelCount": 9,
      "topModels": [
        "GPT-5.6 Sol (max)（65.9%）",
        "Claude Fable 5 (with fallback)（62.9%）",
        "GPT-5.6 Sol (medium)（62.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "IFBench 官方数据发生变化；共 9 个模型 · 当前前列：Grok 4.3 (medium)（83.3%）、Grok 4.20 0309（82.9%）、MiniMax-M3（82.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "contentHash": "cb9f4acfb922c2abcbc4232c05ea945fd213b3f9b05056bbb8ae53f00601cc2c",
      "unit": "ratio",
      "modelCount": 9,
      "topModels": [
        "Grok 4.3 (medium)（83.3%）",
        "Grok 4.20 0309（82.9%）",
        "MiniMax-M3（82.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "contentHash": "664e57ec7a8a7886a4f16c301c703fe43e3cb72009cc3de7e4346ae2730f0913",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（91.4%）",
        "Claude Fable 5.1 (xhigh with fallback)（91.0%）",
        "Claude Fable 5.1 (high with fallback)（89.9%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "observedAt": "2026-09-22T05:27:00Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "contentHash": "bdfda805cc1692282e019fead08e1f25c8361f3e662fd431f6aa735c19d53fb6",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Fable 5.1 (max with fallback)（71.1%）",
        "Claude Fable 5 (with fallback)（64.4%）",
        "Claude Opus 5 (high)（59.4%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "AA Omniscience Index 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（46.42）、GPT-6 Astra (high)（43.73）、Claude Fable 5.1 (max with fallback)（43.45）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "contentHash": "29986f4a948eba10ea0e0facd2cd1a7ac98caa521f9bbc7d9b2ec2ca3f32c12c",
      "unit": "score",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（46.42）",
        "GPT-6 Astra (high)（43.73）",
        "Claude Fable 5.1 (max with fallback)（43.45）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "abac71f1ca3d9e2682be2240077ed87a",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Command A+ 新增可用",
      "summary": "Command A+ 新增可用：上下文 192,000 tokens，价格 $0.3/$1.5 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "cohere/command-a-plus",
      "modelRef": "openrouter:cohere/command-a-plus",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Cohere",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
          "observedAt": "2026-09-22T18:48:16Z",
          "contentHash": "748fa95e8e8a09033f520ed9f76222eb0e0cb79cc31c04e15be398836aa6f961",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/cohere/command-a-plus",
      "observedAt": "2026-09-22T18:48:16Z",
      "publishedAt": "2026-09-22T18:48:16Z",
      "source": "OpenRouter · Cohere",
      "eventIdentity": "catalog:cohere/command-a-plus",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/cohere/command-a-plus",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
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
      "summary": "MMMU-Pro 官方数据发生变化；共 20 个模型 · 当前前列：Claude Opus 5.5 (max with fallback)（87.7%）、GPT-6 Astra (max)（86.9%）、Claude Opus 5.5 (xhigh with fallback)（86.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
      "observedAt": "2026-09-22T18:19:46Z",
      "publishedAt": null,
      "source": "Artificial Analysis MMMU-Pro official public Dataset page",
      "benchmarkId": "aa_mmmu_pro",
      "benchmarkTitle": "MMMU-Pro",
      "release": "page_jsonld",
      "contentHash": "ab9d992e68860f0026c955d21754c2e5210db3307808f44602da78a025896ef6",
      "unit": "ratio",
      "modelCount": 20,
      "topModels": [
        "Claude Opus 5.5 (max with fallback)（87.7%）",
        "GPT-6 Astra (max)（86.9%）",
        "Claude Opus 5.5 (xhigh with fallback)（86.6%）"
      ],
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "0a55f0ad7bb82040a3ee9254d878239b",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Luna Pro 新增可用",
      "summary": "GPT-6 Luna Pro 新增可用：上下文 1,050,000 tokens，价格 $0.1/$0.5 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "openai/gpt-6-luna-pro",
      "modelRef": "openrouter:openai/gpt-6-luna-pro",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
          "observedAt": "2026-09-22T18:13:11Z",
          "contentHash": "149792627e6ce01ca088119fbb66596e13f56d449637f7d14078d108cdb76261",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/openai/gpt-6-luna-pro",
      "observedAt": "2026-09-22T18:13:11Z",
      "publishedAt": "2026-09-22T18:13:11Z",
      "source": "OpenRouter · OpenAI",
      "eventIdentity": "catalog:openai/gpt-6-luna-pro",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "07bcfe529f0a3cd6fe54786030fc381c",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Luna 新增可用",
      "summary": "GPT-6 Luna 新增可用：上下文 1,050,000 tokens，价格 $0.1/$0.5 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "openai/gpt-6-luna",
      "modelRef": "openrouter:openai/gpt-6-luna",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
          "observedAt": "2026-09-22T18:13:06Z",
          "contentHash": "4254bc87887bae745c347ed80d3a83a26dfa509f9c7be1126280f9c09b5b45d1",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/openai/gpt-6-luna",
      "observedAt": "2026-09-22T18:13:06Z",
      "publishedAt": "2026-09-22T18:13:06Z",
      "source": "OpenRouter · OpenAI",
      "eventIdentity": "catalog:openai/gpt-6-luna",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/openai/gpt-6-luna",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "78635fdb6d09878a1f40168084176292",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Sol Pro 新增可用",
      "summary": "GPT-6 Sol Pro 新增可用：上下文 1,050,000 tokens，价格 $2/$10 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "openai/gpt-6-sol-pro",
      "modelRef": "openrouter:openai/gpt-6-sol-pro",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
          "observedAt": "2026-09-22T18:13:01Z",
          "contentHash": "fef075b1271eb1b14ba5ef7589c285aa1979d76b93ed6c5fb275bd0a091c5960",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/openai/gpt-6-sol-pro",
      "observedAt": "2026-09-22T18:13:01Z",
      "publishedAt": "2026-09-22T18:13:01Z",
      "source": "OpenRouter · OpenAI",
      "eventIdentity": "catalog:openai/gpt-6-sol-pro",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "e5fdcab421abef1dac7c5afe7e7146ed",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Sol 新增可用",
      "summary": "GPT-6 Sol 新增可用：上下文 1,050,000 tokens，价格 $2/$10 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "openai/gpt-6-sol",
      "modelRef": "openrouter:openai/gpt-6-sol",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
          "observedAt": "2026-09-22T18:12:55Z",
          "contentHash": "c119030ee9cc8cd624e0e31c08d3eeca16262d7d7b1e17c1de595ed46b47f76f",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/openai/gpt-6-sol",
      "observedAt": "2026-09-22T18:12:55Z",
      "publishedAt": "2026-09-22T18:12:55Z",
      "source": "OpenRouter · OpenAI",
      "eventIdentity": "catalog:openai/gpt-6-sol",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/openai/gpt-6-sol",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "63b220709c1b11ebbb8c83cfcac3403b",
      "family": "model",
      "eventType": "catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Claude Opus 5.5 新增可用",
      "summary": "Claude Opus 5.5 新增可用：上下文 1,000,000 tokens，价格 $4/$20 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "anthropic/claude-opus-5.5",
      "modelRef": "openrouter:anthropic/claude-opus-5.5",
      "sourceType": "openrouter_catalog",
      "sourceOwner": "Anthropic",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
          "observedAt": "2026-09-22T16:32:12Z",
          "contentHash": "a58c988800d662d5fad1cf7923fa1a53658a59e3597db52569cd6c0c66b142ec",
          "sourceType": "openrouter_catalog"
        }
      ],
      "url": "https://openrouter.ai/anthropic/claude-opus-5.5",
      "observedAt": "2026-09-22T16:32:12Z",
      "publishedAt": "2026-09-22T16:32:12Z",
      "source": "OpenRouter · Anthropic",
      "eventIdentity": "catalog:anthropic/claude-opus-5.5",
      "provenance": {
        "sourceUrl": "https://openrouter.ai/anthropic/claude-opus-5.5",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "13b716e388e9bd558da90cf53ca9221e",
      "family": "benchmark",
      "eventType": "significant_score_change",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "grok-4.7-xhigh 分数变化",
      "summary": "LiveBench Agentic Coding 分数从 51.77 变为 53.99（+2.22）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T10:09:24Z",
      "publishedAt": null,
      "source": "LiveBench Agentic Coding dated official leaderboard CSV",
      "benchmarkId": "livebench_agentic_coding",
      "benchmarkTitle": "LiveBench Agentic Coding",
      "release": "2026-06-25",
      "previousScore": 51.76766666666666,
      "score": 53.989666666666665,
      "delta": 2.2220000000000013,
      "unit": "score",
      "modelIdentity": "livebench_agentic_coding:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "2c71942e80d16ff2ed7fd325b4d8e35d",
      "family": "benchmark",
      "eventType": "benchmark_updated",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "important",
      "title": "DeepSWE v1.1 官方数据更新",
      "summary": "DeepSWE v1.1 官方数据发生变化；共 70 个模型 · 当前前列：gpt-6-astra（74.1%）、gemini-3-8-flash（73.8%）、claude-opus-5（73.6%）。",
      "repoId": null,
      "repo": null,
      "modelId": null,
      "modelRef": null,
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://deepswe.datacurve.ai/data/v1.1",
      "observedAt": "2026-09-22T10:09:24Z",
      "publishedAt": null,
      "source": "DeepSWE v1.1 official leaderboard JSON",
      "benchmarkId": "deepswe_v1_1",
      "benchmarkTitle": "DeepSWE v1.1",
      "release": "unknown",
      "contentHash": "a7c15d66288fd249c020b9931c017b92d1a3b90e480b3ff34974b752bd030019",
      "unit": "ratio",
      "modelCount": 70,
      "topModels": [
        "gpt-6-astra（74.1%）",
        "gemini-3-8-flash（73.8%）",
        "claude-opus-5（73.6%）"
      ],
      "provenance": {
        "sourceUrl": "https://deepswe.datacurve.ai/data/v1.1",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Data Analysis 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（82.97）、gpt-5.5-xhigh（81.58）、gpt-6-sol-max（81.19）。",
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
      "modelCount": 63,
      "topModels": [
        "gpt-6-astra-max（82.97）",
        "gpt-5.5-xhigh（81.58）",
        "gpt-6-sol-max（81.19）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Reasoning 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：gpt-6-astra-max（92.65）、claude-opus-5-5-max-effort（92.15）、claude-fable-5-1-max-effort（91.69）。",
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
      "modelCount": 63,
      "topModels": [
        "gpt-6-astra-max（92.65）",
        "claude-opus-5-5-max-effort（92.15）",
        "claude-fable-5-1-max-effort（91.69）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Coding 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：claude-opus-5-5-max-effort（89.25）、claude-opus-5-5-xhigh-effort（89.25）、claude-fable-5-1-max-effort（86.38）。",
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
      "modelCount": 63,
      "topModels": [
        "claude-opus-5-5-max-effort（89.25）",
        "claude-opus-5-5-xhigh-effort（89.25）",
        "claude-fable-5-1-max-effort（86.38）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Math 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：claude-opus-5-5-max-effort（97.08）、claude-fable-5-1-max-effort（97.01）、gpt-6-astra-max（96.81）。",
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
      "modelCount": 63,
      "topModels": [
        "claude-opus-5-5-max-effort（97.08）",
        "claude-fable-5-1-max-effort（97.01）",
        "gpt-6-astra-max（96.81）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Overall 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-1-max-effort（83.41）、claude-opus-5-5-max-effort（83.22）、claude-fable-5-max-effort（82.97）。",
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
      "modelCount": 63,
      "topModels": [
        "claude-fable-5-1-max-effort（83.41）",
        "claude-opus-5-5-max-effort（83.22）",
        "claude-fable-5-max-effort（82.97）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Language 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：claude-fable-5-max-effort（90.68）、claude-fable-5-1-max-effort（89.50）、gpt-6-astra-max（89.43）。",
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
      "modelCount": 63,
      "topModels": [
        "claude-fable-5-max-effort（90.68）",
        "claude-fable-5-1-max-effort（89.50）",
        "gpt-6-astra-max（89.43）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Agentic Coding 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：deepseek-v4.1-flash-max（77.27）、claude-opus-5-5-max-effort（71.72）、claude-fable-5-1-max-effort（66.06）。",
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
      "modelCount": 63,
      "topModels": [
        "deepseek-v4.1-flash-max（77.27）",
        "claude-opus-5-5-max-effort（71.72）",
        "claude-fable-5-1-max-effort（66.06）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "LiveBench Instruction Following 官方数据发生变化；共 63 个模型 · 数据版本 2026-06-25 · 当前前列：gemini-3.8-flash-high（81.41）、gemini-3.7-flash-high（79.93）、gemini-3.1-pro-preview-high（79.10）。",
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
      "modelCount": 63,
      "topModels": [
        "gemini-3.8-flash-high（81.41）",
        "gemini-3.7-flash-high（79.93）",
        "gemini-3.1-pro-preview-high（79.10）"
      ],
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "50e412c40c2e8a61340a39e02b22e49e",
      "family": "model",
      "eventType": "vendor_catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Luna 新增可用",
      "summary": "GPT-6 Luna 新增可用：上下文 1,050,000 tokens，价格 $0.1/$0.5 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "gpt-6-luna",
      "modelRef": "modelsdev:gpt-6-luna",
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://models.dev/api.json",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "0973ebf8e8485d11e1151ed5592df7acbc02d153f50bedac9d21fd892a9282de",
          "sourceType": "modelsdev_catalog"
        }
      ],
      "url": "https://models.dev/api.json",
      "observedAt": "2026-09-22T00:00:00Z",
      "publishedAt": "2026-09-22T00:00:00Z",
      "source": "models.dev · OpenAI",
      "eventIdentity": "modelsdev:gpt-6-luna",
      "provenance": {
        "sourceUrl": "https://models.dev/api.json",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "2eed579a738e42f29c391c4e4a564d8a",
      "family": "model",
      "eventType": "vendor_catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "GPT-6 Sol 新增可用",
      "summary": "GPT-6 Sol 新增可用：上下文 1,050,000 tokens，价格 $2/$10 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "gpt-6-sol",
      "modelRef": "modelsdev:gpt-6-sol",
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "OpenAI",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://models.dev/api.json",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "a4c6dd56b4403653b20ac3c0ec16b5caaee303da5663465e2844190a65bea928",
          "sourceType": "modelsdev_catalog"
        }
      ],
      "url": "https://models.dev/api.json",
      "observedAt": "2026-09-22T00:00:00Z",
      "publishedAt": "2026-09-22T00:00:00Z",
      "source": "models.dev · OpenAI",
      "eventIdentity": "modelsdev:gpt-6-sol",
      "provenance": {
        "sourceUrl": "https://models.dev/api.json",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "ea6e5bcdb6135cca7cd74af0afbc4ca3",
      "family": "model",
      "eventType": "vendor_catalog_model_added",
      "eventClass": "model_catalog",
      "trustTier": "catalog",
      "priority": "P1",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Claude Opus 5.5 新增可用",
      "summary": "Claude Opus 5.5 新增可用：上下文 1,000,000 tokens，价格 $4/$20 每百万 tokens。",
      "repoId": null,
      "repo": null,
      "modelId": "claude-opus-5-5",
      "modelRef": "modelsdev:claude-opus-5-5",
      "sourceType": "modelsdev_catalog",
      "sourceOwner": "Anthropic",
      "evidence": [
        {
          "field": "catalogEntry",
          "sourceUrl": "https://models.dev/api.json",
          "observedAt": "2026-09-22T00:00:00Z",
          "contentHash": "ff395da3c3961a7bdd7dfb6c6cc2ee9700e738b75f0df203abb93c78dfd12db0",
          "sourceType": "modelsdev_catalog"
        }
      ],
      "url": "https://models.dev/api.json",
      "observedAt": "2026-09-22T00:00:00Z",
      "publishedAt": "2026-09-22T00:00:00Z",
      "source": "models.dev · Anthropic",
      "eventIdentity": "modelsdev:claude-opus-5-5",
      "provenance": {
        "sourceUrl": "https://models.dev/api.json",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 Terminal-Bench 4.0，当前分数 43.9%（第 10 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "score": 0.439393939393939,
      "rank": null,
      "displayRank": 10,
      "unit": "ratio",
      "modelIdentity": "aa_terminal_bench_v4_0:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 Terminal-Bench 4.0 当前官方数据中（此前分数 35.4%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "previousScore": 0.353535353535354,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminal_bench_v4_0:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Qwen3.8 Max (0902) 排名位置变化",
      "summary": "Terminal-Bench 4.0 按当前分数推导的列表位置从 12 变为 13；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 Max (0902)",
      "modelRef": "benchmark:Qwen3.8 Max (0902)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v4.0 official public Dataset page",
      "benchmarkId": "aa_terminal_bench_v4_0",
      "benchmarkTitle": "Terminal-Bench 4.0",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 12,
      "displayRank": 13,
      "rankSource": "derived",
      "modelIdentity": "aa_terminal_bench_v4_0:Qwen3.8 Max (0902)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-4-0",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 Artificial Analysis Intelligence Index v4.3，当前分数 47.53（第 11 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "score": 47.5276426437724,
      "rank": null,
      "displayRank": 11,
      "unit": "score",
      "modelIdentity": "aa_intelligence_index_v4_3:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 Artificial Analysis Intelligence Index v4.3 当前官方数据中（此前分数 42.08）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "previousScore": 42.0829248239494,
      "previousRank": null,
      "unit": "score",
      "modelIdentity": "aa_intelligence_index_v4_3:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Step 5 Preview 排名位置变化",
      "summary": "Artificial Analysis Intelligence Index v4.3 按当前分数推导的列表位置从 17 变为 18；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Intelligence Index official public Dataset page",
      "benchmarkId": "aa_intelligence_index_v4_3",
      "benchmarkTitle": "Artificial Analysis Intelligence Index v4.3",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 17,
      "displayRank": 18,
      "rankSource": "derived",
      "modelIdentity": "aa_intelligence_index_v4_3:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 Humanity's Last Exam，当前分数 47.9%（第 13 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "score": 0.479147358665431,
      "rank": null,
      "displayRank": 13,
      "unit": "ratio",
      "modelIdentity": "aa_humanitys_last_exam:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 Humanity's Last Exam 当前官方数据中（此前分数 42.9%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "previousScore": 0.429101019462465,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_humanitys_last_exam:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "Humanity's Last Exam 按当前分数推导的列表位置从 15 变为 16；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Humanity's Last Exam official public Dataset page",
      "benchmarkId": "aa_humanitys_last_exam",
      "benchmarkTitle": "Humanity's Last Exam",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 15,
      "displayRank": 16,
      "rankSource": "derived",
      "modelIdentity": "aa_humanitys_last_exam:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/humanitys-last-exam",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Qwen3.8 27B (xhigh) 新上榜",
      "summary": "Qwen3.8 27B (xhigh) 进入 GPQA Diamond，当前分数 90.5%（第 19 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "modelRef": "benchmark:Qwen3.8 27B (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "score": 0.905050505050505,
      "rank": null,
      "displayRank": 19,
      "unit": "ratio",
      "modelIdentity": "aa_gpqa_diamond:Qwen3.8 27B (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 GPQA Diamond 当前官方数据中（此前分数 92.5%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "previousScore": 0.925252525252525,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_gpqa_diamond:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Luna (max) 排名位置变化",
      "summary": "GPQA Diamond 按当前分数推导的列表位置从 20 变为 18；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Luna (max)",
      "modelRef": "benchmark:GPT-5.6 Luna (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis GPQA Diamond official public Dataset page",
      "benchmarkId": "aa_gpqa_diamond",
      "benchmarkTitle": "GPQA Diamond",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 20,
      "displayRank": 18,
      "rankSource": "derived",
      "modelIdentity": "aa_gpqa_diamond:GPT-5.6 Luna (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/gpqa-diamond",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 AA Omniscience Index，当前分数 27.12（第 13 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "score": 27.1166666666667,
      "rank": null,
      "displayRank": 13,
      "unit": "score",
      "modelIdentity": "aa_omniscience_index:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GLM-5.3-Flash 移出榜单",
      "summary": "GLM-5.3-Flash 不再出现在 AA Omniscience Index 当前官方数据中（此前分数 7.47）。",
      "repoId": null,
      "repo": null,
      "modelId": "GLM-5.3-Flash",
      "modelRef": "benchmark:GLM-5.3-Flash",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "previousScore": 7.46666666666667,
      "previousRank": null,
      "unit": "score",
      "modelIdentity": "aa_omniscience_index:GLM-5.3-Flash",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Step 5 Preview 排名位置变化",
      "summary": "AA Omniscience Index 按当前分数推导的列表位置从 16 变为 17；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/omniscience",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA Omniscience Index official public Dataset page",
      "benchmarkId": "aa_omniscience_index",
      "benchmarkTitle": "AA Omniscience Index",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 16,
      "displayRank": 17,
      "rankSource": "derived",
      "modelIdentity": "aa_omniscience_index:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/omniscience",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 AA LCR，当前分数 83.7%（第 13 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "score": 0.836666666666667,
      "rank": null,
      "displayRank": 13,
      "unit": "ratio",
      "modelIdentity": "aa_lcr:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Astra (max) 移出榜单",
      "summary": "GPT-6 Astra (max) 不再出现在 AA LCR 当前官方数据中（此前分数 80.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Astra (max)",
      "modelRef": "benchmark:GPT-6 Astra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "previousScore": 0.806666666666667,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_lcr:GPT-6 Astra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Qwen3.8 27B (xhigh) 排名位置变化",
      "summary": "AA LCR 按当前分数推导的列表位置从 18 变为 19；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "modelRef": "benchmark:Qwen3.8 27B (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis AA LCR official public Dataset page",
      "benchmarkId": "aa_lcr",
      "benchmarkTitle": "AA LCR",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 18,
      "displayRank": 19,
      "rankSource": "derived",
      "modelIdentity": "aa_lcr:Qwen3.8 27B (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/artificial-analysis-long-context-reasoning",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 CritPt，当前分数 30.9%（第 8 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "score": 0.308571428571429,
      "rank": null,
      "displayRank": 8,
      "unit": "ratio",
      "modelIdentity": "aa_critpt:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 CritPt 当前官方数据中（此前分数 30.0%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "previousScore": 0.3,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_critpt:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Gemini 3.8 Flash (high) 排名位置变化",
      "summary": "CritPt 按当前分数推导的列表位置从 19 变为 20；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Gemini 3.8 Flash (high)",
      "modelRef": "benchmark:Gemini 3.8 Flash (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/critpt",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis CritPt official public Dataset page",
      "benchmarkId": "aa_critpt",
      "benchmarkTitle": "CritPt",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 19,
      "displayRank": 20,
      "rankSource": "derived",
      "modelIdentity": "aa_critpt:Gemini 3.8 Flash (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/critpt",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-6 Sol (max) 新上榜",
      "summary": "GPT-6 Sol (max) 进入 SciCode，当前分数 57.6%（第 13 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-6 Sol (max)",
      "modelRef": "benchmark:GPT-6 Sol (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "score": 0.576388888888889,
      "rank": null,
      "displayRank": 13,
      "unit": "ratio",
      "modelIdentity": "aa_scicode:GPT-6 Sol (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 SciCode 当前官方数据中（此前分数 55.0%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/scicode",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis SciCode official public Dataset page",
      "benchmarkId": "aa_scicode",
      "benchmarkTitle": "SciCode",
      "release": "page_jsonld",
      "previousScore": 0.549768518518518,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_scicode:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/scicode",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "gpt-oss-120b (high) 移出榜单",
      "summary": "gpt-oss-120b (high) 不再出现在 Terminal-Bench Hard 当前官方数据中（此前分数 23.5%）。",
      "repoId": null,
      "repo": null,
      "modelId": "gpt-oss-120b (high)",
      "modelRef": "benchmark:gpt-oss-120b (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "previousScore": 0.234848484848485,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_hard:gpt-oss-120b (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Nemotron 3 Ultra 排名位置变化",
      "summary": "Terminal-Bench Hard 按当前分数推导的列表位置从 9 变为 8；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Nemotron 3 Ultra",
      "modelRef": "benchmark:Nemotron 3 Ultra",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench Hard official public Dataset page",
      "benchmarkId": "aa_terminalbench_hard",
      "benchmarkTitle": "Terminal-Bench Hard",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 9,
      "displayRank": 8,
      "rankSource": "derived",
      "modelIdentity": "aa_terminalbench_hard:Nemotron 3 Ultra",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-hard",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "MiniMax-M3 新上榜",
      "summary": "MiniMax-M3 进入 Terminal-Bench v2.1，当前分数 65.2%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "MiniMax-M3",
      "modelRef": "benchmark:MiniMax-M3",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "score": 0.651685393258427,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_v2_1:MiniMax-M3",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 Terminal-Bench v2.1 当前官方数据中（此前分数 88.0%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "previousScore": 0.880149812734082,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_terminalbench_v2_1:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "summary": "Terminal-Bench v2.1 按当前分数推导的列表位置从 19 变为 18；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 27B (xhigh)",
      "modelRef": "benchmark:Qwen3.8 27B (xhigh)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis Terminal-Bench v2.1 official public Dataset page",
      "benchmarkId": "aa_terminalbench_v2_1",
      "benchmarkTitle": "Terminal-Bench v2.1",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 19,
      "displayRank": 18,
      "rankSource": "derived",
      "modelIdentity": "aa_terminalbench_v2_1:Qwen3.8 27B (xhigh)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/terminalbench-2-1",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "gpt-oss-120b (high) 移出榜单",
      "summary": "gpt-oss-120b (high) 不再出现在 IFBench 当前官方数据中（此前分数 69.0%）。",
      "repoId": null,
      "repo": null,
      "modelId": "gpt-oss-120b (high)",
      "modelRef": "benchmark:gpt-oss-120b (high)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "previousScore": 0.689795918367347,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_ifbench:gpt-oss-120b (high)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "603072b68c4d02979aa5346aa08e522f",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Mistral Medium 3.5 排名位置变化",
      "summary": "IFBench 按当前分数推导的列表位置从 11 变为 9；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Mistral Medium 3.5",
      "modelRef": "benchmark:Mistral Medium 3.5",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/ifbench",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis IFBench official public Dataset page",
      "benchmarkId": "aa_ifbench",
      "benchmarkTitle": "IFBench",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 11,
      "displayRank": 9,
      "rankSource": "derived",
      "modelIdentity": "aa_ifbench:Mistral Medium 3.5",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/ifbench",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "MiniMax-M3 新上榜",
      "summary": "MiniMax-M3 进入 MLCR Overall，当前分数 17.2%（第 20 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "MiniMax-M3",
      "modelRef": "benchmark:MiniMax-M3",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "score": 0.172222222222222,
      "rank": null,
      "displayRank": 20,
      "unit": "ratio",
      "modelIdentity": "aa_mlcr_overall:MiniMax-M3",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "GPT-5.6 Terra (max) 移出榜单",
      "summary": "GPT-5.6 Terra (max) 不再出现在 MLCR Overall 当前官方数据中（此前分数 31.7%）。",
      "repoId": null,
      "repo": null,
      "modelId": "GPT-5.6 Terra (max)",
      "modelRef": "benchmark:GPT-5.6 Terra (max)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "previousScore": 0.316666666666667,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_mlcr_overall:GPT-5.6 Terra (max)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
      "title": "Qwen3.8 Max (0902) 排名位置变化",
      "summary": "MLCR Overall 按当前分数推导的列表位置从 18 变为 17；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Qwen3.8 Max (0902)",
      "modelRef": "benchmark:Qwen3.8 Max (0902)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mlcr-aa",
      "observedAt": "2026-09-22T21:26:08Z",
      "publishedAt": null,
      "source": "Artificial Analysis MLCR Overall official public Dataset page",
      "benchmarkId": "aa_mlcr_overall",
      "benchmarkTitle": "MLCR Overall",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 18,
      "displayRank": 17,
      "rankSource": "derived",
      "modelIdentity": "aa_mlcr_overall:Qwen3.8 Max (0902)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mlcr-aa",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "cc1350ccb1ba0b6fa430cd1690d4af36",
      "family": "benchmark",
      "eventType": "model_added_to_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Claude Opus 5.5 (xhigh with fallback) 新上榜",
      "summary": "Claude Opus 5.5 (xhigh with fallback) 进入 MMMU-Pro，当前分数 86.6%（第 3 位）。",
      "repoId": null,
      "repo": null,
      "modelId": "Claude Opus 5.5 (xhigh with fallback)",
      "modelRef": "benchmark:Claude Opus 5.5 (xhigh with fallback)",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
      "observedAt": "2026-09-22T18:19:46Z",
      "publishedAt": null,
      "source": "Artificial Analysis MMMU-Pro official public Dataset page",
      "benchmarkId": "aa_mmmu_pro",
      "benchmarkTitle": "MMMU-Pro",
      "release": "page_jsonld",
      "score": 0.865895953757225,
      "rank": null,
      "displayRank": 3,
      "unit": "ratio",
      "modelIdentity": "aa_mmmu_pro:Claude Opus 5.5 (xhigh with fallback)",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "891e1c4579ffd620d44c0e1c7d410283",
      "family": "benchmark",
      "eventType": "model_removed_from_benchmark",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "Inkling 移出榜单",
      "summary": "Inkling 不再出现在 MMMU-Pro 当前官方数据中（此前分数 73.5%）。",
      "repoId": null,
      "repo": null,
      "modelId": "Inkling",
      "modelRef": "benchmark:Inkling",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
      "observedAt": "2026-09-22T18:19:46Z",
      "publishedAt": null,
      "source": "Artificial Analysis MMMU-Pro official public Dataset page",
      "benchmarkId": "aa_mmmu_pro",
      "benchmarkTitle": "MMMU-Pro",
      "release": "page_jsonld",
      "previousScore": 0.734682080924856,
      "previousRank": null,
      "unit": "ratio",
      "modelIdentity": "aa_mmmu_pro:Inkling",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "7492b4c330eaff42c70c644470941bb2",
      "family": "benchmark",
      "eventType": "derived_rank_changed",
      "eventClass": "benchmark",
      "trustTier": "derived",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": false,
      "severity": "normal",
      "title": "Step 5 Preview 排名位置变化",
      "summary": "MMMU-Pro 按当前分数推导的列表位置从 17 变为 18；官方 rank 未提供。",
      "repoId": null,
      "repo": null,
      "modelId": "Step 5 Preview",
      "modelRef": "benchmark:Step 5 Preview",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://artificialanalysis.ai/evaluations/mmmu-pro",
      "observedAt": "2026-09-22T18:19:46Z",
      "publishedAt": null,
      "source": "Artificial Analysis MMMU-Pro official public Dataset page",
      "benchmarkId": "aa_mmmu_pro",
      "benchmarkTitle": "MMMU-Pro",
      "release": "page_jsonld",
      "previousRank": null,
      "rank": null,
      "previousDisplayRank": 17,
      "displayRank": 18,
      "rankSource": "derived",
      "modelIdentity": "aa_mmmu_pro:Step 5 Preview",
      "provenance": {
        "sourceUrl": "https://artificialanalysis.ai/evaluations/mmmu-pro",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    },
    {
      "eventId": "4e1de10d4662dab841c74d9cb7e6cc99",
      "family": "benchmark",
      "eventType": "score_changed",
      "eventClass": "benchmark",
      "trustTier": "official",
      "priority": "P2",
      "visibility": "primary",
      "isOfficial": true,
      "severity": "normal",
      "title": "grok-4.7-xhigh 分数变化",
      "summary": "LiveBench Overall 分数从 77.08 变为 77.40（+0.32）。",
      "repoId": null,
      "repo": null,
      "modelId": "grok-4.7-xhigh",
      "modelRef": "benchmark:grok-4.7-xhigh",
      "sourceType": null,
      "sourceOwner": null,
      "evidence": [],
      "url": "https://livebench.ai/",
      "observedAt": "2026-09-22T10:09:24Z",
      "publishedAt": null,
      "source": "LiveBench dated official leaderboard CSV",
      "benchmarkId": "livebench_overall",
      "benchmarkTitle": "LiveBench Overall",
      "release": "2026-06-25",
      "previousScore": 77.07930952380953,
      "score": 77.39673809523809,
      "delta": 0.3174285714285645,
      "unit": "score",
      "modelIdentity": "livebench_overall:grok-4.7-xhigh",
      "provenance": {
        "sourceUrl": "https://livebench.ai/",
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
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
        "contentHash": "94e45ea14997a156ddf05284869619def38081d12abcdc72dc6977259a3ba2ef"
      }
    }
  ],
  "eventCount": 86,
  "provenance": {
    "workflowRunId": "35798526262",
    "mainCommit": "7fa1bc5021254b972f2a7bc96dfbb17e346399f3"
  }
};
