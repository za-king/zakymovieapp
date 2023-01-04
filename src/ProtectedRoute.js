import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = (props) => {
  
  const user = JSON.parse(localStorage.getItem("user"))
  console.log(user)
  if (user && user.userIsLogin) {
    return <Outlet />;
  } else {
    return <Navigate to={"/login"} replace />;
  }
};

export default ProtectedRoute;
