import React from "react";
import "../../../Assignment/Assignment_create1stpage/Assignment_create_1stpage";
import upload from "../../../../assets/upload.svg";
import Dropdown from "../../../dropdown/Dropdown";
import { useState, useEffect } from "react";
import uploadImage from "../../../../assets/upload1.png";
import fileImage from "../../../../assets/file.png";
import dustImage from "../../../../assets/dustbin.png";
import ReactDOM from "react-dom";
import AssignmentOptions from "../../../Assignment/assignment_create/AssignmentOptions";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { createAssessment } from "../../../../redux/features/dashboardSlices/assessmentSlice";
import { useNavigate } from "react-router-dom";

export default function Createannouncement() {
  const [asType, setAstype] = useState("")
  const [course, setCourse] = useState("")
  const [section, setSection] = useState("")
  const [marks, setMarks] = useState("")
  const [date, setDate] = useState("")

  const [title, setTitle] = useState("")
  const [instructions, setInstructions] = useState("")
  

 

  const option = ["Assignment", "Class Test"];
  //  data filling

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if(!section || !course ||  !marks || !asType || !title || !instructions || !date) {
      return
    }

    
        const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/assessment/assignment/create`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json', 'Authorization': `Bearer ${Cookies.get("token")}`},
            body: JSON.stringify({title, description: instructions, course, section, type: asType, marks, dueDate: "2023-05-20T00:00:00.000Z", file: fileName, createdBy : Cookies.get('userId') }) 
        })

        const json = await response.json()
        if(!response.ok) {
            console.log("Err-r",json)
            return
        }
        await dispatch(createAssessment(json.assignment))

        console.log("json",json)
        navigate("/home/assignment")

  };

  const [selectedFile, setSelectedFile] = useState(null);

  const addFileToList = (file) => {
    const fileAddedContainer = document.querySelector(".file_added");
    let fileAddedList = fileAddedContainer?.querySelector(".file_list");
    const fileadd = document.querySelector(".h3");

    if (!fileAddedList) {
      fileAddedList = document.createElement("ul");
      fileAddedList.classList.add("file_list");
      fileAddedContainer.appendChild(fileAddedList);
    }

    const node = document.createElement("div");

    fileAddedContainer.classList.add("show");
    fileadd.classList.add("show1");
  };

  useEffect(() => {
    const element = document.querySelector(".course_upload");
    const element2 = document.querySelector(".file_added");
    if (element) {
      const width = element.offsetWidth;
      element2.style.width = `${width}px`;
    }
  }, []);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.add("dragover");
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.target.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    addFileToList(file);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    addFileToList(file);
  };

  const fileName = selectedFile ? selectedFile.name : "No file selected";

  return (
    <>
      <div className="assignment_create_page">
        <div className="row assignment_create">
          <div className="col-12">
            <div className="assignment_create_header">
              <span onClick={() => navigate("/home/assignment")}>Assessment </span>
              <p>/Create</p>
            </div>
            <div className="create_description">
              <div className="create_description_header">
                <span>Create</span>
                <button
                  className="Btn Btn--primary"
                  onClick={handleSubmit}
                  disabled={!section || !course ||  !marks || !asType || !title || !instructions || !date || fileName=="No file selected"}
                >
                  Post <img src={upload} alt="" />
                </button>
              </div>

              <div className="create_input">
                <div className="create_input_left">
                  <div className="create_input_title">
                    <input
                      type="text"
                      required
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="">Title</label>
                  </div>
                  <div className="create_textarea">
                    <textarea
                      name="Instruction"
                      id=""
                      cols="90"
                      rows="10"
                      className={ !instructions? "" : "has-content"}
                      value={instructions}
                      onChange={(e) => setInstructions(e.target.value)}
                    ></textarea>
                    <label >Instructions</label>
                  </div>
                  <div className="upload_assignment_file">
                    <div
                      className="form_drag"
                      onClick={() =>
                        document.querySelector('input[type="file"]').click()
                      }
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                    >
                      <div className="icon">
                        <img src={uploadImage}></img>
                      </div>
                      <header>
                        {fileName} <br />{" "}
                        <span>
                          JPG, PNG or PDF, file size no more than 10MB
                        </span>
                      </header>
                      <button className="Btn Btn--outline">Select File</button>
                      <input
                        type="file"
                        hidden
                        onChange={handleFileChange}
                        accept=".jpg, .png, .pdf"
                        maxfilesize={10 * 1024 * 1024}
                      />
                    </div>
                    <h3 className="h3">File added</h3>
              <div className="file_added">{selectedFile && <div>
                <ul className="file_list">
            <li className="file_list_item">
              <div>
                <img src={fileImage} alt="img" />
                <h3>{selectedFile.name}</h3>
                <button>Preview</button>
              </div>
              <div className="file_size">
                {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
              </div>
              <img src={dustImage} alt="" className="dustbin" />
            </li>
          </ul>
                </div>}</div>
                  </div>
                </div>
                <div className="assignment_create_line"></div>

                <div className="create_input_right">
                  <div className="create_assignment_dropdown  assignment_drop">
                    <Dropdown
                      className="assignment"
                      name="Type"
                      options={option}
                      width={"350px"}
                      setState={setAstype}
                    />
                  </div>
                  <AssignmentOptions setMarks={setMarks} setCourse={setCourse} setSection={setSection} setDate={setDate}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
