import React from 'react';
import { Heart } from 'lucide-react';
import { Name } from '../types';
import { motion } from 'framer-motion';

interface NameDisplayProps {
  currentName: Name | null;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const NameDisplay: React.FC<NameDisplayProps> = ({ currentName, isFavorite, onToggleFavorite }) => {
  if (!currentName) {
    return (
      <div className="card">
        <p>هیچ ناوێک دروست نەکراوە. تکایە ناوێک دروست بکە.</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-primary-700">{currentName.name}</h3>
        <button
          onClick={() => onToggleFavorite(currentName.id)}
          className="text-gray-400 hover:text-accent-500 transition-colors"
          aria-label={isFavorite ? 'لابردن لە دڵخوازەکان' : 'زیادکردن بۆ دڵخوازەکان'}
        >
          <Heart className={`h-6 w-6 ${isFavorite ? 'fill-accent-500 text-accent-500' : ''}`} />
        </button>
      </div>
      <p className="text-gray-600 mb-3">{currentName.meaning}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
          {currentName.gender === 'male' 
            ? 'کوڕانە' 
            : currentName.gender === 'female' 
              ? 'کچانە' 
              : 'هەردوو رەگەز'}
        </span>
        <div className="flex items-center">
          <span className="ms-1 text-sm text-gray-500">ناوبانگ:</span>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <span 
                key={i} 
                className={`h-2 w-2 rounded-full mx-0.5 ${
                  i < Math.round(currentName.popularity / 2) 
                    ? 'bg-primary-500' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Thing",
          "name": currentName.name,
          "description": currentName.meaning,
          "inLanguage": "ckb"
        })}
      </script>
    </motion.div>
  );
};

export default NameDisplay;
