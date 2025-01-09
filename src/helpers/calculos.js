function calcularFaturamento(faturamento) {
  const diasComFaturamento = faturamento.filter((dia) => dia.valor > 0);

  const menorValor = Math.min(...diasComFaturamento.map((dia) => dia.valor));
  const maiorValor = Math.max(...diasComFaturamento.map((dia) => dia.valor));

  const totalFaturamento = diasComFaturamento.reduce(
    (acc, dia) => acc + dia.valor,
    0
  );
  const mediaMensal = totalFaturamento / diasComFaturamento.length;

  const diasAcimaDaMedia = diasComFaturamento.filter(
    (dia) => dia.valor > mediaMensal
  ).length;

  return {
    menorValor,
    maiorValor,
    mediaMensal,
    diasAcimaDaMedia,
  };
}

module.exports = { calcularFaturamento };
