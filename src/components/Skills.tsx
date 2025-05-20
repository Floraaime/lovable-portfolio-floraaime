
import React from 'react';

const Skills = () => {
  const skills = [
    "UX/UI Design",
    "Jornada do Usuário",
    "Arquitetura da Informação",
    "Personas",
    "Teste A/B",
    "Design System",
    "UX Research",
    "Teste de Usabilidade",
    "Pensamento crítico",
    "Figma",
    "Adobe XD",
    "Sketch",
    "Prototyping",
    "User Testing"
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="flex items-center mb-12">
          <div className="w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center mr-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 16L12 8M12 8L16 12M12 8L8 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">My Skills</h2>
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
