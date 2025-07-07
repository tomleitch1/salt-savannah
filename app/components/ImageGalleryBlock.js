"use client";

import React, { useState } from 'react';

const ImageGalleryBlock = ({ section }) => {
  const [selectedDestination, setSelectedDestination] = useState(0);
  const content = section.content || {};
  
  // Check both old and new data structures for compatibility
  const destinations = content.destinations || section.images || [];

  if (!destinations.length) {
    return (
      <div className="text-center py-8 text-[#FAE1D8]/60">
        <span className="text-2xl mb-2 block">🖼️</span>
        <p>No destinations available</p>
      </div>
    );
  }

  const currentDestination = destinations[selectedDestination] || destinations[0];

  return (
    <div className="space-y-6">
      {/* Main Featured Image */}
      <div 
        className="relative rounded-2xl overflow-hidden h-64 md:h-80 group cursor-pointer"
        style={{
          backgroundImage: `url(${currentDestination.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.7) 100%)'
          }}
        />
        
        {/* Featured content */}
        <div className="absolute bottom-6 left-6 right-6">
          <h3 className="text-[#FAE1D8] text-2xl font-bold mb-2">
            {currentDestination.title || currentDestination.label}
          </h3>
          <p className="text-[#FAE1D8]/90 text-sm mb-4 leading-relaxed">
            {currentDestination.description}
          </p>
          
          {currentDestination.link && (
            <button 
              onClick={() => window.open(currentDestination.link, '_blank')}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{
                background: 'rgba(203, 213, 255, 0.2)',
                backdropFilter: 'blur(15px)',
                border: '1px solid rgba(203, 213, 255, 0.3)',
              }}
            >
              <span className="text-[#FAE1D8]">Explore {currentDestination.label}</span>
              <svg className="w-4 h-4 text-[#FAE1D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          )}
        </div>

        {/* Navigation arrows */}
        {destinations.length > 1 && (
          <>
            <button
              onClick={() => setSelectedDestination((prev) => prev === 0 ? destinations.length - 1 : prev - 1)}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-5 h-5 text-[#FAE1D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={() => setSelectedDestination((prev) => prev === destinations.length - 1 ? 0 : prev + 1)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 hover:scale-110 opacity-0 group-hover:opacity-100"
              style={{
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
            >
              <svg className="w-5 h-5 text-[#FAE1D8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
      </div>

      {/* Destination Details */}
      {currentDestination.highlights && currentDestination.highlights.length > 0 && (
        <div 
          className="p-4 rounded-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.1)'
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h5 className="text-[#FAE1D8] font-semibold mb-2">Highlights</h5>
              <div className="flex flex-wrap gap-2">
                {currentDestination.highlights.map((highlight, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 text-[#FAE1D8]/80 border border-white/10"
                    style={{ backdropFilter: 'blur(5px)' }}
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
            
            {currentDestination.bestFor && currentDestination.bestFor.length > 0 && (
              <div>
                <h5 className="text-[#FAE1D8] font-semibold mb-2">Best For</h5>
                <div className="flex flex-wrap gap-2">
                  {currentDestination.bestFor.map((item, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 rounded-lg text-xs font-medium bg-white/10 text-[#FAE1D8]/80 border border-white/10"
                      style={{ backdropFilter: 'blur(5px)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Destination Selector Grid */}
      <div>
        <h4 className="text-[#FAE1D8] text-lg font-semibold mb-4">Browse Destinations</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {destinations.map((destination, index) => (
            <button
              key={index}
              onClick={() => setSelectedDestination(index)}
              className={`relative rounded-xl overflow-hidden h-20 transition-all duration-300 ${
                selectedDestination === index 
                  ? 'ring-2 ring-[#CBD5FF] scale-105' 
                  : 'hover:scale-105 opacity-80 hover:opacity-100'
              }`}
              style={{
                backgroundImage: `url(${destination.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Overlay */}
              <div 
                className="absolute inset-0"
                style={{
                  background: selectedDestination === index 
                    ? 'rgba(203, 213, 255, 0.3)' 
                    : 'rgba(0, 0, 0, 0.4)'
                }}
              />
              
              {/* Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[#FAE1D8] text-xs font-semibold text-center px-2">
                  {destination.label}
                </span>
              </div>
              
              {/* Selected indicator */}
              {selectedDestination === index && (
                <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-[#CBD5FF] shadow-lg" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div 
        className="p-4 rounded-2xl"
        style={{
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(250, 225, 216, 0.1)'
        }}
      >
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-2xl mb-1">🏞️</div>
            <div className="text-[#FAE1D8] text-lg font-semibold">{destinations.length}</div>
            <div className="text-[#FAE1D8]/70 text-xs">Destinations</div>
          </div>
          <div>
            <div className="text-2xl mb-1">🎯</div>
            <div className="text-[#FAE1D8] text-lg font-semibold">
              {currentDestination.highlights ? currentDestination.highlights.length : 0}+
            </div>
            <div className="text-[#FAE1D8]/70 text-xs">Experiences</div>
          </div>
          <div>
            <div className="text-2xl mb-1">⭐</div>
            <div className="text-[#FAE1D8] text-lg font-semibold">Premium</div>
            <div className="text-[#FAE1D8]/70 text-xs">Quality</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryBlock;