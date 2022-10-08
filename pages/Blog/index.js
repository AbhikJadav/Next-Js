import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import Head from 'next/head';

const Blog = () => {
  return (
    <div>
      <NavigationMenu />
      <Head>
        <title>Blog Page</title>
      </Head>
      This is an Blog Page
    </div>
  );
};

export default Blog;
