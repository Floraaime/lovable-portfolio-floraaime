
import React from 'react';
import { Button } from '@/components/ui/button';
import { Button as MovingButton } from '@/components/ui/moving-border';
import { BlurFade } from '@/components/ui/blur-fade';

const Hero = () => {
  return (
    <section id="about" className="section-padding pt-24 md:pt-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7 space-y-6 animate-fade-in">
            <div className="text-sm text-gray-500">UI/UX Design | Graphic Design</div>
            <BlurFade delay={0.1} inView>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                Olá! <span className="text-portfolio-purple">Sou Flora Aimê</span> 👋
              </h1>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-lg text-gray-600 max-w-2xl">
                Meu trabalho é criar experiências intuitivas que carregam significado
                e facilitam a vida das pessoas
              </p>
            </BlurFade>
            <BlurFade delay={0.5} inView>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white">
                  Ver Currículo
                </Button>
                <MovingButton 
                  borderRadius="0.5rem"
                  className="bg-white/10 text-white border-portfolio-purple w-40 h-10"
                  borderClassName="bg-[radial-gradient(var(--portfolio-purple)_40%,transparent_60%)]"
                >
                  Meus Contatos
                </MovingButton>
              </div>
            </BlurFade>
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
