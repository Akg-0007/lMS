
// admin

import "./App.css";
import Attendance from "./components/attendance/Attendance";
import Login from "./pages/Login/Login";
import Checkemail from "./pages/CheckEmail/Checkemail";
import Loginforget from "./pages/ForgetPassword/Loginforget";
import Confirmpassword from "./pages/ConfirmPassword/Confirmpassword";
import Newpassword from "./pages/NewPassword/Newpassword";
import Assignment_details from "./components/Assignment/Assignment_details/Assignment_details";
import Quizes from "./components/Quizzes/Quizes";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./layouts/RootLayout";
import AuthLayout from "./layouts/AuthLayout";
import HomeLayout from "./layouts/HomeLayout";
import NotFound from "./pages/NotFound";
import Assignment_create_1stpage from "./components/Assignment/Assignment_create1stpage/Assignment_create_1stpage";
import Create_class_test from "./components/Assignment/Assignment_class_test/Create_class_test";
import Search_bar from "./components/Search_bar/Search_bar";
import Support from "./components/Support/Support";
import Home from "./pages/Home";
import Logout from "./components/Logout/Logout";

import Popupcomp from "./components/Quizzes/Popupcomp";
import Popupedit from "./components/Quizzes/Popupedit";
import Preview from "./components/Quizzes/Preview";
import Profile from "./components/Profile/Profile";
import Stdashboard from "./components/Student/StudentDashboard/Stdashboard";
import Studentprofile from "./components/Student/Studentprofile/Studentprofile";
import Assessmentstudent from "./components/Student/Studentassessment/Assessmentstudent";
import Stcourse from "./components/Student/Studentcourse/Stcourse";
import Stu_assessment_1stpage from "./student_component/Stu_assessment_1stpage/Stu_assessment_1stpage";
import AdminStuUpload from "./Admin_coomponent/AdminStuUpload/AdminStuUpload";
import AdStuProfile from "./Admin_coomponent/Ad_stu_profile/AdStuProfile";
import Ad_student_grades from "./Admin_coomponent/Admin_student_grades/Ad_Student_grades";
import AdminStudentProfile from "./Admin_coomponent/Admin-Student-Profile/AdminStudentProfile";
import DeletePop from "./Admin_coomponent/DeletePopUP/DeletePop";
import AdFilter from "./Admin_coomponent/AdminFilter/AdFilter";
import AdSubjectMrks from "./Admin_coomponent/AD_Subject_marks/AdSubjectMrks";
import Admindashboard from "./components/Admin/Admindashboard/Admindashboard";
import Announcementcreate from "./components/Admin/Announcementcreate/Announcementcreate";
import Createannouncement from "./components/Admin/Adminannouncements/Createannouncement/Createannouncement";
import CreateCourse from "./components/Courses/createCourse/CreateCourse";
import Enrollments from "./components/Admin/Enrollmentslist/Enrollments";
import Eventspopup from "./components/Admin/Events/Eventspopup";
import Eventscreate from "./components/Admin/Events/Eventscreate/Eventscreate";
import Editprofile from "./components/Admin/Editprofile";
import Adminsidenav from "./components/Admin/Adminsidenav/Adminsidenav";
import Assignment_1stpage from "./components/Assignment/Assignment_1stpage/Assignment_1stpage";
import AssignmentOptions from "./components/Assignment/assignment_create/AssignmentOptions";
import Accordian from "./components/Admin/Accordian/Accordian";
import AdminCSV from "./Admin_coomponent/Admin_Department/Admin_Department_CSV/AdminCSV";
import Adminupcomingevents from "./components/Admin/Adminupcomingexam/Adminupcomingevents";

import DepartmentView from "./Admin_coomponent/DepartmentView/DepartmentView";
import Toggle from "./Admin_coomponent/ToggleTable/Toggle";
import AddDepartMent from "./Admin_coomponent/Admin_Department/ADD_Department/AddDepartMent";
import AddProgram from "./Admin_coomponent/AdminAcordian/Admin_AddProgram/AddProgram";
import AdminLayout from "./layouts/AdminLayout";
import AddCourse from "./Admin_coomponent/Admin_AddCourse/AddCourse";
import Teacherschedule from "./components/Admin/Teacherschedule/Teacherschedule";
import Teachereditprofile from "./components/Admin/Teachereditprofile/Teachereditprofile";
import AdminTeacherCSV from "./Admin_coomponent/Admin_Teacher/AdminTeacherCSV/AdminTeacherCSV";
import ViewCurriculumToggle from "./Admin_coomponent/ViewCurriculamToggle/ViewCurriculumToggle";
import Adminannouncements from "./components/Admin/Adminannouncements/Adminannouncements";
import AdminSchedule from "./Admin_coomponent/Admin_Schedule_department/Admin_Schedule/AdminSchedule";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="home" element={<HomeLayout />}>
        <Route path="dashboard" element={<Admindashboard />} />



        <Route path="/home/department" element={<AdminCSV />} />
        <Route path="/home/DepartmentView" element={<DepartmentView />} />
        <Route path="/home/AddDepartMent" element={<AddDepartMent />} />
        <Route path="/home/AddProgram" element={<AddProgram />} />
        <Route path="/home/AddCourse" element={<AddCourse />} />
        <Route path="/home/AdminSchedule" element={< AdminSchedule />} />

        <Route path="assignment/view/:id" element={<Assignment_details />} />

        <Route
          path="assignment/create"
          element={<Assignment_create_1stpage />}
        />

        <Route path="/home/Enrollments" element={<Enrollments />} />

        <Route path="/home/Editprofile/:id" element={<Editprofile />} />

        <Route path="/home/Eventscreate" element={<Eventscreate />} />

        <Route path="user" element={<AdStuProfile />} />

        <Route path="teacher" element={<AdminTeacherCSV />} />


        <Route path="/home/Announcementcreate" element={<Announcementcreate />} />

        <Route path="/home/Teacherschedule" element={<Teacherschedule />} />

        <Route path="/home/Teachereditprofile" element={<Teachereditprofile />} />
        <Route path="/home/Editprofile" element={<Editprofile />} />

        {/* <Route path="grades" element={<Announcementcreate />} /> */}

        <Route path="examination" element={<Eventscreate />} />

        <Route path="examination/popupedit/:id" element={<Popupedit />} />

        <Route path="examination/preview" element={<Preview />} />

        <Route path="support" element={<Support />} />

        <Route path="/home/adminstudentprofile" element={<AdminStudentProfile />} />

        <Route path="profile" element={<Editprofile />} />
      </Route>

      {/* admin route */}

      <Route path="/Admin" element={<AdminLayout />}>
        <Route index element={<AdStuProfile />} />

        {/* <Route path="Department" element={<AdminCSV />} /> */}
        {/* <Route path="ViewDepartment" element={<DepartmentView />} /> */}
        <Route path="AddProgram" element={<AddProgram />} />
        <Route path="grades/:id" element={<Ad_student_grades />} />
        <Route path="AddDepartment" element={<AddDepartMent />} />
        <Route path="AddCourse" element={<AddCourse />} />

        <Route path="Createannouncement" element={<Createannouncement />} />
      </Route>

      <Route path="/accounts" element={<AuthLayout />}>
        <Route path="login" element={<Login />} />

        <Route path="password/reset" element={<Loginforget />} />
        <Route path="password/reset/done" element={<Checkemail />} />
        <Route path="password/reset/" element={<Loginforget />} />
        <Route path="password/resetconfirm" element={<Confirmpassword />} />
        <Route path="password/new/" element={<Newpassword />} />
      </Route>
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

