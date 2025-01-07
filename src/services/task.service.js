const fs = require('fs-extra')
const { v4: uuidv4 } = require('uuid');
const filePath = '/home/acer/WorkSpace/programming_nodejs/src/data/tasks.txt'

class TaskService {

    static getTasks() {
        try {
            const data = fs.readFileSync(filePath, 'utf-8')
            let tasks = data ? JSON.parse(data) : []
            return tasks
        } catch (error) {
            console.log(`Get Data Error:: ${error.message}`)
        }
    }
 
    static addTask(taskName) {
        try {
            const tasks = this.getTasks()
    
            const newTask = { id: uuidv4(), name: taskName, status: 'Pending' };
            tasks.push(newTask)
    
            fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8');
        } catch (error) {
            console.log(`Add Task Error:: ${error.message}`);
        }
    }

    static updateTask({id, name}) {
        try {
            // lay ds task
            const tasks = this.getTasks()

            // tim task cap nhap
            const taskIndex = tasks.findIndex(task => task.id === id)
            if(taskIndex === -1){
                console.log('Task not found!')
                return;
            }

            if(name){
                tasks[taskIndex].name = name
            }else{
                tasks[taskIndex].status = tasks[taskIndex].status === 'Pending' ? 'Completed' : 'Pending';
            }

            fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2), 'utf-8')
            console.log('Task updated successfully!')
        } catch (error) {
            console.log(`Update Data Error:: ${error.message}`)
        }
    }

    static deleteTask(taskId) {
        try {
            const tasks = this.getTasks()
            let updateTask = tasks.filter(task => task.id !== taskId)
            if(updateTask.length === tasks.length){
                console.log('Task not found!')
                return;
            }
            fs.writeFileSync(filePath, JSON.stringify(updateTask, null, 2), 'utf-8')
            console.log('Task deleted successfully!')
        } catch (error) {
            console.log(`Delete Data Error:: ${error.message}`)
        }
    }

}

module.exports = TaskService