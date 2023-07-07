import React, { useState, useEffect } from "react";

import "./Newpassword.css";
import key from "../../assets/KeyOutline.svg";
import Arrow from "../../assets/arrow.svg";
import useFetch from "../../hooks/useFetch";
import { useValidate } from "../../hooks/useValidate";
import { useNavigate, useSearchParams } from "react-router-dom";
import { fetchService } from "../../services/userService";
import PasswordStrength from "../../components/utility/PasswordStrength/PasswordStrength";

const Newpassword = () => {
  const navigate = useNavigate()
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const { validate, isLoading, isSuccess, error } = useValidate();
  const [searchParams, setSearchParams] = useSearchParams();
  const token = searchParams.get("token");
  const userId = searchParams.get("userId");
  const [errorr, setErrorr] = useState("");
  const [valid, setValid] = useState(false);


  useEffect(() => {
    (async () => {
      await validate(userId, token);
    })();
  }, []);

  const handleNewPassword = async (e) => {
    e.preventDefault();
    if (!password || !confPassword) {
      setErrorr("Both fields require");
      return;
    }

    if (password !== confPassword) {
      setErrorr("Password does not match");
      return
    }
    const obj = {user: {userId, newPassword: password}, api: `${process.env.REACT_APP_LMS_BACKEND_API}/user/forgotpassword/reset`, method: 'PATCH', token }
    try{
      const json = await fetchService(obj)
      console.log(json)
    } catch (err) {
      console.log(err)
      setErrorr(err.message)
      return
    }
    navigate('/accounts/password/resetconfirm')
  };

  return (
    <div className="newpassword">
      {isLoading && <div className="first">Validating...</div>}
      {error && <div className="second">{error}</div>}
      {isSuccess && (
        <>
          <div className="newpassword-logo">
            <img src={key} alt="key" />
          </div>
          <div className="newpassword-content">
            <span className="set">Set a new password</span>
            <span className="set-content">
              To proceed with your login, please create a new password.
            </span>
          </div>
          <form className="form-new-pwd">
            <div className="form-group">
              <input
                className={errorr ? "invalid" : ""}
                type={"password"}
                value={password}
                onChange={(e) => {
                  setErrorr("")
                  setPassword(e.target.value)
                }}
                required
              />
              <label>New password</label>
              <PasswordStrength password={password} setValid={setValid}/>
            </div>

            <div className="form-group-span"></div>
            <div className="form-group">
              <input
                className={errorr ? "invalid" : ""}
                type={"password"}
                value={confPassword}
                onChange={(e) => {
                  setErrorr("")
                  setConfPassword(e.target.value)}
                }
                required
              />
              <label>Confirm password</label>
            </div>
            <div className="reset-button">
              <button
                className="Btn Btn--primary Btn--large"
                onClick={handleNewPassword}
                disabled={confPassword && password && valid? false : true}
              >
                Reset Password
              </button>
            <span className="errormssg">{errorr}</span>
            </div>
            <div className="back-toreset" onClick={() => navigate("/accounts/login")}>
              <div>
                <img src={Arrow} alt="arrow" />
              </div>
              <span className="back-reset" >Back to log in</span>
            </div>
          </form>
          <div></div>
        </>
      )}
    </div>
  );
};
export default Newpassword;
