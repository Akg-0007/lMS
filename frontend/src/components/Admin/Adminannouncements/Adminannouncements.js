import React , { useState }from "react";
import "./Adminannouncements.css";
import eye from "../../../assets/eve1.svg";
import dustbin from "../../../assets/dustbin.svg";
import { useNavigate } from "react-router-dom";
import DeletePop from "../../../Admin_coomponent/DeletePopUP/DeletePop"
const  Adminannouncements = () => {
  const navigate = useNavigate();
  const [del, setDel] = useState(false);
  return (
    <>
      {del &&<DeletePop setDel = {setDel}/>}
      <div className="admin-announcements">
      <div className="exam-container">
        <p className="exam-heading"> Announcements</p>
        <p className="exam-view" onClick={() => navigate("/home/Announcementcreate")}>
          View All
        </p>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Published On</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Extra classes for the students are started.</td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate ")}
                />

                <img src={dustbin} alt=""  onClick={()=>{setDel(true)}}/>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              National Assessment and Accreditation Council (NAAC) - Student
              Satisfaction Survey
            </td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate ")}
                />

                <img src={dustbin} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Extra classes for the students are started.</td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate ")}
                />

                <img src={dustbin} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              National Assessment and Accreditation Council (NAAC) - Student
              Satisfaction Survey
            </td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate ")}
                />

                <img src={dustbin} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              National Assessment and Accreditation Council (NAAC) - Student
              Satisfaction Survey
            </td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate ")}
                />
                <img src={dustbin} alt="" />
              </div>
            </td>
          </tr>
          <tr>
            <td>Extra classes for the students are started.</td>
            <td>January 25,2023 10:47 AM</td>
            <td>
              <div className="admin-table">
                <img
                  src={eye}
                  alt=""
                  onClick={() => navigate("/home/Announcementcreate")}
                />

                <img src={dustbin} alt="" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
   
  );
};
export default Adminannouncements;
