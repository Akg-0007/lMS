import React, { useState } from "react";
import Dropdown from "../../dropdown/Dropdown";
import down from "../../../assets/arrow-icon.svg";
import "../../landing_page_teacher/main_land/CoursesCSS.css";
import "../../dropdown/Dropdown.css";
import "../StudentDashboard/Timetable.css"

function Timetable() {
  const [day, setDay] = useState("");

  // Define an array of objects containing the details of each schedule item
  const schedules = [
    {
      id: 1,
      subject: "INT 207",
      room: "CSE00AA | 38-205",
      time: "09:00 AM - 10:00 AM",
      day: "Monday"
    },
    {
      id: 2,
      subject: "INT 208",
      room: "CSE00BB | 38-206",
      time: "10:00 AM - 11:00 AM",
      day: "Tuesday"
    },
    {
      id: 3,
      subject: "INT 209",
      room: "CSE00CC | 38-207",
      time: "11:00 AM - 12:00 PM",
      day: "Wednesday"
    },
    {
      id: 4,
      subject: "INT 209",
      room: "CSE00CC | 38-207",
      time: "11:00 AM - 12:00 PM",
      day: "Thursday"
    },
    {
      id: 5,
      subject: "INT 209",
      room: "CSE00CC | 38-207",
      time: "11:00 AM - 12:00 PM",
      day: "Friday"
    },
    {
      id: 6,
      subject: "INT 202",
      room: "CSE00CC | 38-208",
      time: "11:00 AM - 1:00 PM",
      day: "Friday"
    },
    
    // Add more schedules for other days of the week
    // ...
  ];

  // Filter the schedules based on the selected day
  const filteredSchedules = day ? schedules.filter(schedule => schedule.day === day) : schedules;

  return (
    <div className="lpart1">
      <div className="top_head">
        <div className="top_elements" id="head2">
          Schedule Timeline
        </div>
        <div className="top_elements">
          <div className="custom-select">
            <Dropdown
              name={"All Schedule"}
              options={["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]}
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
