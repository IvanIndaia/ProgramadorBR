
// // Selecionando Elementos:

// let lista1 = $("#lista1")

// //lista1.find("a.item2").hide()
// console.log(lista1.children())


// // $("#lista1 > .item2").hide()




//JQuery
let jq = $("#lista1").slideUp(2000).slideDown(900)

console.log($())
console.log(jq)


//JS

let objeto = {
    print10: function() {
        console.log(10)
        return this
    },
    print20: function() {
        console.log(20)
        return this
    }
}

// let eleMesmo = objeto.print10()
eleMesmo.print10().print20().print20().print10()

