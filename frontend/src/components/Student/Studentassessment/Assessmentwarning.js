import React from "react";
import orange from "../../../assets/orangecheck.svg";
const Assessmentwarning = () => {
  return (
    <div className="as-submit-container">
      <div className="as-submit-content">
        <div className="tick-img">
          <img src={orange} alt="" />
        </div>
        <div className="aw-container">
          <p className="aw-content">Warning Counter: 01</p>
          <p className="aw-warning">Switching Tab is not allowed.</p>
          <p className="aw-warning">Exam will be submitted automatically.</p>
          <div className="aw-btn">
            <button className="Btn Btn--primary">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assessmentwarning;
