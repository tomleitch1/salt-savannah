"use client";

import { useState } from 'react';

const DestinationDetailView = ({ 
  destination, 
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
        <h1 className="text-2xl mb-4">{destination.title} (Destination)</h1>
        <div className="flex gap-4 mb-6">
          <button 
            onClick={() => setActiveSubTab('overview')}
            className={activeSubTab === 'overview' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveSubTab('experiences')}
            className={activeSubTab === 'experiences' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Experiences
          </button>
          <button 
            onClick={() => setActiveSubTab('properties')}
            className={activeSubTab === 'properties' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Properties
          </button>
          <button 
            onClick={() => setActiveSubTab('locations')}
            className={activeSubTab === 'locations' ? 'text-[#CBD5FF]' : 'text-white/60'}
          >
            Locations
          </button>
        </div>
        <div>Active Tab: {activeSubTab}</div>
      </div>
    </div>
  );
};

export default DestinationDetailView;