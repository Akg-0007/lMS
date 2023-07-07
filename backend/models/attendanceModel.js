const mongoose = require('mongoose')
const Schema = mongoose.Schema


const attendanceSchema = new Schema({   
   
    attendance_total:{
        type:Number,
        required:true
    },
    attended_total:{
        type:Number,
        required:true
    }
}) 


module.exports = mongoose.model('Attendance', attendanceSchema)
