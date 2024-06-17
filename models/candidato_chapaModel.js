const pool = require('../db')

async function createCandidatoChapa(candidatosId, chapaId, cargoId) {
    try {
        await pool.query('INSERT INTO CandidatoChapa (CandidatoID, ChapaID, CargoID) VALUES (?, ?, ?)',
        [candidatosId, chapaId, cargoId])
        const [cadidatoChapa] = await pool.query('SELECT * FROM CandidatoChapa WHERE CandidatoChapaID  LIKE ?',
        [`%${candidatosId}%`])

        return cadidatoChapa
    } catch (error) {
        throw error
    }
}
async function findAllCandidatoChapa() {
    try {
        const [cadidatoChapa] = await pool.query('SELECT * FROM CandidatoChapa')
        return cadidatoChapa
    } catch (error) {
        throw error
    }
}
async function findAllCandidatoChapa() {
    try {
        const [cadidatoChapa] = await pool.query('SELECT * FROM CandidatoChapa')
        return cadidatoChapa
    } catch (error) {
        throw error
    }
}


async function deleteByIdCandidatoChapa(id) {
    try {
        const cadidatoChapa = await pool.query('DELETE FROM CandidatoChapa WHERE CandidatoChapaID = ?', [id])
        return cadidatoChapa
    } catch (error) {
        throw error
    }
}

async function updateCandidatoChapa(id, candidatosId, chapaId, cargoId) {
    try {
        const cadidatoChapa = await pool.query('UPDATE CandidatoChapa SET  CandidatoID = ?, ChapaID = ?, CargoID = ? WHERE CandidatoChapaID = ?',
        [candidatosId, chapaId, cargoId, id])
        
        return cadidatoChapa
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createCandidatoChapa,
    findAllCandidatoChapa,
    deleteByIdCandidatoChapa,
    updateCandidatoChapa
}