const http = require('http')
const url = require('url')
const fs = require('fs')


function handleFile(req, res, callback) {
    let path = url.parse(req.url).pathname
    let fileName = "." + path

    fs.readFile(fileName, (err, data) => {
        if (err) {

            if (callback) {
                if ( !callback(req, res)) {
                    res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
                    res.end("<h3 style='color:red;'>Página Não Encontrada...</h3>")
                }
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.write(data)
            res.end()
        }
    })
}

function handleResquest(req, res) {

    let path = url.parse(req.url).pathname
    let method = req.method

    console.log(method)

    if (method == 'PUT') {
        res.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8' })
    }

    if (path == "/teste") {
        res.end("Teste")
        return true
    } else {
        return false
    }

}

http.createServer((request, response) => {


    // if (path == "" || path == "/"){
    //     path="/index.html"
    // }
    handleFile(request, response, handleResquest)


    // response.writeHead(200, {'Content-Type': 'application/json'})
    // Content-Type': 'text/plain
    // Content-Type': 'application/json
    // Content-Type': 'text/html
    // response.end(JSON.stringify({ Texto: "<h1>Ola, Mundo!</h1>"}))

}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log("Servidor executando na porta 3000")
    }
})


/*

    GET: Ler algum dado do servidor (Requisitar)
    POST: Enviar algum dado para o Servidor (Gravar)
    PUT: Enviar algum dado para o Servidor (Atualizar)
    DELETE: Deletar algum dado (Apagar)

*/