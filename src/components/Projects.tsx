import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: t('projects.project_1_title'),
      category: t('projects.project_1_category'),
      images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
      description: t('projects.project_1_description')
    },
    {
      id: 2,
      title: t('projects.project_2_title'),
      category: t('projects.project_2_category'),
      images: ["/placeholder.svg", "/placeholder.svg"],
      description: t('projects.project_2_description')
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center mb-12">
          <div className="w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center mr-3">
            <FileText className="text-white" size={12} />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{t('projects.title')}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id}
              title={project.title}
              category={project.category}
              image={project.images[0]}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
