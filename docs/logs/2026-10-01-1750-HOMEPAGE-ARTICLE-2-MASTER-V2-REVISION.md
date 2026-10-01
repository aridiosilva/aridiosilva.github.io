# Homepage Article 2 — Master Version 2.0 Revision Log

- **Artifact:** SGAEIA Research Series — Article 2, English full-reading homepage page.
- **Action:** Replaced the previous Article 2 body at `publications/bounded-and-revocable-authority/index.html` with the complete English master version 2.0 published on Medium.
- **Source of truth:** `F:\#SIMULAÇÂO IRPF Anual 2027-2026\__cursos 2026\artigos MEDIUM COM\artigo 2 - 10-set-2026\EN\02-SGAEIA-Article-2-Medium-PUBLICO-version2.0-20206-10-01-MASTER-FINAL_EN.md`. Its SHA-256 was checked against the matching public master in `SGAEIA_2/docs/articles/Publicos/02-Article-Medium/`; the hashes matched.
- **Reason for change:** The author republished Article 2 as master version 2.0 after rewriting the prose to eliminate fragmented one-sentence narrative paragraphs and improve continuity and readability. The homepage full-reading page must present that same current public article text, rather than the superseded version.
- **Public/private classification:** PUBLIC. The page contains the public English article and its existing public cover plus Figures 1–4. The five image assets were checked against the public SGAEIA_2 assets by SHA-256 and match.
- **Bibliographic continuity:** Stable URL and canonical URL remain `https://aridiosilva.com/publications/bounded-and-revocable-authority/`. Original publication date remains 2026-09-10. DOI remains `10.5281/zenodo.22715664`; title, author, and English language metadata remain unchanged. `sitemap.xml` `lastmod` updated to 2026-10-01.
- **Related surface adjustment:** Removed the duplicated “Read full article” link from the Article 2 homepage card; retained one full-text link and the Zenodo DOI link.
- **Research impact:** Editorial revision only; no change to research thesis, evidence status, citations, limitations, or conclusions intended.
- **Architecture impact:** None. No SGAEIA architecture or implementation artifacts changed.
- **Version impact:** Homepage reading edition now reflects the public Medium master 2.0. Zenodo DOI and original publication date are unchanged.
- **Validation performed:** Python HTMLParser reported no structural nesting errors. Required canonical and six citation metadata fields each occur once with expected values. Five image links resolve to local files and their hashes match the public source images. All master sections and references [1]–[10] are present. No image insertion placeholders remain. Sitemap contains the stable URL exactly once and has `lastmod` 2026-10-01; total sitemap URL count remains 19. Existing CSP directives (`object-src 'none'`, `base-uri 'none'`, `form-action 'none'`) and accessibility controls were preserved. `git diff --check` was invoked; repository status output was unavailable from the local shell during this run.
- **Files changed:** `publications/bounded-and-revocable-authority/index.html`; `index.html`; `sitemap.xml`; this log.
- **Related R2A Gate / Change Set:** Not applicable; editorial-only publication synchronization.
- **Deployment / commit / PR:** None. No external deployment or publication action performed.
- **Remaining limitation:** Visual browser review and external deployment verification remain pending.

© 2026 Aridio Silva | Project SGAEIA | CC BY 4.0

- **Follow-up correction:** After owner review, removed a duplicated ORCID label/identifier from the article author block. The block now presents the author, affiliation, SGAEIA creator role, and one linked ORCID. HTML nesting and the author-block check passed.

- **Author-block formatting follow-up:** Matched the owner-provided reference layout: name, affiliation, creator line with spaced em dash, and one ORCID on separate lines. The displayed ORCID uses the master’s en-dash grouping; its link resolves to the canonical hyphenated ORCID URL.

- **Figure-caption formatting follow-up:** For Figures 1–4, merged each descriptive master caption and visible CC BY attribution into one `figcaption` below its image. Removed the duplicated standalone caption paragraph. The cover image caption remains unchanged.
