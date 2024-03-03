import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { XCircle } from 'react-bootstrap-icons';

import Modal from '../modal/Modal';
import { login } from './../../redux/reducers/auth/operations';

import css from './Login.module.css';

export default function Login() {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(
      login({
        email,
        password,
      })
    );
  };

  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <Modal>
          <form onSubmit={handleSubmit} className={css.form}>
            <label className={css.label}>
              Email
              <input type="text" name="email" className={css.input} required />
            </label>
            <label className={css.label}>
              Password
              <input
                type="password"
                name="password"
                className={css.input}
                required
              />
            </label>

            <div className={css.options}>
              <Button variant="contained" type="submit" size="large">
                Login
              </Button>
              <NavLink to="/goit-react-hw-08-phonebook/register">
                <Button variant="contained" size="large">
                  Register
                </Button>
              </NavLink>
              <NavLink to="/goit-react-hw-08-phonebook">
                <Button variant="contained" size="large" endIcon={<XCircle />}>
                  Close
                </Button>
              </NavLink>
            </div>
          </form>
        </Modal>
      </div>
    </HelmetProvider>
  );
}
