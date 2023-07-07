import React from "react";
import "../Notifications/Notification.css";
import man from "../../assets/man-logo.svg";
import eye from "../../assets/eye.svg";
import olivia from "../../assets/olivia.svg";
const Notification = ({ setNot }) => {
  return (
    <div className="notification">
      <div className="notification-heading">
        <span className="notification-content">Notifications</span>
      </div>

      <div className="notification-section">
        <div className="man-logo">
          <img src={man} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Assignment available</span>
              <span className="subject-name">
                “ INT407 ” : “Chapter 1 & Chapter 2”
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">a few moments ago</span>
            <span className="section-btn">New</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
          <img src={olivia} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">New Learning Material available in</span>
              <span className="subject-name"> “INT207” by Olivia Rhye</span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">45 minutes ago</span>
            <span className="section-btn-material">Material</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
          <img src={man} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">
                Exam Available "CAP820":Middle Term :12:00 - 14:00
              </span>
              <span className="subject-name"> | 11 APR,2023</span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">12 hours ago</span>
            <span className="section-btn">Exam </span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
          <img src={olivia} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">
                System Maintenance : LMS will undergo maintenance:  
               
              </span>
              <span className="subject-name">
              Estimated Down time : 3 hours
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">1 day ago</span>
            <span className="section-btn-maintenance">Maintenance</span>
          </div>
        </div>
      </div>

      <div className="notification-section">
        <div className="man-logo">
          <img src={man} alt="none" />
        </div>
        <div className="message-section">
          <div className="message-section-content">
            <p>
              <span className="section-content">
                Olivia Rhye updated grades :
              </span>
              <span className="subject-name">
                Check Grades for detailed view of grades.
              </span>
            </p>
          </div>
          <div className="message-section-content-2">
            <span className="section-content-2">3 days ago</span>
            <span className="section-btn-grades">Grades</span>
          </div>
        </div>
      </div>
      <div className="view-all">
        <div>
          <img src={eye} alt="eye" />
        </div>
        <div className="view-all-btn">View All</div>
      </div>
    </div>
  );
};
export default Notification;
