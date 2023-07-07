import React,{useState} from 'react'
import danger from '../../assets/danger.svg'
import Popup from "../../components/toaster/Popup";
import './DeletePop.css'
import { deleteStudent } from '../../services/Admin';

export default function DeletePop({setDel,id,fetchstu}) {
    const [toast, settoast] = useState(false);
    const admindeleteStudent=async()=>{
      console.log(id,"adminid");
      await deleteStudent(id);
    }
   
    const yes = () =>
    {
       
        settoast(true)
        admindeleteStudent();
        // fetchstu();
     setTimeout (() =>{
        setDel(false)
        settoast(false);
     },1300)
    }
    
  return (
    < div className='delete-pop-main'>
    <div className="assessmenttracker-submit">
        <div className="assessment-container deletePopUp">
   <div className="deletepop">
       <span><img src={danger} alt="" /></span>
       <span className='warning'>Are You sure <br />
        you want to delete ?
       </span>
       <span className='buttons-delete'>
        <button className='Btn Btn--outline' onClick={
            () => setDel(false)}>
                No</button>
        <button className='Btn Btn--outline deleteYes'  onClick={
            () => yes()
            
            }>Yes</button>

       </span>
   </div>
        </div>
       
    </div>
    {toast && ( 
          <Popup
            state={"success"}
            message={"Profile Delted Successfully!"}
          />
        )}
    </div>
  )
}
