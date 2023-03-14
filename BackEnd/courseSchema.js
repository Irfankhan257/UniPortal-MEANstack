const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const courseSchema = {
  name: String,
  university: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "UNI_PORTAL",
    },
  ],
};

const course = mongoose.model("COURSE_PORTAL", courseSchema);
module.exports = course;
