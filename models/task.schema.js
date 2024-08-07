const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    status: String
});
const Task = mongoose.model('Task', TaskSchema);
module.exports = Task
