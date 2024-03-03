import React from 'react';
import { Outlet } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Info from '../info/Info';

import css from './Home.module.css';

export default function Home() {
  return (
    <HelmetProvider>
      <div className={css.box}>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Info />
        <Outlet />
      </div>
    </HelmetProvider>
  );
}
