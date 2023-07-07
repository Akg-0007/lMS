import React from "react";
import "./SideNav.css";
import logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";
import dash from "../../assets/dash.svg";
import course from "../../assets/course.svg";
import assignment from "../../assets/assignment.svg";
import attendance from "../../assets/attendance.svg";
import examination from "../../assets/Quizees2.svg";
import support from "../../assets/support.svg";
import settings from "../../assets/Cog.svg";
import exit from "../../assets/logout.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

export default function SideNav() {
  // const { name , userId  } = useSelector((state) => state.user)
  const userId = Cookies.get('userId');
  console.log(userId);
  const name = Cookies.get('name');
  console.log(name);
  const {logoutuser} = useLogout()
  const navigate = useNavigate()

  return (
    <>
      <div className="sidebar_container">
        <div className="sidenav">
          <div className="side_upper">
            <div className="side_logo" onClick={() => navigate("/home/dashboard")}>
              <img src={logo} alt="" />
            </div>
            <div className="side_option_1">
              <ul>
                <NavLink to="/home/dashboard">
                  <li>
                    <img src={dash} alt="" />
                    Dashboard
                  </li>
                </NavLink>

                <NavLink to="/home/courses">
                  <li>
                    <img src={course} alt="" />
                    Courses
                  </li>
                </NavLink>

                <NavLink to="/home/assignment">
                  <li>
                    <img src={assignment} alt="" />
                    Assessment
                  </li>
                </NavLink>

                <NavLink to="/home/attendance">
                  <li>
                    <img src={attendance} alt="" />
                    Attendance
                  </li>
                </NavLink>

                <NavLink to="/home/examination">
                  <li>
                    <img src={examination} alt="" />
                    Quizzes
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="side_option-1 " id="setting">
            <ul>
              <NavLink to="/home/support">
                <li>
                  <img src={support} alt="" />
                  Support
                </li>
              </NavLink>

              {/* <NavLink to="/home/settings">
                <li>
                  <img src={settings} alt="" />
                  Settings
                </li>
              </NavLink> */}
            </ul>
            <div className="side_line"> </div>

            <div className="side_profile">
              <div className="side_data">
                <div className="side_img">
                  <img src={profile} alt="" />
                </div>
                <Link to="/home/profile" className="side_name">
                  <span>
                    {" "}
                    <span id="profile_name">{name}</span>
                    <span id="profile_registration">{userId}</span>
                  </span>
                </Link>
              </div>
              <span onClick={() => logoutuser()} className="log-out" title="logout">
                <img src={exit} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
