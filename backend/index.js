require("dotenv").config();
var cors = require("cors");
const RawStudent = require('./models/student/rawStudentModel')
const express = require("express");
const csv = require('csv-parser');

const app = express();



const connectDatabase = require('./config/db')
connectDatabase();

app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});


const userRoutes = require('./routes/user')
const dashboardRoutes = require('./routes/dashboard')
// const assessmentRoutes = require('./routes/assessment')
// const attendanceRoutes = require('./routes/attendence.js')
const courseRoutes = require('./routes/course')
const assessmentRoutes = require('./routes/assessment')
const attendanceRoutes = require('./routes/attendence.js')
// const courseRoutes = require('./routes/course')
// const timetableRoutes=require('./routes/timetable')
// const sectionRoutes=require('./routes/section')
const createquizRoutes = require('./routes/quiz/createquiz')
const quizRoutes = require('./routes/quiz/quizquesstions')
const studentCoursesRoutes = require('./routes/studentCourses');

const { rateLimiter } = require("./middleware/requireAuth");
// const assigmentsModel = require("./models/assessment/assignment/assigmentsModel");
// admin students
const adminStudents=require('./routes/adminStudents.js/student')
// Routes 
app.use('/api/studentCourses', studentCoursesRoutes);
app.use('/api/user', rateLimiter, userRoutes)
app.use('/api/dashboard', rateLimiter, dashboardRoutes)
app.use('/api/course', rateLimiter, courseRoutes)
app.use('/api/assessment', rateLimiter, assessmentRoutes)
// app.use('/api/timetable', rateLimiter, timetableRoutes)
// app.use('/api/section', rateLimiter, sectionRoutes)tRoutes)
// app.use('/api/timetable', rateLimiter, timetableRoutes)
// app.use('/api/section', rateLimiter, sectionRoutes)

app.use('/api/createquiz', createquizRoutes)
app.use('/api/quiz', quizRoutes)

// app.use('/api/attendance', attendanceRoutes);
// app.use('/api/satt', attendanceRoutes);
app.use('/api/admin',adminStudents)



const server = app.listen(4000, async () => {
  console.log(`Listening on port http://localhost:${process.env.PORT}`);
});
