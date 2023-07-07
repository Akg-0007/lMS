// import React, { useEffect, useState } from "react";
// import "./Ad_Stu_profile.css";
// import email from "../../assets/emailbox.svg";
// import notification from "../../assets/notificationno.svg";
// import Search_bar from "../../components/Search_bar/Search_bar";
// import Cookies from "js-cookie";
// import { Navigate, useNavigate } from "react-router-dom";
// import blackeye from '../../assets/blackeye.svg'
// import dust from '../../assets/deleteicon.svg'
// import edit from '../../assets/edit.svg'
// import './Info.json'
// import AdminStuUpload from "../AdminStuUpload/AdminStuUpload";
// import AdminStudentProfile from "../Admin-Student-Profile/AdminStudentProfile";
// import DeletePop from "../DeletePopUP/DeletePop";
// function AdStuProfile() {

//    const [search,setSearch] = useState("");
//    const [prof, setProf] = useState(false);
//    const [upload,setUpload] = useState(false);
//    const [del ,setDel] = useState(false);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   const handleSearch = (event) => {
//     setSearch(event.target.value);
//   };
// const data1 = [
//   {
//    name : "john",
//    reg : 112312,
//    roll : 1,
//    mobile : 986757868,
//    mail: "john@gamil.com"
//   }
// ]

// // console.log(data,"data")

//   const getData = () => {
//     fetch('Info.json', {
//       headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//       }
//     })
//     .then((response) => {
//       return response.json();
//     })
//     .then((jsonData) => {
//       setData(jsonData.data);
//       console.log(jsonData.data)
//     })
//     .catch((error) => {
//       console.error('Error fetching data: ', error);
//     });
//   };
  
//   useEffect(() => {
//     getData();
//   }, []);
  
//   const convertToString = (item) => {
//     if (typeof item === 'string') {
//       return item;
//     } else if (Array.isArray(item)) {
//       return item.map(convertToString).join(' ');
//     } else if (typeof item === 'object' && item !== null) {
//       return Object.values(item).map(convertToString).join(' ');
//     } else {
//       return String(item);
//     }
//   };
//   const filteredData = data  && data.filter((item) =>{
//     const itemString = convertToString(item);
//   const itemLowerCase = itemString.toLowerCase();
//   const searchLowerCase = search.toLowerCase();
//   const includes = itemLowerCase.includes(searchLowerCase);
  
//   return includes;
// });
//   return (
//     <>

// {prof && <AdStuProfile setProf={setProf}/>}
// {upload && <AdminStuUpload setUpload={setUpload}/>}
// {del && <DeletePop setDel={setDel}/>}



//       <div className="Ad_Stu_profile">
//         <div className="Ad_stu_profile_header">
//           <div className="Ad_stu_profile_header_left">
//             <span>User </span>
//             <p>/Student</p>
//           </div>

//           <div className="Ad_stu_profile_header_right">
//             {/* <img src={email} alt="Email" /> */} 
//             <img src={notification} alt="Notification" />
//           </div>
//         </div>
//         <div className="row Ad_stu_profile_row">
//           <div className="col-12 Ad_stu_profile_col">
//             <div className="profile_details">
//               <div className="Ad_stu_profile_table_area">
//                 <div className="Ad_stu_profile_search_header">
//                   <span>Student Detail</span>
//                 </div>
//                 <div className="Ad_stu_profile_searchbar">
//                   <Search_bar onChange={()=>{handleSearch()}} />
//                   <button className="Btn Btn--outline add_student"
//                   onClick={() => setUpload(true)}
//                   >
//                     {/* <img  src={plus_black}/>  */}+ Add student
//                   </button>
//                 </div>
//               </div>
//               <div className="ad_stu_profile_table">
//                 <table className="table ad_stu_profile">
//                   <thead>
//                     <tr>
//                       <th>Student Name</th>
//                       <th>Registration No.</th>
//                       <th>Roll No.</th>
//                       <th>Email Id</th>
//                       <th>Mobile No</th>
//                       <th></th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                   {data1 && data1.map((item) => {
                    
//   return (
//     <tr className="details_table" key={item.id}>
//     <td>{item.name}</td>
//     <td>{item.reg}</td>
//     <td>{item.roll}</td>
//     <td>{item.mail}</td>
//     <td>{item.mobile}</td>
//       <td className='stu_assessment_tbody_action'>
//       <img src={blackeye} alt="Eyes"
//       onClick={()=>{
//        navigate('/Admin/grades')
//       }}
//        /> 
//         <img src={edit} alt="Uploads"   onClick={()=>{
//        navigate('/home/Editprofile')
//       }} /> 
      
