const express = require('express')
const router = express.Router()
const eleicaoController = require('../controllers/eleicaoController')
const chapasController = require('../controllers/chapasController')
const candidatosController = require('../controllers/candidatoChapaController')
const cargosController = require('../controllers/cargoController')

router.get('/', eleicaoController.findAllEleicaoController)
router.get('/:id', eleicaoController.findByIdEleicaoController)
router.get('/:id/chapas', chapasController.findAllChapasByEleicaoController)
router.get('/:id/cargos', cargosController.findAllCargosByEleicaoController)
router.get('/:id/cargos', cargosController.findAllCargosByEleicaoController)
router.get('/:id/:idchapa/candidatoschapa', chapasController.findAllCandidatosAndCagos)
router.get('/:id/:idchapa/candidatos', chapasController.FindCandidatosInChapas)
router.post('/', eleicaoController.createEleicaoController)
router.delete('/', eleicaoController.deleteByIdEleicaoController)
router.patch('/', eleicaoController.updateByIdEleicaoController)

module.exports = router 