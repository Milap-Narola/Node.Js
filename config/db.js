const mongoose = require('mongoose');

const dbConnect = async () => {
        await mongoose.connect('mongodb://127.0.0.1:27017/Task');
        console.log("Connected to MongoDB");
};

module.exports = dbConnect;
