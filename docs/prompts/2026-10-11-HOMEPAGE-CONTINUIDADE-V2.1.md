# Prompt de continuidade — Homepage AridioSilva.com — versão 2.1

**Data de criação:** 11 de outubro de 2026 — BRT
**Status:** PRONTO PARA O PRÓXIMO CICLO
**Base funcional:** Homepage versão 2.0 concluída
**Commit-base:** `9871f8d` — `feat: aprimora layout e links de publicações da homepage`
**Branch:** `main`
**Repositório local:** `C:\Users\as294\aridiosilva.github.io`
**Remoto:** `https://github.com/aridiosilva/aridiosilva.github.io`

## Prompt para iniciar a versão 2.1

Continue a evolução da homepage `aridiosilva.com` a partir da versão 2.0 consolidada no commit `9871f8d`. Trate este documento como contexto técnico e histórico; o pedido atual do usuário sempre define o trabalho a executar. Antes de qualquer alteração, leia o log `docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md`, execute `git status --short --branch`, confirme o commit atual e inspecione os arquivos envolvidos. Preserve o design aprovado, a responsividade, as traduções EN/PT/ES/FR/DE, a acessibilidade, os links editoriais, as capas proporcionais e os comportamentos já validados. Faça mudanças incrementais, mantenha backups restauráveis, valide no navegador local em `http://127.0.0.1:8765/`, execute `git diff --check` e não faça stage, commit ou push sem comando explícito do usuário.

## Objetivo do ciclo 2.1

- A versão 2.1 começa como continuidade evolutiva da versão 2.0, sem mudanças funcionais previamente definidas.
- Aguarde os próximos comandos do usuário para definir cada melhoria.
- Não reabrir decisões já aprovadas da versão 2.0, salvo pedido explícito.
- Cada alteração aceita deve ser registrada no log da homepage e neste contexto de continuidade.
- A identificação visível no rodapé permanece `Versão 2.0` até que o usuário determine a publicação efetiva da versão 2.1.

## Baseline visual que deve ser preservado

### Página principal — `index.html`

- Header fixo, responsivo e centralizado, com quebra natural de textos em janelas estreitas.
- Link `Aridio Silva` com o mesmo comportamento de hover/foco do menu.
- Controles de idioma, tamanho da fonte, Easy read e Listen preservados.
- Hero com título amplo e painel `Current research question` em box.
- Botões `Explore research` e `Explore SGAEIA` centralizados e com quebra responsiva.
- Seção 01 `Research` com quatro boxes numerados e faixas laterais progressivas.
- Seção 02 `SGAEIA` com seis boxes e estilo aprovado em azul-esverdeado.
- Seção 03 `Publications` com 21 registros, usando a composição bullet/data → capa → conteúdo.
- Capas de artigos mantêm a proporção por meio de `height: auto`.
- Item 20, artefato de software, usa o logo circular SGAEIA.
- Item 21, `When AI Begins to Build Itself`, usa sua capa oficial e é identificado como `Research article`.
- Rodapé com boxes de perfis e projetos no estilo visual aprovado.

### Página SGAEIA — `sgaeia.html`

- Header fixo com quatro linhas centralizadas e responsivas.
- Hero com os links `Explore the research problem` e `Open research artifact` centralizados.
- `Research proposition` permanece em box equivalente ao `Current research question` da homepage.
- Seções 01 `Problem`, 02 `Principles`, 03 `Properties` e 04 `Agenda` mantêm bullets, faixas, cores, hover e grades já aprovados.
- Seção 05 `SGAEIA Research Series` mantém 19 cards no formato bullet/data → capa → conteúdo.
- Em cada card, os canais aparecem abaixo de `SGAEIA Research Series — Article XX`, nesta ordem:
  1. `Zenodo DOI`;
  2. `Medium`;
  3. `DEV Community`;
  4. `Academia.edu`.
- O Artigo 17 permanece com `DOI pending` até que um DOI seja fornecido na página principal.
- A seção 03 `Publications` de `index.html` é a fonte canônica dos URLs editoriais da Research Series.
- Seção 06 `Artifacts` mantém cinco boxes no estilo da Agenda, sem bullets.
- Rodapé mantém os boxes de ícones alinhados ao padrão da página principal.

## Requisitos técnicos e de conteúdo

- Preservar HTML semântico, navegação por teclado, foco visível, rótulos ARIA e `data-i18n`.
- Preservar EN, PT, ES, FR e DE; qualquer texto novo visível deve ser avaliado nos cinco idiomas.
- Preservar a medição automática de audiência já instalada, sem reintroduzir o box `Analytics preferences`.
- Preservar o mecanismo de cache-busting usado nos ativos alterados, para que os testes locais não dependam de limpeza manual do cache.
- Não deformar imagens; declarar dimensões intrínsecas quando disponíveis e usar carregamento diferido fora da área inicial.
- Links externos devem usar `target="_blank"` e `rel="noopener noreferrer"` quando aplicável.
- Não copiar automaticamente links auxiliares como `Português`, `Homepage record` ou `Read full article` para os quatro canais editoriais da Research Series.
- Não restaurar variantes descartadas, incluindo cartões amarelo/magenta, hover magenta ou hover azul-escuro anteriormente rejeitado.

