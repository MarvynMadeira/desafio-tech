import { movimentarEstoque } from "../src/movimentacao.js";
import { estoqueJson } from "../src/lib/schemas.js";

describe("Teste da Função movimentarEstoque", () => {
  test("Deve adicionar estoque (Entrada) - caneta Azul (101)", () => {
    const codigo = 101;
    const qtdInicial = estoqueJson.estoque.find(
      (p) => p.codigoProduto === codigo
    ).estoque;
    const qdtAdicionar = 50;

    const resultado = movimentarEstoque(codigo, qdtAdicionar, "Entrada");

    const produtoAtualizado = estoqueJson.estoque.find(
      (p) => p.codigoProduto === codigo
    );

    expect(produtoAtualizado.estoque).toBe(qtdInicial + qdtAdicionar);
    expect(resultado).toContain(`qtde adicionada: ${qdtAdicionar}`);
  });

  test("Deve remover estoque (Saída) - Lápis preto (104)", () => {
    const codigo = 104;
    const qtdInicial = estoqueJson.estoque.find(
      (p) => p.codigoProduto === codigo
    ).estoque;
    const qdtRemover = 100;

    const resultado = movimentarEstoque(codigo, qdtRemover, "Saída");

    const produtoAtualizado = estoqueJson.estoque.find(
      (p) => p.codigoProduto === codigo
    );

    expect(produtoAtualizado.estoque).toBe(qtdInicial - qdtRemover);
    expect(resultado).toContain(`qtde removida: ${qdtRemover}`);
  });

  test("Deve retornar erro se produto não existe", () => {
    const codigo = 999; // Código inexistente
    const resultado = movimentarEstoque(codigo, 10, "Entrada");

    expect(resultado).toBe("Produto não encontrado");
  });
});
