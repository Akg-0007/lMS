import React,{useState} from 'react'
import './AdminTeacherCSV.css'
import Noti from '../../../assets/NotificationRed.svg'
import Search_bar from '../../../components/Search_bar/Search_bar'
import eye from '../../../assets/blackeye.svg'
import edit from '../../../assets/blackEdit.svg'
import dash from '../../../assets/deleteicon.svg'
import DeletePop from '../../DeletePopUP/DeletePop'
import AdminUpload  from '../../Admin_Department/Admin_Upload/AdminUpload'
import AdminStuUpload from '../../AdminStuUpload/AdminStuUpload'
import { Link, NavLink, useNavigate } from "react-router-dom";

export default function AdminTeacherCSV() {
    const [del,setDel] = useState(false);
    const [up , setUp] = useState(false);
    // const [upload,  setUpload] = useState(true);
    const navigate = useNavigate();
    const data = [
        {
            name : "Anupam",
            reg : 123,
            mail : "Anupam@gmail.com",
            mobile: 908675877
        }
    ]
  return (
<>
{del && <DeletePop setDel={setDel}/>}
{up && <AdminStuUpload setUp = {setUp}/>}
<div className="AdminTeacherCsv">
    <div className="AdminTeacherCsvHEader">
        <span>User<p> / Teacher</p></span>
  <img src={Noti} alt="" />
    </div>
    <div className="adTeach_desc">
        <div className="adTeach_desc_head">
            <span>Teacher Details</span>
            <div className="right_ad_tech">
                <Search_bar/>
                <button className='Btn Btn--outline addTeacher' 
                onClick={() =>
                    {
                        setUp(true);
                    }}
               > + Add Teacher</button>
            </div>
        </div>
        <div className="adTech_table table">
            <table className='table'>
            <thead>
                
                    <th>Teacher Name</th>
                    <th>Registration Number</th>
                    <th>Email Id</th>
                    <th>Mobile No</th>
                <th></th>
            </thead>
            <tbody>
                <tr>
                {data.map((data) =>{
                    return (
                      <>
                        <td>{data.name}</td>
                        <td>{data.reg}</td>
                        <td>{data.mail}</td>
                        <td>{data.mobile}</td>
                        <td className="last_td">
                          <img
                            src={eye}
                            alt=""
                            onClick={() => navigate("/home/Teacherschedule")}
                          />
                          <img
                            src={edit}
                            alt=""
                            onClick={() => navigate("/home/Teachereditprofile")}
                          />
                          <img
                            src={dash}
                            alt=""
                            onClick={() => {
                              setDel(true);
                            }}
                          />
                        </td>
                      </>
                    );
                  
                })
                
                }</tr>
            </tbody>
            </table>
        </div>
    </div>
</div>
</>
  )
}
