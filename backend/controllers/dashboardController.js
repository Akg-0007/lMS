const Teacher = require("../models/teacher/teacherModel");
const Timetable = require("../models/timetable/timetableModel");
const Announcement = require("../models/announcement/announcementModel");
const Assignment = require("../models/assessment/assignment/assigmentsModel");
// const Quiz = require("../models/quiz/quizModel");

const mongoose = require("mongoose");

// Services
// const {  } = require("../services/");
// const {  } = require("../services/");

// // Helpers
const {
  getAllAnnouncements,
  getAllCources,
  getAllAssignments
} = require("../helper/dashboardHelper");

const getDashboard = async (req, res) => {};

const getAnnouncements = async (req, res) => {
  const category = req.query.category;
  try {
    const announcements = await getAllAnnouncements(category);
    if (!announcements) {
      throw Error("No Announcements to show");
    }

    res.status(200).json({ announcements });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getCources = async (req, res) => {
  const userId = req.user && req.user.userId;

  if (!userId) {
    // The user is not logged in, redirect them to the login page.
    res.redirect('/login');
  }
  // Here , in response we are sendiing all Sections that the teacher teaches ,
  // because the Sections has the info about the Courses the teacher teaches in those Sections
  // and that will be useful in other modules on frontend

  try {
    const sections = await getAllCources({ userId });
    if (!sections) {
      throw Error("No Cources to show");
    }

    res.status(200).json({ sections });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAssignments = async (req, res) => {
  const userId = req.body.userId;
  console.log("req.user", req.body)

  try {
    const assignments = await getAllAssignments({ createdBy: userId });
    if (!assignments) {
      throw Error("No Assignments to show");
    }

    res.status(200).json({ assignments });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getDashboard,
  getAnnouncements,
  getCources,
  getAssignments
};
