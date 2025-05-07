import React from 'react';
import { Helmet } from 'react-helmet';
import ContactForm from '../components/ContactForm';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact - John Doe, Développeur Web</title>
        <meta name="description" content="Contactez John Doe, développeur web full stack basé à Lyon, pour vos projets de création de site web." />
      </Helmet>
      
      <ContactForm />
    </>
  );
};

export default ContactPage;