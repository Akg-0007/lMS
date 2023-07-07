import React, { useState } from 'react';
import './AddDepartment.css';
import { useNavigate } from 'react-router-dom';
import NotificationRed from '../../../assets/NotificationRed.svg';

export default function AddDepartment() {
  const [instructions, setInstructions] = useState('');
  const [title, setTitle] = useState('');
  const [hod, setHod] = useState('');
  const [emailid, setemailid] =useState('');
  const [phoneno , setphoneno] = useState('');
  const navigate = useNavigate();
  const programme = [];
  const courses = [];

  const handleNextButtonClick = () => {
    const data = {
      instructions,
      title,
      hod,
      emailid,
      phoneno,
      programme
      ,courses
    };

    navigate('/home/AddProgram', { state: data });
  };

  return (
    <>
      <div className="AddDepartment">
        <div className="AdscvHeader">
          <span>Department</span>
          <img src={NotificationRed} alt="" />
        </div>
        <div className="AddDepartment_desc">
          <span>Add Department</span>

          <div className="addDepartment_form">
            <div className="adddepartmentform">
              <div className="create_input_title">
                <input
                  type="text"
                  required
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label htmlFor="">Department Name</label>
              </div>
              <div className="create_textarea">
                <textarea
                  name="Instruction"
                  id=""
                  cols="90"
                  rows="10"
                  className={!instructions ? '' : 'has-content'}
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                ></textarea>
                <label>Instructions</label>
              </div>
              <div className="create_input_title">
                <input
                  type="text"
                  required
                  name="title"
                  value={hod}
                  onChange={(e) => setHod(e.target.value)}
                />
                <label htmlFor="">HOD Name</label>
              </div>
              <div className="form_contact">
                <div className="contact__Email">
                  <input type="text" className="input__Field" required  value={emailid} onChange={(e) => setemailid(e.target.value)}/>
                  <label htmlFor="" className="input__label">
                    Email ID
                  </label>
                </div>
                <div className="contact__Phone">
                  <input type="text" className="input__Field" required  value={phoneno} onChange={(e) => setphoneno(e.target.value)}/>
                  <label htmlFor="" className="input__label">
                    Phone No
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="Adnext_button">
            <button
              className="Btn Btn--primary  next_button"
              onClick={handleNextButtonClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
