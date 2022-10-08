import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <NavigationMenu />
      <Head>
        <title>Home Page</title>
      </Head>
      This is an Home page.
    </div>
  );
};

export default Home;
