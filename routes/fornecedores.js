//resp pelas rotas
const express = require('express');
const router = express.Router();
const fornecedorController = require('../controllers/fornecedorController');
// Rota para listar todos os fornecedores
router.get('/', fornecedorController.listFornecedores);
// Rota para listar todos os fornecedores
router.get('/filtro', (req, res) => {
    res.render('filtro');
});
// Rota para filtrar fornecedores por nome
router.post('/filtro', fornecedorController.filterFornecedor);
router.get('/cadastrar', (req, res) => {
    res.render('cadastrar');
});
router.post('/cadastrar', fornecedorController.addFornecedor);

router.get('/:id', fornecedorController.showFornecedor);

// Rota para exibir página de edição de fornecedor
router.get('/:id/edit', fornecedorController.showEditForm);
// Rota para lidar com ação de edição de fornecedor
router.post('/:id/edit', fornecedorController.editFornecedor);
// Rota para lidar com ação de exclusão de fornecedor
router.post('/:id/delete', fornecedorController.deleteFornecedor);
// Rota para exibir formulário de confirmação de exclusão
router.get('/:id/confirm-delete', fornecedorController.showConfirmDeleteForm);
module.exports = router;