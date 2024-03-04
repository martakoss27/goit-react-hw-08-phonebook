import React from 'react';
import { AppBar, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, Outlet } from 'react-router-dom';
import { House } from 'react-bootstrap-icons';

import { useAuth } from './../../hook/useAuth';
import Logo from '../logo/Logo';
import css from './SharedLayout.module.css';
import Header from '../header/Header';
import Container from '../container/Container';
import LogoutButton from '../logoutButton/LogoutButton';
import UserMenu from '../userMenu/UserMenu';

const theme = createTheme({
  palette: {
    primary: {
      main: '#bf4f74',
    },
    secondary: {
      main: '#962f51',
    },
    light: {
      main: '#d66088',
    },
  },
});

const AuthenticatedNav = () => (
  <>
    <NavLink to="contacts">
      <Button variant="contained" size="large" color="secondary">
        Contacts
      </Button>
    </NavLink>
    <LogoutButton />
  </>
);

const UnauthenticatedNav = () => (
  <>
    <NavLink to="login">
      <Button variant="contained" size="large" color="secondary">
        Login
      </Button>
    </NavLink>

    <NavLink to="register">
      <Button variant="contained" size="large" color="secondary">
        Register
      </Button>
    </NavLink>
  </>
);

export default function SharedLayout() {
  const { isLoggedIn } = useAuth();
  return (
    <Container>
      <ThemeProvider theme={theme}>
        <AppBar position="relative">
          <Header>
            <Logo />
            <nav className={css.navigation}>
              {isLoggedIn && <UserMenu />}
              <NavLink to="/goit-react-hw-08-phonebook">
                <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  endIcon={<House />}
                >
                  Home
                </Button>
              </NavLink>
              {isLoggedIn ? <AuthenticatedNav /> : <UnauthenticatedNav />}
            </nav>
          </Header>
        </AppBar>
        <Outlet />
      </ThemeProvider>
    </Container>
  );
}
