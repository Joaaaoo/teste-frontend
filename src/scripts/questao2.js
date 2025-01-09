// Questão 2: Verificar se um número pertence à sequência de Fibonacci
function questao2() {
  function isFibonacci(num) {
    let a = 0,
      b = 1,
      temp;
    if (num === 0 || num === 1) return true;

    while (b <= num) {
      if (b === num) return true;
      temp = b;
      b = a + b;
      a = temp;
    }
    return false;
  }

  // Teste
  const num = 23; // Substitua por qualquer número desejado
  const resultado = `O número ${num} ${
    isFibonacci(num) ? "pertence" : "não pertence"
  } à sequência de Fibonacci.`;
  console.log(`Questão 2 - ${resultado}`);
  return resultado;
}

module.exports = questao2;
