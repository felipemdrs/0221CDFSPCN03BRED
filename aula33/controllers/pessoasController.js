const models = require('../models')
const { Op } = require('sequelize')

module.exports.criarPessoa = (async (req, res) => {
    const pessoa = req.body

    if (!pessoa.nome || !pessoa.cpf) {
        res.send(400)
    }

    await models.Pessoa.create(pessoa)
    res.send(201)
})

module.exports.paginaCriarPessoa = (async (req, res) => {
    res.render('pessoa')
})

module.exports.buscarPessoa = (async (req, res) => {
    const { nome } = req.query

    const resultados = await models.Pessoa.findAll({
        where: {
            nome: {
                [Op.like]: `${nome}%`
            }
        } 
    })

    res.render('lista', {resultados})
})