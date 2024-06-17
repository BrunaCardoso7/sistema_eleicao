const pool = require('../db')
async function createVoto (eleitorId, chapaId, dataHora) {
    try {
        await pool.query('INSERT INTO Voto (EleitorID, ChapaID, DataHora) VALUES (?, ?, ?)',
        [eleitorId, chapaId, dataHora])

        const [voto] = await pool.query('SELECT * FROM Voto WHERE EleitorID  LIKE ?', 
        [`%${eleitorId}%`])
         
        return voto
    } catch (error) {
        throw error
    }
}
async function findAllVoto() {
    try {
        const [voto] = await pool.query('SELECT * FROM Voto')

        return voto
    } catch (error) {
        throw error
    }
}

async function deleteByIdVoto(id) {
    try {
        const voto = await pool.query('DELETE FROM Voto WHERE VotoID = ?', [id])
        return voto
    } catch (error) {
        throw error
    }
}

async function updateVoto(eleitorId, chapaId, dataHora,id) {
    try {


        const voto = await pool.query('UPDATE Voto SET EleitorID = ?, ChapaID = ?, DataHora = ? WHERE VotoID = ?',
        [eleitorId, chapaId, dataHora, id]);
        
        return voto
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createVoto,
    findAllVoto,
    deleteByIdVoto,
    updateVoto
}