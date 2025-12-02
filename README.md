# 📌 Desafio Técnico – Solução em JavaScript

Este repositório contém a solução para o desafio técnico proposto, dividida em três módulos principais:

- **Cálculo de comissão de vendedores**
- **Movimentação de estoque**
- **Cálculo de juros diário (2,5%) até a data de vencimento**

Além disso, os testes automatizados foram desenvolvidos utilizando **Jest** para garantir a qualidade do código.

---

# 🚀 Tecnologias Utilizadas

| Tecnologia | Descrição |
|-----------|-----------|
| **JavaScript (Node.js)** | Linguagem principal da solução, utilizando sintaxe moderna ES6 (import/export). |
| **Jest** | Framework de testes unitários utilizado para validar o comportamento das funções. |

---

# 📁 Estrutura do Projeto
```bash
/
├── src/
│ ├── lib/
│ │ └── schemas.js # Base de dados (JSON) de vendas e estoque
│ ├── comissao.js # Lógica de cálculo de comissão
│ ├── juros.js # Lógica de cálculo de juros diários
│ └── movimentacao.js # Lógica de movimentação de estoque
├── test/
│ ├── comissao.test.js # Testes unitários para comissões
│ ├── juros.test.js # Testes unitários para juros
│ └── movimentacao.test.js # Testes unitários para estoque
└── README.md # Documentação do projeto
````

---

# 🧠 Lógica das Funções Implementadas

## ✅ 1. Função de Comissão (`src/comissao.js`)

Recebe o nome do vendedor e o valor da venda, aplicando as regras:

- **Valor < R$ 100,00:** não gera comissão (`null`)
- **Valor < R$ 500,00:** comissão de **1%**
- **Valor ≥ R$ 500,00:** comissão de **5%**

Retorna um objeto contendo:

- nome do vendedor  
- valor da comissão  
- mensagem formatada  

---

## ✅ 2. Função de Movimentação de Estoque (`src/movimentacao.js`)

Recebe:

- código do produto  
- quantidade  
- tipo de operação: `"Entrada"` ou `"Saída"`

A função:

1. Localiza o produto em `schemas.js`
2. Soma ou subtrai a quantidade no estoque
3. Retorna uma mensagem indicando a operação e o saldo atualizado

---

## ✅ 3. Função de Juros (`src/juros.js`)

Recebe um valor base e uma data futura de vencimento.

A função:

1. Simula a passagem de dias entre “hoje” e o vencimento  
2. Aplica **juros compostos de 2.5% ao dia**  
3. Retorna:
   - data da simulação  
   - valor final corrigido  

---

# 🧪 Testes Automatizados (Jest)

Os testes cobrem:

- ✔ Caminho feliz  
- ✔ Regras de negócio (ex.: vendas abaixo de R$100)  
- ✔ Mensagens formatadas corretamente  
- ✔ Precisão nos cálculos decimais  
- ✔ Atualização correta do estoque em memória  

---

# ▶️ Como Rodar os Testes

Instale as dependências:

```bash
npm install
# ou
yarn install
```

# 🎯 Objetivo da Solução

Criar uma solução simples, clara e modularizada, seguindo boas práticas de organização, testes e arquitetura em JavaScript moderno.
