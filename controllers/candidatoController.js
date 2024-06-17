const candidatosModel = require("../models/candidatosModel");

async function createCandidatos(req, res) {
    const { nome, cpf, endereco } = req.body;
    console.log(nome, cpf, endereco)
    try {
        if (!nome || !cpf || !endereco) {
            return res.status(400).send('Nome, CPF e endereço são obrigatórios');
        }
        await candidatosModel.createCandidatos(nome, cpf, endereco);

        return res.render('eleicao/candidatoHome');
    } catch (error) {
        console.error('Erro ao inserir candidato:', error);
        res.render('error', { message: 'Erro ao inserir candidato', returnLink: '/welcome' });
    }
}
async function listCandidatos(req, res) {
    try {
        const candidatos = await candidatosModel.findAllCandidatos();
        console.log(candidatos)
        return res.render('eleicao/candidatoHome' ,{ candidatos })
    } catch (error) {
        console.error("Erro ao buscar candidatos", error);
        res.render("error", { message: "Erro ao buscar candidatos" })
    }
}

async function listCandidatosByChapas(req, res) {
    try {
        const chapaId = req.params.chapaId

        const candidatos = await candidatosModel.findCandidatosByChapa(chapaId);

        console.log(candidatos)
        return res.render('eleicao/chapa' ,{ candidatos })
    } catch (error) {
        console.error("Erro ao buscar candidatos", error);
        res.render("error", { message: "Erro ao buscar candidatos" })
    }
}

async function deleteCandidato(req, res) {
    // const id = req.params.id; // Passado como parâmetro no front
    const { nome } = req.body;
    try {
        const candidato = await candidatosModel.deleteCandidato(nome);
        if (!candidato) {
            res.status(404).send("Candidato não encontrado!")
        }
        await candidatosModel.deleteCandidato(candidato.nome);
        return res.status(200).send('Candidato excluído com sucesso');
    } catch (error) {
        console.error('Erro ao deletar fornecedor:', error);
        res.status(500).send('Erro ao deletar candidato');
    }
}

async function updateCandidato(req, res) {
    // const id = req.params.id;
    const { id, nome, cpf, endereco } = req.body;
    try {
        const candidato = await candidatosModel.updateCandidato(id, nome, cpf, endereco)
        return res.status(200).send('Candidato atualizado com sucesso ');
    } catch (error) {
        console.error('Erro ao editar fornecedor:', error);
        res.status(500).send('Erro ao editar candidato');
    }
}

module.exports = {
    createCandidatos,
    listCandidatos,
    deleteCandidato,
    updateCandidato,
    listCandidatosByChapas
};