# Handoff — 2026-04-23

## Scope
Copy and ordering changes to the portfolio. No structural or styling changes.

## Commits pushed to `origin/main` (in order)

1. **`9560708` — Promote Ballrs to first slot in bento grid**
   - `index.html`: swapped the first two bento tiles so Ballrs (navy) is now position 1 and MealMatch (mint) is position 2. Loupe (purple) and JetSweat (burnt) remain positions 3 and 4.
   - Positional CSS rule at lines ~334–337 (`.bento-tile:nth-child(3) .bt-img, .bento-tile:nth-child(4) .bt-img { height: 65% }`) still lands on Loupe and JetSweat as before — layout unchanged.

2. **`ec2ac61` — Refine MealMatch copy and add hero outcomes block**
   - `mealmatch.html`:
     - Renamed section 05 `Hard Calls` → `Tough Calls` in both the floating minimap (`#s05` nav link) and the bracketed section label. Anchor ID `#s05` preserved — no broken links.
     - Section 05 headline: `Defending the product direction.` → `Making the call under pressure.`
     - Rewrote Kofi intro paragraph (section 04).
     - Rewrote Stage 02 ChatGPT body copy (section 04).
     - Added a 3-stat "outcomes" block under the hero meta row.

3. **`ae9f86f` — Remove hero outcomes block from MealMatch**
   - Reverted only the outcomes block added in `ec2ac61`. The other three MealMatch edits (Tough Calls rename, Kofi intro, ChatGPT copy) are still live.

## Net state vs. the start of the session

**`index.html`**
- Bento grid order is now: Ballrs → MealMatch → Loupe → JetSweat.

**`mealmatch.html`**
- Section 05 label is `Tough Calls`, headline is `Making the call under pressure.`
- Kofi section 04 intro paragraph and Stage 02 (ChatGPT) body copy rewritten.
- Hero section is unchanged from original (outcomes block was added and then removed).

## Notes for next session

- The Next.js scaffold under `src/app/` (with `page.tsx`, `ProjectCard`, `content.ts`) appears to be unused — the live site is built from the static HTML files at the repo root (`index.html`, `mealmatch.html`, `ballrs.html`, `jetsweat.html`, `loupe.html`, `about.html`). Any future project ordering or copy edits should target the HTML files, not the Next.js data.
- Untracked files at the end of the session (not touched):
  - `public/images/about/photos-for-site/street/street-100.JPG`
  - `public/images/about/photos-for-site/street/street-200.jpg`
  - `public/images/about/photos-for-site/street/street-3000.jpg`
  - `public/images/ballrs/for linkedin.mov`
- The MealMatch page has a terminal-scramble animation driven by `[data-final]` attributes, triggered when `.s1-stats` enters the viewport. Any future stat-style element should omit `data-final` if it shouldn't participate in the scramble.
- Positional CSS in the bento grid (`nth-child(3)`, `nth-child(4)` image-height cap) means reordering more tiles will require re-checking the bottom-row image treatment.
