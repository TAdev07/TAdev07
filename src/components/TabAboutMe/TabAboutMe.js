import React from 'react';
import PersonalInfo from '../PersonalInfo';
import JobInfo from './JobInfo';
import Services from './Services';
import Skills from './Skills';

export default function TabAboutMe({
  personalInfo = [],
  dataServices = [],
  dataSkills = [],
}) {
  return (
    <div className="inside-sec">
      <h5 className="tittle">About Me</h5>
      <section className="about-me padding-top-10">
        {/* Personal Info */}
        <PersonalInfo personalInfo={personalInfo} />
        {/* I’m Web Designer */}
        <JobInfo />
        {/* Services */}
        <Services dataServices={dataServices} />
        {/* Skills */}
        <Skills dataSkills={dataSkills} />
      </section>
    </div>
  );
}
