const express = require('express')
const router = express.Router()
const votosController = require('../controllers/votosController')

router.post('/', votosController.createVotosController)
router.get('/', votosController.findAllVotosController)
router.delete('/', votosController.deleteByIdVotosController)
router.patch('/', votosController.updateByIdVotosController)
module.exports = router