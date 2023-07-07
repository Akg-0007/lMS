import React,{useState} from 'react'
import cross from '../../assets/cross.svg'
import './AdSubjectMrks.css'

export default function AdSubjectMrks({setMarks}) {
//    const [prof, setProf] = useState(false);

  return (
    <>
    
    <div className="assessmenttracker-submit">
        <div className="assessment-container adSubContainer">
            <div className="AdSubHeader">
<div className="AdSub_header">
    <span>Grades</span>
<img src={cross} alt="" onClick={() =>setMarks
    (false)}/>
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
        </div>
        </div>
    </div>
    </>
  )
}
