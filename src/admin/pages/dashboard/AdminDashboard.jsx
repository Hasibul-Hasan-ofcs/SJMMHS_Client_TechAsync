import React from "react";
import NavigationBar from "../../components/navbar/NavigationBar";
import SideBar from "../../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";
import style from "./css/AdminDashboard.module.css";

const AdminDashboard = () => {
  return (
    <div className="min-h-[100vh] flex">
      <div className={`${style.side_box}`}>
        <SideBar></SideBar>
      </div>
      <div className={`w-full ${style.dashboard_main} px-9 relative`}>
        <NavigationBar></NavigationBar>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
