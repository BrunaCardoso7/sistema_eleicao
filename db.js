const mysql = require('mysql2/promise');
const pool = mysql.createPool({
    host: '127.0.0.1', // porta do banco de dados
    user: 'brunadev', // usuario do mysql
    password: 'bruna8596', // senha do usuario do mysql
    database: 'SISTEMA_ELEICAO', // nome do banco de dados
    port: 3306,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
module.exports = pool;