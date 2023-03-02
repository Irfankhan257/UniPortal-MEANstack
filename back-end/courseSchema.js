const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courseSchema = {
  id: Number,
  name: String,
};

const course = mongoose.model("COURSE_PORTAL", courseSchema);
module.exports = course;
