import React from "react";
import feedback from "../../assets/feedback.png";
import "./Feedbackwrite.css";
const Feedbackwrite = ({setFeed,setDone} ) => {
  return (
    <div className="assignment-feedback ">
      <div className="assignment-container">
        <div className="write-logo">
          <img src={feedback} alt="" />
          <span className="write-logo-content">Feedback</span>
        </div>

        <div className="feedback-content">
          <textarea className="text-content ">
            Feedback occurs when outputs of a system are routed back as inputs
            as part of a chain of cause-and-effect that forms a circuit or loop.
            The system can then be said to feed back into itself.
          </textarea>
        </div>
        <div className="feedback-button">
          <button className="Btn Btn--outline" onClick={ () =>setFeed(false)}>Cancel</button>
          <button className="Btn Btn--primary" onClick={ () =>setDone(false)}>Done</button>
        </div>
      </div>
    </div>
  );
};
export default Feedbackwrite;
