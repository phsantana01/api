const express = require('express')
const roteador = require('./api/filmes/index')
const bodyParser = require('body-parser')
const conexao = require('./api/infra/database/conexao')
const Tabela = require('./api/infra/tabelas')



conexao.connect((erro) => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        Tabela.init(conexao)

        const app = express()
        app.use(bodyParser.json())
        app.use('/api/filmes', roteador)
        
        app.listen(3000, () => {
            console.log('api funcionando')
        })
    }
})


