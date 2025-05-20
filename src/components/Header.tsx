
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="py-4 border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="text-portfolio-purple font-medium text-xl">
            <Link to="/">Your Name</Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-gray-600 hover:text-portfolio-purple transition-colors">
              Contact
            </a>
            <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white">
              Resume
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
                About
              </a>
              <a 
                href="#projects" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a 
                href="#contact" 
                className="text-gray-600 hover:text-portfolio-purple transition-colors py-2"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <Button className="bg-portfolio-purple hover:bg-portfolio-dark-purple text-white w-full">
                Resume
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
