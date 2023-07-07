const mongoose = require('mongoose');
const teacherModel = require('../models/teacher/teacherModel')
const studentModel = require('../models/student/studentModel')
const courseModel = require('../models/course/courseModel')
const assigmentsModel = require('../models/assessment/assignment/assigmentsModel')


const connectDatabase = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Mongoose Connected");
    }).catch((error) => {
        console.log(error);
    });
}



// mongoose.model('Assignment', assigmentsModel)
module.exports = connectDatabase;