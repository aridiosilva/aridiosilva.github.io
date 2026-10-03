# Homepage — Articles 13–16 full reading editions and images

Date: 2026-10-03 12:37 (America/Sao_Paulo)
Repository: `C:\Users\as294\aridiosilva.github.io`
Scope: SGAEIA Research Series Articles 13–16 (the public source tree currently ends at Article 16)

## Outcome

Replaced the abstract-only publication pages for Articles 13–16 with complete English web-reading editions. Each page now includes the full public article text, original English images, responsive figures, citation metadata, accessibility controls, Zenodo DOI, and Medium link.

## Public masters used

- Article 13: `docs/articles/Publicos/13-Article-Hallucination/2026-09-24-1725-SGAEIA-ARTICLE-13-WHEN-AI-HALLUCINATION-BECOMES-ACTION-MEDIUM-PUBLICATION-COPY-EN.md`
- Article 14: `docs/articles/Publicos/14-Article-Alien-Mind-AI/2026-09-25-1330-SGAEIA-RESEARCH-SERIES-ARTICLE-14-AIS-ALIEN-MIND-MEDIUM-MASTER-EN.md`
- Article 15: `docs/articles/Publicos/15-Article-Emergence-World/EN/2026-09-28-1442-SGAEIA-RESEARCH-SERIES-ARTICLE-15-WHEN-AI-AGENTS-FORM-SOCIETIES-MEDIUM-MASTER_EN.md`
- Article 16: `docs/articles/Publicos/16-Article-Medium/2026-09-29-SGAEIA-RESEARCH-SERIES-ARTICLE-16-RECURSIVE-INTELLIGENCE-ACCELERATION-PUBLIC_EN.md`

No private, SECRET, OPEN_API, or reconstruction-enabling source was used.

## Publication pages

- `/publications/when-ai-hallucination-becomes-action/` — cover plus 2 numbered figures
- `/publications/ais-alien-mind/` — cover plus 3 numbered figures
- `/publications/when-ai-agents-form-societies/` — cover plus 3 numbered figures
- `/publications/when-ai-improves-ai/` — cover plus 3 numbered figures

Images were copied byte-for-byte into `assets/article13/` through `assets/article16/`. Figures use semantic `figure` and `figcaption` elements, left alignment, the full text-column width, `width: 100%`, and `height: auto` through the shared article stylesheet.

## Discovery and navigation updates

- `index.html`: internal article links now open the complete local editions.
- `sgaeia.html`: Article 13–16 title links now use the complete local editions.
- `publications.html`: calls to action changed from “Abstract and citation” to “Read full article”; the Article 13 Medium link was added.
- `llms.txt`: Article 13 was added and Articles 14–16 were described as complete web-reading editions.
- `sitemap.xml`: Article 13–16 `lastmod` values changed to `2026-10-03`.

## Accessibility and responsive behavior

All four pages use the established article controls and styles:

- `A−` and `A+` text sizing
- Easy read mode
- Listen control
- fixed/sticky shared article header behavior
- responsive 820 px maximum reading column
- mobile width based on the viewport, with no intentional horizontal overflow
- images aligned with the start of the text and scaled proportionally

## Verification

- Four pages loaded successfully through the local HTTP preview.
- Browser accessibility trees exposed the expected H1, abstract, complete section hierarchy, images, captions, DOI links, and all four reading controls.
- Generated article sizes: approximately 3,553–4,040 rendered words each.
- Figure/image totals: Article 13 = 3 images; Articles 14–16 = 4 images each; total = 15.
- SHA-256 parity between all 15 source and copied images: 15/15.
- No unresolved cover or figure placeholders remained.
- `sitemap.xml` parsed successfully as XML.
- `git diff --check` completed without whitespace errors (only the repository's existing line-ending conversion notices).

## Deployment state

No `git add`, commit, push, or deployment was performed. The working tree remains available for local browser testing and user-controlled review.
