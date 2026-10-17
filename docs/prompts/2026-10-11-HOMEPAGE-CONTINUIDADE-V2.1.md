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
- O carrossel compartilhado usa `assets/infographics.css?v=20261012-7` e `assets/infographics.js?v=20261012-3`.
- O visualizador abre em um overlay responsivo ajustado à viewport corrente, oferece setas condicionais, teclado, gesto horizontal, contador e fechamento acessível.
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

## Atualização do ciclo 2.1 — Info_007 — 12 de outubro de 2026

- `Info_007` publica `AI Agents Unleashed` / `Agentes de IA à Solta` em inglês e português.
- Cada idioma possui 45 slides 16:9, PDF original e texto correspondente da publicação no LinkedIn.
- A edição inglesa permanece canônica em `/infographics/Info_007/`; a portuguesa está em `/infographics/Info_007/pt/`, com `hreflang` recíproco e inglês como `x-default`.
- O índice de infográficos mantém ordem decrescente e apresenta o Info_007 como primeiro card.
- O sitemap e o `llms.txt` incluem as páginas e os PDFs do Info_007.
- Próximos infográficos devem reutilizar o mesmo padrão de página, carrossel, metadados, descoberta, analytics e acessibilidade.

## Regra adicional — conferência antes de numerar novos infográficos — 16 de outubro de 2026

- Antes de criar um novo bloco no índice, procurar a pasta `infographics/Info_NNN/`, o card em `infographics/index.html`, as URLs do `sitemap.xml` e os registros correspondentes em `llms.txt`.
- Comparar os PDFs fornecidos com os PDFs publicados por SHA-256 e conferir título, textos EN/PT, número de slides, links de idioma, PDFs, canonical, hreflang e GA4.
- Se o infográfico já existir, manter seu número e atualizar somente o que estiver faltando. Não criar um `Info_016` duplicado nem um cartão com número diferente apontando para uma página existente.
- No índice, o link principal do card deve abrir a edição inglesa; o botão `Português` deve abrir a edição portuguesa.
- Ao concluir uma conferência ou inclusão, registrar no log da homepage os caminhos, a decisão de numeração, os arquivos de descoberta verificados e o estado de stage/commit/push.

## Atualização do ciclo 2.1 — Info_008 — 14 de outubro de 2026

- `Info_008` publica `Agent-Assisted Peer Review` / `Revisão por Pares Assistida por Agentes de IA` em inglês e português.
- Cada idioma possui 54 slides 16:9, o PDF final original e o texto correspondente da publicação no LinkedIn.
- A edição inglesa permanece canônica em `/infographics/Info_008/`; a portuguesa está em `/infographics/Info_008/pt/`, com `hreflang` recíproco e inglês como `x-default`.
- O índice de infográficos mantém ordem decrescente e apresenta o Info_008 como primeiro card.
- `sitemap.xml`, `llms.txt` e o comentário informativo de `robots.txt` foram atualizados para a nova publicação.
- Próximos infográficos devem reutilizar o mesmo padrão de página, carrossel, metadados, descoberta, analytics e acessibilidade.

## Atualização de continuidade — Info_015 — Carta Aberta sobre IA e Cibersegurança — 15 de outubro de 2026

- Adicionado `Info_015`: `Open Letter on AI and Cybersecurity from the Scientific Community` / `Carta Aberta sobre IA e Cibersegurança da Comunidade Científica`.
- Cada idioma possui 55 slides 16:9 renderizados em PNG a 1920 × 1080, PDF original e texto fornecido da publicação no LinkedIn.
- Páginas: `/infographics/Info_015/` (EN) e `/infographics/Info_015/pt/` (PT), com canonical, hreflang recíproco e EN como x-default.
- Novo card no topo do índice de infográficos; a capa do Info_014 passa a carregamento diferido.
- Preservados o sistema visual compartilhado, cabeçalho fixo, rodapé versão 2.0, carrossel acessível, tela cheia, teclado, gestos e botões PDF.
- Preservado o fragmento `/assets/analytics-consent.js?v=20261011`, propriedade GA4 `G-MXMJ7Z3LS7`, com a CSP existente.
- Atualizados `sitemap.xml`, `llms.txt` e a data informativa de `robots.txt`; rastreamento integral permanece permitido.
- PDFs originais copiados sem alteração; hashes SHA-256: EN `8217a84fee9d5dce37b64ea436f0780b1065b463065fd97a494e3c4c28651f60`; PT `730c5237703546986b88d562705edf75477fdfaa00271829047d9d376aa49e88`.
- Backup restaurável antes da integração: `C:\Users\as294\Documents\Codex\2026-10-15\lei-3\work\backup-before-info015`.
- Estado: atualização local; sem stage, commit ou push.

