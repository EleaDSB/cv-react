import React from 'react';

const About = () => {
  // Compétences avec leurs pourcentages
  const skills = [
    { name: 'HTML5', percentage: 90, color: 'bg-red-500' },
    { name: 'CSS3', percentage: 80, color: 'bg-cyan-500' },
    { name: 'JAVASCRIPT', percentage: 70, color: 'bg-yellow-500' },
    { name: 'PHP', percentage: 60, color: 'bg-green-500' },
    { name: 'REACT', percentage: 50, color: 'bg-blue-500' }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Colonne de gauche : Texte "À propos" */}
            <div className="text-black">
              <h2 className="text-2xl font-bold mb-4 text-black border-b-2 border-blue-500 pb-2 inline-block">À propos</h2>
              
              <p className="mb-4">Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
              
              <p className="mb-4">Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
              
              <p className="mb-4">J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
            </div>
            
            {/* Colonne de droite : Photo et compétences */}
            <div className="text-black">
              <div className="mb-8">
                <img 
                  src="/public/john-doe-about.jpg" 
                  alt="John Doe - Développeur Web" 
                  className="rounded-lg shadow-md w-full"
                />
              </div>
              
              <h3 className="text-2xl font-bold mb-6">Mes compétences</h3>
              
              {skills.map((skill, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <div className="h-2.5 bg-gray-200 rounded-full">
                    <div 
                      className={`h-2.5 ${skill.color} rounded-full`} 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;