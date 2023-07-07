import React, { useState } from "react";
import Notification from "../../assets/notificationyes.svg";
import olivia from "../../assets/olivia.svg";
import "../Profile/Profile.css";
import { useSelector } from "react-redux";
import { fetchService } from "../../services/userService";
const Profile = () => {
  const {userId, token, name, email} = useSelector((state) => state.user)
  const [oldPassword, setOldPassword] = useState()
  const [newPassword, setNewPassword] = useState()
  const [confPassword, setConfPassword] = useState()
  const [errorr, setErrorr] = useState("");
  const [success, setSuccess] = useState("");

  const handleReset = async (e) => {
    setErrorr("")
    setSuccess("")
    if(newPassword !== confPassword) {
      setErrorr("New Password & Confirm Password does not match")
      return
    }

    const obj = {user: {userId, password : oldPassword, newPassword}, api: `${process.env.REACT_APP_LMS_BACKEND_API}/user/forgotpassword/reset`, method: 'PATCH', token }
    try{
      const json = await fetchService(obj)
      setSuccess("Password Updated Successfully")
      setNewPassword("")
      setOldPassword("")
      setConfPassword("")
    } catch (err) {
      setErrorr(err.message)
      return
    }
  }

  return (
    <div className="profile">
      <div className="profile-heading">
        <span className="profile-heading-content">Profile</span>
        {/* <img src={Notification} alt="notification" /> */}
      </div>
      <div className="row profile-card">
        <div className="col-8 profile-info">
          <div className="profile-info-heading">
            <span className="profile-info-content">Profile Info</span>
          </div>
          <div>
            <div className="profile-data">
              <div className="profile-photo">
                <img src={olivia} alt="profile-photo" />
              </div>
              <div className="profile-name">
                <span className="profile-name-data">{name}</span>
                <span className="profile-registartion">{userId}</span>
              </div>
            </div>

            <div className="profile-input">
              
              
            <fieldset className="input-data">
                <legend className="input-data-content">Designation</legend>
                <span className="legend-content">Associate Professor</span>
              </fieldset>
              
              <fieldset className="input-data">
              <legend className="input-data-content">Department</legend>
              <span className="legend-content">Engineering</span>
              </fieldset>
              
              <fieldset className="input-data">
              <legend className="input-data-content">Email</legend>
              <span className="legend-content">olivia@learncentral.com</span>
              </fieldset>
              
              <fieldset className="input-data">
              <legend className="input-data-content">Mobile No.</legend>
              <span className="legend-content">9888800001</span>
              </fieldset>

              <fieldset className="input-data">
              <legend className="input-data-content">DOB</legend>
              <span className="legend-content">07/21/1992</span>
              </fieldset>


          



            </div>
            <div className="profile-skills">
              <span className="pr-skill-heading">Skills</span>
            </div>
            <div className="profile-skills-content">
              <span className="profile-skill-btn">Python</span>
              <span className="profile-skill-btn">Data Structures</span>
              <span className="profile-skill-btn">Algorithms</span>
              <span className="profile-skill-btn">Computer Networks</span>
              <span className="profile-skill-btn">Database Systems</span>
            </div>
            <div className="profile-skills">
            <span className="pr-skill-heading">Bio</span>
            </div>
            <div className="profile-bio">
              <p className="profile-bio-content">I am an Assistant Professor of Computer Science and Engineering with a PhD and experience in teaching, research, and industry. My research interests include computer networks, distributed systems, and network security. I enjoy developing and teaching courses in programming, data structures, algorithms, computer networks, and database systems. I believe in hands-on learning and encourage students to apply concepts to real-world problems. I'm always available to help students achieve their academic goals.</p>
            </div>
          </div>
        </div>
        <div className="col-4 side-right">
        
        <div className="profile-info-heading">
            <span className="profile-info-content"> Change Password</span>
          </div>

        {/* <div className="pwd-update"> */}

        <div className="profile-group">
              <input type={"password"} required value={oldPassword} onChange={(e) => {
                setErrorr("")
                setOldPassword(e.target.value)}}/>
              <label>Old Password</label>
            </div>

            <div className="profile-group">
              <input type={"password"} required value={newPassword} onChange={(e) => {
                setErrorr("")
                setNewPassword(e.target.value)}}/>
              <label>New password</label>
            </div>

            <div className="profile-group">
              <input type={"password"} required value={confPassword} onChange={(e) => {
                setErrorr("")
                setConfPassword(e.target.value)}}/>
              <label>Confirm Password</label>
            </div>      

                <div className="profile-group btn"> 
                <button className="Btn Btn--primary Btn--large upwd " disabled={!oldPassword || !newPassword || !confPassword } onClick={handleReset}>Update Password</button>
                {errorr && <div className="errormsg error">{errorr}</div>}
                {success && <div className="errormsg success">{success}</div>}
                </div>
                
            </div>
        </div>
           
        
        </div>
      // </div>
    
  );
};
export default Profile;
