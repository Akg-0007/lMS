const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    userId: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    faculty: {
        type: Boolean,
        required: true
    },
    username:{
        type:String,
        required:true
    },
    email:{
        type:String
    }
    // assigment: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Assigment",
    //     }
    // ],
    // attendance: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Attendance",
    //     }
    // ],
    // timetable: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Timetable",
    //     }
    // ],
    // courses: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Course",
    //     }
    // ],
    // section: [
    //     {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: "Section",
    //     }
    // ]
})


module.exports = mongoose.model('User', userSchema)

// ,
//     assigment: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "assigments",
//         }
//     ],
//     attendance: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "attendance",
//         }
//     ],
//     timetable: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "timetable",
//         }
//     ],
//     courses: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "courses",
//         }
//     ],
//     section: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "sections",
//         }
//     ]