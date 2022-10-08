import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import Head from 'next/head';

const About = () => {
  return (
    <div>
      <NavigationMenu />
      <Head>
        <title>About Page</title>
      </Head>
      This is an About Page
    </div>
  );
};

export default About;
