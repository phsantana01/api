const roteador = require('express').Router()
const Filme = require('./Filme')
const tabelaFilme = require('./tabelaFIlme')

roteador.get('/', (req, res) => {
  tabelaFilme.listar(res)
})

roteador.get('/:id', (req, res) => {
    const id = req.params.id
    tabelaFilme.buscarPorId(id, res)
})

roteador.post('/', (req, res) => {
    const dados = req.body
    const filme = new Filme(dados)
    filme.criar(res, dados)
})

roteador.put('/:id', (req, res) => {
    const id = req.params.id
    const dadosRecebidos = req.body
    const filme = new Filme(Object.assign({}, dadosRecebidos, {id: id}))
    filme.alterar(res, dadosRecebidos)
})

roteador.delete('/:id', (req, res) => {
    const id= req.params.id
    tabelaFilme.deleta(id, res)
})



module.exports = roteador
