const express = require('express');
const router = express.Router();

const { requireAuth } = require('../../middleware/requireAuth');
const { getAllQuiz, addQuiz, delQuiz, getQuizId, editQuiz } = require('../../controllers/createQuizController');

// Quiz routes [PROTECTED]
router.get('/all', getAllQuiz);
router.get('/:id', getQuizId);
router.put('/:id', editQuiz);
router.delete('/:id', delQuiz);
router.post('/addd', addQuiz);

module.exports = router;
