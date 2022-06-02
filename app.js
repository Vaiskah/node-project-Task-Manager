const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");

// middleware
app.use(express.static("./public"));
app.use(express.json());

//routes

app.use("/api/v1/tasks", tasks);

app.use(notFound);

// app.get('/api/v1/tasks') - get all the tasks
// app.post('/api/v1/tasks') - creat a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch/put('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task
const port = 3001;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI); // MONGO_URI is in .env file and the url of the database is in that MONGO_URI
    app.listen(port, console.log(`Server is listening port ${port}..........`));
  } catch (error) {
    console.log(error);
  }
};

start();
