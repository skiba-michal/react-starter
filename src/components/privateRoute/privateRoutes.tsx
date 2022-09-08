import React, { useState } from 'react';
import { Navigate, Outlet } from 'react-router';

export const PrivateRoute = () => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(true);

  return isUserAuthenticated ? <Outlet /> : <Navigate to="/" />;
};
