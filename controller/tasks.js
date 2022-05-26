const Task = require("../models/task");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};

const creatAllTasks = async (req, res) => {
  const task = await Task.create(req.body); //Task.create({name:'first name', complete:'true'}) like this way
  res.status(201).json({ task });
};

const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("update task");
};

const deleteTask = (req, res) => {
  res.send("delete task");
};

module.exports = {
  getAllTasks,
  creatAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
