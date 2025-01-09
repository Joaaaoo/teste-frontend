// Questão 5: Inverter caracteres de uma string
function questao5(texto) {
  function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  }

  // Teste
  const resultado = inverterString(texto);
  console.log("Questão 5 - String invertida:", resultado);
  return resultado;
}

module.exports = questao5;
