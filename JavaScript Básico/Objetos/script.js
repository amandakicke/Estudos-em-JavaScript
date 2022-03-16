//Maneiras de criar objeto

/*var aluno = {
    nome: 'João',
    notas: [7.5, 5.0]
}
console.log(aluno.notas[0]);*/

/* var aluno = {
    nome: 'João',
    notas: [7.5, 5.0]
}

var novaProp = 'sobrenome';

aluno.matricula = 12345;
aluno[novaProp] = 'Oliveira';

console.log(aluno);
*/

/*var aluno = new Object();

aluno.nome = 'Amanda';
aluno.sobrenome = 'Kicke';
aluno.notas = [8, 9];

console.log(aluno)*/

//OBJETOS - MÉTODOS

/*
function calcMedia (){
    return (this.notas[0] + this.notas[1])/2
} 

var aluno = {
    nome: 'Amanda',
    notas: [9, 10],

    media: calcMedia
}

var aluno1 = {
    nome: 'João',
    notas: [5, 8],
    media: calcMedia
}

console.log(aluno.nome);
console.log(aluno.media());

console.log(aluno1.nome);
console.log(aluno1.media());
*/

//OBJETOS CONSTRUTORES

/*function criarAluno(nome, n1, n2){
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function(){
            return(this.nota1 +this.nota2)/2
        }
    }
}


/*function criarAluno(nome, n1, n2){
    this.nome = nome;
    this.nota1 = n1;
    this.nota2 = n2;

    this.media = function media(){
        return (this.nota1 + this.nota2)/2;
    }
}

*/
/*var turma = [
    criarAluno('Igor', 9, 6),
    criarAluno('Amanda', 10, 7),
    criarAluno('Marcela', 8, 7.5)
]

/*var aluno = turma[2];

/*console.log(aluno);
console.log("Sua média é: " + aluno.media());
*/
/*
turma.forEach(function(elemento){
    console.log(elemento);
})

for (var aluno of turma){
    console.log(aluno.nome + ' - ' + aluno.media());
}
*/

//OBJETOS - RESUMO
/* function obj(n, s){
    this.nome = n;
    this.sobrenome = s;
}


var a =  new obj('Amanda', 'Kicke');

console.log(a['nome']);
*/










