import React from 'react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-gray-900 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-2">Education</h2>
          <div className="w-16 h-1 bg-brand-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {EDUCATION.map((edu) => (
            <div key={edu.id} className="bg-gray-800 rounded-xl p-6 flex items-start space-x-4 border border-gray-700 hover:border-brand-200 transition-colors">
              <div className="bg-brand-900/50 p-3 rounded-lg text-brand-400">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                <p className="text-brand-400 font-medium">{edu.degree}</p>
                <p className="text-gray-400 text-sm mt-1">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;