import React from 'react';
import { Book } from 'react-bootstrap-icons';

import css from './Logo.module.css';

export default function Logo() {
  return (
    <div className={css.logo}>
      <Book /> <span>phonebook</span>
    </div>
  );
}
