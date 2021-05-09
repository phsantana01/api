const mysql = require('mysql')

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pedro0987',
    database: 'filmes',
    port: 3306
})
    
module.exports = conexao


