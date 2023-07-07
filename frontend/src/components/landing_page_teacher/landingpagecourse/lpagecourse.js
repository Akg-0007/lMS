import React, { useEffect } from "react";

import "./lpagecourse.css";




import vector from "../../../assets/arrow_course.svg";
import vector1 from "../../../assets/Layer4.png";

import "../recentAss/RecentAssignments.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSections } from "../../../redux/features/dashboardSlices/sectionSlice";
import { Navigate,  useNavigate } from "react-router-dom";
import Music from "../../Loaders/Music";


const Lpagecourse =()=>{
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { sections, status } = useSelector((state) => state.section)

useEffect(() => {
    dispatch(fetchSections(`${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getcources`))
}, [])

    return(
             <div className="rpart ">
                <div className="top_head2">
                  <div className="top_head2_elements">Courses</div>
                  <div className="top_head2_elements" id="small_it" onClick={() =>  navigate("/home/courses")}>
                    View All
                  </div>
                </div>

                <div className="list_courses">
                 { status === 'error' && <div className="dashboardStatus error">Failed to load courses :( </div>  }
                 { status === 'loading' &&  <Music />  }
                 { status === 'success' && 
                   <>
                   
                   {sections.sections && sections.sections.map((section => (
                    section.courses.map((course) => (
                      <div className="courses_items">
                      <div className="course_contents" id="course_img" >
                        <img src={vector1} className="adjust_img" alt="" />
                      </div>
                      <div className="course_contents">
                        <div className="course_code">{course.code}</div>
                        <div className="course_name">
                          {course.name}
                        </div>
                      </div>
                      <div
                        className="course_contents hover_arrow"
                        id="course_img2" onClick={() => navigate('/home/courses')}
                      >
                        <img src={vector} className="adjust_img2" alt="" />
                      </div>
                    </div>
                    ))
                   )))}
                   </>
                }
                </div>
              </div>  

    
    );
}
export default Lpagecourse;


