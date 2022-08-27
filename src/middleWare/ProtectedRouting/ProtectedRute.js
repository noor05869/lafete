import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import Auth from "../Auth/Auth";

const ProtectedRoutes = () => {
  console.log(Auth.isAuthenticated());
  useEffect(() => {}, [Auth.isAuthenticated]);

  return Auth.isAuthenticated() ? <Outlet /> : <Navigate to="/signin" />;
};
export default ProtectedRoutes;
