const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const portalSchema = {
  id: String,
  studentid:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'STUDENT_PORTAL'
  },
  name: String,
};

const portal = mongoose.model("UNI_PORTAL", portalSchema);
module.exports = portal;
