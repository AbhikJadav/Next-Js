import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
const Index = () => {
  return (
    <div className={styles.bodyContainer}>
      {/*<nav>*/}
      {/*  <ul>*/}
      {/*    <li>*/}
      {/*      <Link href="/Index">Index</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <Link href="/About">About</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <Link href="/Product">Product</Link>*/}
      {/*    </li>*/}
      {/*    <li>*/}
      {/*      <Link href="/Blog">Blog</Link>*/}
      {/*    </li>*/}
      {/*  </ul>*/}
      {/*</nav>*/}
      <NavigationMenu />
    </div>
  );
};

export default Index;
