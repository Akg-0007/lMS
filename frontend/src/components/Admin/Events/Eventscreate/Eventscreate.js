import React, { useState } from "react";
import "./Eventscreate.css";
import calendar from "../../../../assets/calendar.svg";
import time from "../../../../assets/clock.svg";
import Search_bar from "../../../Search_bar/Search_bar";
import plus from "../../../../assets/blackplus.svg";
import previous from "../../../../assets/previous.svg";
import next from "../../../../assets/next.svg";
import Eventslist from "./Eventslist";
import Eventspopup from "../Eventspopup";
const Eventscreate = () => {
  const [popupState, setPopupState] = useState(false);

  const [selectedOption, setSelectedOption] = useState("yes");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
    {popupState && <Eventspopup setPopupstate={setPopupState} />}

      <div className="announcement-create-heading">
        <p className="announcement-heading"> Dashboard / </p>
        <p className="announcement-heading-2"> Announcement </p>
      </div>
      <div className="row">
        <div className="col-4">
          <div className="event-col-4">
            <div className="event-create-1">
              <span className="slogan-head">Slogan against the Corruption</span>
              <span className="event-date">
                <img src={calendar} />
                30 Apr
              </span>
              <span className="event-time">
                <img src={time} />
                10:00 am Onwards
              </span>
            </div>

            <div className="event-create-2">
              <span className="slogan-head">
                National Assessment and Accreditation Council (NAAC) - Student
                Satisfaction Survey
              </span>
              <span className="event-date">
                {" "}
                <img src={calendar} />
                28 Apr
              </span>
              <span className="event-time">
                <img src={time} />
                09:00 am Onwards
              </span>
            </div>
            <div className="event-create-2">
              <span className="slogan-head">
                National Assessment and Accreditation Council (NAAC) - Student
                Satisfaction Survey
              </span>
              <span className="event-date">
                {" "}
                <img src={calendar} />
                28 Apr
              </span>
              <span className="event-time">
                <img src={time} />
                09:00 am Onwards
              </span>
            </div>
            

            <div className="event-create-3">
              <span className="slogan-head">Slogan against the Corruption</span>
              <span className="event-date">
                <img src={calendar} />
                30 Apr
              </span>
              <span className="event-time">
                <img src={time} />
                10:00 am Onwards
              </span>
            </div>
            <div className="event-create-4">
              <span className="slogan-head">
                National Assessment and Accreditation Council (NAAC) - Student
                Satisfaction Survey
              </span>
              <span className="event-date">
                <img src={calendar} />
                30 Apr
              </span>
              <span className="event-time">
                <img src={time} />
                10:00 am Onwards
              </span>
            </div>
          </div>
        </div>

        <div className="col-8">
          <div className="event-col-8">
            <div className="announcement-content">
              <p className="exam-heading"> Upcoming Events </p>
              <div className="alignment-content">
                <Search_bar />
                <p className="exam-view"></p>
              </div>
            </div>

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
                  <img src={plus} alt="plus" /> Add Events
                </button>
              </p>
            </div>
            <div className="event-sort">
              <p className="event-view-date">April 28,2023</p>
              <div>
                <p className="event-view-date">
                  {" "}
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
            <div className="event-schedule-display">
              <Eventslist />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Eventscreate;
