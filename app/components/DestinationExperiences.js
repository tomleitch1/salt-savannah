"use client";

const DestinationExperiences = ({ experience }) => {
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
          <div className="text-lg mb-2">Experiences in {experience.title}</div>
          <div className="text-sm opacity-80 max-w-md mb-4">
            Discover unique adventures and cultural encounters available in this destination
          </div>
          <div className="text-xs opacity-60">TBC - Layout & CMS Integration</div>
        </div>
      </div>
      
      {/* TODO: This will become:
          - Activity type filtering (Wildlife, Cultural, Adventure, etc.)
          - Experience cards with detailed descriptions
          - Seasonal recommendations for optimal timing
          - Duration and difficulty indicators
          - Booking integration and availability
          - CMS-driven content: experience.content.experiences
      */}
    </div>
  );
};

export default DestinationExperiences;