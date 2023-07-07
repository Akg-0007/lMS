import React from "react";

import "./Confirmpassword.css";
import checkmark from "../../assets/check.svg";
import Arrow from "../../assets/arrow.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Confirmpassword = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <div className="confirmpassword">
        <div className="none">

        
      <div className="confirmpassword-logo">
        <img src={checkmark} alt="checkmark" onLoad={() => setImagesLoaded(true)} />
      </div>
      { imagesLoaded && <>
      <div className="password-reset">
        <span className="password-reset-content">Password reset</span>
        <span className="password-reset-success">
          Your password has been successfully reset.
        </span>
        <span className="password-reset-click">
          Click below to log in magically
        </span>
      </div>
        <Link to="/accounts/login" className="continue-button">Continue</Link>
        </> }
        </div>
    </div>
    
  );
};
export default Confirmpassword;
