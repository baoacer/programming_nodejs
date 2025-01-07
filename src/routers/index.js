const express = require('express')
const path = require('path');
const TaskService = require('../services/task.service');
const TaskController = require('../controller/task.controller');
const uuidv4 = require('uuid');

const router = express.Router()

let tasks = TaskService.getTasks()

router.get('/', TaskController.getTasks)

router.post('/add', TaskController.addTask)

router.post('/edit/:id', TaskController.updateTask)

router.post('/delete/:id', TaskController.deleteTask)





module.exports = router