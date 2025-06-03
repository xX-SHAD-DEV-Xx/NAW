import React from 'react';
import { Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-start">
              ماڵپەڕی ناوی مناڵەکەم مافەکانی پارێزراون بۆ پەرەپێدەر:شاد ©٢٠٢٥
            </p>
          </div>
          <a
            href="https://www.instagram.com/shad_developer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-s-2 text-white hover:text-primary-400 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            <span>پەیوەندی کردن</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
