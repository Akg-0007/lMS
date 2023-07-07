import React, { useEffect } from "react";
import { useState } from "react";
import "./Assignment_1stpage.css";
import { ViewIcon } from "../../../assets/Icon";

import Search from "../../Search_bar/Search_bar";
import plus from "../../../assets/plus.svg";
import updown from "../../../assets/updown.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAssessmentSubmission } from "../../../redux/features/assessmentSlices/assessmentSubmissionSlice";
import { fetchAssessments } from "../../../redux/features/dashboardSlices/assessmentSlice";
import Dropdown from ".././../dropdown/Dropdown";

const Assignment_1stpage = () => {
  const options = ["K19EG", "K19EH", "K19EI"];
  const dates = ["16 Aug", "17 Aug", "18 Aug", "19 Aug"];
  const time = ["10AM - 11AM", "11AM - 12PM", "12PM - 1PM", "1PM - 2PM"];
  const [open, setopen] = useState("");
  //  const[tab,settab]=useState('false')
  const handleopen = (e) => {
    setopen(e);
  };

  const navigate = useNavigate();
  const { assessments, status } = useSelector((state) => state.assessment);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== "success") {
      (async () => {
        await dispatch(
          fetchAssessments(
            `${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getassignments`
          )
        );
      })();
    }
  }, []);

  return (
    <div className="all-assessments">
      <div className="all_assessments_header">
        <span className="assignment_heading">Assessment</span>
        <button
          className="Btn Btn--primary  assessment_btn"
          onClick={() => {
            navigate("./create");
          }}
        >
          Create <img src={plus} alt="" />
        </button>
      </div>
      <div className="card">
        <div className="s-head">
          <Search />
          <div className="section-time">
            <Dropdown name={"Filter"} 
            options={dates}
             onSelect={handleopen}
              width={"102px"}/>
          </div>
        </div>

        <table className="table">
          <thead>
            <tr className="fixed-header">
              <th>Name
                <img src={updown} alt="icon"/>
              </th>
              <th>Type  <img src={updown} alt="icon"/></th>
              <th>Section  <img src={updown} alt="icon"/></th>
              <th>Course  <img src={updown} alt="icon"/></th>
              <th>Submissions  </th>
              <th>Status </th>
              <th>Action </th>
            </tr>
          </thead>
          {status === "error" && (
            <div className="dashboardStatus error">
              Failed to load assignments :({" "}
            </div>
          )}
          {status === "loading" && (
            <div className="dashboardStatus">Loading your assignments ...</div>
          )}
          {status === "success" &&
            assessments.assignments.map((element, index) => {
              return (
                <tr key={index}>
                  <td>{element.title}</td>
                  <td>{element.type}</td>
                  <td>{element.section}</td>
                  <td>{element.course}</td>
                  <td>{element.submissionCount}/74</td>
                  {element.status && (
                    <td className="submission_marked">Marked</td>
                  )}
                  {!element.status && (
                    <td className="submission_pending">Pending</td>
                  )}
                  <td
                    onClick={() => {
                      navigate(`./view/${element._id}`);
                    }}
                  >
                    <ViewIcon />
                  </td>
                </tr>
              );
            })}
        </table>
      </div>
    </div>
    // </div>
  );
};

export default Assignment_1stpage;
