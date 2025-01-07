const TaskService = require('../services/task.service')
const taskService = require('../services/task.service')

class TaskController{
    static getTasks(req, res) {
        const tasks = TaskService.getTasks()
        res.render('index', { tasks })
    }

    static addTask(req, res) {
        TaskService.addTask(req.body.name)
        res.redirect('/')
    }

    static updateTask(req, res) {
        const { name } = req.body
        console.log(name)
        TaskService.updateTask({
            name: name,
            id: req.params.id
        })
        res.redirect('/')
    }

    static deleteTask(req, res) {
        TaskService.deleteTask(req.params.id)
        res.redirect('/')
    }

}


module.exports = TaskController