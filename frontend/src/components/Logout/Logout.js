import Cookies from 'js-cookie'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {

    Cookies.remove("token")
    Cookies.remove("userId")
    Cookies.remove("name")
    Cookies.remove("sections")

    const navigate = useNavigate()
    useEffect(() => {  
        navigate('/accounts/login')
    }, [])
  return (
    <div>Logout</div>
  )
}

export default Logout