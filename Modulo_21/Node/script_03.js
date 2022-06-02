let fs = require('fs')

let args = process.argv.slice(2)

let fileName = args[0]


fs.readFile(fileName, "UTF8", (error, data) => {
    if (error) throw error

    fs.writeFile(fileName + "_Uppercase", data.toUpperCase(), (error) => {
        if (error) throw error
        console.log("Arquivo gerado com sucesso")
    })
})



/* 
Apagar arquivo 
fs.unlink
*/ 

// fs.appendFile('teste.txt', ' \n OK', function(error){
//     if (error) {
//         throw erro
//     } else {
//         console.log("Arquivo Atualizado com sucesso")
//     }

// })

// fs.rename('teste.txt', ' \n OK', function(error){
//     if (error) {
//         throw erro
//     } else {
//         console.log("Arquivo Atualizado com sucesso")
//     }

// })

// fs.readFile('Node.txt', 'UTF8', function(error, data){
//     if (error) {
//         throw erro
//     } else {
//         console.log(data)
//     }

// })