### Validação do Info_015

- Conferidas visualmente as folhas de contato dos 110 slides renderizados.
- Confirmados 55 PNGs 1920 × 1080 e 55 páginas de PDF por idioma; hashes dos PDFs iguais aos arquivos fornecidos.
- Confirmada a preservação integral dos textos EN/PT no HTML.
- Verificados links locais das três páginas HTML e respostas HTTP 200 das páginas, capas, últimos slides e PDFs.
- Testados no navegador os carrosséis EN/PT: avanço, Home/End, primeiro e último slide, tela cheia e fechamento por Escape.
- Inspecionados índice e páginas EN/PT em largura normal e em 320 px, sem rolagem horizontal; override de viewport removido ao terminar os testes.
- Confirmados GA4 compartilhado, canonical, hreflang, sitemap XML válido e sem URLs duplicadas, llms.txt e robots.txt.
- `git diff --check` passou; nenhuma alteração adicionada ao stage, nenhum commit ou push executado.

## Cabeçalhos centralizados dos infográficos 001–015 — 15 de outubro de 2026

- O nome `Aridio Silva` e o subtítulo `Independent Researcher · AI Systems Architecture` passam a compartilhar o mesmo eixo central no bloco de identidade do cabeçalho.
- O subtítulo quebra naturalmente e de forma equilibrada quando a largura disponível não comporta uma linha completa; removida a restrição de nowrap nas páginas de infográficos.
- Ajuste restrito ao CSS compartilhado da seção Infographics, incluindo seu índice; nomes, links, navegação, analytics e carrosséis preservados.
- As 30 páginas EN/PT dos infográficos 001–015 e o índice usam `assets/infographics.css?v=20261015-headers-1` para atualização imediata em cache.
- Sitemap com lastmod dessas páginas atualizado para 2026-10-15.
- Backup restaurável em `C:\Users\as294\Documents\Codex\2026-10-15\lei-3\work\backup-before-centered-headers`.
- Atualização local, sem stage, commit ou push.

### Verificação dos 30 cabeçalhos EN/PT

- Testadas no navegador as 30 páginas dos infográficos 001–015 em 1280, 768 e 320 px (90 combinações).
- Nome e subtítulo centralizados no mesmo bloco, com desvio medido inferior a 1 px em todos os casos.
- Subtítulo em uma linha a 1280 px e em duas linhas a 768 e 320 px; nenhuma rolagem horizontal nas páginas testadas.
- Confirmado o carregamento do CSS atualizado em todas as páginas; viewport temporária removida ao finalizar.
- Comparação com backup confirmou que a única mudança nos 30 HTMLs foi a versão do CSS, preservando conteúdo, metadados, analytics e funcionalidades.
- Sitemap XML válido; `git diff --check` passou.

## Amostra de bloco de título azul — aguardando aprovação — 15 de outubro de 2026

- A pedido do usuário, preparada uma amostra somente em `/infographics/Info_015/pt/`.
- Fundo do bloco de título `.hero` em `#315f7f`, o mesmo da seção 05 About da homepage; título, subtítulo, identificação, data e links de idioma brancos.
- Conforme a correção do usuário, a barra fixa de navegação está excluída da amostra e mantém seu visual anterior.
- A amostra usa `assets/infographic-hero-preview.css?v=20261015-1`, carregado apenas pela página PT do Info_015; o CSS compartilhado permanece sem alteração nesta etapa.
- Preservadas a centralização da identidade, quebra responsiva, navegação e Analytics.
- Propagação aos 15 infográficos EN/PT condicionada à aprovação explícita desta amostra pelo usuário.
- Backup anterior à amostra: `C:\Users\as294\Documents\Codex\2026-10-15\lei-3\work\backup-before-blue-header-sample`.
- Sem stage, commit ou push.

