import React, { useState, useEffect } from "react";
import "./createQuiz.css";
import eye from '../../assets/eve1.svg'
import Dropdown from "../dropdown/Dropdown";
import dustbin from "../../assets/dustbin.png";
import postupload from "../../assets/post-upload.svg";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import plus from "../../assets/plus.svg";
import tick from "../../assets/tick.svg";
import Greentick from "../../assets/Greentick.svg";
import { create, deleteQuiz, editquiz, get, getuse } from "../../services/quizService";
import { getquizid } from "../../services/createquizService";



const CreateQuiz = () => {
  
 
  const options = ["Text", "Image"];
  const [open, setopen] = useState("");
  const [question, setquestions] = useState(0);
  const [option, setOption] = useState([]);
  const [data, setdata] = useState();
  const { id } = useParams();
  const [Qn, setQn] = useState([]);
  const [reRender, setRerender] = useState(false);
  const [selectedOption, setSelectedOption] = useState(-1);
  const [inputValue, setInputValue] = useState('');
  const [type, setType] = useState();
  const [imageUrl, setImageUrl] = useState([]);
  useEffect(() => {
    console.log(imageUrl);
  }, [imageUrl]);
  const handleImageUpload = async (event) => {
    try {
      const files = event.target.files;
      if (!files || files.length === 0) {
        throw new Error("No file selected");
      }
  
      const formData = new FormData();
  
      // Loop through each file and append it to the FormData object
      for (let i = 0; i < files.length; i++) {
        formData.append("file", files[i]);
      }
  
      formData.append("upload_preset", "ml_default");
  
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dzvxsgooe/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
  
      if (!response.ok) {
        throw new Error(`Upload failed with status ${response.status}`);
      }
  
      const data = await response.json();
  
      // Add the new image URL to the array
      setImageUrl((prevImage) => [...prevImage, data.secure_url]);
      console.log(data.secure_url)
      console.log(imageUrl,"hii this img urls");
  
    } catch (error) {
      console.error(error);
    }
  };
  
  
  
  
  
  
 const nav=useNavigate()
  const [optick,setoptick]=useState(false)
  
  const handleOptionSelect = (index) => {
    setSelectedOption(index);
    // setoptick(true);
  };

  const handleRerender = () => {
    setRerender(!reRender)
  }

  useEffect(() => {
    loadqn();
  }, [reRender]);

  const handleopen = (e) => {
    setopen(e);
  };

  const loadqn = async () => {
    const res = await getquizid(id);
    setQn(res.AssociatedQuestions      );
    console.log(res,"hihi")
  };
  const handledelete = async (id) => {
    const resp = await deleteQuiz(id);
    loadqn();
  }
  const handleSave= async(e)=>{
 e.preventDefault();
 console.log(e.target)
 try{
  let def = {
      // image_url: e.target[1].value,
      image_url: imageUrl[0],
      question_text: e.target[0].value,
      question_type: "mcq",
      marks: e.target[3].value,
      is_option_image_url:type==="Image"?true:false,
      options: [
        {
          option_text:e.target[4].value,
          is_correct:false,
          option_image_url:imageUrl[1]
        },{
          option_text:e.target[5].value,
          is_correct:false,
          option_image_url:imageUrl[2]
        },{
          option_text:e.target[6].value,
          is_correct:false,
          option_image_url:imageUrl[3]
        },{
          option_text:e.target[7].value,
          is_correct:false,
          option_image_url:imageUrl[4]
        },
      ],
    }
    def.options[selectedOption].is_correct = true;
    console.log(def,"fom-data-image")

  const res = await create(def,id)
  console.log(res,def,"def")
  loadqn()
  handleRerender()
 }catch(err){
  console.log(err,"not qn ")
 }
  }

  return (
    <div className="createquiz_outer">
      <div className="upper_header">
      
          <h2 className="page_title">
            Quizzes <span className="cnq">/ Create New Quiz</span>
            </h2>
        
        <div className="button__group">
          <button className="Btn Btn--outline prebtn" onClick={()=>{nav(`/home/examination/preview/${id}`)}}> <span>Preview</span> <img src={eye}/></button>
          <button className="Btn Btn--primary postbtn" onClick={()=>{nav('/home/examination')}}><span>Post</span><img  src={postupload}/></button>
        </div>
      </div>
      <div className="d-flex create_quiz gap__30">
        <div className="showquestions card">
          <div classNa
          me="card__head">
            {" "}
            <h3 className="card__title">Questions
            <span>{Qn && Qn.length}</span></h3>
          </div>
          <div className="card__body question__list"></div>
          {Qn &&
            Qn.map((e, i) => {
              return (
                <div key={e._id} className="question__item active">
                  <h5 className="question__title">
                  <span className="question__number">Question {i + 1}</span>
                  {e.question_text}
                 <span className="question__delete"> <img className="cursor-pointer" src={dustbin} width="13px" height="15px" alt="" onClick={()=>{handledelete(e._id)}}/></span>
                
                 </h5>
                  
                  </div>
              );
            })}

          <div className="question-content">
            <button
              className="Btn Btn--outline "
              onClick={() => {
                setquestions(question + 1)
                // handleAddQuestion()
              }}
            >
              Add Questions
              {/* <img src={plus} alt="" /> */}
            </button>
          </div>
        </div>
        <div className="addquestion">
          <form action="" id="form-data" onSubmit={handleSave}>
            <div className="quiz_input1 ques">

              <input
                type="text"
                className="m-24 place-holder"
                name="question_text"
                required

              />
              <span>Question</span>
            </div>

          <div className="d-flex-base quiz_input1 ">
            <input
              type="file"
              className="m-24 options"
              name="image_url"
              onChange={handleImageUpload}
              required
              
             
            />
            <span>Add Image</span>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>

          {/* <input type="image" className='m-24' placeholder='Add Image'/> */}
          <div className="option-type m-24" style={{height:"44px"}}>
            <Dropdown
              name={"Option type"}
              options={options}
              setState={setType}


            
            />
            <div className="marks quiz_input1">
              <input
                type="text"
              
                name="marks"
                className="options "
              
                required
               
              />
              <span>marks</span>
            </div>
          </div>
          <div className="d-flex-base quiz_input1">
            <input
              type="text"
              className="m-24  options"
            
              required
              
            />
            {type==="Image"?<span>Caption 1</span>:<span>Option 1</span>}
            <div className="tick" onClick={()=> handleOptionSelect(0)}>
              {selectedOption === 0?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>
          {/* image input 0*/}
          { type==="Image"? <div className="d-flex-base quiz_input1">
            <input
              type="file"
              className="m-24  options"
              onChange={handleImageUpload}


              required
              
            />
            <span>Image 1</span>
            <div className="tick" onClick={()=> handleOptionSelect(0)}>
              {selectedOption === 0?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>:null}
          <div className="d-flex-base quiz_input1">
            <input
              type="text"
              className="m-24 options"
              
              required
              
            />
                         {type==="Image"?<span>Caption 2</span>:<span>Option 2</span>}
             <div className="tick" onClick={()=>handleOptionSelect(1)}>
              {selectedOption === 1?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>
                  {/* image input 1*/}
                  { type==="Image"? <div className="d-flex-base quiz_input1">
            <input
              type="file"
              className="m-24  options"
              onChange={handleImageUpload}

              required
              
            />
            <span>Image 2</span>
            <div className="tick" onClick={()=> handleOptionSelect(0)}>
              {selectedOption === 0?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>:null}
          <div className="d-flex-base quiz_input1">
            <input
              type="text"
              className="m-24 options"
            
              required
              
            />             {type==="Image"?<span>Caption 3</span>:<span>Option 3</span>}

              <div className="tick" onClick={()=>handleOptionSelect(2)}>
              {selectedOption === 2?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>
                  {/* image input 2*/}
                  { type==="Image"? <div className="d-flex-base quiz_input1">
            <input
              type="file"
              className="m-24  options"
              onChange={handleImageUpload}

              required
              
            />
            <span>Image 3</span>
            <div className="tick" onClick={()=> handleOptionSelect(0)}>
              {selectedOption === 0?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>:null}
          <div className="d-flex-base quiz_input1">
            <input
              type="text"
              className="m-24 options"
              
              required
              
            />
                        {type==="Image"?<span>Caption 4</span>:<span>Option 4</span>}

             <div className="tick" onClick={()=>handleOptionSelect(3)}>
              {selectedOption === 3?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>

                  {/* image input 3*/}
                  { type==="Image"? <div className="d-flex-base quiz_input1">
            <input
              type="file"
              className="m-24  options"
              onChange={handleImageUpload}

              required
              
            />
            <span>Image 4</span>
            <div className="tick" onClick={()=> handleOptionSelect(0)}>
              {selectedOption === 0?<img src={Greentick}  alt="" />:<img src={tick}  alt="" />}</div>
            <img className="cursor-pointer" src={dustbin} alt="" />
          </div>:null}
          <div className="topbtn flex-end">
            <button className="Btn Btn--outline">Cancel</button>
            <button className="Btn Btn--primary" type="submit" >Save</button>
          </div>
          </form>
        </div>

      </div>
    </div>
  );
};

export default CreateQuiz;
