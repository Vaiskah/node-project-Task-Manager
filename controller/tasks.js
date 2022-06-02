const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const creatAllTasks = async (req, res) => {
  try {
    const task = await Task.create(req.body); //Task.create({name:'first name', complete:'true'}) like this way
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with this id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with this id : ${taskID}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const updateTask = async (req, res) => {
  try {
    const {id:taskID} = req.params
    const task = await Task.findOneAndUpdate({_id:taskID}, req.body, {
      new:true,
      runValidators:true
    })
    if(!task){
      return res.status(404).json({msg:`No task with this id : ${taskID}`})
    }
    res.status(200).json({task})
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
module.exports = {
  getAllTasks,
  creatAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
};
