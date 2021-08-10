const express = require('express')
const router = require('./router')
const fs = require('fs')
const https = require('https')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true}))
app.use(express.json())
app.use('/', router)

const privateKey = fs.readFileSync('./https/dsnztgz.key', 'utf8')
const pem = fs.readFileSync('./https/dsnztgz.pem', 'utf8')
const credentials = { key: privateKey, cert: pem }
const httpsServer = https.createServer(credentials, app)
const SSLPORT = 18082
httpsServer.listen(SSLPORT, function() {
  console.log('HTTPS Server is running on: https://localhost:%s', SSLPORT)
})