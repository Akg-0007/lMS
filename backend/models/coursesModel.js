const mongoose = require('mongoose')
const Schema = mongoose.Schema


const courseSchema = new Schema({   
   
        courseId: {
                type: String,
                required: true
              },
              section: {
                type: String,
                required: true
              },
              students: [{
                name: {
                  type: String,
                  required: true
                },
                registrationNo: {
                  type: String,
                  required: true
                },
                rollNo: {
                  type: String,
                  required: true
                },
                attendance: {
                  type: Boolean,
                  required: true,
                  default: false
                }
              }],
              schedule: [{
                day: {
                  type: String,
                  required: true
                },
                time: {
                  type: String,
                  required: true
                },
                roomNo: {
                  type: String,
                  required: true
                }
              }],
              assignments: [{
                name: {
                  type: String,
                  required: true
                },
                submissions: {
                  type: Number,
                  required: true,
                  default: 0
                },
                deadline: {
                  type: Date,
                  required: true
                },
                action: {
                  type: String,
                  required: true
                }
              }],
              learningMaterials: [{
                type: String,
                required: true
              }]
            })


module.exports = mongoose.model('courses', courseSchema)
