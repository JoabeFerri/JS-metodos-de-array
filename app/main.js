let livros = []
const apiUrl = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

getBuscarLivros()

async function getBuscarLivros() {
    const resp = await fetch(apiUrl)
    livros = await resp.json()
    console.table(livros)
}