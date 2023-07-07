import { Outlet } from "react-router-dom";
import SideNav from "../components/sidenav/SideNav";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { login } from "../redux/features/userSlice";
import { useDispatch } from "react-redux";


const RootLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const token =  Cookies.get("token")
  const userId = Cookies.get("userId")
  const name = Cookies.get("name")

  useEffect(() => {
      if(token && userId && name) {
        dispatch(login({ userId, token, name }));
     }
  }, [])
  


  return (
    <div className="root-layout">
        <Outlet />
      </div>
  );
};

export default RootLayout;
 