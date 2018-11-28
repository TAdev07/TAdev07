import React from 'react';

export default function PersonalInfo({personalInfo}) {
    return (
        <ul className="personal-info">
            {personalInfo.map((item, index) => (
                <li key={index}>
                    <p>
                        <span>{item.key}</span>
                        {item.link !== '' ? (
                            <a href={`${item.link}`}>{item.value}</a>
                        ) : (
                            item.value
                        )}
                    </p>
                </li>
            ))}
        </ul>
    );
}
