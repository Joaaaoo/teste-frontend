document.addEventListener("DOMContentLoaded", () => {
  async function fetchResults() {
    const response = await fetch("http://localhost:3000/results"); // API para resultados
    const data = await response.json();

    document.getElementById(
      "result-1"
    ).innerText = `Resultado da Questão 1: ${data.questao1}`;

    document.getElementById(
      "result-2"
    ).innerText = `Resultado da Questão 2: ${data.questao2}`;

    document.getElementById("result-3").innerHTML = `
      <strong>JSON:</strong><br>
      Menor Valor: ${data.questao3.json.menorValor}<br>
      Maior Valor: ${data.questao3.json.maiorValor}<br>
      Média Mensal: ${data.questao3.json.mediaMensal}<br>
      Dias Acima da Média: ${data.questao3.json.diasAcimaDaMedia}<br>
      <br>
      <strong>XML:</strong><br>
      Menor Valor: ${data.questao3.xml.menorValor}<br>
      Maior Valor: ${data.questao3.xml.maiorValor}<br>
      Média Mensal: ${data.questao3.xml.mediaMensal}<br>
      Dias Acima da Média: ${data.questao3.xml.diasAcimaDaMedia}
    `;

    const percentuais = Object.entries(data.questao4)
      .map(([estado, percentual]) => `${estado}: ${percentual}`)
      .join("<br>");
    document.getElementById(
      "result-4"
    ).innerHTML = `Resultado da Questão 4:<br>${percentuais}`;

    document.getElementById(
      "result-5"
    ).innerText = `Resultado da Questão 5: ${data.questao5}, Texto de input: 'exemplo'.`;
  }

  fetchResults().catch((err) => {
    console.error("Erro ao buscar os resultados:", err);
    alert("Não foi possível carregar os resultados.");
  });
});
