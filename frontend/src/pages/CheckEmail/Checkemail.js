import React, { useState, useEffect } from "react";
import emailpng from "../../assets/email.png";
import Arrow from "../../assets/arrow.svg";
import "./Checkemail.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useForgot } from "../../hooks/useForgot";

const Checkemail = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const {forgotpassword, error, isLoading, isSuccess} = useForgot();
  const navigate = useNavigate()
  const email = searchParams.get("email") || 'undefined'
  const userId = searchParams.get("userId")
  const [counter, setCounter] = useState(30)


  useEffect(() => {
    if(!email || !userId) {
      navigate('/accounts/login')
    }
    const timer = counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
}, [counter]);


  const handleResendMaail = async () => {
    await forgotpassword(userId, false)
    setCounter(30)
  }

  return (
    <div className="checkemail">
      <div className="checkemail-logo">
        <img src={emailpng} alt="email" />
      </div>
      <div className="checkemail-content">
        <span className="email">Check your email</span>
        <span className="reset">
          We sent a password reset link to your email <br />
          {email ?  email : "undefinde"}
        </span>
      </div>
      <div className="openemail-btn">
        <button className="openemail" disabled={counter>0} onClick={handleResendMaail}>Resend Mail</button>
      </div>
      <div className="email-resend">
        <span className="email-resend-content">Resend mail in <span className="resend-mail" > 00:{counter > 9 ? counter : `0${counter}`} </span>seconds</span>
      </div>
      <Link className="back-to-login" to="/accounts/login">
          <div>
            <img src={Arrow} alt="arrow" />
          </div>
          <span className="back-content">Back to log in</span>
        </Link>
    </div>
  );
};
export default Checkemail;
