const http = require('http')

http.createServer((request, response) => {

    response.writeHead(200, {'Content-Type': 'application/json'})
    // Content-Type': 'text/plain
    // Content-Type': 'application/json
    // Content-Type': 'text/html
    response.end(JSON.stringify({ Texto: "<h1>Ola, Mundo!</h1>"}))
    
}).listen(3000, (err) => {
    if (err) {
        console.log(err)
    } else{
        console.log("Servidor executando na porta 3000")
    }
})