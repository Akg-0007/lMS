const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const announcementSchema = new Schema({
  heading: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  category : {
    type: String,
    required: true,
    enum: ['Academic', 'Administrative', 'Co-curricular', 'Examination']
  }
});

module.exports = mongoose.model("Announcement", announcementSchema);
