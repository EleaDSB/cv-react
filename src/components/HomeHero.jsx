import React from 'react';
import { Link } from 'react-scroll';

const HomeHero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <img src="/public/hero-bg.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Bonjour, je suis John Doe</h1>
        <h2 className="text-2xl md:text-3xl mb-8">Développeur web full stack</h2>
        <Link 
          to="about" 
          smooth={true} 
          duration={500} 
          className="bg-blue-500 text-white hover:bg-blue-600 px-6 py-3 rounded-md font-semibold transition-colors duration-300 inline-block cursor-pointer"
        >
          En savoir plus
        </Link>
      </div>
    </section>
  );
};

export default HomeHero;