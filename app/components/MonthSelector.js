"use client"

import React, { useState } from 'react';

const MonthSelector = ({ section }) => {
  const [selectedMonth, setSelectedMonth] = useState(7); // Start with August (index 7)
  
  // Get destination from CMS content, fallback to Kenya
  const content = section?.content || {};
  const destination = content.destination || "Kenya";
  const highlights = content.highlights || [];

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
      {/* CMS Highlights Section */}
      {highlights.length > 0 && (
        <div 
          className="p-4 rounded-2xl"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(250, 225, 216, 0.1)'
          }}
        >
          <h4 className="text-[#FAE1D8] text-lg font-semibold mb-3">
            {destination} Wildlife Calendar Highlights
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-2 text-sm text-[#FAE1D8]/80">
                <span className="text-lg">✨</span>
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      )}

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
              <div className="text-sm font-medium mb-1">{currentMonth.full} in {destination}</div>
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
              <div className="text-xs font-medium text-[#FAE1D8]/80">Average Temperature</div>
            </div>
            
            <div className="flex items-center justify-between">
              {/* High Temperature */}
              <div className="flex flex-col items-center">
                <div className="text-xl mb-1">☀️</div>
                <div className="text-xs text-[#FAE1D8]/70 mb-1">High</div>
                <div className="text-base font-semibold text-[#FAE1D8]">
                  {getTemperature(selectedMonth, 'high')}°C
                </div>
              </div>

              {/* Low Temperature */}
              <div className="flex flex-col items-center">
                <div className="text-xl mb-1">🌙</div>
                <div className="text-xs text-[#FAE1D8]/70 mb-1">Low</div>
                <div className="text-base font-semibold text-[#FAE1D8]">
                  {getTemperature(selectedMonth, 'low')}°C
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Season Legend */}
      <div 
        className="p-4 rounded-2xl"
        style={{
          background: 'rgba(0, 0, 0, 0.25)',
          backdropFilter: 'blur(15px)',
          border: '1px solid rgba(250, 225, 216, 0.1)'
        }}
      >
        <h5 className="text-[#FAE1D8] font-semibold mb-3">Season Guide</h5>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="flex flex-col items-center">
            <div 
              className="w-6 h-2 rounded-full mb-2"
              style={{ background: getSeasonColor('best') }}
            />
            <div className="text-[#FAE1D8] text-sm font-semibold">Best</div>
            <div className="text-[#FAE1D8]/70 text-xs">Peak wildlife season</div>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-6 h-2 rounded-full mb-2"
              style={{ background: getSeasonColor('good') }}
            />
            <div className="text-[#FAE1D8] text-sm font-semibold">Good</div>
            <div className="text-[#FAE1D8]/70 text-xs">Excellent conditions</div>
          </div>
          <div className="flex flex-col items-center">
            <div 
              className="w-6 h-2 rounded-full mb-2"
              style={{ background: getSeasonColor('ok') }}
            />
            <div className="text-[#FAE1D8] text-sm font-semibold">Ok</div>
            <div className="text-[#FAE1D8]/70 text-xs">Budget-friendly</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonthSelector;