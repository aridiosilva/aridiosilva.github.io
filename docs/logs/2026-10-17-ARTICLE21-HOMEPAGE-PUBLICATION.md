# Homepage — Article 21 integration — 17 October 2026

Scope: local homepage repository `C:\Users\as294\aridiosilva.github.io`, branch `main`, initial HEAD `c5bf096`, initially clean. No stage, commit, push or deployment performed.

The current user request governs this work. The supplied continuity document was used as technical and historical context. After the user's local-only browsing instruction, browser verification used only `http://127.0.0.1:8765/`.

## Source and publication data

- Public source package: `C:\Users\as294\SGAEIA_2\docs\articles\Publicos\ARTICLE_021`.
- Complete EN/PT editions rendered from the two `masters/2026-10-16-1804-SGAEIA-Article21-*.md` files, retaining all sections, 18 references, author details, citation, license, series continuity and three images per edition (one cover, two figures).
- English title: The Open Letter on AI and Cybersecurity and the Evidence for Agent Containment.
- Portuguese title: Carta aberta sobre AI e cibersegurança e as evidências que sustentam a contenção de agentes.
- Article publication date: 2026-10-16. Website integration date: 2026-10-17. Article version remains 1.0; existing website version labels preserved.
- DOI: 10.5281/zenodo.23426350.
- The owner supplied and confirmed all four distribution URLs in this chat; their live availability is not asserted by the local verification.
- Zenodo: https://zenodo.org/records/23426350
- Medium: https://medium.com/@aridiosilva/the-open-letter-on-ai-and-cybersecurity-and-the-evidence-for-agent-containment-071f1882f34d
- DEV Community: https://dev.to/aridiosilva/the-open-letter-on-ai-and-cybersecurity-and-the-evidence-for-agent-containment-4a19
- Academia.edu: https://www.academia.edu/179088614/The_Open_Letter_on_AI_and_Cybersecurity_and_the_Evidence_for_Agent_Containment

## Files and behavior

- Added `publications/artigo21/index.html` and `publications/artigo21/pt/index.html` with reciprocal local language navigation, canonical URLs, reciprocal hreflang, English x-default, citation metadata and ScholarlyArticle JSON-LD.
- Added three unchanged PNGs under `assets/article21/`; intrinsic image dimensions declared, cover prioritized, numbered figures lazy-loaded.
- Added the article first in homepage Publications and Writing, the SGAEIA Research Series, and `publications.html`; existing articles retained and homepage numbering advanced sequentially.
- Added translations for the new homepage/SGAEIA title, description and series label in EN/PT/ES/FR/DE. Individual article editions remain EN/PT as requested.
- Reused Article 20's generic figure/distribution styles and language-aware accessibility controller without changing those assets. Preserved shared fixed white header, blue hero/footer, reading controls, GA4 loader and CSP.
- New article menus include Infographics/Infográficos; the PT publication navigation reads Publicações. The SGAEIA menu uses `/sgaeia.html` to support the local static preview.
- Updated `sitemap.xml`, `llms.txt` and the informational timestamp in `robots.txt`. Existing crawler permissions retained.
- Updated the homepage continuity log and the repository copy of the continuity prompt. The external reference document on F: was not edited.

## Verification

- Five pages verified through the local server in 1280 and 320 px: no horizontal overflow and no header overlap at the top of the content. Cover loaded on all five pages; existing colors preserved.
- Full source paragraphs checked against the public HTML source editions; 18 reference paragraphs, three figures and three captions per language verified. Local image/style/script dependencies resolve.
- All supplied distribution links are present in every new article-21 record and in structured metadata. Canonicals, alternate languages, analytics references, unique IDs and sitemap uniqueness checked.
- A+ increased text from 16 px to 17.28 px; A− restored it. Easy read toggled its state and was restored. PT-to-EN navigation stayed on localhost and selected English speech labels. No browser console errors were observed in this control test; audible speech output was not tested.
- Temporary viewport override removed and temporary QA tab closed. Five local deliverable tabs retained at the right.
- `git diff --check` passed (only normal LF/CRLF informational warnings).

## Backup and rollback

Original modified files are backed up under `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-article21`, preserving their paths. To roll back only this operation, restore those original files and remove only the newly created `assets/article21/`, `publications/artigo21/` and this operation log. Do not overwrite subsequent owner edits.
