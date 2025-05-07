import React from 'react';
import { Helmet } from 'react-helmet';
import Services from '../components/Services';

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Services - John Doe, Développeur Web</title>
        <meta name="description" content="Découvrez les services proposés par John Doe, développeur web full stack: UX design, développement web et référencement." />
      </Helmet>
      
      <Services />
    </>
  );
};

export default ServicesPage;