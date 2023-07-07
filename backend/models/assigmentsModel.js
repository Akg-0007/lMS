const mongoose = require('mongoose')
const Schema = mongoose.Schema


const assigmentsSchema = new Schema({   
   
    assigment_name:{
        type:String,
        required:true
    }
    ,
    assigment_no:{
        type:Number,
        required:true
    }
    ,assigment_deadline:{
        type:Number,
    },
    attachment_name:{
        type:String
    }  
}, 
{timestamps:true})


module.exports = mongoose.model('Assigment', assigmentsSchema)
