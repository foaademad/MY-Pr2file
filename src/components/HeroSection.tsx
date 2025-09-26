import React, { useEffect, useRef } from 'react';
import { ArrowDown, ChevronRight } from 'lucide-react';
import { aboutMe } from '../data/portfolioData';
import { useNavigation } from '../context/NavigationContext';

const HeroSection: React.FC = () => {
  const { setActiveSection } = useNavigation();
  const typingRef = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const texts = ["Full-Stack Developer", "MERN Specialist", "Node.js & Express", "MongoDB & React"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 150;
    
    const type = () => {
      const currentText = texts[textIndex];
      
      if (isDeleting) {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
        }
        typingDelay = 50;
      } else {
        if (typingRef.current) {
          typingRef.current.textContent = currentText.substring(0, charIndex + 1);
          charIndex++;
        }
        typingDelay = 150;
      }
      
      if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingDelay = 1500; // Pause before deleting
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500; // Pause before typing new text
      }
      
      setTimeout(type, typingDelay);
    };
    
    const typingTimeout = setTimeout(type, 1000); // Start typing after a delay
    
    return () => clearTimeout(typingTimeout);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('about');
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setActiveSection('contact');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gray-50 dark:bg-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-20">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute top-1/3 -left-10 w-80 h-80 bg-purple-400 dark:bg-purple-600 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 right-1/4 w-60 h-60 bg-teal-400 dark:bg-teal-600 rounded-full filter blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-6 animate-fade-in-up">
                {aboutMe.title}
              </div>
              
              
              
              <h2 className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 transition-colors mb-8 h-8 animate-fade-in-up animation-delay-200">
                I'm a <span ref={typingRef} className="text-blue-600 dark:text-blue-400 font-medium"></span>
                <span className="inline-block animate-blink">|</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 transition-colors animate-fade-in-up animation-delay-300">
                I build responsive, user-friendly web applications with modern technologies 
                and best practices. Let's bring your ideas to life!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in-up animation-delay-400">
                <button
                  onClick={scrollToContact}
                  className="btn-primary flex items-center gap-2 w-full sm:w-auto"
                >
                  Hire me <ChevronRight size={18} />
                </button>
                
                <button
                  onClick={scrollToAbout}
                  className="btn-secondary flex items-center gap-2 w-full sm:w-auto"
                >
                  Learn more
                </button>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-up animation-delay-300">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                <img 
                  src={aboutMe.profileImage} 
                  alt={aboutMe.title}
                  className="rounded-full shadow-2xl object-cover w-full h-full"
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-black/10 dark:ring-white/10"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full bg-white dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg animate-bounce transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
};

export default HeroSection