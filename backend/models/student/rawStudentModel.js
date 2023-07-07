const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rawStudentSchema = new Schema(
  {
    name: {
      type: String,
      required: true,          
    },
    userId: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    rollNo: {
      type: String,
      required: true,
    },
    registrationNo:{
      type: Number,
      required: true
    },
    attendance: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Attendance',
      required: true
    },
    section: {
      type: String,
      required: true,
    },       
    course: [{ type: Schema.Types.ObjectId, ref: "Course" }]
  },
  { timestamps: true }
);

module.exports = mongoose.model("RawStudent", rawStudentSchema);
