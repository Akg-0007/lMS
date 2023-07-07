
const Student = require('../models/student/rawStudentModel');
const Attendance = require('../models/attendence/attendenceModel');
 

// exports.getStudentAttendance = async (req, res) => {
//     const { studentId } = req.params;
  
//     try {
//       const student = await Student.findById(studentId).populate('attendance');
//       if (!student) {
//         return res.status(404).json({ error: 'Student not found' });
//       }
//       return res.json({ attendance: student.attendance });
//     } catch (err) {
//       console.error(err);
//       return res.status(500).json({ error: 'Server error' });
//     }
//   };

module.exports = {
    
}



