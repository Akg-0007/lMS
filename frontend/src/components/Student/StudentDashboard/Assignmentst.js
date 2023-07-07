import React from "react";
import "./Assignmentst.css"
import right from "../../../assets/right.svg"

const Assignmentst = () => {
    return(
        <div className="assi-container">

            <div className="assi-heading">
                <p className="up-content">Assignment</p>
                <p className="up-view">View All</p>
            </div>
            <div className="ca">
               <div className="ca-container">
               <p className="ca-heading">Continuous Assessment 1</p>
                <p className="ca-subject">INT 404</p>
                <p className="ca-date">Due : 01 Apr, 2023</p>
               </div>
               <div><img src={right} alt="loading"/></div>
            </div>


            <div className="ca-line">
                <hr></hr>
            </div>

            <div className="ca">
               <div className="ca-container">
               <p className="ca-heading">Continuous Assessment 1</p>
                <p className="ca-subject">INT 404</p>
                <p className="ca-date">Due : 01 Apr, 2023</p>
               </div>
               <div><img src={right} alt="loading"/></div>
            </div>

        </div>
    )
}
export default Assignmentst;