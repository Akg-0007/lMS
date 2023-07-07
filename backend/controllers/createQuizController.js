const mongoose = require('mongoose');
const Quiz= require("../models/quiz/createquizModel");

const getQuizId=async(req,res)=>{
    try {
        const user=await Quiz.findById(req.params.id).populate('AssociatedQuestions')
      // const questions = user.AssociatedQuestions.map(q => q.question);
      console.log(user)
      // console.log(user.AssociatedQuestions.map(q => q.question))




        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message:"unable to find question by id"});
    }
}
// const addQuiz = async (req, res) => {
//     const newQuiz = req.body;
//     const quiz = new Quiz(newQuiz);
  


    
//     try {
//       await quiz.save();
//       res.status(201).json(quiz);
//     } catch (error) {
//       res.status(409).json({ message: "Unable to add quiz" });
//     }
//   };
const addQuiz = async (req, res) => {
  try {
    const { title, description, section, marks, teacherId, AssociatedQuestions } = req.body;

    // Create a new quiz object with the provided data
    const newQuiz = new Quiz({
      title,
      description,
      section,
      marks,
      teacherId,
      AssociatedQuestions
    });

    // Save the new quiz object to the database
    const createdQuiz = await newQuiz.save();
    const quizId = createdQuiz._id;


    res.status(201).json({ message: 'Quiz created', quiz: createdQuiz,quizId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating quiz', error });
  }
};
  const getAllQuiz = async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const limit = parseInt(req.query.limit) || 10;
      const startIndex = (page - 1) * limit;
  
      const total = await Quiz.countDocuments();
      const totalPages = Math.ceil(total / limit);
  
      const users = await Quiz.find({})
        .skip(startIndex)
        .limit(limit);
  
      res.status(200).json({
        currentPage: page,
        totalPages,
        totalRecords: total,
        users
      });
    } catch (error) {
      res.status(404).json({ message: "unable to get all quizes" });
    }
  }
  
// const getAllQuiz=async(req,res)=>{
//     try {
//         const users =await createQuiz.find({});
//         res.status(200).json(users);

//     } catch (error) {
//         res.status(404).json({message:"unable to get all quizes"});
//     }
// }
const editQuiz = async (req, res) => {
    const updatedQuiz = req.body;
    try {
      const quiz = await Quiz.findByIdAndUpdate(
        req.params.id,
        updatedQuiz,
        { new: true }
      );
      res.status(201).json(quiz);
    } catch (error) {
      res.status(409).json({ message: "Unable to edit quiz" });
    }
  };
const delQuiz = async (req, res) => {
    try {
      await Quiz.deleteOne({ _id: req.params.id });
      res.status(200).json({ message: "Quiz deleted successfully" });
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  };
  

module.exports = {

    delQuiz,editQuiz,getAllQuiz,addQuiz,getQuizId
}