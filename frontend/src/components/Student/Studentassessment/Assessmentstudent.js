import React from "react";
import closex from "../../../assets/closex.svg";
import question from "../../../assets/questions.svg";
import questionno from "../../../assets/questionno.svg";
import questiongreen from "../../../assets/questionsgreen.svg";
import questionorange from "../../../assets/questionsorange.svg";
import stexam from "../../../assets/stexam.svg";
import Hourglass from "../Studentassessment/Hourglass";
import  { useState, useRef, useEffect } from 'react';
import "./Assessmentstudent.css";
import Assessmentpop from "./Assessmentpop";
import Assessmentexit from "./Assessmentexit";
import Assessmentsubmit from "./Assessmentsubmit"
import Assessmentwarning from "./Assessmentwarning"

const Assessmentstudent = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleButtonClick = () => {
    setShowPopup(true);
  };

  const Ref = useRef(null);
const [timer, setTimer] = useState('00:05:00');

const getTimeRemaining = (e) => {
  const total = Date.parse(e) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / 1000 / 60 / 60) % 24);
  return {
    total, hours, minutes, seconds
  };
}

const startTimer = (e) => {
  let { total, hours, minutes, seconds } = getTimeRemaining(e);
  if (total >= 0) {
    setTimer(
      (hours > 9 ? hours : '0' + hours) + ':' +
      (minutes > 9 ? minutes : '0' + minutes) + ':' +
      (seconds > 9 ? seconds : '0' + seconds)
    )
  }
}

const clearTimer = (e) => {
  setTimer('00:05:00');
  if (Ref.current) clearInterval(Ref.current);
  const id = setInterval(() => {
    startTimer(e);
  }, 1000)
  Ref.current = id;
}
 
const getDeadTime = () => {
  let deadline = new Date();
  deadline.setMinutes(deadline.getMinutes() + 5);
  return deadline;
}

useEffect(() => {
  clearTimer(getDeadTime());
}, []);



  return (
    <div className="assessmentstudent">
      
           
      <div className="heading-student">
        <span className="assessment-heading-content"></span>
        <button className="close-btn">
          Close
          <img src={closex} alt="" />
        </button>
      </div>
      <div className="row ">
        <div className="test-card">
      
        <div className="col-8 ">
        
        <div className="test-card-content res-card">
        <div className="classtest-heading">
            <span className="classtest-content">
              Class Test instructions as follows
            </span>
          </div>
          <div className="test-content">
            <ul className="test-instruction">
              <li>Select your answer and click on “next” button to proceed.</li>
              <li>
                Click “previous” button to go back to the previous question.
              </li>
              <li>
                You can navigate to any question by clicking on the question
                number on the summary pannel.
              </li>
              <li>
                Check the Flag box to flag a question, so that you can review
                later and change the answer before submiting.
              </li>
              <li>Only the Attempted questions will be submitted.</li>
              <li>After the time up, the test will be close by self.</li>
            </ul>

            <div className="border-line">
              <hr></hr>
            </div>

            <div className="classtest-heading">
              <span className="classtest-content">
                Legend for question summary
              </span>
            </div>

            <div className="qt-summary">
              <span className="qt-summary-content">
                <img src={question} alt="question" /> Current Question
              </span>
              <span className="qt-summary-content">
                <img src={questionno} alt="question" /> Unattempted
              </span> 
              <span className="qt-summary-content">
                <img src={questiongreen} alt="question" />Attempted
              </span>
              <span className="qt-summary-content">
                <img src={questionorange} alt="question" /> Flagged
              </span>
            </div>
          </div>
        </div>
        </div>
        <div className="col-4 ">
        <div className="test-card-right">
        <div className="ct-heading">
            <span className="classtest-right">
              <img src={stexam} alt="" /> Chapter 1 Quiz
            </span>
          </div>

          <div className="qt-info">
            <div className="qt-right">
              <span className="qt-right-name"> Questions </span>
              <span className="qt-no"> 30 </span>
            </div>

            <div className="qt-right">
              <span className="qt-right-name"> Duration </span>
              <span className="qt-no"> 30 Min </span>
            </div>
          </div>

          <div className="qt-info">
            <div className="qt-right">
              <span className="qt-right-name"> Correct Marks </span>
              <span className="qt-no"> 01 </span>
            </div>

            <div className="qt-right">
              <span className="qt-right-name"> Attempts Allowed </span>
              <span className="qt-no"> 01 </span>
            </div>
          </div>

          <div className="qt-info">
            <div className="qt-right">
              <span className="qt-right-name"> Negative Marks </span>
              <span className="qt-no"> 1/3 </span>
            </div>

            <div className="qt-right">
              <span className="qt-right-name"> Course </span>
              <span className="qt-no"> INT404 </span>
            </div>
          </div>

          <div className="border-line">
            <hr></hr>
          </div>

          <div className="qt-timer">
            <Hourglass />

            <p className="timer-heading">
            Time Remaining
            </p>
            <p className="timer-content">
           {timer}
            </p>


           
      <button className="Btn Btn--large Btn--primary" onClick={handleButtonClick}>
        Start Test
      </button>
      {showPopup && (
        <div>
          <Assessmentpop/>
          {/* <Assessmentexit/> */}
          {/* <Assessmentsubmit/> */}
          {/* <Assessmentwarning/> */}
        </div>
      )}
          </div>
        </div>

        </div>
        </div>
      </div>
    </div>
  );
};
export default Assessmentstudent;


