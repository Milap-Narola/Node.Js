const { Router } = require('express');
const {
    getTaskData,
    createTaskData,
    updateTaskData,
    deleteTaskData,
    findById
} = require('../controller/taskController');

const taskRouter = Router();

taskRouter.get('/', getTaskData);
taskRouter.post('/', createTaskData);
taskRouter.patch('/:id', updateTaskData);
taskRouter.delete('/:id', deleteTaskData);
taskRouter.get('/:id', findById);

module.exports = taskRouter;
