import React, { useState } from "react";
import "./Attendance.css";
import empty from "../../assets/emptytable.png";
import Attendancesubmit from "./Attendancesubmit";
import Dropdown from "../dropdown/Dropdown";

const Attendance = () => {
  const [modal, setmodal] = useState(false);

  const options = ["K19EG", "K19EH", "K19EI"];
  const dates = ["16 Aug", "17 Aug", "18 Aug", "19 Aug"];
  const time = ["10AM - 11AM", "11AM - 12PM", "12PM - 1PM", "1PM - 2PM"];
  const [open, setopen] = useState("");
  const handleopen = (e) => {
    setopen(e);
  };

  return (
    <>
      {modal && <Attendancesubmit setmodal={setmodal} />}
      <div className="attendance_outer">
        <div className="upper_header">
          <h2 className="page_title">Mark Attendance</h2>
        </div>
        <div className="card">
          <div className="card__head d-flex  space--between">
            <Dropdown
              name={"Section"}
              options={options}
              onSelect={handleopen}
              width={"120px"}
              border={"none"}
            />
            <div className="section-time">
              <Dropdown
                className="section-time-date "
                name={"Date"}
                options={dates}
                onSelect={handleopen}
              />
              <Dropdown
                className="section-time-date "
                name={"Time"}
                options={time}
                onSelect={handleopen}
              />
            </div>
          </div>

          <div className="table-content">
            {/* {(tab?<div className="table-image">
 
<img src={empty}  alt="no-data"/>
</div> : */}
            <table className="table">
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Registration No</th>
                  <th>Roll No</th>
                  <th>Attendance</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Akash</td>
                  <td>11910634</td>
                  <td>RK19geA09</td>
                  <td>
                    <div className="attendance-bar">
                      <div className="progress">
                        <span
                          className="progress-bar"
                          style={{ width: "67%", background: "orange" }}
                        ></span>
                      </div>

                      <div className="percentage">67%</div>
                    </div>
                  </td>
                  <td >
                  <div className="abspr_attandance ">
                      <p className="present_attend radio_outer">
                        <input type="radio" id="ap-1"name="apb-1" />
                        <label htmlFor="ap-1">Present</label>
                      </p>
                      <p className="absent_attend radio_outer">
                        <input
                          type="radio"
                          id="ab-1"
                          name="apb-1"
                          
                        />
                        <label htmlFor="ab-1">Absent </label>
                      </p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>Akash</td>
                  <td>11910634</td>
                  <td>RK19geA09</td>
                  <td>
                    <div className="attendance-bar">
                      <div className="progress">
                        <span
                          className="progress-bar"
                          style={{ width: "97%", background: "green" }}
                        ></span>
                      </div>

                      <div className="percentage">97%</div>
                    </div>
                  </td>
                  <td >
                  <div className="abspr_attandance ">
                      <p className="present_attend radio_outer">
                        <input type="radio" id="ap-2"name="apb-2" />
                        <label htmlFor="ap-2"> Present</label>
                      </p>
                      <p className="absent_attend radio_outer">
                        <input
                          type="radio"
                          id="ab-2"
                          name="apb-2"
                          
                        />
                        <label htmlFor="ab-2">Absent </label>
                      </p>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td>Akash</td>
                  <td>11910634</td>
                  <td>RK19geA09</td>
                  <td>
                    <div className="attendance-bar">
                      <div className="progress">
                        <span
                          className="progress-bar"
                          style={{ width: "46%", background: "red" }}
                        ></span>
                      </div>

                      <div className="percentage">46%</div>
                    </div>
                  </td>
                  <td>
                    <div className="abspr_attandance ">
                      <p className="present_attend radio_outer">
                        <input type="radio" id="ap-3"name="apb-3" />
                        <label htmlFor="ap-3"> Present</label>
                      </p>
                      <p className="absent_attend radio_outer">
                        <input
                          type="radio"
                          id="ab-3"
                          name="apb-3"
                          
                        />
                        <label htmlFor="ab-3">Absent </label>
                      </p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="table-buttons">
            <div>
              <button
                className="Btn  Btn--primary"
                onClick={() => {
                  setmodal(true);
                }}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Attendance;
