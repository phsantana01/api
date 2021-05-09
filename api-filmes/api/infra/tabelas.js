class Tabela {
    init(conexao) {
        this.conexao = conexao
        this.criarTabelaFilmes()
    }

    criarTabelaFilmes() {
        const sql = `CREATE TABLE IF NOT EXISTS Filmes (id SERIAL NOT NULL, titulo varchar(50) NOT NULL,
        diretor varchar(50) NOT NULL, dataExibicao date NOT NULL, PRIMARY KEY(id))`

        this.conexao.query(sql, (erro, resultado) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela Filmes criada com sucesso')
            }
        })
    }
    
}

module.exports = new Tabela