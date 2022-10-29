const router = require("express").Router();
const Todo = require("../src/models/todo");

router.post("/", async (req, res) => {
  const todo = new Todo({
    title: req.body.title ? req.body.title : "Untitled",
    inProgress: req.body.inProgress ? req.body.inProgress : false,
    done: req.body.done ? req.body.done : false,
  });
  try {
    await todo.save();
    res.status(201).send({ message: "Todo created successfully", todo: todo });
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).send(todos);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    res.status(200).send(todo);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
