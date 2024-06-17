const cargosModel = require('../models/cargosModel')

async function createCargosController (req, res) {
    try {
        const {nome, eleicao_id} = req.body

        if(!nome || !eleicao_id) {
            res.send({"msg": "falta dados"})
        }
        
        const cargo = await cargosModel.createCargo(nome, eleicao_id)

        return res.redirect(`/eleicao/${eleicao_id}/cargos`)
    } catch (error) {
        throw error
    }
}

async function findAllCargosController (req, res) {
    try {
        const cargos = await cargosModel.findAllCargos()

        return res.status(200).send({"data": cargos})
    } catch (error) {
        throw error
    }
}
async function deleteFindByIdCargo (req, res) {
    try {
        const {id} = req.body

        const cargos = await cargosModel.deleteByIdCargos(id)

        return res.status(200).send({"Deletado com sucesso": cargos})
    } catch (error) {
        throw error
    }
}

async function updateByIdCargoController (req, res) {
    try {
        const {nome, eleicao_id, id} = req.body

        const cargo = await cargosModel.updateCargos(nome, eleicao_id, id)

        return res.status(200).send({"Deletado com sucesso": cargo})
    } catch (error) {
        throw error
    }
}


async function findAllCargosByEleicaoController(req, res) {
    try {
        const eleicaoId = req.params.id;

        console.log('eleicaoId: ', eleicaoId)

        const cargos = await cargosModel.findCargosByeleicao(eleicaoId);
        return res.render('eleicao/cargosHome', { cargos, eleicaoId });
    } catch (error) {
        console.error(error);
        return res.status(500).send('Erro ao buscar chapas');
    }
}


module.exports = {
    createCargosController,
    findAllCargosController,
    deleteFindByIdCargo,
    findAllCargosByEleicaoController,
    updateByIdCargoController
}