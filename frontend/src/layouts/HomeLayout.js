import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../components/sidenav/SideNav";
import Studentsidenav from "../components/Student/Studentsidenav/Studentsidenav"
import Cookies from "js-cookie";
import Adminsidenav from "../components/Admin/Adminsidenav/Adminsidenav";

const HomeLayout = () => {
  const userId = Cookies.get("userId");


  if (!userId) {
    return <Navigate to="/accounts/login" />;
  }
  // const userId = localStorage.getItem("userId");/
  const firstChar = userId && userId.charAt(0);
  return (
    <div className="home-layout">
      {firstChar === "1" ? (
        <SideNav />
      ) : firstChar === "2" ? (
        <Studentsidenav />
      ) : (
        <Adminsidenav />
      )}

      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
