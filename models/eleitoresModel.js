const pool = require("../db")
async function createEleitor(nome, cpf, endereco, senha, aptoAVotar=0) {
    try {
        await pool.query('INSERT INTO Eleitor (Nome, CPF, Endereco, Senha, AptoAVotar) VALUES (?, ?, ?, ?, ?)',
            [nome, cpf, endereco, senha, aptoAVotar]);
        const [eleitor] = await pool.query('SELECT * FROM Eleitor WHERE Nome LIKE ?',
            [`%${nome}%`]);
        return eleitor;
    } catch (error) {
        throw error;
    }
}

async function findAllEleitor() {
    try {
        const [eleitor] = await pool.query("SELECT * FROM Eleitor")
        return eleitor;
    } catch (error) {
        throw error;
    }
}

async function deleteEleitor(id) { //id
    try {
        const eleitor = await pool.query("DELETE FROM Eleitor WHERE EleitorID = ?", [id]) //id
        return eleitor
    } catch (error) {
        throw error;
    }
}

async function updateEleitor(EleitorID, nome, endereco, senha) {
    try {
        const eleitor = await pool.query("UPDATE Eleitor SET nome = ?, endereco = ?, senha = ? WHERE EleitorID = ?",
            [nome, endereco, senha, EleitorID]);
        return eleitor
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createEleitor,
    findAllEleitor,
    deleteEleitor,
    updateEleitor
};