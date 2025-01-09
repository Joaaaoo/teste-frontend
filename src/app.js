const express = require("express");
const path = require("path");
const questao1 = require("./scripts/questao1");
const questao2 = require("./scripts/questao2");
const questao3 = require("./scripts/questao3");
const questao4 = require("./scripts/questao4");
const questao5 = require("./scripts/questao5");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "../public"))); // Serve os arquivos da pasta public

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

app.get("/results", async (req, res) => {
  try {
    console.log("Iniciando execução das questões");

    const q1 = questao1();
    console.log("Questão 1 concluída");

    const q2 = questao2();
    console.log("Questão 2 concluída");

    const q3 = await questao3();
    console.log("Questão 3 concluída");

    const q4 = questao4();
    console.log("Questão 4 concluída");

    const q5 = questao5("exemplo");
    console.log("Questão 5 concluída");

    res.json({
      questao1: q1,
      questao2: q2,
      questao3: q3,
      questao4: q4,
      questao5: q5,
    });
  } catch (err) {
    console.error("Erro ao calcular os resultados:", err);
    res.status(500).json({ error: "Erro ao calcular os resultados.", err });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
