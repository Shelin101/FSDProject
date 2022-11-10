const mongoose = require("mongoose");
const { Schema } = mongoose;

const studentSchema = new Schema({
  name: {
    type: String,
    unique: true,
  },
  roll: Number,
  daa: String,
  os: String,
  fsd: String,
  se: String,
  ai: String,
  status: String,
});
module.exports = mongoose.model("Student", studentSchema);
