import React,{useState} from 'react'
import './Loader.css'
import cross from '../../assets/cross.svg'


export default function Loader() {
    const [selectedFile, setSelectedFile] = useState(null);

    var progress = 0;
    var interval = setInterval(function () {
      progress++;
      if (progress > 100) {
        clearInterval(interval);
      } else {
        document.querySelector(".progress-bar-foreground").style.strokeDasharray =
          progress * 2.512 + ", 251.2";
        document.querySelector(".progress-bar-label").innerHTML = progress + "%";
      }
    }, 20);
    


  return (
    <>
    <div className="assessmenttracker-submit">
        <div className="assessment-container  adupload_file">
        <div className="adup_header">
    <span>Upload CSV</span>
    <img src={cross} alt="" />
</div>
<div className="upload_part">
<div className="uploading_Box">

<div class="progress-bar">
  <svg>
    <circle class="progress-bar-background" cx="50%" cy="50%" r="40%" />
    <circle class="progress-bar-foreground" cx="50%" cy="50%" r="40%" />
  </svg>
  <span class="progress-bar-label">0%</span>
</div>


</div>
<div className="file_upload">
    <button className='Btn Btn--outline'>Cancel</button>
    <button className='Btn Btn--outline  fileUpload'> Upload </button>
</div>
</div>
        </div>
    </div>
    </>
  )
}
