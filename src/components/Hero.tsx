import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-primary-500 text-white py-12 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold mb-4">ناوی مناڵەکم</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            دۆزینەوەی ناوێکی جوان و واتادار بۆ منداڵەکەت
          </p>
        </motion.div>
        
        <motion.div
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-lg mb-2">
            بە دەیان ناو لەگەڵ واتاکانیان
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">وەرگیراو لە سروشت</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">خۆشەویستی</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">ناوە باوەکان</span>
            <span className="px-3 py-1 bg-white/20 rounded-full text-sm">کەسایەتی ناودار</span>
          </div>
        </motion.div>
        
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a href="#generator" className="btn btn-secondary">
            ناوێکی هەڕەمەکی
          </a>
          <Link to="/names" className="btn btn-primary">
            لیستی ناوەکان
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero
