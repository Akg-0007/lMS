import React from "react";
import { useState } from "react";
import "./Teachereditprofile.css";
import olivia from "../../../assets/olivia.svg";
import write from "../../../assets/write.svg";
import Dropdown from "../../dropdown/Dropdown";
const Teachereditprofile = () => {
  
  const [imageSrc, setImageSrc] = useState(olivia);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImageSrc(reader.result);
      console.log(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const options = ["K19EG", "K19EH", "K19EI"];
  const [open, setopen] = useState("");
  const handleopen = (e) => {
    setopen(e);
  };

  return (
    <div>
      <div className="editprofile-header">
        <p className="edit-heading">
          Teacher<p className="edit-heading-2"> / Edit Teacher Profile </p>
        </p>
      </div>
      <div className="teacher-edit-container">
        <div className="teacher-edit-heading">
          <p>Edit Profile</p>
        </div>
        <div className="row">
          <div className="col-8">
            <div className="fields-section">
              <div className="col-section-1">
                <div className="edit-group1">
                  <input type={"text"} required />
                  <label> Name </label>
                </div>

                <div className="edit-group1">
                  <input type={"text"} required />
                  <label> Reg No. </label>
                </div>
              </div>

              <div className="col-section-2">
                {" "}
                <div className="edit-group1">
                  <input type={"text"} required />
                  <label> Email Id </label>
                </div>
                <div className="edit-group1">
                  <input type={"text"} required />
                  <label> Mobile No </label>
                </div>
              </div>
            </div>

            <div className="col-section-1 mar">
              <div className="edit-group1">
                <input type={"text"} required />
                <label>Bio </label>
              </div>
              <div className="work-experience">
                <p>Work Experience</p>
                <span>
                  2005-2008 - Ut tempora iusto blandit official. <br></br>
                  2008-2012 - Quam ipsum at provident suscipit vero omnis
                  cupiditate aspernatur. <br></br>
                  2012-2017 - Fugiat blanditiis delectus nostrum for aliquam.
                </span>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="change-container">
              <div className="change-profile">
                <img
                  src={imageSrc}
                  alt="profile"
                  style={{
                    borderRadius: "50%",
                    width: "130px",
                    height: "130px",
                  }}
                />
              </div>
              <div className="change-profile-btn">
                <p
                  className="change-text"
                  onClick={() => document.getElementById("image-input").click()}
                >
                  Change
                </p>
                <img src={write} alt="write" />
                <input
                  id="image-input"
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />
              </div>
            </div>
            <div className="profile-batch">
              <Dropdown
                name={"Section"}
                options={options}
                onSelect={handleopen}
                width={"313px"}
              />
              <div className="profile-dropdown">
              <div className="profile-skills">
              <span className="pr-skill-heading">Skills</span>
            </div>
            <div className="profile-skills-1">
              <span className="profile-skill-btn">Python</span>
              <span className="profile-skill-btn">Data Structures</span>
              <span className="profile-skill-btn">Algorithms</span>
              <span className="profile-skill-btn">Computer Networks</span>
              <span className="profile-skill-btn">Database Systems</span>
            </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachereditprofile;
