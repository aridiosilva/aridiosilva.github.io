# Aridio Silva Homepage — Version Record and Complete Changelog — 22 September 2026

**Repository:** `C:\Users\as294\aridiosilva.github.io`  
**Remote:** `https://github.com/aridiosilva/aridiosilva.github.io`  
**Public site:** `https://aridiosilva.com`  
**Owner:** Aridio Silva  
**Date covered:** 2026-09-22  
**Created:** 2026-09-22 19:22 BRT  
**Last Updated:** 2026-09-25 12:46 BRT
**Timezone:** America/Sao_Paulo (UTC−03:00)  
**Document Status:** HOMEPAGE VERSION RECORD — COMPLETE FOR DEPLOYED SCOPE  
**Public/private classification:** PUBLIC TECHNICAL CHANGELOG; no secret, credential or private mechanism is included  

---

## 1. Version identity

The homepage does not currently use a formal semantic-version tag. The authoritative deployed version at the end of the implementation is therefore identified by Git commit:

```text
Homepage deployment baseline: 2026-09-22 / Scholar-ready discovery and analytics release
Git commit: e1ff892c369489bc35004df36cdc0a19ca11bdde
Branch: main
Local HEAD: e1ff892c369489bc35004df36cdc0a19ca11bdde
Remote origin/main: e1ff892c369489bc35004df36cdc0a19ca11bdde
Starting baseline before today's homepage commits: a0a565ebd17216f084cbb3813d432416907ddf72
```

The public state was verified at `https://aridiosilva.com/publications.html` after deployment. Before creation of this changelog, the working tree reported `## main...origin/main` with no pending file changes. This new changelog becomes the next local change until committed and pushed.

## 2. Scope of the 22 September homepage release

The work introduced five related capability groups:

1. security hardening and vulnerability-reporting controls;
2. search-engine, crawler and LLM discovery metadata;
3. publication of Article 3 links on the personal and SGAEIA homepages;
4. privacy-aware GA4 measurement for future audience reports;
5. a Google Scholar-oriented catalog with twelve individually addressable publication pages.

The public HTML pages `index.html` and `sgaeia.html` remain accessible. No login, paywall or crawler-blocking interstitial was introduced. Analytics consent does not prevent a user or crawler from reading publication abstracts.

## 3. Commit ledger

| Commit | Time BRT | Change |
|---|---:|---|
| `250de90264859c892219ecd0c61c173a42398ad2` | 14:57:41 | Harden public site security policy in `index.html` |
| `e87bafb057e578ae5bccbced6dc175f11cae9000` | 14:59:25 | Harden security policy in `sgaeia.html` |
| `69fa323311e8e1d34ca273e41ae29ecd1405dde8` | 15:01:52 | Add `robots.txt` |
| `9c346fc63b7faf5337521321c75eeb9a5ad90374` | 15:02:42 | Add `sitemap.xml` |
| `0b47b610662e492613e35b1fc826d2f7f36ae69d` | 15:02:44 | Add `llms.txt` |
| `7b8e2cfceafe976d8d01fbf3b2c816526d0d3d6d` | 15:05:28 | Add `SECURITY.md` |
| `6d911d536ae0d8e1d526dbe65f710a1daa0cd3c4` | 15:07:01 | Add `.github/CODEOWNERS` |
| `d865c8ec8edfebe8acb90b13476624d82f692b8a` | 15:08:18 | Add `.well-known/security.txt` |
| `caa45cbe031dba2c4c8a2b2f64c9f323e72ea6c8` | 17:40:17 | Add privacy-aware GA4 consent controller |
| `64f8264056cfec105d244a11aa7f9b11dcf34eaa` | 17:41:53 | Add Article 3 links and GA4 references to both homepages |
| `2617d5cf29aeee31a2149982546d591a8bb902d8` | 17:44:48 | Update AI-discovery metadata for Article 3 |
| `e1ff892c369489bc35004df36cdc0a19ca11bdde` | 18:54:01 | Add Scholar-ready twelve-publication index |

## 4. Security controls introduced

### 4.1 Content Security Policy

`index.html` and `sgaeia.html` received CSP metadata that restricts default content to the same origin and explicitly allows only the external services required by the site. The deployed legacy-page policy is:

```text
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src https://fonts.gstatic.com;
img-src 'self' data: https://cdn.simpleicons.org https://*.google-analytics.com;
connect-src https://*.google-analytics.com https://www.googletagmanager.com;
media-src 'self';
object-src 'none';
base-uri 'none';
form-action 'none';
upgrade-insecure-requests
```

