import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, FileText } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  type: string;
  year: number;
  description: string;
  tags: string[];
  image: string;
  pdfUrl?: string;
  behanceUrl?: string;
  onViewPdf: (url: string, title: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, type, year, description, tags, image, pdfUrl, behanceUrl, onViewPdf }) => {
  const { t } = useTranslation();
  return (
    <Card className="overflow-hidden flex flex-col bg-background">
      <div className="aspect-video bg-muted overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-muted-foreground">{type}</span>
            <span className="text-sm text-muted-foreground">{year}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-primary">{title}</h3>
        <p className="text-muted-foreground mb-4 flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>

        <div className="flex gap-4 mt-auto pt-4 border-t border-border">
          {pdfUrl && (
            <Button variant="outline" className='w-full' onClick={() => onViewPdf(pdfUrl, title)}>
              <FileText className="w-4 h-4 mr-2" />
              {t('portfolio.buttonPdf')}
            </Button>
          )}
          {behanceUrl && (
            <a href={behanceUrl} target="_blank" rel="noopener noreferrer" className='w-full'>
              <Button variant="outline" className='w-full'>
                <ExternalLink className="w-4 h-4 mr-2" />
                {t('portfolio.buttonBehanceLink')}
              </Button>
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
