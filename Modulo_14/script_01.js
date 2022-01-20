//STRICT MODE
//--------------
// "use strict"
// // x = 8

// function imprimir() {
//     x = 7
//     console.log(x)
// }

// imprimir()
// console.log(x)


//THIS E BIND
//--------------
// function speakGeneric() {
//     console.log(this.sound)
// }

// let dog = {
//     sound: "Au Auuuu",
//     speak: speakGeneric
// }

// let cat = {
//     sound: "Miauuuu",
//     speak: speakGeneric
// }

// let binderFunction = speakGeneric.bind(dog)

// dog.speak()
// cat.speak()

//ARROW FUNCTIONS
//--------------

let dobro = x => 2 * this.x

// let dobro = function() {
//     return 2 * this.x
// }

let numero = {
    x: 17,
    d: dobro
}

console.log(numero.d())