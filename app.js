const express = require('express')
const router = require('./router')

const app = express()

app.use('/', router)

const server = app.listen(3000, function() {
    const { address, port } = server.address()
    console.log('HTTPS Server is running on: https://localhost:', address, port)
})