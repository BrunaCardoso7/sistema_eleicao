const votosModel = require('../models/votosModel')

async function createVotosController (req, res) {
    try {
        const {eleitorId, chapaId, dataHora} = req.body
        //params
        if (!eleitorId || !chapaId || !dataHora) {
            return res.status(400).send({"msg": "Falta dados"})
        }
        const voto = await votosModel.createVoto(eleitorId, chapaId, dataHora)
        return res.status(200).send({"msg": "Voto criada com sucesso", voto})
    } catch (error) {
        throw error
    }
}

async function findAllVotosController (req, res) {
    try {
        const voto = await votosModel.findAllVoto()

        return res.status(200).send({"data": voto})
    } catch (error) {
        throw error
    }
}

async function deleteByIdVotosController (req, res) {
    try {
        const {id} = req.body

        const voto = await votosModel.deleteByIdVoto(id)

        return res.status(200).send({"Deletado com sucesso": voto})
    } catch (error) {
        throw error
    }
}

async function updateByIdVotosController (req, res) {
    try {
        const {eleitorId, chapaId, dataHora,id} = req.body

        const voto = await votosModel.updateVoto(eleitorId, chapaId, dataHora, id)

        return res.status(200).send({"Deletado com sucesso": voto})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createVotosController,
    findAllVotosController,
    deleteByIdVotosController,
    updateByIdVotosController
}