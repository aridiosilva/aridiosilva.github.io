# Log operacional — Info_013 An Alien Mind

Data: 14 de outubro de 2026  
Data editorial do infográfico: 8 de setembro de 2026  
Projeto: Homepage de Aridio Silva / SGAEIA  
Infográfico: An Alien Mind

## Resultado

Foi incluído o `Info_013` em inglês e português, seguindo o padrão estrutural, visual, responsivo e acessível dos infográficos existentes.

- Edição canônica EN: `infographics/Info_013/index.html`.
- Edição PT-BR: `infographics/Info_013/pt/index.html`.
- Total: 17 slides em cada idioma.
- PNGs EN e PT: 1920 × 1080 px.
- PDF EN: `an-alien-mind-en.pdf`.
- PDF PT: `uma-mente-alienigena-pt.pdf`.

## Integridade dos PDFs

Os PDFs foram copiados sem alteração e comparados por SHA-256:

- EN: `f60b5812d190ff5a8682746991c3451411a6969d7e100b966acaa54b836ec0cb`.
- PT: `c1257a0a98af03d52a1d507678d833c8efddd14885dd0522aa1016af31d5e62f`.

## Decisão editorial

O texto fornecido para o LinkedIn descreve uma análise em 16 slides, mas os dois PDFs finais contêm 17 páginas. As páginas web e os registros de descoberta refletem as 17 páginas reais e preservam todas elas no carrossel. A expressão original sobre 16 slides foi mantida no texto editorial publicado, sem reescrever a fonte.

## Arquivos atualizados

- `infographics/index.html`: card do Info_013 inserido no início; somente a nova capa usa carregamento prioritário.
- `sitemap.xml`: URLs EN/PT, alternates `en`, `pt-BR` e `x-default`, além das capas localizadas.
- `llms.txt`: páginas e PDFs EN/PT.
- `robots.txt`: comentário informativo de atualização.
- `docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md`: seção do Info_013 e continuidade atualizada.
- Este log de implementação.

Os ativos compartilhados `assets/infographics.css` e `assets/infographics.js` não precisaram ser alterados. As páginas usam os sufixos de cache atuais e carregam `/assets/analytics-consent.js?v=20261011`.

## Validações realizadas

- 17 páginas em cada PDF e 17 PNGs consecutivos em cada idioma.
- Inspeção visual das 34 páginas em folhas de contato, sem páginas em branco, cortes, inversões ou falhas de renderização.
- Dimensões intrínsecas declaradas corretamente no HTML.
- Canonical e `hreflang` recíprocos, com inglês como `x-default`.
- Analytics cookieless preservado; GA4 `G-MXMJ7Z3LS7` confirmado no ativo compartilhado.
- Sintaxe do JavaScript compartilhado e XML do sitemap verificados.
- Teste local do índice e das páginas EN/PT, incluindo carrossel, tela cheia e viewport móvel.

## Estado preexistente preservado

As alterações ainda não versionadas do `Info_012` estavam presentes antes desta inclusão e foram preservadas. O `Info_013` foi integrado sobre esse estado sem descartar ou sobrescrever o trabalho anterior.

## Git

Nenhum `git add`, `git commit` ou `git push` foi executado pelo assistente. O usuário mantém a autoridade sobre essas operações.
