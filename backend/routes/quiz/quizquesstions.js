const express = require('express')
const router = express.Router()

const {requireAuth} = require('../../middleware/requireAuth')
const { delQuestion, editQuestion, addQuestions, getAllQuestions, getQuizById, getQuesionsById } = require('../../controllers/quizquestionsController')

//Quiz routes [PROTECTED]
router.get('/questions', getAllQuestions)
router.get('/quest/:id', getQuesionsById)
router.get('/all/:id', getQuizById)
router.post('/all/:id', editQuestion)
router.delete('/all/:id', delQuestion)
router.post('/question/:id',addQuestions)
// router.post('/addquestion', addQuestion)


module.exports = router;
