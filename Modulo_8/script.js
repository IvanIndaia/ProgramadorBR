// Boolean
// Null
// Undefined
// Number
// String

/* IF - Switch ==========================================
var n1 = parseFloat(prompt("N1: "))
var n2 = parseFloat(prompt("N2: "))

media = (n1 + n2)/2
conceito = ""

if (media >= 9) {
    conceito = "ÓTIMO"
}else if (media >= 8){
    conceito = "BOM"   
}else if (media >= 7){    
    conceito = "REGULAR"
}else if (media >=4) {
    conceito = "RUIM"
}else {
    conceito = "PÉSSIMO"
}
alert("Média: "+ media + "!!! \n" + conceito)

switch(conceito) {
    case "ÓTIMO":
        alert("Excelente, continue assim!")
        break;
    case "BOM":
        alert("Parabéns, continue estudando!")
        break;
    case "REGULAR":
        alert("Estude mais!")
        break;
    case "RUIM":
        alert("Estude mais heim!")
        break;
    case "PÉSSIMO":
        alert("Estude muito, mais muito mesmo!")
        break;
    default:
        alert("Houve um erro!")
        break;
}
*/


/* FOR ======================================================
var num = parseInt(Math.random()*100)
for (var i = 1; i <= num; i++){
    console.log("Executando o FOR pela " + i + " vez.")
}
console.log("ACABOU!")
*/

/* While ====================================================
var num = parseInt(Math.random()*100)
while (num < 80){
    console.log("Número: "+ num)
    num = parseInt(Math.random()*100)

}
console.log("Número Final: "+ num)
console.log("ACABOU!")
*/

/* Array/Vetor =============================================
/*var alunos = new Array("Igor", "José","Ivan")*/
/*
var alunos = ["Igor", "José","Ivan","Joaquina",
"Francisca","Pedro", "Roberta", "Andressa"]

//for (i = 0; i < alunos.length; i++){
//    console.log(alunos[i])
//}


for (var i //in ou of
    of alunos){
    console.log(i)
}
*/

/* Função =================================================
*/
function media(x, y){
    var media = (x + y)/2
    return media
}

function saudacao() {
    return "Hello, World!"
}

var r = media(7,8)
var s = saudacao()
console.log(s)
