The new publication catalog and individual article pages use a stricter policy for scripts:

```text
script-src 'self' https://www.googletagmanager.com
```

They do not grant `'unsafe-inline'` to scripts. Their style policy permits only same-origin CSS and Google Fonts. All publication pages also deny objects, base-URI replacement and form submission.

The CSP reduces the viable sources and effects of XSS and injected code, but it is not an absolute security guarantee. The primary residual weakness on the two older homepages is the retained inline-script/style allowance required by their current implementation. A future strict-CSP project would externalize remaining inline code, add nonces or hashes if required, and repeat functional and accessibility tests.

### 4.2 Vulnerability reporting and ownership

The following files were added:

- `SECURITY.md`: scope, private vulnerability reporting route, requested report content, coordinated disclosure and non-security issue guidance;
- `.well-known/security.txt`: standardized contact, canonical URL, policy URL, preferred languages and expiry;
- `.github/CODEOWNERS`: assigns all repository content and configuration to `@aridiosilva`.

The vulnerability route is GitHub Private Vulnerability Reporting:

```text
https://github.com/aridiosilva/aridiosilva.github.io/security/advisories/new
```

The security contact expires on `2027-09-22T23:59:59Z` and should be reviewed before expiry.

### 4.3 Repository-protection observation

During the final push GitHub reported:

```text
Bypassed rule violations for refs/heads/main:
- Cannot update this protected ref.
```

The authorized account was able to bypass the protected-reference rule, and the push succeeded. This behavior is not a compromise, but it means the current rule set does not prohibit an authorized bypass. If the owner wants protection that also binds administrators or bypass actors, repository rules require a separate configuration review.

## 5. Crawler, search-engine and LLM discovery

### 5.1 `robots.txt`

The root crawler policy allows access to the public site and advertises the sitemap:

```text
User-agent: *
Allow: /

Sitemap: https://aridiosilva.com/sitemap.xml
```

This supports public visibility and does not attempt to prevent legitimate AI or search crawlers from cataloging the site.

### 5.2 `sitemap.xml`

The sitemap began with the personal and SGAEIA pages and was expanded in commit `e1ff892…` to fifteen URLs:

- `https://aridiosilva.com/`
- `https://aridiosilva.com/sgaeia.html`
- `https://aridiosilva.com/publications.html`
- twelve individual publication URLs under `/publications/`.

Each entry includes a last-modified date, change frequency and priority. Sitemap inclusion helps discovery but does not compel indexing.

### 5.3 `llms.txt`

The root `llms.txt` describes the researcher, SGAEIA themes, preferred persistent records, profiles, Article 3, SGAEIA artifacts and the academic publication index. It provides a concise machine-readable navigation aid for compatible LLM crawlers. `llms.txt` is an emerging convention rather than a universal standard, and individual providers decide whether to use it.

## 6. Article 3 integration

Both `index.html` and `sgaeia.html` were updated to include *Zero Trust for Multi-Agent AI Systems* with:

- Medium: `https://medium.com/@aridiosilva/zero-trust-for-multi-agent-ai-systems-31747c850af4`
- Zenodo: `https://doi.org/10.5281/zenodo.22903766`
- publication date: 22 September 2026.

The SGAEIA page presents Article 3 in the Research Series. The personal homepage includes it in the publication/writing surfaces. `llms.txt` identifies the same publication as the featured record, preserving consistent DOI and reading URLs across human- and machine-facing surfaces.

## 7. GA4 analytics and consent

### 7.1 Stream identity

```text
Property/site: https://aridiosilva.com
Web stream name: Aridio Silva — Research Website
Stream code: 15826879863
Measurement ID: G-MXMJ7Z3LS7
```

### 7.2 Files

- `assets/analytics-consent.js`
- `assets/analytics-consent.css`
- one deferred controller reference immediately after `<head>` in each measured HTML page.

### 7.3 Consent behavior

The controller does not insert `gtag.js` until the visitor grants analytics consent. It stores the choice under `aridiosilva_analytics_consent`, supports accept and reject choices, and provides an Analytics preferences button so the decision can be revisited. The banner is available in English, Portuguese, Spanish, French and German.

Advertising-related storage and personalization remain denied. Google signals and advertising-personalization signals are disabled. The implementation intentionally uses GA4 directly and does not add Google Tag Manager as a second tag layer.

