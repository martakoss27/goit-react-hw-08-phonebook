import { createPortal } from 'react-dom';

import css from './Modal.module.css';

export default function Modal({ children }) {
  return createPortal(
    <div className={css.modal}>{children}</div>,
    document.querySelector('#root')
  );
}
