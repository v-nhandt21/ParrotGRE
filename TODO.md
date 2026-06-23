# ParrotGRE — TODO & Progress Tracker

## Feature: IELTS Band Levels (5+ / 6+ / 7+)

**Goal:** Add Band 5+ and Band 6+ versions of writing and speaking content so learners at different levels can practice with appropriate difficulty.

**Current state:** All existing content is Band 7+. The "IELTS 7+" badge in the header is cosmetic only — no functional level system exists.

---

## Refactoring Assessment

**Verdict: Minimal refactoring needed.** No architectural changes required.

Changes needed:
1. Add `band: 7` field to all existing data items (one-time migration)
2. Add level-filter UI to Writing and Speaking components
3. Update Dictation.jsx to also filter by band level
4. Update App.jsx header badges to reflect available levels

**Risk:** Low. Adding a new field doesn't break existing functionality.

---

## Task Breakdown

### Phase 1 — Data Schema Migration
- [ ] Add `band: 7` to all items in `writingTask1.js`
- [ ] Add `band: 7` to all items in `writingTask2.js`
- [ ] Add `band: 7` to all items in `speakingData.js`
- [ ] Decide data structure: separate files per band vs. all bands in one file

**Recommended:** Keep one file per type, add `band` field inline. Simpler imports and no structural changes to components.

```js
// Example: writingTask2.js item shape after migration
{
  id: 1,
  band: 7,           // ← new field
  title: "Technology & Society",
  essay: { ... }
}
```

### Phase 2 — Band 5+ Content Creation (Writing)
- [ ] Write Band 5 essay for Writing Task 2: Technology & Society
- [ ] Write Band 5 essay for Writing Task 2: Education Online vs Traditional
- [ ] Write Band 5 essays for remaining Task 2 topics (1 per topic)
- [ ] Write Band 5 sample answer for Writing Task 1: Line Graph
- [ ] Write Band 5 sample answer for Writing Task 1: Bar Chart
- [ ] Write Band 5 sample answers for remaining Task 1 types (1 per type)

**Band 5 characteristics:**
- Simple vocabulary, some repetition okay
- Shorter sentences (15–20 words avg)
- Clear but basic paragraph structure
- Some grammatical errors acceptable
- Task addressed but not fully developed

### Phase 3 — Band 6+ Content Creation (Writing)
- [ ] Write Band 6 essay for Writing Task 2: Technology & Society
- [ ] Write Band 6 essay for Writing Task 2: Education Online vs Traditional
- [ ] Write Band 6 essays for remaining Task 2 topics (1 per topic)
- [ ] Write Band 6 sample answer for Writing Task 1: Line Graph
- [ ] Write Band 6 sample answer for Writing Task 1: Bar Chart
- [ ] Write Band 6 sample answers for remaining Task 1 types (1 per type)

**Band 6 characteristics:**
- Mixed vocabulary (some good words, some basic)
- Moderate sentence variety
- Clear organisation, some cohesion issues
- Generally accurate grammar with occasional errors
- Main points developed with some detail

### Phase 4 — Band 5+/6+ Content Creation (Speaking)
- [ ] Write Band 5 answers for Speaking Part 1 (all topics)
- [ ] Write Band 5 answers for Speaking Part 2 (all cue cards)
- [ ] Write Band 5 answers for Speaking Part 3 (all topics)
- [ ] Write Band 6 answers for Speaking Part 1 (all topics)
- [ ] Write Band 6 answers for Speaking Part 2 (all cue cards)
- [ ] Write Band 6 answers for Speaking Part 3 (all topics)

**Band 5 speaking:** Short answers, simple linking words (and, but, because), basic vocabulary
**Band 6 speaking:** Developed answers, some idiomatic language, mostly fluent

### Phase 5 — UI Changes
- [ ] Add band level filter/selector to `WritingTask2.jsx` (Band 5 / Band 6 / Band 7+)
- [ ] Add band level filter/selector to `WritingTask1.jsx`
- [ ] Add band level filter/selector to `Speaking.jsx` (Part 1/2/3)
- [ ] Add band level filter/selector to `Dictation.jsx` (already has filter tabs, add band row)
- [ ] Update App.jsx header badges:
  - Show `IELTS 5+` / `IELTS 6+` / `IELTS 7+` as clickable level selector
  - Or keep cosmetic — TBD

### Phase 6 — QA & Deploy
- [ ] `npm run build` succeeds with no errors
- [ ] Test each band level filter works correctly
- [ ] Verify localStorage dictation progress carries band info if needed
- [ ] Deploy to GitHub Pages

---

## Progress Log

| Date | Task | Status |
|------|------|--------|
| 2026-06-24 | Dictation tab (overlay typing, bilingual split-screen) | ✅ Done |
| 2026-06-24 | IELTS level planning + TODO.md | ✅ Done |
| — | Phase 1: Data schema migration | ⬜ Pending |
| — | Phase 2: Band 5 writing content | ⬜ Pending |
| — | Phase 3: Band 6 writing content | ⬜ Pending |
| — | Phase 4: Band 5/6 speaking content | ⬜ Pending |
| — | Phase 5: UI level filter | ⬜ Pending |
| — | Phase 6: QA & Deploy | ⬜ Pending |

---

## Notes

- **Content volume:** Each Writing Task 2 topic needs 2 new essays (Band 5 + Band 6). With ~10 topics that's 20 new essays. This is the biggest time cost.
- **Speaking:** Each Q&A needs 2 new answers. With ~15 questions per topic × 5 topics × 3 parts = a lot. Consider doing 1–2 band level versions per part first, then expanding.
- **Data file size:** writingTask2.js is already large. Consider splitting by band into `writingTask2_band5.js`, `writingTask2_band6.js`, `writingTask2_band7.js` to keep files manageable.
- **MVP approach:** Could start with just 1 Band 5 and 1 Band 6 example per type to prove the system works, then fill in the rest gradually.
