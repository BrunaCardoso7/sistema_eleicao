const express = require('express');
const router = express.Router();
const candidatoController = require('../controllers/candidatoController');

router.get("/", candidatoController.listCandidatos)
router.post('/', candidatoController.createCandidatos);
router.delete("/", candidatoController.deleteCandidato)
router.patch("/", candidatoController.updateCandidato)

module.exports = router;