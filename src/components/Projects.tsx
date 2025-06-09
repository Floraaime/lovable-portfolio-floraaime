import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SimplePDFViewer from './SimplePDFViewer';
import { useIsMobile } from '@/hooks/useIsMobile';

const Projects = () => {
  const { t } = useTranslation();
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState('');
  const [selectedPdfTitle, setSelectedPdfTitle] = useState('');
  const isMobile = useIsMobile();
  
  const projects = [
    {
      id: 1,
      title: t('portfolio.project1_title'),
      type: t('portfolio.project1_type'),
      year: 2023,
      description: t('portfolio.project1_desc'),
      tags: ["UX/UI", "Mobile", "Figma"],
      image: "/images/projeto-1.png",
      behanceUrl: "https://behance.net/gallery/163236039/UXUI-Case-Study-ReciclaSim-App",
      pdfUrl: "/pdfs/User Experience Optimization at Smartpace - Copia - Copia.pdf",
    },
    {
      id: 2,
      title: t('portfolio.project2_title'),
      type: t('portfolio.project2_type'),
      year: 2023,
      description: t('portfolio.project2_desc'),
      tags: ["UX Design", "Prototipagem", "Adobe XD", "Miro"],
      image: "https://placehold.co/600x400/1e40af/ffffff?text=Precision+Data",
      behanceUrl: "https://behance.net/floraaime09b57",
      pdfUrl: "/pdfs/Data Analysis Platform - Precision Data.pdf",
    },
    {
      id: 3,
      title: t('portfolio.project3_title'),
      type: t('portfolio.project3_type'),
      year: 2022,
      description: t('portfolio.project3_desc'),
      tags: ["UI Design", "Mobile", "Figma", "Whimsical"],
      image: "https://placehold.co/600x400/be123c/ffffff?text=Aicury",
      behanceUrl: "https://behance.net/floraaime09b57",
      pdfUrl: "/pdfs/E-commerce App Interface - Aicury.pdf",
    },
  ];

  const handleViewPdf = (url: string, title: string) => {
    if (isMobile) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedPdfUrl(url);
      setSelectedPdfTitle(title);
      setIsViewerOpen(true);
    }
  };

  const handleCloseViewer = () => {
    setIsViewerOpen(false);
    setSelectedPdfUrl('');
    setSelectedPdfTitle('');
  };

  return (
    <>
      <section id="portfolio" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">{t('portfolio.title')}</h2>
              <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
                  {t('portfolio.description')}
              </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard 
                key={project.id}
                title={project.title}
                type={project.type}
                year={project.year}
                image={project.image}
                description={project.description}
                tags={project.tags}
                behanceUrl={project.behanceUrl}
                pdfUrl={project.pdfUrl}
                onViewPdf={handleViewPdf}
              />
            ))}
          </div>

          <div className="text-center mt-16">
              <a href="https://behance.net/floraaime09b57" target="_blank" rel="noopener noreferrer">
                  <Button size="lg">
                      {t('portfolio.buttonBehance')}
                      <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
              </a>
          </div>
        </div>
      </section>

      <SimplePDFViewer
        isOpen={isViewerOpen}
        onClose={handleCloseViewer}
        pdfUrl={selectedPdfUrl}
        title={selectedPdfTitle}
      />
    </>
  );
};

export default Projects;
