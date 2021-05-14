// Instalar e importar o bcrypt
const bcrypt = require('bcrypt')

// Cria o hash da senha do usuário
function criptograrSenha(senha) {
    const salt = bcrypt.genSaltSync(10)
    return bcrypt.hashSync(senha, salt)
}

// Verifica se a senha do usuário é valida
// Se o resultador for true ele está autenticado
function login(senha, hash) {
    return bcrypt.compareSync(senha, hash)
}

const cocozinho = criptograrSenha('123')
console.log(login('123', cocozinho))