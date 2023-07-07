import React, { useEffect } from 'react';

import './Popupcomp.css'
import cross from '../../assets/cross.svg'
import Dropdown from '../dropdown/Dropdown'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addQuiz } from '../../services/createquizService';

export default function Popupcomp() {
 
        const Navigate=useNavigate()
        const[title,Settitle]=useState()
        const[description,Setdescription]=useState()
        const[section,setsection]=useState();
        const marks=2
        const teacherId=2
        // let questions=[]
        let AssociatedQuestions
  const add = async () => {
    try {
       const quizId =await addQuiz({title,description,section, marks, teacherId, AssociatedQuestions});
       return quizId
      console.log('Quiz ID:', quizId );

      
       // Navigate(-1)
      
    } catch (error) {
      console.error('Error adding quiz:', error);
    }
  };
//  console.log(data)
const handleadd=async()=>{
  const qid=await add();
  Navigate(`/home/examination/createquiz/${qid}`)
}

  const [open, setopen] = useState("");
  const options = ["INT 407", "CSE 302", "PEP 321"];
 
  const handleopen = (e) => {
    

    setopen(e);
  };
   
    return (
        <>
           

            <div className="modal">
                <div className="overlay"></div>
                <div className="modal-content">
                    <div className="quiz_heading">
                        <span>Basic Information</span> 
                            <img src={cross} alt="" />
                        </div>
                    <div className="quiz_input">
                        <input type="text" required onChange={(e)=>{Settitle(e.target.value)}} name="title"/><span>Title</span>
                    </div>
                    <div className="quiz_txtarea">
                        <textarea name="description" onChange={(e)=>{Setdescription(e.target.value)}} id="" cols="30" rows="10"  placeholder='Description' ></textarea>
                    </div>
              <div className="quiz_dropdown">
                <Dropdown   name={"Course"}
              options={options}
              onSelect={handleopen} width={"550px"} setState={setsection}/>
              </div>
<div className="quiz_buttons">
          <div className="Btn Btn--outline" onClick={()=>Navigate(-1)}>Cancel</div>
          <div className="Btn Btn--primary" onClick={()=>handleadd()}>Continue</div>
</div>

                </div>
            </div>

            

        </>
    )
};