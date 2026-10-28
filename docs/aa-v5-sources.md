# Artificial Analysis v5.0 source verification

Verified 2026-10-28 using unauthenticated GETs of the official public pages below.
Each page returned structured Next.js `initialModels` rows containing the listed
numeric field. Fields are read directly; the collector does not recompute AA's index.

| Board | Official page | Structured score field | Release |
| --- | --- | --- | --- |
| Intelligence Index v5.0 | https://artificialanalysis.ai/evaluations/artificial-analysis-intelligence-index | `intelligenceIndex` | `v5.0` |
| AA-Briefcase v1.1 | https://artificialanalysis.ai/evaluations/aa-briefcase | `briefcaseElo` | `v1.1` |
| AutomationBench-AA | https://artificialanalysis.ai/evaluations/automationbench-aa | `automationBenchPartialScore` | `page` |
| Terminal-Bench 4.0 | https://artificialanalysis.ai/evaluations/terminalbench-4-0 | `terminalBench40` | existing board |
| FrontierCode 2.0 | https://artificialanalysis.ai/evaluations/frontiercode-2-0 | `frontierCode20` | `v2.0` |
| AA-Omniscience v1.1 | https://artificialanalysis.ai/evaluations/omniscience | `omniscience` | `v1.1` |
| GDP.pdf | https://artificialanalysis.ai/evaluations/gdp-pdf | `gdpPdfAllPass` | `page` |
| HLE-Diamond | https://artificialanalysis.ai/evaluations/hle-diamond | `hleDiamond` | `page` |
| CritPt v2 (Hard Subset) | https://artificialanalysis.ai/evaluations/critpt-v2?critpt-subset=hard | `critptAgenticHard` | `v2:hard` |
| Terminal-Bench-Science 0.1 | https://artificialanalysis.ai/evaluations/terminal-bench-science | `terminalBenchScience` | `v0.1` |

The official index page links all nine component pages. The hard CritPt subset
uses `critptAgenticHard`, not the full-set `critptAgentic` or the earlier `critpt`.
AutomationBench uses its partial score, not objectives-completed or strict score.
GDP.pdf uses all-pass rate, not mean criterion pass rate. FrontierCode uses its
2.0 field, not the earlier `frontierCode` field.

The index and Omniscience endpoints now serve different versions from those
previously configured. Their old registry and hierarchy IDs are disabled and
excluded from the new catalog, while historical files remain untouched. New
versioned IDs prevent scores from crossing methodology boundaries. Expected
page headings guard these sources, and exports reject snapshots with a release
that differs from the source's configured release.

All newly configured pages exposed 28 selected rows during verification. The
total-index page advertised 77 models; other boards advertised their own totals.
The collector exports this coverage explicitly and preserves missing scores as
null. The larger `models` catalog contains names, not the missing score rows, and
is not treated as a complete leaderboard. No login, download controls, private
API, or guessed endpoint was used.

The export now has 31 boards: 8 LiveBench, 22 AA (current overall, nine v5.0
components, and twelve other independent evaluations), and 1 DeepSWE. The nine
components include the existing Terminal-Bench board; seven boards were added.
