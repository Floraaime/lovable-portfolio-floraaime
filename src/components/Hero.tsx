import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();

  // Determine which CV to download based on the current language
  const cvUrl = i18n.language === 'pt' 
    ? '/pdfs/CV_FLORA_PT.pdf' 
    : '/pdfs/CV_FLORA_EN.pdf';

  return (
    <section id="home" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Flora Aimê Barbosa Brandão de Sousa
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              {t('hero.title')}
            </p>
            <p className="text-lg max-w-2xl mx-auto md:mx-0">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
              <a href="#portfolio">
                <Button>{t('hero.buttonProjects')}</Button>
              </a>
              <a href={cvUrl} download={`CV_Flora_Aime_${i18n.language.toUpperCase()}.pdf`}>
                <Button variant="outline">{t('hero.buttonCv')}</Button>
              </a>
            </div>
            <div className="flex items-center gap-6 pt-6 justify-center md:justify-start">
              <a href="mailto:floraaimedesign@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://behance.net/floraaime09b57" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors font-semibold">
                Behance
              </a>
              <a href="https://linkedin.com/in/floraaime" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="md:col-span-5 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 mx-auto md:mx-0">
              <img 
                src="/lovable-uploads/ef8e88e2-8fdc-4b52-bbf6-753f578cb3b9.png" 
                alt="Flora Aimê" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
