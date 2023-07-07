const RawStudent = require("../models/student/rawStudentModel");

const getAllStudents = async (secCurse) => {

  const courses1 = await RawStudent.find({ section: secCurse[0]}).populate('course');
  // const courses1 = await RawStudent.find({ section: secCurse[0]}).populate('course').populate('attendance');
  
  console.log(courses1);
  return courses1;
};

module.exports = {
  getAllStudents,
};
