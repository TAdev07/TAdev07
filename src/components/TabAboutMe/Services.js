import React from 'react';
import Layout from '../../styles/layout.module.css';

export default function Services({servicesData = []}) {
  return (
    <div>
      <h5 className="tittle">Services</h5>
      <div className={`${Layout.row} padding-20`}>
        {/* Icon */}
        {servicesData.map((item, index) => (
          <div
            className={`${Layout.md_4} text-center margin-top-50`}
            key={index}
          >
            <div className="icon-box i-large ib-black">
              <div className="ib-icon">
                <i className={item.icon} />
              </div>
              <div className="ib-info">
                <h4 className="h6">{item.title}</h4>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
