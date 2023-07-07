const express = require('express');
const { importStudents,upload, showStudents, editStudent, showStudentById, deleteStudent } = require('../../controllers/adminStudnt');
// const busboy = require('busboy-body-parser');

const router = express.Router()
router.get('/showStudents',showStudents)
router.get('/getStudentById/:id',showStudentById)
router.put('/editStudent/:id',editStudent)
router.delete('/deleteStudent/:id',deleteStudent)
router.post('/addStudent',upload.single('file'), importStudents)
module.exports = router;
