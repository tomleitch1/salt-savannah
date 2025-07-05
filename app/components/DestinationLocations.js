"use client";

const DestinationLocations = ({ experience }) => {
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
          <div className="text-lg mb-2">Key Locations in {experience.title}</div>
          <div className="text-sm opacity-80 max-w-md mb-4">
            Explore the must-visit regions and hidden gems within this destination
          </div>
          <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
        </div>
      </div>
      
      {/* TODO: This will become:
          - Interactive regional map with clickable areas
          - Location cards with highlights and best times to visit
          - Transportation options between locations
          - Suggested itinerary combinations
          - Climate and seasonal information
          - Photography hotspots and viewpoints
          - CMS-driven content: experience.content.locations
      */}
    </div>
  );
};

export default DestinationLocations;