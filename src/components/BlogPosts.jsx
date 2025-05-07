import React from 'react';

const BlogPosts = () => {
  const posts = [
    {
      id: 1,
      title : 'Coder son site en HTML/CSS',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/coder.jpg',
      date: '22 août 2022'
    },
    {
      id: 2,
      title: 'Vendre ses produits sur le web',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/croissance.jpg',
      date: '20 août 2022'
    },
    {
      id: 3,
      title: 'Se positionner sur Google',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/google.jpg',
      date: '1 août 2022'
    },
    {
      id: 4,
      title: 'Coder en responsive design',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/screens.jpg',
      date: '31 juillet 2022'
    },
    {
      id: 5,
      title: 'Techniques de référencement',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/seo.jpg',
      date: '30 juillet 2022'
    },
    {
      id: 6,
      title: 'Apprendre à coder',
      excerpt: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
      image: '/public/blog/technos.png',
      date: '12 juillet 2022'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">BLOG</h1>
          <p className="text-lg">Retrouvez ici quelques articles sur le développement web.</p>
          <div className="w-70 h-1 bg-blue-500 mx-auto mt-4"></div>
        </div>
        
        <div className="text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {posts.map(post => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-300">
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="mb-4">{post.excerpt}</p>
                <a href="#" className="text-white bg-blue-500 px-4 py-2 rounded inline-block hover:bg-blue-600 transition-colors duration-300">Lire la suite</a>
                <div className="mt-4 text-sm bg-gray-200 w-full px-3 py-2 rounded">Publié le {post.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPosts;
