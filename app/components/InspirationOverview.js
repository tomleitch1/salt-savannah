"use client";

const InspirationOverview = ({ experience }) => {
  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <div 
        className="relative rounded-2xl overflow-hidden h-96 lg:h-[390px] xl:h-[390px] 2xl:h-[500px] mb-6"
        style={{
          backgroundImage: experience.heroImage 
            ? `url(${experience.heroImage})`
            : experience.gradient,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute bottom-0 left-0 right-0 h-3/4"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.8) 100%)'
          }}
        />
        
        <div className="absolute inset-0 flex items-end p-6 lg:p-8">
          <div className="text-white flex-1 relative z-10">
            <h2 className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-3">{experience.title}</h2>
            <p className="text-base lg:text-lg xl:text-lg 2xl:text-xl text-white/90 max-w-2xl leading-relaxed">
              {experience.content?.overview?.heroDescription || experience.description}
            </p>
          </div>
        </div>
      </div>
      
      {/* Overview Description */}
      <div className="mb-6">
        <div 
          className="px-4 py-3 rounded-2xl text-sm text-white/80 leading-relaxed"
          style={{ 
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          {experience.content?.overview?.description || 
           `${experience.title} represents the pinnacle of luxury travel experiences. This curated journey combines exceptional service, exclusive access, and unforgettable moments in some of Africa's most spectacular destinations.`
          }
        </div>
      </div>
      
      {/* What Makes This Special Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div 
          className="h-64 rounded-2xl flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="text-white/60 text-center">
            <div className="text-2xl mb-2">✨</div>
            <div className="text-lg mb-2">What Makes This Special</div>
            <div className="text-sm opacity-60">Unique aspects of this inspiration</div>
            <div className="text-xs opacity-40 mt-2">TBC - Content & Design</div>
          </div>
        </div>
        
        <div 
          className="h-64 rounded-2xl flex items-center justify-center"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="text-white/60 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <div className="text-lg mb-2">Perfect For</div>
            <div className="text-sm opacity-60">Ideal traveler profiles</div>
            <div className="text-xs opacity-40 mt-2">TBC - Content & Design</div>
          </div>
        </div>
      </div>
      
      {/* TODO: This will become:
          - Rich content about what makes this inspiration unique
          - Traveler testimonials and success stories
          - Best time to experience this type of travel
          - What to expect and how to prepare
          - Photo gallery showcasing the inspiration
          - CMS-driven content: experience.content.overview
      */}
    </div>
  );
};

export default InspirationOverview;