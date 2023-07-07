import React, { useState } from "react";
import "./CoursesCSS.css";
import vector from "../../../assets/arrow_course.svg";
import vector1 from "../../../assets/Layer4.png";
import vector2 from "../../../assets/notificationyes.svg";
import Announcement from "../announcement/Announcement";
import ScheduleTimeline from "../timeLIne/ScheduleTimeline";
import RecentAssignments from "../recentAss/RecentAssignments";
import cap820 from "../../../assets/cap820.svg";
import "../recentAss/RecentAssignments.css";
import QuestionBank from "../ouestionbank/QuestionBank";
import Lpagecourse from "../landingpagecourse/lpagecourse";
import Notification from "../../Notifications/Notification";

function LandingTeacher() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="main-dash">
      <div className="main-dash-heading">
        <span className="dash_heading">Dashboard</span>
        <img
  src={vector2}
  className="notification_logo"
  alt=""
  onClick={() => {
    if (showModal) {
      closeModal();
    } else {
      openModal();
    }
  }}
/>

      </div>

      
      {showModal && (
        <div className="notification-modal">
          
          <Notification />
         
        </div>
      )}

      <div className="section-1">
        <div className="section-1-timetable">
          <ScheduleTimeline />
          <Announcement />
        </div>
        <div className="section-1-courses">
          <Lpagecourse />
          <RecentAssignments />
          <QuestionBank />
        </div>
      </div>
    </div>
  );
}

export default LandingTeacher;
