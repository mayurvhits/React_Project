import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  let { user } = useAuth();
  // const history = useHistory();
  if (!user) {
     return <Navigate to= "/" />
  }else{
  return children;
}
};

export default ProtectedRoute;