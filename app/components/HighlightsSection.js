"use client";

import React, { useState } from 'react';

// Individual Highlight Card Component
const HighlightCard = ({ highlight, onAddToBoard, onExplore }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] cursor-pointer"
      style={{
        background: 'rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Section */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{
            backgroundImage: `url(${highlight.image})`,
          }}
        />
        
        {/* Image Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-300"
          style={{
            background: isHovered 
              ? 'rgba(0, 0, 0, 0.4)' 
              : 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 80%, rgba(0,0,0,0.7) 100%)'
          }}
        />

        {/* Tags Overlay */}
        <div className="absolute top-4 left-4">
          <div className="flex flex-wrap gap-2">
            {highlight.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium text-white"
                style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Content Overlay */}
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExplore(highlight);
                }}
                className="px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(203, 213, 255, 0.2)',
                  backdropFilter: 'blur(15px)',
                  border: '1px solid rgba(203, 213, 255, 0.3)',
                  color: '#FAE1D8'
                }}
              >
                🔍 Explore More
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-[#FAE1D8] text-xl font-semibold mb-3 leading-tight">
          {highlight.title}
        </h3>

        {/* Description */}
        <p className="text-[#FAE1D8]/80 text-sm leading-relaxed mb-6 line-clamp-3">
          {highlight.description}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToBoard(highlight);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: '#FAE1D8'
            }}
          >
            <span className="text-red-400">❤️</span>
            Add to Board
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onExplore(highlight);
            }}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105"
            style={{
              background: 'rgba(203, 213, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(203, 213, 255, 0.3)',
              color: '#FAE1D8'
            }}
          >
            <span>🔍</span>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Highlights Section Component
const HighlightsSection = ({ highlights = [] }) => {
  const handleAddToBoard = (highlight) => {
    console.log('Adding to board:', highlight.title);
    // TODO: Implement add to board functionality
  };

  const handleExplore = (highlight) => {
    console.log('Exploring:', highlight.title, 'Link:', highlight.link);
    // TODO: Implement navigation to detail page
  };

  if (!highlights || highlights.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-12">
      {/* Section Header */}
      <div className="mb-12 text-center">
        <h2 className="text-[#FAE1D8] text-3xl lg:text-4xl font-bold mb-4">
          Our Highlights
        </h2>
        <div 
          className="w-24 h-1 mx-auto rounded-full"
          style={{
            background: 'linear-gradient(90deg, #CBD5FF, #FAE1D8)'
          }}
        />
      </div>

      {/* Highlights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className="animate-fadeInUp"
            style={{
              animationDelay: `${index * 150}ms`,
              animationFillMode: 'both'
            }}
          >
            <HighlightCard
              highlight={highlight}
              onAddToBoard={handleAddToBoard}
              onExplore={handleExplore}
            />
          </div>
        ))}
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default HighlightsSection;