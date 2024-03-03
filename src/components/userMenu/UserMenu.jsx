import React from 'react';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { PersonCircle } from 'react-bootstrap-icons';
import { selectUser } from './../../redux/reducers/auth/selectors';

export default function UserMenu() {
  const user = useSelector(selectUser);

  return (
    <div>
      <Button variant="contained" size="large" endIcon={<PersonCircle />}>
        <b>{user}</b>
      </Button>
    </div>
  );
}
