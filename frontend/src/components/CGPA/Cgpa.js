import React from 'react'
import './Cgpa.css'
import right from '../../assets/right.svg'


export default function Cgpa() {
  return (
    <div className="grade-container">

    <div className="grade-heading">
        <p className="gd-content">Grades : <p className="grade-clr"> 9.0</p>
       </p>
        <p className="up-view">View All</p>
    </div>
    <div className="grade">
       <div className="gd-container">
       <p className="gd-heading">Semester VII </p>
        <p className="gd-cgpa"> CGPA : <p className='grade-clr'>8.8 </p></p>
       </div>
       <div><img src={right} alt="loading"/></div>
    </div>


    <div className="gd-line">
        <hr></hr>
    </div>

    <div className="grade">
       <div className="gd-container">
       <p className="gd-heading">Semester VII </p>
        <p className="gd-cgpa"> CGPA : <p className='grade-clr'>8.8 </p></p>
       </div>
       <div><img src={right} alt="loading"/></div>
    </div>

</div>
  )
}
