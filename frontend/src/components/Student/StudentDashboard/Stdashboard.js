import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Announcement from "../../landing_page_teacher/announcement/Announcement";
import Lpagecourse from "../../landing_page_teacher/landingpagecourse/lpagecourse";
import QuestionBank from "../../landing_page_teacher/ouestionbank/QuestionBank";
import RecentAssignments from "../../landing_page_teacher/recentAss/RecentAssignments";
import Progress_bar from "../../Progress/Progress_bar";
import CircularProgressBar from "../../Progress/Circular_bar";
import Timetable from "./Timetable";
import Cgpa from "../../CGPA/Cgpa";
import Upcomingexam from "./Upcomingexam";
import Assignmentst from "./Assignmentst";
import Coursest from "./Coursest";
import Studentannouncement from "../StudentDashboard/Studentannouncement";
import Notification from "../../Notifications/Notification";
import vector2 from "../../../assets/notificationyes.svg";
import Studentnotification from "./Studentnotification";
import { NavLink, useNavigate } from "react-router-dom";
const Stdashboard = () => {
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
          <Studentnotification />
        </div>
      )}

      <div className="section-1">
        <div className="section-1-timetable">
          <Timetable/>
          <br></br>

          <NavLink to="/home/courses">
          <Coursest />
          </NavLink>


          <Studentannouncement />
        </div>
        <div className="section-1-courses">
          <Progress_bar />
          
          <NavLink to="/home/grades">
          <Cgpa />
          </NavLink>

          <NavLink to="/home/assignment">
          <Upcomingexam />
          </NavLink>

          <NavLink to="/home/assignment">
            <Assignmentst />
          </NavLink>

        </div>
      </div>
    </div>
  );
};
export default Stdashboard;
