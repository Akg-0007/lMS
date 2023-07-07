import { useState } from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";



export const useGetTimetable = (day) => {
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [data, setData] = useState([])
    const token = Cookies.get("token")
    
    useEffect(() => {
      const getTimetable = async () => {
        setIsLoading(true)
        
        try{
            const response = await fetch(`${process.env.REACT_APP_LMS_BACKEND_API}/dashboard/gettimetable/`,{
                headers: {
                  'Authorization': `Bearer ${token}`,
                  'day' : day 
                }
              })

        const json = await response.json()
        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok) {
            setIsLoading(false)
            setIsSuccess(true)
            setData(json)
        }
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    }

    getTimetable()
    }, [day]) 
    
  return { 
    data,
    isLoading,
    isSuccess,
    error
   }
}
