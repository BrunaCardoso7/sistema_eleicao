const candidatoChapaModel = require('../models/candidato_chapaModel')

async function createCandidatoChapaController (req, res) {
    try {
        const {candidatosId, chapaId, cargoId, eleicaoId} = req.body

        if (!candidatosId || !chapaId|| !cargoId) {
            return res.status(400).send({"msg": "Falta dados"})
        } 

        console.log("chegaram até a api", candidatosId, chapaId, cargoId,eleicaoId)

        await candidatoChapaModel.createCandidatoChapa(candidatosId, chapaId, cargoId,eleicaoId)

        return res.redirect(`/eleicao/${eleicaoId}/${chapaId}/candidatos`)
    } catch (error) {
        throw error
    }
}

async function findAllCandidatoChapaController (req, res) {
    try {
        const candidatoChapa = await candidatoChapaModel.findAllCandidatoChapa()

        return res.status(200).send({"data": candidatoChapa})
    } catch (error) {
        throw error
    }
}

async function findCandidatoByEleicaoController (req, res) {
    try {
        const eleicaoId = req.params.id
        const candidatoChapa = await candidatoChapaModel.findAllCandidatoChapa()

        return res.status(200).send({"data": candidatoChapa})
    } catch (error) {
        throw error
    }
}

async function deleteByIdCandidatoChapaController (req, res) {
    try {
        const id = req.params.id

        await candidatoChapaModel.deleteByIdCandidatoChapa(id)

        return res.render('eleicao/chapa')
    } catch (error) {
        throw error
    }
}

async function updateByIdCandidatoChapaController (req, res) {
    try {
        const {id, candidatosId, chapaId, cargoId} = req.body

        const candidatoChapa = await candidatoChapaModel.updateCandidatoChapa(id, candidatosId, chapaId, cargoId)

        return res.status(200).send({"Deletado com sucesso": candidatoChapa})
    } catch (error) {
        throw error
    }
}

module.exports = {
    createCandidatoChapaController,
    findAllCandidatoChapaController,
    deleteByIdCandidatoChapaController,
    updateByIdCandidatoChapaController,
    findCandidatoByEleicaoController
}