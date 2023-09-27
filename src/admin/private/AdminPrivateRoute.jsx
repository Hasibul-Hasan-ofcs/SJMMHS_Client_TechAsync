import React, { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";
import { Navigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AdminContext);

  if (loading)
    return (
      <div className="flex justify-center items-center w-full min-h-screen">
        <Oval
          height={80}
          width={80}
          color="#013C57"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#013C57"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );

  if (user) return children;

  return <Navigate to="/admin/login"></Navigate>;
};

export default AdminPrivateRoute;
