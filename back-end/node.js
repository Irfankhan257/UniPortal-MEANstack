const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const portal = require("./UniSchema");
const student = require("./studentSchema");
const course = require("./courseSchema");

app.use(cors());
app.use(bodyParser.json());
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

app.get("/universities", async (request, response) => {
  const users = await portal.find({}).populate("studentid");
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/students", async (request, response) => {
  const users = await student.find({});
  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});

app.get("/courses", async (request, response) => {
  const users = await course.find({});

  try {
    response.send(users);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.post("/universities", async (req, res) => {
  const { id, name } = req.body;
  const user = new portal({ id, name });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/students", async (req, res) => {
  const { id, name } = req.body;
  const user = new student({ id, name });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
app.post("/courses", async (req, res) => {
  const { id, name } = req.body;
  const user = new course({ id, name });
  try {
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});
