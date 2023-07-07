import React,{useState,useEffect} from 'react'
import uploadImage from "../../assets/upload1.png";
import fileImage from "../../assets/file.png";
import dustImage from "../../assets/dustbin.svg";
import Dot from "../../assets/Ellipse 1.svg";
import EyeOutline from "../../assets/EyeOutline.svg";
import { useNavigate } from "react-router-dom";
import CloseModal from "../../assets/CloseModal.svg";
import Popup from '../../components/toaster/Popup';
import Uploadarrow from "../../assets/Uploadarrow.svg";
import './StudentUpload.css'
import { updateAssignmentFile } from '../../services/Assignment';

export default function StudentUpload({ setUpload ,id}) {

  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState(null);
  const [url12,seturl]=useState("")
 
  const [modal, setmodal] = useState(false);
  const navigate = useNavigate();


  const addFileToList = (file) => {
    const fileAddedContainer = document.querySelector(".file_added");
    let fileAddedList = fileAddedContainer?.querySelector(".file_list");

    if (!fileAddedList) {
      fileAddedList = document.createElement("ul");
      fileAddedList.classList.add("file_list");
      fileAddedContainer.appendChild(fileAddedList);
    }

    setFileUrl(URL.createObjectURL(file)); 
    setSelectedFile(file); 
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
  // const update=async ()=>{
  //   try {
  //     const res = await updateAssignmentFile(id, url12);
  //     console.log(id, "id", url12, "url12");
  //     console.log(res, "response");
  //   } catch (error) {
  //     console.error(error);
  //   }

  // }

  useEffect(() => {
    async function update() {
      try {
        const res = await updateAssignmentFile(id, url12,"true");
        console.log(id, "id", url12, "url12");
        console.log(res, "response");
      } catch (error) {
        console.error(error);
      }
    }

    if (url12 !== "") {
      update();
    }
  }, [url12, id]);

  const handlePreview = (e) => {
    e.preventDefault();

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
    e.preventDefault();

    const file = e.target.files[0];
    setSelectedFile(file);
    
    addFileToList(file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    
    
    // send a POST request to Cloudinary's Upload API
    fetch("https://api.cloudinary.com/v1_1/dzvxsgooe/auto/upload", {
      method: "POST",
      body: formData
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.secure_url);
        seturl(data.secure_url);
        // update();
        console.log("first")
        addFileToList(data.public_id);
       
      })
      .catch(error => console.error(error));
    
  };

  const fileName = selectedFile ? selectedFile.name : "No file selected";
  const [toast, settoast] = useState(false)

  return (
    
    <>
    <div className="feedback-submit">
      <div className="feedback-container_all">
      <div className="course_upload">
        <div className="upload_head">
          <h3>Upload File</h3>
          <img src={CloseModal} onClick={() =>setUpload(false)} className="pointer" />
        </div>
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
                <button onClick={(e)=>e.preventDefault()}>Browse File</button>
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
        <button className="cancel pointer" onClick={()=> {setUpload(false)}}>
          Cancel
        </button>
        <div style={{ display: "inline-block" }}>
          <div className="UpLoadMaterial pointer" >
            <div onClick={() => 
            {
              settoast(true);
            
            }}>Upload</div>
            <div>
              <img src={Uploadarrow} />
            </div>
          </div>
        </div>
    
      </div>
      </div>

    </div>
    {toast && <Popup state={"success"} message={"File Uploaded !"} />}

    </>
  )
}