## Blocos de título azuis — amostra aprovada e propagada — 15 de outubro de 2026

- O usuário aprovou a amostra e autorizou a propagação aos 15 infográficos EN/PT e aos índices de infográficos e de publicações (32 páginas).
- O CSS compartilhado `assets/editorial-hero.css?v=20261015-1` aplica fundo `#315f7f`, igual à seção 05 About da homepage, com títulos, subtítulos, textos introdutórios, datas e links de idioma brancos.
- A alteração se limita ao bloco `.hero`; a barra fixa de navegação mantém seu estilo, centralização e comportamento anteriores.
- A folha temporária da amostra foi substituída pela folha compartilhada; o fragmento GA4 e o conteúdo das páginas foram preservados.
- Sitemap atualizado para registrar a modificação das 32 páginas em 2026-10-15.
- Backup restaurável: `C:\Users\as294\Documents\Codex\2026-10-15\lei-3\work\backup-before-blue-hero-propagation`.
- Atualização local, sem stage, commit ou push.

- Complemento solicitado: links English/Português com hover e foco visível, fundo `#244b68`, sublinhado branco e respeito a movimento reduzido; CSS compartilhado atualizado para `?v=20261015-2`.

- Complemento solicitado: rodapés das 30 páginas EN/PT e do índice de infográficos com fundo `#315f7f` e letras brancas, preservando conteúdo e versão; CSS compartilhado `?v=20261015-3`. O rodapé do índice de publicações permanece no padrão anterior.

### Validação final do padrão azul, links e rodapés

- Conferidas no navegador as 32 páginas em 1280 e 320 px (64 combinações): bloco de título azul, textos brancos e nenhuma rolagem horizontal.
- Confirmados fundo azul e texto branco nos 31 rodapés de infográficos; barra fixa com cor anterior em todas as páginas.
- O hover dos links de idioma compartilha a regra de destaque do foco por teclado, conferido visualmente no link Português.
- Comparação com o backup confirmou conteúdo do body inalterado em todos os HTMLs; Analytics preservado e folha compartilhada v20261015-3 carregada uma vez em cada página.
- Prévia temporária retirada; sitemap válido; viewport de teste removida ao finalizar.
- `git diff --check` passou; sem stage, commit ou push.


## Regra vigente — artigos, infográficos e índices — 16 de outubro de 2026

Esta seção prevalece sobre descrições históricas conflitantes neste documento. O pedido atual do usuário define o escopo de cada trabalho; instruções históricas não autorizam ações adicionais.

