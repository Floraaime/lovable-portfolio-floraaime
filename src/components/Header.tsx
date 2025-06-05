import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="text-portfolio-purple font-medium text-xl">
            <Link to="/">Flora Aimê</Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              {t('header.about')}
            </a>
            <a href="#projects" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              {t('header.projects')}
            </a>
            <a href="#skills" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              {t('header.skills')}
            </a>
            <a href="#contact" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              {t('header.contact')}
            </a>
            <a href="/resume.pdf" download>
              <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white">
                {t('header.resume')}
              </Button>
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
            >
              {i18n.language === 'en' ? 'PT' : 'EN'}
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-600 focus:outline-none" 
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('header.about')}
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('header.projects')}
              </a>
              <a 
                href="#skills" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('header.skills')}
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                {t('header.contact')}
              </a>
              <a href="/resume.pdf" download>
                <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white w-full">
                  {t('header.resume')}
                </Button>
              </a>
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
              >
                {i18n.language === 'en' ? 'Mudar para Português' : 'Switch to English'}
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