### 7.4 Measurement state

The GA4 interface supplied by the owner showed enhanced measurement for:

- page views;
- scrolls;
- outbound clicks.

File downloads were recommended but were not visible among the final three active badges, so that event should be verified before a report claims it is active. The Google installation test displayed “A tag do Google foi detectada no seu site.” Standard audience reports may take up to 24–48 hours to populate.

### 7.5 Validation

- Before consent: zero Google tag scripts.
- After rejection: zero Google tag scripts.
- After acceptance: exactly one Google tag script.
- Consent persisted between the personal and SGAEIA pages.
- No browser CSP warnings or errors were observed.
- `node --check assets/analytics-consent.js` passed.
- `git diff --check` passed before commit.

Only consenting visitors are represented in GA4. Bot traffic and privacy controls may further affect counts, so GA4 figures must not be interpreted as an exhaustive census of all requests.

## 8. Google Scholar-oriented publication index

### 8.1 Files created

- `publications.html`
- `assets/publications.css`
- twelve `publications/<slug>/index.html` pages.

The publication set covers Articles 1–12 of the SGAEIA Research Series. Each page has one canonical URL, one title, the author `Silva, Aridio`, publication date, DOI, language, visible abstract, Zenodo link, Medium link and suggested citation.

### 8.2 Citation metadata

Every individual page includes:

```text
citation_title
citation_author
citation_publication_date
citation_online_date
citation_doi
citation_language
```

The pages follow the Google Scholar recommendation that each paper or abstract have a separate URL. Abstracts are visible without login, button activation, consent acceptance or JavaScript navigation. Simple HTML links connect the homepage, catalog and individual records.

### 8.3 PDF decision

No article PDF was copied into the homepage repository during this release. Google Scholar accepts a visible complete author-written abstract as an alternative to locally hosted full text. Several archived PDFs exceed the stated 5 MB recommendation; Article 3 is approximately 14.3 MB. PDF optimization, searchable-text verification and local `citation_pdf_url` integration remain separate work.

### 8.4 Validation results

- 12 publication pages found.
- 12 unique DOIs.
- 12 unique canonical article URLs.
- 15 sitemap URLs.
- Required Scholar citation metadata present on all pages.
- No `Privados-SECRET` path or content reference in generated pages.
- Exactly one GA4 consent controller reference per generated page.
- No inline-script allowance on generated publication pages.
- All local site and article URLs returned HTTP 200 after one transient retry for `sgaeia.html`.
- Desktop visual inspection passed.
- Mobile inspection at 390 × 844 passed without horizontal overflow.
- Public catalog showed 12 cards after deployment.
- Public Article 3 page exposed an 804-character abstract and expected citation metadata.
- No public browser warnings or errors were observed.

## 9. Complete file inventory changed today

### 9.1 Security and repository governance

- `.github/CODEOWNERS`
- `.well-known/security.txt`
- `SECURITY.md`

### 9.2 Discovery

- `robots.txt`
- `sitemap.xml`
- `llms.txt`

### 9.3 Analytics

- `assets/analytics-consent.js`
- `assets/analytics-consent.css`

### 9.4 Publication catalog

- `assets/publications.css`
- `publications.html`
- `publications/authenticated-delegation-between-autonomous-ai-agents/index.html`
- `publications/bounded-and-revocable-authority/index.html`
- `publications/continuous-grc-for-agentic-ai/index.html`
- `publications/evidence-as-code/index.html`
- `publications/from-edge-ai-to-governed-autonomous-edge-intelligence/index.html`
- `publications/from-model-capability-to-governed-action/index.html`
- `publications/rogue-ai-agents/index.html`
- `publications/security-by-design-for-distributed-agentic-ai/index.html`
- `publications/sgaeia-reference-architecture/index.html`
- `publications/ten-days-that-exposed-the-governance-gap/index.html`
- `publications/when-ai-begins-to-build-ai/index.html`
- `publications/zero-trust-for-multi-agent-ai-systems/index.html`

### 9.5 Existing pages updated

- `index.html`
- `sgaeia.html`

## 10. Definition of done for the deployed homepage version

The 22 September release is complete for its declared scope because the security and reporting files exist; crawler and LLM discovery files are published; Article 3 links are consistent; GA4 loads only after consent; the twelve-publication catalog exposes independent abstracts and citation metadata; sitemap and navigation contain the new resources; desktop, mobile, static and HTTP validations passed; the deployment was publicly inspected; and local and remote branches were reconciled to the same commit.

