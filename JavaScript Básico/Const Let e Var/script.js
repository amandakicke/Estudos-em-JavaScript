var numero1 = 4;
let numero2 = 5;
const numero3 = [6]; //é uma constante, uma vez que atribui um valor, não pode atribuir mais nada. Mas pode criar uma array e adicionar elementos. Também funciona para objetos

numero3.push(3);
numero2 = 7;
//A diferença do let para o var depende do escopo. O let e o const tem escopo local, só existem dentro de um bloco. O var funciona fora dos blocos, é acessível em qualquer lugar, é uma variável global.

console.log(numero1);
console.log(numero2);
console.log(numero3);
