const express = require('express')
const router = require('./src/routers/index')
const { v4: uuidv4 } = require('uuid');
const TaskService = require('./src/services/task.service');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'pug')
app.use(express.static('public'))



app.use(router)

module.exports = app