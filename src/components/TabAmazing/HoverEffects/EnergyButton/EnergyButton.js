import React from 'react';
import styles from './EnergyButton.module.css';

export default function EnergyButton() {
  return (
    <div className={styles.container}>
      <a href="/amazing" className={styles.button}>
        energy
      </a>
    </div>
  );
}
