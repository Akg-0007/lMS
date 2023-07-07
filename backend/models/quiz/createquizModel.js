const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const createQuizSchema = new Schema({
  title : {
    type : String,
    required : true
  },
  description : {
    type : String,
    required : true
  },
  section : {
    type : String,
    required : true
  },
  marks:{
    type : Number,
    required : true
  },
  teacherId:{
    type : Number,
    required : true
  }
  ,AssociatedQuestions: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'QuizQuestion'
  }]
 
});

module.exports = mongoose.model("Quiz", createQuizSchema);

