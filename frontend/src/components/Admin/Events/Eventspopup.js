import React, { useState } from "react";
import cross from "../../../assets/cross.svg";
import "./Eventspopup.css";

export default function Eventspopup({ setPopupstate }) {
  const handleCreate = (event) => {
    event.preventDefault(); // prevent default form submission behavior
    
    // get the values of the form inputs
    const title = event.target.querySelector('input[name="title"]').value;
    const startDate = event.target.querySelector('input[name="start-date"]').value;
    const endDate = event.target.querySelector('input[name="end-date"]').value;
    const startTime = event.target.querySelector('input[type="time"][name="start-time"]').value;
    const endTime = event.target.querySelector('input[type="time"][name="end-time"]').value;
    const venue = event.target.querySelector('input[name="venue"]').value;
    
    // log the form data to the console
    console.log({ title, startDate, endDate, startTime, endTime, venue });

    // Reset the form fields
    event.target.reset();
    
    // Refresh the page
    // window.location.reload();
  };

  return (
    <>
      <div className="eventpopup">
        <div className="AddDepartment_desc">
          <span>Add Event</span>
          <div className="addDepartment_form">
            <form className="adddepartmentform" onSubmit={handleCreate}>
              <div className="create_input_title">
                <input type="text" required name="title" />
                <label htmlFor="">Title</label>
              </div>
              <div className="form_contact">
                <div className="form-event-label">
                  <label>Start date</label>
                  <div className="contact__Email">
                    <input type="date" placeholder="YYYY-MM-DD" className="input__Field" name="start-date" required />
                  </div>
                </div>
                <div className="form-event-label">
                  <label>End date</label>
                  <div className="contact__Email">
                    <input type="date" className="input__Field" name="end-date" required />
                  </div>
                </div>
              </div>
              <div className="form_contact">
                <div className="form-event-label">
                  <label>Start time</label>
                  <div className="contact__Email">
                    <input type="time" className="input__Field" name="start-time" required />
                  </div>
                </div>
                <div className="form-event-label">
                  <label>End time</label>
                  <div className="contact__Email">
                    <input type="time" className="input__Field" name="end-time" required />
                  </div>
                </div>
              </div>
              <div className="create_input_title">
                <input type="text" required name="venue" />
                <label htmlFor="">Venue</label>
              </div>
              <div className="update-btn">
                <button className="Btn Btn--outline" type="submit">Update</button>
                <button className="Btn Btn--red" onClick={() => setPopupstate(false)}>Close</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
