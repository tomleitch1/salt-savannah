"use client";

import React from 'react';
import ExpandableGrid from './ExpandableGrid';
import KenyaMap from './KenyaMap';

const DestinationOverview = ({ experience }) => {
  // Get highlights from CMS content with fallback
  const highlights = experience.content?.overview?.highlights || [];
  
  return (
    <div className="space-y-6">
      {/* Hero Image */}
      <div 
        className="relative rounded-2xl overflow-hidden h-96 lg:h-[390px] xl:h-[390px] 2xl:h-[500px] mb-3"
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
          <div className="xl:block 2xl:hidden ml-4 relative z-10">
            <div className="flex flex-col items-center">
              <svg 
                className="w-6 h-6 text-white/40 animate-bounce" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                style={{
                  animationDuration: '2s',
                  animationIterationCount: 'infinite'
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <span className="text-white/30 text-xs mt-1 whitespace-nowrap">scroll to explore</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Overview Description + Key Highlights - CMS Driven */}
      <div className="mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Side - Description Box (Half Width) */}
        <div 
          className="px-4 py-3 rounded-2xl text-sm text-white/80 leading-relaxed"
          style={{ 
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
          }}
        >
          {/* CMS Content: experience.content.overview.description */}
          {experience.content?.overview?.description || 
           `From the sweeping savannahs of the Mara to the quiet coastline of Lamu, ${experience.title} offers big game safaris, private conservancies, rich Swahili culture, and fly-in access to remote, luxury camps.`
          }
        </div>

        {/* Right Side - CMS-Driven Key Highlight Cards */}
        <div className="grid grid-cols-3 gap-3">
          {highlights.length > 0 ? (
            highlights.slice(0, 3).map((highlight) => (
              <div 
                key={highlight.id}
                className="relative p-4 rounded-xl text-center overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                  minHeight: '140px'
                }}
              >
                {/* Background Image with Overlay */}
                {highlight.image && (
                  <div 
                    className="absolute inset-0 rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{
                      backgroundImage: `url(${highlight.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    {/* Dark overlay for text readability */}
                    <div 
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)'
                      }}
                    />
                  </div>
                )}

                {/* Content - positioned over image */}
                <div className="relative z-10 flex flex-col justify-end h-full">
                  <h4 className="text-sm font-semibold mb-2 leading-tight" style={{ color: '#FCEDED' }}>
                    {highlight.title}
                  </h4>
                  <p className="text-xs leading-relaxed" style={{ color: 'rgba(252, 237, 237, 0.7)' }}>
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))
          ) : (
            // Fallback if no highlights exist in CMS
            <>
              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: '#FCEDED' }}>Great Migration</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(252, 237, 237, 0.7)' }}>
                  Witness 2 million wildebeest cross the Mara River
                </p>
              </div>

              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: '#FCEDED' }}>Private Conservancies</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(252, 237, 237, 0.7)' }}>
                  Exclusive access with no crowds, night drives
                </p>
              </div>

              <div 
                className="p-4 rounded-xl text-center"
                style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <h4 className="text-sm font-semibold mb-2" style={{ color: '#FCEDED' }}>Fly-in Luxury</h4>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(252, 237, 237, 0.7)' }}>
                  Helicopter between camps in under 30 minutes
                </p>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Interactive Experiences Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left - Expandable Grid */}
        <div className="h-96">
          <ExpandableGrid />
        </div>
        
        {/* Right - Map */}
        <div className="space-y-4">
          <KenyaMap />
        </div>
      </div>
    </div>
  );
};

export default DestinationOverview;