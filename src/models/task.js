const { Schema, model } = require("mongoose");

const Task = new Schema({
  title: String,
  description: String,
  status: Boolean,
});

module.exports = model('task', Task);