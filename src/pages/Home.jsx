import React from 'react';
import { Helmet } from 'react-helmet';
import HomeHero from '../components/HomeHero';
import About from '../components/About';
import GithubProfile from '../components/GithubProfile';

const Home = () => {
  return (
    <>
    <div className="overflow-x-hidden w-full"></div>
      <Helmet>
        <title>John Doe - Développeur Web Full Stack</title>
        <meta name="description" content="Portfolio de John Doe, développeur web full stack basé à Lyon, France" />
      </Helmet>
      
      <HomeHero />
      <About />
      
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mon profil GitHub</h2>
            <p className="text-lg">Découvrez mes derniers projets et contributions sur GitHub</p>
            <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
          </div>
          
          <GithubProfile />
        </div>
      </section>
    </>
  );
};

export default Home;