const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

const course = require("./data/course.json");

// app.use(cors());

// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173", 
//     ],
//   })
// );

app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://course-project-react-routing-firebase.vercel.app/",
    ],
  })
);

app.get("/", (req, res) => {
  res.send("Course Server Running");
});

app.get("/course", (req, res) => {
  res.send(course);
});

app.get("/course/:id", (req, res) => {
  id = req.params.id;
  // console.log(id);
  const selectedProducts = course.find(n => n._id === id);
  res.send(selectedProducts);
});

app.listen(port, () => {
  console.log(`Course Server is running on ${port}`);
});
