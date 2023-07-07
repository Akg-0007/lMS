
import React, { useState, useEffect } from "react";
import "./Assessmentpop.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import question from "../../../assets/questions.svg";
import questionno from "../../../assets/questionsno.svg";
import questiongreen from "../../../assets/questionsgreen.svg";
import questionorange from "../../../assets/questionsorange.svg";
import QuizStart from "../../../student/QuizStart";

const Assessmentpop = () => {
  // const nav = useNavigate();
  const [timeLeft, setTimeLeft] = useState(5);
  const [proceedActive, setProceedActive] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);
      return () => clearTimeout(timerId);
    } else {
      setProceedActive(true);
    }
  }, [timeLeft]);

  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleProceedClick = () => {
    navigate('/assignment/start');
  };


  return (
   
    <div className="assessment-pop">
      <div className="popup-container res-pop">
        <div className="popup-heading">
          <span className="popup-content">
            Class Test instructions as follows
          </span>
          <div className="timer">
            Test Starts In: {Math.floor(timeLeft / 60)}:{timeLeft % 60}
          </div>
        </div>
        <div className="test-content">
          <ul className="popup-instruction">
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

          <div className="border-pop-line">
            <hr></hr>
          </div>

          <div className="popup-heading">
            <span className="popup-content">Legend for question summary</span>
          </div>

          <div className="popup-summary">
            <span className="popup-summary-content">
              <img src={question} alt="question" /> Current Question
            </span>
            <span className="popup-summary-content">
              <img src={questionno} alt="question" /> Unattempted
            </span>
            <span className="popup-summary-content">
              <img src={questiongreen} alt="question" /> Attempted
            </span>
            <span className="popup-summary-content">
              <img src={questionorange} alt="question" /> Flagged
            </span>
          </div>

          
          <div className="proceed">
      {proceedActive ? (
        
        <button className="proceed-btn" onClick={handleProceedClick}>
          Proceed
        </button>
      ) : (
        <button className="proceed-btn" disabled>
          Proceed
        </button>
      )}
      {showPopup && (
        <div>
          <Link to="/proceed">
            <QuizStart />
          </Link>
        </div>
      )}
    </div>

         
        </div>
      </div>
    </div>
  );
};

export default Assessmentpop;
