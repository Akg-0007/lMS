import React from "react";
import "./Upcomingexam.css"
import right from "../../../assets/right.svg"

const Upcomingexam = () => {
    return(
        <div className="up-exam">
            <div className="exam-container">
                <p className="exam-heading">Upcoming Exams</p>
                <p className="exam-view">View All</p>
            </div>

            <div className="subject-container">
               <div className="sb-part1">
               <p className="sb-code">INT 404 - Middle Term</p>
                <p className="sb-time">Timing :  12:00 -14:00</p>
                <p className="sb-date">Date : 11 Apr, 2023</p>
              <div className="exam-type-btn"> <span className="exam-type">Class Test</span></div>
               </div>
               <div className="sb-part2">
               <img src={right} alt="loading"/>
               </div>
            </div>

            <div className="exam-line">
                <hr></hr>
            </div>

            <div className="subject-container">
               <div className="sb-part1">
               <p className="sb-code">INT 404 - Middle Term</p>
                <p className="sb-time">Timing :  12:00 -14:00</p>
                <p className="sb-date">Date : 11 Apr, 2023</p>
              <div className="exam-type-btn-2"> <span className="exam-type-2">Exam</span></div>
               </div>
               <div className="sb-part2">
               <img src={right} alt="loading"/>
               </div>
            </div>

        </div>
    )
}
export default Upcomingexam;