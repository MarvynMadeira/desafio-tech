import schemas from "./schemas";

//Função 1: Calculadora de comissão.

function calcularComissao(vendedor, valor) {
  if (valor < 100) {
    return {
      vendedor,
      commissao: null,
      message: `vendedor: ${vendedor}, commissão: nenhuma`,
    };
  }
  if (valor < 500) {
    const comissao = valor * 0.01;
    return {
      vendedor,
      comissao,
      message: `vendedor: ${vendedor}, commissão: ${comissao}`,
    };
  }

  const comissao = valor * 0.05;
  return {
    vendedor,
    comissao,
    message: `vendedor: ${vendedor}, comissao: ${comissao}`,
  };
}

//Função 2: Movimentação no estoque.

function movimentarEstoque(codigoProduto, quantidade, tipo) {
  const produto = estoqueJson.estoque.find(
    (p) => p.codigoProduto === codigoProduto
  );

  if (!produto) {
    return "Produto não encontrado";
  }

  if (tipo === "Entrada") {
    produto.estoque += quantidade;
    return `código do Produto: ${codigoProduto}, qtde adicionada: ${quantidade}, estoque atual: ${produto.estoque}`;
  } else {
    produto.estoque -= quantidade;
    return `código do Produto: ${codigoProduto}, qtde removida: ${quantidade}, estoque atual: ${produto.estoque}`;
  }
}

//Função 3: Juros diários até o vencimento.
function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  const vencimento = new Date(dataVencimento);

  let valorAtual = valor;
  let dataTemp = new Date(hoje);

  while (dataTemp < vencimento) {
    const jurosDia = valorAtual * 0.025;
    valorAtual = valorAtual + jurosDia;

    dataTemp.setDate(dataTemp.getDate() + 1);

    if (dataTemp.toDateString() === vencimento.toDateString()) break;
  }

  return {
    dataAtual: hoje.toDateString(),
    valorComJuros: valorAtual,
  };
}

export default { calcularComissao, movimentarEstoque, calcularJuros };
