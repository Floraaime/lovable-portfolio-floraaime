
import React from 'react';
import ProjectCard from './ProjectCard';
import { FileText } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "ReciclaSim",
      category: "Case de estudo Coder House",
      image: "/placeholder.svg",
      description: "A sustainability project focused on recycling education and awareness."
    },
    {
      id: 2,
      title: "ReciclaSim",
      category: "Case de estudo Coder House",
      image: "/placeholder.svg",
      description: "A sustainability project focused on recycling education and awareness."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center mb-12">
          <div className="w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center mr-3">
            <FileText className="text-white" size={12} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">Meus trabalhos</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.image}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
