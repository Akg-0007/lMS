const mongoose = require('mongoose');
const QuizQuestion= require("../models/quiz/quizquestionsModel");
const Quiz=require("../models/quiz/createquizModel")



const getQuesionsById=async(req,res)=>{
    try {
        const user=await QuizQuestion.findById(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:"unable to find question by id"});
    }
}
// const getQuizById = async (req, res) => {
//   try {
//     const quiz = await Quiz.findById(req.params.id);
//     if (!quiz) {
//       return res.status(404).json({ message: "Quiz not found" });
//     }
//     const questionId = req.params.questionId;
//     const question = quiz.questions.find(q => q._id.toString() === questionId);
//     if (!question) {
//       return res.status(404).json({ message: "Question not found" });
//     }
//     res.status(200).json(question);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };
const getQuizById = async (req, res) => {
  try {
    const quiz = await QuizQuestion.findOne({ 'questions._id': req.params.id }, { 'questions.$': 1 });
    if (!quiz) {
      return res.status(404).json({ message: "Quiz not found" });
    }
    const question = quiz.questions[0];
    res.status(200).json(question);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
// pass question id and add question in it 
const addQuestions= async (req, res) => {
   
    
  
    const { id } = req.params;
    const { image_url,question_text,question_type,options } = req.body;
  
    try {
      const quiz = await Quiz.findById(id);
      if (!quiz) {
        return res.status(404).json({ error: "Quiz not found" });
      }
      const quizQuestion = new QuizQuestion({image_url,question_text,question_type,options});
      console.log(quizQuestion)
      await quizQuestion.save();
      quiz.AssociatedQuestions.push(quizQuestion);
      await quiz.save();
      res.status(201).json({ message: "Question added to quiz" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Server error" });
    }
  };

 const getAllQuestions=async(req,res)=>{
    try {
        const users =await QuizQuestion.find({});
        res.status(200).json(users);

    } catch (error) {
        res.status(404).json({message:"unable to get all questions"});
    }
}
 const editQuestion=async(req,res)=>{
    let user=req.body;
    const edituser=new QuizQuestion(user);
    try {
       await Quiz.updateOne({_id:req.params.id},edituser);
       res.status(201).json(edituser);

    } catch (error) {
        res.status(409).json({message:"unable to edit question"});

    }
}

const delQuestion = async (req, res) => {

try {
  await QuizQuestion.deleteOne({ _id: req.params.id });
  res.status(200).json({ message: "Quiz deleted successfully" });
} catch (error) {
  res.status(409).json({ message: error.message });
}
};


 

module.exports = {
    // getuse,edituser,getallquestions,adduser
    delQuestion,editQuestion,getAllQuestions,addQuestions,getQuizById,getQuesionsById
}