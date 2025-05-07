import React, { useState } from 'react';

const LegalNotices = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MENTIONS LÉGALES</h1>
          <div className="w-24 h-1 bg-primary mx-auto mt-4"></div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          {/* Accordion for Legal Notices */}
          <div className="space-y-4">
            {/* Editor */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <button 
                className="flex justify-between items-center w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors" 
                onClick={() => toggleSection('editor')}
              >
                <h2 className="text-xl font-semibold">Éditeur du site</h2>
                <i className={`fas ${openSection === 'editor' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
              </button>
              {openSection === 'editor' && (
                <div className="px-6 py-4">
                  <div className="space-y-3 text-black text-l font-semibold">
                    <h3>John Doe</h3>
                    <p>40 Rue Laure Diebold</p>
                    <p>69009 Lyon, France</p>
                    <p>Téléphone : 06 20 30 40 50</p>
                    <p>Email : <a href="mailto:john.doe@gmail.com" className="text-primary hover:underline">john.doe@gmail.com</a></p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Host */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors" 
                  onClick={() => toggleSection('host')}
                >
                  <h2 className="text-xl font-semibold">Hébergeur</h2>
                  <i className={`fas ${openSection === 'host' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                {openSection === 'host' && (
                  <div className="px-6 py-4">
                    <div className="space-y-3 text-black">
                      <h3>Always Data</h3>
                      <p>91 rue du Faubourg Saint Honoré</p>
                      <p>75008 Paris</p>
                      <p><a href="https://www.alwaysdata.com" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Credits */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="flex justify-between items-center w-full px-6 py-4 text-left bg-gray-100 hover:bg-gray-200 transition-colors" 
                  onClick={() => toggleSection('credits')}
                >
                  <h2 className="text-xl font-semibold">Crédits</h2>
                  <i className={`fas ${openSection === 'credits' ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
                </button>
                {openSection === 'credits' && (
                  <div className="px-6 py-4 text-black">
                    <p className="mb-4">Site développé par John Doe, étudiant du CEF.</p>
                    <p>Les images libres de droit sont issues du site <a href="https://pixabay.com/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Pixabay</a>.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default LegalNotices;