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
        <PersonalInfo personalInfo={personalInfo} />
        <JobInfo />
        <Services dataServices={dataServices} />
        <Skills dataSkills={dataSkills} />
      </section>
    </div>
  );
}
