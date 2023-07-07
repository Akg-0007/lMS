import React, { useState } from 'react'
import './AdminCSV.css'
import NotificationRed from '../../../assets/NotificationRed.svg'
import Search_bar from '../../../components/Search_bar/Search_bar'
import plus1 from '../../../assets/plus1.svg' 
import Dropdown from '../../../components/dropdown/Dropdown'
import mail from '../../../assets/blackemail.svg'
import phone from '../../../assets/phone.svg'
import eye from '../../../assets/blackeye.svg'
import edit from '../../../assets/edit.svg'
import dash from '../../../assets/darkDash.svg'
import AdminDropdown from '../Admin_Dropdown/AdminDropdown'
import { useNavigate } from "react-router-dom";
import DeletePop from '../../DeletePopUP/DeletePop'



export default function AdminCSV() {
    const upload = ["Import CSV", "Download  CSV"]
    const [type,setType] = useState("");
    const [open, setopen] = useState("");
    const navigate = useNavigate();
    const [del, setDel] = useState(false);
    const handleopen = (e) => {
        setopen(e);     
      };

      const data =[
        {
         name:"Department of computer Science &Engineering",
         head:"Ronik Mishra",
         email:"Ronik.mishra@gmail.com",
         contact : 6546493614,
        },
        {
            name:"Department of Electrical Engineering",
            head:"Rohit Mishra",
            email:"Rohit.mishra@gmail.com",
            contact : 654984689,
           }
      ]
  return (
    <>
    {del &&<DeletePop setDel = {setDel}/>}
    <div className="AdminCSv">
        <div className="AdscvHeader">
            <span>Department</span>
<img src={NotificationRed} alt="" />
        </div>
        <div className="csvUpper">
        <div className="AdminCSvDesc">
            <div className="AdminCSvDescHead">
                <div className="csvLeft">
<Search_bar/>
                </div>
                <div className="csvRight">
                    <button className='Btn Btn--outline addButton' 
                    onClick={()=>{
                        navigate("/home/AddDepartMent")
                    }}
                      > + Add Department</button>
                    <AdminDropdown name={"CSV"} options = {upload}   width={"174px"}  setState={setType}
 />
                </div>
            </div>
            <div className="depart_Table">
                <table className='table Addepart_Table'>
   <thead className='thead'>
    <tr>
        <th>
            Department
        </th>
        <th>
            Head Of Department
        </th>
        <th>
            Contact
        </th>
        <th>
            Action
        </th>
    </tr>
   </thead>

   <tbody className='tbody Adcsv_body'>
{
    data.map((data) =>{
        return(
             <tr>
                <td>{data.name}</td>
                <td>{data.head}</td>
                <td className='csvcontact'>
           <div className="csvmail">  <img src={mail}/>{data.email}</div> 
            <div className="csvphone"> <img src={phone}/> {data.contact}</div>
                </td>

                <td>
                    <div className="csvAction">
                    <img src={eye} onClick={()=>{
                        navigate("/home/DepartmentView")
                    
                    }}/>
                    <img src={edit} />
                    <img src={dash} onClick={()=>{setDel(true)}}/>
                    </div>
                </td>
             </tr>
             )

    })
}
   </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}
