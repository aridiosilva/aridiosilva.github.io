# Log operacional — Info_006 Anthropic Cyber Verification Program

Data: 12 de outubro de 2026  
Projeto: Homepage de Aridio Silva / SGAEIA  
Autor/proprietário: Aridio Silva — Independent Researcher, Brazil  
Infográfico: Anthropic's Cyber Verification Program / Anthropic e o novo Cyber Verification Program

## Resultado

Foi incluído o `Info_006` em inglês e português, seguindo o padrão estrutural e visual dos infográficos existentes.

- Edição canônica EN: `infographics/Info_006/index.html`.
- Edição PT-BR: `infographics/Info_006/pt/index.html`.
- Total: 26 slides em cada idioma.
- PNGs EN: 1920 × 1080 px.
- PNGs PT: 1921 × 1080 px.
- PDF EN: `anthropic-cyber-verification-program-en.pdf`.
- PDF PT: `programa-de-verificacao-cibernetica-anthropic-pt.pdf`.

## Integridade dos PDFs

Os PDFs foram copiados sem alteração e comparados por SHA-256:

- EN: `0A9007C8BB690F659E4A2F91B147770A9FC464AA20EEE03C285D631002E619F6`.
- PT: `9F5CEFD17279B571FD2AC31D683783F4B62F0B093E81B872ACC22E0998B6D731`.

## Arquivos atualizados

- `infographics/index.html`: card do Info_006 inserido no início; somente a nova capa usa carregamento prioritário.
- `sitemap.xml`: URLs EN/PT, alternates `en`, `pt-BR` e `x-default`, além das capas localizadas.
- `llms.txt`: páginas e PDFs EN/PT.
- `robots.txt`: comentário informativo de atualização.
- `docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md`: registro do padrão aplicado ao Info_006.
- Este log de implementação.

Os ativos compartilhados `assets/infographics.css` e `assets/infographics.js` não precisaram ser alterados. As páginas usam os sufixos de cache atuais e carregam `/assets/analytics-consent.js?v=20261011`.

## Validações realizadas

- 26 páginas em cada PDF e 26 PNGs consecutivos em cada idioma.
- Inspeção visual das 52 páginas em quatro folhas de contato: sem páginas em branco, cortes, inversões ou falhas de renderização.
- Dimensões intrínsecas declaradas corretamente no HTML.
- Canonical e `hreflang` recíprocos, com inglês como `x-default`.
- Analytics cookieless preservado; GA4 `G-MXMJ7Z3LS7` confirmado no ativo compartilhado.
- Menus globais já continham as traduções de `Infographics`; nenhuma duplicação foi feita.
- `node --check assets/infographics.js`: aprovado.
- XML de `sitemap.xml`: aprovado.
- `git diff --check`: aprovado.
- Teste local do índice e das páginas EN/PT em `http://127.0.0.1:8765/`.
- Carrossel EN/PT testado com avanço, estados inicial e final, comandos `Home` e `End`, abertura e fechamento em tela cheia.
- Layout móvel validado em 360 px: índice, páginas EN/PT e controles permaneceram dentro da viewport.

## Estado preexistente preservado

O repositório estava limpo no início da tarefa (`main...origin/main`). Nenhuma alteração preexistente precisou ser conciliada ou descartada.

## Git

Nenhum `git add`, `git commit` ou `git push` foi executado pelo assistente. O usuário mantém a autoridade sobre essas operações.
