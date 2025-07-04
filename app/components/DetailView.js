"use client";

import React, { useState } from 'react';
import ExpandableGrid from './ExpandableGrid';
import KenyaMap from './KenyaMap';

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

  // THIS IS THE KEY - RENDER DIFFERENT CONTENT BASED ON ACTIVE TAB
  const renderTabContent = () => {
    // DESTINATIONS - Full implementation for Overview, placeholders for others
    if (isDestination) {
      switch(activeSubTab) {
        case 'overview':
          return (
            <div className="space-y-6">
              {/* Hero Image - INCREASED HEIGHT */}
              <div 
                className="relative rounded-2xl overflow-hidden h-96 lg:h-[390px] xl:h-[390px] 2xl:h-[500px] mb-3"
                style={{
                  backgroundImage: experience.heroImage 
                    ? `url(${experience.heroImage})`
                    : experience.gradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="absolute bottom-0 left-0 right-0 h-3/4"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)'
                  }}
                />
                
                <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                  <div className="text-white flex-1 relative z-10">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3">{experience.title}</h2>
                    <p className="text-base lg:text-lg xl:text-lg 2xl:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {experience.content?.overview?.heroDescription || experience.description}
                    </p>
                  </div>
                  <div className="xl:block 2xl:hidden ml-4 relative z-10">
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
              </div>
              
              {/* Overview Description - CMS Driven */}
              <div className="mb-6">
                <div 
                  className="px-4 py-3 rounded-2xl text-sm text-white/80 leading-relaxed"
                  style={{ 
                    background: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* CMS Content: experience.content.overview.description */}
                  {experience.content?.overview?.description || 
                   `From the sweeping savannahs of the Mara to the quiet coastline of Lamu, ${experience.title} offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps.`
                  }
                </div>
              </div>

              {/* Interactive Experiences Section - DESTINATIONS OVERVIEW FOCUS */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left - Expandable Grid */}
                <div className="h-96">
                  <ExpandableGrid />
                </div>
                
                {/* Right - Map */}
                <div className="space-y-4">
                  <KenyaMap />
                </div>
              </div>
            </div>
          );

        case 'experiences':
          return (
            <div className="space-y-6">
              <div 
                className="h-96 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">🎯</div>
                  <div className="text-sm">Experiences Tab</div>
                  <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
                </div>
              </div>
            </div>
          );

        case 'properties':
          return (
            <div className="space-y-6">
              <div 
                className="h-96 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">🏨</div>
                  <div className="text-sm">Properties Tab</div>
                  <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
                </div>
              </div>
            </div>
          );

        case 'locations':
          return (
            <div className="space-y-6">
              <div 
                className="h-96 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-sm">Locations Tab</div>
                  <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
                </div>
              </div>
            </div>
          );

        default:
          return (
            <div className="text-white">
              <p>Content for {activeSubTab} tab...</p>
            </div>
          );
      }
    }
    
    // INSPIRATIONS - Hero + placeholder content only
    else {
      switch(activeSubTab) {
        case 'overview':
          return (
            <div className="space-y-6">
              {/* Hero Image - Same increased size for inspirations */}
              <div 
                className="relative rounded-2xl overflow-hidden h-96 lg:h-[390px] xl:h-[390px] 2xl:h-[500px] mb-6"
                style={{
                  backgroundImage: experience.heroImage 
                    ? `url(${experience.heroImage})`
                    : experience.gradient,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="absolute bottom-0 left-0 right-0 h-3/4"
                  style={{
                    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)'
                  }}
                />
                
                <div className="absolute inset-0 flex items-end p-6 lg:p-8">
                  <div className="text-white flex-1 relative z-10">
                    <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3">{experience.title}</h2>
                    <p className="text-base lg:text-lg xl:text-lg 2xl:text-xl text-white/90 max-w-2xl leading-relaxed">
                      {experience.content?.overview?.heroDescription || experience.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Placeholder for inspiration content */}
              <div 
                className="h-64 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">✨</div>
                  <div className="text-sm">Inspiration Overview Content</div>
                  <div className="text-xs opacity-60">TBC - Design & Layout to be determined</div>
                </div>
              </div>
            </div>
          );

        case 'locations':
          return (
            <div className="space-y-6">
              <div 
                className="h-96 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-sm">Our Favourite Locations</div>
                  <div className="text-xs opacity-60">TBC - Design & CMS Integration</div>
                </div>
              </div>
            </div>
          );

        case 'properties':
          return (
            <div className="space-y-6">
              <div 
                className="h-96 rounded-2xl flex items-center justify-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.3)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div className="text-white/60 text-center">
                  <div className="text-2xl mb-2">🏨</div>
                  <div className="text-sm">Our Favourite Properties</div>
                  <div className="text-xs opacity-60">TBC - Design & CMS Integration</div>
                </div>
              </div>
            </div>
          );

        default:
          return (
            <div className="text-white">
              <p>Content for {activeSubTab} tab...</p>
            </div>
          );
      }
    }
  };

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
          
          {/* Curated Trips Button */}
          <button
            className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg mr-4"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
            onClick={() => {
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
      
      {/* Content - THIS IS WHERE THE MAGIC HAPPENS */}
      <div 
        className={`flex-1 custom-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
        onScroll={onScroll}
        style={{ 
          height: isLocked ? 'calc(100% - 160px)' : 'auto'
        }}
      >
        <div className="p-4 lg:p-6">
          {/* This calls the renderTabContent function which shows different content based on activeSubTab */}
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default DetailView;