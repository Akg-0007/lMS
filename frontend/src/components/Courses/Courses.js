import React, { useEffect, useState } from "react";
import CourseList from "./CourseList/CourseList";
import CourseDetail from "./CourseDetail/CourseDetail"
import "./Courses.css";
import { fetchSections } from "../../redux/features/dashboardSlices/sectionSlice";
import { useDispatch, useSelector } from "react-redux";

function Courses() {
  const dispatch = useDispatch();
  const { sections, status } = useSelector((state) => state.section);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchSections(`${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getcources`))
  }, [])

  const allCourses = sections.sections ? sections.sections.flatMap(section => section.courses) : [];
  const allSections = sections.sections ? sections.sections.flatMap(section => section.name) : [];

  const handleCourseSelect = (index) => {
    setSelectedCourseIndex(index);
  }

  const selectedCourse = allCourses[selectedCourseIndex];

  return (
    <>
      <div className="course_Container">
        <div className="nav_Links">
          <a href="#">
            Courses
            {/* <span className="nav_Links_path">/ Learning Material / Create</span> */}
          </a>
        </div>
        <div className="course_component_container">
          <div className="course__list col-4">
          {allCourses && allCourses.map((name, index) => {
  const isActive = index === selectedCourseIndex;
  return (
    <CourseList 
      key={index} 
      course={name.code} 
      courseName={name.name} 
      activeset={isActive} 
      syllabus={name.syllabus} 
      onSelect={() => handleCourseSelect(index)}
    />
  );
})}
          </div>
          {status === 'success' && 
  <CourseDetail 
    key={selectedCourse?.code}
    sections={allSections}
    courseCode={selectedCourse?.code} 
    courseName={selectedCourse?.name} 
    syllabus={selectedCourse?.syllabus}
  />
}

        </div>
      </div>
    </>
  );
}

export default Courses;

