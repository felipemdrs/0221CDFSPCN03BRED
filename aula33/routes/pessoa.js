const express = require('express')
const router = express.Router()
const pessoaController = require('../controllers/pessoasController')

router.post('/', pessoaController.criarPessoa)
router.get('/', pessoaController.paginaCriarPessoa)
router.get('/buscar', pessoaController.buscarPessoa)

module.exports = router