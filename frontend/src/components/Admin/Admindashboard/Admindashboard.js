import React, { useState, useEffect } from "react";
import "./Admindashboard.css";
import vector2 from "../../../assets/notificationyes.svg";
import Notification from "../../Notifications/Notification";
import Adminuserrecord from "../Adminuserrecord/Adminuserrecord";
import Adminupcomingevents from "../Adminupcomingexam/Adminupcomingevents";
import Adminenrollments from "../Adminenrollments/Adminenrollments";
import Admingraph from "../Admingraph/Admingraph";
import Adminannouncements from "../Adminannouncements/Adminannouncements";
import Adminanimation from "../Adminanimation/Adminanimation";

function Admindashboard() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
  
    const timeout = setTimeout(() => {
      setData(data);
      setIsLoading(false);
    }, 2000);

  
    return () => clearTimeout(timeout);
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

 

  if (isLoading) {
    return <div><Adminanimation/></div>;
  }

  return (
    <div className="main-dash">
      <label htmlFor="theme" className="theme">
      <span className="light-mode">Light</span>
      <span className="theme__toggle-wrap">
        <input
          id="theme"
          className="theme__toggle"
          type="checkbox"
          role="switch"
          name="theme"
          value="dark"
         
        />
        <span className="theme__fill"></span>
        <span className="theme__icon">
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
          <span className="theme__icon-part"></span>
        </span>
      </span>
      <span className="dark-mode">Dark</span>
    </label>
    <div className="main-dash-heading">
        <span className="dash_heading">Welcome Back, Admin!</span>
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

      <Adminuserrecord />
      <div className="section-1">
      <div className="section-1-timetable">
          <br></br>

          <Admingraph />
          <br></br>

          <Adminannouncements />
        </div>
        <div className="section-1-courses">
          <Adminenrollments />

          <Adminupcomingevents />
        </div>
      </div>
     
  </div>
  );
}

export default Admindashboard;
