const Timetable=require('../models/timetableModel')


const getTimetable = async () => {
    
    const timetable = await Timetable.find()
    return timetable;  
}

module.exports = {
    getTimetable
}