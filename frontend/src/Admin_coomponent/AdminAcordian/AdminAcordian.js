import React,{useState} from 'react'
import './AdminAcordian.css'
import down from '../../assets/downkey.svg'
import AdSubjectMrks from '../AD_Subject_marks/AdSubjectMrks';
import cross from '../../assets/cross.svg'
export default function AdminAcordian({setCgpa}) {
 
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});

  return (
  <>
  
<div class="container">
<div className="AdSub_header">
    <span>Grades</span>
<img src={cross} alt="" onClick={() =>setCgpa
    (false)}/>
</div>

  <button class="accordion">
    
    <div className="Acordheader">
    <span className='AcordHead_left'> 
    Sem 1: </span>

    <div className="AcordHead_right">
        <img src={down} alt="" />
    </div>
  </div>
  </button>
  <div class="accordion-content">
    <p>
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
    </p>
  </div>

 
  <button class="accordion">
    
    <div className="Acordheader">
    <span className='AcordHead_left'> 
    Sem 1: </span>

    <div className="AcordHead_right">
        <img src={down} alt="" />
    </div>
  </div>
  </button>
  <div class="accordion-content">
    <p>
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
    </p>
  </div>
  <button class="accordion">
    
    <div className="Acordheader">
    <span className='AcordHead_left'> 
    Sem 1: </span>

    <div className="AcordHead_right">
        <img src={down} alt="" />
    </div>
  </div>
  </button>
  <div class="accordion-content">
    <p>
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
    </p>
  </div>
</div>
  </>
  )
}
