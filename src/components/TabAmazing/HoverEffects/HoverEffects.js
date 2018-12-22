import React from 'react';
import styles from './HoverEffects.module.css';
import Button3D from './Button3D/Button3D';
import Button2Dto3D from './Button2Dto3D/Button2Dto3D';
import EnergyButton from './EnergyButton/EnergyButton';
import GlowingGradient from './GlowingGradient/GlowingGradient';

export default function HoverEffects() {
  return (
    <div className={styles.container}>
      <div className={styles.col_6}>
        <Button3D />
      </div>
      <div className={styles.col_6}>
        <Button2Dto3D />
      </div>
      <div className={styles.col_6}>
        <EnergyButton />
      </div>
      <div className={styles.col_6}>
        <GlowingGradient />
      </div>
    </div>
  );
}
