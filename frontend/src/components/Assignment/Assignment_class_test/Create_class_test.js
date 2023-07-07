import React from 'react'
import './assignment_class_test.css'
import upload  from '../../../assets/upload.svg'
import Dropdown from '../../dropdown/Dropdown'
import { useState , useEffect } from 'react';
import uploadImage from "../../../assets/upload1.png";
import fileImage from "../../../assets/file.png";
import dustImage from "../../../assets/dustbin.png";
import ReactDOM from "react-dom";


export default function Create_class_test() {

    const [open, setopen] = useState("");
    // const options = ["Marks", "Roll No.", "Name"];
    const option = ["Assignment", "Class Test", "Practice Test"];
  
  
    const handleopen = (e) => {
      setopen(e);
    };
  
  
  
    // const [selectedFile, setSelectedFile] = useState(null);
  
    // const addFileToList = (file) => {
    //   const fileAddedContainer = document.querySelector(".file_added");
    //   let fileAddedList = fileAddedContainer?.querySelector(".file_list");
    //   const fileadd = document.querySelector(".h3");
  
    //   // Add the file to the list if it doesn't exist
    //   const listItem = (
    //     <li className="file_list_item">
    //       <div>
    //         <img src={fileImage} alt="img" />
    //         <h3>{file.name}</h3>
    //         <button>Preview</button>
    //       </div>
    //       <div className="file_size">
    //         {(file.size / 1024 / 1024).toFixed(2)}MB
    //       </div>
    //       <img src={dustImage} alt="" className="dustbin" />
    //     </li>
    //   );
  
    //   if (!fileAddedList) {
    //     fileAddedList = document.createElement("ul");
    //     fileAddedList.classList.add("file_list");
    //     fileAddedContainer.appendChild(fileAddedList);
    //   }
  
    //   const node = document.createElement("div");
    //   ReactDOM.render(listItem, node);
    //   fileAddedList.appendChild(node.firstChild);
  
    //   fileAddedContainer.classList.add("show");
    //   fileadd.classList.add("show1");
    // };
  
    // useEffect(() => {
    //   const element = document.querySelector(".course_upload");
    //   const element2 = document.querySelector(".file_added");
    //   if (element) {
    //     const width = element.offsetWidth;
    //     element2.style.width = `${width}px`;
    //   }
    // }, []);
  
    // const handleDragOver = (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   e.target.classList.add("dragover");
    // };
  
    // const handleDragLeave = (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   e.target.classList.remove("dragover");
    // };
  
    // const handleDrop = (e) => {
    //   e.preventDefault();
    //   e.stopPropagation();
    //   e.target.classList.remove("dragover");
    //   const file = e.dataTransfer.files[0];
    //   setSelectedFile(file);
    //   addFileToList(file);
    // };
  
    // const handleFileChange = (e) => {
    //   const file = e.target.files[0];
    //   setSelectedFile(file);
    //   addFileToList(file);
    // };
    // const fileName = selectedFile ? selectedFile.name : "No file selected";
  

    // input dynamic
// const create = {
  
//   title : "",
//   Instruction : "",
//   type: "",
//   Course: "",
//   Section: "",
//   Due_date:"",
//   Start_date:"",
//   Start_time:"",
//   End_Date:"",
//   End_time:""
  
// }


const [data ,setData] = useState({
  title : '',
  Instruction : '',
  type: '',
  Course: '',
  Section: '',
  Due_date:'',
  Start_date:'',
  Start_time:'',
  End_Date:'',
  End_time:''
});
const [disable, setDisable] = useState(true);
const handleDropInput = (e) => {
  console.log(e.target.innerText, "---")
}
const handleInput =(e)=>
{
  const {name,value} = e.target;
  console.log(name,value,"hello")
  setData({...data, [name]:value})
}

const handleSubmit = (e) =>{
e.preventDefault();
console.log(data);
setDisable('submitted');
}

  return (
    <>
    <div className="classtest_create_page">
    <div className="row assignment_create">
    <div className="col-12 assignment_col">
      {/* <div className="assignment_create_header">
        <span>Assessment </span><p>/Create</p>
      </div> */}
      <div className="class_create_description">
        {/* <div className="create_description_header">
                  <span>Create</span>
                  <button className='Btn Btn--primary'          
                  disabled = {
                    data.title.length === 0 &&
                    data.Instruction.length === 0 &&
                    data.type.length === 0 &&
                    data.Course.length === 0 &&
                    data.Section.length === 0 && 
                    data.Due_date.length === 0 &&
                    data.Start_date.length === 0 &&
                    data.End_Date.length === 0 &&
                    data.Start_time.length === 0 &&
                    data.End_time.length === 0      
                  }
                  >Post <img src={upload} alt="" /></button>
      
        </div> */}

<div className="create_input">
{/* <div className="create_input_left">
  <div className="create_input_title">
    <input type="text" required  name='title' value={data.title} onChange={handleInput} />
    <label htmlFor="">Title</label>
  </div>
  <div className="create_textarea">
    <textarea name='Instruction' id="" cols="90" rows="10" placeholder='Instructions' value={data.Instruction} onChange={handleInput}></textarea>
  </div>

  <div className="class_test_searchbar">

<input type={"search"} placeholder="Search" className="search-form" />

</div>
  
</div> */}
{/* <div className="assignment_create_line"></div> */}



<div className="create_input_right">
{/* <div className="create_assignment_dropdown  assignment_drop">
<Dropdown className = "assignment"  name="Type"
            options={option}
            onSelect={handleopen} width={"300px"} value={data.type} onChange={handleDropInput}/>
</div> */}

<div className="create_assignment_course_dropdown Course_dropdown">
           <Dropdown  name="Course"
            options={option}
            onSelect={handleopen} value={data.Course} onChange={handleInput}/>

            <Dropdown  name="Section"
            options={option}
            onSelect={handleopen} value={data.Section} onChange={handleInput}/>
</div>

<div className="create_assignment_marks_due_dropdown Section_drop">
{/* <div className="create_marks">
  <input type="number" required/> <label htmlFor="">Marks</label>
</div> */}
<Dropdown  name="Due Date"
            options={option}
            onSelect={handleopen}
          width={"300px"}  value={data.Due_date} onChange={handleInput}/>
            

</div>
<div className="create_assignment_course_dropdown Course_dropdown">
           <Dropdown  name="Start Date"
            options={option}
            onSelect={handleopen} value={data.Start_date} onChange={handleInput}/>

            <Dropdown  name="Start Time"
            options={option}
            onSelect={handleopen} value={data.Start_time} onChange={handleInput}/>
</div>
<div className="create_assignment_course_dropdown Course_dropdown">
           <Dropdown  name="End Date"
            options={option}
            onSelect={handleopen} value={data.End_Date} onChange={handleInput}/>

            <Dropdown  name="End Time"
            options={option}
            onSelect={handleopen} value={data.End_time} onChange={handleInput}/>
</div>


</div>

</div>

      </div>
      </div>
      </div>
      
    </div>
   
  </>
  )
}
