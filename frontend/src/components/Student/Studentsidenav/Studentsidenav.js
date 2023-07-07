import React, { useState } from 'react';
import Hamburger from 'hamburger-react'
import "./Studentsidenav.css";
import logo from "../../../assets/logo.svg";
import profile from "../../../assets/profile.svg";
import dash from "../../../assets/dash.svg";
import course from "../../../assets/course.svg";
import assignment from "../../../assets/assignment.svg";
import grades from "../../../assets/grades.svg";
import examination from "../../../assets/Quizees2.svg";
// import support from "../../../assets/support.svg";
import settings from "../../../assets/Cog.svg";
import exit from "../../../assets/logout.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";
export default function Studentsidenav() {
  // const { name , userId  } = useSelector((state) => state.user)
  const {logoutuser} = useLogout()
  const userId = Cookies.get('userId');
  console.log(userId);
  const name = Cookies.get('name');
  console.log(name);
  const navigate = useNavigate()
  

  const [isOpen, setOpen] = useState(true)
  const togglediv=() =>{
    setOpen(!isOpen);
  }


  return (
    <>
      <div className="st-sidenav-container">
<div className='hamburger'>
      <Hamburger toggled={isOpen} toggle={setOpen} onClick={()=>{
        togglediv();
      }}/></div>
 {isOpen &&
        <div className="sidenav">
         
          <div className="side_upper">
          <div className="side_logo" onClick={() => navigate("/home/dashboard")}>
              <img src={logo} alt="" />
            </div>
            <div className="side_option_1">
              <ul >
                <NavLink to="/home/dashboard">
                <li className="res-li">
                    <img src={dash} alt=""  />
                    <span className="res-dash">Dashboard</span>
                  </li>
                </NavLink>

                <NavLink to="/home/courses" >
                  
                <li className="res-li">
                    <img src={course} alt="" />
                    <span className="res-dash"> Courses</span>
                  </li>
                </NavLink>

                <NavLink to="/home/assignment">
                  
                  <li className="res-li">
                    <img src={assignment} alt="" />
                    <span className="res-dash">Assessment</span>
                  </li>
                </NavLink>

               <NavLink to="/home/grades">
                  
               <li className="res-li">
                    <img src={grades} alt="" />
                    <span className="res-dash"> Grades</span>
                  </li>
                </NavLink> 

               
              </ul>
            </div>
          </div>
       
          <div className="side_option-1 " id="setting">
            <ul >
              <NavLink to="/home/profile">
                {" "}
                <li className="res-li">
                  <img src={settings} alt="" />
                  <span className="res-dash">Settings</span>
                </li>{" "}
              </NavLink>

           
            </ul>
            <div className="side_line"> </div>

            <div className="side_profile">
              <div className="side_data">
                <div className="side_img">
                  <img
                    src={profile}
                    alt=""
                   
                  />
                </div>
                <Link to="/home/profile" className="side_name ">
                  <span className="side_name " >
                    {" "}
                    <span id="profile_name">{name}</span>
                    <span id="profile_registration">{userId}</span>
                  </span>
                </Link>
              </div>
              <span onClick={() => logoutuser()} className="log-out" title="logout">
                <img src={exit} alt=""  />
              </span>
            </div>
          </div>
        </div> }
      
     </div>
    </>
      
  );

}
