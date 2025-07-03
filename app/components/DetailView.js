"use client";

import React, { useState } from 'react';

const DetailView = ({ 
  experience, 
  onBack, 
  isLocked, 
  onScroll, 
  filterType, 
  onFilterChange 
}) => {
  const [activeSubTab, setActiveSubTab] = useState('overview');
  
  // Simple check - if it has sourceType, use it, otherwise guess from ID
  const isDestination = experience.sourceType === 'destinations' || experience.id >= 13;

  // Destination tabs
  const destinationTabs = ['overview', 'experiences', 'properties', 'locations'];
  
  // Inspiration tabs  
  const inspirationTabs = ['overview', 'locations', 'properties'];

  const currentTabs = isDestination ? destinationTabs : inspirationTabs;

  const customScrollbarCSS = `
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: rgba(250, 225, 216, 0.3) transparent;
    }
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    .custom-scrollbar::-webkit-scrollbar-track {
      background: transparent;
      margin-right: 12px;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: rgba(250, 225, 216, 0.4);
      border-radius: 10px;
      border: none;
    }
    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
      background: rgba(250, 225, 216, 0.6);
    }
  `;

  return (
    <div className="h-full flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: customScrollbarCSS }} />
      
      {/* Header - Matching your original style */}
      <div className="flex-shrink-0 border-b border-white/10 p-4 lg:p-5 bg-black/20 backdrop-blur-sm">
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
              {/* Sub-tabs */}
              <div className="flex items-center gap-8">
                {currentTabs.map((tab) => (
                  <button 
                    key={tab}
                    onClick={() => setActiveSubTab(tab)}
                    className={`text-base font-medium transition-all duration-300 ${
                      activeSubTab === tab 
                        ? 'text-[#CBD5FF]' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    {tab === 'locations' && !isDestination ? 'Locations' :
                     tab === 'properties' && !isDestination ? 'Properties' :
                     tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex-1 h-px bg-white/20 ml-4"></div>
          </div>
          
          {/* Filter controls */}
        <button
        className="flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg mr-4"
        style={{
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        onClick={() => {
            // Handle curated trips click - you can add functionality later
            console.log('Curated Trips clicked');
        }}
        >
        <span className="text-red-400 text-base">❤️</span>
        <span className="text-white/80 hover:text-[#CBD5FF] transition-colors duration-300">
            Curated Trips
        </span>
        </button>
        </div>
      </div>
      
      {/* Content */}
      <div 
        className={`flex-1 custom-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
        onScroll={onScroll}
        style={{ 
          height: isLocked ? 'calc(100% - 160px)' : 'auto'
        }}
      >
        <div className="p-4 lg:p-6">
          {/* Hero Image */}
          <div 
            className="relative rounded-2xl overflow-hidden h-80 lg:h-96 xl:h-80 2xl:h-[500px] mb-3"
            style={{ background: experience.gradient }}
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
              📸 {isDestination ? 'Destination' : 'Inspiration'} Image Placeholder
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-12">
            <div 
              className="px-4 py-3 rounded-2xl text-sm text-white/80 leading-relaxed"
              style={{ 
                background: 'rgba(0, 0, 0, 0.25)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
              }}
            >
              {isDestination 
                ? `From the sweeping savannahs of the Mara to the quiet coastline of Lamu, ${experience.title} offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps. It's one of the most diverse and well-connected destinations in Africa—ideal for combining wildlife, culture, and coast in a single trip.`
                : `Experience ${experience.title} across Africa's most spectacular destinations. From expert guides to premium accommodations, every detail is crafted to deliver an exceptional ${experience.title.toLowerCase()} experience.`
              }
            </div>
          </div>

          {/* Tab Content */}
          <div className="mb-3">
            {activeSubTab === 'overview' && (
              <div className="text-white">
                <h3 className="text-xl mb-4">{experience.title} Overview</h3>
                <p className="text-white/80">Overview content for {activeSubTab} tab...</p>
              </div>
            )}
            
            {activeSubTab === 'experiences' && isDestination && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left: Placeholder for Grid */}
                <div className="h-96">
                  <div 
                    className="h-full rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="text-white/60 text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="text-sm">Expandable Grid</div>
                      <div className="text-xs opacity-60">(Experiences)</div>
                    </div>
                  </div>
                </div>
                
                {/* Right: Placeholder for Map */}
                <div>
                  <div 
                    className="h-96 rounded-2xl flex items-center justify-center"
                    style={{
                      background: 'rgba(0, 0, 0, 0.3)',
                      backdropFilter: 'blur(15px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <div className="text-white/60 text-center">
                      <div className="text-2xl mb-2">🗺️</div>
                      <div className="text-sm">{experience.title} Map</div>
                      <div className="text-xs opacity-60">(Interactive Map)</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSubTab === 'properties' && (
              <div className="text-white">
                <h3 className="text-xl mb-4">
                  {isDestination ? `Properties in ${experience.title}` : `Our Favourite Properties for ${experience.title}`}
                </h3>
                <p className="text-white/80">Properties content for {activeSubTab} tab...</p>
              </div>
            )}

            {activeSubTab === 'locations' && (
              <div className="text-white">
                <h3 className="text-xl mb-4">
                  {isDestination ? `Locations within ${experience.title}` : `Our Favourite Locations for ${experience.title}`}
                </h3>
                <p className="text-white/80">Locations content for {activeSubTab} tab...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;