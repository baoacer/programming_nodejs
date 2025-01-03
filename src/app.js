const express = require('express')
const router = require('./routers/index')

const app = express()
app.use(express.static('public'));

app.use(router)

module.exports = app