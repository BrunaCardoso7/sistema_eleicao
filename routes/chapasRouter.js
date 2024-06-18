const express = require('express')
const router = express.Router()
const chapasControllers = require('../controllers/chapasController')
const candidatosControllers = require('../controllers/candidatoController')

router.post('/', chapasControllers.createChapasController)
router.get('/:id', chapasControllers.findAllChapasByEleicaoController)
router.get('/', chapasControllers.findAllChapasController)
router.get('/:chapaId/candidatos', candidatosControllers.listCandidatosByChapas)
router.delete('/:id/:eleicaoid', chapasControllers.deleteByIdChapaController)  
router.patch('/', chapasControllers.updateByIdChapaController)

module.exports = router