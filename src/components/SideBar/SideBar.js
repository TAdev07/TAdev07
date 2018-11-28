import React from 'react';

import ProfessionalDetails from './ProfessionalDetails';
import SocialProfiles from './SocialProfiles';

export default function SideBar({personalInfo}) {
    return (
        <div className="sider-bar">
            <ProfessionalDetails personalInfo={personalInfo} />
            <SocialProfiles />
            {console.log(personalInfo)}
        </div>
    );
}
