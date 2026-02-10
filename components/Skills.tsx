import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-gray-800 relative overflow-hidden scroll-mt-24">
        {/* Background Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gray-700/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-serif">Core <span className="text-gray-400">Competencies</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-sans">
            A comprehensive toolset developed through hands-on experience in high-paced remote environments.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <div 
              key={index} 
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(255,255,255,0.05)]"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/5 group-hover:border-white/10 transition-colors">
                <div className="p-2 bg-white/5 rounded-lg text-gray-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                    <Zap size={24} />
                </div>
                <h3 className="text-xl font-bold text-white font-serif">
                    {category.category}
                </h3>
              </div>
              
              <ul className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start group/item">
                    <CheckCircle2 className="w-5 h-5 text-gray-600 group-hover/item:text-gray-300 mt-0.5 mr-3 flex-shrink-0 transition-colors" />
                    <span className="text-gray-400 group-hover/item:text-white font-medium transition-colors font-sans">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;