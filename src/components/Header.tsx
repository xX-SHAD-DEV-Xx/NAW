import React from 'react';
import { Baby } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-primary-500 text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center space-s-2">
          <Baby className="h-8 w-8" />
          <h1 className="text-2xl font-bold">ناوی مناڵەکم</h1>
        </div>
        <div>
          <Link to="/" className="text-white text-sm opacity-90 hover:opacity-100 transition-opacity duration-200">
            ناوێک هەڵبژێرە
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header
