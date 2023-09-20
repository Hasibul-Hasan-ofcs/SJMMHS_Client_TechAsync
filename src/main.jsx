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
        path: "/admissioninfo",
        element: <AdmissionInformation></AdmissionInformation>,
      },
      {
        path: "/admissionform",
        element: <AdmissionForm></AdmissionForm>,
      },
      {
        path: "/*",
        element: <PageNotFound></PageNotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
);
