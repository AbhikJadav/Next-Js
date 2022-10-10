import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import NavigationMenu from './Components/NavigationMenu/NavigationMenu';
const Index = () => {
  return (
    <div className={styles.bodyContainer}>
      
      <NavigationMenu />
    </div>
  );
};

export default Index;
