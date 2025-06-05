import React from 'react';
import { Button } from '@/components/ui/button';
import { SparklesText } from '@/components/ui/sparkles-text';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="section-padding pt-24 md:pt-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <div className="text-sm text-gray-500">{t('hero.sub_title')}</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
              <SparklesText 
                text={t('hero.title')}
                className="text-4xl md:text-5xl lg:text-6xl font-bold"
                colors={{ first: "#7e22ce", second: "#a855f7" }}
              />
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="/resume.pdf" download>
                <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white">
                  {t('hero.resume_button')}
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" className="border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
                  {t('hero.contact_button')}
                </Button>
              </a>
            </div>
          </div>
          <div className="md:col-span-5 animate-fade-in flex justify-center md:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-light-purple/20">
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
