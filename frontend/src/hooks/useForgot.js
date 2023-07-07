import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useForgot = () => {
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const [isSuccess, setIsSuccess] = useState(false)
    const navigate = useNavigate()
        

    const forgotpassword = async (userId, nav) => {
        setIsLoading(true)
        setError(null)
        setIsSuccess(false)
        try{
        const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/user/login/forget`, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify({userId}) 
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            setIsLoading(false)
            setIsSuccess(true)
            // Naviaget to homepage success page
            nav && navigate(
                `/accounts/password/reset/done?email=${json.userEmail}&&userId=${userId}`
              );
        }
    } catch(err){
        setIsLoading(false)
        setError(`Check your Internet Connection !`)
    }
    }
  return { 
    forgotpassword, 
    isLoading,
    isSuccess,
    error
   }
}
