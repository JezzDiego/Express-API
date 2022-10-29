require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
var cors = require("cors");

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors());
app.use(express.json());

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

//routes

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

const todoRoutes = require("./routes/todoRoutes");
app.use("/todos", todoRoutes);

app.listen(process.env.PORT || 3001, () => {
  console.log("app listening on port 3001!");
});
