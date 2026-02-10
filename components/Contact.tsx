import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Send, Globe, MessageCircle } from 'lucide-react';
import { CONTACT_INFO, WHATSAPP_URL, PHONE_LINK } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
    if (status !== 'idle') {
      setStatus('idle');
      setFeedback('');
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const result = await safeParseJSON(await response.text());
        const errorMessage = typeof result?.error === 'string'
          ? result.error
          : 'Sorry, something went wrong while sending your message.';
        setStatus('error');
        setFeedback(errorMessage);
        return;
      }

      setStatus('success');
      setFeedback('Thanks! Your message is on its way to Bilqees.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatus('error');
      setFeedback('Sorry, something went wrong while sending your message.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-gray-800 relative overflow-hidden scroll-mt-24">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gray-700/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-serif">Let's work <span className="text-gray-500">together</span></h2>
                <p className="text-gray-400 text-lg leading-relaxed font-sans">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>

            <div className="space-y-6">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-6 group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-green-700/20 group-hover:text-white group-hover:border-green-600/50 transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-gray-400 group-hover:text-green-500" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-green-500 transition-colors font-sans">WhatsApp Me</p>
                  <p className="font-medium text-lg text-white font-serif">Chat on WhatsApp</p>
                </div>
              </a>

              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-6 group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white transition-colors font-sans">Email Me</p>
                  <p className="font-medium text-lg text-white font-serif">{CONTACT_INFO.email}</p>
                </div>
              </a>

              <a href={PHONE_LINK} className="flex items-center space-x-6 group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                  <Phone className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white transition-colors font-sans">Call Me</p>
                  <p className="font-medium text-lg text-white font-serif">{CONTACT_INFO.phone}</p>
                </div>
              </a>

              <div className="flex items-center space-x-6 group">
                <div className="bg-white/5 border border-white/10 p-4 rounded-xl group-hover:bg-white/10 group-hover:text-white group-hover:border-white/30 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-gray-400 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 group-hover:text-white transition-colors font-sans">Location</p>
                  <p className="font-medium text-lg text-white font-serif">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-4">
               {CONTACT_INFO.linkedin && (
                 <a 
                   href={CONTACT_INFO.linkedin} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="bg-white/5 p-4 rounded-xl hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 border border-white/10 hover:border-white/30"
                   aria-label="LinkedIn Profile"
                 >
                   <Linkedin className="w-6 h-6 text-white" />
                 </a>
               )}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            {/* Contact Form */}
            <div className="bg-gray-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white font-serif">Send me a message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-1 font-sans">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 font-sans" 
                      placeholder="Your Name" 
                      required
                    />
                    </div>
                    <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-1 font-sans">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 font-sans" 
                      placeholder="your@email.com" 
                      required
                    />
                    </div>
                </div>
                
                <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-1 font-sans">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 font-sans" 
                      placeholder="Project Inquiry" 
                      required
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-1 font-sans">Message</label>
                    <textarea 
                      id="message" 
                      rows={4} 
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-xl focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all text-white placeholder-gray-600 font-sans" 
                      placeholder="Tell me about your project..."
                      required
                    ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full flex items-center justify-center py-4 px-6 border border-transparent rounded-xl text-base font-bold text-white bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-gray-600 transition-all shadow-lg font-sans ${status === 'submitting' ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gray-700 hover:shadow-xl'}`}
                >
                    <Send className="w-5 h-5 mr-2" />
                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                </button>
                </form>
                <div className="min-h-[1.5rem] pt-2" aria-live="polite">
                  {status === 'success' && (
                    <p className="text-sm text-green-400 font-medium font-sans">{feedback}</p>
                  )}
                  {status === 'error' && (
                    <p className="text-sm text-red-400 font-medium font-sans">{feedback}</p>
                  )}
                </div>
            </div>
          </div>
        </div>

        {/* Map Section - Full Width Bottom */}
        <div className="mt-20 rounded-3xl overflow-hidden border border-white/10 h-[400px] relative group">
             {/* Map Filter Overlay to make it dark */}
             <div className="absolute inset-0 bg-gray-900/40 mix-blend-multiply z-10 pointer-events-none"></div>
             
             {/* OpenStreetMap Embed with Custom Filter Class defined in index.html */}
             <iframe 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight={0} 
                marginWidth={0} 
                src="https://www.openstreetmap.org/export/embed.html?bbox=74.2500,31.4500,74.4500,31.6500&amp;layer=mapnik" 
                className="map-filter w-full h-full"
                title="Location Map"
             ></iframe>

             {/* Custom Location Pin Card */}
             <div className="absolute bottom-6 left-6 z-20 bg-black/80 backdrop-blur-md p-4 rounded-xl border border-white/10 flex items-center gap-4 shadow-2xl animate-fade-in-up">
                <div className="bg-gray-800 p-3 rounded-lg text-white shadow-[0_0_15px_rgba(255,255,255,0.1)] animate-pulse">
                    <Globe size={24} />
                </div>
                <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider font-bold font-sans">Base of Operations</p>
                    <p className="text-white font-bold text-lg font-serif">Lahore, Pakistan</p>
                    <p className="text-gray-500 text-xs font-sans">Available for Global Remote Work</p>
                </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;

const safeParseJSON = (input: string) => {
  try {
    return JSON.parse(input);
  } catch (error) {
    console.warn('Unable to parse contact API error response', error);
    return null;
  }
};