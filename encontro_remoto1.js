// Situação-problema: Codificação de um Sistema de Cadastro de Peças
// A empresa Savinis, focada no desenvolvimento de software de alta performance, contratou você para realizar a programação de um sistema de cadastro de peças, que deverá atender os seguintes requisitos:
//     • Passo 1 - Se a peça possuir um peso superior a 100gramas, pode cadastrar.
//     • Passo 2 - Dada a capacidade de cada caixa, caso a lista de peças seja superior a 10, imprima uma mensagem informando não ter capacidade suficiente.
//     • Passo 3 - Caso a peça tenha um nome com quantidade inferior a 3 caracteres, informe uma mensagem de erro.
// Para criação desse sistema de cadastro, você, enquanto programador(a) responsável, deverá solucionar os seguintes desafios:
// • Aplicar técnicas de programação e ferramentas para desenvolvimento do código.
// • Aplicar linguagem de programação JavaScript para implementação do sistema.

let pecasLista = [
  ["monitor", 400],
  ["mouse", 50],
  ["teclado", 200],
  ["headphone", 100],
];
let cadastro = [];
let l = 0;
for (let k = 0; k < pecasLista.length; k++) {
  //valida peso
  if (pecasLista[k][1] <= 100) {
    console.log("Peso inferior a 100 gramas");
    continue;
  }
  //valida nome
  if (pecasLista[k][0].length < 3) {
    console.log("Nome com quantidade inferior a 3 caracteres");
    continue;
  }
  //nome e peso validados, validar cadastro
  if (cadastro.length > 9) {
    console.log("Limite da caixa excedido");
    break;
  }
  cadastro[l] = pecasLista[k][0];
  l++;
}
console.log(cadastro);
