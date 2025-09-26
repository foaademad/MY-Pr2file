import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github, Linkedin,  } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useNavigation } from '../context/NavigationContext';
import { aboutMe } from '../data/portfolioData';

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { activeSection, setActiveSection, isMenuOpen, toggleMenu, closeMenu } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      closeMenu();
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-xl font-bold tracking-tight text-gray-900 dark:text-white transition-colors"
            >
              {aboutMe.name.split(' ')[0]}
              <span className="text-blue-600 dark:text-blue-400">.</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-sm font-medium transition-colors hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <div className="hidden md:flex items-center space-x-3">
              <a
                href={`https://${aboutMe.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={`https://${aboutMe.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              
            </div>

            <button
              onClick={toggleMenu}
              className="p-2 md:hidden rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white dark:bg-gray-900 z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.id);
                }}
                className={`text-lg font-medium transition-colors py-2 hover:text-blue-600 dark:hover:text-blue-400 ${
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-700 dark:text-gray-300'
                }`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex space-x-4">
            <a
              href={`https://${aboutMe.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={`https://${aboutMe.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;