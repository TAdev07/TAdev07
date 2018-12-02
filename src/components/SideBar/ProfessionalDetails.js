import React from 'react';
import PersonalInfo from '../PersonalInfo';

export default function ProfessionalDetails({personalInfo = []}) {
  return (
    <div>
      <h5 className="tittle">Professional Details</h5>
      <img
        src="http://new.uouapps.com/remoticv/images/avatar.jpg"
        className="img-responsive"
        alt="avatar"
      />
      <PersonalInfo personalInfo={personalInfo} />
    </div>
  );
}
