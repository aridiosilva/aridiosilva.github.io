# Log de mudanças — Info_002: Modelagem de Ameaças em IA

Data: 12 de outubro de 2026  
Repositório: `C:\Users\as294\aridiosilva.github.io`  
Site público: `https://aridiosilva.com/`

## Objetivo

Incluir o segundo infográfico bilíngue da homepage, preservando a estrutura, o estilo, a acessibilidade, a medição de audiência, a descoberta e o fluxo Git adotados no `Info_001`.

## Fontes recebidas

- PDF inglês: `Infografico_Threat_Modeling_in_AI_Aridio_Silva_11OUT2026_EN.pdf`.
- Texto de publicação inglês: `Infogafico_Threat Modeling in AI_AridioSilva_11OUT2026_EN.txt`.
- PDF português: `Infografico_Modelagem_de_Ameacas_em_IA_Aridio_Silva_11OUT2026_PT.pdf`.
- Texto de publicação português: `Infografico_Modelagem_de_Ameacas_em_IA_AridioSila_11OUT206_PT.md`.
- Data de publicação confirmada pelo autor: 11 de outubro de 2026.

Os PDFs possuem 32 páginas, proporção 16:9 e dimensões internas de 960 × 540 pontos. Cada página foi renderizada em PNG com 1920 × 1080 pixels.

## Estrutura criada

```text
infographics/Info_002/
├── index.html
├── threat-modeling-in-ai-en.pdf
├── assets/
│   └── slide-01.png ... slide-32.png
└── pt/
    ├── index.html
    ├── modelagem-de-ameacas-em-ia-pt.pdf
    └── assets/
        └── slide-01.png ... slide-32.png
```

## Mudanças realizadas

### Páginas EN e PT

- Criadas páginas bilíngues a partir da estrutura funcional do `Info_001`.
- Preservados CSP, política de referrer, Analytics cookieless, fontes e folhas de estilo compartilhadas.
- Configurados canonical e alternates recíprocos `en`, `pt-BR` e `x-default`.
- Configurado o carrossel compartilhado com `data-slide-count="32"`.
- Mantidos os controles de tela cheia, abertura e download dos PDFs.
- Incluídos títulos, metadados, autoria, data, total de slides e textos de publicação localizados.
- Normalizado, com autorização do autor, o trecho corrompido `Pamp; D by AI` para `AI-driven R&D` na edição inglesa.
- Substituído o redirecionador abreviado do ORCID pelo endereço canônico `https://orcid.org/0009-0008-2411-6995`.

### Índice de infográficos

- Adicionado o card `Infographic 002` no início da grade.
- Mantida a primeira capa visível com carregamento prioritário.
- Alterada a capa do `Info_001` para `loading="lazy"` e `decoding="async"`.
- Incluídos links para EN, PT e PDF inglês.

### Índice de publicações

- Adicionada a opção `Infographics` ao header de `publications.html`.
- Reutilizados os estados compartilhados de hover e foco visível já definidos em `assets/publications.css`.
- Marcada a opção `Publications` com `aria-current="page"`.

### Descoberta e robôs

- `sitemap.xml`: adicionadas as URLs EN e PT, alternates e imagens de capa.
- `llms.txt`: adicionadas as páginas e os PDFs dos dois idiomas com descrições factuais.
- `robots.txt`: preservados `Allow: /` e a diretiva do sitemap; atualizado o comentário informativo da inclusão do `Info_002`.

### Estilos e scripts compartilhados

- Reutilizados `assets/publications.css`, `assets/infographics.css` e `assets/infographics.js` sem criar CSS ou JavaScript exclusivo.
- Preservadas as alterações locais preexistentes no overlay responsivo do carrossel e seus sufixos de cache.
- Localizado o texto alternativo dinâmico dos slides em português e elevado o cache do JavaScript compartilhado para `20261012-3` em todas as páginas de infográficos.

## Estado preexistente preservado

Antes desta inclusão, o repositório já possuía alterações locais não commitadas em estilos, JavaScript, `Info_001`, índice, `sgaeia.html` e documentos de continuidade. Nenhuma dessas alterações foi descartada ou redefinida.

Uma cópia restaurável dos arquivos envolvidos foi criada fora do repositório antes da implementação.

## Validações

- [x] 32 imagens EN contra 32 páginas do PDF.
- [x] 32 imagens PT contra 32 páginas do PDF.
- [x] PDFs copiados sem alteração de hash.
- [x] Dimensões 1920 × 1080 em todos os PNGs.
- [x] `node --check assets/infographics.js`.
- [x] XML de `sitemap.xml` válido.
- [x] Canonical e `hreflang` recíprocos.
- [x] Analytics presente nas páginas EN/PT.
- [x] Links locais e arquivos referenciados existentes.
- [x] Carrossel, teclado, setas condicionais e overlay verificados.
- [x] Desktop e viewport estreita de 360 px inspecionados, sem rolagem horizontal.
- [x] Header de `publications.html` com link `Infographics`, hover e foco visível.
- [x] `git diff --check`.

O navegador local não apresentou mensagens de erro ou aviso durante a revisão das páginas EN/PT e do índice.

## Git

O assistente não executou `git add`, `git commit` ou `git push`. Essas ações permanecem sob controle do usuário.
