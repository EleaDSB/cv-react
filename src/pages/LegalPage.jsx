import React from 'react';
import {Helmet}  from 'react-helmet';
import LegalNotices from '../components/LegalNotices';

const LegalPage = () => {
  return (
    <>
      <Helmet>
        <title>Mentions Légales - John Doe</title>
        <meta name="description" content="Mentions légales du site web de John Doe, développeur web full stack." />
        <meta name="robots" content="noindex" />
      </Helmet>
      
      <LegalNotices />
    </>
  );
};

export default LegalPage;