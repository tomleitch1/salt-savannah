"use client";

import React, { useState, useEffect } from 'react';

// Let's test each import individually
let MonthSelector;
let GuideTextBlock;
let ImageGalleryBlock;
let BookingBlock;

try {
  MonthSelector = require('./MonthSelector').default;
  console.log('MonthSelector imported successfully');
} catch (error) {
  console.error('MonthSelector import failed:', error);
  MonthSelector = () => <div className="text-red-400">MonthSelector import failed</div>;
}

try {
  GuideTextBlock = require('./GuideTextBlock').default;
  console.log('GuideTextBlock imported successfully');
} catch (error) {
  console.error('GuideTextBlock import failed:', error);
  GuideTextBlock = () => <div className="text-red-400">GuideTextBlock import failed</div>;
}

try {
  ImageGalleryBlock = require('./ImageGalleryBlock').default;
  console.log('ImageGalleryBlock imported successfully');
} catch (error) {
  console.error('ImageGalleryBlock import failed:', error);
  ImageGalleryBlock = () => <div className="text-red-400">ImageGalleryBlock import failed</div>;
}

try {
  BookingBlock = require('./BookingBlock').default;
  console.log('BookingBlock imported successfully');
} catch (error) {
  console.error('BookingBlock import failed:', error);
  BookingBlock = () => <div className="text-red-400">BookingBlock import failed</div>;
}

const GridCard = ({ section, isExpanded = false, onToggle, isFullWidth = false, onFullWidthToggle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  // Check window width to determine if full-width option should be available
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset hover state when expanded state changes
  useEffect(() => {
    if (isExpanded) {
      setIsHovered(false);
    }
  }, [isExpanded]);

  // Check if we should show full-width option (lg and above)
  const showFullWidthOption = windowWidth >= 1024; // lg breakpoint

  // Render appropriate content block based on type
  const renderExpandedContent = () => {
    console.log('Rendering content for type:', section.type, 'Component types:', {
      MonthSelector: typeof MonthSelector,
      GuideTextBlock: typeof GuideTextBlock,
      ImageGalleryBlock: typeof ImageGalleryBlock,
      BookingBlock: typeof BookingBlock
    });
    
    switch(section.type) {
      case 'text':
        return React.createElement(GuideTextBlock, { section });
      case 'seasonal':
        return React.createElement(MonthSelector, { section });
      case 'gallery':
        return React.createElement(ImageGalleryBlock, { section });
      case 'booking':
        return React.createElement(BookingBlock, { section });
      default:
        return (
          <div className="text-[#FAE1D8]">
            <p>Unknown content type: {section.type}</p>
            <p>{section.detail}</p>
          </div>
        );
    }
  };

  if (isExpanded) {
    // EXPANDED STATE - Full takeover
    return (
      <div 
        className="col-span-2 row-span-2 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
        style={{ 
          background: `${section.gradient}, rgba(0, 0, 0, 0.3)`,
          backgroundBlendMode: 'overlay',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Expanded Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h4 className="text-[#FAE1D8] text-xl font-semibold flex-shrink-0">{section.title}</h4>
          
          <div className="flex items-center gap-3">
            {/* Full Width Toggle Button - Only show on lg+ screens and when onFullWidthToggle is provided */}
            {showFullWidthOption && onFullWidthToggle && (
              <button 
                onClick={onFullWidthToggle}
                className="text-[#FAE1D8]/70 hover:text-[#FAE1D8] transition-all duration-300 flex-shrink-0 p-1 rounded hover:bg-white/10"
                title={isFullWidth ? "Exit full width" : "Expand to full width"}
              >
                <svg 
                  className={`w-5 h-5 transition-transform duration-300`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isFullWidth ? (
                    // Compress icon (arrows pointing inward)
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9V4.5M9 9H4.5M9 9L3.5 3.5M15 9h4.5M15 9V4.5M15 9l5.5-5.5M9 15v4.5M9 15H4.5M9 15l-5.5 5.5M15 15h4.5M15 15v4.5m0-4.5l5.5 5.5" />
                  ) : (
                    // Expand icon (arrows pointing outward)
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l4 4m12-4v4m0-4h-4m4 0l-4 4M4 16v4m0 0h4m-4 0l4-4m12 4l-4-4m4 4v-4m0 4h-4" />
                  )}
                </svg>
              </button>
            )}
            
            {/* Close Button */}
            <button 
              onClick={() => onToggle(section.id)}
              className="text-[#FAE1D8]/70 hover:text-[#FAE1D8] transition-all duration-300 flex-shrink-0 p-1 rounded hover:bg-white/10"
              title="Close"
            >
              <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Expanded Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ height: 'calc(100% - 80px)' }}>
          <div className="p-6">
            {renderExpandedContent()}
          </div>
        </div>
      </div>
    );
  }

  // COLLAPSED STATE - Show cover image with overlay
  return (
    <div 
      className="rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden h-full w-full relative group"
      style={{ 
        background: `${section.gradient}, rgba(0, 0, 0, 0.3)`,
        backgroundBlendMode: 'overlay',
        backdropFilter: 'blur(20px)',
        boxShadow: isHovered 
          ? '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)' 
          : '0 8px 32px rgba(0, 0, 0, 0.4)',
        transform: isHovered ? 'translateY(-2px) scale(1.01)' : 'translateY(0) scale(1)',
      }}
      onClick={() => onToggle(section.id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cover Image - Full Background */}
      <div 
        className="absolute inset-2 rounded-xl overflow-hidden"
        style={{
          backgroundImage: `url(${section.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-2 rounded-xl"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)',
            transition: 'background 200ms ease-in-out'
          }}
        />

        {/* Hover overlay */}
        <div 
          className="absolute inset-2 rounded-xl opacity-0 group-hover:opacity-100"
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            transition: 'opacity 200ms ease-in-out'
          }}
        />

        {/* Plus Icon with Glass Morphism */}
        <div 
          className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-300"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            transform: isHovered ? 'scale(1.1) rotate(15deg)' : 'scale(1) rotate(0deg)'
          }}
        >
          <svg 
            className="w-3 h-3 text-[#FAE1D8]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>

        {/* Content Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          {/* Always visible title */}
          <h4 className="text-[#FAE1D8] text-base font-semibold mb-2">{section.title}</h4>
          
          {/* Hover content */}
          {isHovered && (
            <div className="transition-all duration-300">
              <p className="text-[#FAE1D8]/90 text-sm leading-relaxed mb-3">
                {section.summary}
              </p>
              
              {/* Action hints based on type */}
              <div className="flex items-center gap-2 text-xs text-[#FAE1D8]/80">
                {section.type === 'seasonal' && (
                  <>
                    <span>📅</span>
                    <span>Interactive calendar</span>
                  </>
                )}
                {section.type === 'gallery' && (
                  <>
                    <span>🖼️</span>
                    <span>Browse destinations</span>
                  </>
                )}
                {section.type === 'text' && (
                  <>
                    <span>📖</span>
                    <span>Read full guide</span>
                  </>
                )}
                {section.type === 'booking' && (
                  <>
                    <span>✈️</span>
                    <span>Start planning</span>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GridCard;