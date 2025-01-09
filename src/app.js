const questao1 = require("./scripts/questao1");
const questao2 = require("./scripts/questao2");
const questao3 = require("./scripts/questao3");
const questao4 = require("./scripts/questao4");
const questao5 = require("./scripts/questao5");

async function main() {
  console.log("Questão 1:");
  questao1();

  console.log("\nQuestão 2:");
  questao2();

  console.log("\nQuestão 3:");
  await questao3();

  console.log("\nQuestão 4:");
  questao4();

  console.log("\nQuestão 5:");
  questao5();
}

main();
