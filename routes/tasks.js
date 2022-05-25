const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  creatAllTasks,
  getSingleTask,
  updateTask,
  deleteTask,
} = require("../controller/tasks");

router.route("/").get(getAllTasks).post(creatAllTasks);
router.route("/:id").get(getSingleTask).patch(updateTask).delete(deleteTask);

module.exports = router;
