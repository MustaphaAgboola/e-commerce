import React from "react";
import { Navigate } from "react-router-dom";

// create a component that checks if a user is logged in, if the uesr is logged in you can return the children which is the page the person is trying to access else if the user is not logged in u can redirect the user back to the login page
const ProtectedRoutes = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    // redirects back to the login page
    return <Navigate to="/" replace={true} />;
  } else {
    // proceed forward to show the children
    return children;
  }
};

export default ProtectedRoutes;
