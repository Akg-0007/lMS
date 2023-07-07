const RawStudent = require('../models/student/rawStudentModel')

const mongoose = require('mongoose')
const studentCourses = async (req, res) => {
    try {
        const userId =  req.params.id;
        
        // Find the student by userId
        const student = await RawStudent.findOne({ userId }).populate('course');
        console.log(student)
        if (!student) {
          return res.status(404).json({ error: 'Student not found' });
        }
        
        res.status(200).json(student);
      } catch (error) {
        console.error('Error fetching student courses:', error);
        res.status(500).json({ error: 'Internal server error' });
      }
}

module.exports = {
    studentCourses
}

