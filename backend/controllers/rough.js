const mongoose = require("mongoose");
const Assignment = require('../models/assessment/assignment/assigmentsModel');
const AssigmentSubmission = require('../models/assessment/assignment/assignmentSubmissionModel');



// Services
const { createSingleAssignment, findAllAssign } = require("../services/assessmentService");
// const {  } = require("../services/");

// // Helpers
const {
    getAllAssignmentsSubmissions
} = require("../helper/assessmentHelper");
const assignmentSubmissionModel = require("../models/assessment/assignment/assignmentSubmissionModel");



const getAssignmentsSubmissionsById = async (req, res) => {
  const { assignmentId } = req.params
  const userId = req.user.userId;
  try {
    const submissions = await getAllAssignmentsSubmissions({ assignmentId });
    if (!submissions) {
      throw Error("No Submissions to show");
    }
    console.log(submissions, "=")
    res.status(200).json({ submissions });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const createAssignment = async (req, res) => {
  try{
    const assignment = await createSingleAssignment(req.body)
    if (!assignment) {
      throw Error("Unable to save");
    }
    res.status(200).json({ assignment });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const findAllAssignment =async (req,res)=>{
  
  try {
    const users =await Assignment.find({});
    res.status(200).json(users);

} catch (error) {
    res.status(404).json({message:"unable to get all assignments"});
}

}
const findAllSumbission =async (req,res)=>{
  
  try {
    const users =await AssigmentSubmission.find({})
     .populate( { path: "assignmentId", model: "Assignment" } );
    res.status(200).json(users);
    console.log(users)

} catch (error) {
    res.status(404).json({message:"unable to get all assignments"});
}

}

const findAssigmnetById=async(req,res)=>{
  try {
      const user=await Assignment.findById(req.params.id)
    
      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({message:"unable to find Assignment by id"});
  }
}

const findAssigmnetSubById=async(req,res)=>{
  try {
      const user=await assignmentSubmissionModel.findById(req.params.id).populate("assignmentId")
    
      res.status(200).json(user);
  } catch (error) {
      res.status(404).json({message:"unable to find Submission by id"});
  }
}
const updateFile = async (req, res) => {
  const { id } = req.params;
  const { file } = req.body;
  console.log(file,id)

  try {
    const updatedAssignment = await Assignment.findByIdAndUpdate(
      id,
      { file },
      { new: true, runValidators: true }
    );

    if (!updatedAssignment) {
      return res.status(404).send(`Assignment with ID ${id} not found`);
    }

    return res.status(200).json(updatedAssignment);
  } catch (err) {
    return res.status(500).send(err);
  }
};




module.exports = {
  getAssignmentsSubmissionsById,
  createAssignment,findAllAssignment,findAssigmnetById,findAllSumbission,findAssigmnetSubById,updateFile
};