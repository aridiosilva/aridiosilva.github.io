# Aridio Silva Homepage

**English (default)** | [Português](README.pt-BR.md)

Source repository for [aridiosilva.com](https://aridiosilva.com), the personal research homepage and public archive of Aridio Silva. The website documents work on AI systems architecture, autonomous and distributed AI, multi-agent systems, AI security, Zero Trust, continuous GRC, and the SGAEIA research project.

## Repository scope

The website brings together:

- the main personal and SGAEIA landing pages;
- the SGAEIA Research Series and full-reading publication pages;
- bilingual infographic editions, with English as the default and Portuguese as the localized edition;
- the Challenges catalog and project pages;
- researcher and project profiles, persistent identifiers, and distribution channels;
- accessibility, responsive navigation, structured metadata, analytics, and crawler/LLM discovery files.

## Current recorded state

The latest consolidated log entry is dated **30 October 2026**. At that point, the repository recorded:

- **75 public HTML pages** using the shared navigation and footer system;
- SGAEIA Research Series publications through **Article 24**;
- bilingual infographics through **Info_018**;
- the **Challenges** index and **SlothGuard Challenge 001** in English and Portuguese;
- English as the canonical and `x-default` edition for bilingual content;
- reciprocal `hreflang` navigation between English and Portuguese editions;
- a shared GA4 loader with privacy-preserving default storage settings;
- a compact fixed-header layout for mobile viewports, propagated through the shared stylesheet and cache-busted across all 75 HTML pages;
- coordinated discovery through `sitemap.xml`, `robots.txt`, and `llms.txt`;
- the Academia.edu profile in every HTML footer, after Medium and before DEV Community.

## Architecture and publishing conventions

### Languages and URLs

- English is the default edition.
- Portuguese editions use a `/pt/` path when a localized page is available.
- Bilingual pages provide canonical URLs, reciprocal `hreflang` declarations, and English `x-default`.
- Visible language navigation must remain available on localized content.

### Analytics, security, and privacy

- Public HTML pages load the shared script `/assets/analytics-consent.js?v=20261011` exactly once.
- The recorded GA4 property is `G-MXMJ7Z3LS7`.
- Analytics and advertising storage are denied by default; the implementation avoids duplicate `gtag.js` loaders.
- Content Security Policy rules remain restrictive and explicitly allow only the services required by the site.
- External links opened in a new tab use the appropriate `noopener`/`noreferrer` protection.

### Accessibility and responsive behavior

- Shared headers, menus, cards, carousels, reading controls, and footers support keyboard access and visible focus.
- Images and editorial figures use alternative text and responsive dimensions.
- Tables and wide media use controlled overflow instead of forcing page-level horizontal scrolling.
- Reduced-motion preferences and mobile layouts are preserved by the shared style system.

### Discovery requirements

Every new public page or translation must be reflected, as applicable, in:

- canonical and language metadata;
- structured data and citation metadata;
- the relevant public index;
- `sitemap.xml`;
- `llms.txt`;
- `robots.txt`;
- the operational change log.

## Consolidated change log

This section summarizes the detailed records under [`docs/logs/`](docs/logs/). Those files remain the authoritative source for implementation evidence, hashes, individual file inventories, validation output, and historical repository state.

### September 2026

- **22 September — scholar-ready discovery, security, and analytics baseline.** Added security hardening and vulnerability-reporting resources, crawler/search/LLM discovery, Article 3 links, privacy-aware GA4 measurement, and a Google Scholar-oriented publication catalog with twelve individually addressable pages. The recorded deployment baseline was commit `e1ff892c369489bc35004df36cdc0a19ca11bdde` on `main`.
- **25 September — Articles 13 and 14 discovery updates.** Extended the homepage, SGAEIA page, publication index, individual reading pages, sitemap, and LLM discovery records; standardized external reading links to open in a new tab.
- **28 September — Article 15.** Added the publication to the homepage surfaces and discovery files while preserving the established layout, project identity, and researcher links.
- **30 September — Articles 1 and 2 full-reading accessibility.** Introduced accessible full-reading pages, responsive content structure, metadata, and the final English-reading-link preference; recorded the first Article 2 integration pass.

### October 2026

- **1 October — Article 2 master revision and reusable article-integration prompt.** Reconciled Article 2 with Master Version 2.0 and documented the repeatable full-article workflow.
- **2–3 October — Articles 3–16 and editorial navigation.** Completed accessible full-reading pages for Article 3 and Articles 5–16, integrated covers and editorial images, and updated navigation and discovery. A fixed header, responsive menu, and DEV Community footer link were added. Article 4 was recorded separately in the master version log.
- **6 October — Article 17.** Added the bilingual jailbreak publication and completed its discovery records.
- **10 October — Article 18.** Added the AI-agent tracing publication within the established homepage boundaries.
- **11 October — Article 19 and Homepage Version 2.0.** Added the LoRA/AI-agents publication and consolidated the visual system for the homepage and SGAEIA page: headers, heroes, cards, covers, publication channels, footers, responsive behavior, accessibility, and cache-busting. The visible footer version remained Version 2.0, while a Version 2.1 continuity baseline was prepared.
- **12 October — infographic system and Info_001–Info_007.** Created the bilingual infographic architecture, accessible carousel pattern, index integration, PDF preservation workflow, language metadata, discovery requirements, and standardized headers. Detailed logs cover threat modeling, agent tracing, LoRA, model training, the cyber verification program, and subsequent entries incorporated into the continuity record.
- **14–15 October — Info_008–Info_015 and Article 20.** Added the peer-review, AI agents versus agentic AI, Gartner, jailbreak, agent-societies, alien-mind, self-building AI, and AI/cybersecurity infographic editions. Article 20 was published with its canonical records, accessibility, analytics, security, and distribution links. Infographic title blocks and bilingual headers were standardized across the catalog.
- **16–17 October — Article 21 and shared editorial patterns.** Added Article 21 in English and Portuguese; formalized the rules for articles, infographics, indexes, homepage and SGAEIA integration; standardized shared footers, centered introductory blocks, platform cards, publication channels, and index openings.
- **21 October — Article 22 and Info_016.** Added the complete bilingual Article 22 reading editions and the 50-slide bilingual Info_016 edition. The update reinforced the mandatory GA4, CSP, canonical, `hreflang`, `x-default`, structured-data, sitemap, LLM, and robots requirements for every new public page.
- **26 October — Challenges and SlothGuard Challenge 001.** Added the public Challenges index and bilingual challenge pages, project links, responsive media, tables, privacy-enhanced video, citation metadata, DOI records, and a Challenges item in all then-current page headers. Published-image loading and the challenge video presentation were subsequently corrected.
- **28 October — Info_017.** Added *Cutting LLM Cost by 70% Without Losing Quality* / *Reduzir 70% do Custo com LLMs sem Perder Qualidade* as a bilingual edition with 41 slides per language, original PDFs, accessible carousels, LinkedIn publication text, an index card, analytics, security metadata, and coordinated discovery. The preserved PDF SHA-256 values are `D934B1AA2485082E524E12CB8A9A469146523281208D9C0A52220FD05C8F4A61` (EN) and `8A8EBDD1E8AFFC676B53407106F3F313475B63DDE2E8E2ED49355C2C2137C868` (PT).
- **28 October — Article 23.** Added the complete English-default and Portuguese editions of *How to Reduce the Cost of AI Systems with LLMs Without Sacrificing Quality*, including the two 26-page PDFs, localized PNG/SVG covers and 13 figures per language, 56 audited references, GA4, CSP, citation metadata, JSON-LD, reciprocal language navigation, homepage and publication-index cards, and coordinated sitemap/robots/LLM discovery.
- **29 October — Article 24.** Added the complete English-default and Portuguese editions of *LLM Routers for AI Systems: Architecture, Governance, Multi-Agent Systems, Swarms, and Security*. The integration includes preserved PDFs and original visual assets, 18 visual plates and 11 accessible tables per language, GA4, CSP, citation metadata, JSON-LD, reciprocal language navigation, Zenodo/DEV.to/Academia.edu/Medium.com distribution links, homepage and publication-index cards with the Article 24 cover, and coordinated sitemap/robots/LLM discovery.
- **29 October — mobile fixed-header compaction and homepage card correction.** Reduced mobile-only header spacing, navigation gaps, and reading-control padding without changing desktop layout or responsive behavior. The cache-busted shared header stylesheet is referenced exactly once by all 73 HTML pages. Representative 320 px checks covered the homepage, SGAEIA, Publications, Article 24 EN/PT, Infographics, and Challenges with no header overlap or horizontal scrolling. The duplicate text-only Article 24 block was removed from the homepage Publications section; the single remaining publication card uses the original cover and established numbered-card layout.
- **28 October — Academia.edu footer integration.** Added `Academia.edu` to the shared profile navigation of all 69 public HTML pages, linked to `https://independent.academia.edu/AridioSilva`. The item inherits the approved hover, focus, contrast, responsive wrapping, and reduced-motion behavior. Discovery records and sitemap modification dates were updated.

- **30 October — Info_018.** Added *LLM Routers* / *Roteadores de LLMs* with 41 slides per language, original PDFs, the supplied LinkedIn text, shared accessible carousels and editorial styling, English as the default index destination, reciprocal language metadata, GA4 and coordinated discovery. The public HTML inventory now contains 75 pages. Changes were prepared locally; stage, commit and push commands were provided for the owner.

## Detailed log index

### Foundation, publications, and continuity

- [Version record and complete changelog — 22 September 2026](docs/logs/2026-09-22-1922-HOMEPAGE-VERSION-AND-CHANGELOG.md)
- [Article 15 inclusion](docs/logs/2026-09-28-1800-HOMEPAGE-ARTICLE-15-INCLUSION.md)
- [Article 1 full reading and accessibility](docs/logs/2026-09-30-1800-HOMEPAGE-ARTICLE-1-FULL-READING-ACCESSIBILITY.md)
- [Article 2 full reading and accessibility](docs/logs/2026-09-30-1800-HOMEPAGE-ARTICLE-2-FULL-READING-ACCESSIBILITY.md)
- [Article 2 Master Version 2.0 revision](docs/logs/2026-10-01-1750-HOMEPAGE-ARTICLE-2-MASTER-V2-REVISION.md)
- [Full-article prompt revision](docs/logs/2026-10-01-1814-HOMEPAGE-ARTICLE-INTEGRAL-PROMPT-REVISION.md)
- [Article 3 full reading and accessibility](docs/logs/2026-10-03-1127-HOMEPAGE-ARTICLE-3-FULL-READING-ACCESSIBILITY.md)
- [Articles 5–8 full reading and images](docs/logs/2026-10-03-1204-HOMEPAGE-ARTICLES-5-8-FULL-READING-IMAGES.md)
- [Fixed header, responsive navigation, and DEV footer link](docs/logs/2026-10-03-1213-HOMEPAGE-FIXED-HEADER-DEV-FOOTER.md)
- [Articles 9–12 full reading and images](docs/logs/2026-10-03-1221-HOMEPAGE-ARTICLES-9-12-FULL-READING-IMAGES.md)
- [Articles 13–16 full reading and images](docs/logs/2026-10-03-1237-HOMEPAGE-ARTICLES-13-16-FULL-READING-IMAGES.md)
- [Article 17 — Jailbreak](docs/logs/2026-10-06-ARTICLE17-JAILBREAK-HOMEPAGE.md)
- [Article 18 — AI agent tracing](docs/logs/2026-10-10-ARTICLE18-AI-AGENT-TRACING-HOMEPAGE.md)
- [Article 19 — LoRA and AI agents](docs/logs/2026-10-11-ARTICLE19-LORA-AI-AGENTS-HOMEPAGE.md)
- [Homepage style and operational continuity](docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md)
- [Article 20 publication](docs/logs/2026-10-14-1537-ARTICLE20-HOMEPAGE-PUBLICATION.md)
- [Article 21 publication](docs/logs/2026-10-17-ARTICLE21-HOMEPAGE-PUBLICATION.md)
- [Article 23 publication](docs/logs/2026-10-28-ARTICLE23-HOMEPAGE-PUBLICATION.md)

### Infographics

- [Operational log for new infographic inclusion](docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md)
- [Homepage header standardization](docs/logs/2026-10-12-HOMEPAGE-PADRONIZACAO-HEADERS.md)
- [Info_002 — AI threat modeling](docs/logs/2026-10-12-INFO-002-MODELAGEM-DE-AMEACAS-IA.md)
- [Info_003 — AI-agent execution tracing](docs/logs/2026-10-12-INFO-003-RASTREAMENTO-AGENTES-IA.md)
- [Info_004 — LoRA](docs/logs/2026-10-12-INFO-004-LORA.md)
- [Info_005 — From Zero to Weights](docs/logs/2026-10-12-INFO-005-DO-ZERO-AOS-PESOS.md)
- [Info_006 — Cyber Verification Program](docs/logs/2026-10-12-INFO-006-CYBER-VERIFICATION-PROGRAM.md)
- [Info_009 — AI Agents vs. Agentic AI](docs/logs/2026-10-14-INFO-009-AGENTES-IA-VS-IA-AGENTICA.md)
- [Info_010 — Gartner and agentic-AI project cancellations](docs/logs/2026-10-14-INFO-010-GARTNER-CANCELAMENTO-PROJETOS-IA-AGENTICA.md)
- [Info_011 — AI Jailbreak](docs/logs/2026-10-14-INFO-011-JAILBREAK-IA.md)
- [Info_012 — When AI Agents Form Societies](docs/logs/2026-10-14-INFO-012-AGENTES-FORMANDO-SOCIEDADES.md)
- [Info_013 — An Alien Mind](docs/logs/2026-10-14-INFO-013-AN-ALIEN-MIND.md)
- [Info_014 — When AI Starts Building Itself](docs/logs/2026-10-14-INFO-014-WHEN-AI-STARTS-BUILDING-ITSELF.md)
- [Info_017 — Cutting LLM Cost by 70%](docs/logs/2026-10-28-INFO-017-LLM-COST-REDUCTION.md)
- [Info_018 — LLM Routers](docs/logs/2026-10-30-INFO-018-LLM-ROUTERS.md)

## Research profiles and distribution

- [SGAEIA repository](https://github.com/aridiosilva/SGAEIA)
- [ORCID](https://orcid.org/0009-0008-2411-6995)
- [Google Scholar](https://scholar.google.com/citations?user=rPn5O48AAAAJ)
- [Zenodo](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Silva%2C%20Aridio%22)
- [SGAEIA Zenodo Community](https://zenodo.org/communities/sgaeia)
- [Academia.edu](https://independent.academia.edu/AridioSilva)
- [Medium](https://medium.com/@aridiosilva)
- [DEV Community](https://dev.to/aridiosilva)
- [LinkedIn](https://www.linkedin.com/in/aridio-silva-74997111/)

## Record maintenance

When the homepage changes, update the relevant detailed log first, then reconcile this consolidated README when the change materially affects the public structure, publishing workflow, discovery, security, accessibility, or current recorded state.
