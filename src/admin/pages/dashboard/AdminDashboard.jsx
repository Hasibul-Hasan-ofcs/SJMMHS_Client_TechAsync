import React from "react";
import NavigationBar from "../../components/navbar/NavigationBar";
import SideBar from "../../components/sidebar/SideBar";

const AdminDashboard = () => {
  return (
    <div className="min-h-[100vh] flex">
      <div className="hidden lg:block md:w-[25%]">
        <SideBar></SideBar>
      </div>
      <div className="w-full lg:w-[75%] relative">
        <NavigationBar></NavigationBar>
      </div>
    </div>
  );
};

export default AdminDashboard;
