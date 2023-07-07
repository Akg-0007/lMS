import React, { useEffect, useState } from "react";
import "./Stcourselist.css";
import Stcourselist from "./Stcourselist";
import Stcoursedetails from "./Stcoursedetails";
import ai from "../../../assets/ai.jpg";
import courseListArrow from "../../../assets/courseListArrow.png";
import "./Stcourselist.css";
import "./Stcourselist.css";
import Dropdown from "../../dropdown/Dropdown";
import plusicon from "../../../assets/plusicon.svg";
import EyeOutline from "../../../assets/EyeOutline.svg";
import clip from "../../../assets/clip.svg";
import { getCourseid } from '../../../services/StudentCourse'
import Cookies from "js-cookie";



function Stcourse({ course, courseName, syllabus, activeset, isSelected }) {
  // import { getquizid } from '../services/createquizService'
  const options = ["K19EG", "K19EH", "K19EI"];
  //   const options = sections;
  const [open, setopen] = useState("");
  const [StDetails, setStDetails] = useState([])
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [showSyllabusPopup, setShowSyllabusPopup] = useState(false);
  const [selectedCourseIndex, setSelectedCourseIndex] = useState(null);

  const onSelect = (index) => {
    setSelectedCourseIndex(index);
  };

  const handleopen = (e) => {
    setopen(e);
  };
  const userId = Cookies.get('userId');
  console.log(userId);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  const loadqn = async () => {
    const StudentDetails = await getCourseid(userId);
    setStDetails(StudentDetails);
    console.log(StudentDetails)
  };
  useEffect(() => {

    loadqn();
  },[]);
  const handleSyllabusPopup = () => {
    setShowSyllabusPopup(!showSyllabusPopup);
  };
  function generateDownloadLink(content) {
    const blob = new Blob([content], { type: 'text/plain' });
    return URL.createObjectURL(blob);
  }


  const classNames = ["CourseList_content", "flex", "pointer"];
  return (
    <>
      <div className="st-Container">
        <div className="nav_Links">
          <a href="#">
            Courses
            {/* <span className="nav_Links_path">/ Learning Material / Create</span> */}
          </a>
        </div>
        <div className="course_component_container">
          <div className="course__list col-4">
            {StDetails && StDetails.course?.length > 0 ? (
              StDetails.course.map((courseItem, index) => (
                <div
                  className={classNames.join(" ")}
                  onClick={() => onSelect(index)}
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
              ))
            ) : (
              <div className="lpart flex">
                <h3>No courses available</h3>
              </div>
            )}
          </div>



          <div className="stdetails_div">
            {selectedCourseIndex !== null && (
              <div className="courseDetail col-9">
                {/* <h3>{StDetails.attendance} -</h3> */}
                <div className="courseDetail_content flex">
                  <div className="syllabus flex">
                    <h3>
                      {StDetails.course[selectedCourseIndex].code}{" "}
                      <span>{StDetails.course[selectedCourseIndex].name}</span>
                    </h3>
                    <button className="view_syllabus" onClick={handleSyllabusPopup}>
                      View Syllabus
                    </button>
                    {showSyllabusPopup && (
                      <div>
                        <div className="popup-background" onClick={handleSyllabusPopup}></div>
                        <div className="popup-container">
                          <div className="popup-header">
                            <h3>Course Syllabus</h3>
                            <h3>
                              <span>{StDetails.course[selectedCourseIndex].name}</span>
                              {StDetails.course[selectedCourseIndex].code}{" "}
                            </h3>
                            <button className="popup-close" onClick={handleSyllabusPopup}></button>
                          </div>
                          <p className="syllabus_course">-{StDetails.course[selectedCourseIndex].syllabus}</p>
                          <a
                            className="download-link"
                            href={`data:text/plain;charset=utf-8, Course Name:${StDetails.course[selectedCourseIndex].name}\n Course Code: ${StDetails.course[selectedCourseIndex].code}\n Syllabus:  ${encodeURIComponent(StDetails.course[selectedCourseIndex].syllabus)}`}
                            download={`${StDetails.course[selectedCourseIndex].name}_syllabus.txt`}
                          >
                            <span className="download-icon" aria-hidden="true">&#x2B07;</span> Download Syllabus
                          </a>

                        </div>
                      </div>
                    )}


                  </div>

                  <div className="select_detail">
                    <div className="st-course-details">
                      <p className="st-cr-info">
                        {StDetails.course[selectedCourseIndex].description}
                      </p>
                      <div className="st-cr-faculty">
                        <p className="st-cr-details">Faculty:</p>
                        <p className="st-cr-name">Olivia Rhye</p>
                        <p className="st-cr-details">Section:</p>
                        <p className="st-cr-name">{StDetails.section}</p>
                        <p className="st-cr-details">{StDetails.section}:</p>
                        <p className="st-cr-name">{StDetails.section}{StDetails.rollNo}</p>
                      </div>
                      <div className="st-attendance">
                        <p className="st-cr-details">Total Attendance:</p>
                        <p className="st-att-clr">90%</p>
                      </div>
                    </div>

                    {/* <div className="select_section1">
         
        
        </div> */}

                    <div className="wrapper1">
                      <ul className="tab flex">
                        <li>
                          <button
                            onClick={() => handleTabClick("tab1")}
                            className={selectedTab === "tab1" ? "active1" : ""}
                          >
                            Attendance
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleTabClick("tab2")}
                            className={selectedTab === "tab2" ? "active1" : ""}
                          >
                            Schedule
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => handleTabClick("tab3")}
                            className={selectedTab === "tab3" ? "active1" : ""}
                          >
                            Learning Materials
                          </button>
                        </li>
                        {/* <li>
              <button
                onClick={() => handleTabClick("tab4")}
                className={selectedTab === "tab4" ? "active1" : ""}
              >
                Learning Materials
              </button>
            </li> */}
                      </ul>
                      <div className="tab_pane">
                        <div
                          className="tab_content "
                          id={selectedTab === "tab1" ? "active1" : "inactive1"}
                        >
                          <table>
                            <thead>
                              <tr>
                                <th>Date </th>
                                <th>Time</th>

                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody >
                              <tr>
                                <td>07 Apr, 2023 </td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td><span className="st-present">Present</span> </td>
                              </tr>
                              <tr>
                                <td>08 Apr, 2023 </td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td ><span className="st-absent">Absent</span> </td>
                              </tr>
                              <tr>
                                <td>09 Apr, 2023 </td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td><span className="st-notmarked">Not Marked</span> </td>
                              </tr>
                              {/* <tr>
                    <td>10 Apr, 2023 </td>
                    <td>09:00 AM - 10:00 AM </td>
                    <td>Present </td>
                  </tr> */}
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab_content"
                          id={selectedTab === "tab2" ? "active1" : "inactive1"}
                        >

                          <table>
                            <thead>
                              <tr>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Room No.</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Monday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Tuesday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Monday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Wednesday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Thursday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Friday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                              <tr>
                                <td>Saturday</td>
                                <td>09:00 AM - 10:00 AM </td>
                                <td> 38-506</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab_content"
                          id={selectedTab === "tab3" ? "active1" : "inactive1"}
                        >
                          <table>
                            <thead>
                              <tr>
                                <th> Name</th>
                                <th>Attachement</th>
                                <th>Upload Date</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Introduction to Machine Learning</td>
                                <td>chapter1.pdf</td>
                                <td >23 Apr, 2023</td>

                              </tr>
                              <tr>
                                <td> Introduction to Machine Learning</td>
                                <td>chapter1.pdf</td>
                                <td >23 Apr, 2023</td>

                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab_content"
                          id={selectedTab === "tab4" ? "active1" : "inactive1"}
                        >
                          <table className="tableDetail">
                            <thead>
                              <tr>
                                <th>Unit</th>
                                <th>Material Name</th>
                                <th>Attachment</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Introduction to Machine Learning</td>
                                <td className="dataFile">
                                  <div>
                                    <img src={clip} alt="clip" />
                                  </div>
                                </td>
                                <td>Data 3</td>
                              </tr>
                            </tbody>
                          </table>
                          <div className="button-container">
                            <div className="button-icon-container">
                              <img src={plusicon} alt="icon" />
                            </div>
                            <div className="button-text-container">
                              <span>Create</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </>
  );
}

export default Stcourse;
