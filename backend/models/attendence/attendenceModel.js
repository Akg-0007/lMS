
const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
   
    student_userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',

        required: true
    },
    present: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Attendence', attendanceSchema);








