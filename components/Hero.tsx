import React from 'react';
import { ArrowRight, Download, Linkedin, Mail, MousePointer2 } from 'lucide-react';
import ProfileImage from '../images/Profile.jpeg';
import { SUMMARY } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="about" className="relative pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 scroll-mt-24">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-gray-800/30 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-800/40 rounded-full blur-[120px]"></div>
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-gray-600 rounded-full animate-float"></div>
        <div className="absolute bottom-[30%] right-[20%] w-3 h-3 bg-gray-700 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 lg:order-1 space-y-8 animate-fade-in-up text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-2 hover:bg-white/10 transition-colors backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-400 mr-2 shadow-[0_0_8px_rgba(56,189,248,0.8)]"></span>
              Available for new projects
            </div>
            
            <div>
              <h2 className="text-xl md:text-2xl font-semibold text-gray-400 mb-2 font-serif">Hello, I'm Bilqees Fatima</h2>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight font-serif">
                Virtual Assistant <span className="text-gray-500 font-light italic text-2xl lg:text-4xl align-middle px-1">and</span><br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
                  Digital Marketer
                </span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0 font-sans">
              I help startups and healthcare companies scale through strategic LinkedIn outreach, CRM optimization, and operational excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="inline-flex justify-center items-center px-8 py-3.5 rounded-lg text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 font-semibold group font-sans">
                Let's Talk <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a href="#experience" className="inline-flex justify-center items-center px-8 py-3.5 border border-white/20 text-base font-semibold rounded-lg text-white hover:bg-white/5 transition-all hover:border-gray-400/50 font-sans">
                View Experience
              </a>
            </div>

            <div className="pt-6 flex flex-wrap justify-center lg:justify-start items-center gap-6 text-gray-500 border-t border-white/5">
              <div className="flex items-center gap-2 group hover:text-white transition-colors">
                 <Linkedin size={20} className="text-gray-500 group-hover:text-white transition-colors" />
                 <span className="font-sans">LinkedIn Marketing</span>
              </div>
               <div className="flex items-center gap-2 group hover:text-white transition-colors">
                 <div className="w-5 h-5 bg-gray-800 rounded-sm flex items-center justify-center text-xs text-gray-400 font-bold border border-gray-700 group-hover:text-white group-hover:border-white transition-colors">H</div>
                 <span className="font-sans">HubSpot CRM</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] animate-float">
              {/* Balanced Frame and Glow */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/10"></div>
              <div className="absolute inset-[6px] bg-gradient-to-r from-gray-800/60 to-gray-600/40 rounded-2xl blur-2xl opacity-40"></div>
              
              <img 
                src={ProfileImage}
                alt="Bilqees Fatima" 
                className="relative rounded-2xl shadow-2xl object-cover w-full h-full z-10 border border-white/10 bg-gray-900 grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Floating Badge 1 */}
              <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-white/10 animate-pulse-slow">
                 <div className="bg-white/10 p-2 rounded-lg text-white">
                    <Download size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 font-medium font-sans">Data Management</p>
                    <p className="text-sm font-bold text-white font-sans">Airtable & Apollo</p>
                 </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute top-6 -right-6 sm:top-10 sm:-right-10 bg-gray-900/90 backdrop-blur-md p-4 rounded-xl shadow-xl z-20 hidden sm:flex items-center gap-3 border border-white/10" style={{ animation: 'float 5s ease-in-out infinite reverse' }}>
                 <div className="bg-white/10 p-2 rounded-lg text-white">
                    <Mail size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-gray-400 font-medium font-sans">Expertise</p>
                    <p className="text-sm font-bold text-white font-sans">Cold Outreach</p>
                 </div>
              </div>

            </div>
          </div>

        </div>
        
        <div className="mt-24 pt-10 border-t border-white/5">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2 font-sans">
            <MousePointer2 size={14} /> Professional Summary
          </h3>
          <p className="text-gray-300 max-w-4xl leading-relaxed text-lg font-sans">
            {SUMMARY}
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;