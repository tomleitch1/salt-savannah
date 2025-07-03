"use client";

import { useState } from 'react';

const InspirationDetailView = ({ 
  inspiration, 
  onBack, 
  isLocked, 
  onScroll, 
  filterType, 
  onFilterChange 
}) => {
  const [activeSubTab, setActiveSubTab] = useState('overview');

  return (
    <div className="h-full">
      <div className="text-white p-6">
        <button onClick={onBack} className="mb-4 text-white/60 hover:text-white">
          ← Back
        </button>
        <h1 className="text-2xl mb-4">{inspiration.title} (Inspiration)</h1>
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setActiveSubTab('overview')}
            className={activeSubTab === 'overview' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveSubTab('locations')}
            className={activeSubTab === 'locations' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Our Favourite Locations
          </button>
          <button 
            onClick={() => setActiveSubTab('properties')}
            className={activeSubTab === 'properties' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Our Favourite Properties
          </button>
        </div>
        <div>Active Tab: {activeSubTab}</div>
      </div>
    </div>
  );
};

export default InspirationDetailView;