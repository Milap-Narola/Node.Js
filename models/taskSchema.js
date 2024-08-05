const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date
});
const task =mongoose.model('Task', taskSchema);
module.exports = task
