const LearningMaterial = require('../models/course/learningMaterialModel')

const  createCourseFile = async (obj)=>{
    const courseFile = LearningMaterial(obj)
    return await courseFile.save()
}

module.exports = {createCourseFile}