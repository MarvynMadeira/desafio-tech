//Função 1: Calculadora de comissão.

export function calcularComissao(vendedor, valor) {
  if (valor < 100) {
    return {
      vendedor,
      comissao: null,
      message: `vendedor: ${vendedor}, comissão: nenhuma`,
    };
  }
  if (valor < 500) {
    const comissao = valor * 0.01;
    return {
      vendedor,
      comissao,
      message: `vendedor: ${vendedor}, comissão: ${comissao}`,
    };
  }

  const comissao = valor * 0.05;
  return {
    vendedor,
    comissao,
    message: `vendedor: ${vendedor}, comissão: ${comissao}`,
  };
}
