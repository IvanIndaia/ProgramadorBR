
/*function obj(n, s){
    return {nome: n, sobrenome: s}
}


var a = {
    nome: "Ivan Alex",
    sobrenome: "Oliveira",
    idade: 31
}

console.log(a)
*/


/*
function obj(n, s){
    return {nome: n, sobrenome: s}
}

var a = obj("Ivan Alex", "Oliveira")

console.log(a)
*/


function obj(n, s){
   this.nome = n
   this.sobrenome = s
}

var a = new obj("Ivan Alex", "Oliveira")

console.log(a)