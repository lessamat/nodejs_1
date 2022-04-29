const express = require('express')
const { json } = require('body-parser')
const cors = require('cors')

const server = express()
const port = 4001

server.use(json())
server.use(cors())

let users = [];

server.get('/', (req, res) => {
    res.status(200).send({users})
})

    server.post('/', (req, res) => {
        const request = req.body
        users.push(request.usuarios)
        res.status(201).send();
    })


server.listen(port, (req, res) => {
    console.log(`server running on port ${port}`)
})