import React from 'react';
import styles from './Menu.module.css';

export default function MenuItem({menuItem = {}}) {
  return (
    <li className={styles.navItem}>
      <a href={menuItem.link}>
        <i className={menuItem.icon} />
        {menuItem.title}
      </a>
    </li>
  );
}
