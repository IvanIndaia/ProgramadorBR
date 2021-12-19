
/* =================== Primeiro ==========================
var calcMedia = function () {
    return (this.nota1 + this.nota2) / 2
}

var turma = [
    {
        nome: "Igor",
        nota1: 9,
        nota2: 7,
        media: calcMedia
    },
    {
        nome: "Ivan",
        nota1: 4,
        nota2: 9,
        media: calcMedia
    }

]

var aluno = turma[1]
console.log(aluno)
console.log(aluno.media())
*/

/* =================== Segundo ==========================
function criarAluno(nome, n1, n2) {
    return {
        nome: nome,
        nota1: n1,
        nota2: n2,
        media: function () {
            return (this.nota1 + this.nota2) / 2
        }
    }
}

var turma = [
    criarAluno("Ivan Alex", 10, 7),
    criarAluno("João Matheus", 10, 5),
    criarAluno("Alexia Maria", 7, 7),
    criarAluno("Rita Mariana", 9, 7),
    criarAluno("Maria Clara", 9, 8)
]

var aluno = turma[20]

for (var i of turma){
    console.log(i.nome + " - " + i.media())
}
*/
/* é igual ao FOR de cima =================
turma.forEach(function (elemento) {
    console.log(elemento)
})
*/

/* =================== Terceiro ==========================
*/

function aluno(nome, n1, n2) {
    this.nome = nome
    this.nota1 = n1
    this.nota2 = n2

    this.media = function (){
        return (this.nota1 + this.nota2) / 2
    }
}

var a = new aluno("Ivan Alex", 9, 8)
var b = new aluno("Luana Costa", 9, 10)
console.log(a.media())
console.log(b.media())