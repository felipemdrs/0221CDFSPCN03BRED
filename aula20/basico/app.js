const express = require('express') // Carregou a lib
const app = express() // Criou servidor

const alunosRouter = require('./routes/alunosRouter')
const tasksRouter = require('./routes/tasksRouter')

app.use('/alunos', alunosRouter)
app.use('/tasks', tasksRouter)

app.set('view engine', 'ejs')

// CRUD de Animal

app.listen(8080, () => {
    console.log('listening')
})
