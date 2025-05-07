import React from 'react';

const Services = () => {
  const services = [
    {
      icon: 'fas fa-desktop',
      title: 'UX DESIGN',
      description: "L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute."
    },
    {
      icon: 'fas fa-code',
      title: 'DÉVELOPPEMENT WEB',
      description: "Le développement de sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP."
    },
    {
      icon: 'fas fa-search-dollar',
      title: 'RÉFÉRENCEMENT',
      description: "Le référencement naturel d'un site, aussi appelé SEO, consiste à mettre des techniques en œuvre pour améliorer sa position dans les résultats des moteurs de recherche."
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">MON OFFRE DE SERVICES</h1>
          <p className="text-lg">Voici les prestations sur lesquelles je peux intervenir.</p>
          <div className="w-70 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg group hover:shadow-xl transition-all">
              <div className="flex justify-center mb-4">
                <div className="text-blue-500 text-5xl group-hover:text-[#cde1f8] transition-colors">
                  <i className={service.icon}></i>
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4">{service.title}</h3>
              <p className="text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;