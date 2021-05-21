const fs = require('fs')
const path = require('path')

module.exports.cadastar = (usuario) => {
    const usuarios = lerNoDisco()
    usuarios.push(usuario)
    salvaNoDisco(usuarios)
}

module.exports.buscarUsuario = (email) => {
    const usuarios = lerNoDisco()
    return usuarios.find(usuario => usuario.email === email)
}

function salvaNoDisco(dado) {
    const str = JSON.stringify(dado)
    fs.writeFileSync(path.join(__dirname, 'usuario.json'), str)
}

function lerNoDisco() {
    const str = fs.readFileSync(path.join(__dirname, 'usuario.json'))
    const obj = JSON.parse(str)

    return obj
}