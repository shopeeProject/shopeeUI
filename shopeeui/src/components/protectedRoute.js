// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => {
    console.log(isAuthenticated)
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/user/sign-in" />;
};

export default ProtectedRoute;
