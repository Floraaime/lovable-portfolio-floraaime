import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Briefcase } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Experience = () => {
  const { t, i18n } = useTranslation();

  const experienceData = [
    {
      period: t('experience.job1_period'),
      role: t('experience.job1_role'),
      company: t('experience.job1_company'),
      description: t('experience.job1_desc')
    },
    {
      period: t('experience.job2_period'),
      role: t('experience.job2_role'),
      company: t('experience.job2_company'),
      description: t('experience.job2_desc')
    },
    {
      period: t('experience.job3_period'),
      role: t('experience.job3_role'),
      company: t('experience.job3_company'),
      description: t('experience.job3_desc')
    }
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t('experience.title')}
        </h2>
        <p className="text-lg text-muted-foreground text-center mt-4 max-w-3xl mx-auto mb-12">
          {t('experience.description')}
        </p>

        <div className="relative">
          {/* Linha do tempo vertical */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block"></div>
          
          {experienceData.map((exp, index) => (
            <div key={index} className="mb-8 flex justify-center items-center w-full">
               <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left md:order-2'}`}>
                <p className="text-muted-foreground">{exp.period}</p>
              </div>
              
              <div className="z-10 bg-background p-2 rounded-full border-2 border-primary hidden md:block">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>

              <div className={`md:w-1/2 w-full ${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:order-1'}`}>
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>{exp.role}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </CardHeader>
                  <CardContent>
                    <p>{exp.description}</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 