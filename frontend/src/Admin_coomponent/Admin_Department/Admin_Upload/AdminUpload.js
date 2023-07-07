import React,{useState, useEffect} from 'react'
import './AdminUpload.css'
import cross from '../../../assets/cross.svg'
import uploadImage from "../../../assets/upload1.png";
import fileImage from "../../../assets/file.png";
import dustImage from "../../../assets/dustbin.svg";
import Dot from "../../../assets/Ellipse 1.svg";
import EyeOutline from "../../../assets/EyeOutline.svg";


export default function AdminUpload({ setUpload }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
 
  const [modal, setmodal] = useState(false);
  // const navigate = useNavigate();


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

  const fileName = selectedFile ? selectedFile.name : "Select a CSV file to upload";
  const [toast, settoast] = useState(false)
  return (
    <>
    <div className="assessmenttracker-submit ">
        <div className="assessment-container adupload_white">
<div className="adup_header">
    <span>Upload CSV</span>
    <img src={cross} alt="" />
</div>

<div className="upload_form">
          <div className="upload_form_content">
            <form action="Post">

              <div
                className="admin_drag"
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
                <header className='upload_header'>
                  {fileName}{""}
                  {/* <span className='uploadText'>Drag and Drop here</span> */}
                </header>
                <button className='Btn Btn--outline csv_select'> Select file</button>
              
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
                    {/* <div className="leftp">
                      <div className="file_title">
                        <img src={fileImage} alt="img" />
                        <h3>{selectedFile.name}</h3>
                      </div>
                      <div className="file_size">
                        <img src={Dot} alt="dot" className="dot1" />
                        {(selectedFile.size / 1024 / 1024).toFixed(2)}MB
                      </div>
                    </div> */}
                    <div className="rightp">
                      {/* <img
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
                      /> */}
                    </div>
                  </div>
                )}
              </div> 
            </form>
            
          </div>
          
        </div>
        <div className="csv_upload">  <button className='Btn Btn--outline csv_select' onClick={() => setSelectedFile(null)}> Delete File</button>
<button className='Btn Btn--outline'>Upload</button></div>                                   
        </div>
    </div>
    </>
  )
}
