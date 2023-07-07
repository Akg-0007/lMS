const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({

  
      image_url: {
        type: String,
      },
      question_text: {
        type: String,
        required: true,
      },
      question_type: {
        type: String,
        required: true,
      },
      // marks: {
      //   type: Number,
      //   required: true,
      // },
      options: [
        {
          option_text: {
            type: String,
            required: true,
          },
          is_correct: {
            type: Boolean,
            required: true,
            default: false,
          },
          is_option_image_url: {
            type: Boolean,
            required: true,
            default: false,
          },
          option_image_url: {
            type: String,
          },
        },
      ],
   
});



module.exports = mongoose.model("QuizQuestion", quizSchema);
