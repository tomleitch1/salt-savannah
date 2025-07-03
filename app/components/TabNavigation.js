"use client";

const TabNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-6">
      <button
        onClick={() => onTabChange('inspirations')}
        className={`text-xl lg:text-2xl font-medium transition-all duration-300 ${
          activeTab === 'inspirations' ? 'text-white' : 'text-white/50 hover:text-white/80'
        }`}
      >
        Inspirations
      </button>
      <button
        onClick={() => onTabChange('destinations')}
        className={`text-xl lg:text-2xl font-medium transition-all duration-300 ${
          activeTab === 'destinations' ? 'text-white' : 'text-white/50 hover:text-white/80'
        }`}
      >
        Destinations
      </button>
    </div>
  );
};

export default TabNavigation;