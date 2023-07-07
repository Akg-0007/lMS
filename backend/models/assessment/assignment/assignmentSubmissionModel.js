const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assigmentSubmissionSchema = new Schema({
        studentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Student',
          required: true
        },
        submissionFile: {
            type: String,
            required: true
        },
        markEarned: {
            type: Number,
            required: true,
            default: null
        },
        feedback: {
          type: String,
          required: true,
        },
        assignmentId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Assignment',
          required: true
        }
      },{ timestamps: true });


mongoose.model('AssigmentSubmission', assigmentSubmissionSchema);
module.exports = mongoose.model("AssigmentSubmission", assigmentSubmissionSchema);
