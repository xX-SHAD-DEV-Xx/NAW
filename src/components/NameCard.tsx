import React from 'react';
import { Heart } from 'lucide-react';
import { Name } from '../types';
import { motion } from 'framer-motion';

interface NameCardProps {
  name: Name;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

const NameCard: React.FC<NameCardProps> = ({ name, isFavorite, onToggleFavorite }) => {
  return (
    <motion.div 
      className="card hover:border-primary-300 border-2 border-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-2xl font-bold text-primary-700">{name.name}</h3>
        <button
          onClick={() => onToggleFavorite(name.id)}
          className="text-gray-400 hover:text-accent-500 transition-colors"
          aria-label={isFavorite ? 'لابردن لە دڵخوازەکان' : 'زیادکردن بۆ دڵخوازەکان'}
        >
          <Heart className={`h-6 w-6 ${isFavorite ? 'fill-accent-500 text-accent-500' : ''}`} />
        </button>
      </div>
      <p className="text-gray-600 mb-3">{name.meaning}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
          {name.gender === 'male' 
            ? 'کوڕانە' 
            : name.gender === 'female' 
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
                  i < Math.round(name.popularity / 2) 
                    ? 'bg-primary-500' 
                    : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NameCard;
