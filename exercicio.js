const { readLineAsync , close } = require('./input-reader');

let idade = '';

async function main() {
  idade = await readLineAsync('Digite sua idade: ');
  close();
}

main();

/*

Desenvolva abaixo uma solução que respeite a seguintes regras:

 - Se a idade for maior que 18, exiba no console com o comando console.log('Pode beber álcool'), 
senão exiba, com o mesmo comando a mensagem 'Não Pode beber álcool';

*/

// Seu código vai aqui


