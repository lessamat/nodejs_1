const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

server.get('/', (req, res) => {
    res.send("Suquinho xuáááá huuuum\n")
})

server.post('/', (req, res) => {

    server.post('/', (req, res) => {
        const request = req.body
        res.send(request.usuario)
        res.status(201).send();
    })
})

server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})