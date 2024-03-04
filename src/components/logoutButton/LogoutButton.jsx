import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { logout } from './../../redux/reducers/auth/operations';

export default function LogoutButton() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: '#bf4f74',
      },
      secondary: {
        main: '#962f51',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Button
        variant="contained"
        size="large"
        color="secondary"
        onClick={handleClick}
      >
        Logout
      </Button>
    </ThemeProvider>
  );
}
