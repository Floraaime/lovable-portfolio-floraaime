import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SkillsProps {
  title: string;
  skills: string[];
  icon?: React.ReactNode;
}

const Skills: React.FC<SkillsProps> = ({ title, skills, icon }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        {icon && <span className="mr-3">{icon}</span>}
        {title}
      </h3>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-base px-4 py-2">
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default Skills;
