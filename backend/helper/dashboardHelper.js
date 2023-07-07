
const Announcement = require("../models/announcement/announcementModel");
const Teacher = require('../models/teacher/teacherModel')
const Assignment = require('../models/assessment/assignment/assigmentsModel')


const getAllAnnouncements = async (category) => {
    console.log(category)
    return await Announcement.find({category})
}
const getAllCources = async (obj) => {
    const teacher = await Teacher.findOne(obj).populate('section.courses')
    
    const sections = teacher.section
    return sections
}

const getAllAssignments = async (obj) => {
    const data = await Assignment.find(obj)
    return data
}

module.exports = {
    getAllAnnouncements,
    getAllCources,
    getAllAssignments
}