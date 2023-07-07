import React, { useState } from "react";
import ai from "../../../assets/ai.jpg";
import courseListArrow from "../../../assets/courseListArrow.png";
import "./CourseList.css";

function CourseList({ course, courseName, syllabus, activeset, onSelect, isSelected}) {
  
  const [isHovered, setIsHovered] = useState(false);
  console.log("Active:", activeset);
  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  const classNames = ["CourseList_content", "flex", "pointer"];
  if (isSelected) {
    classNames.push("selected");
  }

  return (
    <div 
      className={classNames.join(" ")} 
      onClick={onSelect}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="lpart flex">
        <div className="CourseList_content_logo">
          <img src={ai} alt="Logo" />
        </div>
        <h3>
          {course} <br />
          <span className="courseName">{courseName}</span>
        </h3>
      </div>
      
        <button className="CourseList_button">
          <img src={courseListArrow} alt="arrow" />
        </button>
      
    </div>
  );
}

export default CourseList;
