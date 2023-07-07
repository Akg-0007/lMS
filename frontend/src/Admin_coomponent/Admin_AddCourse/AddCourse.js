import React,{useState , useEffect}from 'react'
import './AddCourse.css'
import NotificationRed from '../../assets/NotificationRed.svg'
import uploadImage from "../../assets/upload1.png";
import fileImage from "../../assets/file.png";
import EyeOutline from "../../assets/EyeOutline.svg";
import dustImage from "../../assets/dustbin.svg";
import Dot from "../../assets/Ellipse 1.svg";
import Popup from '../../components/toaster/Popup';
import { useNavigate, useLocation } from 'react-router-dom';



export default function AddCourse() {
  const location = useLocation();
    const [title,setTitle] = useState("");
  const [instructions, setInstructions] = useState("")  
  const [name,setName] = useState("")
  const [upload,setUpload] = useState("")
  const navigate = useNavigate();
  // console.log(location.state);

  const data2 = location.state;
  console.log(data2,"data2");
  {

    const [selectedFile, setSelectedFile] = useState(null);
    const [fileUrl, setFileUrl] = useState(null);
    const [toast, settoast] = useState(false);
    const yes = () =>
    {
        settoast(true)
        setTimeout (() =>{
        settoast(false);
        setUpload(false);
          data2.courses.push({title,instructions,name,selectedFile});
  navigate("/home/department");
     },1300)
    }
  
  
    const addFileToList = (file) => {
      const fileAddedContainer = document.querySelector(".file_added");
      let fileAddedList = fileAddedContainer?.querySelector(".file_list");
  
      if (!fileAddedList) {
        fileAddedList = document.createElement("ul");
        fileAddedList.classList.add("file_list");
        fileAddedContainer.appendChild(fileAddedList);
      }
  
      setFileUrl(URL.createObjectURL(file)); // set file URL
      setSelectedFile(file); // set selected file
      fileAddedContainer.classList.add("show");
  
      if (!file) {
        fileAddedContainer.classList.remove("show");
      }
    };
  
    useEffect(() => {
      const element = document.querySelector(".course_upload");
      const element2 = document.querySelector(".file_added");
      if (element) {
        const width = element.offsetWidth;
        element2.style.width = `${width}px`;
      }
    }, []);
  
    const handlePreview = () => {
      if (fileUrl) {
        window.open(fileUrl, "_blank");
      }
    };
  
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
  
    // console.log(title,"title",instructions,"instructions",name,"name",selectedFile.name,"upload");

  return (




    
    <>
    <div className="AddProgram">
      <div className="AdscvHeader addCourse">
        <span>Department</span>
        <img src={NotificationRed} alt="" />
      </div>
      <div className="depa__add">
   <div className="AddDepartment_desc">
   <span>Add Course</span>
   <div className="add">
<div className="desc__ADDCOurse">
   <div className="create_input_title">
                    <input
                      type="Number"
                      required
                      name="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="">Course Code</label>
                  </div>

                  <div className="create_input_title">
                    <input
                      type="text"
                      required
                      name="title"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="">Course Name</label>
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
                    <label >Description</label>
                  </div>
                  
                <span className='add_Syllabus'>Syllabus</span>
                  <div className="upload_form">
          <div className="upload_form_content">
            <form action="Post">

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
                  <span>JPG, PNG or PDF, file size no more than 10MB</span>
                </header>
                <button>Browse File</button>

                
                <input
                  type="file"
                  hidden
                  onChange={handleFileChange}
                  accept=".jpg, .png, .pdf"
                  maxfilesize={10 * 1024 * 1024}
                />
              </div>
              <h3 className="h3">File added</h3>
              <div className="file_added file_added_all">
                {selectedFile && (
                  <div className="file_list_item">
                    <div className="leftp">
                      <div className="file_title">
                        <img src={fileImage} alt="img" />
                        <h3>{selectedFile.name}</h3>
                      </div>
                      <div className="file_size">
                        <img src={Dot} alt="dot" className="dot1" />
                        {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
                      </div>
                    </div>
                    <div className="rightp">
                      <img
                        src={EyeOutline}
                        alt="View"
                        onClick={handlePreview}
                        className="pointer"
                      />
                      <img
                        src={dustImage}
                        alt=""
                        className="dustbin pointer"
                        onClick={() => setSelectedFile(null)}
                      />
                    </div>
                  </div>
                )}
              </div> 
            </form>
          </div>
        </div>



                
    </div>
    </div>
    <div className="Adnext_button">
        <button className='Btn Btn--primary  next_button' onClick={() =>yes()}>Create</button>
        </div>
        {toast && ( 
          <Popup
            state={"success"}
            message={"New department added successfully!"}
          />
        )}
    
    </div>
    </div>
    </div>
  </>
  )

}}
