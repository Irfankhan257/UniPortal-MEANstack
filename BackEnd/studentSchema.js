const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const studentSchema = {
  id: Number,
  courses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "COURSE_PORTAL",
    },
  ],
  university: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UNI_PORTAL",
    },
  ],
  name: String,
};

const student = mongoose.model("STUDENT_PORTAL", studentSchema);
module.exports = student;
