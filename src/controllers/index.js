const taskModel = require("../models/task");

const getTasks = async (req, res) => {
  let data;
  try {
    data = await taskModel.find();
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  res.status(200).render("index", {
    title: "Home",
    tasks: data,
  });
}

const addTask = async (req, res) => {
  const { body } = req;
  body.status = false;
  let data 

  try {
    data = await taskModel.create(body);
    console.log(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
  res.status(201).redirect('/')
}

const turnTask = async (req, res) => {
  const { id } = req.params

  try {
    const task = await taskModel.findById(id)
    task.status = !task.status
    task.save()
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  res.status(200).redirect('/')
}

const deleteTask = async (req, res) => {
  const { id } = req.params

  try {
    await taskModel.remove({ _id: id })
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }

  res.status(204).redirect('/')
}


module.exports = {
  getTasks,
  addTask,
  turnTask,
  deleteTask
}