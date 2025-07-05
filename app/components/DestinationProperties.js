"use client";

const DestinationProperties = ({ experience }) => {
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
          <div className="text-lg mb-2">Luxury Properties in {experience.title}</div>
          <div className="text-sm opacity-80 max-w-md mb-4">
            Handpicked accommodations that define luxury travel in this destination
          </div>
          <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
        </div>
      </div>
      
      {/* TODO: This will become:
          - Property type filtering (Safari Camps, Beach Resorts, City Hotels, etc.)
          - Property cards with images, amenities, and ratings
          - Luxury level indicators and price ranges
          - Availability calendar integration
          - Virtual tours and photo galleries
          - Guest reviews and testimonials
          - CMS-driven content: experience.content.properties
      */}
    </div>
  );
};

export default DestinationProperties;