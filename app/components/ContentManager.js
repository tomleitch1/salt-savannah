"use client";

import React, { useState } from 'react';
import TabNavigation from './TabNavigation';
import FilterControls from './FilterControls';
import CardGrid from './CardGrid';
import DetailView from './DetailView';
import CuratedTripsView from './CuratedTripsView';
import { destinations } from '../data/destinations';

const ContentManager = ({ isLocked, collectionsPos, windowWidth, windowHeight, scrollY }) => {
  const [activeTab, setActiveTab] = useState('inspirations');
  const [filterType, setFilterType] = useState('all');
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [showCuratedTrips, setShowCuratedTrips] = useState(false);
  const [previousExperience, setPreviousExperience] = useState(null); // Track where we came from
  const [previousSubTab, setPreviousSubTab] = useState(null); // Track which sub-tab we were on

  // Sample inspiration data
  const inspirationCards = [
    { id: 1, title: 'Luxury Safari', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(251, 146, 60, 0.4))', description: 'Exclusive camps with unparalleled service in pristine wilderness' },
    { id: 2, title: 'Wilderness Adventure', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4), rgba(5, 150, 105, 0.4))', description: 'Remote locations where nature reigns supreme and wildlife roams free' },
    { id: 3, title: 'Wildlife Photography', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(250, 204, 21, 0.4), rgba(245, 158, 11, 0.4))', description: 'Perfect lighting and positioning for capturing the Big Five' },
    { id: 4, title: 'Cultural Immersion', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(14, 165, 233, 0.4))', description: 'Authentic encounters with local communities and ancient traditions' },
    { id: 5, title: 'Romantic Getaway', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(244, 63, 94, 0.4))', description: 'Intimate settings under starlit African skies' },
    { id: 6, title: 'Conservation Experience', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.4), rgba(99, 102, 241, 0.4))', description: 'Participate in wildlife protection and habitat restoration' },
    { id: 7, title: 'Private Island Retreat', type: 'sea', gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.4), rgba(59, 130, 246, 0.4))', description: 'Secluded paradise with pristine beaches and crystal waters' },
    { id: 8, title: 'Scuba Diving', type: 'sea', gradient: 'linear-gradient(135deg, rgba(14, 165, 233, 0.4), rgba(6, 182, 212, 0.4))', description: 'Explore vibrant coral reefs and encounter marine life' },
    { id: 9, title: 'Sailing Adventure', type: 'sea', gradient: 'linear-gradient(135deg, rgba(99, 102, 241, 0.4), rgba(139, 92, 246, 0.4))', description: 'Navigate pristine waters between tropical islands' },
    { id: 10, title: 'Beach Luxury', type: 'sea', gradient: 'linear-gradient(135deg, rgba(244, 63, 94, 0.4), rgba(251, 146, 60, 0.4))', description: 'World-class resorts on untouched coastlines' },
    { id: 11, title: 'Marine Conservation', type: 'sea', gradient: 'linear-gradient(135deg, rgba(5, 150, 105, 0.4), rgba(6, 182, 212, 0.4))', description: 'Protect coral reefs and support marine ecosystem research' },
    { id: 12, title: 'Sunset Cruises', type: 'sea', gradient: 'linear-gradient(135deg, rgba(251, 146, 60, 0.4), rgba(252, 211, 77, 0.4))', description: 'Romantic evenings on the Indian Ocean' }
  ];

  const destinationCards = destinations;

  const getCurrentCards = () => {
    const cards = activeTab === 'inspirations' ? inspirationCards : destinationCards;
    return filterType === 'all' ? cards : cards.filter(card => card.type === filterType);
  };

  const handleCardToggle = (cardId) => {
    const newSelected = new Set(selectedCards);
    if (newSelected.has(cardId)) {
      newSelected.delete(cardId);
    } else {
      newSelected.add(cardId);
    }
    setSelectedCards(newSelected);
  };

  const handleFilterChange = (newFilter) => {
    setFilterType(newFilter);
    setSelectedCards(new Set());
  };

  const handleTabChange = (newTab) => {
    setActiveTab(newTab);
    setSelectedCards(new Set());
    setFilterType('all');
    setShowCuratedTrips(false);
  };

  const handleCardExplore = (card) => {
    setSelectedExperience(card);
    setShowCuratedTrips(false);
    setPreviousExperience(null); // Clear previous when exploring new card
    setPreviousSubTab(null);
  };

  const handleBackFromDetail = () => {
    setSelectedExperience(null);
    setPreviousExperience(null);
    setPreviousSubTab(null);
  };

  const handleBackFromCuratedTrips = () => {
    setShowCuratedTrips(false);
    // Restore the previous experience if we came from a detail view
    if (previousExperience) {
      setSelectedExperience(previousExperience);
      setPreviousExperience(null);
      // Clear previousSubTab after one use - DetailView will handle restoration
      setPreviousSubTab(null);
    }
  };

  const handleCuratedTripsClick = (currentSubTab = null) => {
    // Save current experience and sub-tab before going to curated trips
    setPreviousExperience(selectedExperience);
    setPreviousSubTab(currentSubTab); // Save the current sub-tab
    setShowCuratedTrips(true);
    setSelectedExperience(null);
  };

  const handleCollectionsScroll = (e) => {
    if (isLocked) {
      // Handle independent scroll
    }
  };

  const animationCSS = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .fade-in-slow {
      animation: fadeIn 0.6s ease-out;
    }
    .slide-in-slow {
      animation: slideUp 0.6s ease-out;
      animation-delay: 0.2s;
      animation-fill-mode: both;
    }
  `;

  // Show curated trips view
  if (showCuratedTrips) {
    return (
      <div className="h-full">
        <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
        <CuratedTripsView 
          onBack={handleBackFromCuratedTrips}
          isLocked={isLocked}
          onScroll={handleCollectionsScroll}
        />
      </div>
    );
  }

  // Show detail view
  if (selectedExperience) {
    return (
      <div className="h-full">
        <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
        <DetailView 
          experience={selectedExperience}
          onBack={handleBackFromDetail}
          isLocked={isLocked}
          onScroll={handleCollectionsScroll}
          filterType={filterType}
          onFilterChange={handleFilterChange}
          onCuratedTripsClick={handleCuratedTripsClick}
          restoreSubTab={previousSubTab} // Pass the sub-tab to restore
        />
      </div>
    );
  }

  // Main grid view
  return (
    <div className="h-full flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: animationCSS }} />
      
      {/* Header Section */}
      <div className="flex-shrink-0 border-b border-white/10 p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="text-white/60 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <TabNavigation 
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
            <div className="flex-1 h-px bg-white/20 ml-4"></div>
          </div>
          
          {/* Right side: Curated Trips + Filter Controls */}
          <div className="flex items-center gap-4">
            {/* Curated Trips Button */}
            <button
              className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
              onClick={handleCuratedTripsClick}
            >
              <span className="text-red-400 text-sm">❤️</span>
              <span className="text-white/80 hover:text-[#CBD5FF] transition-colors duration-300">
                Curated Trips
              </span>
            </button>
            
            {/* Filter Controls */}
            <FilterControls 
              filterType={filterType}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div 
        className={`flex-1 hide-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
        onScroll={handleCollectionsScroll}
        style={{ height: isLocked ? 'calc(100% - 120px)' : 'auto' }}
      >
        <div className="p-6 lg:p-8 pb-3 lg:pb-4">
          <CardGrid
            cards={getCurrentCards()}
            selectedCards={selectedCards}
            hoveredCard={hoveredCard}
            onCardToggle={handleCardToggle}
            onCardExplore={handleCardExplore}
            onCardHover={setHoveredCard}
          />
        </div>
      </div>
    </div>
  );
};

export default ContentManager;