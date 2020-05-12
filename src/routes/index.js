const router = require("express").Router();
const { getTasks, addTask, turnTask, deleteTask } = require('../controllers')

router
  .get("/", getTasks)
  .post("/add", addTask)
  .get("/turn/:id", turnTask)
  .get("/delete/:id", deleteTask)

module.exports = router;