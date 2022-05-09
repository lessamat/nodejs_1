const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

let count = 0;
let users = [];

server.get('/', (req, res) => {
    res.status(200).send(users)
})

server.post('/', (req, res) => {
    const request = req.body

    const objuser = {
        id: count += 1,
        usuario: request.usuario
    }
    users.push(objuser)
    res.status(201).send()
})

server.delete('/', (req, res) => {
    users = [];
    res.status(202).send()
})

server.put('/:value', (req, res) => {
    const value = req.params.value
    const id = req.query.id
    console.log(`QUERY IS ${id} AND PARAMETER IS ${value}`)

    users.map(usuario => {
        if (usuario.id == id) {
            console.log(`FOUND ID ${id} CHANGING VALUE OF OBJECT`)
            usuario.usuario = value
        }
    });

    res.status(200).send()
})

server.listen(port, (req, res) => {
    console.log(`rodando na porta ${port}`)
})