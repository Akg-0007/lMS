const mongoose = require('mongoose');
const csv = require('csv-parser');
const fs = require('fs');
const adminSudent=require("../models/adminStudent/adminStudent")
const multer = require('multer');
const moment = require('moment');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "assets")
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
const importStudents = (req, res) => {
    console.log(req.file, "req.file");
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }
    const file = req.file.path;
    fs.createReadStream(file)
      .pipe(csv())
      .on('data', (row) => {
        // console.log(row); // log row data to check if all rows are being parsed correctly

        const newStudent = new adminSudent({
          firstName: row.firstName,
          lastName: row.lastName,
          emailId: row.emailId,
          mobileNo: row.mobileNo,
          fathersName: row.fathersName,
          mothersName: row.mothersName,
          fathersMobNo: row.fathersMobNo,
          mothersMobNo: row.mothersMobNo,
        //   dob: new Date(row.dob), 
          dob: moment(row.dob, 'DD/MM/YYYY').toDate(),
          gender: row.gender,
          bloodGroup: row.bloodGroup,
          category: row.category,
          programme: row.programme,
          graduation: row.graduation,
          specalization: row.specalization,
          batch: row.batch,
          profilePic: row.profilePic,
          address1: row.address1,
          address2: row.address2,
          city: row.city,
          zip: row.zip,
          district: row.district,
          state: row.state,
          country: row.country,
          correspondingAddress1: row.correspondingAddress1,
          correspondingAddress2: row.correspondingAddress2,
          correspondingCity: row.correspondingCity,
          correspondingZip: row.correspondingZip,
          correspondingDistrict: row.correspondingDistrict,
          correspondingState: row.correspondingState,
          correspondingCountry: row.correspondingCountry,
        }); 
  
        // save the new adminStudent object to the database
        newStudent.save()
          .then(() => console.log(`Student ${row.firstName} ${row.lastName} added to database`))
          .catch(err => console.error(`Error adding student ${row.firstName} ${row.lastName}:`, err));

      })
      .on('end', () => {
        fs.unlinkSync(req.file.path); // delete the temporary file
        console.log('CSV file successfully processed');
        res.status(200).json({ message: 'CSV file successfully processed' });
      });
  };

  const showStudents =async(req,res)=>{
    try {
                const students =await adminSudent.find({});
                res.status(200).json(students);
        
            } catch (error) {
                res.status(404).json({message:"unable to get all students"});
            }
  }
  const showStudentById=async(req,res)=>{
    
    try {
        const student=await adminSudent.findById(req.params.id)
        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({message:"unable to find student by its id"});
    }
  }
  const editStudent = async (req, res) => {
    const updatedStudents = req.body;
    try {
      const student = await adminSudent.findByIdAndUpdate(
        req.params.id,
        updatedStudents,
        { new: true }
      );
      res.status(201).json(student);
    } catch (error) {
      res.status(409).json({ message: "Unable to edit student" });
    }
  };

  const deleteStudent=async(req,res)=>{
    try {
        await adminSudent.deleteOne({ _id: req.params.id });
        res.status(200).json({ message: "Student deleted successfully" });
      } catch (error) {
        res.status(409).json({ message: error.message });
      }
  }
module.exports = {
    importStudents,upload,showStudents,editStudent,showStudentById,deleteStudent
}
