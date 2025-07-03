"use client"

import React, { useState } from 'react';

// Month Selector Component for Wildlife & Seasons
const MonthSelector = () => {
  const [selectedMonth, setSelectedMonth] = useState(7); // Start with August (index 7)

  const months = [
    { name: 'Jan', full: 'January', season: 'ok', description: 'Cool and dry season. Good for wildlife viewing with fewer crowds.' },
    { name: 'Feb', full: 'February', season: 'good', description: 'Excellent weather with calving season beginning in southern Serengeti.' },
    { name: 'Mar', full: 'March', season: 'good', description: 'Calving season peaks. Thousands of wildebeest give birth on short grass plains.' },
    { name: 'Apr', full: 'April', season: 'ok', description: 'Long rains begin. Fewer tourists but lush landscapes and great bird watching.' },
    { name: 'May', full: 'May', season: 'ok', description: 'Peak rain season. Budget-friendly travel with dramatic skies and green scenery.' },
    { name: 'Jun', full: 'June', season: 'good', description: 'Dry season begins. Great weather returns and wildlife concentrates around water.' },
    { name: 'Jul', full: 'July', season: 'best', description: 'Peak season starts. Great Migration begins crossing Mara River.' },
    { name: 'Aug', full: 'August', season: 'best', description: 'Peak Great Migration. Dramatic river crossings and excellent wildlife viewing.' },
    { name: 'Sep', full: 'September', season: 'best', description: 'Continued Migration activity. Perfect weather and peak game viewing.' },
    { name: 'Oct', full: 'October', season: 'good', description: 'Migration heads south. Short rains begin, bringing fresh vegetation.' },
    { name: 'Nov', full: 'November', season: 'good', description: 'Green season returns. Great for photography with dramatic lighting.' },
    { name: 'Dec', full: 'December', season: 'good', description: 'Festive season with good weather. Wildlife disperses across fresh grasslands.' }
  ];

  const getTemperature = (monthIndex, type) => {
    // Approximate temperatures for Kenya (Celsius)
    const temperatures = [
      { high: 26, low: 12 }, // Jan
      { high: 28, low: 13 }, // Feb  
      { high: 29, low: 16 }, // Mar
      { high: 26, low: 18 }, // Apr
      { high: 24, low: 16 }, // May
      { high: 24, low: 13 }, // Jun
      { high: 23, low: 11 }, // Jul
      { high: 24, low: 12 }, // Aug
      { high: 26, low: 13 }, // Sep
      { high: 28, low: 16 }, // Oct
      { high: 26, low: 17 }, // Nov
      { high: 25, low: 14 }, // Dec
    ];
    
    return temperatures[monthIndex][type];
  };

  const getSeasonColor = (season) => {
    switch (season) {
      case 'best': return 'linear-gradient(90deg, #10B981, #059669)'; // Green
      case 'good': return 'linear-gradient(90deg, #F59E0B, #D97706)'; // Amber  
      case 'ok': return 'linear-gradient(90deg, #6B7280, #4B5563)'; // Gray
      default: return 'linear-gradient(90deg, #6B7280, #4B5563)';
    }
  };

  const getVisibleMonths = () => {
    const visible = [];
    for (let i = -2; i <= 2; i++) {
      const index = (selectedMonth + i + 12) % 12;
      const opacity = Math.abs(i) === 2 ? 0.3 : Math.abs(i) === 1 ? 0.6 : 1;
      const scale = Math.abs(i) === 2 ? 0.8 : Math.abs(i) === 1 ? 0.9 : 1;
      visible.push({ ...months[index], index, opacity, scale, position: i });
    }
    return visible;
  };

  const navigateMonth = (direction) => {
    setSelectedMonth((prev) => (prev + direction + 12) % 12);
  };

  const currentMonth = months[selectedMonth];
  const visibleMonths = getVisibleMonths();

  return (
    <div className="space-y-6">
      {/* Month Navigation */}
      <div className="relative flex items-center justify-center">
        {/* Left Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateMonth(-1);
          }}
          className="absolute left-0 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-[#FAE1D8]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Month Display */}
        <div className="flex items-end justify-center space-x-4 mx-12">
          {visibleMonths.map((month, idx) => (
            <div 
              key={`${month.index}-${idx}`}
              className="flex flex-col items-center cursor-pointer transition-all duration-500 ease-out hover:scale-110"
              style={{ 
                opacity: month.opacity, 
                transform: `scale(${month.scale}) translateY(${Math.abs(month.position) * 2}px)`
              }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedMonth(month.index);
              }}
            >
              {/* Month Button */}
              <div 
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                  month.position === 0 
                    ? 'text-[#FAE1D8] bg-white/20 shadow-lg scale-110' 
                    : 'text-[#FAE1D8]/70 bg-white/5 hover:bg-white/10'
                }`}
              >
                {month.name}
              </div>
              
              {/* Season Indicator Pill */}
              <div 
                className="w-8 h-2 rounded-full mt-2 transition-all duration-300"
                style={{ 
                  background: getSeasonColor(month.season),
                  boxShadow: month.position === 0 ? '0 2px 8px rgba(0,0,0,0.3)' : 'none'
                }}
              />
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateMonth(1);
          }}
          className="absolute right-0 z-10 p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-white/10"
        >
          <svg className="w-5 h-5 text-[#FAE1D8]/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Month Details - Split Layout */}
      <div className="grid grid-cols-2 gap-6">
        {/* Left Side - Month Information */}
        <div 
          className="p-6 rounded-2xl transition-all duration-500 transform"
          style={{
            background: 'rgba(0, 0, 0, 0.3)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.1)'
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <h3 className="text-xl font-semibold text-[#FAE1D8]">{currentMonth.full}</h3>
            <div 
              className="px-3 py-1 rounded-full text-xs font-medium text-white"
              style={{ background: getSeasonColor(currentMonth.season) }}
            >
              {currentMonth.season.charAt(0).toUpperCase() + currentMonth.season.slice(1)}
            </div>
          </div>
          
          <p className="text-[#FAE1D8]/90 leading-relaxed">{currentMonth.description}</p>
        </div>

        {/* Right Side - Month Image and Temperature */}
        <div className="space-y-3">
          {/* Month Image - Taller */}
          <div 
            className="rounded-2xl overflow-hidden flex items-center justify-center h-40"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(250, 225, 216, 0.1)'
            }}
          >
            <div className="text-center text-[#FAE1D8]/60">
              <div className="text-4xl mb-3">
                {selectedMonth >= 5 && selectedMonth <= 9 ? '🦁' : 
                 selectedMonth >= 1 && selectedMonth <= 3 ? '🦓' : 
                 selectedMonth >= 10 || selectedMonth <= 0 ? '🌧️' : '🌿'}
              </div>
              <div className="text-sm font-medium mb-1">{currentMonth.full} in Kenya</div>
              <div className="text-xs opacity-60">📸 Seasonal Image Placeholder</div>
            </div>
          </div>

          {/* Temperature Card - Smaller */}
          <div 
            className="p-3 rounded-2xl"
            style={{
              background: 'rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(250, 225, 216, 0.1)'
            }}
          >
            <div className="text-center mb-2">
              <div className="text-xs font-medium text-[#FAE1D8]/80">Average</div>
            </div>
            
            <div className="flex items-center justify-between">
              {/* High Temperature */}
              <div className="flex flex-col items-center">
                <div className="text-xl mb-1">☀️</div>
                <div className="text-xs text-[#FAE1D8]/70 mb-1">High</div>
                <div className="text-base font-semibold text-[#FAE1D8]">
                  {getTemperature(selectedMonth, 'high')}°
                </div>
              </div>

              {/* Low Temperature */}
              <div className="flex flex-col items-center">
                <div className="text-xl mb-1">🌙</div>
                <div className="text-xs text-[#FAE1D8]/70 mb-1">Low</div>
                <div className="text-base font-semibold text-[#FAE1D8]">
                  {getTemperature(selectedMonth, 'low')}°
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual Grid Card Component - IMPROVED VERSION
const GridCard = ({ 
  id, 
  title, 
  content, 
  expandedContent,
  gradient,
  accentColor,
  isExpanded = false, 
  onToggle
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Reset hover state when expanded state changes
  React.useEffect(() => {
    if (isExpanded) {
      setIsHovered(false);
    }
  }, [isExpanded]);

  // Extract darker color from gradient for image placeholder
  const getDarkerImageColor = (gradient) => {
    if (gradient.includes('220, 38, 127')) return 'rgba(60, 10, 35, 0.95)'; // Pink -> Very dark pink
    if (gradient.includes('75, 85, 99')) return 'rgba(15, 20, 25, 0.95)'; // Gray -> Very dark gray  
    if (gradient.includes('101, 163, 13')) return 'rgba(20, 30, 5, 0.95)'; // Green -> Very dark green
    if (gradient.includes('79, 70, 229')) return 'rgba(25, 20, 80, 0.95)'; // Purple -> Very dark purple
    return 'rgba(10, 15, 20, 0.95)'; // Default very dark
  };

  if (isExpanded) {
    // EXPANDED STATE - Full takeover
    return (
      <div 
        className="col-span-2 row-span-2 rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden"
        style={{ 
          background: `${gradient}, rgba(0, 0, 0, 0.3)`,
          backgroundBlendMode: 'overlay',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6), 0 8px 24px rgba(0, 0, 0, 0.4)'
        }}
      >
        {/* Expanded Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h4 className="text-[#FAE1D8] text-xl font-semibold flex-shrink-0">{title}</h4>
          <button 
            onClick={() => onToggle(id)}
            className="text-[#FAE1D8]/70 hover:text-[#FAE1D8] transition-all duration-300 flex-shrink-0 ml-4"
          >
            <svg className="w-5 h-5 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </div>

        {/* Expanded Content */}
        <div className="flex-1 overflow-y-auto custom-scrollbar" style={{ height: 'calc(100% - 80px)' }}>
          <div className="p-6">
            {id === 3 ? (
              <MonthSelector />
            ) : (
              <div className="space-y-4">
                <p className="text-[#FAE1D8]/90 leading-relaxed break-words">{expandedContent}</p>
                <div className="grid grid-cols-2 gap-3 mt-6">
                  <div className="flex items-center gap-2 text-xs text-[#FAE1D8]/80">
                    <span>🎯</span><span>Expert Guidance</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#FAE1D8]/80">
                    <span>✨</span><span>Premium Access</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#FAE1D8]/80">
                    <span>🌍</span><span>Local Insights</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#FAE1D8]/80">
                    <span>📱</span><span>24/7 Support</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // NON-EXPANDED STATE - IMPROVED VERSION
  return (
    <div 
      className="rounded-2xl cursor-pointer transition-all duration-500 overflow-hidden h-full w-full p-2 relative group"
      style={{ 
        background: `${gradient}, rgba(0, 0, 0, 0.3)`,
        backgroundBlendMode: 'overlay',
        backdropFilter: 'blur(20px)',
        boxShadow: isHovered 
          ? '0 6px 20px rgba(0, 0, 0, 0.4), 0 2px 8px rgba(0, 0, 0, 0.2)' 
          : '0 8px 32px rgba(0, 0, 0, 0.4)',
        transform: isHovered ? 'translateY(-2px) scale(1.01)' : 'translateY(0) scale(1)',
      }}
      onClick={() => onToggle(id)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* IMAGE PLACEHOLDER - full height with matching margins */}
      <div 
        className="rounded-xl relative overflow-hidden"
        style={{
          height: 'calc(100% - 16px)', // Account for 8px margin top and bottom
          margin: '8px', // Equal margins on all sides
          background: getDarkerImageColor(gradient),
        }}
      >
        {/* Plus Icon with Glass Morphism - subtle animation */}
        <div 
          className="absolute top-2 right-2 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-200"
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

        {/* Hover Overlay with Expanded Text */}
        <div 
          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
            isHovered && !isExpanded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.1))',
          }}
        >
          <div className="absolute bottom-4 left-4 right-4">
            <h4 className="text-[#FAE1D8] text-base font-semibold mb-2">{title}</h4>
            <p className="text-[#FAE1D8]/90 text-sm leading-relaxed break-words">
              {content}
            </p>
          </div>
        </div>

        {/* Card Title Overlay - always visible when not hovered */}
        <div 
          className={`absolute bottom-4 left-4 transition-all duration-300 ${
            isHovered || isExpanded ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <h4 className="text-[#FAE1D8] text-base font-semibold">{title}</h4>
        </div>
      </div>
    </div>
  );
};

// Main Standalone ExpandableGrid Component
const ExpandableGrid = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const cardData = [
    {
      id: 1,
      title: "Explore the Regions",
      content: "Discover key locations across Kenya's diverse landscapes, from rolling savannahs to pristine coastlines.",
      expandedContent: "Each destination in Kenya offers unique experiences, from the rolling plains of the Maasai Mara to the pristine beaches of the coast. Use the interactive map to discover key locations, click on markers to learn about specific areas, and filter between savannah and coastal experiences.",
      gradient: "linear-gradient(135deg, rgba(220, 38, 127, 0.3), rgba(159, 18, 57, 0.35))",
      accentColor: "rgba(220, 38, 127, 0.2)"
    },
    {
      id: 2,
      title: "Plan Your Journey", 
      content: "Expert travel advisors craft perfect itineraries balancing wildlife, culture, and relaxation.",
      expandedContent: "Our expert travel advisors can help you combine multiple destinations into the perfect itinerary, balancing wildlife viewing, cultural experiences, and relaxation. Every journey is carefully crafted to maximize your time and create unforgettable memories.",
      gradient: "linear-gradient(135deg, rgba(75, 85, 99, 0.3), rgba(55, 65, 81, 0.35))",
      accentColor: "rgba(75, 85, 99, 0.2)"
    },
    {
      id: 3,
      title: "Wildlife & Seasons",
      content: "Understanding optimal timing for wildlife viewing and seasonal migration patterns.",
      expandedContent: "Understanding the best times to visit different regions is crucial for wildlife viewing. The Great Migration, calving seasons, and weather patterns all play a role in creating the perfect safari experience.",
      gradient: "linear-gradient(135deg, rgba(101, 163, 13, 0.3), rgba(54, 83, 20, 0.35))",
      accentColor: "rgba(101, 163, 13, 0.2)"
    },
    {
      id: 4,
      title: "Cultural Experiences",
      content: "Authentic encounters with local communities and traditional ceremonies.",
      expandedContent: "Beyond wildlife, Kenya offers rich cultural encounters with local communities, traditional ceremonies, and authentic interactions that provide deep insights into East African heritage and modern life.",
      gradient: "linear-gradient(135deg, rgba(79, 70, 229, 0.3), rgba(67, 56, 202, 0.35))",
      accentColor: "rgba(79, 70, 229, 0.2)"
    }
  ];

  const handleCardToggle = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="h-full">
      {/* Custom scrollbar styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .custom-scrollbar {
            scrollbar-width: thin;
            scrollbar-color: rgba(250, 225, 216, 0.3) transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          
          .custom-scrollbar::-webkit-scrollbar-track {
            background: transparent;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(250, 225, 216, 0.4);
            border-radius: 10px;
            border: none;
          }
          
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: rgba(250, 225, 216, 0.6);
          }
        `
      }} />
      
      {/* 2x2 Grid Container */}
      <div className={`grid grid-cols-2 gap-4 h-full transition-all duration-500 ${expandedCard ? 'grid-rows-1' : 'grid-rows-2'}`}>
        {expandedCard ? (
          // Show only expanded card
          cardData
            .filter(card => card.id === expandedCard)
            .map((card) => (
              <GridCard
                key={card.id}
                id={card.id}
                title={card.title}
                content={card.content}
                expandedContent={card.expandedContent}
                gradient={card.gradient}
                accentColor={card.accentColor}
                isExpanded={true}
                onToggle={handleCardToggle}
              />
            ))
        ) : (
          // Show all cards in 2x2 grid
          cardData.map((card) => (
            <GridCard
              key={card.id}
              id={card.id}
              title={card.title}
              content={card.content}
              expandedContent={card.expandedContent}
              gradient={card.gradient}
              accentColor={card.accentColor}
              isExpanded={false}
              onToggle={handleCardToggle}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ExpandableGrid;