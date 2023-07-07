import React from "react";
import plus from "../../../assets/plus.svg";
import moment from 'moment';

import "./Assignment_details.css";
import Dropdown from "../../dropdown/Dropdown";
import { useState } from "react";
import attachment from "../../../assets/attachment.svg";
import feedback from "../../../assets/feedback.svg";
import feedback_view from "../../../assets/feedback_view.svg";
import Assessmenttracker from "../../Feedbackpop/Assessmenttracker";
import Feedbackwrite from "../../Feedbackpop/Feedbackwrite";
import Feedbacksubmit from "../../Feedbackpop/Feedbacksubmit";
import Popup from "../../toaster/Popup";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from "js-cookie";

export default function Assignment_details() {
  const navigate = useNavigate();
  const [View, setView] = useState(false);
  const [feed, setFeed] = useState(false);
  const [done, setDone] = useState(false);
  const [assign, setassign] = useState(false);
  const [open, setopen] = useState("");
  const [toast, settoast] = useState(false);
  const options = ["Marks", "Roll No", "Name"];
  const option = ["Pass", "Fail"];
  const [sort, setSort] = useState()

  const [submissions, setSubmissions] = useState([]);
  const [singleAssignment, setSingleAssignment] = useState(null);

  const [submissionCount, setSubmissionCount] = useState(0)
  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_LMS_BACKEND_API}/assessment/assignment-getsingle/${id}`,
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      const json = await response.json();

      if (!response.ok) {
        console.log("Failed to fetch submissions ", json.error);
        return;
      }
      await setSingleAssignment(json.assignment[0]);
      console.log("singleAssignment", json )
      
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        `${process.env.REACT_APP_LMS_BACKEND_API}/assessment/assignment-submissions/${id}`,
        {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        }
      );
      const json = await response.json();

      if (!response.ok) {
        console.log("Failed to fetch submissions ", json.error);
        return;
      }
      await setSubmissions(json.submissions);

    })();
  }, []);

useEffect(()=>{
  if(sort === "Marks") {
    setSubmissions(submissions.sort((a, b) => a.markEarned - b.markEarned ));
  }
  if(sort === "Name") {
    setSubmissions(submissions.sort((a, b) => a.studentId.name - b.studentId.name  ));
  }
  if(sort === "Roll No") {
    setSubmissions(submissions.sort((a, b) => b.studentId.rollNo - b.studentId.rollNo));
  }
}, [sort])
let subm = 0
submissions.forEach( (ass)=> {
  if(ass.markEarned) {
     subm+=1
  } 
})

  return (
    <>
      {feed && <Feedbackwrite setFeed={setFeed} />}
      {done && <Feedbackwrite setDone={setDone} />}
      {assign && <Feedbacksubmit setassign={setassign} />}
      {toast && <Popup state={"success"} message={"Result Published"} />}

      {View && <Assessmenttracker setView={setView} title={singleAssignment.title} description={singleAssignment.description} file={singleAssignment.file} />}

      <div className="assesment">
        <div className="assessment_heading">
          <div className="assessment_heading_left">
            <span onClick={() => navigate('/home/assignment')}>Assessment</span>
            <p>/ Assignments</p>
          </div>
          {/* <button className='Btn Btn--primary create'> Create <img src={plus} alt="" /></button> */}
        </div>
        <div className="row assessment_row">
          <div className="col-12">
            <div className="assessment_tracker">
              <div className="tracker_heading">
                <div className="tracker_heading_left">
                  {singleAssignment && <span>{singleAssignment.title}</span>}
                </div>

                <div className="tracker_heading_right">
                  <div
                    className="Btn Btn--outline View"
                    onClick={() => setView(true)}
                  >
                    View Assignment
                  </div>
                  <div
                    className="Btn Btn--outline Publish"
                    onClick={() => {
                      settoast(true);
                      setTimeout(() => {
                        navigate("/home/assignment");
                      }, 1000);
                    }}
                  >
                    Publish Result
                  </div>
                </div>
              </div>

              <div className="assessment_details">
                <div className="assessment_details_left">
                  <div className="assessment_left_left">
                    <div className="assessment_course_section">
                      <div className="assessment_course course">
                        Course {singleAssignment && <p>{singleAssignment.course}</p>}
                      </div>
                      <div className="assessment_course sections">
                        Section {singleAssignment && <p>{singleAssignment.section}</p>}
                      </div>
                    </div>
                    <div className="line"></div>
                    <div className="assessment_course_section">
                      <div className="assessment_course due_date">
                        Due Date {singleAssignment && <p>{singleAssignment?.dueDate?.substring(0, singleAssignment.dueDate.length - 14)}</p>}
                      </div>
                      <div className="assessment_course marks">
                        Marks {singleAssignment && <p>{singleAssignment.marks}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="assessment_details_right">
                  <div className="assessment_details marked">
                    0 <span>Marked</span>
                  </div>{" "}
                  <div className="line"></div>
                  <div className="assessment_details Submissions">
                    <p>
                      {" "}
                      {subm} <span> /74</span>
                    </p>
                    <span>Submissions</span>
                  </div>
                </div>
              </div>

              <div className="table_area">
                <div className="assessment_table_area">
                  <div className="assessment_table_heading">
                    <div className="assessment_table_search-bar">
                      <input
                        type={"search"}
                        placeholder="Search"
                        className="search-form"
                      />
                    </div>
                    <div className="assessment_table_filter">
                      <Dropdown
                        name={"Sort"}
                        options={options}
                        setState={setSort}
                      />

                      <Dropdown
                        name={"Filter"}
                        options={option}
                      />
                    </div>
                  </div>
                  <div className="assessment_table_details">
                    <table className="details_table">
                    <thead>
                      <tr className="details_table_row">
                        <th>Student Name</th>
                        <th>Registration No</th>
                        <th>Roll No</th>
                        <th>Attachment</th>
                        <th>Grades</th>
                        <th>Feedback</th>
                      </tr>
                    </thead>
                    <tbody>
                      {submissions?.length > 0  && 
                      submissions.map((submission) => (
                        <tr className="student_details">
                        <td className="student_details_name">{submission.studentId.name}</td>
                        <td> {Math.floor(Math.random() * 101) + 400}{Math.floor(Math.random() * 101) + 600}</td>
                        <td>{submission.studentId.rollNo}</td>
                        <td className="table_attachment">
                          <img src={attachment} alt="" className="table_img" />{" "}
                          {submission.submissionFile}
                        </td>
                        <td>
                          <input
                            id="markEarned"
                            type="number"
                            className="table_input"
                            placeholder="Grades"
                            value={submission.markEarned? submission.markEarned : ''}
                            disabled={submission.markEarned?true:false}
                          />
                        </td>
                        <td
                          className="table_feedback"
                          onClick={() => setFeed(true)}
                        >
                          <img src={feedback} alt="" className="table_img" />{" "}
                          write{" "}
                        </td>
                      </tr>
                      ))

                       }
                       </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}




