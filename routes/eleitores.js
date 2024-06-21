const express = require('express');
const router = express.Router();
const eleitoresController = require('../controllers/eleitoresController');

router.get("/", eleitoresController.listEleitores)
router.get("/:id", eleitoresController.listByIdEleitores)
router.post('/', eleitoresController.createEleitores);
router.post('/signin', eleitoresController.loginEleitores);
router.delete("/:id", eleitoresController.deleteEleitor)
router.patch("/:id", eleitoresController.updateEleitor)
router.patch("/voto/:id", eleitoresController.updateAptoVotarEleitor)

module.exports = router;