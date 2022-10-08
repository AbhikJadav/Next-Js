import React from 'react';
import NavigationMenu from '../Components/NavigationMenu/NavigationMenu';
import Head from 'next/head';

const Contact = () => {
  return (
    <div>
      <NavigationMenu />
      <Head>
        <title>Contact Page</title>
      </Head>
      This is an Contact Page
    </div>
  );
};

export default Contact;
