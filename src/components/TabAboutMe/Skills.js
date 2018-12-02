import React from 'react';
import SkillItem from './SkillItem';

export default function Skills({dataSkills = []}) {
  return (
    <div>
      <h5 className="tittle">Skills</h5>
      <div className="panel-group accordion padding-20" id="accordion">
        {dataSkills.map((item, index) => (
          <SkillItem
            key={index}
            skill={item.skill}
            text={item.text}
            progress={item.progress}
          />
        ))}
      </div>
    </div>
  );
}
