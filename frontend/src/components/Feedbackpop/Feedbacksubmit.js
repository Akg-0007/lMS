import React from "react";
import feedback from "../../assets/feedback.png";
import cross from "../../assets/cross.svg";
import "./Feedbacksubmit.css";
const Feedbacksubmit = ({setassign}) => {
  return (
    <div className="feedback-submit">
      <div className="feedback-container">
        <div className="feedback-logo">
          <img src={feedback} alt="feedback-logo" />
          <span className="feedback-content">Feedback</span>
        </div>
        <div className="logo-cross">
          <img src={cross} alt="cross" onClick={ () =>setassign(false)}/> 
        </div>
        <div className="feedback-text">
          <p className="feedback-text-content">
            Feedback occurs when outputs of a system are routed back as inputs
            as part of a chain of cause-and-effect that forms a circuit or loop.
            The system can then be said to feed back into itself.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Feedbacksubmit;
