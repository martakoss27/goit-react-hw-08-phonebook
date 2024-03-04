import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { Button } from '@mui/material';
import { InfoCircle, PlusCircle } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from './../../redux/reducers/contacts/operations';
import { selectContacts } from './../../redux/reducers/contacts/selectors';

import css from './Form.module.css';
import PhoneInput from 'react-phone-number-input';
import { useState } from 'react';

export default function Form() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const [value, setValue] = useState();

  const handleSumbit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.elements.name.value;
    const number = form.elements.tel.value;

    const newContact = {
      name,
      number,
      id: nanoid(),
    };

    if (
      contacts.find(
        contact => contact.name.toUpperCase() === newContact.name.toUpperCase()
      )
    ) {
      return Notiflix.Notify.failure(
        `Contact ${newContact.name} already exist on list`
      );
    } else {
      dispatch(addContact(newContact));
    }

    form.reset();
    setValue('');
  };

  return (
    <form onSubmit={handleSumbit} className={css.form}>
      <label className={css.label}>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          className={css.input}
        />
      </label>
      <label className={css.labelNumber}>
        Number
        <div className={css.labelInfo}>
          <InfoCircle />
          <p className={css.labelInfoDescription}>
            Enter phone number with <b>area/dialling code</b> and flag will
            change automaticly
          </p>
        </div>
        <PhoneInput
          value={value}
          onChange={setValue}
          className={css.inputNumber}
          defaultCountry="PL"
          name="tel"
          autoComplete="none"
        />
      </label>
      <Button variant="contained" type="submit" endIcon={<PlusCircle />}>
        Add Contact
      </Button>
    </form>
  );
}
