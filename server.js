import express from 'express';
import mongoose from 'mongoose';



const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
	res.send('Hello');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});



mongoose.connect('mongodb://localhost:27017/todo_list')
	.then(() => console.log('db ok'))
	.catch((err) => console.log('db error', err));



const taskSchema = new mongoose.Schema({
	id: String,
	title: String,
	status: String
});

export const TaskModel = mongoose.model('Task', taskSchema);


// app.get('/tasks', async (req, res) => {
// 	try {
// 		const tasks = await TaskModel.find();
// 		res.json(tasks);

// 	} catch (err) {
// 		res.status(500).send(err.mesage);
// 	}
// });

// app.post('/tasks', validateTaskData, async (req, res) => {
// 	try {
// 		const newTask = new TaskModel(req.body);
// 		const savedTask = await newTask.save();
// 		res.status(201).json(savedTask);
// 	} catch (err) {
// 		res.status(400).send(err.message);
// 	}

// });