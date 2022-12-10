import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  if (user && user.uid) {
    return children;
  } else {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
};

export default PrivateRoute;
