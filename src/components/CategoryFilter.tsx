import React from 'react';
import { CategoryOption } from '../types';
import { motion } from 'framer-motion';

interface CategoryFilterProps {
  categories: CategoryOption[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-3 text-center">پۆلێنەکان</h2>
      <div className="flex flex-wrap gap-2 justify-center">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`category-btn ${
              selectedCategory === category.id
                ? 'category-btn-active'
                : 'category-btn-inactive'
            }`}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
          >
            {category.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
