const { Router } = require('express')

const router = Router()
const tasksController = require('../controllers/tasksController')

router.get('', tasksController.list)

module.exports = router