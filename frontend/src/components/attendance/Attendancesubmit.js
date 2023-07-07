import React from "react";
import danger1 from "../../assets/danger.svg";
import Popup from "../toaster/Popup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Attendancesubmit = ({ setmodal }) => {
  const navigate = useNavigate();
  const [toast, settoast] = useState(false);

  function handleYesClick() {
    settoast(true);
    setTimeout(() => {
      settoast(false);
      navigate("/home/dashboard");
      setmodal(false); // close the modal
    }, 2000);
  }

  return (
    <div className="modal-main">
      <div className="attendancesubmit-modal gap__30">
        <div className="modal__head d-flex">
          <img src={danger1} alt="" />
        </div>
        <div className="modal__content">
          <p>
            Are you sure <br></br>
            you want to proceed?
          </p>
        </div>
        <div className="button__group">
          <button
            className="Btn  Btn--outline "
            onClick={() => setmodal(false)}
          >
            {" "}
            NO{" "}
          </button>
          <button className="Btn  Btn--primary" onClick={() => settoast(true)}>
            {" "}
            YES{" "}
          </button>
          {/* <ToastContainer className="custom-toast-container" /> */}
        </div>
        
        <div>
        {toast && ( 
          <Popup
            state={"success"}
            message={"Attendance successfully marked!"}
          />
        )}
        </div>
       
      </div>
    </div>
  );
};

export default Attendancesubmit;
