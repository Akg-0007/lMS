import React, { useEffect, useState } from "react";
import "./Login.css";
import logo from "../../assets/Login-logo.jpg";
import { Link } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import PasswordStrength from "../../components/utility/PasswordStrength/PasswordStrength";
import Stcoursedetails from "../../components/Student/Studentcourse/Stcoursedetails";

const Login = ({ handleLoginID }) => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorr, setErrorr] = useState("");
  const { loginuser, error, isLoading, isSuccess } = useLogin();
  const [user, setUser] = useState();

  const [loginData, setLoginData] = useState("");

  useEffect(() => {
    if (error) {
      setErrorr(error);
      return;
    }
  }, [error]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!userId || !password) {
      setErrorr("All fields Required");
      return;
    }
    await loginuser(userId, password);

    // Update the loginData state in App.js
    
    const loginData = {
      userId: userId,
    };
    handleLoginID(loginData);
  };
  localStorage.setItem("userId", userId);

  


  return (
    <div className="loginPage">
      <div className="login-left-container"></div>

      <div className="loginContent">
        <div className="login-logo">
          <a href="/">
            {" "}
            <img src={logo} alt="learn central" />
          </a>
        </div>
        <div className="login-new">
          <div className="login-heading">
            <h2 className="loginContent-heading">
              Log in to <br /> Learn Central!
            </h2>
          </div>

          <form className="login-form">
            <div className="form_group">
              <input
                className={errorr ? "invalid" : ""}
                type={"number"}
                value={userId}
                onChange={(e) => {
                  setErrorr("");
                  setUserId(e.target.value);
                  setUser(e.target.value);
                }}
                required
              />
              <label>User ID</label>
            </div>
            <div className="form_group">
              <input
                className={errorr ? "invalid" : ""}
                type={"password"}
                value={password}
                onChange={(e) => {
                  setErrorr("");
                  setPassword(e.target.value);
                }}
                required
              />
              <label>Password</label>
            </div>
            <div className="login-btn ">
              <button
                disabled={userId && password ? false : true}
                onClick={handleLogin}
                className="Btn Btn--primary Btn--large"
              >
                Login
              </button>

              {isLoading && !error && (
                <span className="logging">
                  <div id="wave">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                  </div>
                </span>
              )}

              {!isLoading && <span className="errormssg">{errorr}</span>}
            </div>
            <div className="login-forget-main">
              <Link to="/accounts/password/reset" className="forget-pwd">
                Forgot your password?
              </Link>
            </div>
          </form>
        </div>
      </div>
      {/* { user && <Stcoursedetails userID = {user}/>} */}
    </div>
  );
};
export default Login;
