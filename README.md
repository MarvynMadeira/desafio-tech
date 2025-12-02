📌 Desafio Técnico – Solução em JavaScript

Este repositório contém minha solução para o desafio técnico proposto, dividido em três módulos principais:

Cálculo de comissão de vendedores

Movimentação de estoque

Cálculo de juros diário (2,5%) até data de vencimento

Além disso, os testes automatizados foram desenvolvidos utilizando Jest para garantir a qualidade do código.

🚀 Tecnologias Utilizadas

JavaScript (Node.js): Linguagem principal da solução, visando simplicidade, clareza e uso de módulos ES6 (import/export).

Jest: Framework de testes escolhido para validar o comportamento das funções. Foi utilizado para criar testes unitários cobrindo casos de sucesso e bordas.

📁 Estrutura do Projeto

O projeto foi organizado para separar responsabilidades, facilitando a manutenção e os testes:

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

🧠 Lógica das Funções Implementadas

✅ 1. Função de Comissão (src/comissao.js)

Recebe o nome do vendedor e o valor da venda, aplicando as seguintes regras:

Valor < R$100,00 → não gera comissão (null).

Valor < R$500,00 → comissão de 1%.

Valor ≥ R$500,00 → comissão de 5%.

A função retorna um objeto contendo o vendedor, o valor calculado e uma mensagem formatada.

✅ 2. Função de Movimentação de Estoque (src/movimentacao.js)

Recebe o código do produto, a quantidade e o tipo da operação ("Entrada" ou "Saída").

A função:

Localiza o produto no arquivo de dados (schemas.js).

Soma ou subtrai a quantidade do estoque atual.

Retorna uma mensagem indicando a operação realizada e o saldo atualizado.

✅ 3. Função de Juros (src/juros.js)

Recebe um valor base e uma data de vencimento futura.

A função:

Simula a passagem dos dias a partir de "hoje" até o vencimento.

Aplica juros compostos de 2.5% ao dia.

Retorna a data da simulação e o valor final corrigido.

🧪 Testes Automatizados (Jest)

Para cada função, foram criados arquivos de teste específicos na pasta test/, cobrindo:

✔ Comportamento esperado (Caminho feliz);

✔ Validações de regras de negócio (ex: vendas abaixo de R$100);

✔ Retorno correto das mensagens formatadas;

✔ Precisão nos cálculos decimais (ponto flutuante);

✔ Atualização correta do objeto de estoque em memória.

Como rodar os testes

Instale as dependências:

npm install
yarn add

Execute a suíte de testes:

npm test
yarn test

🎯 Objetivo da Solução

A proposta foi desenvolver uma solução simples, clara e fácil de entender, seguindo as regras descritas no desafio. A estrutura foi modularizada para demonstrar boas práticas de organização de código em JavaScript moderno e conhecimento em arquitetura de software.
