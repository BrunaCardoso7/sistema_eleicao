//resp pelo controle e chamada da aplicacao

const fornecedorModel = require('../models/fornecedorModel');

async function listFornecedores(req, res) {
    try {
        const fornecedores = await fornecedorModel.getAllFornecedores();
        // console.log(fornecedores);
        res.render('fornecedores', { fornecedores });
    } catch (error) {
        console.error('Erro ao buscar fornecedores:', error);
        // res.status(500).send('Erro ao buscar fornecedores');
        res.render('error', { message: 'Erro ao buscar fornecedores', returnLink: '/welcome' });
    }
}
async function filterFornecedor(req, res) {
    const { nome } = req.body;
    try {
        const fornecedores = await fornecedorModel.getFornecedorByNome(nome);
        if (fornecedores.length === 0) {
            res.send('Fornecedor não encontrado');
        } else {
            console.log(fornecedores);
            res.render('fornecedores', { fornecedores });
        }
    } catch (error) {
        console.error('Erro ao filtrar fornecedor:', error);
        // res.status(500).send('Erro ao filtrar fornecedor');
        res.render('error', { message: 'Erro ao filtrar fornecedor', returnLink: '/welcome' });
    }
}
async function addFornecedor(req, res) {
    const { nome, telefone, revendedor } = req.body;
    try {
        const id = await fornecedorModel.insertFornecedor(nome, telefone, revendedor);
        // Redireciona o usuário para a rota que mostra apenas o fornecedor inserido
        // console.log(fornecedores);
        // res.redirect(`/welcome`);
        res.redirect('/fornecedores')
    } catch (error) {
        console.error('Erro ao inserir fornecedor:', error);
        // res.status(500).send('Erro ao inserir fornecedor');
        res.render('error', { message: 'Erro ao inserir fornecedor', returnLink: '/welcome' });
    }
}
async function showFornecedor(req, res) {
    const id = req.params.id;
    //console.log("id");
    try {
        const fornecedores = await fornecedorModel.getFornecedorById(id);
        if (fornecedores.length === 0) {
            res.send('Fornecedor não encontrado');
        } else {
            console.log(fornecedores);
            res.render('fornecedores', { fornecedores });
        }
    } catch (error) {
        console.error('Erro ao filtrar fornecedor:', error);
        // res.status(500).send('Erro ao filtrar fornecedor');
        res.render('error', { message: 'Erro ao filtrar fornecedor', returnLink: '/welcome' });
    }
}
async function deleteFornecedor2(req, res) {
    const { nome } = req.body;
    try {
        const fornecedor = await fornecedorModel.getFornecedorByNomedelete(nome);
        if (!fornecedor) {
            res.status(404).send('Fornecedor não encontrado');
            return;
        }
        await fornecedorModel.deleteFornecedor(fornecedor.Id);
        res.send('Fornecedor deletado com sucesso');
    } catch (error) {
        console.error('Erro ao deletar fornecedor:', error);
        res.status(500).send('Erro ao deletar fornecedor');
    }
}
// Função para exibir página de edição de fornecedor
async function showEditForm(req, res) {
    const id = req.params.id;
    try {
        const fornecedor = await fornecedorModel.getFornecedorById(id);
        if (!fornecedor) {
            res.status(404).send('Fornecedor não encontrado');
            return;
        }
        res.render('editFornecedor', { fornecedor });
    } catch (error) {
        console.error('Erro ao buscar fornecedor:', error);
        res.status(500).send('Erro ao buscar fornecedor');
    }
}
// Função para exibir página de edição de fornecedor
async function showEditForm(req, res) {
    const id = req.params.id;
    try {
        const fornecedor = await fornecedorModel.getFornecedorById(id);
        if (!fornecedor) {
            res.status(404).send('Fornecedor não encontrado');
            return;
        }
        res.render('editFornecedor', { fornecedor });
    } catch (error) {
        console.error('Erro ao buscar fornecedor:', error);
        res.status(500).send('Erro ao buscar fornecedor');
    }
}
// Função para lidar com ação de edição de fornecedor
async function editFornecedor(req, res) {
    const id = req.params.id;
    const { nome, telefone, revendedor } = req.body;
    try {
        await fornecedorModel.updateFornecedor(id, nome, telefone, revendedor);
        res.redirect('/fornecedores');
    } catch (error) {
        console.error('Erro ao editar fornecedor:', error);
        res.status(500).send('Erro ao editar fornecedor');
    }
}
// Função para exibir o formulário de confirmação de exclusão
async function showConfirmDeleteForm(req, res) {
    const id = req.params.id;
    try {
        const fornecedor = await fornecedorModel.getFornecedorById(id);
        if (!fornecedor) {
            res.status(404).send('Fornecedor não encontrado');
            return;
        }
        res.render('confirmDelete', { fornecedor });
    } catch (error) {
        console.error('Erro ao buscar fornecedor:', error);
        res.status(500).send('Erro ao buscar fornecedor');
    }
}
// Função para excluir um fornecedor
async function deleteFornecedor(req, res) {
    const id = req.params.id;
    try {
        await fornecedorModel.deleteFornecedor(id);
        res.redirect('/fornecedores');
    } catch (error) {
        console.error('Erro ao excluir fornecedor:', error);
        res.status(500).send('Erro ao excluir fornecedor');
    }
}
module.exports = {
    listFornecedores,
    filterFornecedor,
    addFornecedor,
    showFornecedor,
    showEditForm,
    editFornecedor,
    showConfirmDeleteForm,
    deleteFornecedor
};