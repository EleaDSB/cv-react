import React from 'react';
import { Helmet } from 'react-helmet';
import BlogPosts from '../components/BlogPosts';

const BlogPage = () => {
  return (
    <>
      <Helmet>
        <title>Blog - John Doe, Développeur Web</title>
        <meta name="description" content="Articles et actualités sur le développement web, le référencement et l'UX design par John Doe." />
      </Helmet>
      
      <BlogPosts />
    </>
  );
};

export default BlogPage;