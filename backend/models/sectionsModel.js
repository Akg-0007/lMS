const mongoose = require('mongoose')
const Schema = mongoose.Schema


const sectionsSchema = new Schema({   
   
    section_name:{
        type:String,
        unique:true
    },
    courses_ids: [{ type: Schema.Types.ObjectId, ref: "Course" }],
    assigments_ids: [{ type: Schema.Types.ObjectId, ref: "Assigment" }],
   

}) 


module.exports = mongoose.model('Section', sectionsSchema)
