const AssignmentSubmission = require('../models/assessment/assignment/assignmentSubmissionModel');


const getAllAssignmentsSubmissions = async (obj) => {
    const submissions = await AssignmentSubmission.find(obj).populate('studentId', 'name rollNo -_id')
    return submissions
}


module.exports = {
    getAllAssignmentsSubmissions
}