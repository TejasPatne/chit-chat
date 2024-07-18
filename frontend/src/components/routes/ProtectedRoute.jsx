import React from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const protectedRoute = () => {
    const {authUser} = useAuthContext();
  return (authUser? <Outlet />: <Navigate to="/login" />)
}

export default protectedRoute