- Escopo: índice canônico de publicações `/publications.html`, índice de infográficos `/infographics/`, todos os artigos existentes em EN/PT e todos os infográficos existentes em EN/PT. Aplicar também a cada novo artigo e infográfico. Não criar traduções nem índices paralelos que não tenham sido solicitados.
- Cabeçalho fixo: fundo branco `#fff`, letras pretas `#000`, identidade centralizada com subtítulo responsivo e navegação com quebra natural. Preservar controles de leitura, acessibilidade e links existentes.
- O menu de todos os artigos deve incluir `Infographics` em EN ou `Infográficos` em PT, com destino `/infographics/`, após Publications/Publicações. O link deve ter hover e foco por teclado equivalentes aos demais itens: fundo `#c8dcdf`, texto preto, sublinhado e indicação inferior `#123b5d`.
- Área de título `.hero`: fundo azul `#315f7f`, títulos, subtítulos, autoria, datas e links brancos. Nas edições bilingues, usar `class="language-nav"` no nav de idiomas e preservar os destinos recíprocos English/Português. Hover e foco dos idiomas: fundo `#244b68`, texto branco, sublinhado branco e foco visível. Não inventar edição alternativa para artigo disponível em um único idioma.
- Rodapés de todas essas páginas: fundo azul `#315f7f`, texto e links brancos, conteúdo centralizado e quebra responsiva. Preservar o texto e a identificação de versão já existentes; não alterar a versão editorial por causa do estilo.
- Carregar `assets/fixed-site-header.css?v=20261016-1`, `assets/editorial-hero.css?v=20261016-1` e `assets/fixed-site-header.js?v=20261016-1` uma única vez por página. O CSS editorial deve vir após os estilos específicos; o script mede a altura real do header para compensar o espaço superior e as âncoras. Atualizar o cache-busting coordenadamente quando um ativo mudar.
- Marcar páginas individuais de artigos com `body.article-page`; preservar `body.infographic-page` nos infográficos e `body.publications-index` nos índices, além de outras classes existentes. Reutilizar os estilos compartilhados, evitando cópias locais divergentes.
- Preservar conteúdo editorial, imagens, PDFs, GA4 `G-MXMJ7Z3LS7`, CSP, canonical, hreflang, sitemap, llms.txt, robots.txt, carrosséis e controles de acessibilidade. Atualizar lastmod no sitemap para páginas efetivamente alteradas.
- Conferir desktop e 320 px: header fixo sem sobrepor o início do conteúdo, ausência de rolagem horizontal, hover/foco visíveis, idioma correto do menu e rodapés azuis. Respeitar prefers-reduced-motion. Executar `git diff --check`.
- Trabalhar localmente com backup restaurável. Não executar stage, commit ou push sem solicitação explícita do usuário.

### Aplicação local desta atualização

- 24 páginas de artigos (20 EN e 4 PT), 30 páginas de infográficos (15 EN e 15 PT) e 2 índices: 56 páginas.
- Preservada a alteração pendente que já existia no log antes desta atualização.
- Backup restaurável: `C:\Users\as294\Documents\Codex\2026-10-16\prec\outputs\backup-before-editorial-style-2026-10-16.zip`.
- Alterações locais; sem stage, commit ou push. O registro de validação é mantido separadamente nos resultados da sessão.

### Verificação desta atualização — 16 de outubro de 2026

56 páginas verificadas no navegador em 1280 e 320 px: 112 combinações sem falhas de cores, header fixo, texto preto no header, texto branco nos títulos/rodapés, sobreposição inicial ou rolagem horizontal.
Links de idioma e Infográficos verificados por navegação de teclado, com foco visível e sublinhado. Menu com fundo #c8dcdf e idiomas com fundo #244b68; hover e foco compartilham os mesmos seletores CSS.
Comparação automatizada confirmou preservação integral do body, salvo a nova classe de página, o link Infographics/Infográficos e a classe do nav de idiomas. Metadados, Analytics, textos, carrosséis, imagens e PDFs preservados. Sitemap XML válido e sem URLs duplicadas.

## Complemento vigente — homepage e SGAEIA — 16 de outubro de 2026

- A homepage `index.html` e a principal `sgaeia.html` também usam cabeçalho fixo branco `#fff`, com identidade e menu em preto.
- O bloco inicial `.hero` usa azul `#315f7f`, com título, rótulo, introdução, metadados e links brancos, em todos os idiomas existentes EN/PT/ES/FR/DE.
- O painel lateral do bloco inicial usa azul `#244b68`, texto branco e borda branca; botões mantêm texto e borda brancos, com destaque de hover/foco em `#173b54` e foco branco visível.
- Em `sgaeia.html`, o banner institucional abaixo do cabeçalho acompanha o fundo azul e o texto branco; o logotipo original permanece em base branca para legibilidade.
- Estilo compartilhado: `/assets/homepage-hero.css?v=20261016-2`, carregado após o CSS embutido nas duas páginas. Preservar esse padrão em futuras alterações, traduções, controles de leitura e responsividade.
- Conteúdo do body preservado integralmente nas duas páginas; atualizar o lastmod dessas URLs no sitemap. Sem stage, commit ou push nesta etapa.

