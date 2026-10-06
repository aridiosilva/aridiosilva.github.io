# SGAEIA Article 17 — local homepage integration

Author: Aridio Silva — Independent Researcher, Brazil
Copyright: © 2026 Aridio Silva
Date: 2026-10-06
Status: LOCAL IMPLEMENTATION COMPLETE; DEPLOYMENT AND DOI PENDING

The owner assigned AI Jailbreaks as Article 17 and explicitly requested full homepage integration. EN and PT editions include a visible subtitle, complete analytical text, 25 numbered references, cover and four figures per language, visible image credits, preserved PNG copyright metadata, research profiles without Stack Overflow, language links, citation metadata, and reading accessibility controls. Existing security policy and analytics-consent assets are reused. The catalog, homepage publication and writing lists, SGAEIA series, sitemap and llms.txt have been updated. No DOI metadata or distribution URL has been fabricated. This article's DOI remains pending; the project software DOI identifies a separate artifact.

Canonical EN route: https://aridiosilva.com/publications/artigo17/
PT route: https://aridiosilva.com/publications/artigo17/pt/
EN cover route: https://aridiosilva.com/assets/article17/cover.png

These routes are prepared locally and become public after deployment. No commit, push or external publication was performed. Publication metadata dates describe the intended 6 October edition, not verified deployment. HTML/XML parse, image resolution, one H1/canonical per language, citation author, 13 analytical section headings and reference 25 checks passed. Existing files were hash-checked before replacement and backups retained in the working directory. Further validation is recorded in the output delivery note.
## Discovery completion — 2026-10-06 12:28 BRT

The owner requested verification and completion of the crawler/AI discovery files. The audit confirmed that llms.txt and sitemap.xml already included both Article 17 page URLs. No extra crawler configuration file existed beyond robots.txt; .well-known/security.txt is a security contact record and was not repurposed.

Files changed in this follow-up:

- `sitemap.xml`: retained all 21 unique page URLs; added image sitemap records for all 10 Article 17 images, reciprocal EN/pt-BR language alternates on the two article records, and accurate 2026-10-06 lastmod values for the homepage, SGAEIA page and publication catalog changed during integration.
- `llms.txt`: added a dedicated Article 17 block with exact titles and subtitles, author, number, language editions, covers, review scope, license, copyright, pending DOI/distribution metadata and the distinction from the software DOI. Existing publication records were preserved.
- `robots.txt`: preserved the wildcard Allow rule and Sitemap directive; added copyright, update date and the llms.txt URL as a clearly identified informational comment. This comment is not a crawler directive and does not require AI systems to read or use llms.txt.
- This log: records the actual audit, modifications and validation results.

Validation passed: XML parses; 21 unique sitemap page URLs; exactly one EN and one PT Article 17 URL; 10 unique image URLs resolving to local files; reciprocal language alternates; robots parser permits the article, image and llms routes for tested user agents; canonical URLs and HTML sitemap/describedby links remain consistent; git diff --check passes. Existing crawl policy and strict CSP were not weakened. No private research finding was added to public discovery files. No article DOI, live publication or indexing claim was invented. No commit, push, deployment or Search Console request was performed.

Implementation references:

- Google image sitemap extension: https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
- Google localized-version sitemap annotations: https://developers.google.com/search/docs/specialty/international/localized-versions#sitemap

© 2026 Aridio Silva | Project SGAEIA
