
// Carne: 400gr/pessoa - Acima de 6horas 650gr/pessoa
// Cerveja: 1200ml por pessoa - Acima de 6horas 2.000ml
// Refrigerante/Água: 1000ml por pessoa - Acima de 6horas 1.500ml

// Crianças valem por 1/2 pessoa

let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {
    console.log("Calculando")   

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value

    let qtdTotalCarne = carnePP(duracao) * adultos + 
        (carnePP(duracao) * criancas / 2)

    let qtdTotalCerveja = cervejaPP(duracao) * adultos

    let qtdTotalRefri = refriAguaPP(duracao) * adultos + 
    (refriAguaPP(duracao) * criancas / 2)

    resultado.innerHTML = `<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefri / 1000)} L de Água e Refri</p>`

}

function carnePP(x) {
    if (x >= 6){
        return 650
    }else {
        return 400
    }
}

function cervejaPP(x) {
    if (x >= 6){
        return 2000
    }else {
        return 1200
    }
}

function refriAguaPP(x) {
    if (x >= 6){
        return 1500
    }else {
        return 1000
    }
}