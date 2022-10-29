const mongoose = require("mongoose");

const Todo = new mongoose.model("Todo", {
  title: String,
  inProgress: Boolean,
  done: Boolean,
});

module.exports = Todo;
