// Questão 5: Inverter caracteres de uma string
function questao5() {
  function inverterString(str) {
    let invertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
      invertida += str[i];
    }
    return invertida;
  }

  // Teste
  const texto = "Exemplo"; // Substitua por qualquer string desejada
  console.log("Questão 5 - String invertida:", inverterString(texto));
}

module.exports = questao5;
