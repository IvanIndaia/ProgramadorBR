const http = require('http')
const url = require('url')
const fs = require('fs')


http.createServer((request, response) => {

    let path = url.parse(request.url).pathname

    if (path == "" || path == "/"){
        path="/index.html"
    }
    let fileName = "." + path

    fs.readFile(fileName, (err, data) => {
        if (err){
            response.writeHead(404, {'Content-Type': 'text/html;charset=utf-8'})
            response.end("<h3 style='color:red;'>Página Não Encontrada...</h3>")
        } else {
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(data)
            response.end()
        }
    })
  
    
    // response.writeHead(200, {'Content-Type': 'application/json'})
    // Content-Type': 'text/plain
    // Content-Type': 'application/json
    // Content-Type': 'text/html
    // response.end(JSON.stringify({ Texto: "<h1>Ola, Mundo!</h1>"}))
    
}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else{
        console.log("Servidor executando na porta 3000")
    }
})