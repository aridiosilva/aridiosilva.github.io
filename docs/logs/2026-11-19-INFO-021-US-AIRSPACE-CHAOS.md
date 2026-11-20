# Info_021 — US Airspace Chaos / Caos Aéreo nos EUA

Inclusão técnica: 19 de novembro de 2026 (America/Sao_Paulo).
Base inicial: main, ee946e9; árvore limpa, referências locais HEAD e origin/main alinhadas na inspeção.
Estado: inclusão preparada localmente. Stage, commit e push não executados.

## Edições

- EN, padrão e x-default: /infographics/Info_021/.
- PT: /infographics/Info_021/pt/.
- 18 slides PNG 1920 × 1080 por idioma, renderizados a partir de cada PDF original.
- Capas localizadas derivadas do primeiro slide, sem alteração da arte.
- Downloads: us-airspace-chaos-nov-2026-en.pdf e pt/caos-aereo-eua-nov-2026-pt.pdf.
- Textos de LinkedIn fornecidos incorporados integralmente, incluindo a separação entre relatos confirmados e questões ainda sob investigação. Não foi realizada revisão factual externa.
- Período editorial exibido: novembro de 2026. A data de corte de verificação declarada pelos materiais (15/11/2026) não foi tratada como data de publicação.
- SHA-256 EN: 162097604ef7ab6d3cc4fd026d68b606ad03e8f684b74b1d72bd97b9ec137d05.
- SHA-256 PT: b251c88c75616f56ffd21522db876e0c7139dffeea9308d46951db464e9c0bae.

## Integração e preservação do padrão

- Card no início do índice, com capa, título e botão principal apontando para EN, além de botões PT e PDF EN. Mantida a miniatura PT adotada no Info_020; capa principal do Info_020 passa a loading lazy.
- Cabeçalho, hero azul, rodapé editorial, versão 2.0, carrossel e ativos compartilhados mantidos; CSS e JavaScript compartilhados não foram alterados.
- Carregador /assets/analytics-consent.js?v=20261011 exatamente uma vez, propriedade G-MXMJ7Z3LS7, armazenamento negado e CSP restritiva preservados.
- Canonical, hreflang EN/PT/x-default, sitemap, describedby, Open Graph e microdata CreativeWork coerentes com cada edição.
- sitemap.xml: duas URLs novas com capa e alternates; lastmod do índice efetivamente alterado atualizado para 2026-11-19. URLs restantes preservadas.
- llms.txt: edições web e PDFs. robots.txt: comentário datado; diretivas Allow e Sitemap preservadas.
- READMEs EN/PT: inventário atualizado para Info_021 e 83 páginas públicas. A homepage principal já aponta para o índice e não precisou de alteração.

## Validação

- Conferidos visualmente os 36 slides nas folhas de contato EN/PT; sequência 01–18, dimensões, integridade PNG e capas verificadas.
- PDFs com 18 páginas e hashes SHA-256 idênticos aos originais.
- Textos do LinkedIn comparados integralmente; preservados os 20 cards anteriores e seus links.
- Validação estrutural das três páginas, com 205 referências locais conferidas, incluindo capitalização dos caminhos.
- sitemap XML válido, 83 URLs únicas e 83 HTMLs públicos; datas de páginas não alteradas preservadas.
- Índice e EN/PT verificados no navegador interno em 1280, 768 e 320 px: nove combinações sem rolagem horizontal ou sobreposição do título pelo cabeçalho fixo; cores de hero e rodapé preservadas.
- Carrosséis EN/PT: avanço e retorno, Home/End, primeiro/último slide, tela cheia e Escape. A tela cheia cabe na viewport móvel sem deformar a imagem.
- Uma referência ao carregador GA4 compartilhado e um carregador remoto do Google observados em cada página. A implementação canônica mantém os armazenamentos negados.
- Índice e edições EN/PT abertos à direita a partir de http://127.0.0.1:8765/, servindo o repositório local. Override temporário de viewport removido ao terminar.
- git diff --check aprovado antes do fechamento; a conferência é repetida após este registro. Alterações de linha LF/CRLF são apenas informativas.

Backup dos seis arquivos existentes alterados: outputs/backup-before-info021-20261119.zip na pasta desta tarefa.
Comandos de stage, commit e push: outputs/comandos-publicacao-info021.ps1 na pasta desta tarefa; não executados.
Registro de evidência visual: outputs/previa-info021-pt.jpg na pasta desta tarefa.


### Entrega HTTP local e fechamento

- 43 recursos HTTP conferidos integralmente, com resposta 200 e bytes idênticos aos arquivos do repositório: índice, duas páginas, 36 slides, duas capas e dois PDFs.
- Downloads dos dois PDFs também conferidos pelo cliente HTTP nativo, com hashes SHA-256 iguais aos originais.
- A prévia usa um servidor Node local com conexões HTTP persistentes em 127.0.0.1:8765; isso resolveu as transferências interrompidas observadas nos testes de conexões encerradas imediatamente. O helper fica fora do repositório, na pasta de trabalho desta tarefa.
- Nenhum stage, commit ou push executado. Comandos fornecidos para origin/main.
