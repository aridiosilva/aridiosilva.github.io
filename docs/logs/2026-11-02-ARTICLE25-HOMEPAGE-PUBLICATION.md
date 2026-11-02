# Homepage — integração do Artigo 25 — 2 de novembro de 2026

**Responsável:** Aridio Silva — Independent Researcher, Brazil

**Escopo:** publicação web do pacote público aprovado, EN padrão e PT, cards, descoberta e documentação

**Classificação:** PUBLIC — registro operacional de publicação; sem mudança normativa de arquitetura

**Data editorial:** 1º de novembro de 2026; **data da integração:** 2 de novembro de 2026

## Identidade e fontes

- EN: *Single-Turn and Multi-Turn Interactions in Frontier Generative AI Models (LLMs)*.
- PT: *Interações de Turno Único e de Múltiplos Turnos em Modelos de AI Generativa de Fronteira (LLMs)*.
- Subtítulo: *State, cost, reliability, security, and governance* / *Estado, custo, confiabilidade, segurança e governança*.
- DOI `10.5281/zenodo.23867630`, versão `1.0`, CC BY 4.0; autor Aridio Silva, ORCID `0009-0008-2411-6995`.
- Fonte editorial: masters e imagens do pacote público `ARTICLE_025`, sem alteração dos originais. Não foram publicados materiais de validação editorial interna ou arquivos privados do projeto.
- API pública do Zenodo consultada em 2 de novembro: título, data `2026-11-01`, DOI, autor, versão e licença confirmados. O título EN curto segue o registro publicado; os temas do título longo dos metadados locais foram preservados no subtítulo e na descrição. O título web PT usa o token obrigatório `AI`; o PDF original foi mantido sem alteração.
- As URLs fornecidas de Medium, DEV.to e Academia.edu foram preservadas. O card usa o registro público do Zenodo e mantém `/uploads/23867630` como referência adicional, sem o confundir com a fonte persistente de acesso.

## Páginas e ativos

- `publications/artigo25/index.html` e `publications/artigo25/pt/index.html`: texto integral, resumo, sumário com âncoras, bibliografia navegável, perfis, continuidade da série, citação, canais e downloads.
- `assets/article25/{en,pt}/`: 31 JPEGs originais por idioma — capa, sete figuras incluindo cronologia, seis equações e dezessete tabelas em imagem. Os visuais podem ser abertos em tamanho integral; os dados tabulares permanecem no formato de imagem do pacote fornecido, sem inventar transcrições.
- `assets/article25/article25-en.pdf` e `article25-pt.pdf`: PDFs originais de 30 páginas, preservados byte a byte.
- `.gitattributes`: somente `assets/article25/**` marcado como binário, evitando normalização de fim de linha e tratamento dos PDFs como texto pelo Git.
- `index.html`: um card com capa em Publications e um bloco em Writing, no topo, numeração subsequente ajustada e tradução do novo conteúdo EN/PT/ES/FR/DE.
- `publications.html`: card com capa, EN como destino principal e PT, Zenodo, DEV.to, Academia.edu, Medium e referência do upload.
- `sitemap.xml`, `llms.txt` e `robots.txt`: duas URLs novas, alternates recíprocos, EN `x-default`, capas, PDFs, canais e comentário datado; somente páginas efetivamente alteradas receberam novo lastmod.
- `README.md`, `README.pt-BR.md` e log de continuidade atualizados, inclusive inventário atual de 79 HTMLs e referência ao Info_019 já existente.
- `sgaeia.html` preservada: a organização vigente contém plataformas de publicação; não contém os cards individuais descritos nos registros históricos.

## Integridade, segurança e validação

- Comparação automatizada: preservados 265 blocos do master EN e 264 do PT, incluindo código, legendas, ressalvas e end matter; 56 referências e 31 imagens em cada página.
- Ajuste limitado de perfil: o identificador Google Scholar inconsistente nos masters foi alinhado ao perfil estabelecido no restante da homepage (`rPn5O48AAAAJ`).
- Canonical, três alternates EN/PT/x-default, metadados `citation_*`, Open Graph e JSON-LD `ScholarlyArticle` conferidos. Data de publicação e data de modificação distintas.
- Exatamente um `/assets/analytics-consent.js?v=20261011` no head de cada nova página. GA4 `G-MXMJ7Z3LS7` e armazenamento de Analytics/publicidade negado preservados; nenhuma permissão `unsafe-inline` adicionada à CSP.
- Links locais, imagens, PDFs, IDs e âncoras conferidos; sitemap XML válido com 79 URLs únicas. A contagem de referências significa preservação do pacote editorial, não uma nova auditoria científica das 56 fontes.
- Os dois PDFs foram renderizados integralmente em folhas de contato e conferidos visualmente; metadados e texto extraídos para inspeção. Não foram regenerados.
- Prévia local no repositório da homepage confirmada por HTTP 200; quatro páginas abertas à direita. O diagnóstico do servidor localhost foi registrado no log de continuidade.
- Validação visual: homepage, índice e artigos EN/PT conferidos em 1280 e 320 px (oito combinações), sem rolagem horizontal e sem sobreposição inicial pelo cabeçalho; hero e rodapé azuis preservados. Capa e links do novo card conferidos no navegador. Controle de fonte aumentou de 16 para 17,28 px e retornou a 16 px; leitura fácil e navegação PT→EN testadas.
- Verificação HTTP: 71 recursos retornaram 200, incluindo as quatro páginas, arquivos de descoberta e todos os novos JPEGs/PDFs. Arquivos aplicados comparados byte a byte com o conjunto preparado; imagens originais preservadas. Teste isolado do carregador GA4 confirmou uma única inicialização e os quatro tipos de armazenamento negados.
- `git diff --check` passou. `git fetch origin main` confirmou alinhamento inicial `0/0`, antes do novo commit.

## Hashes preservados

- Master EN: `743640192360041ac57f9af98ba6912bfd056e71947fd8b9830e56a67a3305b3`.
- PDF EN: `2bcbadaed90120a40ec436d9dcbcf5c0e9c839e38ca74f90baa0b952805942d9`.
- Master PT: `d3f1c98dc06c833d4385dbd33363ef2ef194417f7c6cf5d89a699a11379a3d31`.
- PDF PT: `2f6dd5b5727e6e61271e418deeada9df84944a9566e05205db60205e1448b479`.

## Git e publicação

- Estado inicial: branch `main`, HEAD `309a0ef`, working tree limpo.
- Remoto da homepage: `origin`, `https://github.com/aridiosilva/aridiosilva.github.io`.
- Stage, commit e push autorizados explicitamente pelo proprietário. A política do remoto privado SGAEIA_2 não se aplica ao repositório da homepage.
- Commit de implementação: `c3d12f7c2de9a3031a504f7e289cedb1a8d4b1e8` — `feat: publish bilingual Article 25 on single-turn and multi-turn AI`.
- `git push origin main` concluído; `git ls-remote origin refs/heads/main` confirmou o mesmo hash, com working tree limpo após o commit.
- Rodapés de homepage (cinco idiomas) e índice de publicações atualizados para 2 de novembro de 2026, preservando Version/Versão 2.0.
- Esta confirmação operacional é preservada em commit de documentação posterior ao commit de implementação. Não há garantia de indexação por mecanismos de busca decorrente destes metadados.

## Implantação pública verificada

As quatro páginas públicas — homepage, índice e artigo EN/PT — responderam HTTP 200 e contêm o identificador do Artigo 25 após o push. A conferência foi realizada em 2 de novembro de 2026. Os PDFs recuperados do commit Git também foram comparados byte a byte com os originais preservados.
