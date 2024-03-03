import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';

import { logout } from './../../redux/reducers/auth/operations';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  return (
    <Button variant="contained" size="large" onClick={handleClick}>
      Logout
    </Button>
  );
}
