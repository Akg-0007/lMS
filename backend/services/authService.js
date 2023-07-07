const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/userModel')
const Teacher = require('../models/teacher/teacherModel');
// const Student = require('../models/student/studentModel');
const RawStudent = require('../models/student/rawStudentModel');


const hashPassword  = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)
    return hash
}

const matchPassword = async (password, userPassword, isHashed) => {
  // if (isHashed) {
  //   return await bcrypt.compare(password, userPassword);
  // } else {
  //   return password === userPassword;
  // }

    return await bcrypt.compare(password, userPassword);
  
};

// const matchPassword = async (password, userPassword, isHashed) => {
//   if (isHashed) {
//     return await bcrypt.compare(password, userPassword);
//   } else {
//     return password === userPassword;
//   }
// };

  
const createToken = async (userId, time) => {
    return await jwt.sign({ userId }, process.env.SECRET, { expiresIn: time })
    return jwt.sign({ userId }, process.env.SECRET, { expiresIn: time })
}

const updatePassword = async (userId, password) => {
    const newHashedPassword = await hashPassword(password);
  
    const [teacher, rawStudent] = await Promise.all([
      Teacher.findOneAndUpdate({userId}, {password: newHashedPassword}),
      RawStudent.findOneAndUpdate({userId}, {password: newHashedPassword})
    ]);
  
    if (teacher || rawStudent) {
      // Return the first non-null value
      return teacher || rawStudent;
    } else {
      // Return null if user does not exist in either collection
      return null;
    }
  }
  
// const updatePassword = async (userId, password) => {
//     const newhashedPassword = await hashPassword(password);
//         return await Teacher.findOneAndUpdate({userId}, {password: newhashedPassword});
// }

module.exports = {
    hashPassword,
    matchPassword,
    createToken,
    updatePassword
}