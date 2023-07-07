import React,{useState} from 'react'
import Notification from '../../assets/NotificationRed.svg'
import "./StuGrade.css"
import ai from "../../assets/ai.jpg";
import courseListArrow from "../../assets/courseListArrow.png";
import right from '../../assets/right.svg'
import Stcourse from '../../components/Student/Studentcourse/Stcourse'
import Stcourselist from '../../components/Student/Studentcourse/Stcourselist'
import Stcoursedetails from '../../components/Student/Studentcourse/Stcoursedetails'
import AdSubjectMrks from '../../Admin_coomponent/AD_Subject_marks/AdSubjectMrks';

export default function StuGrade({ course, courseName, syllabus, activeset, onSelect, isSelected}) {


    const [isHovered, setIsHovered] = useState(false);
    console.log("Active:", activeset);
    const handleHover = () => {
      setIsHovered(true);
    };
  
    const handleLeave = () => {
      setIsHovered(false);
    };
  
    const classNames = ["CourseList_content", "flex", "pointer"];
    if (isSelected) {
      classNames.push("selected");
    }
  return (
    <>
    <div className="Stu_Grade">
        <div className="Stu_Grade_header">
            <div className="grade_left">
                <span>Grade : </span>
                9.0
            </div>
            <div className="grade_right">
<img src={Notification} alt="" />
            </div>
        </div>
<div className="col-12 stu_grade">
       <div className="col-4  stu_left_grade">
<div 
      className={classNames.join(" ")} 
      onClick={onSelect}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="stu_Grade_headi">
<span className = 'Grade_semseter_name'>Semseter I</span>
<span className='Cgpa_stuGrade'>CGPA : <span>8.8</span></span>
      </div>
      
        <button className="CourseList_button">
          <img src={courseListArrow} alt="arrow" />
        </button>
      

    </div>
    <div className="hr stu_hr"><hr /></div>
    <div 
      className={classNames.join(" ")} 
      onClick={onSelect}
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className="stu_Grade_headi">
<span className = 'Grade_semseter_name'>Semseter II</span>
<span className='Cgpa_stuGrade'>CGPA : <span>6.8</span></span>
      </div>
      
        <button className="CourseList_button">
          <img src={courseListArrow} alt="arrow" />
        </button>
      

    </div>
    </div>
    <div className="col-8 stuMarks_col">
    <div className="particular_sem_marks">
        <div className="stu_marks">
        <span className = 'Grade_semseter_names '>Semseter I</span>
            <span className='Cgpa_stuGrades'>CGPA : <span>8.8</span></span>
        </div>
<div className="adSub_table_part">
    <span>INT 404 : ARTIFICIAL INTELLIGENCE</span>
    <table className='adSub_table'>
        <thead>
            <tr>
                <td>Type</td>
                <td>TM</td>
                <td>OM</td>
               <td>Grades</td> 
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Assignment</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Class Test</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Practice Test</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Mid Term Exam</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Final Term Exam</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
        </tbody>

    </table>
</div>

<div className="adSub_table_part">
    <span>CSE 404 : SOFTWARE TESTING</span>
    <table className='adSub_table'>
        <thead>
            <tr>
                <td>Type</td>
                <td>TM</td>
                <td>OM</td>
               <td>Grades</td> 
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Assignment</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Class Test</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Practice Test</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Mid Term Exam</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
            <tr>
                <td>Final Term Exam</td>
                <td>15</td>
                <td>12</td>
                <td>A+</td>

            </tr>
        </tbody>

    </table>
</div>
<div>
</div>
    </div></div>
       </div>
    </div>
    </>
  )
}
