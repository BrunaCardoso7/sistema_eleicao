const express = require('express')
const router = express.Router()
const candidatoChapaModel = require('../controllers/candidatoChapaController')
const candidatosControllers = require('../controllers/candidatoController')

router.post('/', candidatoChapaModel.createCandidatoChapaController)
router.get('/', candidatoChapaModel.findAllCandidatoChapaController)
router.get('/chapas/:chapaId/candidatos', candidatosControllers.listCandidatosByChapas)
router.delete('/:id', candidatoChapaModel.deleteByIdCandidatoChapaController)
router.patch('/', candidatoChapaModel.updateByIdCandidatoChapaController)

module.exports = router