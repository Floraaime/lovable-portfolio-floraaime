import React from 'react';
import Skills from './Skills';
import { Briefcase, Flag, MapPin, Puzzle, Rocket, Star, TrendingUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const coreSkills = [
    "UX Research", 
    "Design Thinking", 
    "Design Sprint", 
    "Testes A/B", 
    "Design Systems", 
    "Acessibilidade (WCAG)"
  ];

  const tools = [
    "Figma", 
    "Whimsical", 
    "Adobe XD", 
    "Maze", 
    "Miro", 
    "Mural", 
    "Jira", 
    "Trello"
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Coluna Esquerda */}
          <div className="lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-bold text-primary">{t('about.passionTitle')}</h3>
            <p className="text-lg text-muted-foreground">
              {t('about.desc1')}
            </p>
            <p className="text-lg text-muted-foreground">
              {t('about.desc2')}
            </p>
          </div>

          {/* Coluna Direita */}
          <div className="lg:col-span-2 space-y-8 bg-background p-8 rounded-lg shadow-sm">
            <div>
              <h4 className="font-bold text-lg mb-3">{t('about.journeyTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start"><MapPin className="w-4 h-4 mr-3 mt-1 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.journeyLocation') }} /></li>
                <li className="flex items-start"><Rocket className="w-4 h-4 mr-3 mt-1 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.journeySpecialization') }} /></li>
                <li className="flex items-start"><Briefcase className="w-4 h-4 mr-3 mt-1 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.journeyCompanies') }} /></li>
              </ul>
            </div>
            <div className='border-t border-border my-4'></div>
            <div>
              <h4 className="font-bold text-lg mb-3">{t('about.quickFactsTitle')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center"><Flag className="w-4 h-4 mr-3 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.quickFactsLocation') }} /></li>
                <li className="flex items-center"><Star className="w-4 h-4 mr-3 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.quickFactsExperience') }} /></li>
                <li className="flex items-center"><Puzzle className="w-4 h-4 mr-3 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.quickFactsProjects') }} /></li>
                <li className="flex items-center"><TrendingUp className="w-4 h-4 mr-3 text-primary" /> <span dangerouslySetInnerHTML={{ __html: t('about.quickFactsLearning') }} /></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          <Skills title={t('about.coreSkillsTitle')} skills={coreSkills} />
          <Skills title={t('about.toolsTitle')} skills={tools} />
        </div>

      </div>
    </section>
  );
};

export default About; 