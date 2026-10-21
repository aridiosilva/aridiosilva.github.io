# Prompt de continuidade — Homepage AridioSilva.com — padrões atuais

**Atualizado em:** 17 de outubro de 2026 — BRT

**Ciclo de continuidade:** 2.1; preservar a versão editorial indicada em cada página.

**Repositório local:** `C:\Users\as294\aridiosilva.github.io`

**Branch:** `main`

**Commit de referência observado:** `eb98889` — `feat: adiciona artigo 21 e padroniza layout, rodapes e plataformas de publicacao`

**Remoto configurado:** `https://github.com/aridiosilva/aridiosilva.github.io`

**Prévia local:** `http://127.0.0.1:8765/`

## Prompt pronto para iniciar outro chat

Continue a evolução da homepage AridioSilva.com no repositório local indicado acima. Use este documento como contexto técnico e registro de decisões; o pedido atual do usuário define o escopo de trabalho. Leia o log `docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md`, confira `git status --short --branch` e o HEAD atual e inspecione os arquivos envolvidos antes de editar. Preserve os padrões consolidados abaixo: identidade centralizada no header da homepage, opção Home, rodapé compartilhado, heroes editoriais centralizados e cards numerados de plataformas e artefatos em SGAEIA. Reutilize os estilos compartilhados, as traduções e os componentes existentes. Preserve conteúdo, metadados, versões, licenças, acessibilidade, analytics e responsividade. Faça alterações incrementais, mantenha backups restauráveis e valide somente em `http://127.0.0.1:8765/`. Não acesse a homepage remota: essa restrição foi expressamente definida pelo usuário. Abra as páginas alteradas ou incluídas na aba à direita, usando a prévia local. Execute `git diff --check`, atualize o log e este prompt quando necessário. Não faça stage, commit ou push sem pedido explícito para executar essas operações; um pedido de comandos Git exige apenas fornecer os comandos.

## Como interpretar este documento

- As seções de padrões atuais, antes do histórico, consolidam as decisões vigentes em 17/10/2026 e prevalecem sobre descrições antigas de layout ou estado Git.
- O histórico registra etapas anteriores, inclusive testes descartados e estados anteriores ao commit. Referências antigas a rodapés com ícones, Research Series com cards de artigos, Artifacts sem bullets ou hero editorial alinhado à esquerda foram superadas.
- Confira sempre o código e o estado Git atuais. O commit de referência acima não autoriza reset, checkout ou descarte de alterações.
- A versão 2.1 identifica o ciclo deste prompt; não alterar automaticamente os números de versão visíveis das páginas.

## 1. Header e navegação da homepage

- Manter o header fixo, branco, com texto preto, responsivo e sem sobreposição do conteúdo.
- Centralizar `Aridio Silva` em conjunto com `Independent Researcher · AI Systems Architecture`: ambos devem compartilhar o mesmo eixo horizontal de centro dentro da identidade. Centralizar apenas o contêiner externo é insuficiente se o nome permanecer alinhado à esquerda.
- Referência implementada em `index.html`: `.identity { text-align: center; }` e `.identity strong { width: fit-content; margin-inline: auto; }`.
- Manter `Home` como primeira opção do menu, com `href="#top"`, levando ao início do bloco `RESEARCH FOCUS`. Preservar hover e foco visível equivalentes aos demais itens.
- Traduções de `nav_home`: EN `Home`, PT `Início`, ES `Inicio`, FR `Accueil`, DE `Startseite`.
- Preservar os controles de idioma, tamanho da fonte, Easy read e Listen, com seus comportamentos acessíveis.
- A centralização da identidade não implica centralizar o hero da homepage. Preservar sua composição aprovada, incluindo o painel `Current research question`.

## 2. Blocos iniciais dos índices, artigos e infográficos

- Centralizar o texto do hero, abaixo do header fixo, nos índices `publications.html` e `infographics/index.html`.
- Aplicar o mesmo alinhamento a todas as páginas individuais de artigos e infográficos EN/PT: rótulo, título, subtítulo, descrição inicial, autoria, metadados e navegação recíproca de idiomas.
- Manter os blocos de texto no mesmo eixo central, com limites de largura e quebra natural. Nos controles de idioma, usar `justify-content: center`.
- Preservar o fundo azul `#315f7f`, letras brancas e o comportamento aprovado dos links; a centralização é restrita à abertura editorial, sem alterar o alinhamento do corpo dos artigos ou dos slides.
- Índices: reutilizar `assets/publications-index-hero.css`. Páginas individuais: reutilizar as regras de `.article-page` e `.infographic-page` em `assets/editorial-hero.css`.
- Inventário atual: 28 edições de artigos (22 EN e 6 PT) e 32 edições de infográficos (16 EN e 16 PT). Não presumir que todos os artigos já possuam tradução PT.
- Preservar as aberturas específicas da homepage e de SGAEIA, incluindo seus painéis e botões.