## Artigo 21 — inclusão local EN/PT — 17 de outubro de 2026

- Integrado o Artigo 21, `The Open Letter on AI and Cybersecurity and the Evidence for Agent Containment`, na homepage (Publications e Writing), na Research Series da SGAEIA e no índice de publicações.
- Novas edições integrais em `/publications/artigo21/` e `/publications/artigo21/pt/`, a partir dos masters públicos do SGAEIA_2: capa, duas figuras e 18 referências por idioma; DOI `10.5281/zenodo.23426350`.
- Aplicados os quatro URLs de Zenodo, Medium, DEV Community e Academia.edu fornecidos pelo usuário, com navegação recíproca de idiomas e metadados de citação e descoberta. Sitemap, llms.txt e comentário informativo de robots.txt atualizados.
- Padrão vigente de cabeçalho branco fixo, hero/rodapé azuis, Analytics, CSP e controles de leitura preservado. Nenhum ativo compartilhado alterado; reutilizados estilos e controlador de leitura genéricos do artigo 20.
- Cinco páginas verificadas exclusivamente na prévia local `http://127.0.0.1:8765/`, em 1280 e 320 px, sem rolagem horizontal ou sobreposição inicial. Controles de fonte, leitura fácil e navegação PT→EN conferidos; viewport temporária removida.
- Backup restaurável em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-article21`. Detalhes em `docs/logs/2026-10-17-ARTICLE21-HOMEPAGE-PUBLICATION.md`.
- `git diff --check` passou. Atualização local, sem stage, commit, push ou implantação.


## Teste local do rodapé da homepage — 17 de outubro de 2026

- A pedido do usuário, amostra limitada a `index.html`: logo e wordmark SGAEIA centralizados, descrição do programa centralizada e traduzida nos cinco idiomas existentes.
- Os 13 ícones foram substituídos pelos nomes dos mesmos destinos, em Source Serif 4, negrito e tamanho menor que o wordmark. URLs, rótulos acessíveis e atributos dos links preservados.
- Fundo azul `#315f7f`, igual ao hero, com letras brancas; hover/foco dos nomes com fundo branco, texto azul, sublinhado e foco visível.
- Três linhas finais empilhadas e centralizadas com gap de 2 px; textos e versão existentes preservados.
- CSS isolado em `/assets/homepage-footer-preview.css?v=20261017-1`; teste não propagado à página SGAEIA nem a outras páginas.
- Backup restaurável em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-footer-preview`.
- Alteração experimental local para revisão visual; sem stage, commit, push ou acesso à homepage remota.

### Amostra do bloco de identidade em azul mais claro — 17 de outubro de 2026

- A pedido do usuário, somente o bloco `.footer-head` (logo, wordmark e descrição SGAEIA) passa ao azul mais claro `#477797`, com textos brancos e respiro interno de 24px × 16px. Restante do rodapé preservado em `#315f7f`.
- CSS exclusivo da homepage atualizado para `homepage-footer-preview.css?v=20261017-2`; teste local sem publicação.
- Backup da amostra anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-lighter-footer-block`.

### Nome e subtítulo do cabeçalho da homepage — 17 de outubro de 2026

- Centralizados em conjunto o nome `Aridio Silva` e o subtítulo da identidade, usando `text-align:center` no bloco e margens laterais automáticas no nome de largura ajustada ao conteúdo.
- Preservados fonte, hover/foco, link, menu, controles e comportamento responsivo. Ajuste limitado ao CSS embutido de `index.html`.
- Backup anterior: `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\index-before-centered-header-name.html`. Atualização local, sem stage, commit ou push.

### Menu Home da homepage — 17 de outubro de 2026

- Inserido Home como primeiro item do menu, com `href="#top"` para o início do bloco Research Focus e as mesmas regras de hover/foco dos demais links.
- Incluída a chave `nav_home` nos cinco idiomas existentes: Home, Início, Inicio, Accueil e Startseite.
- Clique testado na prévia local: retorna a #top com o começo do hero abaixo do cabeçalho fixo, sem sobreposição nem rolagem horizontal. Sem stage, commit, push ou acesso à homepage remota.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\index-before-home-menu.html`; git diff --check passou.

