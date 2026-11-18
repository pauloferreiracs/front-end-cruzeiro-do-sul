# Projeto 2 - Interface Express

## Tema

SyphraX — Soluções digitais, automação e inteligência artificial

Landing page de uma empresa fictícia de tecnologia que oferece criação de sites, automações e soluções com inteligência artificial.

## Integrantes

- Paulo Cesar Ferreira Sá
- Vinicius de Souza Nalini

## Turma

2 Semestre, noite

## Como abrir o projeto

1. Abra a pasta `projeto2_interface_express`.
2. Dê dois cliques no arquivo `index.html`.
3. A página abre no navegador (Chrome, Edge ou Firefox). Não precisa instalar nada.

## Estrutura dos arquivos

```
projeto2_interface_express/
├── index.html      -> estrutura da página (HTML5 semântico)
├── README.md       -> esta documentação
├── captura_pagina.png -> captura da página concluída no navegador
└── css/
    └── estilo.css  -> todo o estilo da página
```

A pasta `imagens/` não foi criada porque a página não usa imagens.

## Recursos de CSS utilizados

- **CSS externo:** todo o CSS está em `css/estilo.css`, ligado no HTML com `<link rel="stylesheet" href="css/estilo.css">`.
- **Seletores:**
  - de elemento (`body`, `h2`, `main`, `section`, `label`, `input`, `textarea`);
  - de classe (`.cabecalho`, `.logo`, `.menu`, `.apresentacao`, `.botao`, `.cards`, `.card`, `.formulario`, `.rodape`...);
  - de id (`#contato`);
  - hierárquicos (`.menu a`, `.card h3`, `.apresentacao h2`, `.rodape p`).
- **Cores:** paleta com 4 cores: `#0b1020` (azul bem escuro), `#ffffff` (branco), `#eef0f5` (cinza claro) e `#6a4cf0` (roxo de destaque).
- **Tipografia:** fontes do sistema (`"Segoe UI", Arial, Helvetica, sans-serif`) e `line-height: 1.6` para facilitar a leitura.
- **Modelo de caixa:** `max-width` no `main`, no formulário e no parágrafo da apresentação; `margin`, `padding`, `border` e `border-radius` em cards, botões, menu e campos.
- **Flexbox:** no cabeçalho (logo de um lado e menu do outro), no menu (links lado a lado) e no formulário (campos um embaixo do outro).
- **Grid:** nos três cards (`grid-template-columns: 1fr 1fr 1fr`).
- **Interação:**
  - `:hover` nos links do menu, no botão e nos cards;
  - `:focus` nos links do menu, no botão e nos campos do formulário;
  - `transition` para as mudanças ficarem suaves e `transform: translateY()` para "levantar" o botão e os cards.
- **Responsividade:** `@media (max-width: 768px)`. Em telas pequenas, o cabeçalho fica em coluna, os cards ficam um embaixo do outro e os espaçamentos diminuem.
- **Unidades flexíveis:**
  - `rem` nos tamanhos de fonte;
  - `vw` dentro do `clamp()`;
  - `fr` no Grid;
  - `max-width` para as caixas não passarem de um limite.

## Propriedades novas testadas

Testamos as três propriedades abrindo a página no navegador, mudando os valores no `estilo.css` e comparando o resultado.

### 1. box-shadow

| Item | Registro |
| --- | --- |
| Elemento | `.card` (os três cards de serviços) |
| Finalidade | Dar a sensação de que os cards estão "flutuando" sobre o fundo |
| Primeiro valor | `0 2px 4px rgba(0, 0, 0, 0.1)` |
| Valor alterado | `0 15px 40px rgba(0, 0, 0, 0.5)` |
| Diferença percebida | Com o primeiro valor a sombra quase não aparecia. Com o segundo os cards se destacaram, mas a sombra ficou escura e pesada demais. |
| Resultado final | Escolhemos um meio-termo: `0 8px 20px rgba(11, 16, 32, 0.15)`. A cor da sombra usa o azul-escuro da paleta (`#0b1020`), com transparência. |
| Permaneceu? | **Sim** |

### 2. linear-gradient()

| Item | Registro |
| --- | --- |
| Elemento | `.apresentacao` (fundo da seção inicial) |
| Finalidade | Criar um fundo em degradê com as cores da identidade (azul escuro → roxo) |
| Primeiro valor | `linear-gradient(to right, #0b1020, #6a4cf0)` |
| Valor alterado | `linear-gradient(135deg, #0b1020, #6a4cf0)` |
| Diferença percebida | Com `to right` o degradê era horizontal e o lado esquerdo ficava muito escuro. Com `135deg` ele fica na diagonal e a mudança de cor é mais suave. |
| Resultado final | Mantivemos o `135deg` |
| Permaneceu? | **Sim** |

### 3. clamp()

| Item | Registro |
| --- | --- |
| Elemento | `.apresentacao h2` (título principal da página) |
| Finalidade | Fazer o tamanho do título se adaptar à largura da tela, com um mínimo e um máximo |
| Primeiro valor | `font-size: clamp(1.5rem, 3vw, 2rem)` |
| Valor alterado | `font-size: clamp(1.8rem, 5vw, 3rem)` |
| Diferença percebida | O primeiro valor deixou o título pequeno no computador (parava em 2rem). O segundo deixou o título grande demais: ele quebrou em duas linhas no computador. |
| Resultado final | Usamos `clamp(1.6rem, 4vw, 2.5rem)`: 40px no computador e cerca de 25px no celular |
| Permaneceu? | **Sim** |

As três propriedades ficaram no projeto. O mínimo pedido era duas.

## Prompts utilizados com IA

A IA foi usada como copiloto de aprendizagem a partir de **um prompt principal (prompt mestre)**, único e detalhado, que orientou todo o processo. Em resumo, esse prompt pediu para:

- ler o PDF do professor e seguir os requisitos e critérios de avaliação;
- criar a estrutura HTML semântica (header, nav, main, três sections e footer) com o tema SyphraX;
- estilizar a página com CSS externo em `css/estilo.css`, usando uma paleta de até 4 cores;
- organizar os cards e outras áreas com Flexbox/Grid;
- testar três propriedades novas (`box-shadow`, `linear-gradient()` e `clamp()`), alterando valores e comparando os resultados;
- deixar a página responsiva com `@media`;
- validar os estados `:hover` e `:focus`;
- criar este README;
- fazer uma auditoria final com base nos critérios do professor.

O prompt também pediu um código simples, adequado para quem está começando, e uma explicação do projeto para que pudéssemos entender e apresentar cada parte.

## O que aprendemos

Aprendemos a separar o conteúdo (HTML) da aparência (CSS) usando um arquivo externo. Vimos que as tags semânticas como `header`, `nav`, `main`, `section` e `footer` deixam a página mais organizada e fácil de entender.

Também entendemos melhor o modelo de caixa (margin, padding, border) e como o Flexbox e o Grid facilitam colocar elementos lado a lado. Com `:hover` e `:focus` a página fica mais interativa sem precisar de JavaScript, e com `@media` ela se adapta ao celular.

Por fim, testar as propriedades novas mudando os valores mostrou que pequenos ajustes fazem muita diferença. Uma sombra forte demais, por exemplo, deixa a página pesada.
