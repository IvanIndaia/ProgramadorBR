
function novoLivro(titulo, ano) {
    return { titulo, ano }
}

let livros = [
    novoLivro("Padre Pio", 2017),
    novoLivro("Santa Faustina", 2020),
    novoLivro("São Bento", 2021),
    novoLivro("Todos os Santos", 2022),
    novoLivro("Filoteia", 2015),
    novoLivro("Santo Antão", 2022)
]


function antes2020(livros) {
    if (livros.ano < 2020) {
        return {
            titulo: livros.titulo,
            ano: livros.ano
        }
    }
}

function depois2021(livros) {
    return livros.ano > 2021
}

function mediaLivros(total, livros) {
    return total + livros.ano
}

console.log(livros.map(antes2020))
console.log(livros.reduce(mediaLivros, 1))



