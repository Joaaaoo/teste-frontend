const fs = require("fs");
const { parseStringPromise } = require("xml2js");

// Função para ler JSON
async function lerJSON(caminho) {
  const data = fs.readFileSync(caminho, "utf-8");
  return JSON.parse(data);
}

// Função para ler XML
async function lerXML(caminho) {
  const xml = fs.readFileSync(caminho, "utf-8");
  const resultado = await parseStringPromise(xml);

  // A estrutura é diferente, então vamos acessar diretamente
  const dias = resultado.row.dia;
  const valores = resultado.row.valor;

  // Criar o array de faturamento a partir das duas listas
  const faturamento = dias.map((dia, index) => ({
    dia: parseInt(dia, 10),
    valor: parseFloat(valores[index]),
  }));

  return faturamento;
}

module.exports = { lerJSON, lerXML };
