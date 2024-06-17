const express = require('express');
const router = express.Router();
const eleitoresController = require('../controllers/eleitoresController');

router.get("/", eleitoresController.listEleitores)
router.post('/', eleitoresController.createEleitores);
router.delete("/", eleitoresController.deleteEleitor)
router.post("/", eleitoresController.updateEleitor)

module.exports = router;