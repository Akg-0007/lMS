const mongoose = require('mongoose');
const { getTimetable } = require('../helper/timetableHelper');
const fulltimetable = async (req, res) => {
try {
    const timetables=await getTimetable();
    console.log("timetable" , timetables)
    res.status(200).json(timetables)
    
} catch (error) {
    res.status(409).json({message: "unable to get all courses"});

}
}

module.exports = {
    fulltimetable
}