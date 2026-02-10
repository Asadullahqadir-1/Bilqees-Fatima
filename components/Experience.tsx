import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-gray-900 scroll-mt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-20 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-serif">Professional <span className="text-gray-500">Journey</span></h2>
          <p className="text-lg text-gray-400 font-sans">
            A track record of driving results for international clients.
          </p>
        </div>

        <div className="relative space-y-12">
          {/* Vertical line */}
          <div className="absolute left-8 top-2 bottom-4 w-0.5 bg-gradient-to-b from-gray-700 via-gray-800 to-transparent md:left-1/2 md:-ml-0.5 hidden md:block opacity-50"></div>

          {EXPERIENCE.map((job, index) => (
            <div key={job.id} className={`relative flex items-center justify-between md:justify-normal group ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
              {/* Dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-black rounded-full border-4 border-gray-600 shadow-[0_0_10px_rgba(255,255,255,0.1)] md:-ml-2 mt-1.5 md:mt-0 z-10 hidden md:block group-hover:scale-125 transition-transform duration-300"></div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                 <div className="bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-white/20 hover:bg-gray-800 transition-all duration-300 relative group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                    
                    {/* Mobile Dot */}
                    <div className="absolute -left-3 top-8 w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center md:hidden border border-gray-600">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    </div>

                    <div className="flex flex-col mb-4">
                       <h3 className="text-xl font-bold text-white group-hover:text-gray-200 transition-colors font-serif">{job.title}</h3>
                       <div className="flex items-center text-gray-400 font-medium mt-2 font-sans">
                         <Briefcase size={16} className="mr-2" />
                         {job.url ? (
                           <a 
                             href={job.url} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="hover:underline flex items-center gap-1.5 hover:text-white transition-colors"
                           >
                             {job.company}
                             <ExternalLink size={14} />
                           </a>
                         ) : (
                           <span>{job.company}</span>
                         )}
                       </div>
                    </div>

                    <div className="flex flex-wrap gap-3 text-xs text-gray-500 mb-6 font-sans">
                       <div className="flex items-center bg-black/30 border border-white/5 px-3 py-1.5 rounded-full">
                         <Calendar size={12} className="mr-1.5" />
                         {job.period}
                       </div>
                       <div className="flex items-center bg-black/30 border border-white/5 px-3 py-1.5 rounded-full">
                         <MapPin size={12} className="mr-1.5" />
                         {job.location}
                       </div>
                    </div>

                    <ul className="space-y-3">
                      {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-gray-400 text-sm leading-relaxed font-sans">
                          <span className="mr-3 mt-2 w-1.5 h-1.5 bg-gray-600 rounded-full flex-shrink-0"></span>
                          {desc}
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;