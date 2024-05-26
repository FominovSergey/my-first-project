import { TaskManager } from "./tack-menager.js";
import { Task } from "./task.js";


var testManager = new TaskManager();

testManager.loadTasks('./tasks.json');

testManager.printTasks();

const taskManager = new TaskManager();
taskManager.loadTasks('tasks.json');


// Добавляем новую задачу
const newTask = new Task(20, 'Убраться', 'backlog');
taskManager.addTask(newTask);

// Удаляем задачу с идентификатором 2
taskManager.deleteTask(2);

// Выводим список задач
taskManager.printTasks();