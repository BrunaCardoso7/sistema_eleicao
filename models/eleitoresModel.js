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
async function loginEleitor(cpf, senha) {
    try {
        const eleitor = await pool.query("SELECT * FROM Eleitor WHERE CPF = ? AND Senha = ?",
            [cpf, senha]
        )
        
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

async function findbyIdEleitor(id) {
    try {
        const [eleitor] = await pool.query("SELECT * FROM Eleitor WHERE EleitorID = ?",
            [id]
        )
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

async function updateEleitor(EleitorID, nome, cpf, endereco, senha, aptoAVotar) {
    try {
        const eleitor = await pool.query("UPDATE Eleitor SET Nome = ?, CPF = ?, Endereco = ?, Senha = ?, AptoAVotar = ? WHERE EleitorID = ?",
            [nome, cpf, endereco, senha, aptoAVotar, EleitorID]);
        return eleitor
    } catch (error) {
        throw error;
    }
}

async function updateAptoVotarEleitor(EleitorID, aptoAVotar) {
    try {
        const eleitor = await pool.query("UPDATE Eleitor SET AptoAVotar = ? WHERE EleitorID = ?",
            [aptoAVotar, EleitorID]);
        return eleitor
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createEleitor,
    findAllEleitor,
    deleteEleitor,
    updateEleitor,
    findbyIdEleitor,
    updateAptoVotarEleitor,
    loginEleitor
};