import React from 'react';
import { Button } from '@/components/ui/button';
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

  const navLinks = [
    { href: "#home", label: t("header.nav.home") },
    { href: "#about", label: t("header.nav.about") },
    { href: "#portfolio", label: t("header.nav.portfolio") },
    { href: "#experience", label: t("header.nav.experience") },
    { href: "#contact", label: t("header.nav.contact") },
  ];

  return (
    <header className="py-4 border-b border-border sticky top-0 bg-background z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <a href="#home">Flora Aimê</a>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-foreground/60 hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}>
            {i18n.language === 'en' ? t('header.langButton.pt') : t('header.langButton.en')}
          </Button>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden animate-fade-in bg-background border-b border-border">
          <nav className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground transition-colors py-2"
                onClick={toggleMenu}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="sm" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')} className="w-4/5">
                {i18n.language === 'en' ? t('header.mobileLangButton.pt') : t('header.mobileLangButton.en')}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
