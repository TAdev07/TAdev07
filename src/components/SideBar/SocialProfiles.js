import React from 'react';
import './SocialEffect.css';

export default function SocialProfiles({socialsData}) {
  return (
    <div>
      <h5 className="tittle">Social Profiles</h5>
      <div className="social-wrapper">
        <ul className="wrapperIcon">
          {socialsData.map((item, index) => (
            <li key={index} className={item.title}>
              <a href={item.link}>
                <span />
                <span />
                <span />
                <span />
                <span className={item.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
