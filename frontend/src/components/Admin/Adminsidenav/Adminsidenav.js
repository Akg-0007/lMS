import React, { useState } from "react";
import "./Adminsidenav.css";
import logo from "../../../assets/logo.svg";
import dash from "../../../assets/dash.svg";
import user from "../../../assets/user.svg";
import department from "../../../assets/department.svg";
import adminschedule from "../../../assets/adminschedule.svg";
import examination from "../../../assets/Quizees2.svg";
import support from "../../../assets/support.svg";
import cross from "../../../assets/admindown.svg";
import exit from "../../../assets/logout.svg";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useLogout } from "../../../hooks/useLogout";
import { useSelector } from "react-redux";
import Dropdown from "../../dropdown/Dropdown";

export default function Adminsidenav() {
  const { name, userId } = useSelector((state) => state.user);
  const { logoutuser } = useLogout();
  const navigate = useNavigate();

  const [isHovered, setIsHovered] = useState(false);

  const handleToggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <>
      <div className="sidebar_container">
        <div className="sidenav">
          <div className="side_upper">
            <div
              className="side_logo"
              onClick={() => navigate("/home/dashboard")}
            >
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
                <NavLink to="/home/teacher">
                  <li>
                    <img src={user} alt="" />
                    Teacher
                  </li>
                  
                </NavLink>
                <NavLink to="/home/user">
                  <li>
                    <img src={user} alt="" />
                    Student
                  </li>
                  
                </NavLink>


                <NavLink to="/home/department">
                  <li>
                    <img src={department} alt="" />
                    Department
                  </li>
                </NavLink>

                <NavLink to="/home/AdminSchedule">
                  <li>
                    <img src={adminschedule} alt="" />
                    Schedule
                  </li>
                </NavLink>

                <NavLink to="/home/examination">
                  <li>
                    <img src={examination} alt="" />
                    Exam
                  </li>
                </NavLink>
              </ul>
            </div>
          </div>

          <div className="side_option-1 " id="setting">
            <ul>
              <NavLink to="/home/support">
                {" "}
                <li>
                  <img src={support} alt="" />
                  Support
                </li>{" "}
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
                  <img
                    src={
                      "https://images.unsplash.com/photo-1683115765470-f6c85077156f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    }
                    alt=""
                  />
                </div>
                <Link to="/home/profile" className="side_name">
                  <span>
                    {" "}
                    <span id="profile_name">Admin 1</span>
                    <span id="profile_registration">{userId}</span>
                  </span>
                </Link>
              </div>
              <span
                onClick={() => logoutuser()}
                className="log-out"
                title="logout"
              >
                <img src={exit} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
