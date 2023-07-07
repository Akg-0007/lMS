import React from 'react'

function RoungDel() {
  return (
    <div>
       <div className="course__list col-4">
            {StDetails && StDetails.course?.length >0 && StDetails.course.map((courseItem) => (
              <div
                className={classNames.join(" ")}
                onClick={onSelect}
                // onMouseEnter={handleHover}
                // onMouseLeave={handleLeave}
                key={courseItem._id}
              >
                <div className="lpart flex">
                  <div className="CourseList_content_logo">
                    <img src={ai} alt="Logo" />
                  </div>
                  <h3>
                    {courseItem.code} <br />
                    <span className="courseName">{courseItem.name}</span>
                  </h3>
                </div>

                <button className="CourseList_button">
                  <img src={courseListArrow} alt="arrow" />
                </button>
              </div>
            ))}
          </div>
      <div className="courseDetail_content flex">
        <div className="syllabus flex">
          <h3>
            INT 404 <span>Artificial Intelligence </span>
          </h3>
          <button className="view_syllabus">View Syllabus</button>
        </div>
        <div className="st-course-details">
                    <p className="st-cr-info">
                      This course include machine learning algorithms, natural language
                      processing, computer vision, robotics, decision-making systems, and
                      neural networks. Students may also learn about the ethical and
                      social implications of AI, such as bias and privacy concerns.
                    </p>
                    <div className="st-cr-faculty">
                      <p className="st-cr-details">Faculty:</p>
                      <p className="st-cr-name">Olivia Rhye</p>
                      <p className="st-cr-details">Section:</p>
                      <p className="st-cr-name">K19GE</p>
                      <p className="st-cr-details">K19GE</p>
                      <p className="st-cr-name">RK19GEA11</p>
                    </div>
                    <div className="st-attendance">
                      <p className="st-cr-details">Total Attendance:</p>
                      <p className="st-att-clr">90%</p>
                    </div>
                  </div>
      </div>
    </div>
  )
}

export default RoungDel