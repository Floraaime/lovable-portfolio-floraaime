
import React from 'react';
import { Star } from 'lucide-react';

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
            <Star className="text-white" size={12} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Minhas Habilidades</h2>
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
