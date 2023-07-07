import React, { useEffect, useState } from "react";
import "./Coursest.css";
import right from "../../../assets/right.svg";
import Cookies from "js-cookie";
import { getCourseid } from '../../../services/StudentCourse'

// import { getCourseid } from "../../../services/StudentCourse"

const Coursest = () => {
  const userId = Cookies.get('userId');
  const [StDetails, setStDetails] = useState([])
  const loadqn = async () => {
    const StudentDetails = await getCourseid(userId);
    setStDetails(StudentDetails);
    console.log(StudentDetails)
  };
  useEffect(() => {

    loadqn();
  },[]);
console.log(getCourseid)

  return (
    <div className="coursest-container">
      <div className="coursest-head">
        <p className="cr-heading">Courses</p>
        <p className="cr-view">View All</p>
      </div>
      <div className="cr-grid">

      {
  StDetails && StDetails.course?.length > 0 ? (
    StDetails.course.map((courseItem, index) => (
      <div className="cr-grid-container" key={index}>
        <div className="cr-grid-c">
          <div className="cr-grid-img">{courseItem.code.slice(0, 2)}</div>
          <div className="cr-code">
            <p>{courseItem.code}</p>
            <p>{courseItem.name}</p>
          </div>
        </div>
        <img src={right} alt="none" />
      </div>
    ))
  ) : null
}



      </div>
    </div>
  );
};
export default Coursest;
