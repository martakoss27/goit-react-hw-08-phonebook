import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { PersonCircle } from 'react-bootstrap-icons';
import { selectUser } from './../../redux/reducers/auth/selectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function UserMenu() {
  const user = useSelector(selectUser);

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
    <div>
      <ThemeProvider theme={theme}>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          endIcon={<PersonCircle />}
        >
          <b>{user.name}</b>
        </Button>
      </ThemeProvider>
    </div>
  );
}
