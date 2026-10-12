# Log operacional — Info_005 From Zero to Weights / Do Zero aos Pesos

Data: 12 de outubro de 2026  
Projeto: Homepage de Aridio Silva / SGAEIA  
Infográfico: From Zero to Weights — The Forging of a Frontier AI / Do Zero aos Pesos — A Forja de uma IA de Fronteira

## Resultado

Foi incluído o `Info_005` em inglês e português, seguindo o padrão estrutural e visual dos infográficos existentes.

- Edição canônica EN: `infographics/Info_005/index.html`.
- Edição PT-BR: `infographics/Info_005/pt/index.html`.
- Total: 19 slides em cada idioma.
- PNGs EN: 1920 × 1080 px, conforme a dimensão renderizada do PDF inglês.
- PNGs PT: 1921 × 1080 px, conforme a dimensão renderizada do PDF português.
- PDF EN: `from-zero-to-weights-en.pdf`.
- PDF PT: `do-zero-aos-pesos-pt.pdf`.

## Integridade dos PDFs

Os PDFs foram copiados sem alteração e comparados por SHA-256:

- EN: `73685475210a4bed35195cc3221688054b60c407c5d2799893c76c6b010be079`.
- PT: `5726b76c162fced30d541663ca2089398f2cefcf6e04f1327a8b6411283f1a5b`.

## Arquivos atualizados

- `infographics/index.html`: card do Info_005 inserido no início; somente a nova capa usa carregamento prioritário.
- `sitemap.xml`: URLs EN/PT, alternates `en`, `pt-BR` e `x-default`, além das capas localizadas.
- `llms.txt`: páginas e PDFs EN/PT.
- `robots.txt`: comentário informativo de atualização.
- `docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md`: registro do padrão aplicado ao Info_005.
- Este log de implementação.

Os ativos compartilhados `assets/infographics.css` e `assets/infographics.js` não precisaram ser alterados. As páginas usam os sufixos de cache atuais e carregam `/assets/analytics-consent.js?v=20261011`.

## Validações realizadas

- 19 páginas em cada PDF e 19 PNGs consecutivos em cada idioma.
- Inspeção visual das 38 páginas em folhas de contato: sem páginas em branco, cortes, inversões ou falhas de renderização.
- Dimensões intrínsecas declaradas corretamente no HTML.
- Canonical e `hreflang` recíprocos, com inglês como `x-default`.
- Analytics cookieless preservado; GA4 `G-MXMJ7Z3LS7` confirmado no ativo compartilhado.
- Menus globais já continham as traduções de `Infographics`; nenhuma duplicação foi feita.
- `node --check assets/infographics.js`: aprovado.
- XML de `sitemap.xml`: aprovado.
- `git diff --check`: aprovado.
- Teste local do índice e das páginas EN/PT em `http://127.0.0.1:8765/`.
- Carrossel testado com navegação, estados inicial e final, teclado, abertura e fechamento em tela cheia.
- Layout móvel testado em viewport estreita; header, conteúdo e controles permaneceram dentro da viewport.

## Estado preexistente preservado

Antes da inclusão, já estavam modificados:

- `docs/logs/2026-10-12-HOMEPAGE-PADRONIZACAO-HEADERS.md`;
- `docs/logs/2026-10-12-INFO-004-LORA.md`;
- `infographics/index.html`.

O ajuste preexistente de `infographics/index.html`, que corrige o link de SGAEIA para `/sgaeia.html`, foi preservado. Nenhuma alteração preexistente foi descartada.

## Git

Nenhum `git add`, `git commit` ou `git push` foi executado pelo assistente. O usuário mantém a autoridade sobre essas operações.
