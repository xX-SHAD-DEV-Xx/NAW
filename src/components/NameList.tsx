import React from 'react';
import { names } from '../data/names';
import NameCard from './NameCard';
import { Link } from 'react-router-dom';

interface NameListProps {
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

const NameList: React.FC<NameListProps> = ({ favorites, onToggleFavorite }) => {
  const sortedNames = [...names].sort((a, b) => a.name.localeCompare(b.name, 'ku'));

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">لیستی ناوەکان</h1>
        <Link to="/" className="btn btn-primary">
          گەڕانەوە بۆ پەڕەی سەرەکی
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedNames.map((name) => (
          <NameCard
            key={name.id}
            name={name}
            isFavorite={favorites.includes(name.id)}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
      </div>
    </div>
  );
};

export default NameList;
