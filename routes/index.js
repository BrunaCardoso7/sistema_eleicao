const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const fornecedorRouter = require('./fornecedores');
const cargoRouter = require('./cargosRouter')
const eleicaoRouter = require('./eleicaoRouter')
const chapasRouter = require('./chapasRouter')
const votosRouter = require('./votosRouter')
const candidatoRouter = require('./candidatos');
const eleitorRouter = require('./eleitores');
const candidatoChapaRouter = require('./candidatoChapaRouter');
const eleitoresModel = require('../models/eleitoresModel')

router.get('/', (req, res) => {
    res.render('welcome');
});

router.get('/cadastroEleicao', (req, res) => {
    res.render('eleicao/cadastrarEleicao'); 
});

router.get('/cadastroChapa/:id', (req, res) => {
    const eleicaoId = req.params.id
    
    res.render('eleicao/cadastrarChapa', {eleicaoId});
});

router.get('/cadastroChapa/:id', (req, res) => {
    const eleicaoId = req.params.id
    
    res.render('eleicao/cadastrarChapa', {eleicaoId});
});
router.get('/cadastroCargo/:id', (req, res) => {
    const eleicaoId = req.params.id
    
    res.render('eleicao/cadastrarCargo', {eleicaoId});
});


router.get('/cadastroCandidato/:id', (req, res) => {
    const eleicaoId = req.params.id

    res.render('eleicao/cadastrocandidato', {eleicaoId});
});

router.get('/detailschapa', (req, res) => {
    res.render('eleicao/detalhesChapa');
});

router.get('/mainpage', (req, res) => {
    res.render('votacao/mainPage');
});

router.get('/eleitor', (req, res) => {
    res.render('votacao/eleitoresCadastro');
});

router.get('/updateeleitor/:id', async(req, res) => {

    const eleitorId = req.params.id

    const eleitor = await eleitoresModel.findbyIdEleitor(eleitorId)

    res.render('votacao/updateEleitor', {eleitorId, eleitor});
});

router.get('/liberacao', async(req, res) => {

    const eleitorId = req.params.id

    const eleitores = await eleitoresModel.findAllEleitor()

    res.render('votacao/eleitoresliberacao', {eleitorId, eleitores});
});


router.post('/login', usuarioController.login);
router.get('/welcome', usuarioController.welcome);
router.use('/fornecedores', fornecedorRouter);
router.use('/cargos', cargoRouter);
router.use('/eleicao', eleicaoRouter);
router.use('/chapas', chapasRouter);
router.use('/candidatochapa', candidatoChapaRouter);
router.use('/votos', votosRouter);
router.use('/candidatos', candidatoRouter);
router.use('/eleitores', eleitorRouter);

module.exports = router;
