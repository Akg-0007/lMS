import React from "react";
import { useState } from "react";
import vector2 from "../../../assets/notificationyes.svg";
import "./Teacherschedule.css";
import plus from "../../../assets/blackplus.svg";
import previous from "../../../assets/previous.svg";
import next from "../../../assets/next.svg";
import Eventslist from "../Events/Eventscreate/Eventslist";
import olivia from "../../../assets/olivia.svg";
import Notification from "../../../components/Notifications/Notification";
import Eventspopup from "../Events/Eventspopup";
const Teacherschedule = () => {
  const [selectedOption, setSelectedOption] = useState("yes");

  const [popupState, setPopupState] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const [showModal, setShowModal] = useState(false);

  return (
    <>
    
    {popupState && <Eventspopup setPopupstate={setPopupState} />}

      <div className="main-dash-heading">
        <span className="dash_heading">Teacher</span>
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

      <div className="row">
        <div className="col-4">
          <div className="teacher-profile">
            <div className="teacher-schedule-img">
              <img src={olivia} allt="" />
              <span className="ts-name">Dr.Olivia khalifa</span>
              <span className="ts-department">
                Department of Computer Science & Engineering
              </span>
              <span className="ts-id">Reg no. : 28171</span>
            </div>
            <div className="ts-bio">
              <span>Bio</span>
              <p>
              I am an Assistant Professor of Computer Science and Engineering with a PhD and experience in teaching, research, and industry. My research interests include computer networks, distributed systems, and network security. I enjoy developing and teaching courses in programming, data structures, algorithms, computer networks, and database systems. I am an Assistant Professor of Computer Science and Engineering with a PhD and experience in teaching, research, and industry. My research interests include computer networks, distributed systems, and network security. I enjoy developing and teaching courses in programming, data structures, algorithms, computer networks, and database systems.
              </p>
            </div>
          </div>
          <div className="teacher-profile2">
          <div className="teacher-schedule-contact">
             
              <span className="ts-ctc">Contact</span>
              <span className="ts-no">
              Example 123@gmail.com
              </span>
              <span className="ts-no">9875462158</span>
            </div>
            <div className="teacher-schedule-contact">
             
              <span className="ts-ctc">Address</span>
              <span className="ts-no">
              32,Subhash Nagar, Near City Hospital,
Jalandhar, Jalandhar, Punjab, India
              </span>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="teacher-profile-section">
            <div className="profile-skills">
              <span className="pr-skill-heading">Skills</span>
            </div>

            <div className="profile-skills-content">
              <span className="profile-skill-btn">Python</span>
              <span className="profile-skill-btn">Data Structures</span>
              <span className="profile-skill-btn">Algorithms</span>
              <span className="profile-skill-btn">Computer Networks</span>
              <span className="profile-skill-btn">Database Systems</span>
            </div>

            <div className="profile-skills">
              <span className="pr-skill-heading">Work Experience</span>
            </div>

            <div className="profile-skills-content">
              <span className="teacher-schedule-content">
                2005-2008 - Ut tempora iusto blandit official. 2008-2012 - Quam
                ipsum at provident suscipit vero omnis cupiditate aspernatur.
                2012-2017 - Fugiat blanditiis delectus nostrum for aliquam.
              </span>
            </div>
          </div>
          <div className="teacher-profile-section2">
            <div className="event-schedule-display">
              <div className="event-sort">
                <div className="switch-field">
                  <input
                    type="radio"
                    id="radio-three"
                    name="switch-two"
                    value="yes"
                    checked={selectedOption === "yes"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="radio-three">Month</label>

                  <input
                    type="radio"
                    id="radio-four"
                    name="switch-two"
                    value="maybe"
                    checked={selectedOption === "maybe"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="radio-four">Week</label>

                  <input
                    type="radio"
                    id="radio-five"
                    name="switch-two"
                    value="no"
                    checked={selectedOption === "no"}
                    onChange={handleOptionChange}
                  />
                  <label htmlFor="radio-five">Day</label>
                </div>
                <p className="exam-view">
                <button className="Btn Btn--outline" onClick={() => setPopupState(true)}>
                  <img src={plus} alt="plus" /> Add slots
                </button>
                </p>
              </div>
              <div className="event-sort">
                <p className="event-view-date">April 28,2023</p>
                <div>
                  <p className="event-view-date">
                   
                    Week 1
                    <button className="previous-btn ">
                      <img src={previous} alt="previous" />
                    </button>
                    <button className="next-btn">
                      <img src={next} alt="next" />
                    </button>
                  </p>
                </div>
              </div>
              <Eventslist />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Teacherschedule;


