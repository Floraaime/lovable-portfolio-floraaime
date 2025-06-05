import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const skillsList = t('skills.skill_list', { returnObjects: true });
  const skills = Array.isArray(skillsList) ? skillsList : [];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="flex items-center mb-12">
          <div className="w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center mr-3">
            <Star className="text-white" size={12} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{t('skills.title')}</h2>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div 
              key={index}
              className="px-5 py-2 bg-white rounded-full border border-gray-200 text-gray-800 hover:bg-portfolio-purple hover:text-white transition-colors cursor-default"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
