import React from 'react';
import { Home, ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/portfolioData';
import { Link } from 'react-router-dom';

const AllProjects: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            All Projects
          </h1>
          <Link 
            to="/"
            className="flex items-center gap-2 btn-secondary"
          >
            <Home size={20} />
            Back to Home
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
             <div 
             key={project.id}
             className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all hover:shadow-md hover:translate-y-[-4px] group"
           >
             <div className="relative overflow-hidden h-48">
               <img 
                 src={project.image} 
                 alt={project.title} 
                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                 <div className="flex space-x-2">
                   {project.demoUrl && (
                     <a 
                       href={project.demoUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="p-2 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                       aria-label="Live Demo"
                     >
                       <ExternalLink size={18} />
                     </a>
                   )}
                   {project.repoUrl && (
                     <a 
                       href={project.repoUrl} 
                       target="_blank" 
                       rel="noopener noreferrer" 
                       className="p-2 bg-white/20 rounded-full backdrop-blur-sm text-white hover:bg-white/30 transition-colors"
                       aria-label="GitHub Repository"
                     >
                       <Github size={18} />
                     </a>
                   )}
                 </div>
               </div>
               {project.featured && (
                 <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-medium py-1 px-2 rounded-full">
                   Featured
                 </div>
               )}
             </div>
             <div className="p-6">
               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                 {project.title}
               </h3>
               <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 transition-colors">
                 {project.description}
               </p>
               <div className="flex flex-wrap gap-2">
                 {project.technologies.slice(0, 3).map((tech, index) => (
                   <span 
                     key={index} 
                     className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-2 rounded-full transition-colors"
                   >
                     {tech}
                   </span>
                 ))}
                 {project.technologies.length > 3 && (
                   <span className="text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 py-1 px-2 rounded-full transition-colors">
                     +{project.technologies.length - 3} more
                   </span>
                 )}
               </div>
             </div>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;