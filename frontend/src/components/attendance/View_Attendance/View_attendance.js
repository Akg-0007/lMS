import React, { useState } from "react";
// import './View_attendance.css'
import Dropdown from "../../dropdown/Dropdown"
import Search_bar from "../../Search_bar/Search_bar";
// import up_and_down from "../../../assets/up_and_down.svg"
// import prev from '../../../assets/prev.svg'
// import forw from '../../../assets/forw.svg'


export default function View_attendance() {

  const [sdata, setsdata] = useState([]);

  const time = ["10AM - 11AM"];
  const date = ["17 Apr"];
  const filter = ["class Test", "Assignment"];

  const [attendances, setAttendances] = useState([]);
  var selectedValue = null;

  const courseName = "math";
  const section = "A";



  const [open, setopen] = useState("");
  //  const[tab,settab]=useState('false')
  // const handleopen = (e) => {
  //   setopen(e);
  // };

  const handlePresent = (e, student) => {
    // console.log(e);
    selectedValue = e.target.value === 'true';
    setAttendances([
      ...attendances,
      {
        // isPresent: e.target.value,
        courseName: student.courseName,
        section: student.section,
        date: new Date(),
        student_userId: student.userId,
        present: selectedValue,
      },
    ]);

    // saveAttendance(attendances);

    console.log(attendances);
  };

  const handleopen = (e) => {
    setopen(e);
    console.log(e);

    async function fetchAttendanceRecords(courseName, section) {
      try {
        // Send GET request to backend API endpoint
        const response = await fetch(
          "https://procareer.live/api/api/attendance/allAttendance",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              courseName: courseName,
              section: section,
            }),
          }
        );
        const data = await response.json();
        console.log(data);
        setsdata(data);
        // return data;
      } catch (err) {
        console.error(err);
        throw err;
      }
    }

    fetchAttendanceRecords(courseName, section);
  };
  return (
    <>
      <div className="View_attendance">
        <div className="View_attendance_header">
          <span>Attendance</span><p>/ View Attendance</p>
        </div>
        <div className="row View_attendance_row">
          <div className="col-12 View_attendance_col">
            <div className="View_Attendance_details">
              <div className="View_Attendance_details_heading">
                <div className="section-colider">
                  <div className="section">
                    <Dropdown
                      className="section-time-date "
                      name={"Date"}
                      options={date}
                      onSelect={handleopen}
                    />

                    <div className="section_colider_header">
                      <span>
                        INT 404 | K19GE
                      </span>
                    </div>

                  </div>
                  <div className="section_colider_today_date">
                    <span>17 Apr, 2023 | Monday</span>
                  </div>
                </div>
                <div className="View_Attendance_details_filter">
                  <div className="View_Attendance_details_search"> <Search_bar /></div>
                  <div className="View_Attendance_details_filter">   <Dropdown
                    name={"Filter"}
                    options={filter}
                    onSelect={handleopen} /></div>
                </div>

                <div className="View_Attendance_table">
                  <table className="attendance-table">
                    <tr className='attendance-table-head' >
                      <th>Student Name <img src={"up_and_down"} /></th>
                      <th>Registration No <img src={"up_and_down"} /></th>
                      <th>Roll No <img src={"up_and_down"} /></th>
                      <th>Attendance <img src={"up_and_down"} /></th>
                      <th></th>
                      {/* <th></th> */}
                    </tr>
                    {sdata.map((student) => (
                      <>
                        <tr key={student.student.id}>
                          <td>{student.student.name}</td>
                          <td>{student.student.userId}</td>
                          <td>{student.student.rollNo}</td>
                          <td className="tdattendance-bar">
                            <div className="attendance-bar">
                              <div className="bar">
                                <div className="progress">
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: `${student.attendancePercentage}%`,
                                      background: "orange",
                                    }}
                                  ></div>
                                </div>
                              </div>
                              <div className="percentage">
                                {student.attendancePercentage}
                                <span>%</span>
                              </div>
                            </div>
                          </td>
                          <td className="absper">
                            <div className="abspr_attandance">
                              <div>
                                <input
                                  type="radio"
                                  name={student.student.userId}
                                  className="radio-btn"
                                  value="true"
                                  onChange={(e) => {
                                    e.persist();
                                    // setSelectedValue(true);
                                    handlePresent(e, student.student);
                                  }}
                                />
                                <label>Present</label>{" "}
                              </div>
                              <div>
                                <input
                                  type="radio"
                                  name={student.student.userId}
                                  className="radio-btn"
                                  value="false"
                                  onChange={(e) => {
                                    e.persist();
                                    // setSelectedValue(false);
                                    handlePresent(e, student.student)
                                  }}
                                />
                                <label>Absent</label>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </>
                    ))}
                  </table>
                </div>

              </div>

              <div className="View_Attendance_pagination">
                <div className="View_Attendance_pagination_left">
                  <span>1 - 4 of 4</span>
                </div>
                <div className="View_Attendance_pagination_buttons">
                  <button className="Btn Btn--outline"><img src={"prev"} />
                  </button>
                  <button className="Btn Btn--primary">1</button>
                  <button className="Btn Btn--outline"><img src={"forw"} />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}