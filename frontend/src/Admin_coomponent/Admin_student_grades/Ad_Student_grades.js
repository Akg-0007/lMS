import React,{useState} from "react";
import './Ad_student_grades.css'
import filter from '../../assets/filter.svg'
import eye from '../../assets/blackeye.svg'
import email from "../../assets/emailbox.svg"
import notification from "../../assets/notificationno.svg"
import Search_bar from "../../components/Search_bar/Search_bar";
import AdminStuUpload from "../AdminStuUpload/AdminStuUpload";
import AdStuProfile from "../Ad_stu_profile/AdStuProfile";
import AdminStudentProfile from "../Admin-Student-Profile/AdminStudentProfile";
import AdSubjectMrks from "../AD_Subject_marks/AdSubjectMrks";
import { useParams } from "react-router-dom";
import { useEffect} from "react";
import { fetchStudentById } from '../../services/Admin'


export default function Ad_student_grades (){
    const [marks, setMarks] = useState(false);
    const {id}=useParams();
   
   const [prof, setProf] = useState(false);

    const data =[
        {
            code: "INT 404",
            Cname :"Computer Science",
            Cteacher:"Mr. Donald",
            Attendance:"94%",
            Grades:"CGPA 9.1"

        },
        {
            code: "CSE 404",
            Cname :"Computer Science",
            Cteacher:"Mr. Donald",
            Attendance:"94%",
            Grades:"CGPA 9.1"

        }
    ]


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

    return(
        <> 
{prof && <AdminStudentProfile setProf={setProf} id={id}/>}
{marks && <AdSubjectMrks setMarks={setMarks}/>}


       <div className="Ad_student_grades">
       <div className="Ad_student_grades_header">
       <div className='Ad_student_grades_header_left'>
      <span>Student</span>
    </div>      

  <div className='Ad_student_grades_header_right'>
    <img src={email}></img>
    <img src={notification}></img>

  </div>
       </div>
<div className="row Ad_student_grades_row">
       <div className="col-12 Ad_student_grades_col">
   <div className="col-9 Ad_student_grades_col_8">
    
    <div className="Ad_student_grades_upper">
        <span>Courses</span>

        <div className="Ad_student_grades_search">
            <Search_bar/>
            <button className="Btn Btn--outline filter">Filters <img src={filter}/></button>
        </div> 
    </div>
    <div className="Ad_student_grades_table_area">
        <table className="table  ">
            <thead className="Ad_student_grades_thead student_grades_detail">
                <tr >
                    <th>Course Code</th>
                    <th>Course Name</th>
                    <th>Course Teacher</th>
                    <th>Attendance</th>
                    <th>Grades</th>

                </tr>
            </thead>
            <tbody className="Ad_student_grades_tbody">
                {
                    data.map((e) =>{
                        return(
                        <tr>
                            <td>{e.code}</td>
                            <td>{e.Cname}</td>
                            <td>{e.Cteacher}</td>
                            <td>{e.Attendance}</td>
                            <td className="Ad_student_cgpa"><img src={eye} alt=""  onClick={()=>setMarks(true)}/></td>
                        </tr>
                        )
                    })
                }
            </tbody>

        </table>
        <div className="AdStudentGrades_bottom">
           <div className="bottom_left">
            <span>Overall Attendance: </span> 90%
           </div>
           <div className="bottom_left right">
             
            <span>Overall CGPA: </span> 9.0
           </div>
        </div>
    </div>

   </div>
   <div className="col-3 Ad_student_grades_col_4">
       <div className="Ad_student_grades_profile">
      <img src="https://images.hdqwalls.com/wallpapers/bthumb/the-spiderman-xr.jpg" width={"132px"} height={"132px"}/>
         <p>{student && student.firstName}</p> 
         <span>{student && student.graduation}  </span>
         <span className="student_roll">Roll No  <p>28171</p></span>
       </div>
       <div className="Ad_student_grades_profile_desc">
        <div className="Ad_student_grades_department department">
            <span>Department</span>
            <p>{student && student.programme}</p>
        </div>
       
       </div>
   
   <a href="#" className="Ad_student_grades_profile_View" onClick={() => setProf(true)}>View More...</a>

   </div>

       </div>
       </div>
       </div>
        </>
    )
}