import React, { useState } from "react";
import Dropdown from "../../../dropdown/Dropdown";
import down from "../../../../assets/arrow-icon.svg";
import "../../../landing_page_teacher/main_land/CoursesCSS.css";
import "../../../dropdown/Dropdown.css";
import "../../../Student/StudentDashboard/Timetable.css"

function Timetable() {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [week, setWeek] = useState("");

  const schedules = [
    {
      id: 1,
      subject: "Slogan writing",
      room: "CSE00AA | 38-205",
      time: "09:00 AM - 10:00 AM",
      day: "Monday",
      month: "May",
      week: "Week 1"
    },
    {
      id: 2,
      subject: "Ceremony",
      room: "CSE00BB | 38-206",
      time: "10:00 AM - 11:00 AM",
      day: "Tuesday",
      month: "August",
      week: "Week 2"
    },
    {
      id: 3,
      subject: "Slogan against the Corruption ",
      room: "CSE00CC | 38-207",
      time: "1:00 PM - 2:00 PM",
      day: "Wednesday",
      month: "June",
      week: "Week 3"
    },
    {
      id: 4,
      subject: "Induction ",
      room: "CSE00CC | 38-207",
      time: "11:00 AM - 12:00 PM",
      day: "Thursday",
      month: "May",
      week: "Week 1"
    },
    {
      id: 5,
      subject: "INT 209",
      room: "CSE00CC | 38-207",
      time: "3:00 PM - 4:00 PM",
      day: "Friday",
      month: "July",
      week: "Week 2"
    },
    {
      id: 6,
      subject: "National Assessment and Accreditation Council (NAAC) ",
      room: "CSE00CC | 38-208",
      time: "11:00 AM - 1:00 PM",
      day: "Saturday",
      month: "February",
      week: "Week 3"
    },
   
   
    
  ];
  

  // Filter the schedules based on the selected day
  const filteredSchedules = schedules.filter(schedule => {
    if (day && schedule.day !== day) {
      return false;
    }
    if (month && schedule.month !== month) {
      return false;
    }
    if (week && schedule.week !== week) {
      return false;
    }
    return true;
  });
  

  return (
    <div className="lpart1">
      <div className="top_head">
        <div className="top_elements" id="head2">
          Events Timeline
        </div>
        <div className="top_elements">
          <div className="custom-select">
            <Dropdown
              name={"All Schedule"}
              options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday","Sunday"]}
              width={"auto"}
              setState={setDay}
            />
          </div>
        </div>
      </div>

      <div className="timetable-container">
        {filteredSchedules.map(schedule => (
          <div key={schedule.id} className={`container-${schedule.id}`}>
            <p className="timetable-subject">{schedule.subject}</p>
            <p className="timetable-roomno">{schedule.room}</p>
            <button className={`Btn timetable-btn${schedule.id} Btn--large`}>{schedule.time}</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;

