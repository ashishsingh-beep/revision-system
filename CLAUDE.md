# Revision System

A system to facilitate UPSC (Prelims) current-affairs revision, built on active recall, a mistakes log, and 21-day spaced re-testing (the FARM framework).

Read `docs/UPSC_REVISION_CONTEXT.md` for the full product context and the science behind it before designing or changing features.

Key rules the system must honor:
- Revision is driven by the **mistakes log**, not by re-reading articles.
- Re-test logged mistakes at +21 days, then +21 days again; two consecutive successful recalls = mastered.
- Prioritize subjects by count of open mistakes during final revision (Feb–May).
