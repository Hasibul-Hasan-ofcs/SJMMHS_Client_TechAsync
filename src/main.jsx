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
        path: "/notice",
        element: <Notice></Notice>,
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
        element: <AdminDashboard></AdminDashboard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </QueryClientProvider>
);
