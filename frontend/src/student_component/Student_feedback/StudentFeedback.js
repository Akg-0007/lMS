import React, { useState ,useEffect} from 'react'
import feedback from "../../assets/feedback.png";
import cross from "../../assets/cross.svg";
import { getAssignmentsById, getAssignmentsSubById } from '../../services/Assignment';


const StudentFeedback = ({setView,id}) => {
  const [feed,setfeed]=useState()
  useEffect(()=>{
    getallQ();
      },[])
  const getallQ=async()=>{
      const resp=await getAssignmentsSubById (id);
      
      setfeed(resp);
      console.log(id,"id")
  }
  return (
    <div className="feedback-submit">
    <div className="feedback-container">
      <div className="feedback-logo">
        <img src={feedback} alt="feedback-logo" />
        <span className="feedback-content">Feedback</span>
      </div>
      <div className="logo-cross">
        <img src={cross} alt="cross" onClick={ () =>setView(false)}/> 
      </div>
      <div className="feedback-text">
        <p className="feedback-text-content">
          {/* Feedback occurs when outputs of a system are routed back as inputs
          as part of a chain of cause-and-effect that forms a circuit or loop.
          The system can then be said to feed back into itself. */}
          {feed && feed.feedback}
        </p>
      </div>
    </div>
  </div>
  )
}

export default StudentFeedback