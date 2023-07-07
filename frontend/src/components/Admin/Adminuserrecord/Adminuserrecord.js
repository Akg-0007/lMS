import React from "react";

import "./Adminuserrecord.css";
import adminuser from "../../../assets/adminuser.svg";
import teacher from "../../../assets/teacher.svg";
import { useNavigate } from "react-router-dom";

const Adminuserrecord = () => {




  const navigate = useNavigate()
  return (
    <div className="admin-users">
     <div className="user-container">
      <div className="user-content">
        <div className="user-content-svg">
          <img src={adminuser} />
        </div>
        <div className="admin-user-data">
          <p>Total users</p>
          <p class="total-students">1315</p>
        </div>
      </div>
      <div className="view-all-user">
        <p  onClick={() => navigate("/home/Enrollments")}>View All</p>
      </div>
    </div>

<div className="user-container">
<div className="user-content2">
  <div className="user-content-svg">
    <img src={teacher} />
  </div>
  <div className="admin-user-data">
    <p> Total Teachers</p>
    <p class="total-students">110</p>
  </div>
</div>
<div className="view-all-teacher">
<p  onClick={() => navigate("/home/Enrollments")}>View All</p>
</div>
</div>

{/* <div className="user-container">
<div className="user-content3">
  <div className="user-content-svg">
    <img src={adminuser} />
  </div>
  <div className="admin-user-data">
    <p> Total Students</p>
    <p>100100</p>
  </div>
</div>
<div className="view-all-students">
<p  onClick={() => navigate("/home/Enrollments")}>View All</p>
</div>
</div> */}

<div className="user-container">
  <div className="user-content3">
    <div className="user-content-svg">
      <img src={adminuser} />
    </div>
    <div className="admin-user-data">
      <p class="total-students-label">Total Students</p>
      <p class="total-students">1200</p>
    </div>
  </div>
  <div className="view-all-students">
    <p onClick={() => navigate("/home/Enrollments")}>View All</p>
  </div>
</div>


<div className="user-container">
<div className="user-content4">
  <div className="user-content-svg">
    <img src={teacher} />
  </div>
  <div className="admin-user-data">
    <p> Total Department</p>
    <p class="total-students">5</p>
  </div>
</div>
<div className="view-all-departments">
<p  onClick={() => navigate("/home/Enrollments")}>View All</p>
</div>
</div>
    </div>
   
  );
};
export default Adminuserrecord;
