import React, { useEffect, useState } from "react";
// import Modal from "react-modal";
import "./CourseDetail.css";
import Dropdown from "../../dropdown/Dropdown";
import plusicon from "../../../assets/plusicon.svg";
import EyeOutline from "../../../assets/EyeOutline.svg";
import clip from "../../../assets/clip.svg";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import syll from "../../../assets/syll.pdf";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssessments } from "../../../redux/features/dashboardSlices/assessmentSlice";
import CreateCourse from "../createCourse/CreateCourse";
import './CourseDetailModal.css'

function CourseDetail({ courseCode, courseName, syllabus, sections }) {
  const options = sections;
  const navigate = useNavigate();
  const [selectedSection, setSelectedSection] = useState(options[0]);
  const [open, setopen] = useState("");
  const [selectedTab, setSelectedTab] = useState("tab1");
  const [detail, setDetail] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { assessments, status } = useSelector((state) => state.assessment);
  const dispatch = useDispatch();

  if (status === "idle") {
    dispatch(
      fetchAssessments(
        `${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getassignments`
      )
    );
  }

  useEffect(() => {
    if (status === "success") {
      // console.log("assessments", assessments);
      console.log("assessments", assessments.assignments);
    }
  }, [status]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `${process.env.REACT_APP_LMS_BACKEND_API}/course/get/students`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
            section: `${selectedSection} ${courseCode}`,
          },
        }
      );
      console.log(`${selectedSection} ${courseCode}`);
      const json = await res.json();
      if (!res.ok) {
        console.log("---err in Students---", json.error);
        return;
      }

      const res2 = await fetch(
        `${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/gettimetable`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,

            section: `${selectedSection} ${courseCode}`,
          },
        }
      );

      const json2 = await res2.json();
      if (!res2.ok) {
        console.log("---err in schedule---", json2.error);
        return;
      }
      const arr = [];
      json2[0].days.map((c1) => {
        c1.slots.map((c2) => {
          arr.push({
            day: c1.name,
            time: `${c2.start} - ${c2.end}`,
            course: c2.course,
            room: c2.room,
          });
        });
      });
      setSchedule(arr);

      let arr1 = [];
      json.students.map((student) => {
        student.course.map((course) => {
          if (course.code === courseCode) {
            arr1.push(student.name);
          }
        });
      });
      let arr2 = [];
      setDetail(arr2);
      json.students.map((student) => {
       arr1 && arr1.map((c1) => {
          if (student.name.includes(c1)) {
            arr2.push(student);
          }
        });
      });
    })();
  }, [selectedSection, setDetail, courseCode]);

  const handleopen = (e) => {
    setopen(e);
  };

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  const handleViewSyllabus = () => {
    window.open(syll, "_blank");
  };
  // const handleOpenModal = () => {
  //   setShowModal(true);
  // };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="courseDetail col-8">
      <div className="courseDetail_content flex">
        <div className="syllabus flex ">
          <h3>
            {courseCode} <span>{courseName}</span>
          </h3>
          <button
            className="view_syllabus pointer "
            onClick={handleViewSyllabus}
          >
            View Syllabus
          </button>
        </div>
        <p>{syllabus}</p>
      </div>
      <div className="select_detail">
        <div className="select_section1">
          <h3> Section:</h3>
          <br />
          <Dropdown
            name={options[0]}
            options={options}
            onSelect={handleopen}
            setState={setSelectedSection}
            key={selectedSection}
          />
        </div>

        <div className="wrapper1">
          <ul className="tab flex">
            <li>
              <button
                onClick={() => handleTabClick("tab1")}
                className={` ${
                  selectedTab === "tab1" ? "active1" : ""
                } pointer`}
              >
                Students
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("tab2")}
                className={` ${
                  selectedTab === "tab2" ? "active1" : ""
                } pointer`}
              >
                Schedule
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("tab3")}
                className={` ${
                  selectedTab === "tab3" ? "active1" : ""
                } pointer`}
              >
                Assignments
              </button>
            </li>
            <li>
              <button
                onClick={() => handleTabClick("tab4")}
                className={` ${
                  selectedTab === "tab4" ? "active1" : ""
                } pointer`}
              >
                Learning Materials
              </button>
            </li>
          </ul>
          <div className="search_student">
            {selectedTab === "tab1" && (
              <input
                type={"search"}
                placeholder="Search"
                className="search-form"
              />
            )}
          </div>

          <div className="tab_pane">
            <div
              className="tab_content "
              id={selectedTab === "tab1" ? "active1" : "inactive1"}
            >
              <table>
                <thead>
                  <tr>
                    <th>Stundent Name</th>
                    <th>Registration No.</th>
                    <th>Roll No.</th>
                    <th>Attendance</th>
                  </tr>
                </thead>
                <tbody>
                  {detail &&
                    detail.map((data, index) => (
                      <tr key={index}>
                        <td>{data.name}</td>
                        <td>{data.registrationNo}</td>
                        <td>{data.rollNo}</td>
                        <td>
                          {Math.floor(Math.random() * (98 - 65 + 1) + 65)}%
                        </td>
                      </tr>
                    ))}
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
                  {schedule &&
                    Array.isArray(schedule) &&
                    schedule.map((val, index) => {
                      if (val.course === courseCode) {
                        return (
                          <tr key={index}>
                            <td>{val.day}</td>
                            <td>{val.time}</td>
                            <td>{val.room}</td>
                          </tr>
                        );
                      }
                    })}
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
                    <th>Assignment Name</th>
                    <th>Submissions</th>
                    <th>Deadline</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {assessments &&
                    assessments.assignments.map((data, index) => {
                      if (
                        data.course === courseCode &&
                        selectedSection === data.section
                      ) {
                        const dueDate = new Date(
                          data.dueDate
                        ).toLocaleDateString();
                        const statusClassName = !data.status
                          ? "statusMarked"
                          : "statusPending";
                        return (
                          <tr key={index}>
                            <td>{data.title}</td>
                            <td>{data.submissionCount}</td>
                            <td>{dueDate}</td>
                            <td className={statusClassName}>
                              {data.status ? "Marked" : "Pending"}
                            </td>
                            <td className="action" onClick={() => {navigate(`/home/assignment/view/${data._id}`)}}>
                              <img src={EyeOutline} alt="View" />
                            </td>
                          </tr>
                        );
                      }
                    })}
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
                    <td className="dataFile pointer">
                      <div>
                        <img src={clip} alt="clip" />
                      </div>
                      Data 2
                    </td>
                    <td>Data 3</td>
                  </tr>
                </tbody>
              </table>
              <div
                className="button-container"
                onClick={() => setShowModal(true)}
              >
                <div className="button-icon-container">
                  <img src={plusicon} alt="icon" />
                </div>
                <div className="button-text-container">
                  <span>Create</span>
                </div>
              </div>
              {/* <Modal className="col-5" isOpen={showModal} onRequestClose={handleCloseModal}>
                <CreateCourse close={handleCloseModal} />
              </Modal> */}
            </div>
            {/* <PaginationMui /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