## 3. Rodapé compartilhado obrigatório

Aplicar o mesmo modelo à homepage, à página SGAEIA, aos dois índices e a todas as páginas individuais EN/PT. O padrão atual abrange 64 páginas: 2 institucionais, 2 índices, 28 edições de artigos e 32 edições de infográficos.

### Estrutura e cores

- Estrutura raiz: `<footer class="site-footer footer-style-preview" id="footer">`.
- Carregar uma única vez a folha `assets/homepage-footer-preview.css`. O nome histórico “preview” permanece no arquivo, que agora contém o padrão compartilhado vigente.
- Fundo geral `#315f7f`, textos brancos e alinhamento central.
- Bloco da marca `.footer-head` em azul mais claro `#477797`, com padding `24px 16px`.
- Logo, título `SGAEIA` e descrição empilhados e centralizados no mesmo eixo.
- Logo `/assets/sgaeia-logo-transparent.png`, proporcional, com largura de 78px e 66px até 430px; manter `height: auto`.
- O título `SGAEIA` é um link `.footer-wordmark.footer-project-link` para `/sgaeia.html`, na mesma aba, com hover e foco visível.
- Descrição EN: `SGAEIA · Research on governed autonomous and distributed AI systems.`
- Descrição PT: `SGAEIA · Pesquisa sobre sistemas de IA autônomos e distribuídos sob governança.`

### Links de perfis e projetos

- Usar nomes em negrito em lugar da lista de ícones. Fonte `Source Serif 4`, com fallback serifado; peso 700; tamanho 1rem, reduzido para .92rem até 430px.
- `.footer-name-links`: flex com quebra, centralizado, distância vertical de 2px e horizontal de 12px; em telas estreitas, horizontal de 6px. Preservar as linhas divisórias discretas.
- Hover/foco evidente: fundo branco, texto `#244b68`, sublinhado de 2px e contorno de foco branco de 3px. Preservar `prefers-reduced-motion`.
- Manter estes 13 destinos, com os nomes descritivos localizados quando aplicável:

| Nome | Destino |
| --- | --- |
| GitHub | https://github.com/aridiosilva |
| ORCID | https://orcid.org/0009-0008-2411-6995 |
| Google Scholar | https://scholar.google.com/citations?user=rPn5O48AAAAJ |
| Zenodo | https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Silva%2C%20Aridio%22 |
| SGAEIA · Zenodo Community | https://zenodo.org/communities/sgaeia |
| OpenAIRE | https://explore.openaire.eu/search/find?fv0=Aridio%20Silva&f0=q |
| Medium | https://medium.com/@aridiosilva |
| DEV Community | https://dev.to/aridiosilva |
| LinkedIn | https://www.linkedin.com/in/aridio-silva-74997111/ |
| SGAEIA · LinkedIn | https://www.linkedin.com/company/sgaeia/ |
| SGAEIA Repository | https://github.com/aridiosilva/SGAEIA |
| Kaggle | https://www.kaggle.com/aridiosilva2 |
| SGAEIA DOI | https://doi.org/10.5281/zenodo.22557796 |

### Três linhas finais

- Centralizar e aproximar os três grupos finais: copyright/licença quando existente, atualização/versão e lema.
- `.footer-bottom`: coluna, gap de 2px, fonte .74rem e entrelinha 1.4.
- EN: `Autonomous AI. Governed by Design. Trusted by Evidence.`
- PT: `IA autônoma. Governada por concepção. Confiável pela evidência.`
- Preservar a versão original da edição e todos os links de licença CC BY 4.0 já existentes. Não uniformizar as páginas em versão 2.0 ou 2.1.
- Localizar descrição, rótulos acessíveis, data e lema nas edições PT. Atualizar datas somente conforme a alteração efetiva, sem modificar a data original de publicação do artigo.
- Novas páginas devem usar caminhos absolutos locais como `/assets/` e `/sgaeia.html`, evitando erros nas subpastas `pt/`.

## 4. SGAEIA — seção 05 de plataformas de publicação

A antiga lista de artigos da seção `Research Series` foi substituída por seis cards de acesso às plataformas, seguindo a composição da seção 06 `Artifacts`. O índice de publicações continua reunindo os artigos individualmente.

- Preservar a âncora `#series` para compatibilidade com os links existentes.
- Menu e textos: `Platforms` / `Plataformas`, com traduções EN/PT/ES/FR/DE existentes.
- Cada card contém bullet circular, título, descrição e link `Open` / `Abrir`; sem capas de artigos.
- Grade de duas colunas no desktop e uma coluna no celular, padding de 24px e faixa lateral de 5px em `#2f7a83`.
- Fundo dos cards igual ao padrão de `03 Properties`: `#f9fcfb`, passando a branco no hover.
- Bullets redondos de 38 × 38px, fundo `#2f7a83`, número branco centralizado, raio 50%, fonte .68rem e peso 800. Numerar de **1 a 6** nesta ordem:

| Nº | Plataforma | Destino |
| --- | --- | --- |
| 1 | Zenodo — Published records | https://zenodo.org/communities/sgaeia/records?q=&l=list&p=1&s=30&sort=newest |
| 2 | DEV Community | https://dev.to/aridiosilva |
| 3 | Academia.edu | https://independent.academia.edu/AridioSilva |
| 4 | Zenodo — SGAEIA Community | https://zenodo.org/communities/sgaeia |
| 5 | OpenAIRE | https://explore.openaire.eu/search/find?fv0=Aridio%20Silva&f0=q |
| 6 | Medium | https://medium.com/@aridiosilva |

As duas entradas Zenodo têm destinos distintos e devem permanecer. Links externos abrem em nova aba com `rel="noopener noreferrer"`. Preservar hover/foco dos links em terracota `#9a3412`.

## 5. SGAEIA — seção 06 Artifacts

- Manter os cinco cards existentes, títulos, descrições e destinos aprovados.
- Adotar os mesmos bullets circulares das plataformas, numerados de **1 a 5**.
- Preservar o quinto card com largura total no desktop e adaptação para uma coluna no celular.
- Fundo de Artifacts permanece `#e8f3f4`, com hover `#f2f8f8`. A mudança para o fundo de Properties foi específica dos cards de plataformas.
- Reutilizar os estilos comuns de `:is(#artifacts, #series)` e as regras compartilhadas de `.mini-label`, evitando duplicar componentes.

## 6. Artigo 21 — referência editorial

- EN: `/publications/artigo21/` — `The Open Letter on AI and Cybersecurity and the Evidence for Agent Containment`.
- PT: `/publications/artigo21/pt/` — `Carta aberta sobre AI e cibersegurança e as evidências que sustentam a contenção de agentes`.
- Fonte de conteúdo: `C:\Users\as294\SGAEIA_2\docs\articles\Publicos\ARTICLE_021`, arquivos mestres com prefixo `2026-10-16-1804`.
- Publicação: 16/10/2026; integração à homepage: 17/10/2026; versão da edição: 1.0.
- Preservar texto integral, 18 referências, capa e duas figuras por edição. Imagens em `assets/article21/`, sem deformação; legendas conforme o idioma dos mestres.
- Preservar os registros nas seções Publications e Writing da homepage e no índice de publicações. Em SGAEIA, a seção 05 atual é de plataformas e substitui os antigos cards individuais de artigos.
- Destinos confirmados pelo usuário:

| Canal | URL |
| --- | --- |
| Zenodo | https://zenodo.org/records/23426350 |
| DOI | https://doi.org/10.5281/zenodo.23426350 |
| DEV Community | https://dev.to/aridiosilva/the-open-letter-on-ai-and-cybersecurity-and-the-evidence-for-agent-containment-4a19 |
| Academia.edu | https://www.academia.edu/179088614/The_Open_Letter_on_AI_and_Cybersecurity_and_the_Evidence_for_Agent_Containment |
| Medium | https://medium.com/@aridiosilva/the-open-letter-on-ai-and-cybersecurity-and-the-evidence-for-agent-containment-071f1882f34d |

## 6A. Artigo 22 e Info_016 — referência editorial

- Artigo EN: `/publications/artigo22/` — `Opening the Black Box of LLM Inference: Foundations of Generative AI`.
- Artigo PT: `/publications/artigo22/pt/` — `Abrindo a Caixa-Preta da Inferência em LLMs: Fundamentos de AI Generativa`.
- Publicação: 21/10/2026; versão 1.0.0; DOI `10.5281/zenodo.23540392`; Zenodo `https://zenodo.org/records/23540392`; DEV Community `https://dev.to/aridiosilva/opening-the-black-box-of-llm-inference-foundations-of-generative-ai-3i9p`; Medium `https://medium.com/@aridiosilva/opening-the-black-box-of-llm-inference-foundations-of-generative-ai-65f6d3563bd2`; Academia.edu `https://www.academia.edu/179351915/Opening_the_Black_Box_of_LLM_Inference_Foundations_of_Generative_AI_Anatomy_of_the_Transformer_from_the_Inside_from_Input_to_Output_Token_SGAEIA_Research_Series_Article_22`.
- Preservar o texto integral dos mestres públicos, capa e seis figuras por idioma, tabelas, fórmulas, código-fonte, glossário, 69 referências e navegação recíproca, com EN como `x-default`.
- Info_016 EN: `/infographics/Info_016/`; Info_016 PT: `/infographics/Info_016/pt/`; 50 slides 1920 × 1080 por idioma, PDFs originais e textos LinkedIn fornecidos. EN é a edição padrão do índice.
- PDFs: `opening-black-box-llm-inference-en.pdf` e `abrindo-caixa-preta-inferencia-llms-pt.pdf`.

## 7. Ativos compartilhados e cache

Versões observadas na consolidação de 17/10/2026; em alterações futuras, avançar o cache-busting apenas quando necessário e atualizar todos os consumidores afetados.

| Ativo | Referência vigente | Uso |
| --- | --- | --- |
| Rodapé compartilhado | `/assets/homepage-footer-preview.css?v=20261017-5` | 60 páginas |
| Hero editorial | `/assets/editorial-hero.css?v=20261017-1` | 60 edições individuais e 2 índices |
| Hero dos índices | `/assets/publications-index-hero.css?v=20261017-2` | Índices de publicações e infográficos |
| Hero institucional | `/assets/homepage-hero.css?v=20261016-2` | Homepage e SGAEIA |
| Analytics | `/assets/analytics-consent.js?v=20261011` | Preservar integração existente |

- Preservar o header editorial compartilhado e seus arquivos `fixed-site-header`, respeitando as referências atuais de cada família de páginas.
- O Artigo 21 reutiliza intencionalmente os recursos genéricos `article20.css` e `article20-accessibility.js`; não duplicar esses arquivos apenas para trocar seu nome.
- Recarregar o HTML das abas abertas ao alterar a versão de um CSS. Uma aba antiga pode manter referências antigas mesmo com o arquivo já atualizado no disco.

## 8. Requisitos de preservação e validação

1. Conferir Git e arquivos reais antes de agir; preservar alterações existentes do usuário e criar backup antes de experimentos visuais relevantes.
2. Reutilizar os componentes compartilhados. Traduções institucionais e de navegação: EN/PT/ES/FR/DE; conteúdo editorial e controles locais conforme os idiomas efetivamente disponíveis.
3. Preservar HTML semântico, teclado, foco visível, ARIA, skip links, controles de leitura, navegação de idiomas e preferência por movimento reduzido.
4. Preservar proporção das capas, dimensões intrínsecas, carregamento diferido quando aplicável, PDFs, carrosséis e textos editoriais.
5. Preservar canonical, hreflang, metadados de citação, dados estruturados, CSP, licenças e links editoriais. Não alterar destinos com base em suposições.
6. Manter a medição automática de audiência existente, propriedade `G-MXMJ7Z3LS7`, sem reintroduzir interface de preferências e com armazenamento negado.
7. Atualizar sitemap/lastmod apenas nas páginas afetadas e manter XML válido, URLs únicas, `llms.txt` e `robots.txt` coerentes quando houver mudança de conteúdo ou descoberta.
8. Validar as páginas afetadas no navegador local em desktop e celular; referências usadas: 1280px e 320px. Conferir centralização, hover/foco, links, imagens, ausência de sobreposição do header e de rolagem horizontal.
9. Restaurar a viewport após os testes, fechar abas temporárias de auditoria e abrir ou atualizar as páginas de resultado à direita. Usar `http://127.0.0.1:8765/`, sem acessar a homepage remota.
10. Executar `git diff --check`, registrar as decisões e fornecer um resumo do que mudou e da validação. Stage, commit e push dependem de pedido explícito de execução.

## 9. Estado desta consolidação

- Antes desta atualização documental, `main` estava limpo e alinhado à referência local `origin/main`, no commit `eb98889`. Essa observação não envolve fetch nem comprova o estado da hospedagem remota.
- As alterações visuais da sessão já constam nesse commit. Esta etapa atualiza somente o prompt e o log de continuidade e gera uma cópia Markdown datada.
- As verificações visuais dos componentes estão registradas no histórico: rodapés e heroes das 56 edições individuais foram conferidos a 1280px e 320px. Não confundir essas verificações anteriores com uma nova execução de testes visuais nesta atualização documental.
- As cópias do prompt no repositório e em `F:\#         Cursos 2026\SGAEIA_2\PROMPTs Diversos\` devem permanecer sincronizadas com o padrão consolidado.

---

## Histórico de evolução — registros anteriores

Os registros abaixo preservam o contexto das etapas de implementação. Seus estados Git, datas de teste, versões antigas de ativos e descrições de layouts superados são históricos. Para novas alterações, aplicar os padrões atuais consolidados acima.

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
