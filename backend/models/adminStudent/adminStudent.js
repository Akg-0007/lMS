const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminStudent = new Schema({
  firstName : {
    type : String,
    required : true
  },
  lastName : {
    type : String,
    required : true
  },
  emailId : {
    type : String,
    required : true
  },
  mobileNo:{
    type : Number,
    required : true
  },
  fathersName:{
    type : String,
    required : true
  },
  mothersName:{
    type : String,
    required : true
  },
  fathersMobNo:{
    type : String,
    required : true
  },
  mothersMobNo:{
    type : String,
    required : true
  },
  dob:{
    type : Date,
    required : true
  },
  gender:{
    type : String,
    required : true
  },
  bloodGroup:{
    type : String,
    required : true
  },
  category:{
    type : String,
    required : true
  },
  programme:{
    type : String,
    required : true
  },
  graduation:{
    type : String,
    required : true
  },
  specalization:{
    type : String,
    required : true
  },
  batch:{
    type : Number,
    required : true
  },
  profilePic:{
    type : String,
    required : true
  },
  address1:{
    type : String,
    required : true
  },
  address2:{
    type : String,
    required : true
  },
  city:{
    type : String,
    required : true
  },
  zip:{
    type : Number,
    required : true
  },
  district:{
    type : String,
    required : true
  },
  state:{
    type : String,
    required : true
  },
  country:{
    type : String,
    required : true
  },
  correspondingAddress1:{
    type : String,
    required : true
  },
  correspondingAddress2:{
    type : String,
    required : true
  },
  correspondingCity:{
    type : String,
    required : true
  },
  correspondingZip:{
    type : Number,
    required : true
  },
  correspondingDistrict:{
    type : String,
    required : true
  },
  correspondingState:{
    type : String,
    required : true
  },
  correspondingCountry:{
    type : String,
    required : true
  }
  
 
});

module.exports = mongoose.model("adminStudent", adminStudent);

