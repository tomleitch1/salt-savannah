"use client"

import React, { useState, useEffect } from 'react';
import DestinationCards from './DestinationCards';

const hideScrollbarCSS = `
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .hide-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const ExperienceDetailView = ({ experience, onBack, collectionsPos, isLocked, handleCollectionsScroll, filterType, handleFilterChange }) => {
  const [activeSubTab, setActiveSubTab] = useState('experiences');

  return (
    <div 
      className="fixed left-0 right-0 z-30 px-4 lg:px-6 xl:px-8 transition-all duration-300 ease-out"
      style={{
        top: `${collectionsPos.top}px`,
        height: collectionsPos.height,
        overflow: collectionsPos.overflow
      }}
    >
      <div className={`max-w-7xl mx-auto ${isLocked ? 'h-full' : ''}`}>
        <div 
          className={`relative rounded-2xl lg:rounded-3xl ${isLocked ? 'h-full' : ''} transform hover:scale-[1.02] transition-all duration-300`}
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(20px)',
            border: 'none',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden'
          }}
        >
          <div className="flex-shrink-0 border-b border-white/10 p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button 
                  onClick={onBack}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div>
                  <h3 className="text-white text-xl lg:text-2xl font-medium mb-3">{experience.title}</h3>
                  <div className="flex items-center gap-8">
                    <button 
                      onClick={() => setActiveSubTab('experiences')}
                      className={`text-base font-medium transition-all duration-300 ${
                        activeSubTab === 'experiences' 
                          ? 'text-[#CBD5FF]' 
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      Experiences
                    </button>
                    <button 
                      onClick={() => setActiveSubTab('locations')}
                      className={`text-base font-medium transition-all duration-300 ${
                        activeSubTab === 'locations' 
                          ? 'text-[#CBD5FF]' 
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      Locations
                    </button>
                    <button 
                      onClick={() => setActiveSubTab('properties')}
                      className={`text-base font-medium transition-all duration-300 ${
                        activeSubTab === 'properties' 
                          ? 'text-[#CBD5FF]' 
                          : 'text-white/60 hover:text-white/80'
                      }`}
                    >
                      Our favourite Properties
                    </button>
                  </div>
                </div>
                <div className="flex-1 h-px bg-white/20 ml-4"></div>
              </div>
              <div 
                className="flex items-center rounded-2xl p-1 transition-all duration-300"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                {['all', 'savannah', 'sea'].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => handleFilterChange(filter)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                      filterType === filter 
                        ? 'text-white shadow-lg' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                    style={{
                      background: filterType === filter 
                        ? 'rgba(203, 213, 255, 0.2)' 
                        : 'transparent',
                      boxShadow: filterType === filter 
                        ? '0 4px 12px rgba(203, 213, 255, 0.2)' 
                        : 'none',
                    }}
                  >
                    {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`flex-1 hide-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
            onScroll={handleCollectionsScroll}
            style={{ 
              height: isLocked ? 'calc(100% - 160px)' : 'auto'
            }}
          >
            <div className="p-6 lg:p-8">
              <div 
                className="relative rounded-2xl overflow-hidden h-80 lg:h-96 xl:h-80 2xl:h-[500px] mb-6"
                style={{
                  background: experience.gradient,
                }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                  <div className="text-white flex-1">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3">{experience.title}</h2>
                    <p className="text-base lg:text-lg xl:text-lg 2xl:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                  <div className="xl:block 2xl:hidden ml-4">
                    <div className="flex flex-col items-center">
                      <svg 
                        className="w-6 h-6 text-white/40 animate-bounce" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        style={{
                          animationDuration: '2s',
                          animationIterationCount: 'infinite'
                        }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                      <span className="text-white/30 text-xs mt-1 whitespace-nowrap">scroll to explore</span>
                    </div>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 rounded-lg text-xs text-white/60"
                     style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                  📸 Stunning Image Placeholder
                </div>
              </div>
              
              <div className="mb-6">
                <div 
                  className="px-4 py-3 rounded-2xl text-sm text-white/80 leading-relaxed"
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  From the sweeping savannahs of the Mara to the quiet coastline of Lamu, Kenya offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps. It's one of the most diverse and well-connected destinations in Africa—ideal for combining wildlife, culture, and coast in a single trip.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const InspirationsHub = () => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [collectionsScrollY, setCollectionsScrollY] = useState(0);
  const [activeTab, setActiveTab] = useState('inspirations');
  const [filterType, setFilterType] = useState('all');
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const destinationCards = [
    { id: 13, title: 'Kenya', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(245, 158, 11, 0.6), rgba(251, 146, 60, 0.6))', description: 'Endless plains and incredible wildlife in the heart of East Africa' },
    { id: 14, title: 'Tanzania', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(34, 197, 94, 0.6), rgba(5, 150, 105, 0.6))', description: 'Serengeti plains and Ngorongoro Crater adventures' },
    { id: 15, title: 'South Africa', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(147, 51, 234, 0.6), rgba(99, 102, 241, 0.6))', description: 'Wine lands, safaris, and diverse landscapes' },
    { id: 16, title: 'Zambia', type: 'savannah', gradient: 'linear-gradient(135deg, rgba(59, 130, 246, 0.6), rgba(14, 165, 233, 0.6))', description: 'Victoria Falls and pristine wilderness experiences' },
    { id: 17, title: 'Seychelles', type: 'sea', gradient: 'linear-gradient(135deg, rgba(6, 182, 212, 0.6), rgba(59, 130, 246, 0.6))', description: 'Paradise islands with pristine beaches and crystal waters' },
    { id: 18, title: 'Zanzibar', type: 'sea', gradient: 'linear-gradient(135deg, rgba(236, 72, 153, 0.6), rgba(244, 63, 94, 0.6))', description: 'Spice islands with rich culture and stunning coastlines' }
  ];

  const getCurrentCards = () => {
    const cards = activeTab === 'inspirations' ? inspirationCards : destinationCards;
    return filterType === 'all' ? cards : cards.filter(card => card.type === filterType);
  };

  const currentCards = getCurrentCards();
  const navbarHeight = 80;
  const phase1End = 80;
  const phase2End = 300;

  const getPhase = () => {
    if (scrollY <= phase1End) return 1;
    if (scrollY <= phase2End) return 2;
    return 3;
  };

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const getCarouselPosition = () => {
    const phase = getPhase();
    if (phase === 1) {
      return { bottom: 32, opacity: 1, zIndex: 40, pointerEvents: 'auto' };
    } else if (phase === 2) {
      const progress = (scrollY - phase1End) / (phase2End - phase1End);
      const easedProgress = easeInOutCubic(progress);
      const startBottom = 32;
      const endBottom = windowHeight - navbarHeight + 50;
      const currentBottom = startBottom + (easedProgress * (endBottom - startBottom));
      return { bottom: currentBottom, opacity: 1, zIndex: 40, pointerEvents: 'auto' };
    } else {
      return { bottom: windowHeight + 100, opacity: 1, zIndex: 40, pointerEvents: 'none' };
    }
  };

  const getCollectionsPosition = () => {
    const phase = getPhase();
    if (phase === 1) {
      return { top: windowHeight + 20, height: 'auto', lockProgress: 0, overflow: 'visible' };
    } else if (phase === 2) {
      const progress = (scrollY - phase1End) / (phase2End - phase1End);
      const easedProgress = easeInOutCubic(progress);
      const startTop = windowHeight + 20;
      const endTop = navbarHeight + 20;
      const currentTop = startTop - (easedProgress * (startTop - endTop));
      return { top: currentTop, height: 'auto', lockProgress: 0, overflow: 'visible' };
    } else {
      const lockedTop = navbarHeight + 20;
      const maxHeight = windowHeight - lockedTop - 20;
      return { top: lockedTop, height: maxHeight, lockProgress: 1, overflow: 'hidden' };
    }
  };

  const carouselPos = getCarouselPosition();
  const collectionsPos = getCollectionsPosition();
  const isLocked = collectionsPos.lockProgress >= 1;

  const toggleCardSelection = (cardId) => {
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
  };

  const handleCollectionsScroll = (e) => {
    if (collectionsPos.lockProgress >= 1) {
      setCollectionsScrollY(e.target.scrollTop);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        ${hideScrollbarCSS}
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes gentleBounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }
        .fade-in-slow {
          animation: fadeIn 0.6s ease-out;
        }
        .slide-in-slow {
          animation: slideUp 0.6s ease-out;
          animation-delay: 0.2s;
          animation-fill-mode: both;
        }
        .animate-bounce {
          animation: gentleBounce 2s infinite;
        }
      ` }} />
      
      <div className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-xs text-[#CBD5FF]">
        {windowWidth}px • {activeTab} • {filterType} • Selected: {selectedCards.size}
      </div>
      
      <div 
        className="fixed left-0 right-0 px-4 lg:px-6 xl:px-8 transition-all duration-300 ease-out"
        style={{
          bottom: `${carouselPos.bottom}px`,
          opacity: carouselPos.opacity,
          zIndex: carouselPos.zIndex,
          pointerEvents: carouselPos.pointerEvents
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-48 md:h-52 lg:h-64 xl:h-64 2xl:h-72 transform hover:scale-[1.02] transition-all duration-300"
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <div 
              className="absolute inset-0 rounded-2xl lg:rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
              }}
            />
            <div className="relative h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-4 p-4 lg:p-3 xl:p-3">
              <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start lg:pr-4 space-y-3 lg:space-y-4">
                <div className="w-full">
                  <img 
                    src="/Tagline.png" 
                    alt="Salt & Savannah Tagline"
                    className="w-full max-w-sm lg:max-w-full h-auto object-contain"
                  />
                </div>
                <div className="flex justify-end gap-2 lg:gap-3 w-full max-w-sm lg:max-w-full">
                  <button 
                    className="group relative overflow-hidden rounded-2xl px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <span className="relative text-white/80 group-hover:text-[#CBD5FF] transition-colors duration-300 flex items-center justify-center gap-2">
                      <img 
                        src="/phone.png" 
                        alt="Phone" 
                        className="w-3 lg:w-4 xl:w-4 h-3 lg:h-4 xl:h-4"
                        style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(678%) hue-rotate(316deg) brightness(99%) contrast(96%)' }}
                      />
                      Contact Us
                    </span>
                  </button>
                </div>
              </div>
              <div className="lg:col-span-7 relative h-full">
                <div 
                  className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden"
                  style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <DestinationCards />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedExperience ? (
        <ExperienceDetailView 
          experience={selectedExperience} 
          onBack={() => setSelectedExperience(null)}
          collectionsPos={collectionsPos}
          isLocked={isLocked}
          handleCollectionsScroll={handleCollectionsScroll}
          filterType={filterType}
          handleFilterChange={handleFilterChange}
        />
      ) : (
        <div 
          className="fixed left-0 right-0 z-30 px-4 lg:px-6 xl:px-8 transition-all duration-300 ease-out"
          style={{
            top: `${collectionsPos.top}px`,
            height: collectionsPos.height,
            overflow: collectionsPos.overflow
          }}
        >
          <div className={`max-w-7xl mx-auto ${isLocked ? 'h-full' : ''}`}>
            <div 
              className={`relative rounded-2xl lg:rounded-3xl ${isLocked ? 'h-full' : ''} transform hover:scale-[1.02] transition-all duration-300`}
              style={{
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(20px)',
                border: 'none',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
                overflow: 'hidden'
              }}
            >
              <div className="flex-shrink-0 border-b border-white/10 p-6 lg:p-8 bg-black/20 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <button className="text-white/60 hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <div className="flex items-center gap-6">
                      <button
                        onClick={() => handleTabChange('inspirations')}
                        className={`text-xl lg:text-2xl font-medium transition-all duration-300 ${
                          activeTab === 'inspirations' ? 'text-white' : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        Inspirations
                      </button>
                      <button
                        onClick={() => handleTabChange('destinations')}
                        className={`text-xl lg:text-2xl font-medium transition-all duration-300 ${
                          activeTab === 'destinations' ? 'text-white' : 'text-white/50 hover:text-white/80'
                        }`}
                      >
                        Destinations
                      </button>
                    </div>
                    <div className="flex-1 h-px bg-white/20 ml-4"></div>
                  </div>
                  <div 
                    className="flex items-center rounded-2xl p-1 transition-all duration-300"
                    style={{
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                  >
                    {['all', 'savannah', 'sea'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => handleFilterChange(filter)}
                        className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                          filterType === filter ? 'text-white shadow-lg' : 'text-white/60 hover:text-white/80'
                        }`}
                        style={{
                          background: filterType === filter ? 'rgba(203, 213, 255, 0.2)' : 'transparent',
                          boxShadow: filterType === filter ? '0 4px 12px rgba(203, 213, 255, 0.2)' : 'none',
                        }}
                      >
                        {filter === 'all' ? 'All' : filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div 
                className={`flex-1 hide-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
                onScroll={handleCollectionsScroll}
                style={{ height: isLocked ? 'calc(100% - 120px)' : 'auto' }}
              >
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-4 xl:gap-5 2xl:gap-6">
                    {currentCards.map((card) => (
                      <div 
                        key={card.id}
                        className={`relative overflow-hidden rounded-2xl h-48 md:h-56 lg:h-52 xl:h-56 2xl:h-64 cursor-pointer transition-all duration-300 ${
                          selectedCards.has(card.id) ? 'ring-4 ring-[#CBD5FF] ring-opacity-60 scale-[1.02] shadow-2xl' : 'hover:scale-[1.02]'
                        }`}
                        style={{ background: card.gradient }}
                        onClick={() => toggleCardSelection(card.id)}
                        onMouseEnter={() => setHoveredCard(card.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="absolute inset-0 bg-black/40"></div>
                        {selectedCards.has(card.id) && (
                          <div 
                            className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold animate-pulse"
                            style={{
                              background: 'rgba(203, 213, 255, 0.9)',
                              backdropFilter: 'blur(10px)',
                              boxShadow: '0 4px 12px rgba(203, 213, 255, 0.4)',
                            }}
                          >
                            ✓
                          </div>
                        )}
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white text-lg md:text-xl font-semibold mb-2">{card.title}</h4>
                          {hoveredCard === card.id && (
                            <div className="relative hover-content entering">
                              <div 
                                className="absolute -inset-2 rounded-lg fade-in-slow"
                                style={{
                                  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent)',
                                  backdropFilter: 'blur(8px)',
                                }}
                              />
                              <div className="relative z-10">
                                <p className="text-white/90 text-sm mb-3 leading-relaxed slide-in-slow">
                                  {card.description}
                                </p>
                                <div className="flex gap-2 slide-in-slow">
                                  <button 
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{
                                      background: 'rgba(255, 255, 255, 0.15)',
                                      backdropFilter: 'blur(15px)',
                                      border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <span className="text-red-400 text-sm">❤️</span>
                                    <span className="text-white">Add to Board</span>
                                  </button>
                                  <button 
                                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{
                                      background: 'rgba(255, 255, 255, 0.15)',
                                      backdropFilter: 'blur(15px)',
                                      border: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setSelectedExperience(card);
                                    }}
                                  >
                                    <img 
                                      src="/staricon.png" 
                                      alt="Star" 
                                      className="w-3 h-3"
                                      style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(678%) hue-rotate(316deg) brightness(99%) contrast(96%)' }}
                                    />
                                    <span className="text-white">Explore More</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="h-[200vh] w-full relative z-10"></div>
    </>
  );
};

export default InspirationsHub;