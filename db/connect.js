const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, //these are the keys to remove the warnings when mongoose connected
    useCreateIndex: true, // so that after connecting to db, in between the "listening server" and "connected to the db" some warnings came.
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
