
# Teste Frontend

Este projeto contém scripts para resolver questões específicas e calcular faturamento a partir de arquivos JSON e XML.

## Estrutura do Projeto

```
package.json 
README.MD
src/  
  app.js
  public/
    index.html
    main.js
    styles.css
  data/  
    faturamento.json  
    faturamento.xml  
  helpers/  
    calculos.js  
    leituraArquivo.js  
  scripts/  
    questao1.js  
    questao2.js  
    questao3.js  
    questao4.js  
    questao5.js
```

## Pré-requisitos

- Node.js instalado (versão 12 ou superior)
- npm instalado (geralmente vem junto com o Node.js)

## Instalação

1. Clone o repositório para o seu ambiente local.
2. Navegue até o diretório do projeto.
3. Execute o comando abaixo para instalar as dependências:

```sh
npm install
```

## Como Rodar

Para executar o projeto, utilize o comando:

```sh
npm start
```

Este comando irá executar o arquivo `app.js`, que por sua vez, executa todas as questões.

## Scripts

### Questão 1
Calcula a variável **SOMA** a partir de um índice fornecido e imprime o resultado.

### Questão 2
Verifica se um número pertence à sequência de Fibonacci e imprime uma mensagem informando se o número pertence ou não.

### Questão 3
Calcula o faturamento a partir de arquivos JSON e XML. O script calcula o menor valor de faturamento, o maior valor e o número de dias em que o faturamento foi superior à média mensal.

### Questão 4
Calcula o percentual de faturamento por estado a partir dos dados fornecidos no formato JSON.

### Questão 5
Inverte os caracteres de uma string. O usuário pode fornecer a string de entrada, e o script devolverá a string invertida.

## Dados de Faturamento

Os dados de faturamento são armazenados nos arquivos `faturamento.json` e `faturamento.xml`. Estes arquivos contêm informações de faturamento diário de uma distribuidora.

## Helpers

### `leituraArquivo.js`

Contém funções para ler arquivos JSON e XML, convertendo-os para um formato utilizável.

### `calculos.js`

Contém funções para calcular o faturamento a partir dos dados lidos, incluindo o cálculo do menor e maior faturamento, a média mensal e o número de dias com faturamento superior à média.

## Autor

João Antonio Pereira
