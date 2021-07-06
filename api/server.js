// implement your server here
// require your posts router and connect it here

//first step
const express = require('express')

const server = express()

server.use(express.json())

server.use('*', (req,res) => {
    res.status(404).json({
        message: 'not found'
    })
})

module.exports = server