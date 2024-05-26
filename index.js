// const TaskManager = require('tack-menager');
import {TaskManager} from './tack-menager.js';
const taskManager = new TaskManager();
taskManager.loadTask();
taskManager.printTasks();

import mongoose from 'mongoose';
import 'dotenv/config';

const mongoUri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?authSourse=admin`;

mongoose.connect(mongoUri)
    .then(()=>console.log('MongoDB connected'))
    .catch(err=>console.error('MongoDB connection error:',err));