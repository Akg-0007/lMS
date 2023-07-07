import React from 'react'
import './Preview.css'
import cross from '../../assets/cross.svg'
import green_tick from '../../assets/green_tick.svg'
import { useState ,useEffect} from 'react'
import {  get} from "../../services/quizService";
import {  useNavigate, useParams} from "react-router-dom";
import {  getquizid } from '../../services/createquizService'



export default function Preview() {
    const{id}=useParams();
    console.log(id,"question id")
    const [question, setquestion] = useState(true)
    const [Qn, setQn] = useState([]);
    const navigate=useNavigate()

    useEffect(() => {
        loadqn();
      }, []);
    const loadqn = async () => {
        const res = await getquizid(id)
         setQn(res.AssociatedQuestions);
        console.log(res.AssociatedQuestions,"hihi")
      };

    return (
        <>
           <div className='quiz-back'>
            <div className="quiz-front">
                <div className="preview_header">
                <div className="quiz-head">
                    <p className='quiz-itle'>Basic Electrical Engineering</p>
                    <p className="total-qn">{Qn.length && Qn.length} Question</p>
                </div>
                <div className="preview_cross">
                    <img src={cross} alt="" onClick={() => navigate(-1)
                    
                    }/>
                </div></div>
                {Qn && Qn.map((e,i)=>{

              
               return (<><div className="quiz-questions" key={e.id}>
                    <p className='total-qn'>Question {i+1}</p>
                    <p className='quiz-qn-title'>{e.question_text}</p>
                    <img src={e.image_url} alt="" />
                    <div className="mcq-qn">

                    <div className="mcq">
                        <div className='mcq-option'>a</div>
                        <img src={e.options[0].option_image_url} alt="" />

                        <p>{e.options[0].option_text}</p> 
                        <p>{e.options[0].is_correct ? <img src={green_tick} alt="" /> : null}</p>

                    </div>
                    <div className="mcq">
                        <div className='mcq-option'>b</div>
                        <img src={e.options[1].option_image_url} alt="" />

                      <p>{e.options[1].option_text}</p>
                      <p>{e.options[1].is_correct ? <img src={green_tick} alt="" /> : null}</p> 

                    </div>
                    <div className="mcq">
                        <div className='mcq-option'>c</div>
                        <img src={e.options[2].option_image_url} alt="" />

                      <p>{e.options[2].option_text}</p>
                      <p>{e.options[2].is_correct ? <img src={green_tick} alt="" /> : null}</p> 

                    </div>
                    <div className="mcq">
                        <div className='mcq-option'>d</div>
                        <img src={e.options[3].option_image_url} alt="" />

                        <p>{e.options[3].option_text}</p>
                        <p>{e.options[3].is_correct ? <img src={green_tick} alt="" /> : null}</p> 

                    </div>
                    </div>
                </div>
                <div className="break"></div></> )
            })}
            </div>

           </div>
        </>
    )
}