## Rodapé SGAEIA no padrão da homepage — 17 de outubro de 2026

- Aplicado a `sgaeia.html` o mesmo rodapé da homepage: logo, wordmark e descrição centralizados em bloco #477797; restante do rodapé #315f7f, texto branco, 13 links por nome em negrito, hover/foco compartilhados e gap de 2px entre as três linhas finais.
- Reutilizado `/assets/homepage-footer-preview.css?v=20261017-2`, sem alterar a folha nem a homepage nesta etapa. Preservados os 13 destinos, as traduções da descrição, a data e a versão existentes da SGAEIA e todo o conteúdo fora do rodapé.
- Conferência no navegador local: cores esperadas, zero ícones, 13 nomes, texto branco e ausência de rolagem horizontal; em 320px, logo e descrição centralizados com desvio inferior a 1px. Viewport temporária removida; prévia local aberta no rodapé à direita.
- Backup: `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\sgaeia-before-matching-homepage-footer.html`. git diff --check passou. Sem stage, commit, push, publicação ou acesso à homepage remota.

### Linhas dos links dos rodapés mais próximas — 17 de outubro de 2026

- Reduzido o espaçamento vertical das linhas de links: gap de 2px, altura mínima de 32px e padding vertical de 4px. Mantidos tamanhos de fonte, espaçamento horizontal e hover/foco.
- Ajuste na folha compartilhada dos rodapés de index.html e sgaeia.html, preservando o padrão comum; cache-busting atualizado nas duas páginas para `homepage-footer-preview.css?v=20261017-3`.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-compact-footer-links`. Alteração local sem stage, commit ou push.

### Título SGAEIA como link nos rodapés — 17 de outubro de 2026

- O wordmark SGAEIA junto ao logo nos rodapés de index.html e sgaeia.html agora é um link para `/sgaeia.html`, na mesma aba.
- Preservado o texto branco; hover/foco com fundo branco, texto azul #244b68, sublinhado e contorno de foco visível. Respeitada a preferência de movimento reduzido.
- Cache-busting da folha compartilhada atualizado coordenadamente nas duas páginas para `homepage-footer-preview.css?v=20261017-4`.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-footer-sgaeia-link`. Atualização exclusivamente local, sem stage, commit ou push.

## Seção 05 — plataformas de publicação — 17 de outubro de 2026

- Por pedido do usuário, substituída a lista de cards de artigos da Research Series de `sgaeia.html` por seis cards de acesso às plataformas, no mesmo modelo da seção 06 Artifacts: título, descrição e link Open/Abrir, sem capas ou bullets.
- Destinos fornecidos preservados integralmente: registros Zenodo ordenados pelos mais recentes, DEV Community, Academia.edu, comunidade SGAEIA no Zenodo, busca OpenAIRE e perfil Medium. Os dois destinos Zenodo foram mantidos separadamente conforme a lista fornecida.
- Seção/menu passam a Platforms/Plataformas e Publication platforms/Plataformas de publicação, com traduções EN/PT/ES/FR/DE. Âncora `#series` preservada para compatibilidade.
- Reutilizadas as mesmas regras de grade, cards, cores, faixas laterais, hover/foco e movimento reduzido de Artifacts por seletores compartilhados. Duas colunas em desktop, uma no celular.
- Páginas individuais dos artigos e índice de publicações preservados. Os registros individuais continuam disponíveis pela navegação Publications. Descrição da página SGAEIA em llms.txt ajustada; lastmod de sgaeia.html no sitemap já é 2026-10-17.
- Verificação local em 1280 e 320px sem rolagem horizontal; seis URLs conferidos, zero cards de artigo remanescentes na seção, estilos dos cards iguais aos de Artifacts. Traduções dos cinco idiomas verificadas no navegador; sintaxe do script e git diff --check passaram. Override de viewport removido.
- Backups anteriores em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\sgaeia-before-publication-platforms.html` e `llms-before-publication-platforms.txt`.
- Alteração exclusivamente local, sem stage, commit, push ou acesso à homepage remota.

### Fundo dos cards de plataformas igual a Properties — 17 de outubro de 2026

- Por pedido do usuário, os seis cards da seção 05 Platforms usam agora #f9fcfb, igual aos cards da seção 03 Properties, e #fff no hover.
- Alteração limitada ao fundo normal/hover dos cards de plataformas. Artifacts, demais estilos, conteúdo e links preservados.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\sgaeia-before-platforms-properties-background.html`. Atualização local, sem stage, commit ou push.

