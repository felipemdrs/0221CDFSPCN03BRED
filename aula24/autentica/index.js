const express = require('express')
const app = express()

const session = require('express-session')

// Habilitar sessao no express
app.use(session({
    secret: 'senha_forte'
}))

app.get('/', (req, res) => {
    res.send('Hello')
})


app.get('/autentica', (req, res) => {
    // Faz o login com bcrypt
    // req.body.senha, req.body.email
    req.session.estaAutenticado = true
    req.session.userId = 1

    res.send('Hello')
})

// Tudo abaixo daqui necessita de autenticação
app.use((req, res, next) => {
    if (!req.session.estaAutenticado) {
        next('Não autenticado')
    } else {
        next()
    }
})

// Requer autenticação
app.get('/listarAlunos', (req, res) => {
    res.send('Lista alunos')
})

// Requer autenticação
app.get('/alterarSenha', (req, res) => {
    res.send('Senha alterada ' + req.session.userId)
})

app.listen(3000, () => {
    console.log('Listening on 3030')
})