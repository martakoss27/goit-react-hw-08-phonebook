import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

import css from './Page404.module.css';

export default function Page404() {
  return (
    <div className={css.box}>
      <section className={css.page_404}>
        <div className={css.container}>
          <div className={css.row}>
            <div>
              <div>
                <div className={css.four_zero_four_bg}>
                  <h1 className={css.p404}>
                    404<span>.</span>
                  </h1>
                </div>

                <div className={css.contant_box_404}>
                  <h3>Look like you're lost</h3>

                  <p>the page you are looking for is not avaible!</p>

                  <Link to="/goit-react-hw-08-phonebook">
                    <Button variant="contained">Go back to main page</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
