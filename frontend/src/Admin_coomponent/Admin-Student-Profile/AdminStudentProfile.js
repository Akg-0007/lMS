import React from 'react'
import cross from '../../assets/cross.svg'
import './AdminStudentProfile.css'
import mobile from '../../assets/mobile.svg'
import mail from '../../assets/email.svg'
import loaction from '../../assets/location.svg'
import { useState ,useEffect} from "react";
import { fetchStudentById } from '../../services/Admin'


export default function AdminStudentProfile({setProf,id}) {
    const [student,setStudent]=useState()
    useEffect(() => {
        const getStudentById = async () => {
          try {
            const fetchedStudent = await fetchStudentById(id);
            setStudent(fetchedStudent);
          } catch (error) {
            console.log(error);
          }
        };
    
        getStudentById();
      }, [id]);
      console.log(student)
  return (
    <>
    <div className="assessmenttracker-submit">
        <div className="assessment-containers">
            <div className="AdminStudentProfile">
<div className="AdminStudentProfile_header">
    <span>Student Profile</span>
    <img src={cross} onClick={() =>setProf
    (false)}></img>
</div>
                
  <div className="AdminStudentProfile_desc">
       
   <div className="AdminStudentProfile_desc_upper">
   <div className="AdminStudentProfile_img">
   <img src="https://images.hdqwalls.com/wallpapers/bthumb/the-spiderman-xr.jpg"
    width={"132px"} height={"132px"}/>
   </div>

   <div className="Ad_st_img_desc">
         <span className='Ad_st_img_name'> {student && student.firstName}</span>
         <span className='Ad_st_img_deg'>{student && student.graduation}</span>
         <span className='Ad_st_img_deg roll_no'>Roll No.  290123</span>

   </div>
   
   </div>
<div className="Ad_st_pr_hr"><hr /></div>
<div className="Ad_st_personal number">
    <div className="Ad_st_personal_left">
<img src={mobile} alt="" />
    <span>{student && student.mobileNo}</span>
</div>
<div className="Ad_st_personal_left">
<img src={mail} alt="" />
    <span>{student && student.emailId}</span>
</div>
</div>
<div className="Ad_st_pr_hr"><hr /></div>
<div className="Ad_st_personal">
    <div className="Ad_st_personal_left">
<img src={loaction} alt="" />
    <span>{student && student.address1}</span>
</div>
<div className="Ad_st_personal_left">
<img src={loaction} alt="" />
    <span>{student && student.address2}</span>
</div>
</div>
  </div>
  <div className="Ad_st_pro_acad">
   
    <span className='Ad_st_pro_heading'>Academic Information</span>
<div className="Ad_st_pro_info">
        <table className='Ad_st_pro_table'>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>Department</td>
                    <td className='Ad_st_pr_primary'>Stream</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                    {student && student.programme}
                    </td>
                    <td className='Ad_st_pr_secondary'> 
                        CSE
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>Batch</td>
                    <td className='Ad_st_pr_primary'>Registration</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                    {student && student.batch}
                    </td>
                    <td className='Ad_st_pr_secondary'>
                        11924586
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>Mentor Name</td>
                    <td className='Ad_st_pr_primary'>Mentor No</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                        ROhit Mehra
                    </td>
                    <td className='Ad_st_pr_secondary'>
                        4564454554
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>HOD Name</td>
                    <td className='Ad_st_pr_primary'>HOD No</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                        Akash Walia
                    </td>
                    <td className='Ad_st_pr_secondary'>
                        5165498564
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
  </div>
  <div className="Ad_st_pro_acad">
   
    <span className='Ad_st_pro_heading'>General Information</span>
<div className="Ad_st_pro_info">
        <table className='Ad_st_pro_table'>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>Date of Birth</td>
                    <td className='Ad_st_pr_primary'>Gender</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                    {/* {student && student.dob} */}
                    {student && student.dob && !isNaN(Date.parse(student.dob))
                                ? new Date(student.dob).toLocaleDateString()
                                : "Invalid date"}
                    </td>
                    <td className='Ad_st_pr_secondary'> 
                    {student && student.gender}
                    </td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <td className='Ad_st_pr_primary'>Father's Name</td>
                    <td className='Ad_st_pr_primary'>Father's Mobile No</td>
                </tr>
                
            </thead>
            <tbody>
                <tr>
                    <td className='Ad_st_pr_secondary'>
                    {student && student.fathersName}
                    </td>
                    <td className='Ad_st_pr_secondary'>
                    {student && student.fathersMobNo}
                    </td>
                </tr>
            </tbody>
            
        
        </table>
        </div>
  </div>
</div>
        </div>
    </div>
    </>
  )
}
