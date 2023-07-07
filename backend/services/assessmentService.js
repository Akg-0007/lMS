const Assignment = require('../models/assessment/assignment/assigmentsModel');



const createSingleAssignment = async (obj) => {
    // obj is entire Assignment object coming from request body
    const assignment = Assignment(obj)
    return await assignment.save()
}





module.exports = {
    createSingleAssignment
}