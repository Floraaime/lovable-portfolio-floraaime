import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center text-sm text-muted-foreground">
          &copy; {currentYear} {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
