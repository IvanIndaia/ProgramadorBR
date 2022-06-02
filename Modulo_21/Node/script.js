// console.log("Hello World")

// let a = 200
// let b = 130
// let c = soma(a , b)

// function soma(x, y) {
//     return x + y
// }
// console.log(c)

let cal = require("./calc")


let args = process.argv.slice(2)

// console.log(args)

let a = Number(args[0])
let b = Number(args[1])
let c = ""

if (args[2] == 's') {
    c = cal.soma(a, b)
}else if(args[2] == 'm'){
    c = cal.mult(a,b)
}else {
    c = "Opção Inválida!"
}

console.log(c)



