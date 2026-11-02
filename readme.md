# Finanças App

Aplicação web para **organizar o orçamento mensal** e **simular investimentos com juros compostos**, feita com HTML, CSS e JavaScript puro, sem frameworks e sem back-end.

**Acesse o projeto:** [link do deploy]

![Tela do Finanças App](img/tela.png)

## Funcionalidades

- Cadastro da **renda mensal**
- Cadastro de **despesas** com descrição, valor e categoria
- **Resumo do mês**: renda, total gasto, saldo e percentual da renda comprometida
- **Simulador de investimentos** com valor inicial, aporte mensal, taxa de juros e prazo
- Dados **salvos no navegador** (localStorage): continuam lá depois de fechar a página
- Validação de campos e proteção contra dados corrompidos
- Layout **responsivo**, para celular e computador

## Tecnologias

- HTML5
- CSS3 (variáveis, Grid e media queries)
- JavaScript (DOM, eventos, localStorage e JSON)
- Git e GitHub

## Como rodar localmente

1. Clone o repositório:

```bash
git clone [url do repositório]
```

2. Abra a pasta no VS Code.
3. Abra o `index.html` com a extensão **Live Server** (ou direto no navegador).

Não precisa instalar nada: o projeto não tem dependências.

## Estrutura do projeto

```
app-financas/
├── css/
│   └── style.css      # estilos e layout responsivo
├── js/
│   ├── storage.js     # salvar e ler dados no localStorage
│   ├── finance.js     # cálculos e formatação
│   └── app.js         # liga os formulários e a tela
├── index.html
└── readme.md
```

## O que aprendi

- Separar o código em arquivos por responsabilidade (dados, cálculos e interface)
- Manipular o DOM e tratar eventos de formulário
- Guardar dados com localStorage e JSON
- Validar entradas e lidar com dados inesperados
- Calcular juros compostos mês a mês

## Possíveis melhorias

- Gráfico da evolução do investimento
- Remover uma despesa individualmente
- Histórico por mês