import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Style commun pour tous les liens de navigation
  const navLinkClass = ({ isActive }) => 
    `text-gray-300 hover:text-white uppercase transition-colors ${
      isActive 
        ? 'font-bold text-white border-b-2 border-blue-500' 
        : ''
    }`;

  return (
    <header className={`sticky top-0 z-50 transition-shadow ${scrolled ? 'shadow-md' : ''}`} style={{ backgroundColor: '#444' }}>
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-white text-xl font-semibold">JOHN DOE</NavLink>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button 
              onClick={toggleMobileMenu} 
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>
          </div>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <NavLink to="/" className={navLinkClass} end>
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className={navLinkClass}>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to="/realisations" className={navLinkClass}>
                Réalisations
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className={navLinkClass}>
                Blog
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={navLinkClass}>
                Me contacter
              </NavLink>
            </li>
          </ul>
        </nav>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <ul className="space-y-4">
              <li>
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-white uppercase block py-1 transition-colors ${
                      isActive 
                        ? 'font-bold text-white border-l-4 border-blue-500 pl-2' 
                        : ''
                    }`
                  }
                  end
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/services"
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-white uppercase block py-1 transition-colors ${
                      isActive 
                        ? 'font-bold text-white border-l-4 border-blue-500 pl-2' 
                        : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/realisations" 
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-white uppercase block py-1 transition-colors ${
                      isActive 
                        ? 'font-bold text-white border-l-4 border-blue-500 pl-2' 
                        : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Réalisations
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/blog" 
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-white uppercase block py-1 transition-colors ${
                      isActive 
                        ? 'font-bold text-white border-l-4 border-blue-500 pl-2' 
                        : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-white uppercase block py-1 transition-colors ${
                      isActive 
                        ? 'font-bold text-white border-l-4 border-blue-500 pl-2' 
                        : ''
                    }`
                  }
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Me contacter
                </NavLink>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;