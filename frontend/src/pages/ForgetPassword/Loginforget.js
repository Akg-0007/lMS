import React, { useEffect, useState } from "react";
import "./Loginforget.css";
import key from "../../assets/KeyOutline.svg";
import Arrow from "../../assets/arrow.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForgot } from "../../hooks/useForgot";

const Loginforget = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [errorr, setErrorr] = useState("")
  const {forgotpassword, error, isLoading, isSuccess} = useForgot();
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(()=>{
    if (error) {
    setErrorr(error);
    return;
  }
  }, [error])

  const handleForgot = async (e) => {
    e.preventDefault();

    if (!userId) {
      setErrorr("UserId Required")
      return;
    }

    try{
      await forgotpassword(userId, true)
    } catch (error) {
      if((error.message).includes("Failed")){
        setErrorr("Login failed, please try again !")
      } else {
        setErrorr(`Error: ${error.message}`)
      }
    }

  };

  return (
     

    <div className="login-forget">
      <div className="login-forget-content">
        <img src={key} alt="none" onLoad={() => setImagesLoaded(true)}/>
      </div>
      {imagesLoaded && 
      <>
      <div className="forget">
        <span className="forget-content">Forgot password?</span>
        <span className="forget-content-2">
          No worries, we'll send you reset instructions.{" "}
        </span>
      </div>
      <form className="login-forget-form">
        <div className="form-group">
          <input
           className={errorr ? "invalid" : ""}
            type={"number"}
            value={userId}
            onChange={(e) => {
              setErrorr("")
              setUserId(e.target.value)}
            }
            required
          />
          <label>User Id</label>
        </div>
        <div className="loginbtn">
          <button disabled={ userId  ? false : true } className="Btn Btn--primary Btn--large" onClick={handleForgot}>
            Reset Password
          </button>
          <span className="errormssg">{errorr}</span>
        </div>
        <Link to="/accounts/login" className="backto-login">
          <div>
            <img src={Arrow} alt="arrow" />
          </div>
          <span className="back-content">Back to log in</span>
        </Link>
      </form>
      </>}
    </div>
    
  );
};
export default Loginforget;
