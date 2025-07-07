"use client";

import React, { useState, useEffect } from 'react';
import TopCarousel from './TopCarousel';

const PageLayoutManager = ({ children }) => {
  const [windowWidth, setWindowWidth] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  // Window resize and scroll event handlers
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll calculation constants
  const navbarHeight = 80;
  const phase1End = 80;
  const phase2End = 300;

  const getPhase = () => {
    if (scrollY <= phase1End) return 1;
    if (scrollY <= phase2End) return 2;
    return 3;
  };

  const easeInOutCubic = (t) => {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  };

  const getCarouselPosition = () => {
    const phase = getPhase();
    if (phase === 1) {
      return { bottom: 32, opacity: 1, zIndex: 40, pointerEvents: 'auto' };
    } else if (phase === 2) {
      const progress = (scrollY - phase1End) / (phase2End - phase1End);
      const easedProgress = easeInOutCubic(progress);
      const startBottom = 32;
      const endBottom = windowHeight - navbarHeight + 50;
      const currentBottom = startBottom + (easedProgress * (endBottom - startBottom));
      return { bottom: currentBottom, opacity: 1, zIndex: 40, pointerEvents: 'auto' };
    } else {
      return { bottom: windowHeight + 100, opacity: 1, zIndex: 40, pointerEvents: 'none' };
    }
  };

  const getCollectionsPosition = () => {
    const phase = getPhase();
    if (phase === 1) {
      return { top: windowHeight + 20, height: 'auto', lockProgress: 0, overflow: 'visible' };
    } else if (phase === 2) {
      const progress = (scrollY - phase1End) / (phase2End - phase1End);
      const easedProgress = easeInOutCubic(progress);
      const startTop = windowHeight + 20;
      const endTop = navbarHeight + 20;
      const currentTop = startTop - (easedProgress * (startTop - endTop));
      return { top: currentTop, height: 'auto', lockProgress: 0, overflow: 'visible' };
    } else {
      const lockedTop = navbarHeight + 20;
      const maxHeight = windowHeight - lockedTop - 20;
      return { top: lockedTop, height: maxHeight, lockProgress: 1, overflow: 'hidden' };
    }
  };

  const carouselPos = getCarouselPosition();
  const collectionsPos = getCollectionsPosition();
  const isLocked = collectionsPos.lockProgress >= 1;

  return (
    <>
      {/* Debug info */}
      <div className="fixed top-4 left-4 z-50 bg-black/50 backdrop-blur-sm rounded px-2 py-1 text-xs text-[#CBD5FF]">
        {windowWidth}px • Phase: {getPhase()} • Scroll: {scrollY}
      </div>
      
      {/* Top Carousel - Using separate component */}
      <div 
        className="fixed left-0 right-0 px-4 lg:px-6 xl:px-8 transition-all duration-300 ease-out"
        style={{
          bottom: `${carouselPos.bottom}px`,
          opacity: carouselPos.opacity,
          zIndex: carouselPos.zIndex,
          pointerEvents: carouselPos.pointerEvents
        }}
      >
        <div className="max-w-7xl mx-auto">
          <TopCarousel />
        </div>
      </div>

      {/* Main Content Area */}
      <div 
        className="fixed left-0 right-0 z-30 px-4 lg:px-6 xl:px-8 transition-all duration-300 ease-out"
        style={{
          top: `${collectionsPos.top}px`,
          height: collectionsPos.height,
          overflow: collectionsPos.overflow
        }}
      >
        <div className={`max-w-7xl 2xl:max-w-[1600px] mx-auto ${isLocked ? 'h-full' : ''}`}>
          <div 
            className={`relative rounded-2xl lg:rounded-3xl ${isLocked ? 'h-full' : ''} transform hover:scale-[1.02] transition-all duration-300`}
            style={{
              background: 'rgba(0, 0, 0, 0.25)',
              backdropFilter: 'blur(20px)',
              border: 'none',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4), 0 8px 32px rgba(0, 0, 0, 0.3)',
              overflow: 'hidden'
            }}
          >
            {/* Pass layout props to children */}
            {React.cloneElement(children, {
              isLocked,
              collectionsPos,
              windowWidth,
              windowHeight,
              scrollY
            })}
          </div>
        </div>
      </div>

      {/* Spacer for scroll behavior */}
      <div className="h-[200vh] w-full relative z-10"></div>
    </>
  );
};

export default PageLayoutManager;