const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://Vaisakh_1995:9645415699@nodeexpressproject.c3vjcyz.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true, //these are the keys to remove the warnings when mongoose connected
    useCreateIndex: true, // so that connected to the db is after the listening server otherwise some warnings in between them
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("CONNECTED TO THE DB....."))
  .catch((err) => console.log(err));
