const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função assíncrona para ler uma linha de entrada
exports.readLineAsync = async function (question) {
  return new Promise((resolve) => {
    rl.question(question, (input) => {
      resolve(Number(input));
    });
  });
};

// Função para fechar a interface de leitura
exports.close = function () {
  rl.close();
};