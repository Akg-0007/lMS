import React, { useState } from "react";
import "./Studentnotification.css";
import man from "../../../assets/man-logo.svg";
import eye from "../../../assets/eye.svg";
import olivia from "../../../assets/olivia.svg";

const Studentnotification = ({ setNot }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (event) => {
    setSearchText(event.target.value);
  };

  const filteredNotifications = [
    {
      logo: man,
      content: "New Assignment available",
      subject: "“ INT407 ” : “Chapter 1 & Chapter 2”",
      time: "a few moments ago",
      type: "New",
    },
    {
      logo: olivia,
      content: "New Learning Material available in",
      subject: "“INT207” by Olivia Rhye",
      time: "45 minutes ago",
      type: "Material",
    },
    {
      logo: man,
      content: "Exam Available \"CAP820\":Middle Term :12:00 - 14:00",
      subject: " | 11 APR,2023",
      time: "12 hours ago",
      type: "Exam",
    },
    {
      logo: olivia,
      content: "System Maintenance : LMS will undergo maintenance:",
      subject: "Estimated Down time : 3 hours",
      time: "1 day ago",
      type: "Maintenance",
    },
    {
      logo: man,
      content: "Olivia Rhye updated grades :",
      subject: "Check Grades for detailed view of grades.",
      time: "3 days ago",
      type: "Grades",
    },
  ].filter((notification) => {
    if (!isNaN(searchText)) {
      // If the search text is a number, search for it in the notification subject
      return notification.subject.includes(searchText);
    } else {
      // Otherwise, search for the text in the notification content
      return notification.content.toLowerCase().includes(searchText.toLowerCase());
    }
  });

  return (
    <div className="notification">
      <div className="notification-heading">
        <span className="notification-content">Notifications</span>
      </div>
<div className="search-box-outer">
<div className="searchBox">
        <input
          className="searchInput"
          type="text"
          name=""
          placeholder="Search"
          value={searchText}
          onChange={handleSearchTextChange}
        />
        {/* <button className="searchButton" href="#"> */}
          {/* search */}
        {/* </button> */}
      </div>
</div>
      

      {filteredNotifications.map((notification, index) => (
        <div className="notification-section" key={index}>
          <div className="man-logo">
            <img src={notification.logo} alt="none" />
          </div>
          <div className="message-section">
            <div className="message-section-content">
              <p>
                <span className="section-content">
                  {notification.content}
                </span>
                <span className="subject-name">{notification.subject}</span>
              </p>
            </div>
            <div className="message-section-content-2">
              <span className="section-content-2">{notification.time}</span>
              <span className={`section-btn-${notification.type}`}>
                {notification.type}
              </span>
            </div>
          </div>
        </div>
      ))}

      <div className="view-all">
        <div>
          <img src={eye} alt="eye" />
        </div>
        <div className="view-all-btn">View All</div>
      </div>
    </div>
  );
};

export default Studentnotification;
