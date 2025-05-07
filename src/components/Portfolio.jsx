import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Fresh food',
      description: 'Réalisation d\'un site avec commande en ligne.',
      image: '/public/portfolio/fresh-food.jpg',
      tech: 'Site réalisé avec PHP et MySQL'
    },
    {
      id: 2,
      title: 'Restaurant Akira',
      description: 'Réalisation d\'un site vitrine.',
      image: '/public/portfolio/restaurant-japonais.jpg',
      tech: 'Site réalisé avec WordPress'
    },
    {
      id: 3,
      title: 'Espace bien-être',
      description: 'Réalisation d\'un site vitrine pour un patricien de bien-être.',
      image: '/public/portfolio/espace-bien-etre.jpg',
      tech: 'Site réalisé en HTML/CSS'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">PORTFOLIO</h1>
          <p className="text-lg">Voici quelques-unes de mes réalisations.</p>
          <div className="w-65 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {projects.map(project => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <img src={project.image} alt={project.title} className="w-full h-60 object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="mb-4">{project.description}</p>
                <a href="#" className="text-white bg-blue-500 px-4 py-2 rounded inline-block hover:bg-blue-600 transition-colors duration-300">Voir</a>
                <div className="mt-4 text-sm bg-gray-200 w-full px-3 py-2 rounded">{project.tech}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;