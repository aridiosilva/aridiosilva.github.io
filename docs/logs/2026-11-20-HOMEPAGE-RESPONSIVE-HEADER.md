# Correção do cabeçalho responsivo da homepage

Data técnica: 20 de novembro de 2026 (America/Sao_Paulo).
Base: main, ee946e9. Preservadas todas as alterações locais anteriores do Info_021, incluindo suas páginas, ativos, textos, descobrimento e documentação.

## Problema e correção

- Em uma janela de 992 px, o menu e os controles sem quebra comprimiam a identidade para cerca de 30 px. O subtítulo ficava quase vertical e o cabeçalho atingia 342 px.
- Criada assets/homepage-header.css, carregada somente por index.html após as folhas vigentes, com versão ?v=20261120-1.
- Identidade sem encolhimento, nome mantido em uma linha e subtítulo com quebras entre palavras. Menu e controles reorganizam-se conforme o espaço disponível.
- Preservados cores, tipografia, hover/foco, links, EN/PT/ES/FR/DE, controles de leitura, versão 2.0 e regras compactas móveis. Não foi alterado CSS ou JavaScript compartilhado.
- O script de altura do cabeçalho existente continua medindo o tamanho real para posicionar o conteúdo e as âncoras.
- Data de atualização da homepage ajustada nos cinco idiomas; lastmod da raiz atualizado no sitemap, preservando as demais URLs. READMEs e comentário informativo de robots atualizados.

## Validação

- 45 combinações verificadas no navegador interno: EN/PT/ES/FR/DE em 320, 430, 760, 980, 992, 1024, 1280, 1440 e 1920 px.
- Sem rolagem horizontal, sobreposição de identidade/menu/controles, nome quebrado, subtítulo em coluna estreita ou conteúdo inicial coberto pelo cabeçalho.
- Em EN a 992 px, identidade com aproximadamente 361 px e cabeçalho com 116 px, em comparação aos 30 px e 342 px observados antes da correção.
- Oito links do menu e quatro botões de leitura preservados em todas as combinações; branco e azul do estilo vigente confirmados.
- Fonte ampliada a 20,16 px e leitura fácil testadas em 320 px: sem rolagem horizontal e com compensação correta da altura do cabeçalho. Preferências restauradas para EN, fonte de 16 px e leitura padrão.
- Âncora Research testada: destino permanece visível abaixo do cabeçalho fixo. A variável de altura corresponde ao arredondamento do tamanho real.
- Página e CSS novo entregues com HTTP 200 e bytes idênticos ao repositório.
- Comparação integral do HTML confirmou apenas a nova referência CSS e as datas atualizadas; demais textos, links, scripts e estilos preservados. Sitemap continua com 83 URLs únicas; somente lastmod da raiz mudou.
- Os 42 arquivos da pasta Info_021 e seu índice, llms.txt e log anterior permanecem idênticos à entrega já preparada.
- Override de viewport removido e homepage corrigida aberta à direita.
- Evidências na pasta outputs desta tarefa: homepage-header-corrigido.jpg e homepage-header-celular-320.jpg.
- Backup anterior: outputs/backup-before-header-20261120.zip nesta tarefa. Comandos atualizados em outputs/comandos-publicacao-homepage.ps1 e no arquivo anterior comandos-publicacao-info021.ps1.
- git diff --check repetido no fechamento; nenhum stage, commit ou push executado.

Alterações locais. Nenhum stage, commit ou push executado.
