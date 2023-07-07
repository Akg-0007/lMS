const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
  userId: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email : {
    type : String,
    required: true
  } ,
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  section: [
    {
      name: {
        type: String,
        required: true,
      },
      courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    },
  ],
});

module.exports = mongoose.model("Teacher", teacherSchema);

// TODO 
// in courses , sessions needs to be updated for future 