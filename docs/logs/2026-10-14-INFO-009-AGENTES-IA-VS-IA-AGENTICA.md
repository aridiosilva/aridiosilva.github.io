# Log operacional — Info_009 AI Agents vs. Agentic AI / Agentes de IA vs. IA Agêntica

Data: 14 de outubro de 2026  
Projeto: Homepage de Aridio Silva / SGAEIA  
Infográfico: AI Agents vs. Agentic AI — Conceptual, Technical, and Comparative Analysis / Agentes de IA vs. IA Agêntica — Análise Conceitual, Técnica e Comparativa

## Resultado

Foi incluído o `Info_009` em inglês e português, seguindo o padrão estrutural, visual, responsivo e acessível dos infográficos existentes.

- Edição canônica EN: `infographics/Info_009/index.html`.
- Edição PT-BR: `infographics/Info_009/pt/index.html`.
- Total: 29 slides em cada idioma.
- PNGs EN e PT: 1920 × 1080 px.
- PDF EN: `ai-agents-vs-agentic-ai-en.pdf`.
- PDF PT: `agentes-de-ia-vs-ia-agentica-pt.pdf`.

## Integridade dos PDFs

Os PDFs foram copiados sem alteração e comparados por SHA-256:

- EN: `f8fa2b90756892dca77ab906b09d2ade8a7a283e3d32b9eabbfb0cd0339c642e`.
- PT: `ca19437aba3012bb1f3c0dc5ccc867cfb02dba3ef50213c0bbaec7f7b977d53d`.

## Arquivos atualizados

- `infographics/index.html`: card do Info_009 inserido no início; somente a nova capa usa carregamento prioritário.
- `sitemap.xml`: URLs EN/PT, alternates `en`, `pt-BR` e `x-default`, além das capas localizadas.
- `llms.txt`: páginas e PDFs EN/PT.
- `robots.txt`: comentário informativo de atualização.
- `docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md`: continuidade atualizada até o Info_009.
- Este log de implementação.

Os ativos compartilhados `assets/infographics.css` e `assets/infographics.js` não precisaram ser alterados. As páginas usam os sufixos de cache atuais e carregam `/assets/analytics-consent.js?v=20261011`.

## Validações realizadas

- 29 páginas em cada PDF e 29 PNGs consecutivos em cada idioma.
- Inspeção visual das 58 páginas em folhas de contato: sem páginas em branco, cortes, inversões ou falhas de renderização.
- Dimensões intrínsecas declaradas corretamente no HTML.
- Canonical e `hreflang` recíprocos, com inglês como `x-default`.
- Analytics cookieless preservado; GA4 `G-MXMJ7Z3LS7` confirmado no ativo compartilhado.
- `node --check assets/infographics.js`: aprovado.
- XML de `sitemap.xml`: aprovado.
- `git diff --check`: aprovado.
- Teste local do índice e das páginas EN/PT em `http://127.0.0.1:8765/`.
- Carrossel testado com setas, teclado, estados inicial e final, abertura e fechamento em tela cheia.
- Layout móvel testado em viewport estreita; header, conteúdo, cards e controles permaneceram dentro da viewport.

## Estado preexistente preservado

O repositório estava limpo e sincronizado com `origin/main` antes da inclusão. Foi criado um backup restaurável dos arquivos compartilhados antes das alterações. Nenhuma alteração preexistente precisou ser conciliada.

## Git

Nenhum `git add`, `git commit` ou `git push` foi executado pelo assistente. O usuário mantém a autoridade sobre essas operações.
