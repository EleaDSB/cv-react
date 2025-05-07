import React from 'react';
import { Helmet } from 'react-helmet';
import Portfolio from '../components/Portfolio';

const PortfolioPage = () => {
  return (
    <>
      <Helmet>
        <title>Réalisations - John Doe, Développeur Web</title>
        <meta name="description" content="Découvrez les projets réalisés par John Doe, développeur web full stack basé à Lyon." />
      </Helmet>
      
      <Portfolio />
    </>
  );
};

export default PortfolioPage;