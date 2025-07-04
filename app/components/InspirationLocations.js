"use client";

const InspirationLocations = ({ inspiration }) => {
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
          <div className="text-sm">Our Favourite Locations for {inspiration.title}</div>
          <div className="text-xs opacity-60">TBC - Design & CMS Integration</div>
        </div>
      </div>
      
      {/* TODO: This will become:
          - Curated destinations perfect for this inspiration type
          - Location-specific reasons why it's ideal for this experience
          - Seasonal recommendations for optimal timing
          - Success stories from each location
          - CMS-driven content: inspiration.content.locations
      */}
    </div>
  );
};

export default InspirationLocations;