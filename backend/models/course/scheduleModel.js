const mongoose = require('mongoose')
const Schema = mongoose.Schema


const scheduleSchema = new Schema({   
        day: {
          type: String,
          required: true
        },
        timeFrom: {
          type: String,
          required: true
        },
        timeTo: {
            type: String,
            required: true
          },
        roomNo: {
          type: String,
          required: true
        }
      
}, 
{timestamps:true})


module.exports = mongoose.model('Schedule', scheduleSchema)
