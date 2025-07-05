"use client";

import React, { useState, useEffect } from 'react';
import SubTabNavigation from './SubTabNavigation';
import InspirationOverview from './InspirationOverview';
import InspirationLocations from './InspirationLocations';
import InspirationProperties from './InspirationProperties';

const InspirationDetailView = ({ 
  experience, 
  onBack, 
  isLocked, 
  onScroll, 
  filterType, 
  onFilterChange,
  onCuratedTripsClick,
  restoreSubTab
}) => {
  const [activeSubTab, setActiveSubTab] = useState('overview');
  
  // Restore sub-tab when coming back from curated trips
  useEffect(() => {
    if (restoreSubTab && restoreSubTab !== activeSubTab) {
      setActiveSubTab(restoreSubTab);
    }
  }, [restoreSubTab, experience]);

  // Inspiration tabs configuration
  const inspirationTabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'locations', label: 'Our Favourite Locations' },
    { id: 'properties', label: 'Our Favourite Properties' }
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

  // Enhanced curated trips click handler
  const handleCuratedTripsClick = () => {
    onCuratedTripsClick(activeSubTab);
  };

  // Render appropriate tab content
  const renderTabContent = () => {
    switch(activeSubTab) {
      case 'overview':
        return <InspirationOverview experience={experience} />;
      case 'locations':
        return <InspirationLocations experience={experience} />;
      case 'properties':
        return <InspirationProperties experience={experience} />;
      default:
        return <InspirationOverview experience={experience} />;
    }
  };

  return (
    <div className="h-full flex flex-col">
      <style dangerouslySetInnerHTML={{ __html: customScrollbarCSS }} />
      
      {/* Header with sub-tabs and curated trips button */}
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
              <SubTabNavigation 
                activeTab={activeSubTab}
                onTabChange={setActiveSubTab}
                tabs={inspirationTabs}
              />
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
            onClick={handleCuratedTripsClick}
          >
            <span className="text-red-400 text-base">❤️</span>
            <span className="text-white/80 hover:text-[#CBD5FF] transition-colors duration-300">
              Curated Trips
            </span>
          </button>
        </div>
      </div>
      
      {/* Content - Delegated to specific tab components */}
      <div 
        className={`flex-1 custom-scrollbar ${isLocked ? 'overflow-y-auto' : 'overflow-visible'}`}
        onScroll={onScroll}
        style={{ 
          height: isLocked ? 'calc(100% - 160px)' : 'auto'
        }}
      >
        <div className="p-4 lg:p-6">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};

export default InspirationDetailView;