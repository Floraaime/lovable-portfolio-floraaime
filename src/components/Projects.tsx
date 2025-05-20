
import React from 'react';
import ProjectCard from './ProjectCard';

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
      title: "Nature App",
      category: "UI/UX Design",
      image: "/placeholder.svg",
      description: "Mobile application for nature enthusiasts to identify plants and animals."
    },
    {
      id: 3,
      title: "Finance Dashboard",
      category: "Web Design",
      image: "/placeholder.svg",
      description: "An intuitive dashboard for personal finance management."
    },
    {
      id: 4,
      title: "Travel Planner",
      category: "Mobile App",
      image: "/placeholder.svg",
      description: "A comprehensive travel planning application with itinerary management."
    }
  ];

  return (
    <section id="projects" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="flex items-center mb-12">
          <div className="w-6 h-6 rounded-full bg-portfolio-purple flex items-center justify-center mr-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 14L13 14V22M10 10H2V2M21 2H13V10H21V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">My Projects</h2>
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
