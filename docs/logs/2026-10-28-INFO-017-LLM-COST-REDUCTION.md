# Log operacional — Info_017 Cutting LLM Cost by 70% Without Losing Quality / Reduzir 70% do Custo com LLMs sem Perder Qualidade

Data da inclusão: 28 de outubro de 2026  
Data editorial: outubro de 2026  
Projeto: Homepage de Aridio Silva / SGAEIA  
Repositório: `C:\Users\as294\aridiosilva.github.io`

## Resultado

Foi incluído o `Info_017` em inglês e português, seguindo o padrão estrutural, visual, responsivo, acessível e de descoberta dos infográficos atuais.

- Edição canônica EN: `infographics/Info_017/index.html`.
- Edição PT-BR: `infographics/Info_017/pt/index.html`.
- Total: 41 slides em cada idioma.
- PNGs EN e PT: 1920 × 1080 px.
- PDF EN: `cutting-llm-cost-70-percent-en.pdf`.
- PDF PT: `reduzir-70-por-cento-custo-llms-pt.pdf`.

## Integridade dos PDFs

Os PDFs finais fornecidos foram copiados sem modificação e comparados por SHA-256:

- EN: `D934B1AA2485082E524E12CB8A9A469146523281208D9C0A52220FD05C8F4A61`.
- PT: `8A8EBDD1E8AFFC676B53407106F3F313475B63DDE2E8E2ED49355C2C2137C868`.

## Decisão editorial

Os textos fornecidos registram somente outubro de 2026. As páginas e o card usam `October 2026` / `Outubro de 2026` e `<time datetime="2026-10">`, evitando inventar um dia de publicação. O `lastmod` técnico no sitemap é 28 de outubro de 2026.

## Arquivos criados

- `infographics/Info_017/index.html`.
- `infographics/Info_017/cutting-llm-cost-70-percent-en.pdf`.
- `infographics/Info_017/assets/slide-01.png` a `slide-41.png`.
- `infographics/Info_017/pt/index.html`.
- `infographics/Info_017/pt/reduzir-70-por-cento-custo-llms-pt.pdf`.
- `infographics/Info_017/pt/assets/slide-01.png` a `slide-41.png`.
- Este log de implementação.

## Arquivos atualizados

- `infographics/index.html`: card do Info_017 inserido no início; somente sua capa usa carregamento prioritário; data do rodapé atualizada.
- `sitemap.xml`: data do índice e URLs EN/PT com alternates e capas localizadas.
- `llms.txt`: páginas e PDFs EN/PT.
- `robots.txt`: comentário informativo de atualização.
- `docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md`: seção de continuidade do Info_017.
- `docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md`: estado consolidado da inclusão.

Os ativos compartilhados `assets/infographics.css`, `assets/infographics.js` e `assets/analytics-consent.js` não precisaram ser alterados.

## Analytics, segurança e descoberta

- Cada página nova contém exatamente uma referência a `/assets/analytics-consent.js?v=20261011`.
- GA4 `G-MXMJ7Z3LS7` e medição cookieless preservados.
- CSP, canonical, `hreflang` recíproco e `x-default` em inglês preservados.
- O índice aponta para EN, PT e PDF EN.
- O sitemap contém as páginas EN/PT e as imagens de capa localizadas.
- `llms.txt` contém as páginas e os dois PDFs.
- `robots.txt` preserva `Allow: /` e a referência ao sitemap.

## Validações realizadas

- 41 páginas em cada PDF e 41 PNGs consecutivos em cada idioma.
- Inspeção visual das 82 páginas em folhas de contato, sem páginas em branco, cortes, inversões ou falhas de renderização.
- Dimensões intrínsecas declaradas corretamente como 1920 × 1080 px.
- Hashes dos PDFs copiados idênticos aos arquivos-fonte.
- Canonical, `hreflang` recíproco, `x-default`, CSP e Analytics auditados nas duas páginas.
- `node --check assets/infographics.js` aprovado.
- `sitemap.xml` analisado como XML válido.
- Sitemap com 69 URLs únicas e nenhuma duplicata.
- O índice mantém exatamente uma capa com `loading="eager"` e `fetchpriority="high"`.
- Índice e páginas EN/PT retornaram HTTP 200, assim como os dois PDFs.
- Índice e páginas EN/PT inspecionados no navegador local em desktop e 360 px, sem rolagem horizontal; capas e slides carregaram nas dimensões 1920 × 1080.
- Carrossel testado no primeiro slide, após avanço, no último slide pelo comando End e na abertura/fechamento do visualizador em tela cheia.
- Controles abaixo do carrossel mantiveram `justify-content: center`, quebra responsiva e limites dentro da viewport.
- `git diff --check` aprovado, com apenas avisos informativos de conversão LF/CRLF.
- Auditoria final confirmou somente os 82 PNGs válidos, sem arquivos temporários de renderização no repositório.

## Estado Git

O repositório estava limpo e sincronizado com `origin/main` no início da inclusão (`50e90c0`). Nenhum `git add`, `git commit` ou `git push` foi executado pelo assistente. Os comandos exatos de stage, commit e push serão fornecidos ao proprietário após a validação final.
