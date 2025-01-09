const { lerJSON, lerXML } = require("../helpers/leituraArquivo");
const { calcularFaturamento } = require("../helpers/calculos");
const path = require("path");

async function questao3() {
  console.log("Iniciando leitura dos arquivos JSON e XML");

  const jsonPath = path.join(__dirname, "../data/faturamento.json");
  const xmlPath = path.join(__dirname, "../data/faturamento.xml");

  const faturamentoJSON = await lerJSON(jsonPath);
  console.log("Leitura do JSON concluída");

  const faturamentoXML = await lerXML(xmlPath);
  console.log("Leitura do XML concluída");

  const resultadosJSON = calcularFaturamento(faturamentoJSON);
  console.log("Cálculo do faturamento JSON concluído");

  const resultadosXML = calcularFaturamento(faturamentoXML);
  console.log("Cálculo do faturamento XML concluído");

  return {
    json: resultadosJSON,
    xml: resultadosXML,
  };
}

module.exports = questao3;
