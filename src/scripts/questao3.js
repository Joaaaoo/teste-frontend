const { lerJSON, lerXML } = require("../helpers/leituraArquivo");
const { calcularFaturamento } = require("../helpers/calculos");

async function questao3() {
  const faturamentoJSON = await lerJSON("./data/faturamento.json");
  const faturamentoXML = await lerXML("./data/faturamento.xml");

  console.log("Resultados com JSON:");
  console.log(calcularFaturamento(faturamentoJSON));

  console.log("Resultados com XML:");
  console.log(calcularFaturamento(faturamentoXML));
}

module.exports = questao3;
