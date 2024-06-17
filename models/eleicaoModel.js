const pool = require('../db')
async function createEleicao (data, local) {
    try {
        await pool.query('INSERT INTO Eleicao (Data, Local) VALUES (?, ?)',
        [data, local])

        const [eleicao] = await pool.query('SELECT * FROM Eleicao WHERE Data  LIKE ?', 
        [`%${data}%`])
         
        return eleicao
    } catch (error) {
        throw error
    }
}
async function findAllEleicao() {
    try {
        const [eleicao] = await pool.query('SELECT * FROM Eleicao')

        return eleicao
    } catch (error) {
        throw error
    }
}

async function findByIdEleicao(id) {
    try {
        const [eleicao] = await pool.query('SELECT * FROM Eleicao WHERE EleicaoID = ?',
            [id]
        )

        return eleicao
    } catch (error) {
        throw error
    }
}

async function deleteByIdEleicao(id) {
    try {
        const eleicao = await pool.query('DELETE FROM Eleicao WHERE EleicaoID = ?', [id])
        return eleicao
    } catch (error) {
        throw error
    }
}

async function updateEleicao(id, data, local, inicio, fim) {
    try {


        const eleicao = await pool.query('UPDATE Eleicao SET Data = ?, Local = ?, Inicio = ?, Fim = ? WHERE EleicaoID = ?',
        [data, local, inicio, fim, id]);
        
        return eleicao
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createEleicao,
    findAllEleicao,
    deleteByIdEleicao,
    updateEleicao,
    findByIdEleicao
}