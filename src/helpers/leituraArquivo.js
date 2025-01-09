const fs = require("fs");
const { parseStringPromise } = require("xml2js");

async function lerJSON(caminho) {
  const data = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(data);
}

async function lerXML(caminho) {
  const xml = fs.readFileSync(caminho, "utf-8");
  const resultado = await parseStringPromise(xml);

  // Adaptar para o formato correto do XML
  const faturamento = resultado.faturamento.row.map((item) => ({
    dia: parseInt(item.dia[0], 10),
    valor: parseFloat(item.valor[0]),
  }));

  return faturamento;
}

module.exports = { lerJSON, lerXML };
