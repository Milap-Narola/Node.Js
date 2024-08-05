const task = require('../models/taskSchema');

const getTaskData = async (req, res) => {
    const data = await task.find()
    res.send(data)
};

const createTaskData = async (req, res) => {
    const data = await task.create(req.body)
    res.send(data)
};

const updateTaskData = async (req, res) => {
    const { id } = req.params
    const updatedTask = await task.findByIdAndUpdate(id, req.body, { new: true })
    res.send(updatedTask)
};

const deleteTaskData = async (req, res) => {
    const { id } = req.params
    await task.findByIdAndDelete(id)
    res.send(`Task with id ${id} deleted successfully.`)
};

const findById = async (req, res) => {
    const { id } = req.params
    const data = await task.findById(id)
    res.send(data)
};

module.exports = {
    getTaskData,
    createTaskData,
    updateTaskData,
    deleteTaskData,
    findById
};
