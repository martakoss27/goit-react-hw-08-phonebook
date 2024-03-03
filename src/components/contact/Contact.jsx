import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { Trash3 } from 'react-bootstrap-icons';

import { deleteContact } from './../../redux/reducers/contacts/operations';

import css from './Contact.module.css';

function Contact({ contact }) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));

  return (
    <li className={css.item}>
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <Button
        variant="contained"
        type="button"
        onClick={handleDelete}
        value={contact.id}
        endIcon={<Trash3 />}
      >
        Delete
      </Button>
    </li>
  );
}

export default Contact;

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
