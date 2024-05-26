import fs from 'fs';
import { Task } from './task.js';
import { TaskModel } from './taskModel.js';

export class TaskManager {
    constructor() {
        this.tasks = [];
    }

    // loadTasks(filepath) {
    //     try {
    //         const data = fs.readFileSync(filepath, 'utf8');
    //         const tasksJson = JSON.parse(data);

    //         tasksJson.forEach(taskData => {
    //         const task = new Task(taskData.id, taskData.description , taskData.status);
            
    //         this.tasks.push(task);
    //         });

    //     } catch (err) {
    //     console.error('Ошибка чтения файла:', err);
    //     }
    // }

    loadTask(){
        fs.readFile('tasks.json','utf8',(err,data)=>{
            if(err){
                console.error("Error reading file:",err);
                return;
            }
            const tasksData = JSON.parse(data);
            this.tasks = tasksData.map(task=>{
                const newTask = new TaskModel(task);
                newTask.save();
                return newTask;
            });
        });
    }

    saveTasks(filename) {
        try {
            const tasksArray = this.tasks.map(task => ({ id: task.id, description: task.description, status: task.status }));
            fs.writeFileSync(filename, JSON.stringify(tasksArray, null, 2));
            console.log('Задача успешно сохранена');
        } catch (err) {
            console.error('Ошибка', err);
        }
    }

    printTasks() {
        this.tasks.forEach(task => console.log(task.toString()));
    }

    addTask(id, description, status) {
        const newTask = new Task(id, description, status);
        this.tasks.push(newTask);
        this.saveTasks('tasks.json');
    }

    removeTask(id) {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks('tasks.json');
    }
}
