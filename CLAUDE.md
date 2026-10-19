# Revision System

A system to facilitate UPSC (Prelims) current-affairs revision, built on active recall, a mistakes log, and 21-day spaced re-testing (the FARM framework).

Read `docs/UPSC_REVISION_CONTEXT.md` for the full product context and the science behind it before designing or changing features.

Key rules the system must honor:
- Revision is driven by the **mistakes log**, not by re-reading articles.
- Re-test logged mistakes at +21 days, then +21 days again; two consecutive successful recalls = mastered.
- Prioritize subjects by count of open mistakes during final revision (Feb–May).

## Stack & layout
- `web/`: React + TypeScript (Vite). Supabase client in `web/src/lib/supabase.ts`; config in `web/.env` (publishable key only — never commit the secret/service_role key).
- Backend/DB: Supabase. Schema changes go in `supabase/migrations/*.sql` and are applied via the Supabase SQL editor. Enable Row Level Security on every table.
- Deploy: every push to `main` runs `.github/workflows/deploy.yml` (lint → build → GitHub Pages). Live at https://ashishsingh-beep.github.io/revision-system/. PRs run lint + build only.
- Commands (from `web/`): `npm run dev`, `npm run build`, `npm run lint`.
- The UI must work well on phone widths — the user revises from mobile.
