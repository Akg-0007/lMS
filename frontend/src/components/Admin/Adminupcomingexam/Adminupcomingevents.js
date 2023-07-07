import React from "react";
import "./Adminupcomingevents.css";
import calendar from "../../../assets/calendar.svg"
import time from "../../../assets/clock.svg"
import { Navigate, useNavigate } from "react-router-dom";
const Adminupcomingevents = () => {
  const navigate = useNavigate();
  return (
    <div className="admin-event">
      <div className="exam-container">
        <p className="exam-heading">Upcoming Events</p>
        <p className="exam-view"  onClick={()=>{
       navigate('/home/Eventscreate')
      }}>View All</p>
      </div>
      <div className="event-1">
        <span className="slogan-head">Slogan against the Corruption</span>
        <span className="event-date"><img src={calendar}/>30 Apr</span>
        <span className="event-time"><img src={time}/>10:00 am Onwards</span>
      </div>

      <div className="event-2">
        <span className="slogan-head">
          National Assessment and Accreditation Council (NAAC) - Student
          Satisfaction Survey
        </span>
        <span className="event-date"> <img src={calendar}/>28 Apr</span>
        <span className="event-time"><img src={time}/>09:00 am Onwards</span>
      </div>

      <div className="event-3">
        <span className="slogan-head">Slogan against the Corruption</span>
        <span className="event-date"><img src={calendar}/>30 Apr</span>
        <span className="event-time"><img src={time}/>10:00 am Onwards</span>
      </div>
    </div>
  );
};
export default Adminupcomingevents;
