import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_URL } from '../constants';

const ChatWidget: React.FC = () => {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] text-white p-3 sm:p-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all duration-300 hover:scale-110 hover:-translate-y-1 flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} className="text-white relative z-10 sm:size-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap shadow-xl pointer-events-none transform translate-x-4 group-hover:translate-x-0">
        Chat on WhatsApp
      </span>
      
      {/* Ping animation ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping"></span>
    </a>
  );
};

export default ChatWidget;