The release does not claim absolute XSS prevention, universal crawler adoption, Google Scholar inclusion, complete measurement of every visitor, strict branch-protection enforcement against authorized bypass, or optimized full-text PDFs.

## 11. Residual work and recommended review dates

| Item | Priority | Next action |
|---|---|---|
| Submit expanded sitemap in Google Search Console | High | Submit `https://aridiosilva.com/sitemap.xml` and record acceptance |
| Verify GA4 file-download event | Medium | Confirm the enhanced-measurement toggle and test one PDF download |
| Monitor GA4 first data | Medium | Review Realtime, Acquisition, Engagement and Tech reports after data accrues |
| Monitor Scholar indexing | Medium | Search by exact titles after several weeks; do not rely only on `site:` counts |
| Optimize selected PDFs below 5 MB | Medium | Preserve searchable text, title, author and References; render and visually verify |
| Remove legacy `'unsafe-inline'` allowances | Medium | Externalize inline code and perform regression/accessibility testing |
| Review protected-branch bypass | Medium | Decide whether owners/administrators should remain able to bypass the rule |
| Renew `security.txt` | Scheduled | Review before 22 September 2027 |


## 12. Article 13 discovery update — 25 September 2026

The local website source was extended for *When AI Hallucination Becomes Action*, SGAEIA Research Series Article 13. The change adds the article to `index.html`, `sgaeia.html`, and `publications.html`; creates `publications/when-ai-hallucination-becomes-action/index.html`; adds the canonical record to `sitemap.xml`; and updates `llms.txt` with the individual publication page, Zenodo Version 1.0 DOI `10.5281/zenodo.22946209`, and Medium reading URL.

The individual page follows the existing Scholar-oriented pattern: one canonical URL, visible author-written abstract, `Silva, Aridio` authorship, publication date, DOI, language, required `citation_*` fields, direct Zenodo and Medium links, and a suggested citation. Its CSP retains the strict publication-page policy without inline-script permission. These local discovery measures do not guarantee Google or Google Scholar indexing. No deployment, commit, or push is asserted by this update.


## 13. New-page link behavior — 25 September 2026

By owner decision, every HTML link in `index.html` and `sgaeia.html` now opens in a new browsing context through `target="_blank"`. Every affected anchor also carries `rel="noopener noreferrer"` to prevent the opened page from receiving an opener reference and to limit referrer disclosure. The rule includes navigation, internal publication records, profile links, DOI links, Medium links, email links and same-page controls implemented as anchors.

Static validation confirmed that all 68 anchors in `index.html` and all 62 anchors in `sgaeia.html` contain the required target and relationship tokens. This is an owner-selected navigation behavior and should be preserved in future homepage additions unless the owner revises the rule.

---

## Document Record

**Created:** 2026-09-22 19:22 BRT  
**Last Updated:** 2026-09-25 12:46 BRT
**Timezone:** America/Sao_Paulo (UTC−03:00)  
**Document Status:** HOMEPAGE VERSION RECORD — COMPLETE FOR DEPLOYED SCOPE  
**Repository Path:** `docs/logs/2026-09-22-1922-HOMEPAGE-VERSION-AND-CHANGELOG.md`  
**Version identifier:** `e1ff892c369489bc35004df36cdc0a19ca11bdde`  
**Previous baseline:** `a0a565ebd17216f084cbb3813d432416907ddf72`  
**Public verification:** `https://aridiosilva.com/publications.html`  


## 13. Article 14 discovery update — 25 September 2026

The local website source was extended for *AI's Alien Mind*, SGAEIA Research Series Article 14. The change adds the article to `index.html`, `sgaeia.html`, and `publications.html`; creates `publications/ais-alien-mind/index.html`; adds the canonical record to `sitemap.xml`; and updates `llms.txt` with the individual publication page, Zenodo Version 1.0 DOI `10.5281/zenodo.22964672`, and Medium reading URL.

The individual page contains the author-written abstract, required citation metadata, suggested citation, strict CSP, analytics-consent controller, and persistent links. New links open in a separate page with `noopener noreferrer`. Local validation covers HTML structure, citation-field uniqueness, metadata consistency, link resolution, sitemap uniqueness, public-disclosure boundaries, and `git diff --check`. No deployment, commit, push, Search Console submission, or indexing claim was performed.
