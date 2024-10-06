const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const course = require("./data/course.json");

app.use(cors());

app.get("/", (req, res) => {
  res.send("Course Server Running");
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.listen(port, () => {
  console.log(`Course Server is running on ${port}`);
});
