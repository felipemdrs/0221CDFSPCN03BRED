const { Router } = require('express')

const router = Router()
const alunosController = require('../controllers/alunosController')

router.post('', alunosController.criar)
router.get('/list', alunosController.listar)
router.put('/:id', alunosController.atualizar)
router.delete('/:id', alunosController.deletar)

module.exports = router