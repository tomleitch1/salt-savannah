"use client";

import React from 'react';
import DestinationCards from './DestinationCards';

const TopCarousel = () => {
  return (
    <div 
      className="relative rounded-2xl lg:rounded-3xl overflow-hidden h-48 md:h-52 lg:h-64 xl:h-64 2xl:h-72 transform hover:scale-[1.02] transition-all duration-300"
      style={{
        background: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
      }}
    >
      {/* Glass effect */}
      <div 
        className="absolute inset-0 rounded-2xl lg:rounded-3xl"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 50%, rgba(255, 255, 255, 0.1) 100%)',
        }}
      />
      
      {/* Your original carousel content */}
      <div className="relative h-full grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 xl:gap-4 p-4 lg:p-3 xl:p-3">
        {/* Left side with tagline and buttons */}
        <div className="lg:col-span-5 flex flex-col justify-center items-center lg:items-start lg:pr-4 space-y-3 lg:space-y-4">
          <div className="w-full">
            <img 
              src="/Tagline.png" 
              alt="Salt & Savannah Tagline"
              className="w-full max-w-sm lg:max-w-full h-auto object-contain"
            />
          </div>
          <div className="flex justify-end gap-2 lg:gap-3 w-full max-w-sm lg:max-w-full">
            <button 
              className="group relative overflow-hidden rounded-2xl px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span className="relative text-white/80 group-hover:text-[#CBD5FF] transition-colors duration-300 flex items-center justify-center gap-2">
                <img 
                  src="/staricon.png" 
                  alt="Star" 
                  className="w-3 lg:w-4 xl:w-4 h-3 lg:h-4 xl:h-4"
                  style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(678%) hue-rotate(316deg) brightness(99%) contrast(96%)' }}
                />
                Begin Exploring
              </span>
            </button>
            <button 
              className="group relative overflow-hidden rounded-2xl px-3 lg:px-4 xl:px-5 py-2 lg:py-2.5 xl:py-3 text-xs lg:text-sm xl:text-base font-medium transition-all duration-300 hover:scale-105 whitespace-nowrap"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <span className="relative text-white/80 group-hover:text-[#CBD5FF] transition-colors duration-300 flex items-center justify-center gap-2">
                <img 
                  src="/phone.png" 
                  alt="Phone" 
                  className="w-3 lg:w-4 xl:w-4 h-3 lg:h-4 xl:h-4"
                  style={{ filter: 'brightness(0) saturate(100%) invert(89%) sepia(12%) saturate(678%) hue-rotate(316deg) brightness(99%) contrast(96%)' }}
                />
                Contact Us
              </span>
            </button>
          </div>
        </div>
        
        {/* Right side with destination cards */}
        <div className="lg:col-span-7 relative h-full">
          <div 
            className="absolute inset-0 rounded-xl lg:rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <DestinationCards />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCarousel;