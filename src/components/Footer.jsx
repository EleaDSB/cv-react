import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Fonction pour gérer l'apparition du bouton "retour en haut"
    const handleScroll = () => {
      // Afficher le bouton quand l'utilisateur a défilé au-delà de 300px
      setShowBackToTop(window.pageYOffset > 300);
    };

    // Ajouter l'écouteur d'événement au chargement du composant
    window.addEventListener('scroll', handleScroll);
    
    // Vérifier la position initiale au chargement
    handleScroll();
    
    // Nettoyer l'écouteur d'événement lors du démontage du composant
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-200 pt-10 pb-4">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">John Doe</h3>
            <p className="mb-2">40 Rue Laure Diebold</p>
            <p className="mb-2">69009 Lyon, France</p>
            <p className="mb-4">Téléphone : 06 20 30 40 50</p>
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                <i className="text-black fab fa-github text-2xl"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                <i className="text-black fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-primary">
                <i className="text-black fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          
          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Accueil</Link></li>
              <li><Link to="/#about" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>À propos</Link></li>
              <li><Link to="/services" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Services</Link></li>
              <li><Link to="/contact" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Me contacter</Link></li>
              <li><Link to="/mentions-legales" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Mentions légales</Link></li>
            </ul>
          </div>
          
          {/* Column 3: Recent Projects */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mes dernières réalisations</h3>
            <ul className="space-y-2">
              <li><Link to="/realisations" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Fresh food</Link></li>
              <li><Link to="/realisations" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Restaurant Akira</Link></li>
              <li><Link to="/realisations" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Espace bien-être</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Recent Blog Posts */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Mes derniers articles</h3>
            <ul className="space-y-2">
              <li><Link to="/blog" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Coder son site en HTML/CSS</Link></li>
              <li><Link to="/blog" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Vendre ses produits sur le web</Link></li>
              <li><Link to="/blog" className="text-primary hover:underline flex items-center"><i className="text-black fas fa-chevron-right mr-2 text-xs"></i>Se positionner sur Google</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center border-t border-gray-300 pt-4">
          <p>&copy; Designed by John Doe</p>
        </div>
      </div>
      
      {/* Back to Top Button with animation */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-blue hover:bg-[#298eff] text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Retour en haut"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </footer>
  );
};

export default Footer;