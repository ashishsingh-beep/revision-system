# UPSC Revision System — Project Context

Source: "Detailed Notes: Mastering UPSC Current Affairs — Retention Through Neuroscience" (UPSC_Memory_Mastery.pdf).
Goal: build a system that helps the user revise UPSC current affairs (Prelims focus) by optimizing **long-delay retention**, not coverage.

## 1. The problem the system solves
- Aspirants read and highlight monthly current-affairs magazines but can't recall precise details in the exam, where options are deliberately close.
- **Coverage myth:** every major coaching magazine misses questions (about 9–10 per magazine on average). Switching or adding magazines doesn't fix the real problem.
- **Long-delay memory:** there are about 244 days between first reading and Prelims. Re-reading every magazine in April–May is impossible.
- So the bottleneck is retention, not information.

## 2. Science basis
- **Washington University study (2006):** Group A re-read a passage 4 times. Group B read it once and then self-tested 3 times (active recall or MCQs).
  - Test after 5 minutes: the re-reading group scored higher. This is false familiarity.
  - Test after 1 week: the active-recall group scored much higher, and the re-reading group's memory had decayed badly.
- Takeaway: re-reading gives familiarity that fades. Retrieval (pulling facts out of memory) builds long-term memory.

## 3. FARM framework (core workflow per news item)
| Step | Meaning | System implication |
|---|---|---|
| **F – Filter** | Check whether the item is genuinely UPSC-relevant before spending time on it. Look for static anchors or PYQs. Example: Nobel-related IceCube Neutrino Observatory news passes, because UPSC asked about IceCube in Prelims 2015. | Relevance check, PYQ linking/tagging |
| **A – Anchor** | Link the current-affairs item to its core static topics instead of studying it alone. Example: IceCube → India-based Neutrino Observatory (INO), dark matter, neutrino detection. | Topic graph: CA item ↔ static topics, subject tags |
| **R – Recall** | Read the news and static context once, close all notes, then recall or self-test from memory without re-reading. | Closed-book recall prompts and MCQs, written summaries from memory |
| **M – Mistakes Log** | Log every mistake or forgotten detail found during recall. Example: IceCube sensors sit 1.5–2 km deep in ice. Review the logged mistakes, not whole articles. | First-class mistake entries, which become the unit of revision |

## 4. Spaced repetition rules
- **10% gap rule (2008 study):** the best re-test gap is about 10% of the time until the exam. For about 7 months out, that is about 3 weeks, so use **21 days**.
- Protocol:
  1. Initial test right after reading.
  2. Re-test 1: 21 days later, **only the logged mistakes**.
  3. Re-test 2: 21 days after re-test 1.
- **Retention benchmark:** a mistake recalled correctly in **two consecutive 21-day cycles** counts as consolidated (mastered).
- Possible extension: work out the gap from days remaining until the exam (gap ≈ 10% of remaining time) instead of a fixed 21 days.

## 5. Smart revision strategy
- **Targeted revision (Feb–May):** put subjects with the most logged mistakes first (example: Environment with 9 > Science & Tech with 6) instead of revising linearly.
- **Practice loop / challenge:** pick a topic → apply FARM → write a 3-line active-recall summary from memory → re-test after 3 weeks → measure the improvement.

## 6. Derived feature ideas (for the build)
- Capture CA items (title, month/source, subject, static anchors, PYQ links, relevance flag).
- Closed-book recall mode: hide the content, have the user write a summary or answer MCQs, then compare.
- Mistakes log with subject tags. Each mistake gets a review schedule (day 0 → +21 → +21) and a status (open / passed once / mastered).
- Daily "due today" queue that contains only mistakes.
- Dashboard: mistakes per subject, mastery rate, days to Prelims, a weak-subject ranking that drives Feb–May priorities.
- Optional: MCQ generation, configurable exam date, adaptive gap (10% rule).
