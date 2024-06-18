const express = require('express')
const router = express.Router()
const cargoController = require('../controllers/cargoController')

router.post('/', cargoController.createCargosController)
router.get('/', cargoController.findAllCargosController)
router.delete('/:id/:eleicaoid', cargoController.deleteFindByIdCargo)
router.patch('/', cargoController.updateByIdCargoController)

module.exports = router