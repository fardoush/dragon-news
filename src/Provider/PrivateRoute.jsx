import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate, useLocation } from "react-router";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user, loading);
  // user path location
  const location = useLocation();
  // console.log("Location : ",location);
  if (loading) {
    return <Loading />;
  }
  // if => user thake return children
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;

  // navigate -> login
};

export default PrivateRoute;