### Bullets dos cards de plataformas — 17 de outubro de 2026

- Inseridos bullets redondos numerados de 1 a 6 nos seis cards da seção 05 Platforms.
- Reutilizada a regra geométrica dos bullets de 03 Properties: 38×38px, número branco centralizado, borda circular e sombra. Cor #2f7a83, igual à faixa lateral dos cards de plataformas.
- Conteúdo, links e fundo #f9fcfb preservados. Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\sgaeia-before-platform-bullets.html`.
- Alteração local, sem stage, commit ou push.

### Bullets da seção 06 Artifacts — 17 de outubro de 2026

- Adicionados bullets redondos de 1 a 5 aos cinco cards de Artifacts, iguais aos da seção Platforms: 38×38px, fundo #2f7a83 e número branco centralizado.
- Reutilizados os seletores compartilhados; preservados títulos, descrições, URLs, cores dos cards e largura do último card.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\sgaeia-before-artifacts-bullets.html`. Atualização local sem stage, commit ou push.

### Abertura centralizada do índice de publicações — 17 de outubro de 2026

- Centralizados o rótulo Research publications, o título Publications e a introdução no hero abaixo do cabeçalho fixo de `publications.html`.
- Folha exclusiva `/assets/publications-index-hero.css?v=20261017-1`, preservando o alinhamento e o conteúdo dos cards e das demais páginas.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\publications-before-centered-hero.html`. Alteração local, sem stage, commit ou push.

### Abertura centralizada do índice de infográficos — 17 de outubro de 2026

- Aplicado a `infographics/index.html` o mesmo alinhamento centralizado de Publications: rótulo Research communication, título Infographics e introdução no bloco azul abaixo do cabeçalho fixo.
- Reutilizada a folha compartilhada `publications-index-hero.css`; comentário atualizado e cache-busting coordenado nos dois índices para v20261017-2. Conteúdo dos cards e páginas individuais preservados.
- Lastmod do índice de infográficos no sitemap atualizado para 2026-10-17. Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-centered-infographics-index`.
- Alteração local, sem stage, commit ou push.

## Rodapés dos índices no padrão compartilhado — 17 de outubro de 2026

- Aplicado aos índices `publications.html` e `infographics/index.html` o mesmo rodapé da homepage e SGAEIA: logo e título SGAEIA clicável, bloco #477797, base #315f7f, texto branco, 13 links nominais em negrito, hover/foco e espaçamento compacto.
- Os índices exibem três linhas finais: copyright, atualização de 17 October 2026 com Version 2.0 e o lema. Versão editorial preservada.
- A folha compartilhada passou a declarar a tipografia do wordmark e dos nomes e as divisórias, para funcionar também nos índices sem depender do CSS embutido das páginas principais. Cache-busting coordenado nas quatro páginas para `homepage-footer-preview.css?v=20261017-5`.
- Conteúdo integral do main e dos cards dos dois índices comparado com backup e preservado. Conferência em desktop e em 320px sem rolagem horizontal; logo/descrição centralizados com desvio inferior a 1px, 13 links e destino SGAEIA corretos, três linhas finais com gap 2px. Viewport temporária removida e duas prévias locais mantidas abertas.
- Backup anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-matching-index-footers`. git diff --check passou. Sem stage, commit, push, publicação ou acesso à homepage remota.

