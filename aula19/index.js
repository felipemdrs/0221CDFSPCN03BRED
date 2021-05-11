const express = require('express') // Carregou a lib
const app = express() // Criou servidor

const alunosController = require('./controllers/alunosController')

app.post('/alunos', alunosController.criar)
app.get('/alunos/list', alunosController.listar)
app.put('/alunos/:id', alunosController.atualizar)
app.delete('/alunos/:id', alunosController.deletar)

// CRUD de Animal

app.listen(8080, () => {
    console.log('listening')
})
