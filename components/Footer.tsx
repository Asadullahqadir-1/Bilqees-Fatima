import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-950 py-8 text-center text-gray-600 text-sm border-t border-white/5 font-sans">
      <p>© {new Date().getFullYear()} Bilqees Fatima. All rights reserved.</p>
      <p className="mt-2">Designed with Professionalism & Precision.</p>
    </footer>
  );
};

export default Footer;