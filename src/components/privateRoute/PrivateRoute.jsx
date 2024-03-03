import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

import { useAuth } from './../../hook/useAuth';

export default function PrivateRoute({ element: Component, redirect }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? Component : <Navigate to={redirect} />;
}

PrivateRoute.propTypes = {
  element: PropTypes.element,
  redirect: PropTypes.string,
};
