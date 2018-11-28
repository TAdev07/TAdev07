import React from 'react';

export default function SocialProfiles({dataSocials}) {
    return (
        <div>
            <h5 className="tittle">Social Profiles</h5>
            <div className="social-icon bor-btm padding-25">
                <ul>
                    {dataSocials.map((item, index) => (
                        <li key={index}>
                            <a href={item.link}>
                                <i className={item.icon} />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
