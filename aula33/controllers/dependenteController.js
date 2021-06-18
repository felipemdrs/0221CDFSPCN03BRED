const models = require('../models')
const { Op } = require('sequelize')

module.exports.criarDependente = (async (req, res) => {
    const dependente = req.body

    const pessoa = await models.Pessoa.findOne({ where: { cpf: dependente.cpfTitular } })

    if (!pessoa) {
        return res.render('criarDependente', {
            error: 'Titular não encontrado'
        })
    }

    dependente.idPessoas = pessoa.id

    await models.Dependente.create(dependente)
    res.send(201)
})

module.exports.paginaCriarDependente = (async (req, res) => {
    res.render('criarDependente', {error: null})
})