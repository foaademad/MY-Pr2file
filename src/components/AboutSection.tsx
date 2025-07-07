import React from 'react';
import { User, Mail, Phone, MapPin, Calendar, FileCode } from 'lucide-react';
import { aboutMe, skills, experiences } from '../data/portfolioData';

const AboutSection: React.FC = () => {
  const frontendSkills = skills.filter(skill => skill.category === 'frontend');
  const backendSkills = skills.filter(skill => skill.category === 'backend');
  const toolsSkills = skills.filter(skill => skill.category === 'tools');
  const softSkills = skills.filter(skill => skill.category === 'soft');

  const renderSkillBar = (skill: { name: string; level: number }) => (
    <div key={skill.name} className="mb-3">
      <div className="flex justify-between mb-1">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
        <span className="text-gray-500 dark:text-gray-400 text-sm">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 transition-colors">
            Get to know more about me, my experience, and what drives me as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm transition-colors">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <User size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                    <p className="font-medium text-gray-900 dark:text-white">{aboutMe.name}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <a href={`mailto:${aboutMe.email}`} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {aboutMe.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <a href={`tel:${aboutMe.phone}`} className="font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {aboutMe.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                    <p className="font-medium text-gray-900 dark:text-white">{aboutMe.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                    <p className="font-medium text-gray-900 dark:text-white">1-2 Years</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                    <FileCode size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Specialization</p>
                    <p className="font-medium text-gray-900 dark:text-white">Frontend Development</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <a 
                  href="/Fouad Emad (Front End).pdf" // Replace with your actual resume file path
                  target="_blank"
                  download="My_Resume.pdf"
                  className="inline-flex items-center justify-center w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">
                Biography
              </h3>
              <div className="text-gray-600 dark:text-gray-400 space-y-4 transition-colors">
                {aboutMe.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-transparent last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors">
                        {exp.position}
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 mt-1 mb-2">
                        <span className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-600"></span>
                        <span className="text-gray-500 dark:text-gray-400">{exp.duration}</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                        {exp.description.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 transition-colors">
                My Skills
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 transition-colors">
                    Frontend Development
                  </h4>
                  {frontendSkills.map(skill => renderSkillBar(skill))}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white  mb-4 transition-colors">
                    Tools & Technologies
                  </h4>
                  {toolsSkills.map(skill => renderSkillBar(skill))}
                  
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white mt-6 mb-4 transition-colors">
                    Soft Skills
                  </h4>
                  {softSkills.map(skill => renderSkillBar(skill))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;