import React, { useState, useEffect } from 'react';
import { Shuffle, Filter } from 'lucide-react';
import { Name, Category } from '../types';
import { motion } from 'framer-motion';
import { getRandomName } from '../data/names';

interface NameGeneratorProps {
  selectedCategory: Category | 'all';
  onNameGenerated: (name: Name) => void;
}

const NameGenerator: React.FC<NameGeneratorProps> = ({ 
  selectedCategory, 
  onNameGenerated 
}) => {
  const [gender, setGender] = useState<'male' | 'female' | 'neutral' | 'all'>('all');
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  const generateName = () => {
    const category = selectedCategory === 'all' ? undefined : selectedCategory;
    const genderFilter = gender === 'all' ? undefined : gender;
    const name = getRandomName(category, genderFilter);
    onNameGenerated(name);
  };

  useEffect(() => {
    // Generate a name when component mounts
    generateName();
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4 text-center">ناوێکی نوێ بدۆزەوە</h2>
      
      <div className="mb-4">
        <motion.button
          className="btn btn-primary w-full flex justify-center items-center"
          onClick={generateName}
          whileTap={{ scale: 0.98 }}
        >
          <Shuffle className="h-5 w-5 me-2" />
          ناوێکی هەڕەمەکی
        </motion.button>
      </div>
      
      <div className="mb-4">
        <motion.button
          className="btn btn-outline w-full flex justify-center items-center"
          onClick={() => setIsFiltersOpen(!isFiltersOpen)}
          whileTap={{ scale: 0.98 }}
        >
          <Filter className="h-5 w-5 me-2" />
          فلتەرکردن
        </motion.button>
      </div>
      
      {isFiltersOpen && (
        <motion.div 
          className="mt-4 p-4 border border-gray-200 rounded-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="font-medium mb-2">رەگەز</h3>
          <div className="flex gap-2 flex-wrap">
            <button 
              className={`btn ${gender === 'all' ? 'btn-primary' : 'btn-outline'} text-sm py-1`}
              onClick={() => setGender('all')}
            >
              هەموو
            </button>
            <button 
              className={`btn ${gender === 'male' ? 'btn-primary' : 'btn-outline'} text-sm py-1`}
              onClick={() => setGender('male')}
            >
              کوڕان
            </button>
            <button 
              className={`btn ${gender === 'female' ? 'btn-primary' : 'btn-outline'} text-sm py-1`}
              onClick={() => setGender('female')}
            >
              کچان
            </button>
            <button 
              className={`btn ${gender === 'neutral' ? 'btn-primary' : 'btn-outline'} text-sm py-1`}
              onClick={() => setGender('neutral')}
            >
              هەردوو رەگەز
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NameGenerator;
