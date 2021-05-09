const conexao = require('../infra/database/conexao')

module.exports = {
    listar(res) {
        const sql = `SELECT * FROM Filmes`
        conexao.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(201).json(resultados)
            }
        })
    },


    buscarPorId(id,res) {
        const sql = `SELECT * FROM Filmes WHERE id=${id}`
        conexao.query(sql, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(201).json(resultado)
            }
            return resultado
        })
    },

    deleta(id, res) {
        const sql = `DELETE FROM Filmes WHERE id=${id}`
        conexao.query(sql, (erro, resultado)=> {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(201)
                res.send(JSON.stringify({
                    "mensagem": "filme deletado"
                }))
            }
        })
    }
}