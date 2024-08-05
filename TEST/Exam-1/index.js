const express = require('express')
const cors = require("cors");
const dbConnect = require('./config/db')
const TaskRouter = require('./routes/taskRoute')
const UserRouter = require('./routes/userRoute')
require('dotenv').config()


const app = express();
const PORT = process.env.PORT || 8000

dbConnect()

app.use(express.json())

app.use('/tasks', TaskRouter);
app.use('/users', UserRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
