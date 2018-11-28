import React from 'react';

export default function Services({dataServices}) {
    return (
        <div>
            <h5 className="tittle">Services</h5>
            <div className="row padding-20">
                {/* Icon */}
                {dataServices.map((item, index) => (
                    <div
                        className="col-md-4 text-center margin-top-50"
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
