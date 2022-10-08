import React from 'react';
import styles from './NavigationMenu.module.scss';
import Link from 'next/link';
const NavigationMenu = () => {
  return (
    <div className={styles.mainHeaderContainer}>
      <ul>
        <li>
          <Link href="/Home">Home</Link>
        </li>
        <li>
          <Link href="/About">About</Link>
        </li>
        <li>
          <Link href="/Contact">Contact</Link>
        </li>
        <li>
          <Link href="/Detail">Detail</Link>
        </li>
        <li>
          <Link href="/Blog">Blog</Link>
          <ul>
            <li>
              <Link href="/Blog/1">Blog1</Link>
            </li>
            <li>
              <Link href="/Blog/2">Blog2</Link>
            </li>
            <li>
              <Link href="/Blog/3">Blog3</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default NavigationMenu;
