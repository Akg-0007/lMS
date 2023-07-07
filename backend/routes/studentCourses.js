const express = require('express');
const router = express.Router()

// const studentCourses = require('../controllers/studentCoursesController')
const {studentCourses} = require('../controllers/studentCoursesController')

router.get('/get/studentCourses/:id', studentCourses)

module.exports = router