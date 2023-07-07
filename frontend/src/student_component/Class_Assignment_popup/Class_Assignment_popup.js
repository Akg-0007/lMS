import React, { useState,useEffect } from "react";
import cross from "../../assets/cross.svg";
import "./Class_Assignment_popup.css";
import doc from "../../assets/doc.svg";
import { getAssignmentsById } from "../../services/Assignment";

const Class_Assignment_popup = ({setAssign,id}) => {
    const [Assignment,setAssignment]=useState()
    useEffect(()=>{
      getallQ();
        },[])
    const getallQ=async()=>{
        const resp=await getAssignmentsById(id);
        
        setAssignment(resp);
    }
    
    return(
        <div className="assessmenttracker-submit">
      <div className="assessment-container">
        <div className="assessment-heading">
          <span>Assignment</span>
      
        <div className="img-cross">
          <img src={cross} alt="cross" onClick={ () =>setAssign(false)}/>
        </div>
        </div>
        <div className="assessment-content-container">
          <p className="assessment-content">
            {/* You are required to develop a simple task tracker application using
            Java that allows users to create, update, and delete tasks. The
            application should have a graphical user interface (GUI) that
            enables users to interact with tasks and track their status, such as
            pending, in progress, or completed. The application should store
            task data in a local data structure, such as an array or a linked
            list, and provide functionalities for adding new tasks, updating
            task status, and deleting tasks. The application should also handle
            errors and exceptions, such as invalid inputs or tasks not found,
            with appropriate error messages. */}
            {Assignment &&Assignment.description}
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
                  {Assignment&&Assignment.file}<br></br>
                </span>
                <span className="file-type">PDF</span>
                
              </p>
              
              
              {/* <div className="download">
                <img src={cross} alt="Download"/>
              </div> */}
             

            </div>
            
          </div>
        </div>
      </div>
    </div>
    )
}

export default Class_Assignment_popup;