import React from "react";
import "./Adminenrollments.css";
import olivia from "../../../assets/olivia.svg";
import eye from "../../../assets/eve1.svg";
import { Navigate, useNavigate } from "react-router-dom";
const Adminenrollments = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-enrollment">
      <div className="exam-container">
        <p className="exam-heading"> Latest Enrollments</p>
        <p className="exam-view" onClick={()=>{
       navigate('/home/Enrollments')
      }}>View All</p>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">Reg No.:11913078</span>
            <span className="enrollments-designation">Student</span>
          </div>
          <div className="enrollments-eye">
            <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
      
        <hr></hr>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">Reg No.:11913078</span>
            <span className="enrollments-designation">Student</span>
          </div>
          <div className="enrollments-eye">
          <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
        {" "}
        <hr></hr>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">Reg No.:11913078</span>
            <span className="enrollments-designation">Teacher</span>
          </div>
          <div className="enrollments-eye">
          <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
        {" "}
        <hr></hr>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">Reg No.:11913078</span>
            <span className="enrollments-designation">Teacher</span>
          </div>
          <div className="enrollments-eye">
          <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
        {" "}
        <hr></hr>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">Reg No.:11913078</span>
            <span className="enrollments-designation">Student</span>
          </div>
          <div className="enrollments-eye">
          <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
        {" "}
        <hr></hr>
      </div>

      <div className="enrollments-container">
        <div className="enrollments-image">
          <img src={olivia} alt="" />
        </div>
        <div className="alignments">
          <div className="enrollments-details">
            <span className="enrollments-name">Manish Rathore</span>
            <span className="enrollments-no">
               Reg no: 139027
            </span>
            <span className="enrollments-designation">Teacher</span>
          </div>
          <div className="enrollments-eye">
          <img src={eye} alt="" onClick={()=>{
       navigate('/home/Enrollments')
      }} />
          </div>
        </div>
      </div>

      <div className="enrollments-line">
        {" "}
        <hr></hr>
      </div>
    </div>
  );
};
export default Adminenrollments;
