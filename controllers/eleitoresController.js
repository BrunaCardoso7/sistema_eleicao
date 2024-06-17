const eleitoresModel = require("../models/eleitoresModel");
async function createEleitores(req, res) {
    const { nome, cpf, endereco, senha } = req.body;
    console.log(nome, cpf, endereco, senha)
    try {
        if (!nome || !cpf || !endereco || !senha) {
            return res.status(400).send('Nome, CPF,  endereço e senha são obrigatórios');
        }
        const eleitores = await eleitoresModel.createEleitor(nome, cpf, endereco, senha, aptoAVotar=0);
        res.render('eleitores', { eleitores });
        return res.status(200).send('Eleitor criado com sucesso');
    } catch (error) {
        console.error('Erro ao inserir eleitor:', error);
        res.render('error', { message: 'Erro ao inserir eleitores', returnLink: '/welcome' });
    }
}
async function listEleitores(req, res) {
    try {
        const eleitores = await eleitoresModel.findAllEleitor();
        return res.status(200).send(eleitores);
        // res.render("eleitores", { eleitores })
    } catch (error) {
        console.error("Erro ao buscar eleitores", error);
        res.render("error", { message: "Erro ao buscar eleitores" })
    }
}

async function deleteEleitor(req, res) {
    // const id = req.params.id; // Passado como parâmetro no front
    const { id } = req.body;
    try {
        const eleitor = await eleitoresModel.deleteEleitor(id);
        if (!eleitor) {
            res.status(404).send("Eleitor não encontrado!")
        }
        await eleitoresModel.deleteEleitor(id);
        return res.status(200).send('Eleitor excluído com sucesso');
    } catch (error) {
        console.error('Erro ao deletar eleitor:', error);
        res.status(500).send('Erro ao deletar eleitor');
    }
}

async function updateEleitor(req, res) { // not working yet
    // const EleitorID = req.params.id;
    const { EleitorID, nome, endereco, senha } = req.body;
    console.log(EleitorID, nome, endereco, senha)
    try {
        const eleitor = await eleitoresModel.updateEleitor(EleitorID, nome, endereco, senha);
        // res.redirect('/eleitores');
        res.status(200).send({'Eleitor editado com sucesso': eleitor});
    } catch (error){
        console.error('Erro ao editar eleitor:', error);
        res.status(500).send('Erro ao editar eleitor');
    }
}

module.exports = {
    createEleitores,
    listEleitores,
    deleteEleitor,
    updateEleitor
};