import { Navigate, Outlet } from "react-router-dom";
import SideNav from "../components/sidenav/SideNav";
import Studentsidenav from "../components/Student/Studentsidenav/Studentsidenav"
import Cookies from "js-cookie";
import Adminsidenav from "../components/Admin/Adminsidenav/Adminsidenav";

const AdminLayout = () => {
  const userId = Cookies.get("userId");


  if (!userId) {
    return <Navigate to="/accounts/login" />;
  }

  return (
    <div className="home-layout">
    
      {/* <Adminsidenav/> */}
      <div className="main">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
