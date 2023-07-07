const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  syllabus: {
    type: String,
    required: true,
  },
  sessions : {
    type: Number,
    required: true,
  }
});

module.exports = mongoose.model("Course", courseSchema);
// TODO 
// sessions needs to be updated for future 