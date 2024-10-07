const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const course = require("./data/course.json");

const courseDetails = require("./data/course.json"); // need to check

app.use(cors());

app.get("/", (req, res) => {
  res.send("Course Server Running");
});

app.get("/course", (req, res) => {
  res.send(course);
});

// app.get("/products/:id", (req, res) => {
//   id = req.params.id;
//   console.log(id);
// });

// need to check
app.get("/products/:id", (req, res) => {
  var singleCourse = courseDetails.filter(function (course) {
    let inputCourseId;
    if (req.params.id.length == 1) {
      inputCourseId = "0" + req.params.id;
    } else {
      inputCourseId = req.params.id;
    }

    if (course.course_id == inputCourseId) {
      return true;
    }
  });
  if (singleCourse.length == 1) {
    res.json(singleCourse[0]);
  } else {
    res.send({message: "Not Found"});
  }
});

// app.get("/products/:id", (req, res) => {
//   id = req.params.id;
//   console.log(id);
//   const selectedProducts = products.find(n => n._id === id);
//   res.send(selectedProducts);
//   console.log(selectedProducts);
// });

app.listen(port, () => {
  console.log(`Course Server is running on ${port}`);
});
