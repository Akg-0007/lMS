import React from "react";
import cross from "../../assets/cross.svg";

import "./Assessmenttracker.css";
import doc from "../../assets/doc.svg";
const Assessmenttracker = ({setView, title, description, file}) => {
  return (
    <div className="assessmenttracker-submit">
      <div className="assessment-container">
        <div className="assessment-heading">
          <span>{title}</span>
      
        <div className="img-cross">
          <img src={cross} alt="cross" onClick={ () =>setView(false)}/>
        </div>
        </div>
        <div className="assessment-content-container">
          <p className="assessment-content">
           {description}
          </p>
        </div>

        <div className="assignment-section">
          <div className="doc-logo">
            <img src={doc} alt="none" />
          </div>
         
          <div className="assi-section">
            <div className="assignment-section-content">
              <p>
                <span className="assignment-content">
                  <a href={file} target="_blank">View File</a> <br></br>
                </span>
                <span className="file-type">Word Document</span>
                
              </p>
              
              
              {/* <div className="download">
                <img src={cross} alt="Download"/>
              </div> */}
             

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Assessmenttracker;
