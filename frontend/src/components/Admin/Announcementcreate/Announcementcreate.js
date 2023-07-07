import React, { useState } from "react";
import "./Announcementcreate.css";
import Search from "../../Search_bar/Search_bar";
import Search_bar from "../../Search_bar/Search_bar";
import eye from "../../../assets/eve1.svg";
import dustbin from "../../../assets/deleteicon.svg";
import plus from "../../../assets/plus.svg";
import attachement from "../../../assets/attachement.svg";
import { useNavigate } from "react-router-dom";
import DeletePop from "../../../Admin_coomponent/DeletePopUP/DeletePop";
const Announcementcreate = () => {

  const navigate = useNavigate();
  const [del,setDel] = useState(false)

 
  return (
    <>
    {del && <DeletePop setDel={setDel}/>}

     <div className="announcement-create">
      <div className="announcement-create-heading">
        <p className="announcement-heading"> Dashboard / </p>
        <p className="announcement-heading-2"> Announcement </p>
      </div>
      <div className="create-container">
        <div className="announcement-content">
          <p className="exam-heading"> Announcements </p>
          <div className="alignment-content">
            <Search_bar />
            <p className="exam-view">
              <button className="Btn Btn--primary"  onClick={() => navigate("/Admin/Createannouncement")}>
                <img src={plus} alt="plus" /> Add Announcement
              </button>
            </p>
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description </th>
              <th>Category </th>
              <th>Send to </th>
              <th>Attachment </th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td> Final Exams are schedule </td>
              <td>
                {" "}
                The date for final Examination is scheduled. Here is also att...{" "}
              </td>
              <td>Examination</td>
              <td>All Departments</td>
              <td>
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">ExamDateSheet.pdf </a> {" "}
              </td>
              <td>
                <div className="admin-table">
                  <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> National Assessment and Accreditation Council...</td>
              <td>
                Extra Classes for all students because scoring good in f...{" "}
              </td>
              <td>Administrative</td>
              <td>All Departments</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">NAACpolicies.pdf </a>
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> Slogans against the Cor... </td>
              <td>All the Lorem Ipsum generators on the Internet te.. </td>
              <td>Co-Curriculum</td>
              <td> Department of Business</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">SloganCompition.pdf </a>{" "}
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> Final Exams are schedule </td>
              <td>
                {" "}
                The date for final Examination is scheduled. Here is also att...{" "}
              </td>
              <td>Examination</td>
              <td>All Departments</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">ExamDateSheet.pdf </a> 
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> Final Exams are schedule </td>
              <td>
                {" "}
                The date for final Examination is scheduled. Here is also att...{" "}
              </td>
              <td>Examination</td>
              <td>All Departments</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">NAACpolicies.pdf </a> 
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> Final Exams are schedule </td>
              <td>
                {" "}
                The date for final Examination is scheduled. Here is also att...{" "}
              </td>
              <td>Examination</td>
              <td>All Departments</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">ExamDateSheet.pdf </a>
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>

            <tr>
              <td> National Assessment and Accreditation Council...</td>
              <td>
                Extra Classes for all students because scoring good in f...{" "}
              </td>
              <td>Administrative</td>
              <td>All Departments</td>
              <td>
                {" "}
                <img src={attachement} alt="" />
                 <a href="https://drive.google.com/file/d/1MmldumEiEf8EImoJhCnUO5KIUcwaMcXm/view?usp=sharing" target="_blank">NAACpolicies.pdf </a>
              </td>
              <td>
                <div className="admin-table">
                <img src={eye} alt="" onClick={() => navigate("/home/Dashboard")} />
                  <img src={dustbin} alt="" onClick={()=>{setDel(true)}}/>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </>
   
  );
};
export default Announcementcreate;
