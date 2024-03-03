import { useDispatch, useSelector } from 'react-redux';

import Contact from '../contact/Contact';
import {
  selectError,
  selectIsLoading,
  selectVisibleContacts,
} from './../../redux/reducers/contacts/selectors';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

import Loader from '../loader/Loader';
import { fetchContacts } from './../../redux/reducers/contacts/operations';

import css from './ContactsList.module.css';

export default function ContactsList({ children }) {
  const dipsatch = useDispatch();
  useEffect(() => {
    dipsatch(fetchContacts());
  }, [dipsatch]);

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContactsList = useSelector(selectVisibleContacts);

  return (
    <div>
      {children}
      {isLoading && !error && <Loader />}
      <ul className={css.list}>
        {filteredContactsList.map(contact => {
          return <Contact key={contact.id} contact={contact} />;
        })}
      </ul>
    </div>
  );
}

ContactsList.propTypes = {
  children: PropTypes.element,
};
