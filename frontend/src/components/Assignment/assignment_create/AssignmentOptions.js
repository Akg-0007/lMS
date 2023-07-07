import React from "react";
import "./AssignmentOptions.css";
import upload from "../../../assets/upload.svg";
import Dropdown from "../../dropdown/Dropdown";
import { useState, useEffect } from "react";
import uploadImage from "../../../assets/upload1.png";
import fileImage from "../../../assets/file.png";
import dustImage from "../../../assets/dustbin.png";
import ReactDOM from "react-dom";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
import down from '../../../assets/arrow-icon.svg' 

export default function AssignmentOptions({setCourse, setMarks, setSection, setDate}) {

  const { sections, status } = useSelector((state) => state.section)

  
  let courseOptions = []
  let sectionOptions = []

  sections.sections && sections.sections.forEach((section) => {
    sectionOptions.push(section.name)
    section.courses.forEach((course) => {
      courseOptions.push(course.code)
    })
  })
   courseOptions = Array.from(new Set(courseOptions));
   sectionOptions = Array.from(new Set(sectionOptions));

  
  const option = ["Pass", "Fail"];
  const [localMarks, setLocalMarks] = useState()

  return (
    <>
      <div className="assignment_options">
        <div className="row assignment_create">
          <div className="col-12">
            <div className="create_description">
              <div className="create_input">
                <div className="create_input_right">
                  <div className="create_assignment_course_dropdown Course_dropdown">
                    <Dropdown
                      name={"Course"}
                      options={courseOptions}
                      setState={setCourse}
                    />

                    <Dropdown
                      name={"Section"}
                      options={sectionOptions}
                      setState={setSection}
                    />
                  </div>

                  <div className="create_assignment_marks_due_dropdown Section_drop">
                    <div className="create_marks">
                      <input type="number" required value={localMarks} onChange={(e) => setMarks(e.target.value)} />{" "}
                      <label htmlFor="">Marks</label>
                    </div>
                    {/* <Dropdown
                      name={"Due Date"}
                      options={option}
                      
                    /> */}
                    <div className="date">
                      <input type="date" id="date"  name="date" onChange={(e) => {
                        e.target.classList.add("active")
                        setDate(e.target.value)
                      }} />
                      {/* <label for="date">Due Date</label> */}
                      
                    </div>
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
