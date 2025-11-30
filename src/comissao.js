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

export default { calcularComissao };
