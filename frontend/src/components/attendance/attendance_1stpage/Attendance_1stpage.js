import React from 'react'
import './Attendance_1stpage.css'
import Dropdown from '../../../components/dropdown/Dropdown'
import empty from "../../../assets/emptytable.png";
// import data from '../../../assets/'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Cookies from 'js-cookie';


export default function Attendance_1stpage() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState("");

  const { sections, status } = useSelector((state) => state.section)

  const today = new Date();    

  const [courseOptions, setCourseOptions] = useState([]);
  const [sectionOptions, setSectionOptions] = useState([]);

  const [course, setCourse] = useState();
  const [section, setSection] = useState();

  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const formattedDate = `${year}-${month}-${day}`;

  useEffect(() => {
    
    if(status === "success") {
      let tempCourse = []
      let tempSection = []
      sections.sections.forEach((section) => {
        tempSection.push(section.name)
        section.courses.forEach((course) => {
          tempCourse.push(course.code)
        })
      })

      tempCourse = Array.from(new Set(tempCourse));
      tempSection = Array.from(new Set(tempSection)); 
      
      setCourseOptions(tempCourse)
      setSectionOptions(tempSection)
    }
  }, [status])

  const handleCreateSession = async () => {
      const token = Cookies.get("token")

      const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/attendance/createsession`,  {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
          'Authorization': `Bearer ${token}`,
        }, 
        body : JSON.stringify({
          courseCode: course,
          section : section,
          date : today
      })
      })
      const json = await response.json()

      if(!response.ok) {
        setError(json.error)
      }
      console.log("json", json)
  }


  return (
    <>
      <div className='attendance_1stpage'>
        <div className='attendance_header'>
          <span> Attendance</span></div>

        <div className='row attendance_row'>
          <div className='col-12 attendance_col' >
            <div className='attendance_container'>
              <div className='attendance_container_header'>
                <div className='attendance_container_calender'>
                  <Dropdown options={courseOptions} name={"Course"} setState={setCourse} width={"auto"} />
                  <Dropdown options={sectionOptions} name={"Section"} setState={setSection} width={"auto"}/>
                </div>
                <div className='attendance_container_today_date'>
                  <span>{formattedDate}</span>
                </div>
              </div>
              <div className="attendance-image">
              <div className="attendance-image">
 
                 < img src={empty}  alt="no-data"/>
                 </div> 
              {/* <Mark_attendance /> */}
              
              <button onClick={() => handleCreateSession()} className='Btn Btn--primary' disabled={course && section ? false : true}>Create Session</button>
            </div>
          </div>
        </div> 
        </div>
        </div>
    </>
  )
}
