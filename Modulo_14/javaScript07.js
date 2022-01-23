
// let nome = "IVAN ALEX"
let nome = ""

try {

    if(nome == "") {
        throw "O nome não pode ser VAZIO"
    }
    
    console.log(nome)

}catch(erro){

    console.log("Houve um erro: ", erro)

}finally {

    console.log("Boa Noite")
    
}

