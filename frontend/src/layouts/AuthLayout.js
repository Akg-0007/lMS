import { Navigate, Outlet } from 'react-router-dom'
import Cookies from 'js-cookie'

const AuthLayout = () => {
  const userId = Cookies.get("userId")

  if(userId) {
    return (
      <Navigate to="/home/dashboard"  />
    )
  }

  return (
    <div className='auth-layout'>
         <Outlet />
    </div>
  )
}

export default AuthLayout