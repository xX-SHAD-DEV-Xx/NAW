import React from 'react';
import { Name } from '../types';
import NameCard from './NameCard';
import { motion } from 'framer-motion';

interface FavoritesProps {
  favorites: Name[];
  onToggleFavorite: (id: string) => void;
}

const Favorites: React.FC<FavoritesProps> = ({ favorites, onToggleFavorite }) => {
  if (favorites.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-center">ناوە دڵخوازەکان</h2>
        <div className="bg-gray-50 p-8 rounded-lg border-2 border-dashed border-gray-300 text-center">
          <p className="text-gray-500">هیچ ناوێکی دڵخواز نییە</p>
          <p className="text-gray-500 text-sm mt-2">
            دڵخوازەکانت بە کلیک کردن لەسەر ئایکۆنی دڵ زیاد بکە
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">ناوە دڵخوازەکان</h2>
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {favorites.map((name) => (
          <motion.div 
            key={name.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <NameCard
              name={name}
              isFavorite={true}
              onToggleFavorite={onToggleFavorite}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Favorites;
