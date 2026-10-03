# Homepage SGAEIA — Articles 9–12 full reading and images

Date: 2026-10-03 (America/Sao_Paulo)

## Scope

- Replaced the abstract-only records for SGAEIA Research Series Articles 9–12 with complete English web-reading editions.
- Preserved the established numbering and titles:
  - Article 9 — **When AI Begins to Build AI**
  - Article 10 — **Rogue AI Agents: When Autonomous Systems Become a Collective**
  - Article 11 — **From Model Capability to Governed Action: An Architecture for Secure Agentic AI**
  - Article 12 — **Ten Days That Exposed the Governance Gap in Frontier AI**
- Used only sources and images under `docs/articles/Publicos/`. No private or secret source was used.

## Authoritative masters

- Article 9: `ArtigoWhenAIBeginstoBuildAI-MasterMediumEdition-AridioSilva14-SET-2026_MASTER_FINAL.md`
- Article 10: `SGAEIA-Research-Series-Article-10-Rogue-AI-Agents-MASTER-FINAL_AridioSilva16SET2026.md`
- Article 11: `SGAEIA-Research-Series-Article-11-From-Model-Capability-to-Governed-Action-An-Architecture-for-Secure-Agentic-AI-MEDIUM-MASTER-FINAL-v4- (1).md`
- Article 12: `2026-09-20-1206-SGAEIA-ARTICLE-12-PUBLIC-MASTER-FINAL-AUDITED.md`

## Content and assets

- Article 9: complete text, cover, and Figures 1–7 (8 images).
- Article 10: complete text, cover, and Figures 1–4 (5 images).
- Article 11: complete text, cover, and Figures 1–4 (5 images).
- Article 12: complete text, cover, Figures 1–4, and the published institutional-comparison table image (6 images).
- Total: 4 complete articles and 24 PNG images.
- Figures use semantic `figure`/`figcaption`, useful alternative text, lazy loading, and visible authorship/license credit.
- Article images use the shared responsive article stylesheet: left-aligned, article-column width, `height:auto`, and preserved aspect ratio.
- No C2PA or Content Credentials claim is made.

## Pages and discovery surfaces

- Full-reading routes:
  - `/publications/when-ai-begins-to-build-ai/`
  - `/publications/rogue-ai-agents/`
  - `/publications/from-model-capability-to-governed-action/`
  - `/publications/ten-days-that-exposed-the-governance-gap/`
- New asset directories: `assets/article9/`, `assets/article10/`, `assets/article11/`, and `assets/article12/`.
- Updated `index.html`, `sgaeia.html`, `publications.html`, `sitemap.xml`, and `llms.txt` to point to and describe the complete local editions.
- Retained Zenodo as the persistent source for files, version, license, and citation information and retained Medium as the narrative distribution surface.

## Accessibility and metadata

- Added A−, A+, Easy read, Listen, and Stop behavior through the existing shared accessibility assets.
- Each record has one canonical URL and one instance of every required citation metadata field.
- Authorship is displayed in separate lines with a single ORCID occurrence in the author block.
- Suggested citation and the dedicated Medium link appear at the end of each article.

## Validation and limits

- Local structural validation covered titles, article numbers, DOIs, canonical/citation metadata, CSP, accessibility controls, figures/captions, image existence, placeholders, discovery links, sitemap entries, and `llms.txt` entries.
- Browser QA passed for all four routes at 1280 × 720 and 390 × 844: no horizontal overflow; the first image on each page exactly matched the article-column width (820 px desktop and 347 px mobile).
- Accessibility behavior was exercised on Article 12: A+ changed the computed article font size to 17.28 px, Easy read changed `aria-pressed` to `true`, and Listen changed to the active Stop state.
- Source metadata inconsistencies in older abstract-only pages were reconciled to the established series dates already used by the SGAEIA homepage and the dated public masters: 2026-09-14, 2026-09-16, 2026-09-18, and 2026-09-20.
- External Zenodo pages were not readable through the web retrieval service during this session; existing DOI identifiers, public masters, and current site records were preserved.
- No stage, commit, push, deployment, indexing request, or external publication edit was performed.
- The operational prompt was subsequently relocated out of the public homepage repository to `C:\Users\as294\SGAEIA_2\docs\prompts\2026-09-30-SGAEIA-PROMPT-CANONICO-INCLUSAO-ARTIGO-HOMEPAGE_PT.md`, where it belongs to the SGAEIA_2 project documentation. It is not part of this homepage change set.
