import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from './../../hook/useAuth';

export default function ProtectedRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirect} /> : Component;
}

ProtectedRoute.propTypes = {
  element: PropTypes.element,
  redirect: PropTypes.string,
};
