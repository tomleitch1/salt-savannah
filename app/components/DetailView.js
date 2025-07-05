"use client";

import React from 'react';
import DestinationDetailView from './DestinationDetailView';
import InspirationDetailView from './InspirationDetailView';

const DetailView = ({ 
  experience, 
  onBack, 
  isLocked, 
  onScroll, 
  filterType, 
  onFilterChange,
  onCuratedTripsClick,
  restoreSubTab
}) => {
  // Simple check - if it has sourceType, use it, otherwise guess from ID
  const isDestination = experience.sourceType === 'destinations' || experience.id >= 13;

  // Simple router - delegate to appropriate detail view
  if (isDestination) {
    return (
      <DestinationDetailView 
        experience={experience}
        onBack={onBack}
        isLocked={isLocked}
        onScroll={onScroll}
        filterType={filterType}
        onFilterChange={onFilterChange}
        onCuratedTripsClick={onCuratedTripsClick}
        restoreSubTab={restoreSubTab}
      />
    );
  } else {
    return (
      <InspirationDetailView 
        experience={experience}
        onBack={onBack}
        isLocked={isLocked}
        onScroll={onScroll}
        filterType={filterType}
        onFilterChange={onFilterChange}
        onCuratedTripsClick={onCuratedTripsClick}
        restoreSubTab={restoreSubTab}
      />
    );
  }
};

export default DetailView;