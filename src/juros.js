//Função 3: Juros diários até o vencimento.

export function calcularJuros(valor, dataVencimento) {
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0); // Zerar horas para comparação apenas de datas

  const vencimento = new Date(dataVencimento);
  vencimento.setHours(0, 0, 0, 0); // Zerar horas para comparação apenas de datas

  if (dataVencimento instanceof Date) {
    vencimento.setTime(dataVencimento.getTime());
    vencimento.setHours(0, 0, 0, 0);
  }
  let valorAtual = valor;
  let dataTemp = new Date(hoje);

  while (dataTemp < vencimento) {
    const jurosDia = valorAtual * 0.025;
    valorAtual = valorAtual + jurosDia;

    dataTemp.setDate(dataTemp.getDate() + 1);

    if (dataTemp.getTime() === vencimento.getTime()) break;
  }

  const valorFormatado = Number(valorAtual.toFixed(2));

  return {
    dataAtual: new Date().toDateString(),
    valorComJuros: valorFormatado,
  };
}
