const mongoose = require('mongoose');

const dbConnect = async () => {
    await mongoose.connect("localhost:");
    console.log("Connected to the db");
};

module.exports = dbConnect;