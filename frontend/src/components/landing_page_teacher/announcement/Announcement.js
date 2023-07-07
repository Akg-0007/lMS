import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vector3 from "../../../assets/ChevronRight.svg";
import vector4 from "../../../assets/ChevronRight1.svg";
import Cookies from "js-cookie";
import "./Announcement.css";
import Music from "../../Loaders/Music";
import { useSelector } from "react-redux";
// import { act } from 'react-dom/test-utils';
function Announcement() {
  const {userId, token, name} = useSelector((state) => state.user )
  const [activeIndex, setActiveIndex] = useState(null);
  const [showDot, setShowDot] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState("ftab1");

  const [isScrolled, setIsScrolled] = useState(false);
  const [category, setCategory] = useState("Academic");

  const [announcementsdata, setAnnouncements] = useState([]);

  useEffect(() => {
    if(token) {
    fetch(
      `${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/getannouncements?category=${category}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => setAnnouncements(data.announcements))
      .catch((error) => console.error(error));
    }
  }, [category, token]);

  const handleTabClick = (tabName, category) => {
    setActiveTab(tabName);
    setCategory(category);
  };

  const handleShow = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
    setIsExpanded(!isExpanded);
    setShowDot(!showDot);
  };

  const handleScroll = (e) => {
    if (e.target.scrollTop > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  return (
    <div className="lpart2">
      <div className="div_main_container">
        <div
          className={`lpart_upper_container ${isScrolled ? "shadow" : ""}`}
          onScroll={handleScroll}
        >
          <div className="heading3" id="head2">
            Announcements
          </div>

          <div className="navbar_head">
            <nav className="ann_nav">
              <ul className="ann_list_group">
                <li className="ann_list">
                  <Link
                    to="#"
                    className={activeTab === "ftab1" ? "active" : ""}
                    onClick={() => handleTabClick("ftab1", "Academic")}
                  >
                    {" "}
                    Academic{" "}
                  </Link>
                </li>
                <li className="ann_list">
                  <Link
                    to="#"
                    className={activeTab === "ftab2" ? "active" : ""}
                    onClick={() => handleTabClick("ftab2", "Administrative")}
                  >
                    Administrative
                  </Link>
                </li>
                <li className="ann_list">
                  <Link
                    to="#"
                    className={activeTab === "ftab3" ? "active" : ""}
                    onClick={() => handleTabClick("ftab3", "Co-curricular")}
                  >
                    Co-curricular
                  </Link>
                </li>
                <li className="ann_list">
                  <Link
                    to="#"
                    className={activeTab === "ftab4" ? "active" : ""}
                    onClick={() => handleTabClick("ftab4", "Examination")}
                  >
                    Examination
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <div className="main_accordian_focus">
          <div className="main_accordian_tab_change">
            <div className="tabs_accordian">
              <div className={activeTab === "ftab1" ? "" : "inactive"}>
                {/*  *********************************** */}

                {
                  <div
                    className={`container11 ${isScrolled ? "shadow" : ""}`}
                    onScroll={handleScroll}
                  >
                    {announcementsdata.length === 0 && <div className="dashboardStatus error"> <div id="wave3">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div> </div>}
                    {announcementsdata.map((accordion, index) => (
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="accordion-link"
                            href="#question1"
                            onClick={() => handleShow(index)}
                          >
                            <div className="accord_heading_main">
                              <div className="line_header">
                                <div className="accordian_heading">
                                  {accordion.heading}
                                </div>
                                {index <= 1 ? (
                                  <div className="button_head">
                                    <button class="button-18">New</button>
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </div>

                              <div className="accordian_content">
                                {activeIndex === index ? (
                                  <img src={vector4} alt="" />
                                ) : (
                                  <img src={vector3} alt="" />
                                )}

                                {/* <img
                                                                        className='accordian_content'
                                                                        src={isExpanded ? vector4 : vector3}
                                                                        alt=""

                                                                    /> */}
                              </div>
                            </div>

                            {/* vector 4 is up and vertor 3 is down */}

                            <div className="acc_show_content">
                              Dear Students,
                            </div>
                            <div className="acc_show_content1">
                              {accordion.description}
                              {activeIndex === index ? (
                                <span className="acc_show_content"> {""}</span>
                              ) : (
                                <span className="acc_show_content">
                                  {" "}
                                  {"..."}
                                </span>
                              )}
                            </div>
                          </div>
                          {activeIndex === index && (
                            <div className="answer">
                              <p> {accordion.body}</p>
                            </div>
                          )}

                          {index < announcementsdata.length - 1 ? (
                            <hr className="accordian-hr" />
                          ) : null}

                        </div>
                      </div>
                    ))}
                  </div>
                }

                {/* **********-------------******************* */}
              </div>
              <div className={activeTab === "ftab2" ? "" : "inactive"}>
                {/*  *********************************** */}

                {
                  <div
                    className={`container11 ${isScrolled ? "shadow" : ""}`}
                    onScroll={handleScroll}
                  >
                    {announcementsdata.length === 0 && <div className="dashboardStatus error"><div id="wave3">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div></div>}
                    {announcementsdata.map((accordion, index) => (
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="accordion-link"
                            href="#question1"
                            onClick={() => handleShow(index)}
                          >
                            <div className="accord_heading_main">
                              <div className="line_header">
                                <div className="accorddian_heading">
                                  {accordion.heading}
                                </div>
                                {index <= 1 ? (
                                  <div className="button_head">
                                    <button class="button-18">New</button>
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </div>

                              <div className="accordian_content">
                                {activeIndex === index ? (
                                  <img src={vector4} alt="" />
                                ) : (
                                  <img src={vector3} alt="" />
                                )}

                                {/* <img
                                        className='accordian_content'
                                        src={isExpanded ? vector4 : vector3}
                                        alt=""

                                    /> */}
                              </div>
                            </div>

                            {/* vector 4 is up and vertor 3 is down */}

                            <div className="acc_show_content">
                              Dear Students,
                            </div>
                            <div className="acc_show_content1">
                              {accordion.description}
                              {activeIndex === index ? (
                                <span className="acc_show_content"> {""}</span>
                              ) : (
                                <span className="acc_show_content">
                                  {" "}
                                  {"..."}
                                </span>
                              )}
                            </div>
                          </div>
                          {activeIndex === index && (
                            <div className="answer">
                              <p> {accordion.body}</p>
                            </div>
                          )}
                      {index < announcementsdata.length - 1 ? (
                            <hr className="accordian-hr" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                }

                {/* **********-------------******************* */}
              </div>
              <div className={activeTab === "ftab3" ? "" : "inactive"}>
                {/*  *********************************** */}

                {
                  <div
                    className={`container11 ${isScrolled ? "shadow" : ""}`}
                    onScroll={handleScroll}
                  >
                    {announcementsdata.length === 0 && <div className="dashboardStatus error"><div id="wave3">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div> </div>}
                    {announcementsdata.map((accordion, index) => (
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="accordion-link"
                            href="#question1"
                            onClick={() => handleShow(index)}
                          >
                            <div className="accord_heading_main">
                              <div className="line_header">
                                <div className="accorddian_heading">
                                  {accordion.heading}
                                </div>
                                {index <= 1 ? (
                                  <div className="button_head">
                                    <button class="button-18">New</button>
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </div>

                              <div className="accordian_content">
                                {activeIndex === index ? (
                                  <img src={vector4} alt="" />
                                ) : (
                                  <img src={vector3} alt="" />
                                )}

                                {/* <img
                                        className='accordian_content'
                                        src={isExpanded ? vector4 : vector3}
                                        alt=""

                                    /> */}
                              </div>
                            </div>

                            {/* vector 4 is up and vertor 3 is down */}

                            <div className="acc_show_content">
                              Dear Students,
                            </div>
                            <div className="acc_show_content1">
                              {accordion.description}
                              {activeIndex === index ? (
                                <span className="acc_show_content"> {""}</span>
                              ) : (
                                <span className="acc_show_content">
                                  {" "}
                                  {"..."}
                                </span>
                              )}
                            </div>
                          </div>
                          {activeIndex === index && (
                            <div className="answer">
                              <p> {accordion.body} </p>
                            </div>
                          )}
                       {index < announcementsdata.length - 1 ? (
                            <hr className="accordian-hr" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                }

                {/* **********-------------******************* */}
              </div>
              <div className={activeTab === "ftab4" ? "" : "inactive"}>
                {/*  *********************************** */}

                {
                  <div
                    className={`container11 ${isScrolled ? "shadow" : ""}`}
                    onScroll={handleScroll}
                  >
                    {announcementsdata.length === 0 && <div className="dashboardStatus error"> <div id="wave3">
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
</div></div>}
                    {announcementsdata.map((accordion, index) => (
                      <div className="accordion">
                        <div className="accordion-item">
                          <div
                            className="accordion-link"
                            href="#question1"
                            onClick={() => handleShow(index)}
                          >
                            <div className="accord_heading_main">
                              <div className="line_header">
                                <div className="accorddian_heading">
                                  {accordion.heading}
                                </div>
                                {index <= 1 ? (
                                  <div className="button_head">
                                    <button class="button-18">New</button>
                                  </div>
                                ) : (
                                  <div></div>
                                )}
                              </div>

                              <div className="accordian_content">
                                {activeIndex === index ? (
                                  <img src={vector4} alt="" />
                                ) : (
                                  <img src={vector3} alt="" />
                                )}

                                {/* <img
                                        className='accordian_content'
                                        src={isExpanded ? vector4 : vector3}
                                        alt=""

                                    /> */}
                              </div>
                            </div>

                            {/* vector 4 is up and vertor 3 is down */}

                            <div className="acc_show_content">
                              Dear Students,
                            </div>
                            <div className="acc_show_content1">
                              {accordion.description}
                              {activeIndex === index ? (
                                <span className="acc_show_content"> {""}</span>
                              ) : (
                                <span className="acc_show_content">
                                  {" "}
                                  {"..."}
                                </span>
                              )}
                            </div>
                          </div>
                          {activeIndex === index && (
                            <div className="answer">
                              <p> {accordion.body}</p>
                            </div>
                          )}
                        {index < announcementsdata.length - 1 ? (
                            <hr className="accordian-hr" />
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                }

                {/* **********-------------******************* */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Announcement;
