const express = require('express')
const router = express.Router()
const dependenteController = require('../controllers/dependenteController')

router.post('/', dependenteController.criarDependente)
router.get('/', dependenteController.paginaCriarDependente)

module.exports = router