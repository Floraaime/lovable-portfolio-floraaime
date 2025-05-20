
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, category, image, description }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
      <div className="aspect-video bg-gray-200 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h3 className="text-xl font-medium text-portfolio-purple mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
