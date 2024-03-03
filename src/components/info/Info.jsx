import React from 'react';
//import { Fire } from 'react-bootstrap-icons';

import css from './Info.module.css';

export default function Info() {
  return (
    <div className={css.info}>
      <p>
        {' '}
        Register to create your own phonebook. Log in to manage your contacts.
      </p>
    </div>
  );
}
