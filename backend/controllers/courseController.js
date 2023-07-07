const { getAllStudents } = require('../helper/courseHelper')
// const {createCourseFile} = require('../services/courseService')
// const Course = require('../models/coursesMocourdel')


const mongoose = require('mongoose')
const getStudents = async (req, res) => {
    const { section } = req.headers
    const secCurse = section.split(" ")
    // [section, courseId]
    try {
        const students = await getAllStudents(secCurse);
        console.log(students, "-------")
        if (!students) {
            throw new Error('No Students to show')
        }
        res.status(200).json({ students })
    } catch (error) {
        console.log(error, "-----RRRR--")
        res.status(409).json({ message: "unable to get students" });

    }
}

module.exports = {
    getStudents
}