import React from 'react';
import Layout from '../styles/layout.module.css';

export default function TopHead() {
  return (
    <div className={`${Layout.container} ${Layout.mb_3}`}>
      <div className={Layout.row}>
        <div className="top-head-title">
          <h4>Resume </h4>
          {/* <a href="resume(edit-mode).html">Edit Resume</a> */}
        </div>
        {/* <div className="top-head-menu">
          <a id="cd-menu-trigger" href="#0">
            <span className="fa fa-navicon" />
          </a>
        </div> */}
      </div>
    </div>
  );
}
