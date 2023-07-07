const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assigmentsSchema = new Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    title: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    course: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    file: {
      type: String,
      required: true,
    },
    submissionCount: {
      type: Number,
      required: true,
      default: 0
    },
    status: {
      type: Boolean,
      required: true,
      default: false,
    },
    createdBy: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

mongoose.model('Assignment', assigmentsSchema);
module.exports = mongoose.model("Assigment", assigmentsSchema);
