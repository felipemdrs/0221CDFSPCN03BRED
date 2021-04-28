const express = require('express') // Carregou a lib
const app = express() // Criou servidor

const testeController = require('./controllers/testeController')
const alunoController = require('./controllers/alunoController')

app.get('/aprovados', alunoController.aprovados)
app.get('/reprovados', alunoController.reprovados)

app.listen(8080, () => {
    console.log('Estou no ar')
})
