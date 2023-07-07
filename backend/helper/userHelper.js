const Teacher = require('../models/teacher/teacherModel');
const RawStudent = require('../models/student/rawStudentModel')

const getSingleUser = async (obj) => {
  const [teacher, rawStudent] = await Promise.all([
    Teacher.findOne(obj),
    RawStudent.findOne(obj)
  ]);

  if (teacher || rawStudent) {
    // Return the first non-null value
    return teacher || rawStudent;
  } else {
    // Return null if user does not exist in either collection
    return null;
  }
}

module.exports = {
  getSingleUser
}

// const Teacher = require('../models/teacher/teacherModel');
// const RawStudent = require('../models/student/rawStudentModel')

// const getSingleUser = async (obj) => {
//   return await Teacher.findOne(obj) && await RawStudent.findOne(obj) 
// }



// module.exports = {
//     getSingleUser
// }