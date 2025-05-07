import React, { useState, useEffect } from 'react';

const GithubProfile = () => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/github-john-doe');
        
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        setError(error.message);
        console.error('Erreur lors du chargement du profil GitHub:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
        <p className="font-bold">Erreur de chargement</p>
        <p>{error}</p>
      </div>
    );
  }
  
  if (!profile) return null;
  
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex flex-col md:flex-row items-center">
        <div className="mb-4 md:mb-0 md:mr-6">
          <img 
            src={profile.avatar_url} 
            alt={profile.name || profile.login} 
            className="w-32 h-32 rounded-full border-4 border-gray-200"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold">{profile.name || profile.login}</h2>
          {profile.bio && <p className="text-gray-600 mt-1">{profile.bio}</p>}
          <div className="flex items-center mt-2">
            <i className="fas fa-map-marker-alt text-gray-500 mr-2"></i>
            <span>{profile.location || 'Non spécifié'}</span>
          </div>
          {profile.company && (
            <div className="flex items-center mt-1">
              <i className="fas fa-building text-gray-500 mr-2"></i>
              <span>{profile.company}</span>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-black text-2xl font-bold">{profile.public_repos}</div>
          <div className="text-sm text-gray-500">Dépôts publics</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-black text-2xl font-bold">{profile.followers}</div>
          <div className="text-sm text-gray-500">Followers</div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg text-center">
          <div className="text-black text-2xl font-bold">{profile.following}</div>
          <div className="text-sm text-gray-500">Following</div>
        </div>
      </div>
      
      <div className="mt-6">
        <a 
          href={profile.html_url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-primary text-white px-4 py-2 rounded inline-flex items-center hover:bg-blue-600 transition-colors"
        >
          <i className="fab fa-github mr-2"></i>
          Voir le profil sur GitHub
        </a>
      </div>
    </div>
  );
};

export default GithubProfile;