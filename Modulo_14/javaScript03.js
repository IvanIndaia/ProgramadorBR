let usuarios = ["Adriano", "Marcia", "José"]

function insertUser(nome) {

    let promise = new Promise(function (resolve, reject) {

        setTimeout(() => {
            usuarios.push(nome)
            let error = false

            if (!error){
                resolve()
            }else{
                reject({msg: "Erro de qualquer coisa"})
            }
        }, 10)

    })
    return promise
}

function listUser() {
    console.log(usuarios)
}

// insertUser("Ivan")
//     .then(listUser)
//     .catch((error)=>{
//         console.log(error.msg)
// })

async function executar() {
    await insertUser("Ivan Alex")
    listUser()
}

executar()
