import { calcularJuros } from "../src/juros.js";

describe("Testes da Função calcularJuros", () => {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  test("Cenário 1: vencimento daqui a 2 dias (juros compostos de 2.5% ao dia)", () => {
    const dataVencimento = new Date(hoje);
    dataVencimento.setDate(hoje.getDate() + 2);
    const valorOriginal = 100.0;

    // Cálculo esperado:
    // Dia 1: 100 + 2.5% = 102.50
    // Dia 2: 102.50 + 2.5% = 105.0625 -> arredondado 105.06

    const resultado = calcularJuros(valorOriginal, dataVencimento);
    expect(resultado.valorComJuros).toBe(105.06);
  });

  test("Cenário 2: vencimento hoje (sem juros)", () => {
    const dataVencimento = new Date(hoje);
    const valorOriginal = 200.0;

    const resultado = calcularJuros(valorOriginal, dataVencimento);
    expect(resultado.valorComJuros).toBe(200.0);
  });

  test("Cenário 3: Longo prazo, 20 dias de juros", () => {
    const dataVencimento = new Date(hoje);
    dataVencimento.setDate(hoje.getDate() + 20);
    const valorOriginal = 1500.0;

    // Fórmula Juros Compostos: M = C * (1 + i)^t
    // M = 1000 * (1.025)^10
    // M ≈ 1280.08

    const resultado = calcularJuros(valorOriginal, dataVencimento);
    expect(resultado.valorComJuros).toBeCloseTo(2457.92);
  });
});
