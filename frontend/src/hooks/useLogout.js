import { useDispatch } from "react-redux";
import { logout } from "../redux/features/userSlice";
import Cookies from "js-cookie";

import { useNavigate } from "react-router-dom";


export const useLogout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const logoutuser = () => {
        // Remove user from localStorage
        localStorage.removeItem('user')
        Cookies.remove("token")
        Cookies.remove("userId")

        // dispatch logout action
        dispatch(logout({}))
        navigate("/accounts/login")
    }

    return { logoutuser }
}