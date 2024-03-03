import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Form from '../form/Form';
import Filter from '../filter/Filter';
import Section from '../sections/Section';
import ContactsList from '../contactsList/ContactsList';

export default function Contacts() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Contacts</title>
        </Helmet>

        <Section title="Add Contact">
          <Form />
        </Section>

        <Section title="Contacts">
          <ContactsList>
            <Filter />
          </ContactsList>
        </Section>
      </div>
    </HelmetProvider>
  );
}