//         <img src={dust} alt="Comments" onClick={() => setDel(true)}/>
//       </td>
//     </tr>
//   );
// })}
      

//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default AdStuProfile;
import React, { useEffect, useState } from "react";
import "./Ad_Stu_profile.css";
import email from "../../assets/emailbox.svg";
import notification from "../../assets/notificationno.svg";
import Search_bar from "../../components/Search_bar/Search_bar";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";
import blackeye from '../../assets/blackeye.svg'
import dust from '../../assets/deleteicon.svg'
import edit from '../../assets/edit.svg'
import './Info.json'
import AdminStuUpload from "../AdminStuUpload/AdminStuUpload";
import AdminStudentProfile from "../Admin-Student-Profile/AdminStudentProfile";
import DeletePop from "../DeletePopUP/DeletePop";
import { fetchStudents } from "../../services/Admin";
// import { fetchStudents } from "../../services/AdminAddStudent";
function AdStuProfile() {

   const [search,setSearch] = useState("");
  //  const[studentid,setstudentid]=useState("");
   const [prof, setProf] = useState(false);
   const [upload,setUpload] = useState(false);
   const [del ,setDel] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [id,setid]=useState();

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };


// console.log(data,"data")
const fetchstu=async()=>{
  const studetails=await fetchStudents();
  setData(studetails);
  console.log(data)
}
useEffect(() => {
fetchstu();

}, []);

 
  const convertToString = (item) => {
    if (typeof item === 'string') {
      return item;
    } else if (Array.isArray(item)) {
      return item.map(convertToString).join(' ');
    } else if (typeof item === 'object' && item !== null) {
      return Object.values(item).map(convertToString).join(' ');
    } else {
      return String(item);
    }
  };
  const filteredData = data.length>0  && data.filter((item) =>{
    const itemString = convertToString(item);
  const itemLowerCase = itemString.toLowerCase();
  const searchLowerCase = search.toLowerCase();
  const includes = itemLowerCase.includes(searchLowerCase);
  
  return includes;
});
  return (
    <>

{prof && <AdStuProfile setProf={setProf}/>}
{upload && <AdminStuUpload setUpload={setUpload}/>}
{del && <DeletePop setDel={setDel} id={id} fetchstu={fetchstu} />}



      <div className="Ad_Stu_profile">
        <div className="Ad_stu_profile_header">
          <div className="Ad_stu_profile_header_left">
            <span>User </span>
            <p>/Student</p>
          </div>

          <div className="Ad_stu_profile_header_right">
            {/* <img src={email} alt="Email" /> */} 
            <img src={notification} alt="Notification" />
          </div>
        </div>
        <div className="row Ad_stu_profile_row">
          <div className="col-12 Ad_stu_profile_col">
            <div className="profile_details">
              <div className="Ad_stu_profile_table_area">
                <div className="Ad_stu_profile_search_header">
                  <span>Student Detail</span>
                </div>
                <div className="Ad_stu_profile_searchbar">
                  <Search_bar onChange={()=>{handleSearch()}} />
                  <button className="Btn Btn--outline add_student"
                  onClick={() => setUpload(true)}
                  >
                    {/* <img  src={plus_black}/>  */}+ Add student
                  </button>
                </div>
              </div>
              <div className="ad_stu_profile_table">
                <table className="table ad_stu_profile">
                  <thead>
                    <tr>
                      <th>Student Name</th>
                      <th>Registration No.</th>
                      <th>Roll No.</th>
                      <th>Email Id</th>
                      <th>Mobile No</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                  {filteredData && filteredData.map((item) => {
  return (
    <tr className="details_table" key={item._id} >
      
      <td>{item.firstName}</td>
      <td>{item.zip}</td>
      <td>{item.zip}</td>
      <td>{item.emailId}</td>
      <td>{item.mobileNo}</td>
      <td className='stu_assessment_tbody_action'>
      <img src={blackeye} alt="Eyes"
       onClick={()=>{
               navigate(`/Admin/grades/${item._id}`)
              }}
       /> 
        <img src={edit} alt="Uploads"    onClick={()=>{
       navigate(`/home/Editprofile/${item._id}`)
      }} /> 
      
        <img src={dust} alt="Comments" onClick={() => {setDel(true); setid(item._id)}}/>
      </td>
    </tr>
  );
})}
      

                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdStuProfile;
