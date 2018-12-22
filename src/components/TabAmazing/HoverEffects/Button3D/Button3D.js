import React from 'react';
import styles from './Button3D.module.css';

export default function Button3D() {
  return (
    <div className={styles.container}>
      <a href="/amazing" className={styles.button}>
        <span>button</span>
        <span>button</span>
        <span>button</span>
        <span>button</span>
      </a>
    </div>
  );
}
