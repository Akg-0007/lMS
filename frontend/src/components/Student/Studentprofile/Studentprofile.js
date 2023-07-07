import React from "react";
import { useState } from "react";
import "./Studentprofile.css";
import { useSelector } from "react-redux";
import { fetchService } from "../../../services/userService";
import notificationyes from "../../../assets/notificationyes.svg";
import olivia from "../../../assets/olivia.svg";
import Cookies from "js-cookie";
const Studentprofile = () => {
  const { userId, token, name, email } = useSelector((state) => state.user);
  const [oldPassword, setOldPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [confPassword, setConfPassword] = useState();
  const [errorr, setErrorr] = useState("");
  const [success, setSuccess] = useState("");
  const UserId = Cookies.get('userId');
  console.log(userId);
  const UserName = Cookies.get('name');
  console.log(userId);
  const handleReset = async (e) => {
    setErrorr("");
    setSuccess("");
    if (newPassword !== confPassword) {
      setErrorr("New Password & Confirm Password does not match");
      return;
    }

    const obj = {
      user: { userId, password: oldPassword, newPassword },
      api: `${process.env.REACT_APP_LMS_BACKEND_API}/user/forgotpassword/reset`,
      method: "PATCH",
      token,
    };
    try {
      const json = await fetchService(obj);
      setSuccess("Password Updated Successfully");
      setNewPassword("");
      setOldPassword("");
      setConfPassword("");
    } catch (err) {
      setErrorr(err.message);
      return;
    }
  };

  return (
    <div className="st-profile">
      <div className="st-header">
        <p className="st-profile-heading">Settings</p>
        <img src={notificationyes} alt="notification" />
      </div>

      <div className="row">
        <div className="col-8">
          <div className="st-left res-profile">
            <div>
              <p>Profile Info</p>
            </div>

            <div className="st-data">
              <div className="st-photo">
                <img src={olivia} alt="profile-photo" />
                <div className="st-name">
                  <span className="st-name-data">{UserName}</span>
                  <span className="st-registartion">Reg No. {UserId}</span>
                  <span className="st-section">Section CSE00AA</span>
                </div>
              </div>
            </div>
            <div className="st-academic">
              <p>Academic Information</p>
            </div>

            <div className="student-info">
             <div className="st-details">
             <span className="st-dep">Department</span>
              <span className="st-branch">Computer science and engineering</span>
             </div>
             
             <div className="st-details">
             <span className="st-dep">Stream</span>
              <span className="st-branch">Cyber Security</span>
             </div>

             

             <div className="st-details">
             <span className="st-dep">Batch</span>
              <span className="st-branch">2019-2022</span>
             </div>

             <div className="st-details">
             <span className="st-dep">Reg No</span>
              <span className="st-branch"> 568918  </span>
             </div>

             <div className="st-details">
             <span className="st-dep">HOD Name</span>
              <span className="st-branch">  Mr. Anupam </span>
             </div>

             <div className="st-details">
             <span className="st-dep">HOD Contact No.</span>
              <span className="st-branch"> 90887 76655 </span>
             </div>

            </div>

            <div className="st-academic">
              <p> General Information</p>
            </div>

            <div className="student-info">
             <div className="st-details">
             <span className="st-dep">Mobile No</span>
              <span className="st-branch">   9871648755</span>
             </div>
             
             <div className="st-details">
             <span className="st-dep">Email Id</span>
              <span className="st-branch"> dwivediashish12@gmail.com</span>
             </div>

             

             <div className="st-details">
             <span className="st-dep">Blood Group</span>
              <span className="st-branch">O+</span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Category</span>
              <span className="st-branch"> general  </span>
             </div>

             <div className="st-details">
             <span className="st-dep">Date of Birth </span>
              <span className="st-branch"> 28-11-2000 </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Gender </span>
              <span className="st-branch">  Male </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Permanent Address </span>
              <span className="st-branch">  32,Subhash Nagar, Near City Hospital,
Jalandhar, Jalandhar, Punjab, India </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Corresponding Address </span>
              <span className="st-branch">  32,Subhash Nagar, Near City Hospital,
Jalandhar, Jalandhar, Punjab, India </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Father Name </span>
              <span className="st-branch">  Rajiv dwivedi </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Mother Name </span>
              <span className="st-branch">  Reema dwivedi </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Father’s Mobile No </span>
              <span className="st-branch">  7845954260 </span>
             </div>

             <div className="st-details">
             <span className="st-dep"> Mother’s Mobile No </span>
              <span className="st-branch">  7845954261 </span>
             </div>


            </div>
          </div>
        </div>

        <div className="col-4">
          <div className="st-right">
            <div className="st-right-pwd">
              <p>Change Password</p>
            </div>

            <div className="st-group">
              <input
                type={"password"}
                required
                value={oldPassword}
                onChange={(e) => {
                  setErrorr("");
                  setOldPassword(e.target.value);
                }}
              />
              <label>Old Password</label>
            </div>

            <div className="st-group">
              <input
                type={"password"}
                required
                value={newPassword}
                onChange={(e) => {
                  setErrorr("");
                  setNewPassword(e.target.value);
                }}
              />
              <label>New password</label>
            </div>

            <div className="st-group">
              <input
                type={"password"}
                required
                value={confPassword}
                onChange={(e) => {
                  setErrorr("");
                  setConfPassword(e.target.value);
                }}
              />
              <label>Confirm Password</label>
            </div>

            <div className="st-group btn">
              <button
                className="Btn Btn--primary Btn--large upwd "
                disabled={!oldPassword || !newPassword || !confPassword}
                onClick={handleReset}
              >
                Update Password
              </button>
              {errorr && <div className="errormsg error">{errorr}</div>}
              {success && <div className="errormsg success">{success}</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Studentprofile;
