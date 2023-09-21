import React from "react";
import { Outlet } from "react-router-dom";
import AdminProvider from "../../provider/AdminProvider";

const Admin = () => {
  return (
    <div>
      <AdminProvider>
        <Outlet />
      </AdminProvider>
    </div>
  );
};

export default Admin;
