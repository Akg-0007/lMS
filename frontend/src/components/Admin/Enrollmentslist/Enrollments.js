import React from "react";
import "./Enrollments.css";

import eye from "../../../assets/eve1.svg";
import dustbin from "../../../assets/deleteicon.svg";
import write from "../../../assets/write.svg";
import { useNavigate } from "react-router-dom";
const Enrollments = () => {
  const navigate = useNavigate()
  return (
    <div className="enrollments-list">
      <div className="main-dash-heading">
        <span className="dash_heading" onClick={() => navigate("/home/Dashboard")}> Dashboard </span>
      </div>
      <div className="enrollments-content">
        <div className="exam-container">
          <p className="exam-heading"> User Detail</p>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Registration No. </th>
              <th>Job Role</th>
              <th>Email Id</th>
              <th>Mobile No.</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pranshu </td>
              <td>11989745 </td>
              <td>student </td>
              <td>yadavpranshu@gmail.com </td>
              <td>9874545578 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt=""   onClick={() => navigate("/home/Editprofile/")}/>
                  <img src={dustbin} alt="" />
                  <img src={write} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Aryan Sharma </td>
              <td>24808745 </td>
              <td>teacher </td>
              <td>sharmaaryan@gmail.com </td>
              <td>8874595422 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt=""  onClick={() => navigate("/home/Teacherschedule")} />
                  <img src={dustbin} alt="" />
                  <img src={write} alt=""   onClick={() => navigate("/home/Teachereditprofile")} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Pranshu </td>
              <td>11989745 </td>
              <td>student </td>
              <td>yadavpranshu@gmail.com </td>
              <td>9874545578 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt="" />
                  <img src={dustbin} alt="" /> 
                  <img src={write} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Aryan Sharma </td>
              <td>24808745 </td>
              <td>teacher </td>
              <td>sharmaaryan@gmail.com </td>
              <td>8874595422 </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt=""  onClick={() => navigate("/home/Teacherschedule")} />
                  <img src={dustbin} alt="" />
                  <img src={write} alt=""   onClick={() => navigate("/home/Teachereditprofile")} />
                </div>
              </td>
            </tr>
            <tr>
              <td>Pranshu </td>
              <td>11989745 </td>
              <td>student </td>
              <td>yadavpranshu@gmail.com </td>
              <td>9874545578 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt="" />
                  <img src={dustbin} alt="" /> <img src={write} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Pranshu </td>
              <td>11989745 </td>
              <td>student </td>
              <td>yadavpranshu@gmail.com </td>
              <td>9874545578 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt="" />
                  <img src={dustbin} alt="" /> <img src={write} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Pranshu </td>
              <td>11989745 </td>
              <td>student </td>
              <td>yadavpranshu@gmail.com </td>
              <td>9874545578 </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt="" />
                  <img src={dustbin} alt="" /> <img src={write} alt="" />
                </div>
              </td>
            </tr>
            <tr>
              <td>Aryan Sharma </td>
              <td>24808745 </td>
              <td>teacher </td>
              <td>sharmaaryan@gmail.com </td>
              <td>8874595422 </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt=""  onClick={() => navigate("/home/Teacherschedule")} />
                  <img src={dustbin} alt="" />
                  <img src={write} alt=""   onClick={() => navigate("/home/Teachereditprofile")} />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Enrollments;
