"use client";

import React, { useState } from 'react';
import GridCard from './GridCard';
import { expandableSections } from '../content/expandableSections';

const ExpandableGrid = ({ destination = 'kenya' }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  
  // Get sections for the specified destination
  const sections = expandableSections[destination] || expandableSections.kenya;

  console.log('ExpandableGrid Debug:', { destination, sections, expandableSections });



  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="h-full">
      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(250, 225, 216, 0.3) transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(250, 225, 216, 0.4);
            border-radius: 10px;
            border: none;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(250, 225, 216, 0.6);
          }
        `
      }} />
      
      {/* Grid Container */}
      <div className={`grid grid-cols-2 gap-4 h-full transition-all duration-500 ${expandedCard ? 'grid-rows-1' : 'grid-rows-2'}`}>
        {expandedCard ? (
          // Show only expanded card
          sections
            .filter(section => section.id === expandedCard)
            .map((section) => (
              <GridCard
                key={section.id}
                section={section}
                isExpanded={true}
                onToggle={handleCardToggle}
              />
            ))
        ) : (
          // Show all cards in 2x2 grid
          sections.map((section) => (
            <GridCard
              key={section.id}
              section={section}
              isExpanded={false}
              onToggle={handleCardToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExpandableGrid;