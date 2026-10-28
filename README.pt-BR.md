# Homepage de Aridio Silva

[English — padrão](README.md) | **Português**

Repositório-fonte de [aridiosilva.com](https://aridiosilva.com), homepage pessoal de pesquisa e arquivo público de Aridio Silva. O site documenta trabalhos sobre arquitetura de sistemas de IA, IA autônoma e distribuída, sistemas multiagentes, segurança de IA, Zero Trust, GRC contínuo e o projeto de pesquisa SGAEIA.

## Escopo do repositório

O site reúne:

- as páginas iniciais pessoal e da SGAEIA;
- a SGAEIA Research Series e as páginas de leitura integral das publicações;
- edições bilíngues de infográficos, com inglês como padrão e português como edição localizada;
- o catálogo de Challenges e as páginas dos projetos;
- perfis do pesquisador e do projeto, identificadores persistentes e canais de distribuição;
- acessibilidade, navegação responsiva, metadados estruturados, Analytics e arquivos de descoberta para robôs e LLMs.

## Estado atual registrado

A entrada consolidada mais recente do log é de **28 de outubro de 2026**. Nesse ponto, o repositório registrava:

- **71 páginas HTML públicas** usando o sistema compartilhado de navegação e rodapé;
- publicações da SGAEIA Research Series até o **Artigo 23**;
- infográficos bilíngues até o **Info_017**;
- o índice **Challenges** e o **SlothGuard Challenge 001** em inglês e português;
- inglês como edição canônica e `x-default` dos conteúdos bilíngues;
- `hreflang` recíproco entre as edições em inglês e português;
- carregador GA4 compartilhado, com configurações padrão de armazenamento voltadas à privacidade;
- descoberta coordenada por `sitemap.xml`, `robots.txt` e `llms.txt`;
- o perfil Academia.edu em todos os rodapés HTML, depois de Medium e antes de DEV Community.

## Arquitetura e convenções de publicação

### Idiomas e URLs

- Inglês é a edição padrão.
- As edições em português usam um caminho `/pt/` quando há página localizada.
- Páginas bilíngues fornecem URLs canônicas, declarações `hreflang` recíprocas e `x-default` em inglês.
- A navegação visível de idiomas deve permanecer disponível no conteúdo localizado.

### Analytics, segurança e privacidade

- As páginas HTML públicas carregam exatamente uma vez o script compartilhado `/assets/analytics-consent.js?v=20261011`.
- A propriedade GA4 registrada é `G-MXMJ7Z3LS7`.
- O armazenamento de Analytics e publicidade é negado por padrão; a implementação evita carregadores `gtag.js` duplicados.
- As regras da Content Security Policy permanecem restritivas e autorizam explicitamente apenas os serviços necessários ao site.
- Links externos abertos em nova aba usam a proteção apropriada `noopener`/`noreferrer`.

### Acessibilidade e responsividade

- Cabeçalhos, menus, cards, carrosséis, controles de leitura e rodapés compartilhados oferecem acesso por teclado e foco visível.
- Imagens e figuras editoriais usam texto alternativo e dimensões responsivas.
- Tabelas e mídias largas usam overflow controlado, sem forçar rolagem horizontal no nível da página.
- Preferências de movimento reduzido e layouts móveis são preservados pelo sistema compartilhado de estilos.

### Requisitos de descoberta

Cada nova página pública ou tradução deve ser refletida, quando aplicável, em:

- metadados canônicos e de idioma;
- dados estruturados e metadados de citação;
- índice público correspondente;
- `sitemap.xml`;
- `llms.txt`;
- `robots.txt`;
- log operacional de alterações.

## Log consolidado de alterações

Esta seção resume os registros detalhados existentes em [`docs/logs/`](docs/logs/). Esses arquivos continuam sendo a fonte oficial para evidências de implementação, hashes, inventários individuais de arquivos, resultados de validação e estado histórico do repositório.

### Setembro de 2026

- **22 de setembro — baseline de descoberta acadêmica, segurança e Analytics.** Foram adicionados reforços de segurança e recursos de comunicação de vulnerabilidades, descoberta para robôs, buscadores e LLMs, links do Artigo 3, medição GA4 orientada à privacidade e um catálogo voltado ao Google Scholar com doze páginas de publicação endereçáveis individualmente. O baseline de implantação registrado foi o commit `e1ff892c369489bc35004df36cdc0a19ca11bdde` no branch `main`.
- **25 de setembro — atualizações de descoberta dos Artigos 13 e 14.** Foram ampliados a homepage, a página SGAEIA, o índice de publicações, as páginas individuais de leitura, o sitemap e os registros de descoberta para LLMs; os links externos de leitura foram padronizados para abrir em nova aba.
- **28 de setembro — Artigo 15.** A publicação foi adicionada às superfícies da homepage e aos arquivos de descoberta, preservando o layout estabelecido, a identidade do projeto e os links do pesquisador.
- **30 de setembro — leitura integral e acessibilidade dos Artigos 1 e 2.** Foram criadas páginas acessíveis de leitura integral, estrutura responsiva, metadados e a preferência final pelo link de leitura em inglês; também foi registrado o primeiro ciclo de integração do Artigo 2.

### Outubro de 2026

- **1º de outubro — revisão Master Version 2.0 do Artigo 2 e prompt reutilizável de integração.** O Artigo 2 foi reconciliado com a Master Version 2.0 e o fluxo repetível de inclusão de artigos integrais foi documentado.
- **2–3 de outubro — Artigos 3–16 e navegação editorial.** Foram concluídas as páginas acessíveis de leitura integral do Artigo 3 e dos Artigos 5–16, integradas capas e imagens editoriais e atualizadas a navegação e a descoberta. Foram adicionados cabeçalho fixo, menu responsivo e link DEV Community no rodapé. O Artigo 4 foi registrado separadamente no log da versão mestre.
- **6 de outubro — Artigo 17.** Foi adicionada a publicação bilíngue sobre jailbreak e concluídos seus registros de descoberta.
- **10 de outubro — Artigo 18.** A publicação sobre rastreamento de agentes de IA foi adicionada dentro dos limites já estabelecidos da homepage.
- **11 de outubro — Artigo 19 e Homepage Versão 2.0.** Foi adicionada a publicação sobre LoRA e agentes de IA e consolidado o sistema visual da homepage e da página SGAEIA: cabeçalhos, heroes, cards, capas, canais de publicação, rodapés, responsividade, acessibilidade e cache-busting. A versão visível no rodapé permaneceu Versão 2.0, enquanto foi preparado o baseline de continuidade da Versão 2.1.
- **12 de outubro — sistema de infográficos e Info_001–Info_007.** Foram criados a arquitetura bilíngue de infográficos, o padrão de carrossel acessível, a integração ao índice, o fluxo de preservação dos PDFs, os metadados de idioma, os requisitos de descoberta e os cabeçalhos padronizados. Os logs detalhados cobrem modelagem de ameaças, rastreamento de agentes, LoRA, treinamento de modelos, o programa de verificação cibernética e as entradas seguintes incorporadas ao registro de continuidade.
- **14–15 de outubro — Info_008–Info_015 e Artigo 20.** Foram adicionadas as edições sobre revisão por pares, agentes de IA versus IA agêntica, Gartner, jailbreak, sociedades de agentes, mente alienígena, IA construindo a si mesma e IA/cibersegurança. O Artigo 20 foi publicado com registros canônicos, acessibilidade, Analytics, segurança e links de distribuição. Os blocos de título e cabeçalhos bilíngues dos infográficos foram padronizados em todo o catálogo.
- **16–17 de outubro — Artigo 21 e padrões editoriais compartilhados.** O Artigo 21 foi adicionado em inglês e português; foram formalizadas as regras para artigos, infográficos, índices e integração à homepage e à SGAEIA; rodapés compartilhados, blocos iniciais centralizados, cards de plataformas, canais de publicação e aberturas dos índices foram padronizados.
- **21 de outubro — Artigo 22 e Info_016.** Foram adicionadas as edições bilíngues integrais do Artigo 22 e a edição bilíngue de 50 slides do Info_016. A atualização reforçou os requisitos obrigatórios de GA4, CSP, canonical, `hreflang`, `x-default`, dados estruturados, sitemap, LLMs e robots para cada nova página pública.
- **26 de outubro — Challenges e SlothGuard Challenge 001.** Foram adicionados o índice público de Challenges e as páginas bilíngues do desafio, links do projeto, mídias responsivas, tabelas, vídeo com privacidade aprimorada, metadados de citação, registros DOI e um item Challenges nos cabeçalhos de todas as páginas então existentes. Posteriormente foram corrigidos o carregamento das imagens publicadas e a apresentação do vídeo do desafio.
- **28 de outubro — Info_017.** Foi incluído *Cutting LLM Cost by 70% Without Losing Quality* / *Reduzir 70% do Custo com LLMs sem Perder Qualidade* como edição bilíngue com 41 slides por idioma, PDFs originais, carrosséis acessíveis, texto de publicação no LinkedIn, card no índice, Analytics, metadados de segurança e descoberta coordenada. Os SHA-256 preservados dos PDFs são `D934B1AA2485082E524E12CB8A9A469146523281208D9C0A52220FD05C8F4A61` (EN) e `8A8EBDD1E8AFFC676B53407106F3F313475B63DDE2E8E2ED49355C2C2137C868` (PT).
- **28 de outubro — Artigo 23.** Foram adicionadas as edições integrais em inglês — padrão — e português de *How to Reduce the Cost of AI Systems with LLMs Without Sacrificing Quality*, incluindo os dois PDFs de 26 páginas, capas e 13 figuras por idioma em PNG/SVG, 56 referências auditadas, GA4, CSP, metadados de citação, JSON-LD, navegação recíproca de idiomas, cards na homepage e no índice de publicações e descoberta coordenada em sitemap, robots e LLMs.
- **28 de outubro — integração do Academia.edu nos rodapés.** `Academia.edu` foi adicionado à navegação compartilhada de perfis das 69 páginas HTML públicas, apontando para `https://independent.academia.edu/AridioSilva`. O item herda os comportamentos aprovados de hover, foco, contraste, quebra responsiva e movimento reduzido. Os registros de descoberta e as datas de modificação do sitemap foram atualizados.

## Índice dos logs detalhados

### Fundação, publicações e continuidade

- [Registro de versão e changelog completo — 22 de setembro de 2026](docs/logs/2026-09-22-1922-HOMEPAGE-VERSION-AND-CHANGELOG.md)
- [Inclusão do Artigo 15](docs/logs/2026-09-28-1800-HOMEPAGE-ARTICLE-15-INCLUSION.md)
- [Leitura integral e acessibilidade do Artigo 1](docs/logs/2026-09-30-1800-HOMEPAGE-ARTICLE-1-FULL-READING-ACCESSIBILITY.md)
- [Leitura integral e acessibilidade do Artigo 2](docs/logs/2026-09-30-1800-HOMEPAGE-ARTICLE-2-FULL-READING-ACCESSIBILITY.md)
- [Revisão Master Version 2.0 do Artigo 2](docs/logs/2026-10-01-1750-HOMEPAGE-ARTICLE-2-MASTER-V2-REVISION.md)
- [Revisão do prompt de artigo integral](docs/logs/2026-10-01-1814-HOMEPAGE-ARTICLE-INTEGRAL-PROMPT-REVISION.md)
- [Leitura integral e acessibilidade do Artigo 3](docs/logs/2026-10-03-1127-HOMEPAGE-ARTICLE-3-FULL-READING-ACCESSIBILITY.md)
- [Leitura integral e imagens dos Artigos 5–8](docs/logs/2026-10-03-1204-HOMEPAGE-ARTICLES-5-8-FULL-READING-IMAGES.md)
- [Cabeçalho fixo, navegação responsiva e link DEV no rodapé](docs/logs/2026-10-03-1213-HOMEPAGE-FIXED-HEADER-DEV-FOOTER.md)
- [Leitura integral e imagens dos Artigos 9–12](docs/logs/2026-10-03-1221-HOMEPAGE-ARTICLES-9-12-FULL-READING-IMAGES.md)
- [Leitura integral e imagens dos Artigos 13–16](docs/logs/2026-10-03-1237-HOMEPAGE-ARTICLES-13-16-FULL-READING-IMAGES.md)
- [Artigo 17 — Jailbreak](docs/logs/2026-10-06-ARTICLE17-JAILBREAK-HOMEPAGE.md)
- [Artigo 18 — rastreamento de agentes de IA](docs/logs/2026-10-10-ARTICLE18-AI-AGENT-TRACING-HOMEPAGE.md)
- [Artigo 19 — LoRA e agentes de IA](docs/logs/2026-10-11-ARTICLE19-LORA-AI-AGENTS-HOMEPAGE.md)
- [Continuidade visual e operacional da homepage](docs/logs/2026-10-11-HOMEPAGE-STYLE-CONTINUITY.md)
- [Publicação do Artigo 20](docs/logs/2026-10-14-1537-ARTICLE20-HOMEPAGE-PUBLICATION.md)
- [Publicação do Artigo 21](docs/logs/2026-10-17-ARTICLE21-HOMEPAGE-PUBLICATION.md)
- [Publicação do Artigo 23](docs/logs/2026-10-28-ARTICLE23-HOMEPAGE-PUBLICATION.md)

### Infográficos

- [Log operacional de inclusão de novos infográficos](docs/logs/2026-10-12-HOMEPAGE-INCLUSAO-NOVOS-INFOGRAFICOS.md)
- [Padronização dos cabeçalhos da homepage](docs/logs/2026-10-12-HOMEPAGE-PADRONIZACAO-HEADERS.md)
- [Info_002 — Modelagem de ameaças em IA](docs/logs/2026-10-12-INFO-002-MODELAGEM-DE-AMEACAS-IA.md)
- [Info_003 — Rastreamento de execução de agentes de IA](docs/logs/2026-10-12-INFO-003-RASTREAMENTO-AGENTES-IA.md)
- [Info_004 — LoRA](docs/logs/2026-10-12-INFO-004-LORA.md)
- [Info_005 — Do Zero aos Pesos](docs/logs/2026-10-12-INFO-005-DO-ZERO-AOS-PESOS.md)
- [Info_006 — Cyber Verification Program](docs/logs/2026-10-12-INFO-006-CYBER-VERIFICATION-PROGRAM.md)
- [Info_009 — Agentes de IA vs. IA Agêntica](docs/logs/2026-10-14-INFO-009-AGENTES-IA-VS-IA-AGENTICA.md)
- [Info_010 — Gartner e cancelamento de projetos de IA agêntica](docs/logs/2026-10-14-INFO-010-GARTNER-CANCELAMENTO-PROJETOS-IA-AGENTICA.md)
- [Info_011 — Jailbreak de IA](docs/logs/2026-10-14-INFO-011-JAILBREAK-IA.md)
- [Info_012 — Quando Agentes de IA Formam Sociedades](docs/logs/2026-10-14-INFO-012-AGENTES-FORMANDO-SOCIEDADES.md)
- [Info_013 — An Alien Mind](docs/logs/2026-10-14-INFO-013-AN-ALIEN-MIND.md)
- [Info_014 — Quando a IA Começa a Construir a Si Mesma](docs/logs/2026-10-14-INFO-014-WHEN-AI-STARTS-BUILDING-ITSELF.md)
- [Info_017 — Reduzir 70% do Custo com LLMs](docs/logs/2026-10-28-INFO-017-LLM-COST-REDUCTION.md)

## Perfis de pesquisa e distribuição

- [Repositório SGAEIA](https://github.com/aridiosilva/SGAEIA)
- [ORCID](https://orcid.org/0009-0008-2411-6995)
- [Google Scholar](https://scholar.google.com/citations?user=rPn5O48AAAAJ)
- [Zenodo](https://zenodo.org/search?q=metadata.creators.person_or_org.name%3A%22Silva%2C%20Aridio%22)
- [Comunidade SGAEIA no Zenodo](https://zenodo.org/communities/sgaeia)
- [Academia.edu](https://independent.academia.edu/AridioSilva)
- [Medium](https://medium.com/@aridiosilva)
- [DEV Community](https://dev.to/aridiosilva)
- [LinkedIn](https://www.linkedin.com/in/aridio-silva-74997111/)

## Manutenção do registro

Quando a homepage for alterada, atualize primeiro o log detalhado correspondente e, em seguida, reconcilie este README consolidado quando a mudança afetar materialmente a estrutura pública, o fluxo de publicação, a descoberta, a segurança, a acessibilidade ou o estado atual registrado.
