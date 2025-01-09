// Questão 1: Cálculo da variável SOMA
function questao1() {
  let INDICE = 13,
    SOMA = 0,
    K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  }

  console.log("Questão 1 - Valor da SOMA:", SOMA); // Resultado esperado: 91
  return SOMA;
}

module.exports = questao1;
