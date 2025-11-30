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

export default { calcularJuros };
