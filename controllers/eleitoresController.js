const eleitoresModel = require("../models/eleitoresModel");
const eleicaoModel = require("../models/eleicaoModel")
async function createEleitores(req, res) {
    try {
        const { nome, cpf, endereco, senha } = req.body;
        console.log(nome, cpf, endereco, senha)
        if (!nome || !cpf || !endereco || !senha) {
            return res.status(400).send('Nome, CPF,  endereço e senha são obrigatórios');
        }
        await eleitoresModel.createEleitor(nome, cpf, endereco, senha, aptoAVotar=0);
        
        return res.redirect('/eleitores/')
    } catch (error) {
        console.error('Erro ao inserir eleitor:', error);
        res.render('error', { message: 'Erro ao inserir eleitores', returnLink: '/welcome' });
    }
}
async function loginEleitores(req, res) {
    try {
        const { cpf, senha } = req.body;
        console.log(cpf, senha)
        if (!cpf || !senha) {
            return res.status(400).send('Nome, CPF,  endereço e senha são obrigatórios');
        }

        const eleitor = await eleitoresModel.loginEleitor(cpf, senha);
        const eleicoes = await eleicaoModel.findAllEleicao()
        
        console.log(eleitor)
        return res.render('votacao/votoEleicao', {eleitor, eleicoes})
    } catch (error) {
        console.error('Erro ao inserir eleitor:', error);
        res.render('error', { message: 'Erro ao inserir eleitores', returnLink: '/welcome' });
    }
}
async function listEleitores(req, res) {
    try {
        const eleitores = await eleitoresModel.findAllEleitor();

        return res.render("votacao/eleitores", { eleitores })
    } catch (error) {
        console.error("Erro ao buscar eleitores", error);
        res.render("error", { message: "Erro ao buscar eleitores" })
    }
}

async function deleteEleitor(req, res) {
    try {
        const id = req.params.id; 

        const eleitor = await eleitoresModel.deleteEleitor(id);
        if (!eleitor) {
            res.status(404).send("Eleitor não encontrado!")
        }
        await eleitoresModel.deleteEleitor(id);

        return res.redirect('/eleitores/');
    } catch (error) {
        console.error('Erro ao deletar eleitor:', error);
        res.status(500).send('Erro ao deletar eleitor');
    }
}

async function updateEleitor(req, res) { 
    try {
        const eleitorId = req.params.id;
        const { nome, cpf, endereco, senha, aptoAVotar } = req.body;
        console.log( nome, cpf, endereco, senha, aptoAVotar)

        await eleitoresModel.updateEleitor(nome, cpf, endereco, senha, aptoAVotar);

        return res.redirect('/eleitores/');
    } catch (error){
        console.error('Erro ao editar eleitor:', error);
        res.status(500).send('Erro ao editar eleitor');
    }
}

async function updateAptoVotarEleitor(req, res) { 
    try {
        const eleitorId = req.params.id;
        const {aptoAVotar } = req.body;
        console.log( aptoAVotar)

        await eleitoresModel.updateAptoVotarEleitor(eleitorId, aptoAVotar);

        return res.render('votacao/loginEleitor')
    } catch (error){
        console.error('Erro ao editar eleitor:', error);
        res.status(500).send('Erro ao editar eleitor');
    }
}

async function listByIdEleitores () {
    try {
        const eleitorId = req.params.id;

        await eleitoresModel.findbyIdEleitor( eleitorId);

        return res.redirect('/eleitores/');
    } catch (error){
        console.error('Erro ao editar eleitor:', error);
        res.status(500).send('Erro ao editar eleitor');
    }
}
module.exports = {
    createEleitores,
    listEleitores,
    deleteEleitor,
    updateEleitor,
    listByIdEleitores,
    updateAptoVotarEleitor,
    loginEleitores
};