import React from "react";

import vector from "../../../assets/arrow_course.svg";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssessments } from "../../../redux/features/dashboardSlices/assessmentSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Music from "../../Loaders/Music";
import { async } from "q";

function RecentAssignments() {
  const navigate = useNavigate()
  const { assessments, status } = useSelector((state) => state.assessment)
  const dispatch = useDispatch()


  useEffect(()=> {
    ( async () =>{
      await dispatch(fetchAssessments(`${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getassignments`))
    })()
  }, [])



  return (
    <div className="rpart">
      <div className="recent_head">
        <div className="recent_head_items">Recent Assignments</div>
        <div className="recent_head_items1" onClick={() =>  navigate("/home/assignment")}>View All</div>
      </div>
      { status === 'loading' &&  <Music />  }
      {status === 'error' && <div className="dashboardStatus error">Failed to load assignments :( </div> }

      {status === 'success' && assessments.assignments &&  assessments.assignments.slice(0, 4).map((assessment, index) => (
        <div className="ca_list_av">
          <div className="recent_ca">
            <div className="ca_course_code">
              <div className="ca_Number">{assessment.title}</div>
              <div className="ca_details_code">
                {assessment.section} | {assessment.course}
              </div>
            </div>
            <div className="course_contents hover_arrow" id="course_img2" onClick={() =>  navigate(`/home/assignment/view/${assessment._id}`)}>
              <img src={vector} className="adjust_img2" alt="" />
            </div>
          </div>

          {/* {index !== assessment.assignment.length - 1 && (
            <div className="lines"></div>
          )} */}
        </div>
      ))}
    </div>
  );
}

export default RecentAssignments;
