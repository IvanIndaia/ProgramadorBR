/* ============= FILTER =============

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]

let jogadores = [
    novoAluno("Ivan", 23),
    novoAluno("Igor", 45),
    novoAluno("Michel", 29),
    novoAluno("Maria", 35)
]

// console.log(alunos)

// for (let aluno of alunos) {
//     if(aluno.idade < 30){
//             console.log(aluno.nome)
//     }
// }

function temMenosde30(aluno) {
    return aluno.idade < 30
}

function temMaisde30(aluno) {
    return aluno.idade > 30
}

// let alunosMenor30 = alunos.filter(temMaisde30)

// console.log(alunosMenor30)

function filtro(callback) {

    let alunosFiltrados = []
    for (let aluno of this){
        if (callback(aluno)){
            alunosFiltrados.push(aluno)
        }
    }
    return alunosFiltrados
}

alunos.filtro = filtro
jogadores.filtro = filtro

console.log(alunos.filter(temMaisde30))
console.log(jogadores.filtro(temMaisde30)) //Precisa da função filtro

*/

/* ============= MAP =============

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("José", 45),
    novoAluno("Marcia", 29),
    novoAluno("João", 35)
]


// function nomeIdade(aluno) {
    function alunoDaqui5anos(aluno) {
    // return aluno.nome + " tem " + aluno.idade + " anos"
    return { 
        nome: aluno.nome,
        idade: aluno.idade + 5
    }
}

// console.log(alunos.map(nomeIdade))
console.log(alunos.map(alunoDaqui5anos))

*/

/* ============= VALOR VS REFERÊNCIA =============

let alunoA = {nome: "Igor", idade: 15}

let alunoB = Object.assign({}, alunoA)

alunoB.idade = 42
*/


/* ============= SPREAD OPERATOR =============

var pessoa = {
    name: "José da Silva",
    idade: 72
}

var contato = {
    telefone: 997487154 ,
    email: "josesilva@gmail.com"
}

var copia = {...pessoa, ...contato}

copia.idade = 88

console.log(pessoa)
console.log(copia)

*/

/* ============= DESESTRUTURANDO UM OBJETO =============

var aluno = {
    matricula: 30030,
    nome: "Ivan Alex",
    telefone: 19974112336,
    cidade: "Salto"
}

// var {matricula, nome, telefone} = aluno

// console.log("Nome: "+ nome + 
//             " - Matricula: " + matricula +
//             " Tel: "+ telefone)

//-----------------------------

// var {...copia} = aluno
// copia.matricula = 68741

// console.log(copia)
// console.log(aluno)

//-----------------------------

// const {matricula, nome, ...restante} = aluno
// console.log(nome)

var aluno1 = {
    matricula: 30198,
    nome: "Daniel Vieira",
    telefone: 11974128574,
    cidade: "Salto"
}

var alunos = [aluno, aluno1]

var [alex, vieira] = alunos

console.log(alex)

*/

// ============= REDUCE =============

function novoAluno(nome, idade) {
    return { nome, idade }
}

let alunos = [
    novoAluno("Mario Sérgio", 27),
    novoAluno("José Maria", 31),
    novoAluno("Marcia Meneguel", 1),
    novoAluno("João Pedro", 6)
]

function idadeDaTurma(total, aluno) {
    return total + aluno.idade
}

console.log(alunos.reduce(idadeDaTurma, 0))





