"use client"

import React, { useState, useEffect } from 'react';

const DestinationCards = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  // Simple destination data
  const destinations = [
    { id: 1, name: 'Kenya', description: 'Endless plains and incredible wildlife' },
    { id: 2, name: 'Seychelles', description: 'Paradise islands and pristine beaches' },
    { id: 3, name: 'Botswana', description: 'Untamed wilderness and exclusive safaris' },
    { id: 4, name: 'Tanzania', description: 'Serengeti plains and cultural heritage' },
    { id: 5, name: 'South Africa', description: 'Wine lands and diverse landscapes' },
    { id: 6, name: 'Madagascar', description: 'Unique wildlife and pristine nature' }
  ];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Simple card count based on screen size
  const getCardCount = () => {
    if (windowWidth >= 1536) return 3; // 2XL: 3 cards (as you set it)
    if (windowWidth >= 1024) return 3; // LG+: 3 cards
    return 1; // Mobile: 1 card
  };

  // Simple visible cards - just show cards starting from current index
  const getVisibleCards = () => {
    const cardCount = getCardCount();
    const cards = [];
    
    for (let i = 0; i < cardCount; i++) {
      const index = (currentCardIndex + i) % destinations.length;
      cards.push({
        ...destinations[index],
        isMain: i === 0, // First card is main
        position: i
      });
    }
    return cards;
  };

  const nextCard = () => {
    setCurrentCardIndex((prev) => (prev + 1) % destinations.length);
  };

  const prevCard = () => {
    setCurrentCardIndex((prev) => (prev - 1 + destinations.length) % destinations.length);
  };

  return (
    <div className="relative h-full p-2">
      
      {/* Simple Cards Display with gentle transitions */}
      <div className="relative h-full overflow-hidden rounded-lg">
        
        {/* Cards Container - Same as before but with transition and bottom margin */}
        <div 
          className="flex items-center gap-4 justify-center px-4 transition-all duration-500 ease-out mb-16"
          style={{
            height: 'calc(100% - 80px)',
            minHeight: windowWidth >= 1536 ? '240px' : '200px',
          }}
        >
          {getVisibleCards().map((destination) => (
            <div 
              key={`${destination.id}-${currentCardIndex}`}
              className="relative rounded-lg overflow-hidden cursor-pointer group transition-all duration-500 hover:scale-105"
              style={{
                // Same sizing as before
                width: destination.isMain 
                  ? (windowWidth >= 1536 ? '450px' : '300px')
                  : (windowWidth >= 1536 ? '350px' : '240px'),
                height: destination.isMain 
                  ? (windowWidth >= 1536 ? '225px' : '180px')
                  : (windowWidth >= 1536 ? '175px' : '150px'),
                backgroundColor: `hsl(${destination.id * 60}, 70%, 60%)`,
              }}
              onClick={() => {
                if (!destination.isMain) {
                  setCurrentCardIndex((currentCardIndex + destination.position) % destinations.length);
                }
              }}
            >
              {/* Enhanced placeholder background with hover zoom */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60 transition-transform duration-500 group-hover:scale-110" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h3 className={`font-light mb-1 ${
                  destination.isMain ? 'text-xl' : 'text-lg'
                }`}>
                  {destination.name}
                </h3>
                {destination.isMain && (
                  <p className="text-sm text-white/80">
                    {destination.description}
                  </p>
                )}
              </div>

              {/* Explore icon - appears on hover */}
              <div className="absolute top-3 right-3 w-8 h-8 bg-black/40 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
                <span className="text-white text-sm">🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Enhanced Dots with subtle morphing */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/30 backdrop-blur-sm rounded-full px-3 py-2">
        {destinations.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentCardIndex(index)}
            className={`rounded-full transition-all duration-400 ${
              index === currentCardIndex 
                ? 'bg-[#CBD5FF] shadow-lg' 
                : 'bg-white/40 hover:bg-white/60 hover:scale-125'
            }`}
            style={{
              width: index === currentCardIndex ? '24px' : '8px',
              height: '8px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default DestinationCards;