## Rodapé compartilhado em todas as páginas editoriais EN/PT — 17 de outubro de 2026

- Aplicado o mesmo modelo dos índices às 56 páginas individuais existentes: 26 edições de artigos (21 EN e 5 PT) e 30 edições de infográficos (15 EN e 15 PT). Nenhuma tradução ou página adicional foi criada.
- Todas carregam uma única vez `/assets/homepage-footer-preview.css?v=20261017-5`, com logo e título SGAEIA centralizados, link para `/sgaeia.html`, bloco #477797, fundo #315f7f, texto branco, 13 links nominais em negrito e espaçamento compacto.
- Rodapés PT localizados (descrição, rótulos acessíveis, nomes descritivos, data e lema). Preservados os números de versão originais de cada página e todos os links CC BY 4.0 que já existiam nos rodapés. Datas de atualização visual e lastmod das 56 URLs no sitemap: 2026-10-17.
- Comparação byte a byte confirmou que, fora da substituição do rodapé e da inclusão da referência CSS, todo o HTML original das 56 páginas permanece inalterado: conteúdo, imagens, carrosséis, metadados, canonical, hreflang, Analytics, CSP e controles preservados.
- Validação estrutural das 56 páginas: um rodapé, um id footer, 13 links de perfil, destino SGAEIA correto, licença/versão preservadas e uma referência à folha compartilhada. Sitemap XML válido e sem URLs duplicadas.
- Conferência das 56 páginas no navegador local a 1280 e 320px (112 combinações): nenhuma falha de cores, quantidade de links, destino, centralização de logo/descrição (desvio <1px) ou rolagem horizontal. Viewport restaurada e aba temporária de auditoria fechada.
- Exemplos de artigo 21 EN/PT e infográfico 005 EN/PT abertos localmente à direita. Sem navegação à homepage remota, stage, commit, push ou publicação.
- Backup integral anterior em `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-all-editorial-footers`. Inventário da operação em `work/editorial-footer-manifest.json`; git diff --check passou.

### Padrão de continuidade dos rodapés editoriais

Novos artigos e infográficos devem reutilizar esse rodapé compartilhado e sua folha de estilo, manter os destinos absolutos locais `/assets/` e `/sgaeia.html`, preservar versão e licença da edição e apresentar o texto do rodapé no idioma da página. Não voltar aos rodapés simples anteriores.

## Blocos iniciais centralizados em artigos e infográficos EN/PT — 17 de outubro de 2026

- Centralizados os textos do hero abaixo do cabeçalho fixo nas 56 páginas individuais existentes: 26 edições de artigos (21 EN e 5 PT) e 30 edições de infográficos (15 EN e 15 PT).
- O alinhamento abrange título, rótulo, subtítulo, autoria, metadados e navegação de idiomas. Conteúdo editorial, estrutura, rodapé e controles preservados.
- Regras restritas a `.article-page` e `.infographic-page` na folha compartilhada `assets/editorial-hero.css`; referências de cache atualizadas nas 58 páginas que a utilizam para `?v=20261017-1`. Os dois índices mantêm sua centralização já existente.
- Comparação integral dos 58 HTMLs com o backup confirmou que a única mudança nesses arquivos é a versão da referência CSS. Não houve alteração de textos, imagens, carrosséis, metadados, Analytics ou CSP.
- Verificadas as 56 páginas no navegador local em 1280 e 320px (112 combinações), sem rolagem horizontal, desalinhamento dos blocos de texto ou falha de centralização da navegação de idiomas. Viewport temporária removida e aba de auditoria fechada.
- Exemplos do artigo 21 e infográfico 005 em EN/PT atualizados na prévia local à direita.
- Backup anterior: `C:\Users\as294\Documents\Codex\2026-10-17\insi\work\backup-before-centered-editorial-heroes`. git diff --check passou. Sem stage, commit, push, publicação ou acesso à homepage remota.
- Continuidade: novos artigos e infográficos devem reutilizar essa centralização do hero por meio da folha editorial compartilhada.
