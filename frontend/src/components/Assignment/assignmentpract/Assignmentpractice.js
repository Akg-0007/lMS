import React from 'react'
import plus from '../../../assets/plus.svg'
import './Assignmentpractice.css'
import Dropdown from '../../dropdown/Dropdown'
import { useState } from 'react';
import attachment from '../../../assets/attachment.svg'
import feedback from '../../../assets/feedback.svg'
import feedback_view from '../../../assets/feedback_view.svg'



export default function Assignmentpractice() {

  const [open, setopen] = useState("");
  const options = ["Marks", "Roll No.", "Name"];
  const option = ["Pass", "Fail"];


  const handleopen = (e) => {
    setopen(e);
  };

  return (
   <>
   <div className="assesment">
   <div className="assessment_heading">
   <div className="assessment_heading_left">
   <span>
          Assessment 
        </span>
        <p>/ Class Test</p>
   </div>
   <button className='Btn Btn--primary'> Create <img src={plus} alt="" /></button>
       
      </div> 
    <div className="row">
    <div className="col-12">
    
    <div className="assessment_tracker">
      
       <div className="tracker_heading">
        <div className="tracker_heading_left">
          <span>Unit 1</span>
        </div>


        <div className="tracker_heading_right">
          <div className="Btn Btn--outline">View Quiz</div>
          <div className="Btn Btn--outline">Publish Results</div>
          
        </div>
       </div>

<div className="assessment_details">

  <div className="assessment_details_left">
  <div className="due_time">
               <p>04 Apr, 2022 | 03:00 PM  -  04 Apr, 2022 | 05:00 PM </p>
  </div>

 <div className="assessment_left_left">
  
  <div className="assessment_course_section">
    <div className="assessment_course course">
              Course <p>Int 404</p>
  </div>
    <div className="assessment_course sections">
          Section <p>K19FR</p>
    </div>
  </div>
  <div className="line"></div>
  <div className="assessment_course_section">
    <div className="assessment_course due_date">
             Duration <p>60 minutes</p>
  </div>
    <div className="assessment_course marks">
          Marks <p>30</p>
    </div>
  </div>
 </div>
    

  </div>

<div className="assessment_details_right">
  
  
  <div className="assessment_details Submissions">
   <p> 67 <span> /75</span></p>
    <span>Participations</span>
  </div>
</div>


</div>

<div className="table_area">


<div className="assessment_table_area">
  <div className="assessment_table_heading">
  <div className="assessment_table_search-bar">
<input type={"search"} placeholder="Search" className="search-form"/>
</div>
<div className="assessment_table_filter">
<Dropdown  name={"Sort"}
              options={options}
              onSelect={handleopen}/>

<Dropdown  name={"Filter"}
              options={option}
              onSelect={handleopen}/>
</div>



  </div>
  <div className="assessment_table_details">
  <table>
        <tr className='details_table_row'> 
        <th >Student Name</th>
      <th>Registration No.</th>
      <th>Roll No.</th>
      <th>Questions Attempted </th>
      <th>Marks</th>
      
        </tr>

        <tr className='student_details'>
          <td>Manish Yadav</td>
          <td>11902435</td>
          <td>RK19GEA09</td>
          <td>25/30</td>
          <td>24</td>
        </tr>
        <tr className='student_details'>
          <td>Manish Yadav</td>
          <td>11902435</td>
          <td>RK19GEA09</td>
          <td>25/30</td>
          <td>24</td>
        </tr>
      </table>
      </div>
</div>
</div>
    </div>

    </div>

    </div>
    </div>
   </>
  )
}
