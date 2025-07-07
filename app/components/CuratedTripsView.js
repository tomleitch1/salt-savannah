"use client";

import React, { useState, useMemo } from 'react';

const CuratedTripsView = ({ onBack, isLocked, onScroll }) => {
  // State management
  const [activeTab, setActiveTab] = useState('trips');
  const [preferences, setPreferences] = useState({
    budget: '$$',
    travelers: 2,
    dateRange: ''
  });

  // Mock saved items data
  const savedItems = [
    { id: 1, type: 'destination', label: 'Kenya', icon: '🇰🇪' },
    { id: 2, type: 'experience', label: 'Walking Safari', icon: '🚶' },
    { id: 3, type: 'tag', label: 'Savannah', icon: '🌾' },
    { id: 4, type: 'destination', label: 'Tanzania', icon: '🇹🇿' },
    { id: 5, type: 'experience', label: 'Wildlife Photography', icon: '📷' },
    { id: 6, type: 'tag', label: 'Luxury', icon: '✨' },
    { id: 7, type: 'destination', label: 'Seychelles', icon: '🏝️' },
    { id: 8, type: 'experience', label: 'Beach Relaxation', icon: '🏖️' }
  ];

  // Mock curated trips data
  const curatedTrips = [
    {
      id: 1,
      title: 'Kenya Walking Safari Adventure',
      summary: 'Intimate wildlife encounters on foot in the Maasai Mara with luxury tented camps',
      destinations: ['Kenya'],
      experiences: ['Walking Safari', 'Wildlife Photography'],
      tags: ['Savannah', 'Luxury'],
      budget: '$$',
      duration: '7 days',
      image: '/safari-placeholder.jpg',
      highlights: ['Maasai Mara', 'Private Conservancy', 'Expert Guide']
    },
    {
      id: 2,
      title: 'Tanzania Great Migration Expedition',
      summary: 'Follow the wildebeest migration with exclusive access to river crossings',
      destinations: ['Tanzania'],
      experiences: ['Wildlife Photography', 'Game Drives'],
      tags: ['Savannah', 'Migration'],
      budget: '$$$',
      duration: '10 days',
      image: '/migration-placeholder.jpg',
      highlights: ['Serengeti', 'Ngorongoro Crater', 'River Crossings']
    },
    {
      id: 3,
      title: 'Seychelles Island Paradise',
      summary: 'Ultimate beach luxury with private villa accommodations and marine adventures',
      destinations: ['Seychelles'],
      experiences: ['Beach Relaxation', 'Snorkeling'],
      tags: ['Beach', 'Luxury'],
      budget: '$$$',
      duration: '5 days',
      image: '/seychelles-placeholder.jpg',
      highlights: ['Private Beach', 'Coral Reefs', 'Overwater Villa']
    },
    {
      id: 4,
      title: 'East Africa Cultural Journey',
      summary: 'Connect with local communities while experiencing incredible wildlife',
      destinations: ['Kenya', 'Tanzania'],
      experiences: ['Cultural Immersion', 'Walking Safari'],
      tags: ['Culture', 'Savannah'],
      budget: '$',
      duration: '12 days',
      image: '/culture-placeholder.jpg',
      highlights: ['Maasai Villages', 'Traditional Ceremonies', 'Local Guides']
    },
    {
      id: 5,
      title: 'Photography Master Class Safari',
      summary: 'Professional wildlife photography workshop with award-winning photographers',
      destinations: ['Kenya', 'Tanzania'],
      experiences: ['Wildlife Photography', 'Walking Safari'],
      tags: ['Photography', 'Savannah', 'Luxury'],
      budget: '$$$',
      duration: '14 days',
      image: '/photo-placeholder.jpg',
      highlights: ['Golden Hour Shoots', 'Private Hides', 'Professional Mentoring']
    }
  ];

  // Tab configuration - matching existing structure
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

  // Budget options
  const budgetOptions = [
    { value: '$', label: 'Budget', desc: 'Under $3k' },
    { value: '$$', label: 'Premium', desc: '$3k - $8k' },
    { value: '$$$', label: 'Luxury', desc: '$8k+' }
  ];

  // Filter curated trips based on saved items
  const filteredTrips = useMemo(() => {
    const savedDestinations = savedItems.filter(item => item.type === 'destination').map(item => item.label);
    const savedExperiences = savedItems.filter(item => item.type === 'experience').map(item => item.label);
    const savedTags = savedItems.filter(item => item.type === 'tag').map(item => item.label);

    return curatedTrips.filter(trip => {
      const hasMatchingDestination = trip.destinations.some(dest => savedDestinations.includes(dest));
      const hasMatchingExperience = trip.experiences.some(exp => savedExperiences.includes(exp));
      const hasMatchingTag = trip.tags.some(tag => savedTags.includes(tag));
      
      return hasMatchingDestination || hasMatchingExperience || hasMatchingTag;
    });
  }, [savedItems]);

  // Get item type styling
  const getItemTypeStyle = (type) => {
    const styles = {
      destination: 'bg-orange-500/20 border-orange-400/30 text-orange-100',
      experience: 'bg-blue-500/20 border-blue-400/30 text-blue-100',
      tag: 'bg-purple-500/20 border-purple-400/30 text-purple-100'
    };
    return styles[type] || 'bg-white/10 border-white/20 text-white';
  };

  // Get budget styling
  const getBudgetStyle = (budget) => {
    const styles = {
      '$': 'bg-green-500/20 text-green-300',
      '$$': 'bg-yellow-500/20 text-yellow-300',
      '$$$': 'bg-red-500/20 text-red-300'
    };
    return styles[budget] || 'bg-gray-500/20 text-gray-300';
  };

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
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
  `;

  const renderTabContent = () => {
    switch(activeTab) {
      case 'trips':
        return (
          <div className="space-y-8">
            {/* Saved Items Panel */}
            <div>
              <h2 className="text-white text-lg font-semibold mb-4 flex items-center gap-2">
                <span>💾</span>
                Your Saved Items
              </h2>
              <div 
                className="p-4 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer border ${getItemTypeStyle(item.type)}`}
                      style={{ backdropFilter: 'blur(10px)' }}
                    >
                      <div className="flex items-center gap-2 whitespace-nowrap">
                        <span>{item.icon}</span>
                        <span>{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Trip Personalization Controls */}
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">Personalize Your Trip</h3>
              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  
                  {/* Budget Selector */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">Budget Range</label>
                    <div className="flex gap-2">
                      {budgetOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => setPreferences(prev => ({ ...prev, budget: option.value }))}
                          className={`flex-1 p-3 rounded-xl text-sm font-medium transition-all duration-300 border ${
                            preferences.budget === option.value
                              ? 'border-white/30 text-white shadow-lg'
                              : 'border-white/10 text-white/70 hover:border-white/20 hover:text-white/90'
                          }`}
                          style={{
                            background: preferences.budget === option.value 
                              ? 'rgba(203, 213, 255, 0.2)' 
                              : 'rgba(255, 255, 255, 0.05)',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <div>{option.value}</div>
                          <div className="text-xs opacity-70">{option.desc}</div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Number of Travelers */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">Travelers</label>
                    <div 
                      className="flex items-center rounded-xl border border-white/10"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)'
                      }}
                    >
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, travelers: Math.max(1, prev.travelers - 1) }))}
                        className="p-3 text-white/70 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                        </svg>
                      </button>
                      <div className="flex-1 text-center text-white font-medium">
                        {preferences.travelers} {preferences.travelers === 1 ? 'Person' : 'People'}
                      </div>
                      <button
                        onClick={() => setPreferences(prev => ({ ...prev, travelers: Math.min(12, prev.travelers + 1) }))}
                        className="p-3 text-white/70 hover:text-white transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </button>
                    </div>
                  </div>

                  {/* Travel Dates */}
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">Travel Dates</label>
                    <input
                      type="date"
                      value={preferences.dateRange}
                      onChange={(e) => setPreferences(prev => ({ ...prev, dateRange: e.target.value }))}
                      className="w-full p-3 rounded-xl border border-white/10 text-white placeholder-white/50 focus:border-white/30 focus:outline-none transition-colors"
                      style={{
                        background: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Curated Trip Feed */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-white text-xl font-semibold">Recommended for You</h3>
                <div className="text-white/60 text-sm">
                  {filteredTrips.length} trips match your interests
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="group rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] cursor-pointer"
                    style={{
                      background: 'rgba(0, 0, 0, 0.25)',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                    }}
                  >
                    {/* Trip Image */}
                    <div 
                      className="relative h-48 overflow-hidden"
                      style={{
                        background: `linear-gradient(135deg, rgba(245, 158, 11, 0.4), rgba(251, 146, 60, 0.4))`
                      }}
                    >
                      <div className="absolute inset-0 bg-black/20"></div>
                      <div className="absolute top-4 left-4">
                        <span 
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getBudgetStyle(trip.budget)}`}
                          style={{ backdropFilter: 'blur(10px)' }}
                        >
                          {trip.budget}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span 
                          className="px-3 py-1 rounded-full text-xs font-medium bg-white/20 text-white"
                          style={{ backdropFilter: 'blur(10px)' }}
                        >
                          {trip.duration}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="text-xs opacity-80 mb-1">📸 Trip Image Placeholder</div>
                      </div>
                    </div>

                    {/* Trip Content */}
                    <div className="p-6">
                      <h4 className="text-white text-xl font-semibold mb-3">{trip.title}</h4>
                      <p className="text-white/80 text-sm leading-relaxed mb-4">{trip.summary}</p>
                      
                      {/* Highlights */}
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {trip.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 rounded-lg text-xs font-medium bg-white/10 text-white/80 border border-white/10"
                              style={{ backdropFilter: 'blur(10px)' }}
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Destinations & Experiences */}
                      <div className="mb-6 space-y-2">
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-white/60">Destinations:</span>
                          <span className="text-white/90">{trip.destinations.join(', ')}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <span className="text-white/60">Experiences:</span>
                          <span className="text-white/90">{trip.experiences.join(', ')}</span>
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button 
                        className="w-full py-3 rounded-xl text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                        style={{
                          background: 'rgba(203, 213, 255, 0.2)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(203, 213, 255, 0.3)',
                        }}
                      >
                        Explore Trip Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredTrips.length === 0 && (
                <div 
                  className="text-center py-12 rounded-2xl"
                  style={{
                    background: 'rgba(0, 0, 0, 0.25)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <div className="text-white/60 text-lg mb-2">No matching trips found</div>
                  <div className="text-white/40 text-sm">Try adjusting your preferences or saving more items</div>
                </div>
              )}
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