// const supabase = require('../');

// async function getUserByUsernameAndPassword(username, password) {
//     const { data, error } = await supabase
//         .from('usuario')
//         .select('*')
//         .eq('usuario', username)
//         .eq('senha', password)
//         .single();

//     if (error) {
//         console.error('Erro ao buscar usuário:', error);
//         return null;
//     }

//     return data;
// }

// module.exports = { getUserByUsernameAndPassword };
// const pool = require('../db');
// async function getUserByUsernameAndPassword(username, password) {
//     const [rows] = await pool.execute('SELECT * FROM Administrador WHERE Nome = ? AND Senha = ?', [username,
//         password]);
//     return rows[0];
// }
// // 
// module.exports = { getUserByUsernameAndPassword };
