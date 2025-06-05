import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-portfolio-purple font-medium text-xl mb-4 md:mb-0">
            Flora Aimê
          </div>
          
          <div className="text-sm text-gray-500">
            &copy; {currentYear} {t('footer.rights')}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
