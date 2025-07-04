"use client";

import { useState } from 'react';

const CuratedTripsView = ({ onBack, isLocked, onScroll }) => {
  const [activeTab, setActiveTab] = useState('trips');

  const curatedTabs = [
    { 
      id: 'trips', 
      label: 'Curated Trips',
      description: 'Personalized trip recommendations'
    },
    { 
      id: 'experiences', 
      label: 'Experiences',
      description: 'Saved experiences and activities'
    },
    { 
      id: 'locations', 
      label: 'Locations',
      description: 'Saved destinations and places'
    },
    { 
      id: 'properties', 
      label: 'Properties',
      description: 'Saved accommodations and lodges'
    }
  ];

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

  const renderTabContent = () => {
    switch(activeTab) {
      case 'trips':
        return (
          <div className="space-y-6">
            {/* Hero Section */}
            <div 
              className="relative rounded-2xl overflow-hidden h-64 lg:h-80 mb-6"
              style={{
                background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.4), rgba(244, 63, 94, 0.4))',
              }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-3">Your Curated Trips</h2>
                  <p className="text-white/90 max-w-md">
                    Personalized recommendations based on your saved destinations and preferences
                  </p>
                </div>
              </div>
            </div>

            {/* Content Placeholder */}
            <div 
              className="h-96 rounded-2xl flex items-center justify-center"
              style={{
                background: 'rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="text-white/60 text-center">
                <div className="text-2xl mb-2">🧳</div>
                <div className="text-lg mb-2">Curated Trip Recommendations</div>
                <div className="text-sm opacity-60 max-w-md">
                  Smart trip suggestions based on saved items, user preferences, and seasonal recommendations
                </div>
                <div className="text-xs opacity-40 mt-2">TBC - Algorithm & Layout Design</div>
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
                <div className="text-lg mb-2">Saved Experiences</div>
                <div className="text-sm opacity-60 max-w-md">
                  Browse and manage your saved experiences, with smart recommendations
                </div>
                <div className="text-xs opacity-40 mt-2">TBC - Saved Items Grid & Recommendations</div>
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
                <div className="text-lg mb-2">Saved Locations</div>
                <div className="text-sm opacity-60 max-w-md">
                  Your saved destinations with intelligent trip planning suggestions
                </div>
                <div className="text-xs opacity-40 mt-2">TBC - Location Management & Trip Building</div>
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
                <div className="text-lg mb-2">Saved Properties</div>
                <div className="text-sm opacity-60 max-w-md">
                  Luxury accommodations you've saved, with availability and booking options
                </div>
                <div className="text-xs opacity-40 mt-2">TBC - Property Grid & Booking Integration</div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="text-white">
            <p>Content for {activeTab} tab...</p>
          </div>
        );
    }
  };

  return (
    <div className="h-full flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: customScrollbarCSS }} />
      
      {/* Header */}
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
            
            {/* Main Title and Sub-tabs */}
            <div>
              <h3 className="text-white text-xl lg:text-2xl font-medium mb-3">Your Board</h3>
              
              {/* Sub-tabs Navigation - Heart only shows on active tab */}
              <div className="flex items-center gap-6 lg:gap-8">
                {curatedTabs.map((tab) => (
                  <button 
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center gap-2 text-base font-medium transition-all duration-300 ${
                      activeTab === tab.id 
                        ? 'text-[#CBD5FF]' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    {/* Heart icon - only shows when active */}
                    <span 
                      className={`transition-all duration-500 ${
                        activeTab === tab.id 
                          ? 'scale-110 opacity-100 rotate-0' 
                          : 'scale-75 opacity-0 -rotate-12'
                      }`}
                    >
                      ❤️
                    </span>
                    
                    {/* Tab label */}
                    <span className="relative">
                      {tab.label}
                      
                      {/* Subtle underline animation for active tab */}
                      <span 
                        className={`absolute -bottom-1 left-0 h-0.5 bg-[#CBD5FF] transition-all duration-300 ${
                          activeTab === tab.id ? 'w-full' : 'w-0'
                        }`}
                      />
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex-1 h-px bg-white/20 ml-4"></div>
          </div>
          
          {/* Share/Export Button */}
          <button
            className="flex items-center gap-2 px-4 py-3 rounded-2xl text-sm font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <span className="text-[#CBD5FF] text-base">📤</span>
            <span className="text-white/80 hover:text-[#CBD5FF] transition-colors duration-300">
              Share Board
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
        <div className="p-6 lg:p-8">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default CuratedTripsView;