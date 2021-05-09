const conexao = require('../infra/database/conexao')
const tabelaFilme = require('./tabelaFIlme')
class Filme {
        constructor({id, titulo, diretor, dataExibicao}) {
            this.id = id
            this.titulo = titulo
            this.diretor = diretor
            this.dataExibicao = dataExibicao
        }


    criar(res, dados) {
        const sql = `INSERT INTO Filmes SET ?`

        conexao.query(sql, dados, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro) 
            }else {
                res.status(201).json(dados)
            }
        })
    }

    alterar(res, dadosRecebidos) {
        const sql = `UPDATE Filmes SET ? WHERE id=${this.id}`

        conexao.query(sql, dadosRecebidos, (erro, resultado) => {
            if(erro) {
                res.status(400).json(erro)
            }else {
                res.status(200)
                res.end()
            }
        })
    }






}

module.exports = Filme