import React from "react";
import NavigationBar from "../../components/navbar/NavigationBar";
import SideBar from "../../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-[100vh] flex">
      <div className="hidden lg:block md:w-[25%]">
        <SideBar></SideBar>
      </div>
      <div className="w-full lg:w-[75%] relative">
        <NavigationBar></NavigationBar>
        <Outlet />
      </div>
    </div>
  );
};

export default AdminDashboard;
