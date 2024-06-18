const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');

router.get("/:id", candidatoController.listCandidatos)
router.post('/', candidatoController.createCandidatos);
router.delete("/:id/:eleicaoid", candidatoController.deleteCandidato)
router.patch("/", candidatoController.updateCandidato)

module.exports = router;