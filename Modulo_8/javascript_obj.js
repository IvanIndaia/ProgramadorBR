
/*
var aluno = { nome:"João", notas:[7.5,9.0]}
console.log(aluno)

aluno.matricula = 30030
console.log(aluno)

aluno["sobrenome"] = "Oliveira"
console.log(aluno)
*/

function calcMedia() {
    return (this.notas[0] + this.notas[1]) / 2
}

var aluno = {
    nome: "Ivan Oliveira",
    notas: [9, 8],
    media: calcMedia
}

var aluno1 = {
    nome: "Igor Oliveira",
    notas: [5, 8],
    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media())

console.log(aluno1.nome)
console.log(aluno1.media())

