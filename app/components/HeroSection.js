import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Pure Hero Background - Just photography */}
      <section className="relative min-h-screen w-full overflow-hidden">
        
        {/* Pure background - your photography will be set via CSS or background-image */}
        
        {/* Optional: Subtle gradient for navigation visibility only */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/10 to-transparent z-10" />
        
      </section>
    </div>
  );
};

export default HeroSection;