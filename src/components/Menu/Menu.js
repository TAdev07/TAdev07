import React from 'react';

import MenuItem from './MenuItem';
import './Menu.css';
import styles from './Menu.module.css';

export default function NavLink({dataMenu = {}}) {
  return (
    <nav className={styles.wrapper}>
      {/* Brand and toggle get grouped for better mobile display */}
      <button type="button" className={styles.toggle}>
        <span className={styles.title}>MENU</span>
        <span className={`fa fa-navicon ${styles.button}`} />
      </button>
      {/* Collect the nav links, forms, and other content for toggling */}
      <div className={styles.navBar}>
        <ul className={styles.nav}>
          {dataMenu.map((item, index) => (
            <MenuItem key={index} menuItem={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
