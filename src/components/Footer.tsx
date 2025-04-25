import React from 'react';
import { Github as GitHub, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark-200 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="text-light-100 font-bold text-xl">
              <span className="text-primary">M</span>OHAMED
            </span>
            <p className="text-light-300 mt-2">Software Engineering Student</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
              <GitHub size={20} />
            </a>
            <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-light-300 hover:text-primary transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-dark-100 mt-6 pt-6 text-center">
          <p className="text-light-300 text-sm">
            © {new Date().getFullYear()} Mohamed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;