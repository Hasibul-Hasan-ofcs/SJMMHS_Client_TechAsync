import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import PageNotFound from "./pages/pagenotfound/PageNotFound.jsx";
import Notice from "./pages/notice/Notice.jsx";
import AdmissionForm from "./pages/admission/admission_form/AdmissionForm.jsx";
import AdmissionInformation from "./pages/admission/admission_information/AdmissionInformation.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Holidays from "./pages/holidays/Holidays.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NoOfRooms from "./pages/no_of_rooms/NoOfRooms.jsx";
import NoOfSeats from "./pages/no_of_seats/NoOfSeats.jsx";
import AdminLogin from "./admin/pages/login/AdminLogin.jsx";
import Admin from "./admin/pages/admin/Admin.jsx";
import AdminDashboard from "./admin/pages/dashboard/AdminDashboard.jsx";
import StudentInformation from "./pages/student_information/StudentInformation.jsx";
import AdminPrivateRoute from "./admin/private/AdminPrivateRoute.jsx";
import Principal from "./pages/principal/Principal.jsx";
import Result from "./pages/result/Result.jsx";
import Blog from "./pages/blog/Blog.jsx";
import Videos from "./pages/videos/Videos.jsx";
import PhotoGallery from "./pages/photos/PhotoGallery.jsx";
import ResultDataPage from "./pages/result/ResultDataPage.jsx";
import ExPrincipal from "./pages/ex_principal/ExPrincipal.jsx";
import Management from "./pages/management/Management.jsx";
import Teachers from "./pages/teachers/Teachers.jsx";
import Staff from "./pages/staff/Staff.jsx";
import SuccessfulStudent from "./pages/successful_student/SuccessfulStudent.jsx";
import ComputerUsage from "./pages/computer_usage/ComputerUsage.jsx";
import PhysicalStructure from "./pages/physical_structure/PhysicalStructure.jsx";
import MultimediaClassRoom from "./pages/multimedia_classroom/MultimediaClassroom.jsx";
import Sahapath from "./pages/sahapath/Sahapath.jsx";
import Circular from "./pages/circular/Circular.jsx";
import OtherPhotos from "./pages/photos/OtherPhotos.jsx";
import Download from "./pages/download/Download.jsx";
import Routine from "./pages/routine/Routine.jsx";
import HomeContextProvider from "./context/HomeContextProvider.jsx";
import StudentInformationAdmin from "./admin/pages/student/StudentInformationAdmin.jsx";
import HolidaysAdmin from "./admin/pages/holidays/HolidaysAdmin.jsx";
import NoOfRoomsAdmin from "./admin/pages/no_of_rooms/NoOfRoomsAdmin.jsx";
import CircularAdmin from "./admin/pages/circular/CircularAdmin.jsx";
import NoOfSeatsAdmin from "./admin/pages/no_of_seats/NoOfSeatsAdmin.jsx";
import NoticeAdmin from "./admin/pages/notice/NoticeAdmin.jsx";
import StaffAdmin from "./admin/pages/staff/StaffAdmin.jsx";
import BlogsAdmin from "./admin/pages/blogs/BlogsAdmin.jsx";
import TeachersAdmin from "./admin/pages/teachers/TeachersAdmin.jsx";
import SuccessfulStudentsAdmin from "./admin/pages/successful_students/SuccessfulStudentsAdmin.jsx";
import ManagementAdmin from "./admin/pages/management/ManagementAdmin.jsx";
import ResultsAdmin from "./admin/pages/results/ResultsAdmin.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/student-information/:class",
        element: <StudentInformation></StudentInformation>,
      },
      {
        path: "/authority/principal",
        element: <Principal></Principal>,
      },
      {
        path: "/authority/ex-principal",
        element: <ExPrincipal></ExPrincipal>,
      },
      {
        path: "/authority/management",
        element: <Management></Management>,
      },
      {
        path: "/authority/teachers",
        element: <Teachers></Teachers>,
      },
      {
        path: "/authority/workers",
        element: <Staff></Staff>,
      },
      {
        path: "/authority/meritorious-students",
        element: <SuccessfulStudent></SuccessfulStudent>,
      },
      {
        path: "/result",
        element: <Result></Result>,
      },
      {
        path: "/result-data/:valueClass/:reg",
        element: <ResultDataPage></ResultDataPage>,
      },
      {
        path: "/notice",
        element: <Notice></Notice>,
      },
      {
        path: "/download",
        element: <Download></Download>,
      },
      {
        path: "/routine",
        element: <Routine></Routine>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/gallery/photo-gallery",
        element: <PhotoGallery></PhotoGallery>,
      },
      {
        path: "/gallery/photo-gallery/:id",
        element: <OtherPhotos></OtherPhotos>,
      },
      {
        path: "/gallery/video-gallery",
        element: <Videos></Videos>,
      },
      {
        path: "/admission",
        element: <AdmissionInformation></AdmissionInformation>,
      },
      {
        path: "/admission/admissioninfo",
        element: <AdmissionInformation></AdmissionInformation>,
      },
      {
        path: "/admission/admissionform",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/miscellaneous",
        element: <Holidays></Holidays>,
      },
      {
        path: "/miscellaneous/holidays",
        element: <Holidays></Holidays>,
      },
      {
        path: "/miscellaneous/number-of-rooms",
        element: <NoOfRooms></NoOfRooms>,
      },
      {
        path: "/miscellaneous/number-seat",
        element: <NoOfSeats></NoOfSeats>,
      },
      {
        path: "/miscellaneous/computer-usage",
        element: <ComputerUsage></ComputerUsage>,
      },
      {
        path: "/miscellaneous/physical-structure",
        element: <PhysicalStructure></PhysicalStructure>,
      },
      {
        path: "/miscellaneous/Multimedia-classroom",
        element: <MultimediaClassRoom></MultimediaClassRoom>,
      },
      {
        path: "/miscellaneous/sahapath",
        element: <Sahapath></Sahapath>,
      },
      {
        path: "/miscellaneous/circular",
        element: <Circular></Circular>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin></Admin>,
    children: [
      {
        path: "/admin/login",
        element: <AdminLogin></AdminLogin>,
      },
      {
        path: "/admin/dashboard",
        element: (
          <AdminPrivateRoute>
            <AdminDashboard></AdminDashboard>
          </AdminPrivateRoute>
        ),
        children: [
          {
            path: "/admin/dashboard/student-information",
            element: <StudentInformationAdmin></StudentInformationAdmin>,
          },
          {
            path: "/admin/dashboard/holidays",
            element: <HolidaysAdmin></HolidaysAdmin>,
          },
          {
            path: "/admin/dashboard/no-of-rooms",
            element: <NoOfRoomsAdmin></NoOfRoomsAdmin>,
          },
          {
            path: "/admin/dashboard/circular",
            element: <CircularAdmin></CircularAdmin>,
          },
          {
            path: "/admin/dashboard/no-of-seats",
            element: <NoOfSeatsAdmin></NoOfSeatsAdmin>,
          },
          {
            path: "/admin/dashboard/notices",
            element: <NoticeAdmin></NoticeAdmin>,
          },
          {
            path: "/admin/dashboard/management",
            element: <ManagementAdmin></ManagementAdmin>,
          },
          {
            path: "/admin/dashboard/staffs",
            element: <StaffAdmin></StaffAdmin>,
          },
          {
            path: "/admin/dashboard/successful-students",
            element: <SuccessfulStudentsAdmin></SuccessfulStudentsAdmin>,
          },
          {
            path: "/admin/dashboard/teachers",
            element: <TeachersAdmin></TeachersAdmin>,
          },
          {
            path: "/admin/dashboard/blogs",
            element: <BlogsAdmin></BlogsAdmin>,
          },
          {
            path: "/admin/dashboard/results",
            element: <ResultsAdmin></ResultsAdmin>,
          },
        ],
      },
      {
        path: "/admin/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <HomeContextProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </HomeContextProvider>
  </QueryClientProvider>
);
