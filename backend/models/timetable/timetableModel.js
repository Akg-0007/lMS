const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timetableSchema = new Schema({
  teacherId: {
    type: Number,
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  days: {
    Monday: [
      {
        room: String,
        startTime: String,
        duration: String,
        endTime: String,
      },
    ],
    Tuesday: [
      {
        room: String,
        startTime: String,
        duration: String,
        endTime: String,
      },
    ],
    Wednesday: [
      {
        room: String,
        startTime: String,
        duration: String,
        endTime: String,
      },
    ],
    Thursday: [
      {
        room: String,
        startTime: String,
        duration: String,
        endTime: String,
      },
    ],
    Friday: [
      {
        room: String,
        startTime: String,
        duration: String,
        endTime: String,
      },
    ],
  },
});

module.exports = mongoose.model('Timetable', timetableSchema);