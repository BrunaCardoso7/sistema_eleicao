//requisicoes ao banco de dados

const pool = require('../db');
async function getAllFornecedores() {
    try {
        const [fornecedores] = await pool.query('SELECT * FROM fornecedor order by Id desc');
        return fornecedores;
    } catch (error) {
        throw error;
    }
}
async function getFornecedorByNome(nome) {
    try {
        const [fornecedores] = await pool.query('SELECT * FROM fornecedor WHERE Fornecedor LIKE ? order by Id desc', [`%${nome}%`]);
return fornecedores;
    } catch (error) {
        throw error;
    }
}
async function getFornecedorByNomedelete(nome) {
    try {
        const [fornecedores] = await pool.query('SELECT * FROM fornecedor WHERE Fornecedor = ? order by Id desc', [nome]);
return fornecedor[0];
    } catch (error) {
        throw error;
    }
}


async function insertFornecedor(nome, telefone, revendedor) {
    try {
        await pool.query('INSERT INTO fornecedor (Fornecedor, Telefone, Revendedor) VALUES (?, ?, ?)',
            [nome, telefone, revendedor]);
        const [fornecedores] = await pool.query('SELECT * FROM fornecedor WHERE Fornecedor LIKE ?',
            [`%${nome}%`]);
        return fornecedores;
    } catch (error) {
        throw error;
    }
}


async function getFornecedorById(id) {
    try {
        const [fornecedor] = await pool.query('SELECT * FROM fornecedor WHERE Id = ?', [id]);
        return fornecedor[0];
    } catch (error) {
        throw error;
    }
}
async function deleteFornecedor(id) {
    try {
        await pool.query('DELETE FROM fornecedor WHERE Id = ?', [id]);
    } catch (error) {
        throw error;
    }
}
// Modelo de fornecedorModel.js
async function updateFornecedor(id, nome, telefone, revendedor) {
    try {
        await pool.query('UPDATE fornecedor SET Fornecedor = ?, Telefone = ?, Revendedor = ? WHERE Id = ?',
            [nome, telefone, revendedor, id]);
    } catch (error) {
        throw error;
    }
}
module.exports = {
    getAllFornecedores,
    getFornecedorByNome,
    getFornecedorByNomedelete,
    insertFornecedor,
    getFornecedorById,
    deleteFornecedor,
    updateFornecedor
};