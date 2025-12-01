import { estoqueJson } from "./lib/schemas.js";

//Função 2: Movimentação no estoque.

export function movimentarEstoque(codigoProduto, quantidade, tipo) {
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
    if (produto.estoque < quantidade) {
      return "Estoque insuficiente";
    }
    produto.estoque -= quantidade;
    return `código do Produto: ${codigoProduto}, qtde removida: ${quantidade}, estoque atual: ${produto.estoque}`;
  }
}
