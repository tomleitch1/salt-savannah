"use client";

const InspirationLocations = ({ experience }) => {
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
          <div className="text-lg mb-2">Our Favourite Locations for {experience?.title || 'this experience'}</div>
          <div className="text-sm opacity-80 max-w-md mb-4">
            Curated destinations perfect for this inspiration type
          </div>
          <div className="text-xs opacity-60">TBC - Design & CMS Integration</div>
        </div>
      </div>
    </div>
  );
};

export default InspirationLocations;