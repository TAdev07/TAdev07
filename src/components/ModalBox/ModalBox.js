import React from 'react';
import styles from './baseButton.module.css';

export default function ModalBox() {
  return (
    <div className="modal-box">
      <div className="modal-container">
        <p>Coming soon</p>
        <span className={`${styles.baseButton} abc`}>close</span>
      </div>
    </div>
  );
}
