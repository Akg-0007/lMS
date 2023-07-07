const express = require('express');
const router = express.Router()

const { getStudents } = require('../controllers/courseController');
// const {requireAuth} = require('../middleware/requireAuth')


router.get('/get/students', getStudents)
// router.get('/:id', requireAuth, coursebyid )



module.exports =  router;