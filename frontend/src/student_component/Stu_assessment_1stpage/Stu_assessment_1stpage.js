import React, { useState, useEffect } from "react";
import "./Stu_assessment_1stpage.css";
import up_down from "../../assets/up_down.svg";
import uploads from "../../assets/uploads.svg";
import eyes from "../../assets/eyes.svg";
import comment from "../../assets/comment.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import StudentFeedback from "../Student_feedback/StudentFeedback";
import StudentUpload from "../StudentUpload/StudentUpload";
import Class_Assignment_popup from "../Class_Assignment_popup/Class_Assignment_popup";
import Notification from "../../assets/notificationyes.svg";
import Assessmentstudent from "../../components/Student/Studentassessment/Assessmentstudent";
import { getAllAssigment } from "../../services/Assignment";

export default function Stu_assessment_1stpage() {
  const [View, setView] = useState(false);
  const [upload, setUpload] = useState(false);
  const [Assign, setAssign] = useState(false);
  const [Assignment, setAssignment] = useState([]);
  const [test, setTest] = useState();
  const data3 = [
    {
      name: "class Assignment",
      Due_Date: "01 Apr, 2023",
      Course: "INT 404",
      Status: true,
      Marks: 0,
    },
    {
      name: "ABC",
      Due_Date: "02 Apr, 2023",
      Course: "ETR 404",
      Status: false,
      Marks: 0,
    },
  ];
  const [toggleState, setToggleState] = useState(1);
  const [sort, setSort] = useState();
  const [data, setData] = useState(data3);
  const getallquiz = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/createquiz/all`);
      const data = await response.json();
      // console.log(data.users,"resdf")

      setTest(data.users);
    } catch (error) {
      console.log("error while calling get quiz Api", error);
    }
  };

  useEffect(() => {
    if (sort === "name") {
      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
    }
    if (sort === "Course") {
      setData(data.sort((a, b) => a.section.localeCompare(b.section)));
    }
  }, [sort]);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    getallquiz();

    getallQ();
  }, []);
  const getallQ = async () => {
    const resp = await getAllAssigment();

    setAssignment(resp);
  };
  const data1 = [
    {
      name: "class Test",
      Due_Date: "01 Apr, 2023",
      Course: "INT 404",
      Status: false,
      Marks: 0,
    },
    {
      name: "ABC",
      Due_Date: "02 Apr, 2023",
      Course: "ZNA 607",
      Status: true,
      Marks: 0,
    },
  ];
  const data2 = [
    {
      name: "Exams",
      Due_Date: "01 Apr, 2023",
      Course: "INT 404",
      Status: true,
      Marks: 0,
    },
    {
      name: "Abc",
      Due_Date: "02 Apr, 2023",
      Course: "CSE 421",
      Status: false,
      Marks: 0,
    },
  ];

  const [completed, setCompleted] = useState(false);
  const [id, setid] = useState();
  const setidandstate = (id) => {
    setid(id);
    setAssign(true);
  };
  const setfeedback = (id) => {
    setid(id);
    setView(true);
  };
  const setup = (id) => {
    setid(id);
    setUpload(true);
  };

  return (
    <>
      {View && <StudentFeedback setView={setView} id={id} />}
      {upload && <StudentUpload setUpload={setUpload} id={id} />}
      {Assign && <Class_Assignment_popup setAssign={setAssign} id={id} />}

      <div className="stu_assessment">
        <span className="stu_assessment_header">
          <a href="">Assessment </a>
          <img src={Notification}></img>
        </span>

        <div className="stu_assessment_desc">
          <div className="stu_assessment_container">
            <div className="stu_assessment_container_header">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                <span>Assignment</span>
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                <span> Class Test </span>
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                <span>Exams</span>
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <table className="table stu_assessment_table">
                  <thead className="stu_assessment_head">
                    <th onClick={() => setSort("name")}>
                      Name <img src={up_down} />
                    </th>
                    <th>Due Date</th>
                    <th>
                      Course <img src={up_down} />
                    </th>
                    <th>Status</th>
                    <th>Marks</th>
                    <th>Action</th>
                  </thead>
                  <tbody className="stu_assessment_tbody">
                    {Assignment &&
                      Assignment.map((data) => {
                        const st = data.status ? "uploaded" : "pending";
                        return (
                          <tr>
                            <td onClick={() => setidandstate(data._id)}>
                              {" "}
                              <a href="#">{data.title}</a>{" "}
                            </td>
                            {/* <td>{Date(data.dueDate).toLocaleDateString()}</td> */}
                            <td>
                              {data.dueDate && !isNaN(Date.parse(data.dueDate))
                                ? new Date(data.dueDate).toLocaleDateString()
                                : "Invalid date"}
                            </td>

                            <td>{data.course}</td>
                            <td className={st}>{st}</td>
                            <td>{st === "uploaded" ? data.marks : null}</td>
                            <td className="stu_assessment_tbody_action">
                              <img
                                src={uploads}
                                onClick={() => setup(data._id)}
                              />
                              <img
                                src={eyes}
                                onClick={() => window.open(data.file, "_blank")}
                              />
                              <img
                                src={comment}
                                onClick={() => setfeedback(data._id)}
                              />{" "}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >
                <table className="table stu_assessment_table">
                  <tbody className="stu_assessment_tbody">
                    <table className="table stu_assessment_table">
                      <thead className="stu_assessment_head">
                        <th>Test Name</th>
                        <th>Course</th>
                        <th>Date</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Duration</th>
                        <th>Status</th>
                        <th>Result</th>
                      </thead>
                      <tbody className="stu_assessment_tbody">
                        {/* <tr>
            <td>Chapter 5 Quiz</td>
            <td>INT 404</td>
            <td>12 Apr, 2023</td>
            <td>9:00 AM</td>
            <td>10: 00 AM</td>
            <td>60 min</td>
            <td className="completed"> 
           
            <button className="completed_button">
  <a href="#">Completed</a>
</button>


</td>
            <td>--</td></tr> */}
                        {/* <tr>
            <td>Case Study Analysis</td>
            <td>INT 404</td>
            <td>15 Apr, 2023</td>
            <td>9:00 AM</td>
            <td>10:00 AM</td>
            <td>60 min</td>
            <td className="cancelled assignment_cancelled assignment_cancelled"> <button className="completed_button cancelled_button">
  <a href="#">Cancelled</a>
</button></td>
            <td>--</td>
            </tr> */}

                        {test &&
                          test.map((e) => {
                            return (
                              <tr>
                                <td>{e.title}</td>
                                <td>{e.section}</td>
                                <td>09 Apr, 2023</td>
                                <td>9:00 AM</td>
                                <td>9:30 AM</td>
                                <td>30 min</td>
                                <td className="attempt_now assignment_attempt_now">
                                  <Link to="attempt">Attempt Now</Link>
                                </td>
                                <td>--</td>
                              </tr>
                            );
                          })}
                        {/* <tr>
            <td>Demo Test</td>
            <td>INT 404</td>
            <td>24 Apr, 2023</td>
            <td>9:00 AM</td>
            <td>11:00 AM</td>
            <td>90 min</td>
            <td className="not_attempted"><button className="completed_button not_attempted_button">
                <a href="#">Not Attempted</a>
                </button></td>
            <td>00</td></tr> */}
                      </tbody>
                    </table>
                  </tbody>
                </table>
              </div>
              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <table className="table stu_assessment_table">
                  <thead className="stu_assessment_head">
                    <th>Test Name</th>
                    <th>Course</th>
                    <th>Date</th>
                    <th>Start Time</th>
                    <th>End Time</th>

                    <th>Duration</th>
                    <th>Status</th>
                    <th>Result</th>
                  </thead>
                  <tbody className="stu_assessment_tbody">
                    {test &&
                      test.map((e) => {
                        return (
                          <tr>
                            <td>{e.title}</td>
                            <td>{e.section}</td>
                            <td>09 Apr, 2023</td>
                            <td>9:00 AM</td>
                            <td>9:30 AM</td>
                            <td>30 min</td>
                            <td className="attempt_now assignment_attempt_now">
                              <a href="#">Attempt Now</a>
                            </td>
                            <td>--</td>
                          </tr>
                        );
                      })}
                    {/* <tr>
            <td>Chapter 5 Quiz</td>
            <td>INT 404</td>
            <td>12 Apr, 2023</td>
            <td>9:00 AM</td>
            <td>10: 00 AM</td>
            <td>60 min</td>

           
            <td className="completed"> 
            <button className="completed_button">
  <a href="#">Completed</a>
</button>



</td>



            <td>--</td></tr>
            <tr>
            <td>Case Study Analysis</td>
            <td>INT 404</td>
            <td>15 Apr, 2023</td>
            <td>9:00 AM</td>
            <td>10:00 AM</td>
            <td>60 min</td>
            <td className="cancelled assignment_cancelled assignment_cancelled"> <button className="completed_button cancelled_button">
  <a href="#">Cancelled</a>
</button></td>
            <td>--</td></tr>
            <tr> */}
                    <td>Demo Test</td>
                    <td>INT 404</td>
                    <td>24 Apr, 2023</td>
                    <td>9:00 AM</td>
                    <td>11:00 AM</td>
                    <td>90 min</td>
                    <td className="not_attempted">
                      <button className="completed_button not_attempted_button">
                        <a href="#">Not Attempted</a>
                      </button>
                    </td>
                    {/* <td>00</td></tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
