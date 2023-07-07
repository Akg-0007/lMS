import React from "react";
import "./Assessmentexit.css";
import greentick from "../../../assets/greentickcolor.svg";
import q1 from "../../../assets/1.svg";
import q2 from "../../../assets/2.svg";
import q3 from "../../../assets/3.svg";
import q4 from "../../../assets/4.svg";
const Assessmentsubmit = () => {
  return (
    <div className="as-submit-container">
      <div className="as-submit-content">
        <div className="tick-img">
          <img src={greentick} alt="" />
        </div>
        <p className="as--test">Class Test Summary</p>
        <div className="as-grid">
          <p className="as-grid-content">
            <img src={q1} /> - Attempted
          </p>
          <p className="as-grid-content">
            <img src={q2} /> - Not visited
          </p>
          <p className="as-grid-content">
            <img src={q3} /> - Not Attempted
          </p>
          <p className="as-grid-content">
            <img src={q4} /> - Flagged
          </p>
        </div>
        <div className="as-btn">
          <button className="as-attempt">Back to Attempt</button>
          <button className="as-submit">Submit Test</button>
        </div>
      </div>
    </div>
  );
};
export default Assessmentsubmit;
