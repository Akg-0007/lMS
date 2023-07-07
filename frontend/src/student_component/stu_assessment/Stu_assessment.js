import './stu_assessment.css'
import React, { useState } from "react";

export default function Stu_assessment() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };


  return (
    <>
      <div className="stu_assessment">
        <span className="stu_assessment_header">
          <a href="">
            Assessment </a></span>

        <div className="stu_assessment_desc">
          <div className="stu_assessment_container">
            <div className="stu_assessment_container_header">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <span>Assignment</span>
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <span> Class Test </span>
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                <span>Exams</span>
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                <table className="table stu_assessment_table">
                  <thead className='stu_assessment_head'>
                    <th >Test Name</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    {/* {show ? <th>Status</th> : null} */}
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Result</th>
                  </thead>
                  <tbody className="stu_assessment_tbody">
                    <tr>
                      <td>Chapter 1 Quiz</td>
                      <td>INT 404</td>
                      <td>09 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>9:30 AM</td>
                      <td>30 min</td>
                      <td className="attempt_now assignment_attempt_now"><a href="#">Attempt Now</a></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Chapter 5 Quiz</td>
                      <td>INT 404</td>
                      <td>12 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10: 00 AM</td>
                      <td>60 min</td>
                      <td className="completed"> <button className="completed_button">
                        <a href="#">Completed</a>
                      </button></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Case Study Analysis</td>
                      <td>INT 404</td>
                      <td>15 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10:00 AM</td>
                      <td>60 min</td>
                      <td className="cancelled assignment_cancelled assignment_cancelled"> <button className="completed_button cancelled_button">
                        <a href="#">Cancelled</a>
                      </button></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Demo Test</td>
                      <td>INT 404</td>
                      <td>24 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>11:00 AM</td>
                      <td>90 min</td>
                      <td className="not_attempted"><button className="completed_button not_attempted_button">
                        <a href="#">Not Attempted</a>
                      </button></td>
                      <td>00</td></tr>
                  </tbody>
                </table>
              </div>
              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <table className="table stu_assessment_table">
                  <thead className=' stu_assessment_head'>
                    <th >Test Name</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    {/* {show ? <th>Status</th> : null} */}
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Result</th>
                  </thead>
                  <tbody className="stu_assessment_tbody">
                    <tr>
                      <td>Chapter 1 Quiz</td>
                      <td>INT 404</td>
                      <td>09 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>9:30 AM</td>
                      <td>30 min</td>
                      <td className="completed">
                        <button className="completed_button">
                          <a href="#">Completed</a>
                        </button>
                      </td>
                      <td>--</td></tr>
                    <tr>
                      <td>Chapter 5 Quiz</td>
                      <td>INT 404</td>
                      <td>12 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10: 00 AM</td>
                      <td>60 min</td>
                      <td className="attempt_now"> <a href="#">Attempt Now</a></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Case Study Analysis</td>
                      <td>INT 404</td>
                      <td>15 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10:00 AM</td>
                      <td>60 min</td>
                      <td className="cancelled assignment_cancelled">
                        <button className="completed_button cancelled_button">
                          <a href="#">Cancelled</a>
                        </button></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Demo Test</td>
                      <td>INT 404</td>
                      <td>24 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>11:00 AM</td>
                      <td>90 min</td>
                      <td className="not_attempted">
                        <button className="completed_button not_attempted_button">
                          <a href="#">Not Attempted</a>
                        </button>
                      </td>
                      <td>00</td></tr>
                  </tbody>
                </table>
              </div>
              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <table className="table">
                  <thead className=' stu_assessment_head'>
                    <th >Test Name</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    {/* {show ? <th>Status</th> : null} */}
                    <th>Duration</th>
                    <th>Status</th>
                    <th>Result</th>
                  </thead>
                  <tbody className="stu_assessment_tbody">
                    <tr>
                      <td>Chapter 1 Quiz</td>
                      <td>INT 404</td>
                      <td>09 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>9:30 AM</td>
                      <td>30 min</td>
                      <td className="attempt_now"><a href="#">Attempt Now</a></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Chapter 5 Quiz</td>
                      <td>INT 404</td>
                      <td>12 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10: 00 AM</td>
                      <td>60 min</td>
                      <td className="completed"> <button className="completed_button">
                        <a href="#">Completed</a>
                      </button></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Case Study Analysis</td>
                      <td>INT 404</td>
                      <td>15 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>10:00 AM</td>
                      <td>60 min</td>
                      <td className="cancelled assignment_cancelled">
                        <button className="completed_button cancelled_button">
                          <a href="#">Cancelled</a>
                        </button></td>
                      <td>--</td></tr>
                    <tr>
                      <td>Demo Test</td>
                      <td>INT 404</td>
                      <td>24 Apr, 2023</td>
                      <td>9:00 AM</td>
                      <td>11:00 AM</td>
                      <td>90 min</td>
                      <td className="not_attempted"><button className="completed_button not_attempted_button">
                        <a href="#">Not Attempted</a>
                      </button></td>
                      <td>00</td></tr>
                  </tbody>
                </table>
              </div>
            </div></div>
        </div>
      </div>
    </>
  )
}