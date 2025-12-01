import { calcularComissao } from "../src/comissao.js";
import { vendasJson } from "../src/lib/schemas.js";

describe("Teste da Função calcularComissao", () => {
  const vendas = vendasJson.vendas[0];
  const resultado = calcularComissao(vendas.vendedor, vendas.valor);

  expect(resultado.comissao).toBeCloseTo(60.025); // 5% de 1200.5
  expect(resultado.message).toContain("comissão: 60.03");
});

test("Deve calcular 1% de comissão para vendas < 500 e >= 100. (ex: João Silva - 250.3)", () => {
  const vendas = vendasJson.vendas[7];
  const resultado = calcularComissao(vendas.vendedor, vendas.valor);

  expect(resultado.comissao).toBeCloseTo(2.503); // 1% de 250.3
});

test("Não deve ter comissão para vendas abaixo de 100. (ex: Maria Souza - 90.75)", () => {
  const vendas = vendasJson.vendas[18];
  const resultado = calcularComissao(vendas.vendedor, vendas.valor);

  expect(resultado.comissao).toBeNull();
  expect(resultado.message).toContain("comissão: nenhuma");
});