## Fluxo obrigatório para cada nova alteração

1. Ler este prompt e o log de continuidade.
2. Executar `git status --short --branch` e preservar mudanças existentes do usuário.
3. Identificar o menor conjunto de arquivos necessário.
4. Criar backup restaurável antes de experimentos visuais relevantes.
5. Implementar a alteração incrementalmente.
6. Recarregar a página com URL de teste atualizada quando houver risco de cache.
7. Validar visualmente em largura normal e estreita.
8. Conferir estrutura, links, imagens, foco, hover e responsividade afetados.
9. Executar `git diff --check` nos arquivos modificados.
10. Registrar a decisão aprovada em `docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md` e atualizar este prompt quando o novo contexto for relevante.
11. Fornecer os comandos Git ao usuário quando solicitados; não executar stage, commit ou push sem autorização explícita.

## Arquivos principais

- `index.html` — homepage e CSS/JavaScript embutidos.
- `sgaeia.html` — página do programa de pesquisa SGAEIA.
- `publications.html` — página geral de publicações.
- `assets/` — capas, logos e demais recursos visuais.
- `docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md` — histórico consolidado e decisões aprovadas.
- `docs/prompts/2026-10-11-HOMEPAGE-CONTINUIDADE-V2.1.md` — este prompt de continuidade.

## Critérios de aceitação da versão 2.1

- Nenhuma regressão visual ou funcional em relação à versão 2.0.
- Layout legível e centralizado conforme o componente em desktop, tablet e celular.
- Capas proporcionais, sem quebra de carregamento.
- Links editoriais corretos e consistentes entre homepage e SGAEIA.
- Traduções, acessibilidade e controles de leitura preservados.
- Teste local concluído sem exigir limpeza manual de cache.
- `git diff --check` sem erros.
- Log e prompt de continuidade atualizados antes do commit final do ciclo.

## Estado inicial registrado

- `HEAD`, `origin/main` e `origin/HEAD`: `9871f8d` no momento da criação deste prompt.
- A versão 2.0 foi encerrada e permanece como baseline estável.
- O ciclo 2.1 ainda não possui alterações funcionais próprias.
- Próxima ação: aguardar o primeiro comando do usuário para a versão 2.1.

## Atualização do ciclo 2.1 — Infographics — 12 de outubro de 2026

- O primeiro trabalho funcional da versão 2.1 adiciona `Infographics` aos menus da homepage e de `sgaeia.html`, com traduções EN/PT/ES/FR/DE.
- Foi criado o índice `/infographics/`, seguindo o estilo da página de publicações.
- O arquivo desse índice é `infographics/index.html`; sua referência visual canônica é `publications.html`, pois o baseline não possui `publications/index.html`.
- O padrão de diretórios é `infographics/Info_001/`, `Info_002/` e assim sucessivamente.
- `Info_001` publica o estudo visual `Context Language Models (CLMs)` em inglês, como versão padrão, e em português na subpasta `pt/`.
- Cada idioma possui 47 slides renderizados do PDF correspondente, PDF original, texto da publicação no LinkedIn e navegação recíproca de idioma.
- O carrossel compartilhado usa `assets/infographics.css?v=20261012-6` e `assets/infographics.js?v=20261012`.
- O visualizador abre em tela cheia, oferece setas condicionais, teclado, gesto horizontal, contador e fechamento acessível.
- O primeiro slide exibe apenas avanço; o último exibe apenas retorno.
- Os três controles abaixo do carrossel permanecem centralizados como um conjunto, com quebra responsiva em telas estreitas.
- O texto do rodapé permanece centralizado no índice de infográficos e nas páginas EN/PT.
- O fundo do rodapé usa `#e4edeb`, igual ao header, no índice e em todas as páginas de infográficos.
- O cabeçalho fixo das páginas EN e PT possui hover e foco visível nos itens; o índice de infográficos herda o mesmo comportamento e o mesmo sistema visual do índice de publicações.
- O sitemap inclui o índice e as páginas EN/PT com `hreflang` e capa.
- `llms.txt` inclui o índice de infográficos, as edições EN/PT e os PDFs; `robots.txt` mantém rastreamento permitido e referência ao sitemap.
- Toda nova página de infográfico deve carregar `/assets/analytics-consent.js?v=20261011`, mantendo a propriedade GA4 `G-MXMJ7Z3LS7`, e também declarar canonical, sitemap e `llms.txt`; idiomas alternativos exigem `hreflang` recíproco e `x-default`.
- A identificação visível permanece `Version 2.0` / `Versão 2.0` até decisão explícita de publicação da versão 2.1.
- Estado desta atualização: alterações locais prontas para revisão; sem stage, commit ou push executados pelo assistente.
