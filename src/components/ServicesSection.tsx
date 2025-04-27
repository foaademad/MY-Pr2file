import React from 'react';
import { services } from '../data/portfolioData';
import { Code, Paintbrush as PaintBrush, Monitor, Gauge, GitBranch, MessageSquare } from 'lucide-react';

const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'code':
        return <Code size={24} />;
      case 'paintbrush':
        return <PaintBrush size={24} />;
      case 'monitor':
        return <Monitor size={24} />;
      case 'gauge':
        return <Gauge size={24} />;
      case 'git-branch':
        return <GitBranch size={24} />;
      case 'message-square':
        return <MessageSquare size={24} />;
      default:
        return <Code size={24} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors">
            I offer a wide range of services to help bring your digital ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:translate-y-[-4px] hover:border-blue-200 dark:hover:border-blue-800"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg inline-block text-blue-600 dark:text-blue-400 mb-5">
                {getIcon(service.icon)}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 transition-colors">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center mt-16">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-8 shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
              Looking for a custom solution?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;