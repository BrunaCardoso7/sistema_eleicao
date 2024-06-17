const eleicaoModel = require('../models/eleicaoModel')

async function createEleicaoController (req, res) {
    try {
        const {data, local} = req.body
        if (!data || !local ) {
            return res.status(400).send({"msg": "Falta dados"})
        }
        const eleicao = await eleicaoModel.createEleicao(data, local)
        return res.status(200).send({"msg": "eleição criada com sucesso", eleicao})
    } catch (error) {
        throw error
    }
}

async function findAllEleicaoController (req, res) {
    try {
        const eleicoes = await eleicaoModel.findAllEleicao();

        return res.render('eleicao/eleicao', { eleicoes });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function findByIdEleicaoController (req, res) {
    try {    
        const id = req.params.id

        const eleicao = await eleicaoModel.findByIdEleicao(id);
        console.log(eleicao)
        return res.render('eleicao/eleicaoHome', { eleicao });
    } catch (error) {
        res.status(500).send(error.message);
    }
}


async function findChapasByEleiçãoController (req, res) {
    try {    
        const id = req.params.id

        const eleicao = await eleicaoModel.findByIdEleicao(id);
        
        return res.render('eleicao/eleicaoHome', { eleicaoId: id, eleicao });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

async function deleteByIdEleicaoController (req, res) {
    try {
        const {id} = req.body

        const eleicao = await eleicaoModel.deleteByIdEleicao(id)

        return res.status(200).send({"Deletado com sucesso": eleicao})
    } catch (error) {
        throw error
    }
}

async function updateByIdEleicaoController (req, res) {
    try {
        const {id, data, local, inicio, fim} = req.body

        const eleicao = await eleicaoModel.updateEleicao(id, data, local, inicio, fim)

        return res.status(200).send({"Deletado com sucesso": eleicao})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createEleicaoController,
    findAllEleicaoController,
    deleteByIdEleicaoController,
    updateByIdEleicaoController,
    findByIdEleicaoController,
    findChapasByEleiçãoController
}