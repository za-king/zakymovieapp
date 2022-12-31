import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { user } = props;
  
  
    return user ?<Outlet /> : <Navigate to={"/login"} replace />;
 
};

export default ProtectedRoute;
