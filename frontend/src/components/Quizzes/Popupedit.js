import React from 'react';

import './Popupcomp.css'
import cross from '../../assets/cross.svg'
import Dropdown from '../dropdown/Dropdown'
import { useState,useEffect } from 'react';
import { useNavigate,useParams } from 'react-router-dom';
import {  editquiz, getquizid } from '../../services/createquizService';



export default function Popupedit() {

    const [course, setCourse] = useState("");
const options = ["INT 407", "CSE 302", "PEP 321"];
let def={
    title:"",
    description:"",
    section:{course}
  }


    const[data,setdata]=useState(def);
        const nav=useNavigate();
        const {id}=useParams();
        useEffect(()=>{
            loaduser();
        },[])
        const loaduser=async()=>{
            const response=await getquizid(id);
            console.log(response)
            setdata(response)
        }
       const onvch=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
       }
      
    
     const edit= async  ()=>{
      await editquiz(data,id);
      nav(-1);
     }

  

 

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
                        <input type="text" value={data.title} required onChange={(e)=>{onvch(e)}} name="title"/><span>Title</span>
                    </div>
                    <div className="quiz_txtarea">
                        <textarea name="description" value={data.description} onChange={(e)=>{onvch(e)}} id="" cols="30" rows="10"  placeholder='Description' ></textarea>
                    </div>
              <div className="quiz_dropdown">
                <Dropdown   name={"Course"}
              options={options}
               width={"550px"}
               setState={setCourse}
               />
              </div>
<div className="quiz_buttons">
          <div className="Btn Btn--outline" onClick={()=>nav(-1)}>Cancel</div>
          <div className="Btn Btn--primary" onClick={()=>edit()}>Submit</div>
</div>

                </div>
            </div>

            

        </>
    )
};