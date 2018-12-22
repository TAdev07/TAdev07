import React from 'react';

import ProfessionalDetails from './ProfessionalDetails';
import SocialProfiles from './SocialProfiles';

export default function SideBar({personalInfo, socialsData}) {
  return (
    <div className="sider-bar">
      <ProfessionalDetails personalInfo={personalInfo} />
      <SocialProfiles socialsData={socialsData} />
    </div>
  );
}
