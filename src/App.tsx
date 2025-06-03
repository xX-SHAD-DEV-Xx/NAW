import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Header from './components/Header';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import NameGenerator from './components/NameGenerator';
import NameDisplay from './components/NameDisplay';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import NameList from './components/NameList';

import { Name, Category } from './types';
import { categories, getRandomName, names } from './data/names';

const RouteTitle: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Track page views in Google Analytics or similar
    // Example: ga('send', 'pageview', location.pathname);
  }, [location]);

  return null;
};

const App: React.FC = () => {
  const [currentName, setCurrentName] = useState<Name | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [favoriteIds, setFavoriteIds] = useState<string[]>([]);
  const [favorites, setFavorites] = useState<Name[]>([]);
  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    // Load favoriteIds from localStorage
    const savedFavoriteIds = localStorage.getItem('favoriteIds');
    if (savedFavoriteIds) {
      const parsedFavoriteIds = JSON.parse(savedFavoriteIds);
      setFavoriteIds(parsedFavoriteIds);
      
      // Check if this is a returning user
      const lastVisit = localStorage.getItem('lastVisit');
      if (!lastVisit) {
        setIsReturningUser(false);
      } else {
        setIsReturningUser(true);
        if (parsedFavoriteIds.length > 0) {
          toast.info(`بەخێربێیتەوە! ${parsedFavoriteIds.length} ناوی دڵخوازت هەیە`, {
            position: "top-center",
            autoClose: 3000,
          });
        }
      }
      
      // Update last visit
      localStorage.setItem('lastVisit', new Date().toISOString());
    }
  }, []);

  useEffect(() => {
    // Save favoriteIds to localStorage
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds));

    // Update favorites based on favoriteIds
    const newFavorites = favoriteIds.map(id => {
      return names.find(name => name.id === id)
    }).filter(Boolean) as Name[];
    setFavorites(newFavorites);
  }, [favoriteIds]);

  const handleNameGenerated = (name: Name) => {
    setCurrentName(name);
  };

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category as Category | 'all');
  };

  const handleToggleFavorite = (id: string) => {
    if (favoriteIds.includes(id)) {
      setFavoriteIds(favoriteIds.filter(favId => favId !== id));
      toast.success('ناوەکە لە دڵخوازەکان لابرا', {
        position: "top-center",
        autoClose: 2000,
      });
    } else {
      setFavoriteIds([...favoriteIds, id]);
      toast.success('ناوەکە زیادکرا بۆ دڵخوازەکان', {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col font-kurdish pattern-bg">
        <RouteTitle />
        <ToastContainer position="top-center" rtl theme="colored" />
        <Header />
        
        <Routes>
          <Route path="/" element={
            <>
              <Helmet>
                <title>ناوی مناڵەکم | دۆزینەوەی ناوی کوردی</title>
                <meta name="description" content="دۆزینەوەی ناوی کوردی جوان و واتادار بۆ منداڵەکەت" />
              </Helmet>
              <Hero />
              <main className="flex-grow container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto">
                  <div id="generator" className="scroll-mt-20">
                    <CategoryFilter 
                      categories={[{ id: 'all', label: 'هەموو' }, ...categories]}
                      selectedCategory={selectedCategory}
                      onSelectCategory={handleSelectCategory}
                    />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <NameGenerator 
                          selectedCategory={selectedCategory} 
                          onNameGenerated={handleNameGenerated} 
                        />
                      </div>
                      <div>
                        <NameDisplay 
                          currentName={currentName}
                          isFavorite={!!currentName && favoriteIds.includes(currentName.id)}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      </div>
                    </div>
                    
                    <Favorites 
                      favorites={favorites}
                      onToggleFavorite={handleToggleFavorite}
                    />
                  </div>
                </div>
              </main>
            </>
          } />
          <Route path="/names" element={
            <>
              <Helmet>
                <title>لیستی ناوەکان | ناوی مناڵەکم</title>
                <meta name="description" content="لیستی هەموو ناوە کوردییەکان" />
              </Helmet>
              <NameList favorites={favoriteIds} onToggleFavorite={handleToggleFavorite} />
            </>
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};

export default App;
