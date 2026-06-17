# The Claude Exit System

A lead magnet on the Caldenmoore site, separate from the homepage ICP Signal Finder. Route: **`/exit`**. Audience: business owners preparing to sell.

Positioning: free, under 30 minutes, built on Claude AI plus a framework refined across 100+ transactions. The owner answers a short intake **once**, then Claude runs all five analyses and walks them through the results one scene at a time, ending at booking.

## UX flow (cinematic, single intake)

1. **Intake** — one form captures business facts (industry, revenue, profit, years, growth, owner dependence, freeform "what should a buyer know") plus walk-away inputs (annual income needed, other assets, and collapsible advanced assumptions: debt, withdrawal rate, fees, tax).
2. **Analyzing** — on submit, all four AI tools fire in parallel (`Promise.all` over never-rejecting `runTool` wrappers). A loader shows a per-tool checklist that flips to a check or error as each settles. Walk-away is computed in JS post-settle, using the valuation midpoint as its expected sale price.
3. **Reveal** — results appear one scene at a time. Each scene shows the tool result and a "Continue to <next>" button; clicking advances `step`, and a `useEffect` keyed on `step` auto-scrolls to the newly revealed scene. A failed tool renders a quiet "could not generate this one" scene and the flow continues.
4. **Recap + booking** — after the 5th tool, a recap scene appears with a "Book your call" button that scrolls to the page-level `#calendar` Calendly section.

## Status

All five analyses are live as of 2026-06-16.

| # | Analysis | Engine |
|---|----------|--------|
| 01 | Business Valuation Audit | Claude (AI) |
| 02 | Walk-Away Number | Deterministic JS (no LLM) |
| 03 | Value Optimizer | Claude (AI) |
| 04 | Buyer Type Matcher | Claude (AI, archetypes only) |
| 05 | Exit Readiness Score | Claude (AI) + client-side /100 total |

Walk-away math runs in the browser on purpose. Readiness `/100` is summed client-side from the ten criterion scores, not trusted from the model (the model's own `score` field drifts from the bars).

## File map

**Page** — `app/exit/page.tsx` (server component): metadata, Navbar + Footer, hero, "five analyses, one form" preview, `#start` flow section, `#calendar` booking section.

**Orchestrator** — `components/ExitSystemFlow.tsx` (`"use client"`): owns intake state, the analyzing loader, the sequential reveal, auto-scroll, and recap. Phases: `intake` | `analyzing` | `reveal`.

**Presentational views** (`components/exit/`, pure, data-prop only, no inputs or CTAs): `ValuationView`, `WalkAwayView`, `OptimizerView`, `BuyerView`, `ReadinessView`.

**API routes** (`app/api/`): `exit-valuation`, `exit-optimizer`, `exit-buyers`, `exit-readiness`. (Walk-away has no route.)

**Shared** — `lib/exitTypes.ts`: all interfaces, `IntakeData`, `parseMoney`, `buildBusinessInput`, `computeWalkAway`, `fmtMoney`. `lib/openrouter.ts`: `callClaudeJSON(systemPrompt, userInput)` used by all four AI routes.

## Conventions

- Model: `anthropic/claude-sonnet-4-5` via OpenRouter (raw fetch, not `@anthropic-ai/sdk`). Key `OPENROUTER_API_KEY` in `.env.local`.
- Each API system prompt defines the JSON shape, which must match its interface in `lib/exitTypes.ts` field-for-field.
- Every numeric/named output carries a "directional estimate, not advice" disclaimer.
- Buyer Type Matcher returns buyer **archetypes** only, never named real firms (fabrication).
- Calendar: Calendly `https://calendly.com/sunnymabusinessadvisors/new-meeting` (the owner's dad). Homepage uses a different Cal.com link.
- House style: no em dashes in copy; footer LinkedIn-only.
- Robustness: AI calls use independent try/catch wrappers so one failure never breaks the walkthrough.

## How to add a tool

1. Add `app/api/exit-<name>/route.ts` using `callClaudeJSON`; define the JSON shape in the prompt.
2. Add the interface to `lib/exitTypes.ts` and a pure view to `components/exit/`.
3. In `ExitSystemFlow.tsx`: add a `runTool` call in `start()`, a field to `Results`, an entry to `STEP_META`, and a case in `renderView`.

## Verification done (2026-06-16)

- `tsc --noEmit`: clean. `eslint`: clean.
- All four AI endpoints POST-tested: valid JSON in expected shape.
- Readiness confirmed: model `score` field can disagree with the bar sum (saw 52 vs 47); client-side total fixes it.
- `/exit` renders HTTP 200 in local dev.
- **Not self-verifiable:** the cinematic reveal, auto-scroll, Continue stepping, and error scenes are interaction. Needs a human click-through.

Note: local `next build` / `next dev` requires the native swc binary; a clean `npm install` restores it.
