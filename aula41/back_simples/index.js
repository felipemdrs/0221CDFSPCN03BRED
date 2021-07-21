const express = require('express')
const cors = require('cors')

const animais = [
    {
        nome: 'Farofa',
        tipo: 'CACHORRO'
    },
    {
        nome: 'Tufa',
        tipo: 'GATO'
    },
    {
        nome: 'Lester',
        tipo: 'GATO'
    },
    {
        nome: 'Caramelo',
        tipo: 'GATO'
    },
    {
        nome: 'Menina',
        tipo: 'GATO'
    },
    {
        nome: 'Barba Branca',
        tipo: 'GATO'
    },
    {
        nome: 'Max',
        tipo: 'CACHORRO'
    },
    {
        nome: 'Mayla',
        tipo: 'CACHORRO'
    },
    {
        nome: 'Farello',
        tipo: 'CACHORRO'
    },
    {
        nome: 'undefined',
        tipo: 'CACHORRO'
    }
]

const app = express()
app.use(cors())

app.get('/buscar', (req, res) => {
    const { query } = req.query

    if (!query) {
        return res.send(animais)
    }

    res.send(animais.filter(animal => {
        return animal.nome.toLowerCase().indexOf(query.toLowerCase()) !== -1
    }))
})

app.listen(3000)