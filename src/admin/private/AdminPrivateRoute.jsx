import React, { useContext } from "react";
import { AdminContext } from "../provider/AdminProvider";
import { Navigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

const AdminPrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AdminContext);

  if (loading)
    return (
      <div className="d-flex py-5 justify-content-center">
        <Oval
          height={80}
          width={80}
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#4fa94d"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </div>
    );

  if (user) return children;

  return <Navigate to="/admin/login"></Navigate>;
};

export default AdminPrivateRoute;
