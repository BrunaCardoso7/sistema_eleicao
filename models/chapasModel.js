const pool = require('../db')

async function createChapas(nome, eleicao_id) {
    try {
        await pool.query('INSERT INTO Chapa (Nome, EleicaoID) VALUES (?, ?)',
        [nome, eleicao_id])
        const [chapas] = await pool.query('SELECT * FROM Chapa WHERE Nome  LIKE ?',
        [`%${nome}%`])

        return chapas
    } catch (error) {
        throw error
    }
}

async function findChapasById(id) {
    try {
        const [chapa] = await pool.query('SELECT * FROM Chapa WHERE ChapaID = ?',
            [id]
        )
        return chapa
    } catch (error) {
        throw error
    }
}


async function findAllChapas() {
    try {
        const [chapa] = await pool.query('SELECT * FROM Chapa')
        return chapa
    } catch (error) {
        throw error
    }
}

async function findAllByEleicaoChapas(id) {
    try {
        const [chapa] = await pool.query('SELECT * FROM Chapa WHERE EleicaoID = ?', 
            [id])
        return chapa
    } catch (error) {
        throw error
    }
}


async function deleteByIdChapa(id) {
    try {
        const chapa = await pool.query('DELETE FROM Chapa WHERE ChapaID = ?', [id])
        return chapa
    } catch (error) {
        throw error
    }
}

async function updateChapa(nome, id) {
    try {
        const chapa = await pool.query('UPDATE Voto SET Nome = ? WHERE ChapaID = ?',
        [nome, id])
        
        return chapa
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createChapas,
    findAllChapas,
    deleteByIdChapa,
    updateChapa,
    findAllByEleicaoChapas,
    findChapasById
}