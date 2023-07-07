import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/features/userSlice";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";




export const useLogin = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(null)
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch();


  const loginuser = async (userId, password) => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, password })
      })

      const json = await response.json()
      if (!response.ok) {
        setIsLoading(false)
        setError(json.error)
      }

      if (response.ok) {
        // Save the user ( JWT and userId ) to Cookies
        await Cookies.set("token", json.token, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        await Cookies.set("userId", json.userId, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        await Cookies.set("name", json.name, {
          expires: 7,
          secure: true,
          sameSite: "strict",
        });
        // Update the AUthContext
        // dispatch({ type: 'LOGIN', payload: json })
        await dispatch(login({ userId: json.userId, token: json.token, name: json.name, email: json.email }));

        setIsLoading(false)
        setIsSuccess(true)

        // back to homepage
        setTimeout(() => {
          navigate('/home/dashboard')
        }, 100)
      }
    } catch (err) {
      setError(`Login failed, check your internet connection !`);
      setIsLoading(false);
    }
  }
  return {
    loginuser,
    isLoading,
    isSuccess,
    error
  }
}
